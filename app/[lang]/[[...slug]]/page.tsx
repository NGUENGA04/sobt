import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";
import { About, Contact, Cta, Home, Method, ServiceDetailView, Services } from "@/components/Views";
import { LANGS, PAGES, SLUGS, WHATSAPP, getContent, isLang, pageFromSlug, pathFor, servicePath, type Lang, type PageKey } from "@/lib/content";
import { buildJsonLd, buildMetadata, buildServiceJsonLd, buildServiceMetadata } from "@/lib/seo";

type Params = Promise<{ lang: string; slug?: string[] }>;
type Route = { lang: Lang; page: PageKey; service?: number };

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) => {
    const pages = PAGES.map((p) => ({ lang, slug: SLUGS[lang][p] ? [SLUGS[lang][p]] : [] }));
    const services = getContent(lang).services.map((s) => ({ lang, slug: [SLUGS[lang].services, s.slug] }));
    return [...pages, ...services];
  });
}

async function resolve(params: Params): Promise<Route> {
  const { lang, slug = [] } = await params;
  if (!isLang(lang) || slug.length > 2) notFound();
  if (slug.length === 2) {
    if (slug[0] !== SLUGS[lang].services) notFound();
    const service = getContent(lang).services.findIndex((s) => s.slug === slug[1]);
    if (service < 0) notFound();
    return { lang, page: "services", service };
  }
  const page = pageFromSlug(lang, slug[0] ?? "");
  if (!page) notFound();
  return { lang, page };
}

export async function generateMetadata({ params }: { params: Params }) {
  const r = await resolve(params);
  return r.service === undefined ? buildMetadata(r.lang, r.page) : buildServiceMetadata(r.lang, r.service);
}

const VIEWS = { home: Home, services: Services, about: About, method: Method, contact: Contact };

export default async function Page({ params }: { params: Params }) {
  const { lang, page, service } = await resolve(params);
  const c = { ...getContent(lang), lang };
  const other: Lang = lang === "fr" ? "en" : "fr";
  const altHref = service === undefined ? pathFor(other, page) : servicePath(other, getContent(other).services[service].slug);
  const jsonLd = service === undefined ? buildJsonLd(lang, page) : buildServiceJsonLd(lang, service);
  const View = VIEWS[page];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Intro />
      <a href="#contenu" className="skip">{lang === "fr" ? "Aller au contenu" : "Skip to content"}</a>
      <div className="shell">
        <Header lang={lang} page={page} t={c.t} altHref={altHref} />
        <main id="contenu" style={{ flex: 1 }}>
          {service === undefined ? <View {...c} /> : <ServiceDetailView {...c} index={service} />}
          {page !== "contact" && <Cta {...c} />}
        </main>
        <Footer lang={lang} t={c.t} />
        <a href={WHATSAPP} target="_blank" rel="noopener" className="float-wa">WhatsApp</a>
      </div>
    </>
  );
}
