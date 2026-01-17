import { Locale } from "@/types/i18n";

export interface Solution {
  slug: string;
  icon: string;
  image: string;
  heroImage: string;
  color: string;
  metrics: {
    value: string;
    labelFr: string;
    labelEn: string;
  }[];
  features: string[];
}

export const solutions: Solution[] = [
  {
    slug: "pme-eti",
    icon: "building",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    color: "blue",
    metrics: [
      { value: "-40%", labelFr: "d'appels manqués", labelEn: "missed calls" },
      { value: "+25%", labelFr: "de productivité", labelEn: "productivity" },
      { value: "24/7", labelFr: "disponibilité", labelEn: "availability" },
    ],
    features: ["numbers", "routing", "voicemail", "dashboards", "mobile"],
  },
  {
    slug: "equipes-commerciales",
    icon: "users",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
    color: "emerald",
    metrics: [
      { value: "+30%", labelFr: "de leads qualifiés", labelEn: "qualified leads" },
      { value: "2x", labelFr: "plus de rappels", labelEn: "more callbacks" },
      { value: "-50%", labelFr: "de temps admin", labelEn: "admin time" },
    ],
    features: ["transcription", "crm", "click-to-call", "recordings", "analytics"],
  },
  {
    slug: "support-client",
    icon: "headphones",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80",
    color: "purple",
    metrics: [
      { value: "-35%", labelFr: "de temps d'attente", labelEn: "wait time" },
      { value: "+40%", labelFr: "de résolution 1er appel", labelEn: "first call resolution" },
      { value: "4.8/5", labelFr: "satisfaction client", labelEn: "customer satisfaction" },
    ],
    features: ["ivr", "queue", "routing", "sentiment", "quality"],
  },
  {
    slug: "startups",
    icon: "rocket",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80",
    color: "amber",
    metrics: [
      { value: "5 min", labelFr: "pour démarrer", labelEn: "to get started" },
      { value: "0€", labelFr: "d'installation", labelEn: "setup cost" },
      { value: "∞", labelFr: "scalabilité", labelEn: "scalability" },
    ],
    features: ["numbers", "mobile", "integrations", "analytics", "api"],
  },
  {
    slug: "retail",
    icon: "store",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
    color: "rose",
    metrics: [
      { value: "100%", labelFr: "des sites connectés", labelEn: "connected locations" },
      { value: "-60%", labelFr: "de transferts", labelEn: "transfers" },
      { value: "+20%", labelFr: "de conversion", labelEn: "conversion" },
    ],
    features: ["multi-site", "routing", "schedules", "sms", "reporting"],
  },
  {
    slug: "teletravail",
    icon: "home",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1600&q=80",
    color: "cyan",
    metrics: [
      { value: "100%", labelFr: "mobilité", labelEn: "mobility" },
      { value: "1", labelFr: "numéro unique", labelEn: "single number" },
      { value: "0", labelFr: "infrastructure", labelEn: "infrastructure" },
    ],
    features: ["softphone", "presence", "mobile", "collaboration", "security"],
  },
];

export interface SolutionContent {
  title: string;
  shortDescription: string;
  benefit: string;
  heroSubtitle: string;
  problem: {
    title: string;
    description: string;
  };
  howWeHelp: {
    title: string;
    points: string[];
  };
  features: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  results: {
    title: string;
  };
  cta: {
    title: string;
    subtitle: string;
  };
}

export type SolutionsContent = Record<string, SolutionContent>;

