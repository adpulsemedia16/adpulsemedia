import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { Analytics } from "@/components/layout/Analytics";
import { generateOrganizationSchema } from "@/lib/seo";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Full-Service Digital Marketing Agency in Hyderabad`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "digital marketing agency Hyderabad",
    "real estate marketing agency Hyderabad",
    "lead generation agency Hyderabad",
    "website development company Hyderabad",
    "social media marketing Hyderabad",
    "drone shoots Hyderabad real estate",
    "Meta ads for real estate Hyderabad",
    "Google ads agency Hyderabad",
  ],
  authors: [{ name: "AdPulse Media" }],
  creator: "AdPulse Media",
  publisher: "AdPulse Media",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Digital Marketing & Lead Generation Agency Hyderabad`,
    description: siteConfig.description,
    images: [
      {
        url: "/brand/adpulse-logo-horizontal.svg",
        width: 1200,
        height: 630,
        alt: "AdPulse Media Digital Marketing Agency Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Growth Marketing & Lead Generation`,
    description: siteConfig.description,
    images: ["/brand/adpulse-logo-horizontal.svg"],
  },
  icons: {
    icon: "/brand/adpulse-logo-square.svg",
    shortcut: "/brand/adpulse-logo-square.svg",
    apple: "/brand/adpulse-logo-square.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${jakartaSans.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen selection:bg-brand-magenta selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
