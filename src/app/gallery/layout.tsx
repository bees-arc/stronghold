import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Gallery & Operations | Stronghold Security Sri Lanka",
  description:
    "Photo and field documentation of Stronghold Security deployments, tactical training drills, VIP motorcade protection, and high-tech command control centers in Sri Lanka.",
  keywords:
    "Security Guard Photos Sri Lanka, Tactical Training Gallery, VIP Bodyguards Colombo, Stronghold Security Operations",
  openGraph: {
    title: "Field Gallery & Operations | Stronghold Security Sri Lanka",
    description:
      "Visual documentation of active field operations, tactical escort details, and commercial security deployments.",
    url: "/gallery",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