export const solutionsContentFr: SolutionsContent = {
  "pme-eti": {
    title: "PME & ETI",
    shortDescription: "Professionnalisez votre accueil téléphonique sans investissement lourd.",
    benefit: "Moins d'appels manqués",
    heroSubtitle: "Une téléphonie professionnelle à la hauteur de vos ambitions, sans la complexité ni les coûts d'un standard traditionnel.",
    problem: {
      title: "Les défis des PME & ETI",
      description: "Les PME et ETI font face à un dilemme : offrir un accueil téléphonique professionnel sans disposer des ressources d'un grand groupe. Les appels manqués représentent des opportunités perdues, le manque de traçabilité complique le suivi client, et les solutions traditionnelles sont souvent surdimensionnées et coûteuses.",
    },
    howWeHelp: {
      title: "Comment Téléphonie-IA transforme votre accueil",
      points: [
        "Numéros professionnels locaux et nationaux en quelques clics",
        "Standard téléphonique cloud sans matériel à installer",
        "Routage intelligent vers le bon interlocuteur automatiquement",
        "Messagerie vocale avec transcription pour ne rien manquer",
        "Tableaux de bord pour piloter votre activité téléphonique",
      ],
    },
    features: {
      title: "Fonctionnalités clés pour les PME",
      items: [
        { title: "Numéros professionnels", description: "Obtenez des numéros locaux ou nationaux instantanément." },
        { title: "Routage intelligent", description: "Dirigez les appels selon les horaires et disponibilités." },
        { title: "Messagerie vocale IA", description: "Transcription automatique de vos messages." },
        { title: "Tableaux de bord", description: "Suivez vos KPIs téléphoniques en temps réel." },
        { title: "Application mobile", description: "Restez joignable partout, sur tous vos appareils." },
        { title: "Multi-utilisateurs", description: "Gérez facilement les accès de votre équipe." },
      ],
    },
    results: {
      title: "Résultats attendus",
    },
    cta: {
      title: "Prêt à professionnaliser votre téléphonie ?",
      subtitle: "Rejoignez les centaines de PME qui ont modernisé leur accueil avec Téléphonie-IA.",
    },
  },
  "equipes-commerciales": {
    title: "Équipes commerciales",
    shortDescription: "Qualifiez vos leads plus vite et ne perdez plus aucune opportunité.",
    benefit: "+30% de leads qualifiés",
    heroSubtitle: "Donnez à vos commerciaux les outils pour convertir plus, avec l'historique complet de chaque interaction à portée de main.",
    problem: {
      title: "Les défis des équipes commerciales",
      description: "Les commerciaux passent trop de temps sur des tâches administratives au lieu de vendre. Les informations sont dispersées entre le téléphone, le CRM et les emails. Les appels ne sont pas tracés, les suivis sont oubliés, et les opportunités s'échappent.",
    },
    howWeHelp: {
      title: "Comment Téléphonie-IA booste vos ventes",
      points: [
        "Transcription automatique de chaque appel commercial",
        "Résumés IA avec les points clés et actions à suivre",
        "Intégration native avec Salesforce, HubSpot et autres CRM",
        "Click-to-call depuis n'importe quelle fiche contact",
        "Analytics détaillés sur l'activité de l'équipe",
      ],
    },
    features: {
      title: "Fonctionnalités clés pour les commerciaux",
      items: [
        { title: "Transcription IA", description: "Chaque appel transcrit automatiquement pour référence." },
        { title: "Intégration CRM", description: "Synchronisation native avec vos outils de vente." },
        { title: "Click-to-call", description: "Appelez en un clic depuis votre CRM ou navigateur." },
        { title: "Enregistrements", description: "Réécoutez les appels pour améliorer vos techniques." },
        { title: "Analytics ventes", description: "Suivez les performances de chaque commercial." },
        { title: "Tags & notes", description: "Qualifiez et annotez vos appels facilement." },
      ],
    },
    results: {
      title: "Résultats attendus",
    },
    cta: {
      title: "Prêt à booster vos performances commerciales ?",
      subtitle: "Équipez vos commerciaux avec les meilleurs outils de téléphonie IA.",
    },
  },
  "support-client": {
    title: "Support client",
    shortDescription: "Réduisez les temps d'attente et améliorez la satisfaction client.",
    benefit: "-35% de temps d'attente",
    heroSubtitle: "Offrez un support téléphonique d'excellence avec des outils intelligents qui aident vos agents à résoudre plus vite.",
    problem: {
      title: "Les défis du support client",
      description: "Les équipes support sont submergées d'appels, les temps d'attente frustrent les clients, et la qualité varie d'un agent à l'autre. Sans outils adaptés, il est difficile de mesurer la satisfaction et d'identifier les axes d'amélioration.",
    },
    howWeHelp: {
      title: "Comment Téléphonie-IA améliore votre support",
      points: [
        "SVI intelligent pour qualifier et router les appels",
        "File d'attente avec estimation du temps et rappel automatique",
        "Analyse de sentiment en temps réel pour détecter les clients frustrés",
        "Supervision live des appels pour les managers",
        "Tableaux de bord qualité avec KPIs détaillés",
      ],
    },
    features: {
      title: "Fonctionnalités clés pour le support",
      items: [
        { title: "SVI personnalisable", description: "Menus vocaux pour orienter efficacement les appelants." },
        { title: "File d'attente intelligente", description: "Gérez les pics d'appels sans frustrer vos clients." },
        { title: "Routage par compétence", description: "Dirigez vers l'agent le plus qualifié." },
        { title: "Analyse de sentiment", description: "Détectez les clients insatisfaits en temps réel." },
        { title: "Supervision live", description: "Écoutez et coachez vos agents pendant les appels." },
        { title: "Rapports qualité", description: "Mesurez et améliorez la performance de votre équipe." },
      ],
    },
    results: {
      title: "Résultats attendus",
    },
    cta: {
      title: "Prêt à transformer votre support client ?",
      subtitle: "Donnez à vos agents les outils pour exceller.",
    },
  },
  "startups": {
    title: "Startups",
    shortDescription: "Lancez-vous en minutes avec une téléphonie qui scale avec vous.",
    benefit: "Opérationnel en 5 min",
    heroSubtitle: "Une solution de téléphonie professionnelle qui grandit avec votre startup, sans infrastructure ni engagement.",
    problem: {
      title: "Les défis des startups",
      description: "Les startups ont besoin d'aller vite et de rester agiles. Les solutions de téléphonie traditionnelles sont trop rigides, trop chères et trop longues à déployer. Pourtant, paraître professionnel au téléphone est crucial pour crédibiliser la jeune entreprise.",
    },
    howWeHelp: {
      title: "Comment Téléphonie-IA accompagne votre croissance",
      points: [
        "Création de compte et numéro en moins de 5 minutes",
        "Aucune infrastructure à gérer, tout est dans le cloud",
        "Tarifs flexibles qui s'adaptent à votre croissance",
        "API complète pour intégrer avec votre stack technique",
        "Fonctionnalités IA incluses dès le départ",
      ],
    },
    features: {
      title: "Fonctionnalités clés pour les startups",
      items: [
        { title: "Setup instantané", description: "Opérationnel en quelques minutes, pas en semaines." },
        { title: "App mobile", description: "Travaillez de n'importe où avec votre numéro pro." },
        { title: "Intégrations", description: "Connectez avec Slack, Notion, Zapier et plus." },
        { title: "Analytics", description: "Comprenez votre activité téléphonique dès le début." },
        { title: "API ouverte", description: "Construisez des automatisations sur mesure." },
        { title: "Évolutivité", description: "Ajoutez des utilisateurs et numéros à la demande." },
      ],
    },
    results: {
      title: "Résultats attendus",
    },
    cta: {
      title: "Prêt à lancer votre téléphonie startup ?",
      subtitle: "Commencez gratuitement et scalez quand vous êtes prêt.",
    },
  },
  "retail": {
    title: "Retail & Multi-sites",
    shortDescription: "Unifiez la téléphonie de tous vos points de vente.",
    benefit: "100% des sites connectés",
    heroSubtitle: "Une solution centralisée pour gérer la téléphonie de tous vos magasins, avec une vue unifiée et un contrôle total.",
    problem: {
      title: "Les défis du retail multi-sites",
      description: "Gérer la téléphonie de plusieurs points de vente est un casse-tête : contrats multiples, numéros dispersés, impossible de savoir ce qui se passe dans chaque magasin. Les clients sont transférés d'un site à l'autre et finissent par raccrocher.",
    },
    howWeHelp: {
      title: "Comment Téléphonie-IA unifie vos sites",
      points: [
        "Un numéro unique avec routage intelligent par zone géographique",
        "Gestion centralisée de tous vos points de vente",
        "Horaires personnalisés par magasin",
        "Reporting consolidé multi-sites",
        "SMS pour les confirmations et promotions",
      ],
    },
    features: {
      title: "Fonctionnalités clés pour le retail",
      items: [
        { title: "Multi-sites", description: "Gérez tous vos magasins depuis une interface unique." },
        { title: "Routage géographique", description: "Dirigez vers le point de vente le plus proche." },
        { title: "Horaires par site", description: "Configurez les horaires de chaque magasin." },
        { title: "SMS promotionnel", description: "Envoyez des offres ciblées à vos clients." },
        { title: "Reporting consolidé", description: "Vue d'ensemble de tous vos sites." },
        { title: "Numéros locaux", description: "Un numéro local pour chaque zone de chalandise." },
      ],
    },
    results: {
      title: "Résultats attendus",
    },
    cta: {
      title: "Prêt à unifier votre téléphonie retail ?",
      subtitle: "Simplifiez la gestion de tous vos points de vente.",
    },
  },
  "teletravail": {
    title: "Télétravail & Hybride",
    shortDescription: "Travaillez de partout avec la même qualité qu'au bureau.",
    benefit: "100% mobilité",
    heroSubtitle: "Une téléphonie professionnelle qui vous suit partout, sur tous vos appareils, sans compromis sur la qualité.",
    problem: {
      title: "Les défis du travail hybride",
      description: "Le télétravail a bouleversé les usages : les collaborateurs sont dispersés, les numéros personnels se mélangent avec les pro, et la frontière vie pro/perso s'efface. Pourtant, les clients attendent la même qualité de service qu'avant.",
    },
    howWeHelp: {
      title: "Comment Téléphonie-IA facilite le travail hybride",
      points: [
        "Un numéro professionnel unique, accessible de partout",
        "Applications desktop, web et mobile synchronisées",
        "Statut de disponibilité visible par l'équipe",
        "Transferts faciles entre collaborateurs distants",
        "Sécurité renforcée pour les connexions à distance",
      ],
    },
    features: {
      title: "Fonctionnalités clés pour le télétravail",
      items: [
        { title: "Softphone", description: "Appelez depuis votre ordinateur ou smartphone." },
        { title: "Statut de présence", description: "Indiquez votre disponibilité à vos collègues." },
        { title: "App mobile", description: "Votre numéro pro dans votre poche." },
        { title: "Transferts faciles", description: "Passez les appels entre collègues en un clic." },
        { title: "Sécurité", description: "Connexions chiffrées et authentification forte." },
        { title: "Collaboration", description: "Partagez des contacts et historiques d'appels." },
      ],
    },
    results: {
      title: "Résultats attendus",
    },
    cta: {
      title: "Prêt à libérer votre téléphonie ?",
      subtitle: "Travaillez de n'importe où sans perdre en professionnalisme.",
    },
  },
};

