import type { MetadataRoute } from "next";
import { LANGS, PAGES, SITE_URL, getContent, pathFor, servicePath } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return LANGS.flatMap((lang) =>
    PAGES.map((page) => ({
      url: SITE_URL + pathFor(lang, page),
      lastModified: now,
      changeFrequency: (page === "legal" ? "yearly" : "monthly") as "yearly" | "monthly",
      priority: page === "home" ? (lang === "fr" ? 1 : 0.9) : page === "legal" ? 0.2 : 0.7,
      alternates: { languages: Object.fromEntries(LANGS.map((l) => [l, SITE_URL + pathFor(l, page)])) },
    })).concat(
      getContent(lang).services.map((s, i) => ({
        url: SITE_URL + servicePath(lang, s.slug),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: { languages: Object.fromEntries(LANGS.map((l) => [l, SITE_URL + servicePath(l, getContent(l).services[i].slug)])) },
      }))
    )
  );
}
