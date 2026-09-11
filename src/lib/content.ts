import fs from 'fs';
import path from 'path';
import { ServiceGroup, PortfolioProject, BlogPost, FAQItem, TestimonialItem } from '@/types';

// The path to the data directory
const dataDir = path.join(process.cwd(), 'src/data');

function readJsonFile(filename: string) {
  try {
    const filePath = path.join(dataDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return null;
  }
}

export function getSiteConfig() {
  const data = readJsonFile('site.json');
  return data?.siteConfig || {};
}

export function getBusinessMetrics() {
  const data = readJsonFile('site.json');
  return data?.businessMetrics || [];
}

export function getIndustries() {
  const data = readJsonFile('site.json');
  return data?.industries || [];
}

export function getServices(): ServiceGroup[] {
  return readJsonFile('services.json') || [];
}

export function getPortfolio(): PortfolioProject[] {
  return readJsonFile('portfolio.json') || [];
}

export function getBlogPosts(): BlogPost[] {
  return readJsonFile('blog.json') || [];
}

export function getFaqs(): FAQItem[] {
  return readJsonFile('faqs.json') || [];
}

export function getTestimonials(): TestimonialItem[] {
  return readJsonFile('testimonials.json') || [];
}

// Write helper for the admin panel
export async function writeJsonFile(filename: string, data: any) {
  const filePath = path.join(dataDir, filename);
  await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
}
