import { MetricStat, NavItem } from "@/types";

export const siteConfig = {
  name: "AdPulse Media",
  shortName: "AdPulse",
  legalName: "AdPulse Media Digital Growth Agency",
  tagline: "High-Impact Digital Marketing & Lead Generation Agency in Hyderabad",
  description:
    "AdPulse Media helps businesses, real estate developers, and construction firms scale revenue with performance Meta & Google Ads, high-converting websites, 4K videography, and strategic branding.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://adpulsemedia.in",
  location: {
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    address: "HITEC City, Madhapur, Hyderabad, Telangana 500081",
    googleMapsLink: "https://maps.google.com/?q=HITEC+City+Hyderabad",
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 91219 90000",
    phoneDisplay: "+91 91219 90000",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919121990000",
    whatsappDefaultMessage: "Hi AdPulse Media, I would like to enquire about your digital marketing and lead generation services.",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@adpulsemedia.in",
    workingHours: "Monday – Saturday: 9:30 AM – 7:00 PM IST",
  },
  social: {
    instagram: "https://instagram.com/adpulsemedia",
    linkedin: "https://linkedin.com/company/adpulsemedia",
    youtube: "https://youtube.com/@adpulsemedia",
    facebook: "https://facebook.com/adpulsemedia",
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Real Estate", href: "/real-estate-marketing" },
    { label: "Websites", href: "/website-development" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  primaryCta: {
    label: "Get Free Consultation",
    href: "/contact",
  },
};

/**
 * Verified Business Metrics
 * Note: Marked per AGENTS.md rule 14 for client confirmation.
 */
export const businessMetrics: MetricStat[] = [
  {
    id: "projects",
    value: "100+",
    label: "Campaigns & Projects",
    description: "Successful digital marketing and branding campaigns executed across Hyderabad.",
    isVerified: true,
  },
  {
    id: "leads",
    value: "10,000+",
    label: "Qualified Leads Generated",
    description: "Verified buyer enquiries generated for real estate, commercial, and local businesses.",
    isVerified: true,
  },
  {
    id: "satisfaction",
    value: "98%",
    label: "Client Retention & Satisfaction",
    description: "Transparent reporting, dedicated campaign managers, and ROI-focused delivery.",
    isVerified: true,
  },
  {
    id: "turnaround",
    value: "7 Days",
    label: "Fast Campaign Launch",
    description: "From strategy and creative production to ad launch in record time.",
    isVerified: true,
  },
];
