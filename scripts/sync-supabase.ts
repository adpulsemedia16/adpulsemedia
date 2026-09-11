import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

// Load .env.local if present
dotenv.config({ path: path.join(__dirname, "../.env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const apiKey = supabaseServiceKey || supabaseAnonKey;

const dataDir = path.join(__dirname, "../src/data");

function writeJson(filename: string, data: any) {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

async function sync() {
  if (!supabaseUrl || !apiKey) {
    console.log("ℹ️  Skipping Supabase sync: Supabase credentials not found in environment. Using existing static data.");
    return;
  }

  const supabase = createClient(supabaseUrl, apiKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  console.log("🔄 Syncing latest content from Supabase to local static cache...");

  try {
    const [
      siteRes,
      servicesRes,
      portfolioRes,
      blogRes,
      faqsRes,
      testimonialsRes,
    ] = await Promise.all([
      supabase.from("site_config").select("*").limit(1).maybeSingle(),
      supabase.from("services").select("*"),
      supabase.from("portfolio").select("*"),
      supabase.from("blog").select("*"),
      supabase.from("faqs").select("*"),
      supabase.from("testimonials").select("*"),
    ]);

    // 1. Site config
    if (siteRes.data) {
      const siteJson = {
        siteConfig: siteRes.data.site_config || {},
        businessMetrics: siteRes.data.business_metrics || [],
        industries: siteRes.data.industries || [],
      };
      writeJson("site.json", siteJson);
      console.log("  ✓ Synced site.json");
    }

    // 2. Services
    if (servicesRes.data && servicesRes.data.length > 0) {
      const services = servicesRes.data.map((s: any) => ({
        id: s.id,
        title: s.title,
        tagline: s.tagline,
        shortDescription: s.short_description,
        iconName: s.icon_name,
        slug: s.slug,
        deliverables: s.deliverables || [],
        subServices: s.sub_services || [],
        benefits: s.benefits || [],
      }));
      writeJson("services.json", services);
      console.log(`  ✓ Synced services.json (${services.length} items)`);
    }

    // 3. Portfolio
    if (portfolioRes.data && portfolioRes.data.length > 0) {
      const portfolio = portfolioRes.data.map((p: any) => ({
        id: p.id,
        title: p.title,
        client: p.client,
        category: p.category,
        services: p.services || [],
        thumbnail: p.thumbnail,
        videoUrl: p.video_url ?? null,
        shortDescription: p.short_description,
        resultMetric: p.result_metric,
        resultLabel: p.result_label,
        isPlaceholder: p.is_placeholder,
        slug: p.slug,
      }));
      writeJson("portfolio.json", portfolio);
      console.log(`  ✓ Synced portfolio.json (${portfolio.length} items)`);
    }

    // 4. Blog
    if (blogRes.data && blogRes.data.length > 0) {
      const blog = blogRes.data.map((b: any) => ({
        slug: b.slug,
        title: b.title,
        summary: b.summary,
        content: b.content,
        category: b.category,
        publishedAt: b.published_at ? b.published_at.split("T")[0] : "2026-03-01",
        readTime: b.read_time,
        author: b.author,
        keywords: b.keywords || [],
      }));
      writeJson("blog.json", blog);
      console.log(`  ✓ Synced blog.json (${blog.length} posts)`);
    }

    // 5. FAQs
    if (faqsRes.data && faqsRes.data.length > 0) {
      const faqs = faqsRes.data.map((f: any) => ({
        id: f.id,
        question: f.question,
        answer: f.answer,
        category: f.category,
      }));
      writeJson("faqs.json", faqs);
      console.log(`  ✓ Synced faqs.json (${faqs.length} FAQs)`);
    }

    // 6. Testimonials
    if (testimonialsRes.data && testimonialsRes.data.length > 0) {
      const testimonials = testimonialsRes.data.map((t: any) => ({
        id: t.id,
        name: t.name,
        role: t.role,
        company: t.company,
        location: t.location,
        quote: t.quote,
        rating: t.rating,
        avatarUrl: t.avatar_url,
        isPlaceholder: t.is_placeholder,
      }));
      writeJson("testimonials.json", testimonials);
      console.log(`  ✓ Synced testimonials.json (${testimonials.length} testimonials)`);
    }

    console.log("✅ All content successfully synced from Supabase!");
  } catch (err: any) {
    console.warn("⚠️  Supabase sync encountered an error, keeping existing local cache:", err.message);
  }
}

sync();
