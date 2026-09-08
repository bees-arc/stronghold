import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? (process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
        ? process.env.NEXT_PUBLIC_SITE_URL
        : `https://${process.env.NEXT_PUBLIC_SITE_URL}`)
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://stronghold-kappa.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "PerplexityBot",
          "anthropic-ai",
          "Claude-Web",
          "Cohere-ai",
          "Bytespider",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
