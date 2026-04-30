import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dispensary.bot";
  const now = new Date();

  const seoPages = [
    {
      url: `${base}/seo/best-dispensary`,
      priority: 0.7,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${base}/seo/dispensary-deals`,
      priority: 0.7,
      changeFrequency: "daily" as const,
    },
    {
      url: `${base}/seo/cannabis-strains`,
      priority: 0.7,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${base}/seo/dispensary-hours`,
      priority: 0.7,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${base}/seo/dispensary-menu`,
      priority: 0.7,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${base}/seo/weed-near-me`,
      priority: 0.8,
      changeFrequency: "daily" as const,
    },
    {
      url: `${base}/seo/dispensary-near-me`,
      priority: 0.9,
      changeFrequency: "daily" as const,
    },
    {
      url: `${base}/seo/recreational-dispensary`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${base}/seo/medical-dispensary`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${base}/seo/first-time-at-dispensary`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  return [...seoPages].map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
