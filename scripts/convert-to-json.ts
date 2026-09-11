import fs from 'fs';
import path from 'path';

// Import all content
import { siteConfig, businessMetrics, industries } from '../src/content/site';
import { servicesData } from '../src/content/services';
import { portfolioProjects } from '../src/content/portfolio';
import { blogPosts } from '../src/content/blog';
import { faqsData } from '../src/content/faqs';
import { testimonialsData } from '../src/content/testimonials';

const dataDir = path.join(__dirname, '../src/data');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const writeJson = (filename: string, data: any) => {
  fs.writeFileSync(
    path.join(dataDir, filename),
    JSON.stringify(data, null, 2),
    'utf-8'
  );
  console.log(`Wrote ${filename}`);
};

writeJson('site.json', { siteConfig, businessMetrics, industries });
writeJson('services.json', servicesData);
writeJson('portfolio.json', portfolioProjects);
writeJson('blog.json', blogPosts);
writeJson('faqs.json', faqsData);
writeJson('testimonials.json', testimonialsData);

console.log('Conversion complete.');
