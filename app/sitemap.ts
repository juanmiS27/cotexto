import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://cotexto.eu", changeFrequency: "yearly", priority: 1 }];
}
