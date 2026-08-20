import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyCTA } from "@/components/sections/StickyCTA";
import "./globals.css";

const SITE_URL = "https://sprayfoamrigrental.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SprayFoamRigRental — Spray Foam Rig Rental Guide: Rent vs. Buy, Costs & Equipment",
    template: "%s | SprayFoamRigRental",
  },
  description:
    "A Contractors Choice Agency resource on spray foam rig equipment rental: when renting makes sense, what's typically available, real cost factors, and what to check before you rent.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "SprayFoamRigRental",
    title: "SprayFoamRigRental — Spray Foam Rig Rental Guide",
    description:
      "When to rent vs. buy spray foam equipment, what's typically available, real cost factors, and what to check before you rent.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "SprayFoamRigRental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SprayFoamRigRental — Spray Foam Rig Rental Guide",
    description:
      "When to rent vs. buy spray foam equipment, what's typically available, and what to check before you rent.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SprayFoamRigRental",
  url: SITE_URL,
  description:
    "A Contractors Choice Agency resource explaining spray foam rig equipment rental — rent vs. buy considerations, typical equipment, real cost factors, and what to check before renting.",
  parentOrganization: {
    "@type": "Organization",
    name: "Contractors Choice Agency",
    url: "https://contractorschoiceagency.com",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-844-967-5247",
    email: "josh@contractorschoiceagency.com",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "12220 E Riggs Rd",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85249",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <StickyCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
