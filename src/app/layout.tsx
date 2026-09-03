import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://strongholdsecurity.lk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Stronghold Security & Investigation | Protection Through Discipline & Intelligence",
  description: "Redefining protection through intelligence, discipline, and technology. Providing military-grade physical security, executive protection, and comprehensive electronic security solutions.",
  keywords: "Stronghold Security, Security Services Sri Lanka, Manned Guarding, Special Event Security, CCTV Surveillance, Close Protection, Armed Security",
  authors: [{ name: "Stronghold Security & Investigation (Pvt) Ltd" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" }
    ],
    shortcut: "/favicon.svg",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Stronghold Security & Investigation",
    description: "Redefining protection through intelligence, discipline, and technology. Military-grade physical & digital security.",
    url: siteUrl,
    siteName: "Stronghold Security & Investigation",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Stronghold Security & Investigation Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stronghold Security & Investigation",
    description: "Redefining protection through intelligence, discipline, and technology.",
    images: ["/logo.png"],
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
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent-navy selection:text-white font-sans">
        <CustomCursor />
        <div className="noise-overlay" />
        <main className="flex-grow flex flex-col relative z-10 font-sans">
          {children}
        </main>
      </body>
    </html>
  );
}
