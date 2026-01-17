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
  },
  solutionsPage: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    grid: {
      title: string;
      subtitle: string;
    };
    benefits: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    choose: {
      title: string;
      subtitle: string;
      cta: string;
      expert: {
        title: string;
        description: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      primary: string;
      secondary: string;
    };
    breadcrumb: {
      solutions: string;
    };
    solutionPage: {
      problem: string;
      howWeHelp: string;
      features: string;
      results: string;
      ctaPrimary: string;
      ctaSecondary: string;
      backToSolutions: string;
    };
  },
  resourcesPage: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    getStarted: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
        cta: string;
      }>;
    };
    documentation: {
      title: string;
      columns: {
        docs: { title: string; items: Array<{ label: string; description: string }> };
        trust: { title: string; items: Array<{ label: string; description: string }> };
        resources: { title: string; items: Array<{ label: string; description: string }> };
      };
      callout: {
        title: string;
        description: string;
        cta: string;
      };
    };
    articles: {
      title: string;
      subtitle: string;
      cta: string;
      readMore: string;
    };
    trust: {
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
    // Sous-pages
    guides: {
      title: string;
      subtitle: string;
      categories: Record<string, string>;
    };
    api: {
      title: string;
      subtitle: string;
      sections: {
        auth: { title: string; description: string };
        webhooks: { title: string; description: string };
        examples: { title: string; description: string };
      };
    };
    changelog: {
      title: string;
      subtitle: string;
      types: Record<string, string>;
    };
    rgpd: {
      title: string;
      subtitle: string;
      sections: Array<{ title: string; content: string }>;
    };
    status: {
      title: string;
      subtitle: string;
      operational: string;
      history: string;
      allSystems: string;
    };
    helpCenter: {
      title: string;
      subtitle: string;
      searchPlaceholder: string;
      categories: string;
      popularQuestions: string;
    };
    caseStudies: {
      title: string;
      subtitle: string;
      challenge: string;
      solution: string;
      results: string;
    };
    blog: {
      title: string;
      subtitle: string;
      allArticles: string;
      filterBy: string;
      categories: Record<string, string>;
    };
    videos: {
      title: string;
      subtitle: string;
      watchNow: string;
      categories: Record<string, string>;
    };
    article: {
      backToBlog: string;
      shareArticle: string;
      relatedArticles: string;
      readTime: string;
    };
  },
  whyPage: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    problem: {
      title: string;
      subtitle: string;
      points: string[];
      stats: Array<{ value: string; label: string }>;
    };
    approach: {
      title: string;
      subtitle: string;
      pillars: Array<{
        title: string;
        description: string;
        cta: string;
      }>;
    };
    comparison: {
      title: string;
      subtitle: string;
      traditional: string;
      modern: string;
      items: Array<{
        aspect: string;
        traditional: string;
        modern: string;
      }>;
    };
    testimonials: {
      title: string;
      subtitle: string;
    };
    company: {
      title: string;
      subtitle: string;
      cards: Array<{
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
  };
  companyPages: {
    breadcrumb: {
      company: string;
    };
    fibem: {
      hero: {
        title: string;
        subtitle: string;
      };
      mission: {
        title: string;
        content: string;
      };
      vision: {
        title: string;
        content: string;
      };
      values: {
        title: string;
        subtitle: string;
      };
      figures: {
        title: string;
        subtitle: string;
      };
      cta: {
        title: string;
        subtitle: string;
        primary: string;
        secondary: string;
      };
    };
    groupe: {
      hero: {
        title: string;
        subtitle: string;
      };
      history: {
        title: string;
        subtitle: string;
      };
      expertise: {
        title: string;
        subtitle: string;
        items: Array<{
          title: string;
          description: string;
        }>;
      };
      commitment: {
        title: string;
        content: string;
      };
      cta: {
        title: string;
        primary: string;
      };
    };
    careers: {
      hero: {
        title: string;
        subtitle: string;
      };
      culture: {
        title: string;
        content: string;
      };
      whyJoin: {
        title: string;
        items: Array<{
          title: string;
          description: string;
        }>;
      };
      openings: {
        title: string;
        subtitle: string;
        apply: string;
        location: string;
      };
      spontaneous: {
        title: string;
        subtitle: string;
        form: {
          name: string;
          email: string;
          message: string;
          submit: string;
        };
      };
      cta: {
        title: string;
        primary: string;
      };
    };
  },
  contactPage: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    form: {
      title: string;
      subtitle: string;
      fields: {
        name: string;
        email: string;
        company: string;
        teamSize: string;
        subject: string;
        phone: string;
        message: string;
        consent: string;
      };
      placeholders: {
        name: string;
        email: string;
        company: string;
        teamSize: string;
        subject: string;
        phone: string;
        message: string;
      };
      teamSizes: Array<{ value: string; label: string }>;
      subjects: Array<{ value: string; label: string }>;
      optional: string;
      submit: string;
      submitting: string;
      success: string;
      errors: {
        required: string;
        email: string;
        consent: string;
      };
    };
    info: {
      title: string;
      email: string;
      hours: string;
      hoursValue: string;
      location: string;
      locationValue: string;
      social: string;
    };
    whyContact: {
      title: string;
      items: string[];
    };
    demo: {
      title: string;
      subtitle: string;
      cta: string;
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
  authPage: {
    signup: {
      title: string;
      subtitle: string;
      imageAlt: string;
      valueTitle: string;
      valueSubtitle: string;
      form: {
        fullName: string;
        email: string;
        password: string;
        confirmPassword: string;
        company: string;
        teamSize: string;
        phone: string;
        consent: string;
        submit: string;
        submitting: string;
      };
      placeholders: {
        fullName: string;
        email: string;
        password: string;
        confirmPassword: string;
        company: string;
        teamSize: string;
        phone: string;
      };
      teamSizes: Array<{ value: string; label: string }>;
      passwordRules: string;
      showPassword: string;
      hidePassword: string;
      alreadyHaveAccount: string;
      signInLink: string;
      success: string;
      goToSignin: string;
      errors: {
        required: string;
        email: string;
        passwordMin: string;
        passwordMatch: string;
        consent: string;
      };
    };
    signin: {
      title: string;
      subtitle: string;
      imageAlt: string;
      valueTitle: string;
      valueSubtitle: string;
      form: {
        email: string;
        password: string;
        rememberMe: string;
        forgotPassword: string;
        submit: string;
        submitting: string;
      };
      placeholders: {
        email: string;
        password: string;
      };
      noAccount: string;
      signUpLink: string;
      success: string;
      redirecting: string;
      errors: {
        required: string;
        email: string;
        invalid: string;
      };
    };
    forgotPassword: {
      title: string;
      subtitle: string;
      form: {
        email: string;
        submit: string;
        submitting: string;
      };
      placeholders: {
        email: string;
      };
      success: string;
      backToSignin: string;
      errors: {
        required: string;
        email: string;
      };
    };
  };
}