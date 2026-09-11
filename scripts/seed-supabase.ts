import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Load .env.local manually since this is a Node script, not Next.js runtime
dotenv.config({ path: path.join(__dirname, "../.env.local") });

// Note: Ensure ts-node or tsx can resolve the paths.
// Since we run this via tsx, it might complain about @/lib/supabase-admin if tsconfig paths aren't set up for tsx.
// So we use relative imports here.
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase credentials in .env.local");
}

const supabaseAdmin = createClient(supabaseUrl, supabaseKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const dataDir = path.join(__dirname, "../src/data");

function readJsonFile(filename: string) {
  const filePath = path.join(dataDir, filename);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

async function seed() {
  console.log("Starting database seed...");

  // 1. Site Config
  const siteData = readJsonFile("site.json");
  if (siteData) {
    const { error } = await supabaseAdmin.from("site_config").upsert({
      id: 1,
      site_config: siteData.siteConfig || {},
      business_metrics: siteData.businessMetrics || [],
      industries: siteData.industries || [],
    });
    if (error) console.error("Error seeding site_config:", error.message);
    else console.log("✅ Seeded site_config");
  }

  // 2. Services
  const services = readJsonFile("services.json");
  if (services && Array.isArray(services)) {
    const { error } = await supabaseAdmin.from("services").upsert(
      services.map((s: any) => ({
        id: s.id,
        title: s.title,
        tagline: s.tagline,
        short_description: s.shortDescription,
        icon_name: s.iconName,
        slug: s.slug,
        deliverables: s.deliverables,
        sub_services: s.subServices,
        benefits: s.benefits,
      }))
    );
    if (error) console.error("Error seeding services:", error.message);
    else console.log(`✅ Seeded ${services.length} services`);
  }

  // 3. Portfolio
  const portfolio = readJsonFile("portfolio.json");
  if (portfolio && Array.isArray(portfolio)) {
    const { error } = await supabaseAdmin.from("portfolio").upsert(
      portfolio.map((p: any) => ({
        id: p.id,
        title: p.title,
        client: p.client,
        category: p.category,
        services: p.services,
        thumbnail: p.thumbnail,
        short_description: p.shortDescription,
        result_metric: p.resultMetric,
        result_label: p.resultLabel,
        is_placeholder: p.isPlaceholder,
        slug: p.slug,
      }))
    );
    if (error) console.error("Error seeding portfolio:", error.message);
    else console.log(`✅ Seeded ${portfolio.length} portfolio items`);
  }

  // 4. Blog
  const blog = readJsonFile("blog.json");
  if (blog && Array.isArray(blog)) {
    const { error } = await supabaseAdmin.from("blog").upsert(
      blog.map((b: any) => ({
        slug: b.slug,
        title: b.title,
        summary: b.summary,
        content: b.content,
        category: b.category,
        published_at: b.publishedAt ? new Date(b.publishedAt).toISOString() : null,
        read_time: b.readTime,
        author: b.author,
        keywords: b.keywords,
      }))
    );
    if (error) console.error("Error seeding blog:", error.message);
    else console.log(`✅ Seeded ${blog.length} blog posts`);
  }

  // 5. FAQs
  const faqs = readJsonFile("faqs.json");
  if (faqs && Array.isArray(faqs)) {
    const { error } = await supabaseAdmin.from("faqs").upsert(
      faqs.map((f: any) => ({
        id: f.id,
        question: f.question,
        answer: f.answer,
        category: f.category,
      }))
    );
    if (error) console.error("Error seeding faqs:", error.message);
    else console.log(`✅ Seeded ${faqs.length} FAQs`);
  }

  // 6. Testimonials
  const testimonials = readJsonFile("testimonials.json");
  if (testimonials && Array.isArray(testimonials)) {
    const { error } = await supabaseAdmin.from("testimonials").upsert(
      testimonials.map((t: any) => ({
        id: t.id,
        name: t.name,
        role: t.role,
        company: t.company,
        location: t.location,
        quote: t.quote,
        rating: t.rating,
        avatar_url: t.avatarUrl,
        is_placeholder: t.isPlaceholder,
      }))
    );
    if (error) console.error("Error seeding testimonials:", error.message);
    else console.log(`✅ Seeded ${testimonials.length} testimonials`);
  }

  console.log("Seeding complete!");
}

seed().catch(console.error);
