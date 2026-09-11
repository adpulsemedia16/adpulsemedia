import siteDataJson from '../data/site.json';
import { NavItem, MetricStat, IndustryItem, PageContent } from "@/types";

const siteData = siteDataJson as any;

export const siteConfig = siteData.siteConfig as {
  name: string;
  shortName: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  location: any;
  contact: any;
  social: any;
  navItems: NavItem[];
  primaryCta: any;
};
export const businessMetrics: MetricStat[] = siteData.businessMetrics;
export const industries: IndustryItem[] = siteData.industries;
export const pages: PageContent = siteData.pages;
