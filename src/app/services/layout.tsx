import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Investigative Services | Stronghold Security Sri Lanka",
  description:
    "Explore our full suite of tier-one security solutions: Manned Guarding, VIP Close Protection, Electronic Article Surveillance (EAS), 24/7 CCTV Perimeter Defense, Special Events, and Corporate Investigations.",
  keywords:
    "Security Services Sri Lanka, Manned Guarding Colombo, VIP Close Protection Sri Lanka, Event Security Management, Electronic Surveillance, Corporate Investigations",
  openGraph: {
    title: "Security & Investigative Services | Stronghold Security Sri Lanka",
    description:
      "Elite manned guarding, executive close protection, electronic article surveillance, and corporate investigations across Sri Lanka.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
