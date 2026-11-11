import type { Metadata } from "next";
import { Barlow, Roboto } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/shared/BackToTop";
import { ViewMotionProvider } from "@/components/motion/ViewMotionProvider";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { companyData } from "@/data/company";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dtsolutions.pk"),
  title: {
    default: "DT Solutions | Premium Software, Websites & Automation for Global Enterprises",
    template: "%s | DT Solutions",
  },
  description:
    "DT Solutions builds enterprise websites, custom software, executive dashboards, and AI automation systems for enterprises that want practical digital growth.",
  applicationName: companyData.legalName,
  keywords: [
    "software engineering company",
    "enterprise web development",
    "business automation",
    "AI automation",
    "custom software development",
    "dashboards and portals",
    "DT Solutions",
    "dtsolutions.pk",
    "bpay Balochistan",
    "Pakistan software house",
  ],
  authors: [{ name: companyData.legalName, url: "https://dtsolutions.pk" }],
  creator: companyData.legalName,
  publisher: companyData.legalName,
  formatDetection: {
    email: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://dtsolutions.pk",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://dtsolutions.pk",
    title: "Premium software, websites, and automation for global enterprises",
    description:
      "DT Solutions builds websites, custom software, dashboards, and AI automation systems for enterprises that want practical digital growth.",
    siteName: companyData.legalName,
    images: [
      {
        url: "/images/orbit-glass.jpg",
        width: 1200,
        height: 630,
        alt: "DT Solutions - Enterprise Software & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium software, websites, and automation for global enterprises",
    description:
      "DT Solutions builds websites, custom software, dashboards, and AI automation systems for enterprises that want practical digital growth.",
    images: ["/images/orbit-glass.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.legalName,
    url: "https://dtsolutions.pk",
    logo: "https://dtsolutions.pk/dt-solutions-logo.png",
    email: companyData.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: companyData.country,
      addressLocality: "Pakistan",
    },
    sameAs: [companyData.socials.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      email: companyData.email,
      contactType: "customer support",
      availableLanguage: ["English", "Urdu"],
    },
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyData.legalName,
    url: "https://dtsolutions.pk",
    description: companyData.description,
  };

  return (
    <html lang="en" className={`${barlow.variable} ${roboto.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-800 selection:bg-primary selection:text-white">
        <SmoothScrollProvider>
          <ViewMotionProvider>
            <TopBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
          </ViewMotionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
