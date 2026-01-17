import { NavigationItem } from "@/types/navigation";

export const navigationItems: NavigationItem[] = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Fonctionnalités",
    href: "/fonctionnalites",
    megaMenu: {
      sections: [
        {
          title: "Intelligence Artificielle",
          items: [
            {
              label: "Assistant vocal IA",
              href: "/fonctionnalites#assistant-vocal",
              description:
                "Répondez à vos appels 24h/24 avec notre IA conversationnelle",
            },
            {
              label: "Transcription automatique",
              href: "/fonctionnalites#transcription",
              description:
                "Convertissez automatiquement vos appels en texte exploitable",
            },
            {
              label: "Analyse de sentiment",
              href: "/fonctionnalites#sentiment",
              description:
                "Comprenez les émotions de vos interlocuteurs en temps réel",
            },
          ],
        },
        {
          title: "Gestion des appels",
          items: [
            {
              label: "Routage intelligent",
              href: "/fonctionnalites#routage",
              description:
                "Dirigez les appels vers le bon interlocuteur automatiquement",
            },
            {
              label: "File d'attente virtuelle",
              href: "/fonctionnalites#file-attente",
              description: "Gérez les pics d'appels sans frustrer vos clients",
            },
            {
              label: "Messagerie unifiée",
              href: "/fonctionnalites#messagerie",
              description: "Centralisez tous vos messages en un seul endroit",
            },
          ],
        },
        {
          title: "Analytics & Reporting",
          items: [
            {
              label: "Tableaux de bord",
              href: "/fonctionnalites#dashboards",
              description: "Visualisez vos KPIs téléphoniques en temps réel",
            },
            {
              label: "Rapports automatisés",
              href: "/fonctionnalites#rapports",
              description: "Recevez des insights réguliers sur votre activité",
            },
          ],
        },
      ],
      callout: {
        title: "Découvrez toutes nos fonctionnalités",
        description:
          "Plus de 50 fonctionnalités pour transformer votre téléphonie d'entreprise.",
        href: "/fonctionnalites",
        linkText: "Voir tout",
        variant: "blue",
      },
    },
  },
  {
    label: "Tarifs",
    href: "/tarifs",
    megaMenu: {
      sections: [
        {
          title: "Nos offres",
          items: [
            {
              label: "Starter",
              href: "/tarifs#starter",
              description:
                "Idéal pour les TPE et indépendants. À partir de 29€/mois",
            },
            {
              label: "Business",
              href: "/tarifs#business",
              description:
                "Pour les PME en croissance. À partir de 79€/mois",
            },
            {
              label: "Enterprise",
              href: "/tarifs#enterprise",
              description: "Solution sur-mesure pour les grandes entreprises",
            },
          ],
        },
        {
          title: "Options",
          items: [
            {
              label: "Comparer les offres",
              href: "/tarifs#comparatif",
              description: "Trouvez l'offre adaptée à vos besoins",
            },
            {
              label: "Calculateur de prix",
              href: "/tarifs#calculateur",
              description: "Estimez votre budget en quelques clics",
            },
          ],
        },
      ],
      callout: {
        title: "Essai gratuit 14 jours",
        description: "Testez toutes les fonctionnalités sans engagement.",
        href: "/inscription",
        linkText: "Commencer gratuitement",
        variant: "gradient",
      },
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    megaMenu: {
      sections: [
        {
          title: "Par secteur",
          items: [
            {
              label: "Santé & Médical",
              href: "/solutions#sante",
              description: "Gestion des rendez-vous et urgences médicales",
            },
            {
              label: "Immobilier",
              href: "/solutions#immobilier",
              description:
                "Qualification des leads et prise de rendez-vous visites",
            },
            {
              label: "E-commerce",
              href: "/solutions#ecommerce",
              description: "Support client et suivi de commandes automatisé",
            },
            {
              label: "Services financiers",
              href: "/solutions#finance",
              description: "Conformité et sécurité des communications",
            },
          ],
        },
        {
          title: "Par taille d'entreprise",
          items: [
            {
              label: "TPE / Indépendants",
              href: "/solutions#tpe",
              description: "Ne manquez plus jamais un appel important",
            },
            {
              label: "PME",
              href: "/solutions#pme",
              description: "Professionnalisez votre accueil téléphonique",
            },
            {
              label: "Grands comptes",
              href: "/solutions#grands-comptes",
              description: "Déployez à l'échelle de votre organisation",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Partenaires",
    href: "/partenaires",
  },
  {
    label: "Pourquoi Téléphonie-IA ?",
    href: "/pourquoi-telephonie-ia",
    megaMenu: {
      sections: [
        {
          title: "Notre approche",
          items: [
            {
              label: "Notre vision",
              href: "/pourquoi-telephonie-ia#vision",
              description:
                "Rendre l'IA accessible à toutes les entreprises",
            },
            {
              label: "Technologie française",
              href: "/pourquoi-telephonie-ia#technologie",
              description: "Développée en France, hébergée en Europe",
            },
            {
              label: "Équipe & expertise",
              href: "/pourquoi-telephonie-ia#equipe",
              description: "20 ans d'expérience en téléphonie d'entreprise",
            },
          ],
        },
        {
          title: "Preuves de valeur",
          items: [
            {
              label: "Témoignages clients",
              href: "/pourquoi-telephonie-ia#temoignages",
              description:
                "Découvrez les retours de nos 500+ clients satisfaits",
            },
            {
              label: "Études de cas",
              href: "/pourquoi-telephonie-ia#etudes-cas",
              description: "ROI concret et résultats mesurables",
            },
            {
              label: "Certifications",
              href: "/pourquoi-telephonie-ia#certifications",
              description: "ISO 27001, RGPD, HDS",
            },
          ],
        },
      ],
      callout: {
        title: "Ils nous font confiance",
        description:
          "Plus de 500 entreprises utilisent Téléphonie-IA au quotidien.",
        href: "/pourquoi-telephonie-ia#clients",
        linkText: "Voir les témoignages",
        variant: "blue",
      },
    },
  },
  {
    label: "Ressources",
    href: "/ressources",
    megaMenu: {
      sections: [
        {
          title: "Apprendre",
          items: [
            {
              label: "Blog",
              href: "/ressources#blog",
              description: "Actualités et bonnes pratiques téléphonie IA",
            },
            {
              label: "Guides pratiques",
              href: "/ressources#guides",
              description: "Tutoriels pas à pas pour bien démarrer",
            },
            {
              label: "Webinaires",
              href: "/ressources#webinaires",
              description: "Sessions live et replays disponibles",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Centre d'aide",
              href: "/ressources#aide",
              description: "FAQ et documentation technique",
            },
            {
              label: "API & Intégrations",
              href: "/ressources#api",
              description: "Connectez vos outils existants",
            },
            {
              label: "Statut des services",
              href: "/ressources#statut",
              description: "Disponibilité en temps réel de nos services",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Contact",
    href: "/contact",
  },
];