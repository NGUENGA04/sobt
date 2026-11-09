import type { MetadataRoute } from "next";
import { LANGS, PAGES, SITE_URL, pathFor } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return LANGS.flatMap((lang) =>
    PAGES.map((page) => ({
      url: SITE_URL + pathFor(lang, page),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page === "home" ? (lang === "fr" ? 1 : 0.9) : 0.7,
      alternates: { languages: Object.fromEntries(LANGS.map((l) => [l, SITE_URL + pathFor(l, page)])) },
    }))
  );
}
