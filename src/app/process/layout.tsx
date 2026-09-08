import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operational Methodology & Defense Protocols | Stronghold Security",
  description:
    "Explore Stronghold's 5-stage military defense protocol: Risk Assessment, Tailored Strategy, Elite Guard Deployment, 24/7 Tech Integration, and Continuous Quality Auditing.",
  keywords:
    "Security Process Sri Lanka, Risk Assessment Methodology, Security Protocols Colombo, Guard Deployment Protocols",
  openGraph: {
    title: "Operational Methodology & Defense Protocols | Stronghold Security",
    description:
      "A systematic, military-precision approach to comprehensive threat assessment and operational physical defense.",
    url: "/process",
    type: "website",
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
