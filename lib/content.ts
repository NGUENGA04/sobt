export const LANGS = ["fr", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "fr";

export const PAGES = ["home", "services", "about", "method", "contact", "legal"] as const;
export type PageKey = (typeof PAGES)[number];
/** Pages shown in the header and footer navigation. */
export const NAV_PAGES = ["home", "services", "about", "method", "contact"] as const satisfies readonly PageKey[];

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://sobt-digital.vercel.app").replace(/\/$/, "");

export const PHONE = "+237676324031";
export const PHONE_DISPLAY = "+237 676 32 40 31";
export const WHATSAPP = "https://wa.me/237676324031";

/** URL segment of each page, per language. */
export const SLUGS: Record<Lang, Record<PageKey, string>> = {
  fr: { home: "", services: "services", about: "a-propos", method: "methode", contact: "contact", legal: "mentions-legales" },
  en: { home: "", services: "services", about: "about", method: "approach", contact: "contact", legal: "legal-notice" },
};

export function isLang(v: string): v is Lang {
  return (LANGS as readonly string[]).includes(v);
}

/** Public path of a page (French has no prefix, English lives under /en). */
export function pathFor(lang: Lang, page: PageKey): string {
  const slug = SLUGS[lang][page];
  if (lang === DEFAULT_LANG) return slug ? `/${slug}` : "/";
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

/** Public path of a service detail page. */
export function servicePath(lang: Lang, slug: string): string {
  return `${pathFor(lang, "services")}/${slug}`;
}

export function pageFromSlug(lang: Lang, slug: string): PageKey | undefined {
  return PAGES.find((p) => SLUGS[lang][p] === slug);
}

type Service = { slug: string; title: string; short: string; long: string; items: string[] };

const SERV: Record<Lang, Service[]> = {
  fr: [
    { slug: "analyse-de-donnees", title: "Analyse de données", short: "Tableaux de bord et indicateurs pour décider sur des faits.", long: "Nous transformons vos données brutes en indicateurs clairs : tableaux de bord, rapports automatisés et analyses ponctuelles pour piloter votre activité.", items: ["Tableaux de bord (Power BI, Looker Studio)", "Définition des KPI", "Rapports automatisés", "Analyses ad hoc"] },
    { slug: "ingenierie-de-donnees", title: "Ingénierie de données", short: "Des données fiables, centralisées et à jour.", long: "Nous concevons les pipelines qui collectent, nettoient et centralisent les données de toutes vos sources, pour une information fiable et disponible.", items: ["Pipelines ETL / ELT", "Entrepôts de données", "Qualité et gouvernance", "Migration de données"] },
    { slug: "automatisation-ia", title: "Automatisation IA", short: "Moins de tâches répétitives, plus de temps utile.", long: "Nous automatisons vos processus métier et intégrons l'IA là où elle apporte un gain réel : traitement de documents, assistants, prévisions.", items: ["Automatisation de workflows", "Assistants et chatbots", "Traitement de documents", "Modèles prédictifs"] },
    { slug: "integration-erp", title: "Intégration ERP", short: "Un système de gestion qui relie tous vos services.", long: "Nous déployons, paramétrons et connectons votre ERP à vos outils existants : comptabilité, stocks, ventes, ressources humaines.", items: ["Choix et déploiement (Odoo, SAP, Sage…)", "Paramétrage métier", "Connecteurs et API", "Formation des équipes"] },
    { slug: "developpement-web", title: "Développement web", short: "Sites, plateformes et applications sur mesure.", long: "Nous concevons et développons des sites vitrines, plateformes métier et applications web rapides, sécurisées et adaptées au mobile.", items: ["Sites vitrines", "Applications web métier", "API et back-end", "Maintenance et hébergement"] },
  ],
  en: [
    { slug: "data-analysis", title: "Data analysis", short: "Dashboards and KPIs to make fact-based decisions.", long: "We turn raw data into clear indicators: dashboards, automated reports and one-off analyses to steer your business.", items: ["Dashboards (Power BI, Looker Studio)", "KPI definition", "Automated reporting", "Ad hoc analysis"] },
    { slug: "data-engineering", title: "Data engineering", short: "Reliable, centralised, up-to-date data.", long: "We build the pipelines that collect, clean and centralise data from all your sources, so information is reliable and available.", items: ["ETL / ELT pipelines", "Data warehouses", "Data quality and governance", "Data migration"] },
    { slug: "ai-automation", title: "AI automation", short: "Fewer repetitive tasks, more useful time.", long: "We automate business processes and apply AI where it brings real gains: document processing, assistants, forecasting.", items: ["Workflow automation", "Assistants and chatbots", "Document processing", "Predictive models"] },
    { slug: "erp-integration", title: "ERP integration", short: "One management system connecting every department.", long: "We deploy, configure and connect your ERP to your existing tools: accounting, inventory, sales, human resources.", items: ["Selection and rollout (Odoo, SAP, Sage…)", "Business configuration", "Connectors and APIs", "Team training"] },
    { slug: "web-development", title: "Web development", short: "Custom websites, platforms and applications.", long: "We design and build websites, business platforms and web applications that are fast, secure and mobile-ready.", items: ["Company websites", "Business web apps", "APIs and back-end", "Maintenance and hosting"] },
  ],
};

const STEPS: Record<Lang, { title: string; text: string }[]> = {
  fr: [
    { title: "Diagnostic", text: "Nous écoutons vos besoins et analysons vos processus et vos données existantes." },
    { title: "Conception", text: "Nous proposons une solution, un planning et un budget clairs." },
    { title: "Réalisation", text: "Nous développons par étapes courtes, avec des démonstrations régulières." },
    { title: "Déploiement", text: "Mise en production, migration des données et formation de vos équipes." },
    { title: "Accompagnement", text: "Suivi, maintenance et évolutions selon vos besoins." },
  ],
  en: [
    { title: "Discovery", text: "We listen to your needs and review your processes and existing data." },
    { title: "Design", text: "We propose a solution with a clear schedule and budget." },
    { title: "Build", text: "We develop in short iterations with regular demos." },
    { title: "Launch", text: "Go-live, data migration and team training." },
    { title: "Support", text: "Monitoring, maintenance and improvements as you grow." },
  ],
};

const T = {
  fr: {
    nav: { home: "Accueil", services: "Services", about: "À propos", method: "Méthode", contact: "Contact", legal: "Mentions légales" },
    call: "Appeler", callFull: "Appeler le +237 676 32 40 31", waFull: "Écrire sur WhatsApp",
    heroEyebrow: "Data · IA · ERP · Web — Douala, Cameroun",
    heroTitle: "Le point de départ de votre transformation numérique.",
    heroSub: "SOBT Digital accompagne les entreprises et institutions au Cameroun et en Afrique : analyse de données, ingénierie de données, automatisation par l'IA, intégration ERP et développement web.",
    expTitle: "Cinq expertises, un seul partenaire.", allServices: "Toutes nos expertises",
    whyTitle: "Pourquoi SOBT Digital",
    why: [
      { title: "Basés à Douala", text: "Une équipe proche de vous, qui connaît le contexte des entreprises camerounaises." },
      { title: "De la donnée à l'application", text: "Un seul partenaire pour collecter, analyser, automatiser et livrer vos outils." },
      { title: "Cameroun et Afrique", text: "Nous intervenons sur site et à distance partout sur le continent." },
    ],
    methodTitle: "Notre méthode", seeMethod: "Découvrir la méthode",
    whoTitle: "Pour qui", who: ["PME", "Grandes entreprises", "Institutions & ONG", "Startups", "Secteur public"],
    servTitle: "Nos expertises", servSub: "Cinq métiers complémentaires pour faire de vos données un levier de croissance.",
    aboutLead: "SOBT signifie Start Of the Beginning. Comme le soleil qui se lève, chaque projet marque un nouveau départ pour nos clients.",
    aboutText: "SOBT Digital est une entreprise informatique basée à Douala. Nous aidons les organisations à exploiter leurs données, automatiser leurs processus et se doter d'outils numériques solides.",
    valuesTitle: "Nos valeurs",
    values: [
      { title: "Clarté", text: "Des explications simples et des livrables concrets." },
      { title: "Engagement", text: "Nous restons à vos côtés après la mise en production." },
      { title: "Exigence", text: "Des solutions fiables, documentées et sécurisées." },
    ],
    teamTitle: "L'équipe", teamText: "Data engineers, analystes, développeurs et consultants ERP réunis autour de vos projets.",
    teamLinkedin: "Profil LinkedIn de",
    zoneText: "Nous intervenons au Cameroun et dans toute l'Afrique, sur site ou à distance.",
    methodPageTitle: "Notre méthode", methodSub: "Une démarche en cinq étapes, transparente du premier échange au suivi.",
    contactTitle: "Contact & devis", contactSub: "Décrivez votre projet ou appelez-nous directement.",
    phone: "Téléphone", location: "Localisation", city: "Douala, Cameroun", zone: "Zone d'intervention", zoneShort: "Cameroun et Afrique",
    f: { name: "Nom", company: "Entreprise", phone: "Téléphone", email: "Email", service: "Service concerné", message: "Votre projet", send: "Envoyer la demande", thanks: "Merci, nous vous recontactons très vite.", waIntro: "Bonjour SOBT Digital, voici ma demande de devis :" },
    ctaTitle: "Un projet ? Parlons-en.", ctaSub: "Diagnostic gratuit et sans engagement : appelez-nous ou écrivez-nous sur WhatsApp.",
    footerTag: "Data, IA, ERP et web pour les entreprises et institutions au Cameroun et en Afrique.",
    menu: "Menu", switchLang: "Read in English",
    diag: {
      badge: "Offre de lancement",
      title: "Diagnostic gratuit de 45 minutes",
      text: "Un premier échange offert et sans engagement pour comprendre votre activité, faire le point sur vos outils et vos données, et repartir avec des recommandations concrètes.",
      points: ["Sur place à Douala ou en visioconférence", "État des lieux de vos outils et de vos données", "Priorités et recommandations concrètes", "Première estimation de budget et de délai"],
      cta: "Réserver mon diagnostic",
      waText: "Bonjour SOBT Digital, je souhaite réserver un diagnostic gratuit.",
      option: "Diagnostic gratuit (45 min)",
      short: "Diagnostic gratuit et sans engagement.",
    },
    sp: { problems: "Vous vous reconnaissez ?", deliver: "Ce que nous faisons", tools: "Outils et technologies", cases: "Exemples d'application", casesNote: "Des exemples de ce qu'il est possible de réaliser, selon votre secteur.", faq: "Questions fréquentes", others: "Nos autres expertises", more: "En savoir plus", back: "Toutes nos expertises" },
  },
  en: {
    nav: { home: "Home", services: "Services", about: "About", method: "Approach", contact: "Contact", legal: "Legal notice" },
    call: "Call", callFull: "Call +237 676 32 40 31", waFull: "Message us on WhatsApp",
    heroEyebrow: "Data · AI · ERP · Web — Douala, Cameroon",
    heroTitle: "The starting point of your digital transformation.",
    heroSub: "SOBT Digital helps companies and institutions across Cameroon and Africa with data analysis, data engineering, AI automation, ERP integration and web development.",
    expTitle: "Five disciplines, one partner.", allServices: "All services",
    whyTitle: "Why SOBT Digital",
    why: [
      { title: "Based in Douala", text: "A team close to you that understands the context of Cameroonian businesses." },
      { title: "From data to application", text: "One partner to collect, analyse, automate and deliver your tools." },
      { title: "Cameroon and Africa", text: "We work on site and remotely across the continent." },
    ],
    methodTitle: "How we work", seeMethod: "See our approach",
    whoTitle: "Who we work with", who: ["SMEs", "Large companies", "Institutions & NGOs", "Startups", "Public sector"],
    servTitle: "What we do", servSub: "Five complementary disciplines to turn your data into growth.",
    aboutLead: "SOBT stands for Start Of the Beginning. Like a rising sun, every project marks a new start for our clients.",
    aboutText: "SOBT Digital is an IT company based in Douala. We help organisations make use of their data, automate their processes and build solid digital tools.",
    valuesTitle: "Our values",
    values: [
      { title: "Clarity", text: "Simple explanations and concrete deliverables." },
      { title: "Commitment", text: "We stay by your side after go-live." },
      { title: "Rigour", text: "Reliable, documented and secure solutions." },
    ],
    teamTitle: "The team", teamText: "Data engineers, analysts, developers and ERP consultants working on your projects.",
    teamLinkedin: "LinkedIn profile of",
    zoneText: "We work in Cameroon and across Africa, on site or remotely.",
    methodPageTitle: "Our approach", methodSub: "A five-step process, transparent from first call to ongoing support.",
    contactTitle: "Contact & quote", contactSub: "Tell us about your project or call us directly.",
    phone: "Phone", location: "Location", city: "Douala, Cameroon", zone: "Coverage", zoneShort: "Cameroon and Africa",
    f: { name: "Name", company: "Company", phone: "Phone", email: "Email", service: "Service", message: "Your project", send: "Send request", thanks: "Thank you, we will get back to you shortly.", waIntro: "Hello SOBT Digital, here is my quote request:" },
    ctaTitle: "Have a project? Let's talk.", ctaSub: "Free, no-commitment assessment: call us or message us on WhatsApp.",
    footerTag: "Data, AI, ERP and web for companies and institutions in Cameroon and Africa.",
    menu: "Menu", switchLang: "Lire en français",
    diag: {
      badge: "Launch offer",
      title: "Free 45-minute assessment",
      text: "A free, no-commitment first conversation to understand your business, review your tools and data, and leave with concrete recommendations.",
      points: ["On site in Douala or by video call", "Review of your tools and data", "Priorities and concrete recommendations", "First estimate of budget and timeline"],
      cta: "Book my assessment",
      waText: "Hello SOBT Digital, I would like to book a free assessment.",
      option: "Free assessment (45 min)",
      short: "Free, no-commitment assessment.",
    },
    sp: { problems: "Sound familiar?", deliver: "What we do", tools: "Tools and technologies", cases: "Example applications", casesNote: "Examples of what can be built, depending on your sector.", faq: "Frequently asked questions", others: "Our other services", more: "Learn more", back: "All services" },
  },
};

export type Dict = (typeof T)["fr"];

/** Per-page <title> and meta description, written for search results. */
const META: Record<Lang, Record<PageKey, { title: string; description: string }>> = {
  fr: {
    home: { title: "SOBT Digital | Data, IA, ERP et développement web à Douala, Cameroun", description: "Entreprise informatique à Douala : analyse et ingénierie de données, automatisation par l'IA, intégration ERP (Odoo, SAP, Sage) et développement web pour les entreprises au Cameroun et en Afrique." },
    services: { title: "Nos expertises : data, IA, ERP et web", description: "Analyse de données, ingénierie de données, automatisation IA, intégration ERP et développement web : les cinq expertises de SOBT Digital à Douala, Cameroun." },
    about: { title: "À propos de SOBT Digital — Start Of the Beginning", description: "SOBT Digital est une entreprise informatique basée à Douala qui aide les organisations du Cameroun et d'Afrique à exploiter leurs données et à se digitaliser." },
    method: { title: "Notre méthode en cinq étapes", description: "Diagnostic, conception, réalisation, déploiement et accompagnement : une démarche transparente pour vos projets data, IA, ERP et web." },
    contact: { title: "Contact et devis gratuit — Douala, Cameroun", description: "Demandez un devis à SOBT Digital : appelez le +237 676 32 40 31 ou écrivez-nous sur WhatsApp. Interventions au Cameroun et en Afrique." },
    legal: { title: "Mentions légales et confidentialité", description: "Mentions légales du site SOBT Digital : éditeur, hébergeur, propriété intellectuelle, données personnelles et mesure d'audience." },
  },
  en: {
    home: { title: "SOBT Digital | Data, AI, ERP & web development in Douala, Cameroon", description: "IT company in Douala: data analysis and engineering, AI automation, ERP integration (Odoo, SAP, Sage) and web development for businesses in Cameroon and across Africa." },
    services: { title: "Our services: data, AI, ERP and web", description: "Data analysis, data engineering, AI automation, ERP integration and web development: the five disciplines of SOBT Digital in Douala, Cameroon." },
    about: { title: "About SOBT Digital — Start Of the Beginning", description: "SOBT Digital is an IT company based in Douala helping organisations in Cameroon and Africa make use of their data and go digital." },
    method: { title: "Our five-step approach", description: "Discovery, design, build, launch and support: a transparent process for your data, AI, ERP and web projects." },
    contact: { title: "Contact & free quote — Douala, Cameroon", description: "Request a quote from SOBT Digital: call +237 676 32 40 31 or message us on WhatsApp. We work across Cameroon and Africa." },
    legal: { title: "Legal notice and privacy", description: "Legal notice for the SOBT Digital website: publisher, host, intellectual property, personal data and audience measurement." },
  },
};

export function getContent(lang: Lang) {
  return {
    t: T[lang] as Dict,
    services: SERV[lang].map((s, i) => ({ ...s, num: "0" + (i + 1) })),
    steps: STEPS[lang].map((s, i) => ({ ...s, n: i + 1 })),
    meta: META[lang],
  };
}
