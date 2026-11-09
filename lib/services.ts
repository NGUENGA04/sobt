import type { Lang } from "./content";

/**
 * Detailed content of each service page (/services/<slug>).
 * Same order as the services list in content.ts: index i in "fr" is the translation of index i in "en".
 * The "useCases" are examples of what can be done, not client references.
 */
export type ServiceDetail = {
  metaTitle: string;
  metaDescription: string;
  intro: string;
  problems: string[];
  deliverables: { title: string; text: string }[];
  tools: string[];
  useCases: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

const FR: ServiceDetail[] = [
  {
    metaTitle: "Analyse de données et tableaux de bord Power BI à Douala",
    metaDescription: "Tableaux de bord Power BI et Looker Studio, définition des KPI et rapports automatisés pour les entreprises de Douala et du Cameroun. Diagnostic gratuit.",
    intro: "Vos chiffres existent déjà : dans Excel, dans votre logiciel de caisse, dans votre ERP ou vos fichiers clients. Nous les rassemblons et les transformons en tableaux de bord clairs, mis à jour automatiquement, pour que vous preniez vos décisions sur des faits plutôt que sur des impressions.",
    problems: [
      "Les rapports mensuels prennent des jours à préparer à la main dans Excel.",
      "Chaque service a ses propres chiffres, et ils ne concordent pas.",
      "Vous ne savez pas précisément quels produits, clients ou agences sont rentables.",
      "La direction attend des indicateurs fiables, mais personne n'a le temps de les produire.",
    ],
    deliverables: [
      { title: "Tableaux de bord", text: "Des tableaux de bord Power BI ou Looker Studio lisibles sur ordinateur et sur téléphone : ventes, marges, stocks, trésorerie, activité commerciale." },
      { title: "Définition des KPI", text: "Nous définissons avec vous les indicateurs qui comptent vraiment pour votre activité, avec une méthode de calcul claire et partagée." },
      { title: "Rapports automatisés", text: "Des rapports envoyés automatiquement chaque jour, semaine ou mois, sans ressaisie ni copier-coller." },
      { title: "Analyses ponctuelles", text: "Une étude ciblée pour répondre à une question précise : rentabilité d'une gamme, comportement des clients, saisonnalité, prévisions." },
    ],
    tools: ["Power BI", "Looker Studio", "Excel / Google Sheets", "SQL", "Python"],
    useCases: [
      { title: "Commerce et distribution", text: "Suivre en temps réel les ventes par point de vente, les ruptures de stock et les marges par produit." },
      { title: "Institutions et ONG", text: "Produire automatiquement les indicateurs de suivi d'un programme pour les rapports aux bailleurs." },
      { title: "Services financiers", text: "Visualiser l'évolution du portefeuille, des encaissements et des impayés par agence." },
    ],
    faq: [
      { q: "Faut-il déjà avoir des données propres pour commencer ?", a: "Non. Dans la plupart des cas, nous partons de fichiers Excel ou d'exports de logiciels existants. Le nettoyage et l'organisation des données font partie du travail." },
      { q: "Combien de temps faut-il pour un premier tableau de bord ?", a: "Un premier tableau de bord utile peut généralement être livré en quelques semaines, selon le nombre de sources de données. Le délai exact est précisé dans le devis après le diagnostic." },
      { q: "Mes équipes pourront-elles l'utiliser seules ?", a: "Oui. Nous formons vos équipes à la lecture et à la mise à jour des tableaux de bord, et nous restons disponibles pour les faire évoluer." },
    ],
  },
  {
    metaTitle: "Ingénierie de données : pipelines ETL et entrepôts de données au Cameroun",
    metaDescription: "Pipelines ETL / ELT, entrepôts de données, qualité et migration de données pour centraliser l'information de votre entreprise au Cameroun et en Afrique.",
    intro: "Une bonne analyse commence par des données fiables. Nous construisons l'infrastructure qui collecte automatiquement les données de vos différents outils, les nettoie et les centralise dans un seul endroit, à jour et sécurisé.",
    problems: [
      "Vos données sont dispersées entre plusieurs logiciels, fichiers et services.",
      "Les mêmes informations sont ressaisies plusieurs fois, avec des erreurs.",
      "Les exports manuels cassent dès qu'un fichier change de format.",
      "Vous changez de logiciel et devez récupérer l'historique sans rien perdre.",
    ],
    deliverables: [
      { title: "Pipelines ETL / ELT", text: "Des flux automatisés qui récupèrent les données de vos outils (ERP, CRM, caisse, fichiers, API) et les chargent à intervalles réguliers." },
      { title: "Entrepôt de données", text: "Une base centrale, organisée pour l'analyse, qui devient la source unique de vérité pour vos tableaux de bord et rapports." },
      { title: "Qualité et gouvernance", text: "Contrôles automatiques des doublons et des valeurs manquantes, règles de nommage, gestion des accès et documentation." },
      { title: "Migration de données", text: "Reprise de l'historique lors d'un changement de logiciel, avec vérification complète avant la bascule." },
    ],
    tools: ["SQL", "PostgreSQL", "BigQuery", "Python", "dbt", "Airflow"],
    useCases: [
      { title: "Entreprise multi-sites", text: "Centraliser chaque nuit les ventes et les stocks de plusieurs agences dans une base commune." },
      { title: "Changement d'ERP", text: "Migrer clients, articles et historique comptable de l'ancien logiciel vers le nouveau, sans perte." },
      { title: "Collecte terrain", text: "Rassembler automatiquement les données de formulaires mobiles dans une base exploitable." },
    ],
    faq: [
      { q: "Où sont hébergées les données ?", a: "Selon vos contraintes : sur vos propres serveurs ou dans le cloud. Nous vous conseillons lors du diagnostic en fonction de votre budget, de la sécurité et de la connectivité." },
      { q: "Est-ce adapté à une PME ?", a: "Oui. L'architecture est dimensionnée selon votre volume de données. Une PME n'a pas besoin de la même infrastructure qu'une grande entreprise, et nous commençons simple." },
      { q: "Que se passe-t-il si un flux tombe en panne ?", a: "Les flux sont surveillés et vous êtes alerté en cas d'erreur. Nous proposons un suivi et une maintenance après la mise en production." },
    ],
  },
  {
    metaTitle: "Automatisation et intelligence artificielle pour les entreprises au Cameroun",
    metaDescription: "Automatisation de workflows, chatbots, traitement de documents et modèles prédictifs : l'IA appliquée aux processus des entreprises à Douala et en Afrique.",
    intro: "Une partie de votre temps part dans des tâches répétitives : ressaisir des factures, répondre aux mêmes questions, relancer des clients, copier des données d'un outil à l'autre. Nous automatisons ces tâches et utilisons l'IA uniquement là où elle apporte un gain réel et mesurable.",
    problems: [
      "Vos équipes passent des heures à ressaisir des informations.",
      "Les clients posent toujours les mêmes questions sur WhatsApp ou par e-mail.",
      "Le traitement des factures, bons de commande ou dossiers est lent et source d'erreurs.",
      "Vous voulez anticiper vos ventes ou vos besoins en stock.",
    ],
    deliverables: [
      { title: "Automatisation de workflows", text: "Enchaînements automatiques entre vos outils : création de devis, relances, notifications, mise à jour des fichiers et des tableaux." },
      { title: "Assistants et chatbots", text: "Des assistants qui répondent aux questions fréquentes de vos clients ou de vos équipes, en français et en anglais, à partir de vos propres informations." },
      { title: "Traitement de documents", text: "Lecture et extraction automatiques des informations de factures, reçus, formulaires ou contrats." },
      { title: "Modèles prédictifs", text: "Prévisions de ventes, de demande ou de risque à partir de votre historique, pour mieux planifier." },
    ],
    tools: ["Python", "n8n / Make", "API d'IA générative", "OCR", "WhatsApp Business API"],
    useCases: [
      { title: "Service client", text: "Un assistant WhatsApp qui répond aux questions courantes et transmet les demandes complexes à un conseiller." },
      { title: "Comptabilité", text: "Extraire automatiquement les montants et fournisseurs des factures reçues pour préparer la saisie." },
      { title: "Commercial", text: "Relancer automatiquement les devis sans réponse et alerter le commercial au bon moment." },
    ],
    faq: [
      { q: "L'IA va-t-elle remplacer mes employés ?", a: "L'objectif est de supprimer les tâches répétitives pour que vos équipes se concentrent sur le travail à valeur ajoutée : le conseil, la relation client, la décision." },
      { q: "Mes données restent-elles confidentielles ?", a: "Oui. Nous choisissons les outils en fonction de la sensibilité de vos données et limitons ce qui est transmis à des services externes." },
      { q: "Par où commencer ?", a: "Par une tâche simple, fréquente et chronophage. Le diagnostic gratuit sert justement à identifier la meilleure première automatisation." },
    ],
  },
  {
    metaTitle: "Intégration ERP Odoo, SAP et Sage à Douala, Cameroun",
    metaDescription: "Choix, déploiement et paramétrage d'ERP (Odoo, SAP, Sage), connecteurs et formation des équipes pour les entreprises au Cameroun et en Afrique.",
    intro: "Un ERP relie tous vos services dans un seul système : ventes, achats, stocks, comptabilité, ressources humaines. Nous vous aidons à choisir la bonne solution, la paramétrer selon vos processus réels et la connecter à vos outils existants.",
    problems: [
      "Chaque service travaille avec son propre fichier ou logiciel.",
      "Les stocks affichés ne correspondent jamais à la réalité.",
      "La clôture comptable prend des semaines.",
      "Votre ERP actuel est mal paramétré ou sous-utilisé.",
    ],
    deliverables: [
      { title: "Choix de la solution", text: "Analyse de vos besoins et de votre budget pour choisir l'ERP adapté : Odoo, SAP Business One, Sage ou autre." },
      { title: "Déploiement et paramétrage", text: "Configuration selon vos processus métier, reprise des données existantes et tests avant la mise en service." },
      { title: "Connecteurs et API", text: "Connexion de l'ERP à vos autres outils : site e-commerce, caisse, banque, paiement mobile, tableaux de bord." },
      { title: "Formation des équipes", text: "Formation pratique de chaque utilisateur sur ses tâches quotidiennes, avec des supports simples." },
    ],
    tools: ["Odoo", "SAP Business One", "Sage", "API REST", "PostgreSQL"],
    useCases: [
      { title: "Négoce et distribution", text: "Gérer achats, stocks multi-dépôts, ventes et facturation dans un seul outil." },
      { title: "PME de services", text: "Relier devis, projets, temps passé, facturation et comptabilité." },
      { title: "Industrie légère", text: "Suivre la production, les matières premières et les coûts de revient." },
    ],
    faq: [
      { q: "Quel ERP choisir pour une PME camerounaise ?", a: "Cela dépend de votre activité, de votre budget et de vos contraintes comptables. Odoo est souvent un bon point de départ pour une PME, mais nous comparons les options lors du diagnostic." },
      { q: "Peut-on reprendre un ERP déjà installé ?", a: "Oui. Nous pouvons auditer votre ERP actuel, corriger le paramétrage et former vos équipes pour en tirer davantage." },
      { q: "Combien de temps dure un déploiement ?", a: "De quelques semaines à quelques mois selon le nombre de modules et d'utilisateurs. Nous procédons par étapes pour que vous profitiez rapidement des premiers modules." },
    ],
  },
  {
    metaTitle: "Création de site web et développement d'applications à Douala",
    metaDescription: "Sites vitrines, applications web métier, API et hébergement : développement web rapide, sécurisé et adapté au mobile pour les entreprises au Cameroun.",
    intro: "Votre site est souvent le premier contact avec un client. Nous concevons des sites vitrines et des applications web rapides, sécurisés et pensés d'abord pour le mobile, ainsi que les outils métier internes dont votre activité a besoin.",
    problems: [
      "Votre entreprise n'a pas de site, ou il est lent et mal affiché sur téléphone.",
      "Vos clients ne vous trouvent pas sur Google.",
      "Vous gérez une activité avec des fichiers Excel partagés qui deviennent ingérables.",
      "Vous avez besoin d'un portail client ou d'une plateforme sur mesure.",
    ],
    deliverables: [
      { title: "Sites vitrines", text: "Sites rapides, bilingues si besoin, optimisés pour Google et pour le mobile, avec appel et WhatsApp en un clic." },
      { title: "Applications web métier", text: "Outils sur mesure : gestion de commandes, réservations, suivi d'interventions, portails clients ou fournisseurs." },
      { title: "API et back-end", text: "Développement des services et bases de données qui font fonctionner vos applications et les relient à vos autres outils." },
      { title: "Maintenance et hébergement", text: "Mises à jour, sauvegardes, surveillance et évolutions, pour un site qui reste rapide et sécurisé." },
    ],
    tools: ["Next.js / React", "Node.js", "PostgreSQL", "Vercel", "API de paiement mobile"],
    useCases: [
      { title: "Site d'entreprise", text: "Un site bilingue qui présente l'offre, rassure et génère des demandes de devis par WhatsApp." },
      { title: "Prise de commande", text: "Une application pour que les clients professionnels passent commande et suivent leurs livraisons." },
      { title: "Outil interne", text: "Remplacer des fichiers Excel partagés par une application simple, avec des accès par rôle." },
    ],
    faq: [
      { q: "Le site sera-t-il bien référencé sur Google ?", a: "Les sites que nous livrons sont construits pour le référencement : pages rapides, adresses claires, titres et descriptions par page, données structurées et plan du site." },
      { q: "Pourrai-je modifier le contenu moi-même ?", a: "Oui, si vous en avez besoin. Nous pouvons intégrer une interface d'administration simple pour mettre à jour textes, images et actualités." },
      { q: "Proposez-vous l'hébergement et le nom de domaine ?", a: "Oui. Nous pouvons nous occuper du nom de domaine, de l'hébergement et de la maintenance, ou travailler avec votre hébergeur actuel." },
    ],
  },
];

const EN: ServiceDetail[] = [
  {
    metaTitle: "Data analysis and Power BI dashboards in Douala, Cameroon",
    metaDescription: "Power BI and Looker Studio dashboards, KPI definition and automated reporting for businesses in Douala and Cameroon. Free assessment.",
    intro: "Your figures already exist: in Excel, in your point-of-sale system, your ERP or your customer files. We bring them together and turn them into clear, automatically updated dashboards, so you make decisions based on facts rather than impressions.",
    problems: [
      "Monthly reports take days to prepare by hand in Excel.",
      "Each department has its own figures, and they never match.",
      "You do not know exactly which products, customers or branches are profitable.",
      "Management expects reliable KPIs, but nobody has time to produce them.",
    ],
    deliverables: [
      { title: "Dashboards", text: "Power BI or Looker Studio dashboards that read well on desktop and mobile: sales, margins, inventory, cash flow, commercial activity." },
      { title: "KPI definition", text: "We define with you the indicators that really matter for your business, with a clear, shared calculation method." },
      { title: "Automated reporting", text: "Reports sent automatically every day, week or month, with no re-keying or copy-pasting." },
      { title: "Ad hoc analysis", text: "A focused study to answer a specific question: product-line profitability, customer behaviour, seasonality, forecasts." },
    ],
    tools: ["Power BI", "Looker Studio", "Excel / Google Sheets", "SQL", "Python"],
    useCases: [
      { title: "Retail and distribution", text: "Track sales by outlet, stock-outs and product margins in real time." },
      { title: "Institutions and NGOs", text: "Automatically produce programme monitoring indicators for donor reporting." },
      { title: "Financial services", text: "Visualise portfolio growth, collections and arrears by branch." },
    ],
    faq: [
      { q: "Do we need clean data to get started?", a: "No. In most cases we start from Excel files or exports from existing software. Cleaning and organising the data is part of the job." },
      { q: "How long does a first dashboard take?", a: "A first useful dashboard can usually be delivered within a few weeks, depending on the number of data sources. The exact timeline is set out in the quote after the assessment." },
      { q: "Will my team be able to use it on their own?", a: "Yes. We train your team to read and update the dashboards, and we remain available to improve them." },
    ],
  },
  {
    metaTitle: "Data engineering: ETL pipelines and data warehouses in Cameroon",
    metaDescription: "ETL / ELT pipelines, data warehouses, data quality and migration to centralise your company's information in Cameroon and across Africa.",
    intro: "Good analysis starts with reliable data. We build the infrastructure that automatically collects data from your various tools, cleans it and centralises it in one place, up to date and secure.",
    problems: [
      "Your data is scattered across several applications, files and departments.",
      "The same information is keyed in several times, with errors.",
      "Manual exports break as soon as a file changes format.",
      "You are switching software and need to keep your full history.",
    ],
    deliverables: [
      { title: "ETL / ELT pipelines", text: "Automated flows that pull data from your tools (ERP, CRM, POS, files, APIs) and load it at regular intervals." },
      { title: "Data warehouse", text: "A central database organised for analysis that becomes the single source of truth for your dashboards and reports." },
      { title: "Quality and governance", text: "Automatic checks for duplicates and missing values, naming rules, access management and documentation." },
      { title: "Data migration", text: "Transfer of historical data when you change software, fully verified before switching over." },
    ],
    tools: ["SQL", "PostgreSQL", "BigQuery", "Python", "dbt", "Airflow"],
    useCases: [
      { title: "Multi-site company", text: "Centralise sales and inventory from several branches into a shared database every night." },
      { title: "ERP change", text: "Move customers, items and accounting history from the old system to the new one, with nothing lost." },
      { title: "Field data collection", text: "Automatically gather data from mobile forms into a usable database." },
    ],
    faq: [
      { q: "Where is the data hosted?", a: "It depends on your constraints: on your own servers or in the cloud. We advise you during the assessment based on budget, security and connectivity." },
      { q: "Is this suitable for an SME?", a: "Yes. The architecture is sized to your data volume. An SME does not need the same infrastructure as a large company, and we start simple." },
      { q: "What happens if a pipeline fails?", a: "Pipelines are monitored and you are alerted when an error occurs. We offer support and maintenance after go-live." },
    ],
  },
  {
    metaTitle: "AI and process automation for businesses in Cameroon",
    metaDescription: "Workflow automation, chatbots, document processing and predictive models: AI applied to business processes in Douala and across Africa.",
    intro: "Part of your time goes into repetitive tasks: re-keying invoices, answering the same questions, chasing customers, copying data from one tool to another. We automate these tasks and use AI only where it brings a real, measurable gain.",
    problems: [
      "Your team spends hours re-entering information.",
      "Customers keep asking the same questions on WhatsApp or by email.",
      "Processing invoices, purchase orders or files is slow and error-prone.",
      "You want to anticipate sales or inventory needs.",
    ],
    deliverables: [
      { title: "Workflow automation", text: "Automatic sequences between your tools: quotes, reminders, notifications, updating files and spreadsheets." },
      { title: "Assistants and chatbots", text: "Assistants that answer frequent questions from customers or staff, in French and English, based on your own information." },
      { title: "Document processing", text: "Automatic reading and extraction of information from invoices, receipts, forms or contracts." },
      { title: "Predictive models", text: "Sales, demand or risk forecasts based on your history, to plan better." },
    ],
    tools: ["Python", "n8n / Make", "Generative AI APIs", "OCR", "WhatsApp Business API"],
    useCases: [
      { title: "Customer service", text: "A WhatsApp assistant that answers common questions and hands complex requests to an agent." },
      { title: "Accounting", text: "Automatically extract amounts and suppliers from incoming invoices to prepare bookkeeping." },
      { title: "Sales", text: "Automatically follow up on unanswered quotes and alert the salesperson at the right time." },
    ],
    faq: [
      { q: "Will AI replace my staff?", a: "The goal is to remove repetitive tasks so your team can focus on higher-value work: advice, customer relationships, decisions." },
      { q: "Does my data stay confidential?", a: "Yes. We choose tools according to how sensitive your data is and limit what is sent to external services." },
      { q: "Where should we start?", a: "With a simple, frequent and time-consuming task. The free assessment is designed to identify the best first automation." },
    ],
  },
  {
    metaTitle: "Odoo, SAP and Sage ERP integration in Douala, Cameroon",
    metaDescription: "ERP selection, rollout and configuration (Odoo, SAP, Sage), connectors and team training for businesses in Cameroon and across Africa.",
    intro: "An ERP connects all your departments in one system: sales, purchasing, inventory, accounting, human resources. We help you choose the right solution, configure it around your real processes and connect it to your existing tools.",
    problems: [
      "Each department works with its own file or software.",
      "Inventory figures never match reality.",
      "Closing the books takes weeks.",
      "Your current ERP is poorly configured or under-used.",
    ],
    deliverables: [
      { title: "Choosing the solution", text: "Analysis of your needs and budget to choose the right ERP: Odoo, SAP Business One, Sage or another." },
      { title: "Rollout and configuration", text: "Configuration around your business processes, migration of existing data and testing before go-live." },
      { title: "Connectors and APIs", text: "Connecting the ERP to your other tools: e-commerce site, POS, bank, mobile money, dashboards." },
      { title: "Team training", text: "Hands-on training for each user on their daily tasks, with simple guides." },
    ],
    tools: ["Odoo", "SAP Business One", "Sage", "REST APIs", "PostgreSQL"],
    useCases: [
      { title: "Trading and distribution", text: "Manage purchasing, multi-warehouse inventory, sales and invoicing in one tool." },
      { title: "Service SMEs", text: "Connect quotes, projects, time tracking, invoicing and accounting." },
      { title: "Light manufacturing", text: "Track production, raw materials and cost prices." },
    ],
    faq: [
      { q: "Which ERP should a Cameroonian SME choose?", a: "It depends on your activity, budget and accounting requirements. Odoo is often a good starting point for an SME, but we compare the options during the assessment." },
      { q: "Can you take over an ERP that is already installed?", a: "Yes. We can audit your current ERP, fix the configuration and train your team to get more out of it." },
      { q: "How long does a rollout take?", a: "From a few weeks to a few months depending on the number of modules and users. We work in stages so you benefit from the first modules quickly." },
    ],
  },
  {
    metaTitle: "Website and web application development in Douala, Cameroon",
    metaDescription: "Company websites, business web apps, APIs and hosting: fast, secure, mobile-ready web development for businesses in Cameroon.",
    intro: "Your website is often the first contact with a customer. We design fast, secure, mobile-first websites and web applications, as well as the internal business tools your company needs.",
    problems: [
      "Your company has no website, or it is slow and displays poorly on phones.",
      "Customers cannot find you on Google.",
      "You run operations on shared Excel files that have become unmanageable.",
      "You need a customer portal or a custom platform.",
    ],
    deliverables: [
      { title: "Company websites", text: "Fast websites, bilingual if needed, optimised for Google and mobile, with one-tap call and WhatsApp." },
      { title: "Business web apps", text: "Custom tools: order management, bookings, field-service tracking, customer or supplier portals." },
      { title: "APIs and back-end", text: "The services and databases that power your applications and connect them to your other tools." },
      { title: "Maintenance and hosting", text: "Updates, backups, monitoring and improvements, so your site stays fast and secure." },
    ],
    tools: ["Next.js / React", "Node.js", "PostgreSQL", "Vercel", "Mobile money APIs"],
    useCases: [
      { title: "Company website", text: "A bilingual site that presents your offer, builds trust and brings in quote requests via WhatsApp." },
      { title: "Online ordering", text: "An application where business customers place orders and track deliveries." },
      { title: "Internal tool", text: "Replace shared Excel files with a simple application with role-based access." },
    ],
    faq: [
      { q: "Will the site rank well on Google?", a: "The sites we deliver are built for search: fast pages, clear URLs, per-page titles and descriptions, structured data and a sitemap." },
      { q: "Can I edit the content myself?", a: "Yes, if you need to. We can add a simple admin interface to update text, images and news." },
      { q: "Do you provide hosting and the domain name?", a: "Yes. We can handle the domain name, hosting and maintenance, or work with your current host." },
    ],
  },
];

export const SERVICE_DETAILS: Record<Lang, ServiceDetail[]> = { fr: FR, en: EN };
