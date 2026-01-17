import { NavigationItem } from "@/types/navigation";
import { Locale, Dictionary } from "@/types/i18n";

export function getNavigationItems(
  lang: Locale,
  dict?: Dictionary
): NavigationItem[] {
  const t = dict?.nav || {
    home: lang === "fr" ? "Accueil" : "Home",
    features: lang === "fr" ? "Fonctionnalités" : "Features",
    pricing: lang === "fr" ? "Tarifs" : "Pricing",
    solutions: "Solutions",
    partners: lang === "fr" ? "Partenaires" : "Partners",
    why: lang === "fr" ? "Pourquoi Téléphonie-IA" : "Why Téléphonie-IA",
    resources: lang === "fr" ? "Ressources" : "Resources",
    contact: "Contact",
  };

  return [
    {
      label: t.home,
      href: `/${lang}`,
    },
    {
      label: t.features,
      href: `/${lang}/fonctionnalites`,
      megaMenu: {
        sections: [
          {
            title: lang === "fr" ? "Intelligence Artificielle" : "Artificial Intelligence",
            items: [
              {
                label: lang === "fr" ? "Assistant vocal IA" : "AI Voice Assistant",
                href: `/${lang}/fonctionnalites#assistant-vocal`,
                description:
                  lang === "fr"
                    ? "Répondez à vos appels 24h/24 avec notre IA conversationnelle"
                    : "Answer your calls 24/7 with our conversational AI",
              },
              {
                label: lang === "fr" ? "Transcription automatique" : "Automatic Transcription",
                href: `/${lang}/fonctionnalites#transcription`,
                description:
                  lang === "fr"
                    ? "Convertissez automatiquement vos appels en texte"
                    : "Automatically convert your calls to text",
              },
              {
                label: lang === "fr" ? "Analyse de sentiment" : "Sentiment Analysis",
                href: `/${lang}/fonctionnalites#sentiment`,
                description:
                  lang === "fr"
                    ? "Comprenez les émotions en temps réel"
                    : "Understand emotions in real-time",
              },
            ],
          },
          {
            title: lang === "fr" ? "Gestion des appels" : "Call Management",
            items: [
              {
                label: lang === "fr" ? "Routage intelligent" : "Smart Routing",
                href: `/${lang}/fonctionnalites#routage`,
                description:
                  lang === "fr"
                    ? "Dirigez les appels automatiquement"
                    : "Route calls automatically",
              },
              {
                label: lang === "fr" ? "File d'attente virtuelle" : "Virtual Queue",
                href: `/${lang}/fonctionnalites#file-attente`,
                description:
                  lang === "fr"
                    ? "Gérez les pics d'appels"
                    : "Manage call peaks",
              },
            ],
          },
          {
            title: "Analytics",
            items: [
              {
                label: lang === "fr" ? "Tableaux de bord" : "Dashboards",
                href: `/${lang}/fonctionnalites#dashboards`,
                description:
                  lang === "fr"
                    ? "Visualisez vos KPIs en temps réel"
                    : "Visualize your KPIs in real-time",
              },
            ],
          },
        ],
        callout: {
          title:
            lang === "fr"
              ? "Découvrez toutes nos fonctionnalités"
              : "Discover all our features",
          description:
            lang === "fr"
              ? "Plus de 50 fonctionnalités pour transformer votre téléphonie."
              : "50+ features to transform your telephony.",
          href: `/${lang}/fonctionnalites`,
          linkText: lang === "fr" ? "Voir tout →" : "See all →",
          variant: "blue",
        },
      },
    },
    {
      label: t.pricing,
      href: `/${lang}/tarifs`,
      megaMenu: {
        sections: [
          {
            title: lang === "fr" ? "Nos offres" : "Our Plans",
            items: [
              {
                label: "Starter",
                href: `/${lang}/tarifs#starter`,
                description:
                  lang === "fr"
                    ? "Idéal pour les TPE. À partir de 19€/mois"
                    : "Ideal for small businesses. From €19/month",
              },
              {
                label: "Business",
                href: `/${lang}/tarifs#business`,
                description:
                  lang === "fr"
                    ? "Pour les PME en croissance. À partir de 49€/mois"
                    : "For growing SMBs. From €49/month",
              },
              {
                label: "Enterprise",
                href: `/${lang}/tarifs#enterprise`,
                description:
                  lang === "fr"
                    ? "Solution sur-mesure"
                    : "Custom solution",
              },
            ],
          },
        ],
        callout: {
          title: lang === "fr" ? "Essai gratuit 14 jours" : "14-day free trial",
          description:
            lang === "fr"
              ? "Testez toutes les fonctionnalités sans engagement."
              : "Test all features with no commitment.",
          href: `/${lang}/inscription`,
          linkText: lang === "fr" ? "Commencer →" : "Get started →",
          variant: "gradient",
        },
      },
    },
    {
      label: t.solutions,
      href: `/${lang}/solutions`,
      megaMenu: {
        sections: [
          {
            title: lang === "fr" ? "Par secteur" : "By Industry",
            items: [
              {
                label: lang === "fr" ? "Santé & Médical" : "Healthcare",
                href: `/${lang}/solutions#sante`,
                description:
                  lang === "fr"
                    ? "Gestion des rendez-vous et urgences"
                    : "Appointment and emergency management",
              },
              {
                label: lang === "fr" ? "Immobilier" : "Real Estate",
                href: `/${lang}/solutions#immobilier`,
                description:
                  lang === "fr"
                    ? "Qualification des leads"
                    : "Lead qualification",
              },
              {
                label: "E-commerce",
                href: `/${lang}/solutions#ecommerce`,
                description:
                  lang === "fr"
                    ? "Support client automatisé"
                    : "Automated customer support",
              },
            ],
          },
          {
            title: lang === "fr" ? "Par taille" : "By Size",
            items: [
              {
                label: lang === "fr" ? "TPE / Indépendants" : "Small Business",
                href: `/${lang}/solutions#tpe`,
                description:
                  lang === "fr"
                    ? "Ne manquez plus jamais un appel"
                    : "Never miss a call again",
              },
              {
                label: lang === "fr" ? "PME" : "SMB",
                href: `/${lang}/solutions#pme`,
                description:
                  lang === "fr"
                    ? "Professionnalisez votre accueil"
                    : "Professionalize your reception",
              },
              {
                label: lang === "fr" ? "Grands comptes" : "Enterprise",
                href: `/${lang}/solutions#grands-comptes`,
                description:
                  lang === "fr"
                    ? "Déployez à l'échelle"
                    : "Deploy at scale",
              },
            ],
          },
        ],
      },
    },
    {
      label: t.partners,
      href: `/${lang}/partenaires`,
    },
    {
      label: t.why,
      href: `/${lang}/pourquoi-telephonie-ia`,
      megaMenu: {
        sections: [
          {
            title: lang === "fr" ? "Notre approche" : "Our Approach",
            items: [
              {
                label: lang === "fr" ? "Notre vision" : "Our Vision",
                href: `/${lang}/pourquoi-telephonie-ia#vision`,
                description:
                  lang === "fr"
                    ? "Rendre l'IA accessible à tous"
                    : "Making AI accessible to everyone",
              },
              {
                label: lang === "fr" ? "Technologie française" : "French Technology",
                href: `/${lang}/pourquoi-telephonie-ia#technologie`,
                description:
                  lang === "fr"
                    ? "Développée en France, hébergée en Europe"
                    : "Developed in France, hosted in Europe",
              },
            ],
          },
          {
            title: lang === "fr" ? "Preuves de valeur" : "Proof of Value",
            items: [
              {
                label: lang === "fr" ? "Témoignages" : "Testimonials",
                href: `/${lang}/pourquoi-telephonie-ia#temoignages`,
                description:
                  lang === "fr"
                    ? "500+ clients satisfaits"
                    : "500+ satisfied customers",
              },
              {
                label: lang === "fr" ? "Études de cas" : "Case Studies",
                href: `/${lang}/pourquoi-telephonie-ia#etudes-cas`,
                description:
                  lang === "fr"
                    ? "ROI concret et résultats"
                    : "Concrete ROI and results",
              },
            ],
          },
        ],
        callout: {
          title: lang === "fr" ? "Ils nous font confiance" : "They trust us",
          description:
            lang === "fr"
              ? "Plus de 500 entreprises utilisent Téléphonie-IA."
              : "500+ companies use Téléphonie-IA.",
          href: `/${lang}/pourquoi-telephonie-ia#clients`,
          linkText: lang === "fr" ? "Voir les témoignages →" : "See testimonials →",
          variant: "blue",
        },
      },
    },
    {
      label: t.resources,
      href: `/${lang}/ressources`,
      megaMenu: {
        sections: [
          {
            title: lang === "fr" ? "Apprendre" : "Learn",
            items: [
              {
                label: "Blog",
                href: `/${lang}/ressources#blog`,
                description:
                  lang === "fr"
                    ? "Actualités et bonnes pratiques"
                    : "News and best practices",
              },
              {
                label: lang === "fr" ? "Guides pratiques" : "Practical Guides",
                href: `/${lang}/ressources#guides`,
                description:
                  lang === "fr"
                    ? "Tutoriels pour bien démarrer"
                    : "Tutorials to get started",
              },
              {
                label: lang === "fr" ? "Webinaires" : "Webinars",
                href: `/${lang}/ressources#webinaires`,
                description:
                  lang === "fr"
                    ? "Sessions live et replays"
                    : "Live sessions and replays",
              },
            ],
          },
          {
            title: "Support",
            items: [
              {
                label: lang === "fr" ? "Centre d'aide" : "Help Center",
                href: `/${lang}/ressources#aide`,
                description: "FAQ",
              },
              {
                label: "API & Intégrations",
                href: `/${lang}/ressources#api`,
                description:
                  lang === "fr"
                    ? "Connectez vos outils"
                    : "Connect your tools",
              },
            ],
          },
        ],
      },
    },
    {
      label: t.contact,
      href: `/${lang}/contact`,
    },
  ];
}

// Export par défaut pour compatibilité
export const navigationItems = getNavigationItems("fr");