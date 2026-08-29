import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Stronghold Security & Investigation | Intelligent Protection Ecosystems",
  description: "Redefining protection through intelligence, discipline, and technology. Providing military-grade physical security, executive protection, digital intelligence, and comprehensive electronic security solutions.",
  keywords: "Stronghold Security, Intelligence Security, Corporate Security Sri Lanka, Cyber Security, CCTV Surveillance, Close Protection, Armed Security, Executive Security",
  authors: [{ name: "Stronghold Security & Investigation (Pvt) Ltd" }],
  openGraph: {
    title: "Stronghold Security & Investigation | Intelligent Protection Ecosystems",
    description: "Redefining protection through intelligence, discipline, and technology. Providing military-grade physical security, digital intelligence, and electronic security solutions.",
    type: "website",
    locale: "en_US",
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
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent-navy selection:text-white">
        <CustomCursor />
        <div className="noise-overlay" />
        <main className="flex-grow flex flex-col relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
