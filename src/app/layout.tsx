import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import JsonLd from "@/components/JsonLd";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? (process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`)
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://stronghold-kappa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Stronghold Security & Investigation | Protection Through Discipline & Intelligence",
  description: "Redefining protection through intelligence, discipline, and technology. Providing military-grade physical security, executive protection, loss prevention, and comprehensive electronic security solutions across Sri Lanka.",
  keywords: "Stronghold Security, Security Services Sri Lanka, Manned Guarding Colombo, VIP Close Protection, Special Event Security, CCTV Surveillance Sri Lanka, Armed Security Colombo, Loss Prevention Sri Lanka",
  authors: [{ name: "Stronghold Security & Investigation (Pvt) Ltd" }],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.avif", type: "image/avif" }
    ],
    shortcut: "/favicon.svg",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Stronghold Security & Investigation | Sri Lanka's Premier Defense Firm",
    description: "Redefining protection through intelligence, discipline, and military technology. Military-grade physical & digital security.",
    url: siteUrl,
    siteName: "Stronghold Security & Investigation",
    images: [
      {
        url: "/logo.png",
        width: 1440,
        height: 1440,
        type: "image/png",
        alt: "Stronghold Security & Investigation Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Stronghold Security & Investigation",
    description: "Redefining protection through intelligence, discipline, and technology in Sri Lanka.",
    images: ["/logo.png"],
  },
  other: {
    "geo.region": "LK-11",
    "geo.placename": "Colombo, Western Province, Sri Lanka",
    "geo.position": "6.9271;79.8612",
    "ICBM": "6.9271, 79.8612",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppinsFont.variable} font-sans h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent-navy selection:text-white font-sans"
        suppressHydrationWarning
      >
        <CustomCursor />
        <div className="noise-overlay" />
        <main className="flex-grow flex flex-col relative z-10 font-sans">
          {children}
        </main>
      </body>
    </html>
  );
}
