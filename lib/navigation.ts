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
          linkText: lang === "fr" ? "Voir tout" : "See all",
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
          linkText: lang === "fr" ? "Commencer" : "Get started",
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
                label: lang === "fr" ? "Pourquoi Téléphonie-IA" : "Why Téléphonie-IA",
                href: `/${lang}/pourquoi-telephonie-ia`,
                description:
                  lang === "fr"
                    ? "Découvrez ce qui nous différencie"
                    : "Discover what makes us different",
              },
              {
                label: lang === "fr" ? "Notre vision" : "Our Vision",
                href: `/${lang}/pourquoi-telephonie-ia#approach`,
                description:
                  lang === "fr"
                    ? "Téléphonie cloud + IA + pilotage"
                    : "Cloud telephony + AI + management",
              },
            ],
          },
          {
            title: lang === "fr" ? "Entreprise" : "Company",
            items: [
              {
                label: "FIBEM",
                href: `/${lang}/entreprise/fibem`,
                description:
                  lang === "fr"
                    ? "Mission, vision et valeurs"
                    : "Mission, vision and values",
              },
              {
                label: lang === "fr" ? "Le Groupe" : "The Group",
                href: `/${lang}/entreprise/le-groupe`,
                description:
                  lang === "fr"
                    ? "Notre histoire et expertise"
                    : "Our history and expertise",
              },
              {
                label: lang === "fr" ? "Rejoignez-nous" : "Join Us",
                href: `/${lang}/entreprise/rejoignez-nous`,
                description:
                  lang === "fr"
                    ? "Nos offres d'emploi"
                    : "Our job openings",
              },
            ],
          },
          {
            title: lang === "fr" ? "Confiance" : "Trust",
            items: [
              {
                label: lang === "fr" ? "Témoignages" : "Testimonials",
                href: `/${lang}/pourquoi-telephonie-ia#testimonials`,
                description:
                  lang === "fr"
                    ? "Ce que disent nos clients"
                    : "What our customers say",
              },
              {
                label: lang === "fr" ? "Sécurité & RGPD" : "Security & GDPR",
                href: `/${lang}/ressources/rgpd`,
                description:
                  lang === "fr"
                    ? "Protection de vos données"
                    : "Protecting your data",
              },
            ],
          },
        ],
        callout: {
          title: lang === "fr" ? "500+ entreprises" : "500+ companies",
          description:
            lang === "fr"
              ? "nous font déjà confiance pour leur téléphonie."
              : "already trust us for their telephony.",
          href: `/${lang}/contact`,
          linkText: lang === "fr" ? "Demander une démo →" : "Request a demo →",
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