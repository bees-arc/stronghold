import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Military Leadership & Discipline | Stronghold Security",
  description:
    "Founded and spearheaded by decorated military defense veterans. Discover Stronghold Security's history, doctrine of vigilance, executive leadership, and operational capabilities in Sri Lanka.",
  keywords:
    "About Stronghold Security, Military Security Leadership Sri Lanka, Air Vice Marshal Sampath Thuyacontha, Executive Protection Company Colombo",
  openGraph: {
    title: "About Stronghold Security & Investigation | Military-Grade Protection",
    description:
      "Spearheaded by decorated military defense veterans. Discover Stronghold Security's history, executive leadership, and operational capabilities in Sri Lanka.",
    url: "/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
