export interface NavItem {
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface MetricStat {
  id: string;
  value: string;
  label: string;
  description: string;
  isVerified: boolean;
}

export interface ServiceSubItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface ServiceGroup {
  id: string;
  title: string;
  shortDescription: string;
  tagline: string;
  iconName: string;
  slug: string;
  deliverables: string[];
  subServices: ServiceSubItem[];
  benefits: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: "real-estate" | "construction" | "websites" | "social-media" | "branding" | "video";
  services: string[];
  thumbnail: string;
  videoUrl?: string | null;
  shortDescription: string;
  resultMetric?: string;
  resultLabel?: string;
  isPlaceholder: boolean;
  slug: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
  avatarUrl?: string | null;
  isPlaceholder: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "general" | "real-estate" | "web-dev" | "pricing";
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  commonServices: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string[];
  category: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  keywords: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceRequired: string;
  budgetRange?: string;
  preferredContact?: "whatsapp" | "phone" | "email";
  message: string;
  honeypot?: string;
}

export interface PageContent {
  home: {
    hero: {
      heading: string;
      subheading: string;
    };
    about: {
      heading: string;
      text: string;
    };
  };
  about: {
    hero: {
      heading: string;
      subheading: string;
    };
    mission: {
      heading: string;
      text: string;
    };
  };
  contact: {
    hero: {
      heading: string;
      subheading: string;
    };
  };
}
