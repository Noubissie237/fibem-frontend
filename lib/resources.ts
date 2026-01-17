import { Locale } from "@/types/i18n";

// Types
export interface Article {
  slug: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

export interface ArticleContent {
  title: string;
  excerpt: string;
  categoryLabel: string;
  content: string[];
}

export interface Guide {
  slug: string;
  icon: string;
  category: string;
}

export interface GuideContent {
  title: string;
  description: string;
  categoryLabel: string;
}

export interface CaseStudy {
  slug: string;
  image: string;
  industry: string;
  metrics: { value: string; label: string }[];
}

export interface CaseStudyContent {
  title: string;
  industryLabel: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Video {
  id: string;
  thumbnail: string;
  duration: string;
  category: string;
}

export interface VideoContent {
  title: string;
  description: string;
  categoryLabel: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  type: "feature" | "improvement" | "fix";
}

export interface ChangelogContent {
  title: string;
  description: string;
  typeLabel: string;
}

export interface FAQItem {
  id: string;
}

export interface FAQContent {
  question: string;
  answer: string;
}

export interface StatusIncident {
  id: string;
  date: string;
  status: "resolved" | "monitoring" | "investigating";
}

export interface StatusIncidentContent {
  title: string;
  description: string;
  statusLabel: string;
}

// Articles
export const articles: Article[] = [
  {
    slug: "intelligence-artificielle-telephonie-entreprise",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    date: "2024-01-15",
    readTime: "5 min",
    category: "ia",
  },
  {
    slug: "ameliorer-satisfaction-client-telephone",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    date: "2024-01-10",
    readTime: "7 min",
    category: "support",
  },
  {
    slug: "transcription-automatique-appels-guide-complet",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
    date: "2024-01-05",
    readTime: "6 min",
    category: "ia",
  },
  {
    slug: "telephonie-cloud-vs-traditionnelle",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    date: "2023-12-20",
    readTime: "8 min",
    category: "telephonie",
  },
  {
    slug: "rgpd-enregistrement-appels",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    date: "2023-12-15",
    readTime: "4 min",
    category: "securite",
  },
  {
    slug: "kpis-centre-appels-essentiels",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    date: "2023-12-10",
    readTime: "6 min",
    category: "analytics",
  },
];

export const articlesContentFr: Record<string, ArticleContent> = {
  "intelligence-artificielle-telephonie-entreprise": {
    title: "L'intelligence artificielle révolutionne la téléphonie d'entreprise",
    excerpt: "Découvrez comment l'IA transforme chaque appel en opportunité grâce à la transcription, l'analyse de sentiment et les résumés automatiques.",
    categoryLabel: "Intelligence Artificielle",
    content: [
      "L'intelligence artificielle n'est plus une technologie du futur — elle transforme déjà la façon dont les entreprises gèrent leurs communications téléphoniques. De la transcription automatique à l'analyse de sentiment, l'IA apporte des capacités inédites aux équipes commerciales et support.",
      "La transcription automatique permet de convertir chaque appel en texte exploitable. Plus besoin de prendre des notes pendant les conversations : l'IA s'en charge et génère un compte-rendu fidèle que vous pouvez rechercher, partager et archiver.",
      "L'analyse de sentiment va encore plus loin en détectant les émotions de vos interlocuteurs en temps réel. Vos managers peuvent intervenir au bon moment pour aider un agent face à un client mécontent, ou identifier les meilleures pratiques des conversations réussies.",
      "Les résumés automatiques post-appel synthétisent les points clés et les actions à suivre. Fini les longues réécoutes : en quelques secondes, vous savez ce qui s'est dit et ce qu'il reste à faire.",
      "Chez Téléphonie-IA, nous intégrons ces technologies directement dans notre plateforme pour que chaque entreprise puisse en bénéficier sans complexité technique.",
    ],
  },
  "ameliorer-satisfaction-client-telephone": {
    title: "5 stratégies pour améliorer la satisfaction client par téléphone",
    excerpt: "Le téléphone reste le canal préféré des clients pour les demandes complexes. Voici comment optimiser chaque interaction.",
    categoryLabel: "Support Client",
    content: [
      "Malgré la multiplication des canaux digitaux, le téléphone reste le canal privilégié pour 65% des clients lorsqu'ils ont une demande complexe ou urgente. Optimiser l'expérience téléphonique est donc crucial pour la satisfaction globale.",
      "Première stratégie : réduire le temps d'attente. Un SVI bien conçu et un routage intelligent permettent de diriger les appels vers le bon interlocuteur dès le premier essai. Les files d'attente virtuelles avec rappel automatique éliminent la frustration de l'attente.",
      "Deuxième stratégie : personnaliser l'accueil. Grâce à l'intégration CRM, vos agents voient instantanément l'historique du client et peuvent adapter leur discours. Le client se sent reconnu et valorisé.",
      "Troisième stratégie : former en continu. Les enregistrements et transcriptions permettent d'identifier les meilleures pratiques et de coacher les équipes sur des cas concrets.",
      "Quatrième stratégie : mesurer et améliorer. Les tableaux de bord en temps réel permettent de suivre les KPIs clés (temps de réponse, résolution au premier appel, satisfaction) et d'agir rapidement.",
      "Cinquième stratégie : exploiter l'IA. L'analyse de sentiment détecte les signaux faibles, les résumés automatiques accélèrent le suivi, et les suggestions en temps réel aident les agents.",
    ],
  },
  "transcription-automatique-appels-guide-complet": {
    title: "Guide complet de la transcription automatique d'appels",
    excerpt: "Tout ce que vous devez savoir sur la transcription IA : fonctionnement, avantages, conformité et meilleures pratiques.",
    categoryLabel: "Intelligence Artificielle",
    content: [
      "La transcription automatique d'appels est l'une des applications les plus concrètes de l'intelligence artificielle en entreprise. Ce guide vous explique tout ce que vous devez savoir pour l'adopter efficacement.",
      "Comment ça fonctionne ? Des algorithmes de reconnaissance vocale (ASR) convertissent la parole en texte en temps réel. Les modèles les plus avancés distinguent les différents interlocuteurs et gèrent les accents et le vocabulaire métier.",
      "Les avantages sont nombreux : gain de temps (plus de prise de notes), traçabilité complète, recherche facilitée, conformité renforcée, et possibilité d'analyse à grande échelle.",
      "Côté conformité, la transcription est soumise au RGPD. Il faut informer les parties, définir une durée de conservation, et sécuriser les données. Téléphonie-IA intègre ces exigences nativement.",
      "Meilleures pratiques : informez vos interlocuteurs, formez vos équipes à exploiter les transcriptions, définissez des tags et catégories pour organiser l'information, et intégrez avec votre CRM.",
    ],
  },
  "telephonie-cloud-vs-traditionnelle": {
    title: "Téléphonie cloud vs traditionnelle : le comparatif complet",
    excerpt: "PABX, IPBX, cloud... Quel système choisir pour votre entreprise ? Avantages, inconvénients et critères de décision.",
    categoryLabel: "Téléphonie",
    content: [
      "Le marché de la téléphonie d'entreprise a profondément évolué ces dernières années. Entre systèmes traditionnels (PABX), solutions hybrides (IPBX) et téléphonie cloud, comment choisir ?",
      "Les systèmes traditionnels (PABX) reposent sur une infrastructure physique sur site. Ils offrent une grande fiabilité mais impliquent des coûts d'installation élevés, une maintenance complexe et peu de flexibilité.",
      "Les IPBX utilisent le protocole Internet mais restent hébergés sur site. Ils apportent plus de fonctionnalités mais conservent les contraintes de maintenance et d'évolution.",
      "La téléphonie cloud (UCaaS) déplace toute l'infrastructure chez le fournisseur. Avantages : aucune installation, mises à jour automatiques, scalabilité instantanée, accessibilité mobile, et coûts prévisibles.",
      "Critères de décision : taille de l'entreprise, répartition géographique, besoins de mobilité, budget, et exigences de fonctionnalités (IA, intégrations, analytics). Pour la plupart des PME et ETI, le cloud est aujourd'hui le choix le plus pertinent.",
    ],
  },
  "rgpd-enregistrement-appels": {
    title: "RGPD et enregistrement d'appels : ce que vous devez savoir",
    excerpt: "L'enregistrement d'appels est encadré par le RGPD. Voici les règles à respecter pour rester conforme.",
    categoryLabel: "Sécurité & Conformité",
    content: [
      "L'enregistrement des appels téléphoniques est une pratique courante en entreprise, mais elle est strictement encadrée par le RGPD. Voici les points essentiels à connaître.",
      "Base légale : vous devez avoir une base légale pour enregistrer (consentement, intérêt légitime, obligation légale). Le consentement doit être explicite et révocable. L'intérêt légitime nécessite une mise en balance avec les droits des personnes.",
      "Information préalable : les personnes doivent être informées avant l'enregistrement (message d'accueil, mentions légales). L'information doit préciser la finalité, la durée de conservation et les droits.",
      "Durée de conservation : les enregistrements ne peuvent pas être conservés indéfiniment. Définissez une durée proportionnée à la finalité (formation, qualité, conformité).",
      "Droits des personnes : accès, rectification, effacement, opposition. Vous devez être en mesure de répondre aux demandes dans les délais légaux.",
      "Sécurité : les enregistrements doivent être stockés de manière sécurisée avec accès restreint. Téléphonie-IA intègre ces exigences avec hébergement en France et chiffrement.",
    ],
  },
  "kpis-centre-appels-essentiels": {
    title: "Les 10 KPIs essentiels pour piloter votre centre d'appels",
    excerpt: "Taux de décroché, temps moyen de traitement, satisfaction... Quels indicateurs suivre et comment les améliorer.",
    categoryLabel: "Analytics",
    content: [
      "Piloter un centre d'appels sans KPIs, c'est naviguer à l'aveugle. Voici les 10 indicateurs essentiels à suivre pour optimiser vos performances.",
      "1. Taux de décroché : pourcentage d'appels répondus. Objectif : >95%. 2. Temps moyen d'attente (TME) : durée avant prise en charge. Objectif : <30 secondes. 3. Taux d'abandon : appels raccrochés avant réponse. Objectif : <5%.",
      "4. Temps moyen de traitement (TMT) : durée totale de l'appel + post-traitement. À optimiser sans sacrifier la qualité. 5. Résolution au premier appel (FCR) : problèmes résolus dès le premier contact. Objectif : >70%.",
      "6. Satisfaction client (CSAT) : note donnée après l'appel. Objectif : >4/5. 7. Net Promoter Score (NPS) : probabilité de recommandation. Objectif : >30.",
      "8. Taux d'occupation : temps passé en appel vs temps disponible. Équilibre à trouver pour éviter l'épuisement. 9. Coût par appel : budget divisé par nombre d'appels. À optimiser. 10. Taux de transfert : appels redirigés. Objectif : <15%.",
      "Téléphonie-IA calcule automatiquement ces KPIs et les affiche dans des tableaux de bord personnalisables en temps réel.",
    ],
  },
};

export const articlesContentEn: Record<string, ArticleContent> = {
  "intelligence-artificielle-telephonie-entreprise": {
    title: "Artificial Intelligence is Revolutionizing Business Telephony",
    excerpt: "Discover how AI transforms every call into an opportunity through transcription, sentiment analysis and automatic summaries.",
    categoryLabel: "Artificial Intelligence",
    content: [
      "Artificial intelligence is no longer a technology of the future — it's already transforming how businesses manage their phone communications. From automatic transcription to sentiment analysis, AI brings unprecedented capabilities to sales and support teams.",
      "Automatic transcription converts every call into searchable text. No more note-taking during conversations: AI handles it and generates a faithful record that you can search, share and archive.",
      "Sentiment analysis goes further by detecting your callers' emotions in real-time. Managers can intervene at the right moment to help an agent with an unhappy customer, or identify best practices from successful conversations.",
      "Automatic post-call summaries synthesize key points and action items. No more long re-listening sessions: in seconds, you know what was said and what needs to be done.",
      "At Téléphonie-IA, we integrate these technologies directly into our platform so every business can benefit without technical complexity.",
    ],
  },
  "ameliorer-satisfaction-client-telephone": {
    title: "5 Strategies to Improve Customer Satisfaction by Phone",
    excerpt: "Phone remains customers' preferred channel for complex requests. Here's how to optimize every interaction.",
    categoryLabel: "Customer Support",
    content: [
      "Despite the multiplication of digital channels, phone remains the preferred channel for 65% of customers when they have a complex or urgent request. Optimizing the phone experience is therefore crucial for overall satisfaction.",
      "First strategy: reduce wait time. A well-designed IVR and smart routing direct calls to the right person on the first try. Virtual queues with automatic callback eliminate waiting frustration.",
      "Second strategy: personalize the greeting. Thanks to CRM integration, your agents instantly see the customer's history and can adapt their approach. The customer feels recognized and valued.",
      "Third strategy: continuous training. Recordings and transcriptions help identify best practices and coach teams on concrete cases.",
      "Fourth strategy: measure and improve. Real-time dashboards track key KPIs (response time, first call resolution, satisfaction) and enable quick action.",
      "Fifth strategy: leverage AI. Sentiment analysis detects weak signals, automatic summaries speed up follow-up, and real-time suggestions help agents.",
    ],
  },
  "transcription-automatique-appels-guide-complet": {
    title: "Complete Guide to Automatic Call Transcription",
    excerpt: "Everything you need to know about AI transcription: how it works, benefits, compliance and best practices.",
    categoryLabel: "Artificial Intelligence",
    content: [
      "Automatic call transcription is one of the most concrete applications of artificial intelligence in business. This guide explains everything you need to know to adopt it effectively.",
      "How does it work? Automatic Speech Recognition (ASR) algorithms convert speech to text in real-time. The most advanced models distinguish different speakers and handle accents and industry vocabulary.",
      "The benefits are numerous: time savings (no more note-taking), complete traceability, easy searching, enhanced compliance, and the ability to analyze at scale.",
      "On the compliance side, transcription is subject to GDPR. You must inform parties, define retention periods, and secure the data. Téléphonie-IA integrates these requirements natively.",
      "Best practices: inform your callers, train your teams to use transcriptions, define tags and categories to organize information, and integrate with your CRM.",
    ],
  },
  "telephonie-cloud-vs-traditionnelle": {
    title: "Cloud vs Traditional Telephony: The Complete Comparison",
    excerpt: "PBX, IP-PBX, cloud... Which system should you choose for your business? Pros, cons and decision criteria.",
    categoryLabel: "Telephony",
    content: [
      "The business telephony market has evolved significantly in recent years. Between traditional systems (PBX), hybrid solutions (IP-PBX) and cloud telephony, how do you choose?",
      "Traditional systems (PBX) rely on on-premise physical infrastructure. They offer great reliability but involve high installation costs, complex maintenance and little flexibility.",
      "IP-PBX use Internet protocol but remain hosted on-site. They bring more features but retain maintenance and evolution constraints.",
      "Cloud telephony (UCaaS) moves all infrastructure to the provider. Benefits: no installation, automatic updates, instant scalability, mobile accessibility, and predictable costs.",
      "Decision criteria: company size, geographic distribution, mobility needs, budget, and feature requirements (AI, integrations, analytics). For most SMBs, cloud is now the most relevant choice.",
    ],
  },
  "rgpd-enregistrement-appels": {
    title: "GDPR and Call Recording: What You Need to Know",
    excerpt: "Call recording is regulated by GDPR. Here are the rules to follow to stay compliant.",
    categoryLabel: "Security & Compliance",
    content: [
      "Recording phone calls is a common business practice, but it's strictly regulated by GDPR. Here are the essential points to know.",
      "Legal basis: you must have a legal basis for recording (consent, legitimate interest, legal obligation). Consent must be explicit and revocable. Legitimate interest requires balancing against individuals' rights.",
      "Prior information: individuals must be informed before recording (greeting message, legal notices). Information must specify the purpose, retention period and rights.",
      "Retention period: recordings cannot be kept indefinitely. Define a period proportionate to the purpose (training, quality, compliance).",
      "Individual rights: access, rectification, erasure, objection. You must be able to respond to requests within legal deadlines.",
      "Security: recordings must be stored securely with restricted access. Téléphonie-IA integrates these requirements with hosting in France and encryption.",
    ],
  },
  "kpis-centre-appels-essentiels": {
    title: "The 10 Essential KPIs for Managing Your Call Center",
    excerpt: "Answer rate, average handling time, satisfaction... Which indicators to track and how to improve them.",
    categoryLabel: "Analytics",
    content: [
      "Managing a call center without KPIs is like navigating blind. Here are the 10 essential indicators to track to optimize your performance.",
      "1. Answer rate: percentage of calls answered. Target: >95%. 2. Average wait time (AWT): time before pickup. Target: <30 seconds. 3. Abandonment rate: calls hung up before answer. Target: <5%.",
      "4. Average handling time (AHT): total call duration + post-processing. Optimize without sacrificing quality. 5. First call resolution (FCR): issues resolved on first contact. Target: >70%.",
      "6. Customer satisfaction (CSAT): rating given after the call. Target: >4/5. 7. Net Promoter Score (NPS): likelihood to recommend. Target: >30.",
      "8. Occupancy rate: time on calls vs available time. Balance needed to avoid burnout. 9. Cost per call: budget divided by number of calls. Optimize. 10. Transfer rate: redirected calls. Target: <15%.",
      "Téléphonie-IA automatically calculates these KPIs and displays them in customizable real-time dashboards.",
    ],
  },
};

// Guides
export const guides: Guide[] = [
  { slug: "premiers-pas", icon: "rocket", category: "getting-started" },
  { slug: "configuration-numeros", icon: "phone", category: "setup" },
  { slug: "routage-appels", icon: "arrows", category: "setup" },
  { slug: "transcription-ia", icon: "sparkles", category: "ai" },
  { slug: "integrations-crm", icon: "puzzle", category: "integrations" },
  { slug: "tableaux-bord", icon: "chart", category: "analytics" },
];

export const guidesContentFr: Record<string, GuideContent> = {
  "premiers-pas": {
    title: "Premiers pas avec Téléphonie-IA",
    description: "Créez votre compte, configurez votre premier numéro et passez votre premier appel en moins de 10 minutes.",
    categoryLabel: "Démarrage",
  },
  "configuration-numeros": {
    title: "Configurer vos numéros professionnels",
    description: "Obtenez des numéros locaux ou nationaux, portez vos numéros existants et configurez les paramètres.",
    categoryLabel: "Configuration",
  },
  "routage-appels": {
    title: "Mettre en place le routage d'appels",
    description: "Créez des règles de routage, des groupes de sonnerie et des SVI pour diriger les appels efficacement.",
    categoryLabel: "Configuration",
  },
  "transcription-ia": {
    title: "Activer la transcription IA",
    description: "Configurez la transcription automatique, les résumés et l'analyse de sentiment sur vos appels.",
    categoryLabel: "Intelligence Artificielle",
  },
  "integrations-crm": {
    title: "Intégrer votre CRM",
    description: "Connectez Salesforce, HubSpot ou d'autres CRM pour synchroniser vos contacts et historiques.",
    categoryLabel: "Intégrations",
  },
  "tableaux-bord": {
    title: "Personnaliser vos tableaux de bord",
    description: "Créez des dashboards sur mesure avec les KPIs qui comptent pour votre activité.",
    categoryLabel: "Analytics",
  },
};

export const guidesContentEn: Record<string, GuideContent> = {
  "premiers-pas": {
    title: "Getting Started with Téléphonie-IA",
    description: "Create your account, set up your first number and make your first call in under 10 minutes.",
    categoryLabel: "Getting Started",
  },
  "configuration-numeros": {
    title: "Configure Your Professional Numbers",
    description: "Get local or national numbers, port your existing numbers and configure settings.",
    categoryLabel: "Setup",
  },
  "routage-appels": {
    title: "Set Up Call Routing",
    description: "Create routing rules, ring groups and IVRs to direct calls efficiently.",
    categoryLabel: "Setup",
  },
  "transcription-ia": {
    title: "Enable AI Transcription",
    description: "Configure automatic transcription, summaries and sentiment analysis on your calls.",
    categoryLabel: "Artificial Intelligence",
  },
  "integrations-crm": {
    title: "Integrate Your CRM",
    description: "Connect Salesforce, HubSpot or other CRMs to sync your contacts and history.",
    categoryLabel: "Integrations",
  },
  "tableaux-bord": {
    title: "Customize Your Dashboards",
    description: "Create custom dashboards with the KPIs that matter for your business.",
    categoryLabel: "Analytics",
  },
};

// Case Studies
export const caseStudies: CaseStudy[] = [
  {
    slug: "cabinet-comptable-noubissie",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    industry: "accounting",
    metrics: [
      { value: "-45%", label: "appels manqués" },
      { value: "+30%", label: "productivité" },
    ],
  },
  {
    slug: "startup-saas-novateam",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    industry: "tech",
    metrics: [
      { value: "5 min", label: "déploiement" },
      { value: "100%", label: "mobilité" },
    ],
  },
  {
    slug: "reseau-optique-visionclair",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    industry: "retail",
    metrics: [
      { value: "15", label: "sites unifiés" },
      { value: "-60%", label: "transferts" },
    ],
  },
  {
    slug: "agence-immobiliere-habitat",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    industry: "realestate",
    metrics: [
      { value: "+25%", label: "leads qualifiés" },
      { value: "24/7", label: "disponibilité" },
    ],
  },
];

export const caseStudiesContentFr: Record<string, CaseStudyContent> = {
  "cabinet-comptable-noubissie": {
    title: "Cabinet Comptable Noubissie",
    industryLabel: "Expertise comptable",
    challenge: "Le cabinet Noubissie perdait de nombreux appels pendant les périodes fiscales chargées, frustrant les clients existants et manquant des opportunités.",
    solution: "Déploiement de Téléphonie-IA avec routage intelligent, file d'attente virtuelle et transcription pour un suivi impeccable de chaque demande.",
    result: "45% d'appels manqués en moins, 30% de gain de productivité sur le traitement des demandes, et une satisfaction client en hausse.",
  },
  "startup-saas-novateam": {
    title: "Startup SaaS NovaTeam",
    industryLabel: "Technologie",
    challenge: "Équipe 100% remote avec besoin d'une solution professionnelle sans infrastructure, capable de scaler avec la croissance.",
    solution: "Adoption de Téléphonie-IA en 5 minutes, numéros professionnels pour chaque collaborateur, intégration Slack et CRM.",
    result: "Déploiement instantané, mobilité totale, et image professionnelle dès le premier jour.",
  },
  "reseau-optique-visionclair": {
    title: "Réseau Optique VisionClair",
    industryLabel: "Retail",
    challenge: "15 magasins avec des systèmes téléphoniques hétérogènes, pas de vision consolidée, clients transférés en boucle.",
    solution: "Migration vers Téléphonie-IA avec numéro unique, routage géographique et tableau de bord multi-sites.",
    result: "Tous les sites unifiés, 60% de transferts en moins, et une vision centralisée de l'activité.",
  },
  "agence-immobiliere-habitat": {
    title: "Agence Immobilière Habitat+",
    industryLabel: "Immobilier",
    challenge: "Leads entrants perdus en dehors des heures d'ouverture, pas de traçabilité des appels, difficile de mesurer la conversion.",
    solution: "Téléphonie-IA avec messagerie vocale intelligente, transcription et intégration CRM immobilier.",
    result: "25% de leads qualifiés en plus, disponibilité 24/7 grâce à l'IA, et suivi complet dans le CRM.",
  },
};

export const caseStudiesContentEn: Record<string, CaseStudyContent> = {
  "cabinet-comptable-noubissie": {
    title: "Noubissie Accounting Firm",
    industryLabel: "Accounting",
    challenge: "The Noubissie firm was missing many calls during busy tax periods, frustrating existing clients and missing opportunities.",
    solution: "Deployment of Téléphonie-IA with smart routing, virtual queue and transcription for perfect follow-up of each request.",
    result: "45% fewer missed calls, 30% productivity gain on request handling, and increased customer satisfaction.",
  },
  "startup-saas-novateam": {
    title: "NovaTeam SaaS Startup",
    industryLabel: "Technology",
    challenge: "100% remote team needing a professional solution without infrastructure, capable of scaling with growth.",
    solution: "Adoption of Téléphonie-IA in 5 minutes, professional numbers for each team member, Slack and CRM integration.",
    result: "Instant deployment, total mobility, and professional image from day one.",
  },
  "reseau-optique-visionclair": {
    title: "VisionClair Optical Network",
    industryLabel: "Retail",
    challenge: "15 stores with heterogeneous phone systems, no consolidated view, customers transferred in loops.",
    solution: "Migration to Téléphonie-IA with single number, geographic routing and multi-site dashboard.",
    result: "All sites unified, 60% fewer transfers, and centralized activity view.",
  },
  "agence-immobiliere-habitat": {
    title: "Habitat+ Real Estate Agency",
    industryLabel: "Real Estate",
    challenge: "Inbound leads lost outside business hours, no call traceability, difficult to measure conversion.",
    solution: "Téléphonie-IA with smart voicemail, transcription and real estate CRM integration.",
    result: "25% more qualified leads, 24/7 availability thanks to AI, and complete tracking in CRM.",
  },
};

// Videos
export const videos: Video[] = [
  { id: "demo-plateforme", thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", duration: "5:32", category: "demo" },
  { id: "configuration-svi", thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", duration: "8:15", category: "tutorial" },
  { id: "transcription-ia-action", thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", duration: "4:47", category: "demo" },
  { id: "integration-salesforce", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", duration: "6:20", category: "tutorial" },
  { id: "tableaux-bord-analytics", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", duration: "7:05", category: "tutorial" },
  { id: "temoignage-client-pme", thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80", duration: "3:45", category: "testimonial" },
];

export const videosContentFr: Record<string, VideoContent> = {
  "demo-plateforme": { title: "Démo complète de la plateforme", description: "Découvrez toutes les fonctionnalités de Téléphonie-IA en 5 minutes.", categoryLabel: "Démo" },
  "configuration-svi": { title: "Configurer votre SVI pas à pas", description: "Tutoriel complet pour créer un serveur vocal interactif personnalisé.", categoryLabel: "Tutoriel" },
  "transcription-ia-action": { title: "La transcription IA en action", description: "Voyez comment l'IA transcrit et résume vos appels automatiquement.", categoryLabel: "Démo" },
  "integration-salesforce": { title: "Intégrer Salesforce en 10 minutes", description: "Guide pas à pas pour connecter votre CRM Salesforce.", categoryLabel: "Tutoriel" },
  "tableaux-bord-analytics": { title: "Maîtriser les tableaux de bord", description: "Créez des dashboards personnalisés pour piloter votre activité.", categoryLabel: "Tutoriel" },
  "temoignage-client-pme": { title: "Témoignage : PME Industrie", description: "Comment cette PME a transformé sa téléphonie avec Téléphonie-IA.", categoryLabel: "Témoignage" },
};

export const videosContentEn: Record<string, VideoContent> = {
  "demo-plateforme": { title: "Complete Platform Demo", description: "Discover all Téléphonie-IA features in 5 minutes.", categoryLabel: "Demo" },
  "configuration-svi": { title: "Configure Your IVR Step by Step", description: "Complete tutorial to create a custom interactive voice response.", categoryLabel: "Tutorial" },
  "transcription-ia-action": { title: "AI Transcription in Action", description: "See how AI transcribes and summarizes your calls automatically.", categoryLabel: "Demo" },
  "integration-salesforce": { title: "Integrate Salesforce in 10 Minutes", description: "Step-by-step guide to connect your Salesforce CRM.", categoryLabel: "Tutorial" },
  "tableaux-bord-analytics": { title: "Master Your Dashboards", description: "Create custom dashboards to manage your activity.", categoryLabel: "Tutorial" },
  "temoignage-client-pme": { title: "Testimonial: Industrial SMB", description: "How this SMB transformed its telephony with Téléphonie-IA.", categoryLabel: "Testimonial" },
};

// Changelog
export const changelog: ChangelogEntry[] = [
  { version: "2.4.0", date: "2024-01-15", type: "feature" },
  { version: "2.3.2", date: "2024-01-08", type: "fix" },
  { version: "2.3.1", date: "2023-12-20", type: "improvement" },
  { version: "2.3.0", date: "2023-12-10", type: "feature" },
  { version: "2.2.1", date: "2023-11-28", type: "fix" },
  { version: "2.2.0", date: "2023-11-15", type: "feature" },
];

export const changelogContentFr: Record<string, ChangelogContent> = {
  "2.4.0": { title: "Coaching IA en temps réel", description: "Nouvelle fonctionnalité de suggestions IA pendant les appels pour aider vos agents.", typeLabel: "Nouveauté" },
  "2.3.2": { title: "Correction synchronisation CRM", description: "Résolution d'un problème de synchronisation avec Salesforce pour certains comptes.", typeLabel: "Correction" },
  "2.3.1": { title: "Performance des dashboards", description: "Amélioration significative des temps de chargement des tableaux de bord.", typeLabel: "Amélioration" },
  "2.3.0": { title: "Intégration HubSpot", description: "Nouvelle intégration native avec HubSpot CRM : contacts, deals et activités.", typeLabel: "Nouveauté" },
  "2.2.1": { title: "Correction transcription", description: "Amélioration de la précision de la transcription pour les accents régionaux.", typeLabel: "Correction" },
  "2.2.0": { title: "Analyse de sentiment", description: "Détection automatique des émotions dans les appels avec alertes temps réel.", typeLabel: "Nouveauté" },
};

export const changelogContentEn: Record<string, ChangelogContent> = {
  "2.4.0": { title: "Real-time AI Coaching", description: "New AI suggestion feature during calls to help your agents.", typeLabel: "New" },
  "2.3.2": { title: "CRM Sync Fix", description: "Fixed a synchronization issue with Salesforce for some accounts.", typeLabel: "Fix" },
  "2.3.1": { title: "Dashboard Performance", description: "Significant improvement in dashboard loading times.", typeLabel: "Improvement" },
  "2.3.0": { title: "HubSpot Integration", description: "New native integration with HubSpot CRM: contacts, deals and activities.", typeLabel: "New" },
  "2.2.1": { title: "Transcription Fix", description: "Improved transcription accuracy for regional accents.", typeLabel: "Fix" },
  "2.2.0": { title: "Sentiment Analysis", description: "Automatic emotion detection in calls with real-time alerts.", typeLabel: "New" },
};

// FAQ
export const faqItems: FAQItem[] = [
  { id: "comment-commencer" },
  { id: "essai-gratuit" },
  { id: "portabilite-numeros" },
  { id: "integrations-disponibles" },
  { id: "transcription-langues" },
  { id: "securite-donnees" },
  { id: "support-technique" },
  { id: "facturation" },
  { id: "annulation" },
  { id: "formation" },
];

export const faqContentFr: Record<string, FAQContent> = {
  "comment-commencer": { question: "Comment commencer avec Téléphonie-IA ?", answer: "Créez un compte gratuitement, choisissez ou portez un numéro, et commencez à appeler en moins de 5 minutes. Aucune installation requise." },
  "essai-gratuit": { question: "L'essai gratuit est-il vraiment sans engagement ?", answer: "Oui, l'essai de 14 jours est 100% gratuit et sans carte bancaire. Vous pouvez tester toutes les fonctionnalités sans aucun engagement." },
  "portabilite-numeros": { question: "Puis-je conserver mes numéros existants ?", answer: "Oui, nous prenons en charge la portabilité de vos numéros existants. Le processus prend généralement 5 à 10 jours ouvrés." },
  "integrations-disponibles": { question: "Quelles intégrations sont disponibles ?", answer: "Nous proposons des intégrations natives avec Salesforce, HubSpot, Pipedrive, Zendesk, Slack, Microsoft Teams, et bien d'autres via Zapier et notre API." },
  "transcription-langues": { question: "La transcription fonctionne-t-elle en plusieurs langues ?", answer: "Oui, notre IA supporte le français, l'anglais, l'espagnol, l'allemand, l'italien et le portugais avec une excellente précision." },
  "securite-donnees": { question: "Où sont hébergées mes données ?", answer: "Toutes vos données sont hébergées en France dans des datacenters certifiés ISO 27001. Nous sommes 100% conformes RGPD." },
  "support-technique": { question: "Comment fonctionne le support technique ?", answer: "Support par email pour tous les plans, support prioritaire par chat pour Business, et support dédié avec SLA pour Enterprise." },
  "facturation": { question: "Comment fonctionne la facturation ?", answer: "Facturation mensuelle ou annuelle au choix. L'annuel vous fait économiser 20%. Factures téléchargeables depuis votre espace client." },
  "annulation": { question: "Puis-je annuler à tout moment ?", answer: "Oui, vous pouvez annuler votre abonnement à tout moment. Pas de frais cachés ni de pénalités." },
  "formation": { question: "Proposez-vous des formations ?", answer: "Oui, nous proposons des webinaires gratuits, une documentation complète, et des formations sur site pour les clients Enterprise." },
};

export const faqContentEn: Record<string, FAQContent> = {
  "comment-commencer": { question: "How do I get started with Téléphonie-IA?", answer: "Create a free account, choose or port a number, and start calling in under 5 minutes. No installation required." },
  "essai-gratuit": { question: "Is the free trial really no commitment?", answer: "Yes, the 14-day trial is 100% free with no credit card required. You can test all features with no commitment." },
  "portabilite-numeros": { question: "Can I keep my existing numbers?", answer: "Yes, we support porting your existing numbers. The process typically takes 5 to 10 business days." },
  "integrations-disponibles": { question: "What integrations are available?", answer: "We offer native integrations with Salesforce, HubSpot, Pipedrive, Zendesk, Slack, Microsoft Teams, and many more via Zapier and our API." },
  "transcription-langues": { question: "Does transcription work in multiple languages?", answer: "Yes, our AI supports French, English, Spanish, German, Italian and Portuguese with excellent accuracy." },
  "securite-donnees": { question: "Where is my data hosted?", answer: "All your data is hosted in France in ISO 27001 certified datacenters. We are 100% GDPR compliant." },
  "support-technique": { question: "How does technical support work?", answer: "Email support for all plans, priority chat support for Business, and dedicated support with SLA for Enterprise." },
  "facturation": { question: "How does billing work?", answer: "Monthly or yearly billing, your choice. Yearly saves you 20%. Invoices downloadable from your client portal." },
  "annulation": { question: "Can I cancel anytime?", answer: "Yes, you can cancel your subscription at any time. No hidden fees or penalties." },
  "formation": { question: "Do you offer training?", answer: "Yes, we offer free webinars, complete documentation, and on-site training for Enterprise customers." },
};

// Status incidents
export const statusIncidents: StatusIncident[] = [
  { id: "incident-2024-01-10", date: "2024-01-10", status: "resolved" },
  { id: "incident-2023-12-15", date: "2023-12-15", status: "resolved" },
  { id: "incident-2023-11-20", date: "2023-11-20", status: "resolved" },
];

export const statusIncidentsContentFr: Record<string, StatusIncidentContent> = {
  "incident-2024-01-10": { title: "Latence API temporaire", description: "Légère augmentation des temps de réponse de l'API pendant 15 minutes. Résolu.", statusLabel: "Résolu" },
  "incident-2023-12-15": { title: "Maintenance programmée", description: "Maintenance de 30 minutes pour mise à jour infrastructure. Aucun impact utilisateur.", statusLabel: "Résolu" },
  "incident-2023-11-20": { title: "Problème transcription", description: "Retard temporaire dans la génération des transcriptions. Résolu en 45 minutes.", statusLabel: "Résolu" },
};

export const statusIncidentsContentEn: Record<string, StatusIncidentContent> = {
  "incident-2024-01-10": { title: "Temporary API Latency", description: "Slight increase in API response times for 15 minutes. Resolved.", statusLabel: "Resolved" },
  "incident-2023-12-15": { title: "Scheduled Maintenance", description: "30-minute maintenance for infrastructure update. No user impact.", statusLabel: "Resolved" },
  "incident-2023-11-20": { title: "Transcription Issue", description: "Temporary delay in transcription generation. Resolved in 45 minutes.", statusLabel: "Resolved" },
};

// Helper functions
export function getArticleContent(slug: string, lang: Locale): ArticleContent | undefined {
  return lang === "fr" ? articlesContentFr[slug] : articlesContentEn[slug];
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getGuideContent(slug: string, lang: Locale): GuideContent | undefined {
  return lang === "fr" ? guidesContentFr[slug] : guidesContentEn[slug];
}

export function getCaseStudyContent(slug: string, lang: Locale): CaseStudyContent | undefined {
  return lang === "fr" ? caseStudiesContentFr[slug] : caseStudiesContentEn[slug];
}

export function getVideoContent(id: string, lang: Locale): VideoContent | undefined {
  return lang === "fr" ? videosContentFr[id] : videosContentEn[id];
}

export function getChangelogContent(version: string, lang: Locale): ChangelogContent | undefined {
  return lang === "fr" ? changelogContentFr[version] : changelogContentEn[version];
}

export function getFaqContent(id: string, lang: Locale): FAQContent | undefined {
  return lang === "fr" ? faqContentFr[id] : faqContentEn[id];
}

export function getStatusIncidentContent(id: string, lang: Locale): StatusIncidentContent | undefined {
  return lang === "fr" ? statusIncidentsContentFr[id] : statusIncidentsContentEn[id];
}