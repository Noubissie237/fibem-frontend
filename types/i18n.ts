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
  // Nouvelle section pour la page Fonctionnalités
  featuresPage: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    overview: {
      title: string;
      description: string;
    };
    pillars: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
        features: string[];
      }>;
    };
    grid: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    teams: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
        cta: string;
      }>;
    };
    security: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    cta: {
      title: string;
      subtitle: string;
      primary: string;
      secondary: string;
    };
  };
  // Page Tarifs
  pricingPage: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    toggle: {
      monthly: string;
      yearly: string;
      discount: string;
    };
    plans: {
      starter: {
        name: string;
        description: string;
        priceMonthly: string;
        priceYearly: string;
        features: string[];
        cta: string;
      };
      business: {
        name: string;
        description: string;
        priceMonthly: string;
        priceYearly: string;
        features: string[];
        cta: string;
        popular: string;
      };
      enterprise: {
        name: string;
        description: string;
        price: string;
        features: string[];
        cta: string;
      };
    };
    perMonth: string;
    perYear: string;
    compare: {
      title: string;
      subtitle: string;
      features: {
        numbers: string;
        minutes: string;
        recordings: string;
        transcription: string;
        dashboards: string;
        integrations: string;
        support: string;
      };
      values: {
        starter: {
          numbers: string;
          minutes: string;
          recordings: string;
          transcription: string;
          dashboards: string;
          integrations: string;
          support: string;
        };
        business: {
          numbers: string;
          minutes: string;
          recordings: string;
          transcription: string;
          dashboards: string;
          integrations: string;
          support: string;
        };
        enterprise: {
          numbers: string;
          minutes: string;
          recordings: string;
          transcription: string;
          dashboards: string;
          integrations: string;
          support: string;
        };
      };
    };
    addons: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
        cta: string;
      }>;
    };
    billing: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    faq: {
      title: string;
      subtitle: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    cta: {
      title: string;
      subtitle: string;
      primary: string;
      secondary: string;
    };
  };
}