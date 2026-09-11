import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const resource = searchParams.get("resource");

  if (!resource) {
    return NextResponse.json({ error: "Resource is required" }, { status: 400 });
  }

  try {
    const tableName = resource.replace(".json", "");
    
    // Site config requires special handling since it's a single row
    if (tableName === "site") {
      const { data, error } = await supabaseAdmin.from("site_config").select("*").eq("id", 1).single();
      if (error) throw error;
      return NextResponse.json({
        siteConfig: data.site_config,
        businessMetrics: data.business_metrics,
        industries: data.industries
      });
    }

    const { data, error } = await supabaseAdmin.from(tableName).select("*");
    if (error) throw error;
    
    // Transform snake_case columns back to camelCase for the frontend UI
    const transformCase = (item: any) => {
      const transformed: any = {};
      for (const key in item) {
        // e.g. short_description -> shortDescription
        const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
        transformed[camelKey] = item[key];
      }
      return transformed;
    };

    const formattedData = data.map(transformCase);
    return NextResponse.json(formattedData);
  } catch (error: any) {
    console.error(`Error reading ${resource}:`, error.message);
    return NextResponse.json({ error: "Failed to read resource" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { resource, data } = await request.json();

    if (!resource || !data) {
      return NextResponse.json(
        { error: "Resource and data are required" },
        { status: 400 }
      );
    }

    const tableName = resource.replace(".json", "");

    if (tableName === "site") {
      const { error } = await supabaseAdmin.from("site_config").upsert({
        id: 1,
        site_config: data.siteConfig,
        business_metrics: data.businessMetrics,
        industries: data.industries,
      });
      if (error) throw error;
    } else {
      // Transform camelCase to snake_case for Supabase
      const transformCase = (item: any) => {
        const transformed: any = {};
        for (const key in item) {
          const snakeKey = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
          transformed[snakeKey] = item[key];
        }
        return transformed;
      };

      const transformedData = Array.isArray(data)
        ? data.map(transformCase)
        : transformCase(data);

      const { error } = await supabaseAdmin.from(tableName).upsert(transformedData);
      if (error) throw error;
    }



    // Synchronize local JSON cache in development/writable environments
    try {
      const fs = await import("fs");
      const path = await import("path");
      const filePath = path.join(process.cwd(), "src/data", `${tableName}.json`);
      if (fs.existsSync(path.dirname(filePath))) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
      }
    } catch {
      // Ignored in read-only serverless lambdas
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Admin API Error:", error.message);
    return NextResponse.json(
      { error: "Failed to save content" },
      { status: 500 }
    );
  }
}
