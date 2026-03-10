import { Locale } from "@/types/i18n";

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface TestimonialContent {
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "marie-gomis",
    name: "Marie Gomis",
    role: "Directrice Commerciale",
    company: "TechVision SAS",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    id: "pierre-martin",
    name: "Pierre Martin",
    role: "Responsable Support",
    company: "ServicePro Group",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
  {
    id: "sophie-bernard",
    name: "Sophie Bernard",
    role: "CEO",
    company: "StartupFlow",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
];

export const testimonialsContentFr: Record<string, TestimonialContent> = {
  "marie-gomis": {
    quote: "Depuis que nous utilisons Téléphonie-IA, nos commerciaux ont gagné un temps précieux. Les transcriptions automatiques et les résumés d'appels leur permettent de se concentrer sur la vente plutôt que sur la prise de notes.",
  },
  "pierre-martin": {
    quote: "Le routage intelligent a transformé notre support client. Les temps d'attente ont diminué et nos agents sont plus efficaces grâce aux suggestions en temps réel de l'IA.",
  },
  "sophie-bernard": {
    quote: "En tant que startup, nous avions besoin d'une solution simple et évolutive. Téléphonie-IA nous a permis de paraître professionnels dès le premier jour, sans investissement lourd.",
  },
};

export const testimonialsContentEn: Record<string, TestimonialContent> = {
  "marie-gomis": {
    quote: "Since we started using Téléphonie-IA, our sales team has saved precious time. Automatic transcriptions and call summaries let them focus on selling rather than note-taking.",
  },
  "pierre-martin": {
    quote: "Smart routing has transformed our customer support. Wait times have decreased and our agents are more efficient thanks to real-time AI suggestions.",
  },
  "sophie-bernard": {
    quote: "As a startup, we needed a simple and scalable solution. Téléphonie-IA allowed us to look professional from day one, without heavy investment.",
  },
};

// Company Values
export interface CompanyValue {
  id: string;
  icon: string;
}

export interface CompanyValueContent {
  title: string;
  description: string;
}

export const companyValues: CompanyValue[] = [
  { id: "innovation", icon: "sparkles" },
  { id: "simplicity", icon: "puzzle" },
  { id: "trust", icon: "shield" },
  { id: "excellence", icon: "star" },
  { id: "proximity", icon: "users" },
];

export const companyValuesContentFr: Record<string, CompanyValueContent> = {
  innovation: {
    title: "Innovation",
    description: "Nous repoussons les limites de la téléphonie d'entreprise en intégrant l'IA de manière pragmatique et utile.",
  },
  simplicity: {
    title: "Simplicité",
    description: "La technologie doit simplifier le quotidien, pas le complexifier. Nous concevons des outils intuitifs.",
  },
  trust: {
    title: "Confiance",
    description: "Sécurité, conformité RGPD, hébergement en France : vos données sont entre de bonnes mains.",
  },
  excellence: {
    title: "Excellence",
    description: "Nous visons la qualité dans tout ce que nous faisons, du code au support client.",
  },
  proximity: {
    title: "Proximité",
    description: "Une équipe française, disponible et à l'écoute de vos besoins spécifiques.",
  },
};

export const companyValuesContentEn: Record<string, CompanyValueContent> = {
  innovation: {
    title: "Innovation",
    description: "We push the boundaries of business telephony by integrating AI in a pragmatic and useful way.",
  },
  simplicity: {
    title: "Simplicity",
    description: "Technology should simplify daily life, not complicate it. We design intuitive tools.",
  },
  trust: {
    title: "Trust",
    description: "Security, GDPR compliance, hosting in France: your data is in good hands.",
  },
  excellence: {
    title: "Excellence",
    description: "We strive for quality in everything we do, from code to customer support.",
  },
  proximity: {
    title: "Proximity",
    description: "A French team, available and attentive to your specific needs.",
  },
};

// Timeline
export interface TimelineEvent {
  year: string;
  id: string;
}

export interface TimelineEventContent {
  title: string;
  description: string;
}

export const timeline: TimelineEvent[] = [
  { year: "2001", id: "founding" },
  { year: "2010", id: "launch_senegal" },
  { year: "2014", id: "launch_france" },
  { year: "2025", id: "growth" },
  { year: "2026", id: "expansion" },
];

export const timelineContentFr: Record<string, TimelineEventContent> = {
  founding: {
    title: "Création de FIBEM",
    description:
      "Naissance de l’entreprise en France avec l’ouverture du bureau d’études et du bureau d’ingénierie.",
  },
  launch_senegal: {
    title: "Création de SEN FIBEM Sénégal",
    description:
      "Implantation de SEN FIBEM au Sénégal avec des activités dans les secteurs du bâtiment, de l’industrie et des tiers CR.",
  },
  launch_france: {
    title: "Création de SEN FIBEM France",
    description:
      "Implantation de SEN FIBEM en France avec des activités dans les secteurs du bâtiment, de l’industrie et des tiers CR.",
  },
  growth: {
    title: "Création de l’agence digitale & marketing",
    description:
      "Lancement d’une agence dédiée au digital et au marketing afin d’accompagner les entreprises dans leur transformation numérique et le développement de leur présence en ligne.",
  },
  expansion: {
    title: "Lancement de la Téléphonie IA",
    description:
      "Mise en place d’une solution innovante de téléphonie intégrant l’intelligence artificielle afin d’optimiser la communication et les interactions avec les clients.",
  },
};

export const timelineContentEn: Record<string, TimelineEventContent> = {
  founding: {
    title: "Founding of FIBEM",
    description:
      "The company was established in France with the opening of a design office and an engineering office.",
  },
  launch_senegal: {
    title: "Launch of SEN FIBEM Senegal",
    description:
      "Establishment of SEN FIBEM in Senegal with activities in the construction, industrial, and CR third-party sectors.",
  },
  launch_france: {
    title: "Launch of SEN FIBEM France",
    description:
      "Establishment of SEN FIBEM in France with activities in the construction, industrial, and CR third-party sectors.",
  },
  growth: {
    title: "Creation of the Digital & Marketing Agency",
    description:
      "Launch of a dedicated digital and marketing agency to support companies in their digital transformation and the development of their online presence.",
  },
  expansion: {
    title: "Launch of AI Telephony",
    description:
      "Introduction of an innovative telephony solution powered by artificial intelligence to optimize communication and customer interactions.",
  },
};

// Job Offers
export interface JobOffer {
  id: string;
  department: string;
  location: string;
  type: string;
}

export interface JobOfferContent {
  title: string;
  departmentLabel: string;
  typeLabel: string;
}

export const jobOffers: JobOffer[] = [
  { id: "fullstack-dev", department: "tech", location: "Paris", type: "cdi" },
  { id: "product-manager", department: "product", location: "Paris", type: "cdi" },
  { id: "customer-success", department: "customer", location: "Lyon", type: "cdi" },
  { id: "ml-engineer", department: "tech", location: "Remote", type: "cdi" },
  { id: "sales-executive", department: "sales", location: "Paris", type: "cdi" },
];

export const jobOffersContentFr: Record<string, JobOfferContent> = {
  "fullstack-dev": {
    title: "Développeur Full-Stack Senior",
    departmentLabel: "Tech",
    typeLabel: "CDI",
  },
  "product-manager": {
    title: "Product Manager",
    departmentLabel: "Produit",
    typeLabel: "CDI",
  },
  "customer-success": {
    title: "Customer Success Manager",
    departmentLabel: "Client",
    typeLabel: "CDI",
  },
  "ml-engineer": {
    title: "Ingénieur Machine Learning",
    departmentLabel: "Tech",
    typeLabel: "CDI",
  },
  "sales-executive": {
    title: "Commercial B2B",
    departmentLabel: "Ventes",
    typeLabel: "CDI",
  },
};

export const jobOffersContentEn: Record<string, JobOfferContent> = {
  "fullstack-dev": {
    title: "Senior Full-Stack Developer",
    departmentLabel: "Tech",
    typeLabel: "Permanent",
  },
  "product-manager": {
    title: "Product Manager",
    departmentLabel: "Product",
    typeLabel: "Permanent",
  },
  "customer-success": {
    title: "Customer Success Manager",
    departmentLabel: "Customer",
    typeLabel: "Permanent",
  },
  "ml-engineer": {
    title: "Machine Learning Engineer",
    departmentLabel: "Tech",
    typeLabel: "Permanent",
  },
  "sales-executive": {
    title: "B2B Sales Executive",
    departmentLabel: "Sales",
    typeLabel: "Permanent",
  },
};

// Key Figures
export interface KeyFigure {
  id: string;
  value: string;
}

export interface KeyFigureContent {
  label: string;
}

export const keyFigures: KeyFigure[] = [
  { id: "customers", value: "500+" },
  { id: "calls", value: "1M+" },
  { id: "uptime", value: "99.9%" },
  { id: "team", value: "50+" },
];

export const keyFiguresContentFr: Record<string, KeyFigureContent> = {
  customers: { label: "Clients actifs" },
  calls: { label: "Appels traités/mois" },
  uptime: { label: "Disponibilité" },
  team: { label: "Collaborateurs" },
};

export const keyFiguresContentEn: Record<string, KeyFigureContent> = {
  customers: { label: "Active customers" },
  calls: { label: "Calls processed/month" },
  uptime: { label: "Uptime" },
  team: { label: "Team members" },
};

// Helper functions
export function getTestimonialContent(id: string, lang: Locale): TestimonialContent | undefined {
  return lang === "fr" ? testimonialsContentFr[id] : testimonialsContentEn[id];
}

export function getCompanyValueContent(id: string, lang: Locale): CompanyValueContent | undefined {
  return lang === "fr" ? companyValuesContentFr[id] : companyValuesContentEn[id];
}

export function getTimelineEventContent(id: string, lang: Locale): TimelineEventContent | undefined {
  return lang === "fr" ? timelineContentFr[id] : timelineContentEn[id];
}

export function getJobOfferContent(id: string, lang: Locale): JobOfferContent | undefined {
  return lang === "fr" ? jobOffersContentFr[id] : jobOffersContentEn[id];
}

export function getKeyFigureContent(id: string, lang: Locale): KeyFigureContent | undefined {
  return lang === "fr" ? keyFiguresContentFr[id] : keyFiguresContentEn[id];
}