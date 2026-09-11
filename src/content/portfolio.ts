import portfolioJson from '../data/portfolio.json';
import { PortfolioProject } from "@/types";

export const portfolioCategories = [
  { id: "all", label: "All Projects" },
  { id: "real-estate", label: "Real Estate" },
  { id: "construction", label: "Construction" },
  { id: "websites", label: "Websites" },
  { id: "social-media", label: "Social Media & Ads" },
  { id: "video", label: "Video & Drone" },
  { id: "branding", label: "Branding" },
];

export const portfolioProjects: PortfolioProject[] = portfolioJson as PortfolioProject[];
