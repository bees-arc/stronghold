import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tactical Command | 24/7 Security Hotline | Stronghold Security",
  description:
    "Request an immediate physical security assessment or consultation. Contact Stronghold Security & Investigation Headquarters in Colombo, Sri Lanka. 24/7 Rapid Response.",
  keywords:
    "Contact Security Company Sri Lanka, Security Quote Colombo, Hire Bodyguard Sri Lanka, Security Assessment Hotline Colombo",
  openGraph: {
    title: "Contact Tactical Command | Stronghold Security & Investigation",
    description:
      "Request an immediate physical security assessment or consultation. Headquarters in Colombo, Sri Lanka.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
