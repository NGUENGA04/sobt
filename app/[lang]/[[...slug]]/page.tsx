import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";
import { About, Contact, Cta, Home, Method, Services } from "@/components/Views";
import { LANGS, PAGES, SLUGS, WHATSAPP, getContent, isLang, pageFromSlug, type Lang, type PageKey } from "@/lib/content";
import { buildJsonLd, buildMetadata } from "@/lib/seo";

type Params = Promise<{ lang: string; slug?: string[] }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) => PAGES.map((p) => ({ lang, slug: SLUGS[lang][p] ? [SLUGS[lang][p]] : [] })));
}

async function resolve(params: Params): Promise<{ lang: Lang; page: PageKey }> {
  const { lang, slug = [] } = await params;
  if (!isLang(lang) || slug.length > 1) notFound();
  const page = pageFromSlug(lang, slug[0] ?? "");
  if (!page) notFound();
  return { lang, page };
}

export async function generateMetadata({ params }: { params: Params }) {
  const { lang, page } = await resolve(params);
  return buildMetadata(lang, page);
}

const VIEWS = { home: Home, services: Services, about: About, method: Method, contact: Contact };

export default async function Page({ params }: { params: Params }) {
  const { lang, page } = await resolve(params);
  const c = { ...getContent(lang), lang };
  const View = VIEWS[page];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(lang, page)).replace(/</g, "\\u003c") }} />
      <Intro />
      <a href="#contenu" className="skip">{lang === "fr" ? "Aller au contenu" : "Skip to content"}</a>
      <div className="shell">
        <Header lang={lang} page={page} t={c.t} />
        <main id="contenu" style={{ flex: 1 }}>
          <View {...c} />
          {page !== "contact" && <Cta {...c} />}
        </main>
        <Footer lang={lang} t={c.t} />
        <a href={WHATSAPP} target="_blank" rel="noopener" className="float-wa">WhatsApp</a>
      </div>
    </>
  );
}
