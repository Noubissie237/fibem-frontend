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
            title: lang === "fr" ? "Téléphonie & Routage" : "Telephony & Routing",
            items: [
              {
                label: lang === "fr" ? "Numéros professionnels" : "Business Numbers",
                href: `/${lang}/fonctionnalites#telephonie`,
                description:
                  lang === "fr"
                    ? "Numéros locaux, nationaux et internationaux"
                    : "Local, national and international numbers",
              },
              {
                label: lang === "fr" ? "SVI & Routage avancé" : "IVR & Advanced Routing",
                href: `/${lang}/fonctionnalites#telephonie`,
                description:
                  lang === "fr"
                    ? "Menus vocaux et routage intelligent"
                    : "Voice menus and smart routing",
              },
            ],
          },
          {
            title: lang === "fr" ? "Messagerie & SMS" : "Messaging & SMS",
            items: [
              {
                label: lang === "fr" ? "SMS professionnel" : "Business SMS",
                href: `/${lang}/fonctionnalites#messagerie`,
                description:
                  lang === "fr"
                    ? "Envoi et réception depuis vos numéros pro"
                    : "Send and receive from your business numbers",
              },
              {
                label: lang === "fr" ? "Enregistrements" : "Call Recording",
                href: `/${lang}/fonctionnalites#messagerie`,
                description:
                  lang === "fr"
                    ? "Enregistrez et recherchez vos appels"
                    : "Record and search your calls",
              },
            ],
          },
          {
            title: lang === "fr" ? "IA & Qualité" : "AI & Quality",
            items: [
              {
                label: lang === "fr" ? "Transcription IA" : "AI Transcription",
                href: `/${lang}/fonctionnalites#ia`,
                description:
                  lang === "fr"
                    ? "Transcription automatique en temps réel"
                    : "Real-time automatic transcription",
              },
              {
                label: lang === "fr" ? "Résumés intelligents" : "Smart Summaries",
                href: `/${lang}/fonctionnalites#ia`,
                description:
                  lang === "fr"
                    ? "Résumés et analyse de sentiment"
                    : "Summaries and sentiment analysis",
              },
            ],
          },
          {
            title: lang === "fr" ? "Pilotage & Admin" : "Management & Admin",
            items: [
              {
                label: lang === "fr" ? "Tableaux de bord" : "Dashboards",
                href: `/${lang}/fonctionnalites#pilotage`,
                description:
                  lang === "fr"
                    ? "KPIs temps réel et rapports"
                    : "Real-time KPIs and reports",
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
            title: lang === "fr" ? "Par métier" : "By Use Case",
            items: [
              {
                label: lang === "fr" ? "Équipes commerciales" : "Sales Teams",
                href: `/${lang}/solutions/equipes-commerciales`,
                description:
                  lang === "fr"
                    ? "Qualifiez vos leads et boostez vos ventes"
                    : "Qualify leads and boost sales",
              },
              {
                label: lang === "fr" ? "Support client" : "Customer Support",
                href: `/${lang}/solutions/support-client`,
                description:
                  lang === "fr"
                    ? "Améliorez la satisfaction client"
                    : "Improve customer satisfaction",
              },
              {
                label: lang === "fr" ? "Retail & Commerce" : "Retail & Commerce",
                href: `/${lang}/solutions/retail`,
                description:
                  lang === "fr"
                    ? "Connectez tous vos points de vente"
                    : "Connect all your locations",
              },
            ],
          },
          {
            title: lang === "fr" ? "Par taille" : "By Size",
            items: [
              {
                label: lang === "fr" ? "PME & ETI" : "SMBs & Mid-Market",
                href: `/${lang}/solutions/pme-eti`,
                description:
                  lang === "fr"
                    ? "Solution complète pour entreprises"
                    : "Complete solution for businesses",
              },
              {
                label: "Startups",
                href: `/${lang}/solutions/startups`,
                description:
                  lang === "fr"
                    ? "Démarrez en 5 minutes, scalez sans limite"
                    : "Start in 5 minutes, scale unlimited",
              },
              {
                label: lang === "fr" ? "Télétravail" : "Remote Work",
                href: `/${lang}/solutions/teletravail`,
                description:
                  lang === "fr"
                    ? "Téléphonie pro partout, tout le temps"
                    : "Business telephony anywhere, anytime",
              },
            ],
          },
        ],
        callout: {
          title:
            lang === "fr"
              ? "Pas sûr de votre solution ?"
              : "Not sure which solution?",
          description:
            lang === "fr"
              ? "Nos experts vous aident à choisir la configuration idéale."
              : "Our experts help you choose the ideal setup.",
          href: `/${lang}/contact`,
          linkText: lang === "fr" ? "Parler à un expert" : "Talk to an expert",
          variant: "blue",
        },
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