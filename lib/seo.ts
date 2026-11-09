import type { Metadata } from "next";
import { LANGS, PHONE, SITE_URL, WHATSAPP, getContent, pathFor, type Lang, type PageKey } from "./content";

export function buildMetadata(lang: Lang, page: PageKey): Metadata {
  const { meta } = getContent(lang);
  const m = meta[page];
  const url = pathFor(lang, page);
  const image = { url: `/${lang}/opengraph-image`, width: 1200, height: 630, alt: "SOBT Digital" };
  const languages: Record<string, string> = Object.fromEntries(LANGS.map((l) => [l, pathFor(l, page)]));
  languages["x-default"] = pathFor("fr", page);
  return {
    title: page === "home" ? { absolute: m.title } : m.title,
    description: m.description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      siteName: "SOBT Digital",
      title: m.title,
      description: m.description,
      locale: lang === "fr" ? "fr_CM" : "en_US",
      alternateLocale: lang === "fr" ? ["en_US"] : ["fr_CM"],
      images: [image],
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: [image.url] },
  };
}

/** schema.org data: the business itself, plus the page-specific parts. */
export function buildJsonLd(lang: Lang, page: PageKey) {
  const { t, services, steps, meta } = getContent(lang);
  const orgId = `${SITE_URL}/#organization`;
  const pageUrl = SITE_URL + (pathFor(lang, page) === "/" ? "/" : pathFor(lang, page));

  const org = {
    "@type": "ProfessionalService",
    "@id": orgId,
    name: "SOBT Digital",
    alternateName: "Start Of the Beginning",
    url: SITE_URL + "/",
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/${lang}/opengraph-image`,
    description: meta.home.description,
    telephone: PHONE,
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressLocality: "Douala", addressRegion: "Littoral", addressCountry: "CM" },
    areaServed: [{ "@type": "Country", name: "Cameroun" }, { "@type": "Place", name: "Africa" }],
    contactPoint: { "@type": "ContactPoint", telephone: PHONE, contactType: "customer service", availableLanguage: ["French", "English"] },
    sameAs: [WHATSAPP],
    knowsAbout: services.map((s) => s.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.servTitle,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.long, url: `${SITE_URL}${pathFor(lang, "services")}#${s.slug}` },
      })),
    },
  };

  const graph: object[] = [
    org,
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL + "/", name: "SOBT Digital", inLanguage: ["fr", "en"], publisher: { "@id": orgId } },
    { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: meta[page].title, description: meta[page].description, inLanguage: lang, isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": orgId } },
  ];

  if (page !== "home") {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.nav.home, item: SITE_URL + pathFor(lang, "home") },
        { "@type": "ListItem", position: 2, name: t.nav[page], item: pageUrl },
      ],
    });
  }
  if (page === "method") {
    graph.push({
      "@type": "HowTo",
      name: t.methodPageTitle,
      description: t.methodSub,
      step: steps.map((s) => ({ "@type": "HowToStep", position: s.n, name: s.title, text: s.text })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
