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
    id: "marie-dupont",
    name: "Marie Dupont",
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
  "marie-dupont": {
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
  "marie-dupont": {
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
  { year: "2018", id: "founding" },
  { year: "2019", id: "launch" },
  { year: "2021", id: "ai" },
  { year: "2023", id: "growth" },
  { year: "2024", id: "expansion" },
];

export const timelineContentFr: Record<string, TimelineEventContent> = {
  founding: {
    title: "Création de FIBEM",
    description: "Naissance de l'entreprise avec la vision de moderniser la téléphonie d'entreprise.",
  },
  launch: {
    title: "Lancement de Téléphonie-IA",
    description: "Première version de la plateforme avec fonctionnalités cloud essentielles.",
  },
  ai: {
    title: "Intégration de l'IA",
    description: "Ajout de la transcription automatique et des résumés intelligents.",
  },
  growth: {
    title: "500 clients",
    description: "Cap symbolique franchi avec une croissance soutenue sur le marché français.",
  },
  expansion: {
    title: "Nouvelles fonctionnalités",
    description: "Analyse de sentiment, coaching IA, et intégrations CRM avancées.",
  },
};

export const timelineContentEn: Record<string, TimelineEventContent> = {
  founding: {
    title: "FIBEM Founded",
    description: "Company born with the vision to modernize business telephony.",
  },
  launch: {
    title: "Téléphonie-IA Launch",
    description: "First version of the platform with essential cloud features.",
  },
  ai: {
    title: "AI Integration",
    description: "Addition of automatic transcription and smart summaries.",
  },
  growth: {
    title: "500 Customers",
    description: "Symbolic milestone reached with sustained growth in the French market.",
  },
  expansion: {
    title: "New Features",
    description: "Sentiment analysis, AI coaching, and advanced CRM integrations.",
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