export const solutionsContentEn: SolutionsContent = {
  "pme-eti": {
    title: "SMBs",
    shortDescription: "Professionalize your phone reception without heavy investment.",
    benefit: "Fewer missed calls",
    heroSubtitle: "Professional telephony that matches your ambitions, without the complexity or costs of a traditional PBX.",
    problem: {
      title: "SMB challenges",
      description: "SMBs face a dilemma: offering professional phone reception without the resources of a large corporation. Missed calls mean lost opportunities, lack of traceability complicates customer follow-up, and traditional solutions are often oversized and expensive.",
    },
    howWeHelp: {
      title: "How Téléphonie-IA transforms your reception",
      points: [
        "Professional local and national numbers in a few clicks",
        "Cloud phone system with no hardware to install",
        "Smart routing to the right person automatically",
        "Voicemail with transcription so you never miss anything",
        "Dashboards to manage your phone activity",
      ],
    },
    features: {
      title: "Key features for SMBs",
      items: [
        { title: "Professional numbers", description: "Get local or national numbers instantly." },
        { title: "Smart routing", description: "Direct calls based on schedules and availability." },
        { title: "AI voicemail", description: "Automatic transcription of your messages." },
        { title: "Dashboards", description: "Track your phone KPIs in real-time." },
        { title: "Mobile app", description: "Stay reachable everywhere, on all your devices." },
        { title: "Multi-user", description: "Easily manage your team's access." },
      ],
    },
    results: {
      title: "Expected results",
    },
    cta: {
      title: "Ready to professionalize your telephony?",
      subtitle: "Join hundreds of SMBs that have modernized their reception with Téléphonie-IA.",
    },
  },
  "equipes-commerciales": {
    title: "Sales teams",
    shortDescription: "Qualify leads faster and never miss an opportunity.",
    benefit: "+30% qualified leads",
    heroSubtitle: "Give your sales team the tools to convert more, with complete interaction history at their fingertips.",
    problem: {
      title: "Sales team challenges",
      description: "Salespeople spend too much time on admin tasks instead of selling. Information is scattered between phone, CRM and emails. Calls aren't tracked, follow-ups are forgotten, and opportunities slip away.",
    },
    howWeHelp: {
      title: "How Téléphonie-IA boosts your sales",
      points: [
        "Automatic transcription of every sales call",
        "AI summaries with key points and action items",
        "Native integration with Salesforce, HubSpot and other CRMs",
        "Click-to-call from any contact card",
        "Detailed analytics on team activity",
      ],
    },
    features: {
      title: "Key features for sales",
      items: [
        { title: "AI transcription", description: "Every call automatically transcribed for reference." },
        { title: "CRM integration", description: "Native sync with your sales tools." },
        { title: "Click-to-call", description: "Call with one click from your CRM or browser." },
        { title: "Recordings", description: "Listen back to calls to improve techniques." },
        { title: "Sales analytics", description: "Track each salesperson's performance." },
        { title: "Tags & notes", description: "Qualify and annotate your calls easily." },
      ],
    },
    results: {
      title: "Expected results",
    },
    cta: {
      title: "Ready to boost your sales performance?",
      subtitle: "Equip your salespeople with the best AI telephony tools.",
    },
  },
  "support-client": {
    title: "Customer support",
    shortDescription: "Reduce wait times and improve customer satisfaction.",
    benefit: "-35% wait time",
    heroSubtitle: "Deliver excellent phone support with smart tools that help your agents resolve issues faster.",
    problem: {
      title: "Customer support challenges",
      description: "Support teams are overwhelmed with calls, wait times frustrate customers, and quality varies from agent to agent. Without the right tools, it's hard to measure satisfaction and identify areas for improvement.",
    },
    howWeHelp: {
      title: "How Téléphonie-IA improves your support",
      points: [
        "Smart IVR to qualify and route calls",
        "Queue with time estimation and automatic callback",
        "Real-time sentiment analysis to detect frustrated customers",
        "Live call supervision for managers",
        "Quality dashboards with detailed KPIs",
      ],
    },
    features: {
      title: "Key features for support",
      items: [
        { title: "Customizable IVR", description: "Voice menus to efficiently guide callers." },
        { title: "Smart queue", description: "Manage call peaks without frustrating customers." },
        { title: "Skill-based routing", description: "Direct to the most qualified agent." },
        { title: "Sentiment analysis", description: "Detect unhappy customers in real-time." },
        { title: "Live supervision", description: "Listen and coach agents during calls." },
        { title: "Quality reports", description: "Measure and improve team performance." },
      ],
    },
    results: {
      title: "Expected results",
    },
    cta: {
      title: "Ready to transform your customer support?",
      subtitle: "Give your agents the tools to excel.",
    },
  },
  "startups": {
    title: "Startups",
    shortDescription: "Get started in minutes with telephony that scales with you.",
    benefit: "Live in 5 min",
    heroSubtitle: "A professional telephony solution that grows with your startup, no infrastructure or commitment required.",
    problem: {
      title: "Startup challenges",
      description: "Startups need to move fast and stay agile. Traditional telephony solutions are too rigid, too expensive and take too long to deploy. Yet sounding professional on the phone is crucial for credibility.",
    },
    howWeHelp: {
      title: "How Téléphonie-IA supports your growth",
      points: [
        "Account and number creation in under 5 minutes",
        "No infrastructure to manage, everything is in the cloud",
        "Flexible pricing that adapts to your growth",
        "Full API to integrate with your tech stack",
        "AI features included from day one",
      ],
    },
    features: {
      title: "Key features for startups",
      items: [
        { title: "Instant setup", description: "Live in minutes, not weeks." },
        { title: "Mobile app", description: "Work from anywhere with your pro number." },
        { title: "Integrations", description: "Connect with Slack, Notion, Zapier and more." },
        { title: "Analytics", description: "Understand your phone activity from day one." },
        { title: "Open API", description: "Build custom automations." },
        { title: "Scalability", description: "Add users and numbers on demand." },
      ],
    },
    results: {
      title: "Expected results",
    },
    cta: {
      title: "Ready to launch your startup telephony?",
      subtitle: "Start free and scale when you're ready.",
    },
  },
  "retail": {
    title: "Retail & Multi-site",
    shortDescription: "Unify telephony across all your locations.",
    benefit: "100% connected sites",
    heroSubtitle: "A centralized solution to manage telephony across all your stores, with unified visibility and total control.",
    problem: {
      title: "Multi-site retail challenges",
      description: "Managing telephony across multiple locations is a headache: multiple contracts, scattered numbers, no visibility into what's happening at each store. Customers get transferred between sites and end up hanging up.",
    },
    howWeHelp: {
      title: "How Téléphonie-IA unifies your sites",
      points: [
        "Single number with smart geographic routing",
        "Centralized management of all your locations",
        "Customized schedules per store",
        "Consolidated multi-site reporting",
        "SMS for confirmations and promotions",
      ],
    },
    features: {
      title: "Key features for retail",
      items: [
        { title: "Multi-site", description: "Manage all your stores from one interface." },
        { title: "Geographic routing", description: "Direct to the nearest location." },
        { title: "Per-site schedules", description: "Configure each store's hours." },
        { title: "Promotional SMS", description: "Send targeted offers to customers." },
        { title: "Consolidated reporting", description: "Overview of all your sites." },
        { title: "Local numbers", description: "A local number for each catchment area." },
      ],
    },
    results: {
      title: "Expected results",
    },
    cta: {
      title: "Ready to unify your retail telephony?",
      subtitle: "Simplify management across all your locations.",
    },
  },
  "teletravail": {
    title: "Remote & Hybrid",
    shortDescription: "Work from anywhere with the same quality as the office.",
    benefit: "100% mobility",
    heroSubtitle: "Professional telephony that follows you everywhere, on all your devices, without compromising on quality.",
    problem: {
      title: "Hybrid work challenges",
      description: "Remote work has disrupted habits: employees are scattered, personal and work numbers get mixed up, and the work/life boundary blurs. Yet customers expect the same quality of service as before.",
    },
    howWeHelp: {
      title: "How Téléphonie-IA enables hybrid work",
      points: [
        "One professional number, accessible from anywhere",
        "Synchronized desktop, web and mobile apps",
        "Availability status visible to the team",
        "Easy transfers between remote colleagues",
        "Enhanced security for remote connections",
      ],
    },
    features: {
      title: "Key features for remote work",
      items: [
        { title: "Softphone", description: "Call from your computer or smartphone." },
        { title: "Presence status", description: "Show your availability to colleagues." },
        { title: "Mobile app", description: "Your pro number in your pocket." },
        { title: "Easy transfers", description: "Pass calls between colleagues with one click." },
        { title: "Security", description: "Encrypted connections and strong authentication." },
        { title: "Collaboration", description: "Share contacts and call histories." },
      ],
    },
    results: {
      title: "Expected results",
    },
    cta: {
      title: "Ready to free your telephony?",
      subtitle: "Work from anywhere without losing professionalism.",
    },
  },
};

export function getSolutionContent(slug: string, lang: Locale): SolutionContent | undefined {
  const content = lang === "fr" ? solutionsContentFr : solutionsContentEn;
  return content[slug];
}

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((s) => s.slug);
}