export type Locale = "fr" | "en";

export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    features: string;
    pricing: string;
    solutions: string;
    partners: string;
    why: string;
    resources: string;
    contact: string;
    signin: string;
    signup: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustedBy: string;
    noCard: string;
    dashboardPreview: {
      title: string;
      callsToday: string;
      responseRate: string;
      satisfaction: string;
      activeAgents: string;
    };
  };
  why: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  features: {
    title: string;
    subtitle: string;
    cta: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  useCases: {
    title: string;
    subtitle: string;
    cta: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    cta: string;
    from: string;
    perMonth: string;
    popular: string;
    plans: Array<{
      name: string;
      price: string;
      description: string;
      features: string[];
    }>;
  };
  resources: {
    title: string;
    subtitle: string;
    status: string;
    statusOperational: string;
    items: Array<{
      title: string;
      description: string;
      cta: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  footer: {
    description: string;
    madeIn: string;
    rights: string;
    sections: {
      product: string;
      company: string;
      resources: string;
      legal: string;
    };
  };
}