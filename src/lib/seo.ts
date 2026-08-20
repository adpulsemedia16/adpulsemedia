import { siteConfig } from "@/content/site";
import { FAQItem, BlogPost, ServiceGroup } from "@/types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/adpulse-logo-square.svg`,
    image: `${siteConfig.url}/brand/adpulse-logo-horizontal.svg`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "HITEC City, Madhapur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.4483",
      longitude: "78.3748",
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
      siteConfig.social.facebook,
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "19:00",
      },
    ],
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(service: ServiceGroup) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "MarketingAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    description: service.shortDescription,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Hyderabad, Telangana, India",
    },
  };
}

export function generateArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/adpulse-logo-square.svg`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}
