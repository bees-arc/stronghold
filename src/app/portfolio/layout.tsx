import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portfolio & Deployments | Stronghold Security",
  description:
    "Trusted by Sri Lanka's industry leaders including Spring & Summer, Anverally & Sons, Mihila Tex (Hirdaramani Group), Testa Bakehouse, Thaya Brothers, and Yara Foods.",
  keywords:
    "Stronghold Security Clients, Security Portfolio Sri Lanka, Spring and Summer Security, Anverally Tea Protection, Hirdaramani Mihila Tex Security",
  openGraph: {
    title: "Client Portfolio & Deployments | Stronghold Security Sri Lanka",
    description:
      "Showcase of trusted enterprise deployments across retail, export manufacturing, food & beverage, and corporate infrastructure.",
    url: "/portfolio",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
