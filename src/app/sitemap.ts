import type { MetadataRoute } from "next";
import { fetchAnimals } from "@/lib/airtable";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://acaciavelds.com";

const BREEDS = ["dorper", "boer", "red-maasai", "ankole"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/catalogue`, changeFrequency: "daily", priority: 0.9 },
    ...BREEDS.map((breed) => ({
      url: `${BASE}/breeds/${breed}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  let animalRoutes: MetadataRoute.Sitemap = [];
  try {
    const animals = await fetchAnimals({});
    animalRoutes = animals.map((a) => ({
      url: `${BASE}/catalogue/${a.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch {
    // Airtable not configured at build time
  }

  return [...staticRoutes, ...animalRoutes];
}
