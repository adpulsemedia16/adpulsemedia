import { ServiceGroup } from "@/types";

export const servicesData: ServiceGroup[] = [
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & Paid Ads",
    tagline: "Performance campaigns designed for high ROAS and predictable lead volume.",
    shortDescription:
      "Target high-intent customers in Hyderabad with laser-focused Meta and Google Ads, organic local SEO, and multi-channel retargeting.",
    iconName: "TrendingUp",
    deliverables: [
      "Meta Ads (Facebook & Instagram Lead Generation)",
      "Google Search, Display & YouTube Performance Ads",
      "Local SEO & Google Business Profile Ranking",
      "High-Converting Retargeting & Custom Audiences",
    ],
    benefits: [
      "Lower Cost Per Qualified Lead (CPL)",
      "Laser-targeted geographic & demographic filtering",
      "Weekly transparent ROI and conversion reporting",
      "Continuous A/B testing of ad hooks and creatives",
    ],
    subServices: [
      {
        title: "Meta Lead Generation Ads",
        description: "Custom Instant Forms and landing page traffic funnels built specifically for Facebook & Instagram to capture high-intent buyers.",
        iconName: "Target",
      },
      {
        title: "Google Search & YouTube Ads",
        description: "Capture high-intent searches when prospects in Hyderabad are actively looking for your property, product, or service.",
        iconName: "Search",
      },
      {
        title: "Local SEO & Map Pack Optimization",
        description: "Dominate Hyderabad local search queries and rank in Google's Top 3 Map Pack for high-value transactional keywords.",
        iconName: "MapPin",
      },
      {
        title: "Social Media Management",
        description: "Engaging monthly content calendars, viral reels, carousel designs, and community management that build brand authority.",
        iconName: "Share2",
      },
    ],
  },
  {
    id: "website-development",
    slug: "website-development",
    title: "High-Converting Website Development",
    tagline: "Modern, blazing-fast, mobile-first websites engineered to turn visitors into paying leads.",
    shortDescription:
      "Custom business websites, real estate project landing pages, and corporate portals optimized for speed, SEO, and WhatsApp conversion.",
    iconName: "Layout",
    deliverables: [
      "Real Estate & Property Landing Pages",
      "Corporate & Business Websites",
      "E-Commerce & Service Portals",
      "Speed, Mobile & Core Web Vitals Optimization",
    ],
    benefits: [
      "Sub-second load times for maximum ad conversion",
      "Integrated WhatsApp chat and instant lead capture forms",
      "Clean semantic code structure for superior Google indexing",
      "Responsive across all mobile screen sizes (360px – 4K)",
    ],
    subServices: [
      {
        title: "Real Estate Landing Pages",
        description: "High-impact single-project pages with interactive floor plans, amenity galleries, location maps, and brochure downloads.",
        iconName: "Home",
      },
      {
        title: "Corporate & Agency Websites",
        description: "Professional corporate websites that establish instant credibility, showcase your portfolio, and drive inbound sales calls.",
        iconName: "Briefcase",
      },
      {
        title: "E-Commerce & Product Catalogs",
        description: "Secure, smooth online storefronts with seamless payment gateways, inventory sync, and WhatsApp checkout options.",
        iconName: "ShoppingBag",
      },
      {
        title: "Website Maintenance & Speed Optimization",
        description: "Ongoing security updates, SSL certificates, daily backups, and Core Web Vitals performance tuning.",
        iconName: "Zap",
      },
    ],
  },
  {
    id: "content-production",
    slug: "content-production",
    title: "Content & Video Production",
    tagline: "Cinematic drone footage, property walkthroughs, and viral short-form video reels.",
    shortDescription:
      "Capture attention and showcase project scale with professional on-location filming, licensed drone videography, and polished post-production.",
    iconName: "Video",
    deliverables: [
      "4K Drone & Aerial Property Shoots",
      "Architectural & Interior Walkthrough Videos",
      "Instagram Reels & YouTube Shorts Production",
      "Corporate Brand Stories & Founder Interviews",
    ],
    benefits: [
      "Showcase open plots, villas, and high-rise developments with grandeur",
      "Engage social media audiences with high-retention reel editing",
      "Full turnkey service: scripting, on-site filming, and sound design",
      "Optimized export formats for Meta Ads, YouTube, and WhatsApp sharing",
    ],
    subServices: [
      {
        title: "Drone Shoots & Aerial Mapping",
        description: "Stunning 4K aerial perspectives showcasing project elevation, approach roads, surrounding infrastructure, and layout boundaries.",
        iconName: "Compass",
      },
      {
        title: "Property Walkthroughs",
        description: "Smooth gimbal-stabilized interior and exterior walkthroughs highlighting luxury finishes, clubhouse amenities, and spatial design.",
        iconName: "Camera",
      },
      {
        title: "Viral Social Media Reels",
        description: "Fast-paced, hook-driven short-form reels with custom captions, sound effects, and animations that stop the scroll.",
        iconName: "Film",
      },
      {
        title: "Site Progress & Corporate Shoots",
        description: "Document construction milestones and corporate capabilities for investor updates and quarterly stakeholder presentations.",
        iconName: "Activity",
      },
    ],
  },
  {
    id: "branding",
    slug: "branding",
    title: "Brand Identity & Design",
    tagline: "Distinctive brand identities that build long-term trust and command premium pricing.",
    shortDescription:
      "Craft a memorable identity with bespoke logo design, brand guidelines, brochure collaterals, and high-impact social media creatives.",
    iconName: "Sparkles",
    deliverables: [
      "Logo Design & Comprehensive Brand Guidelines",
      "Brochures, Hoardings & Print Marketing Collaterals",
      "Social Media Ad Creatives & Brand Kits",
      "Corporate Stationery & Presentation Decks",
    ],
    benefits: [
      "Consistent visual identity across all online and offline touchpoints",
      "Stand out against competitors with bespoke typography and color palettes",
      "Print-ready vectors and digital-ready asset kits delivered",
      "Fast turnaround times with collaborative revision cycles",
    ],
    subServices: [
      {
        title: "Logo & Visual Identity",
        description: "Distinctive brand marks, color palettes, and typography guidelines tailored to your industry positioning.",
        iconName: "Feather",
      },
      {
        title: "Marketing Brochures & Collaterals",
        description: "Sales brochures, one-pagers, project catalogues, and physical hoardings that impress buyers on-site.",
        iconName: "BookOpen",
      },
      {
        title: "Ad Creatives & Social Kits",
        description: "High-converting ad banners, Instagram templates, and banner sets designed specifically for click-through rate.",
        iconName: "Layers",
      },
      {
        title: "Packaging & Corporate Decks",
        description: "Polished pitch decks, business cards, letterheads, and corporate presentation packages.",
        iconName: "FileText",
      },
    ],
  },
];
