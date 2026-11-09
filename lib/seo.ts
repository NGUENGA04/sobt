import type { Metadata } from "next";
import { LANGS, PHONE, SITE_URL, WHATSAPP, getContent, pathFor, servicePath, type Lang, type PageKey } from "./content";
import { SERVICE_DETAILS } from "./services";

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
      itemListElement: [
        ...services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.long, url: SITE_URL + servicePath(lang, s.slug) },
        })),
        { "@type": "Offer", price: "0", priceCurrency: "XAF", itemOffered: { "@type": "Service", name: t.diag.title, description: t.diag.text, url: SITE_URL + pathFor(lang, "contact") } },
      ],
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

export function buildServiceMetadata(lang: Lang, i: number): Metadata {
  const { services } = getContent(lang);
  const d = SERVICE_DETAILS[lang][i];
  const url = servicePath(lang, services[i].slug);
  const image = { url: `/${lang}/opengraph-image`, width: 1200, height: 630, alt: "SOBT Digital" };
  const languages: Record<string, string> = Object.fromEntries(LANGS.map((l) => [l, servicePath(l, getContent(l).services[i].slug)]));
  languages["x-default"] = languages.fr;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: { canonical: url, languages },
    openGraph: { type: "website", url, siteName: "SOBT Digital", title: d.metaTitle, description: d.metaDescription, locale: lang === "fr" ? "fr_CM" : "en_US", images: [image] },
    twitter: { card: "summary_large_image", title: d.metaTitle, description: d.metaDescription, images: [image.url] },
  };
}

export function buildServiceJsonLd(lang: Lang, i: number) {
  const { t, services } = getContent(lang);
  const s = services[i];
  const d = SERVICE_DETAILS[lang][i];
  const url = SITE_URL + servicePath(lang, s.slug);
  const base = buildJsonLd(lang, "services")["@graph"][0];
  return {
    "@context": "https://schema.org",
    "@graph": [
      base,
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.title,
        serviceType: s.title,
        description: d.intro,
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [{ "@type": "City", name: "Douala" }, { "@type": "Country", name: "Cameroun" }, { "@type": "Place", name: "Africa" }],
        hasOfferCatalog: { "@type": "OfferCatalog", name: s.title, itemListElement: d.deliverables.map((x) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: x.title, description: x.text } })) },
      },
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: d.metaTitle, description: d.metaDescription, inLanguage: lang, isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${url}#service` } },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.nav.home, item: SITE_URL + pathFor(lang, "home") },
          { "@type": "ListItem", position: 2, name: t.nav.services, item: SITE_URL + pathFor(lang, "services") },
          { "@type": "ListItem", position: 3, name: s.title, item: url },
        ],
      },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: d.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
}
