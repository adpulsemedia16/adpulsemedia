import { supabase } from "./supabase";
import { siteConfig, businessMetrics, industries } from "@/content/site";
import { servicesData } from "@/content/services";
import { portfolioProjects, portfolioCategories } from "@/content/portfolio";
import { blogPosts } from "@/content/blog";
import { faqsData } from "@/content/faqs";
import { testimonialsData } from "@/content/testimonials";

// Temporary fallback to local JSON/static data if Supabase fails or isn't seeded yet.
// In a full production deployment, we would remove the fallbacks.

export async function getSiteConfig() {
  try {
    const { data, error } = await supabase.from("site_config").select("*").eq("id", 1).single();
    if (error || !data) throw new Error("No site config found");
    return data.site_config;
  } catch (e) {
    return siteConfig;
  }
}

export async function getBusinessMetrics() {
  try {
    const { data, error } = await supabase.from("site_config").select("business_metrics").eq("id", 1).single();
    if (error || !data) throw new Error("No business metrics found");
    return data.business_metrics;
  } catch (e) {
    return businessMetrics;
  }
}

export async function getIndustries() {
  try {
    const { data, error } = await supabase.from("site_config").select("industries").eq("id", 1).single();
    if (error || !data) throw new Error("No industries found");
    return data.industries;
  } catch (e) {
    return industries;
  }
}

export async function getServices() {
  try {
    const { data, error } = await supabase.from("services").select("*");
    if (error || !data) throw new Error("No services found");
    return data.map(camelCaseKeys);
  } catch (e) {
    return servicesData;
  }
}

export async function getPortfolio() {
  try {
    const { data, error } = await supabase.from("portfolio").select("*");
    if (error || !data) throw new Error("No portfolio found");
    return data.map(camelCaseKeys);
  } catch (e) {
    return portfolioProjects;
  }
}

export async function getBlogPosts() {
  try {
    const { data, error } = await supabase.from("blog").select("*");
    if (error || !data) throw new Error("No blog found");
    return data.map(camelCaseKeys);
  } catch (e) {
    return blogPosts;
  }
}

export async function getFaqs() {
  try {
    const { data, error } = await supabase.from("faqs").select("*");
    if (error || !data) throw new Error("No faqs found");
    return data.map(camelCaseKeys);
  } catch (e) {
    return faqsData;
  }
}

export async function getTestimonials() {
  try {
    const { data, error } = await supabase.from("testimonials").select("*");
    if (error || !data) throw new Error("No testimonials found");
    return data.map(camelCaseKeys);
  } catch (e) {
    return testimonialsData;
  }
}

// Helpers
function camelCaseKeys(obj: any) {
  const newObj: any = {};
  for (const key in obj) {
    const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    newObj[camelKey] = obj[key];
  }
  return newObj;
}
