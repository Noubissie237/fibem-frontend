import { NavigationItem } from "@/types/navigation";
import { Locale, Dictionary } from "@/types/i18n";

export function getNavigationItems(
  lang: Locale,
  dict?: Dictionary
): NavigationItem[] {
  const t = dict?.nav || {
    home: lang === "fr" ? "Accueil" : "Home",
    services: lang === "fr" ? "Services" : "Services",
    jobs: lang === "fr" ? "Emploi" : "Jobs",
    contact: "Contact",
  };

  return [
    // 1. ACCUEIL
    {
      label: t.home,
      href: `/${lang}`,
    },
    
    // 2. SERVICES (avec sous-menus)
    {
      label: t.services,
      href: `/${lang}/services`,
      megaMenu: {
        sections: [
          {
            title: lang === "fr" ? "Ressources & Support" : "Resources & Support",
            items: [
              {
                label: lang === "fr" ? "Ressources et support (Public)" : "Resources & Support (Public)",
                href: `/${lang}/ressources`,
                description:
                  lang === "fr"
                    ? "Documentation, guides et centre d'aide"
                    : "Documentation, guides and help center",
              },
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
          {
            title: lang === "fr" ? "Offres & Tarifs" : "Plans & Pricing",
            items: [
              {
                label: lang === "fr" ? "Offres et Tarifs" : "Plans & Pricing",
                href: `/${lang}/tarifs`,
                description:
                  lang === "fr"
                    ? "Découvrez nos formules adaptées à vos besoins"
                    : "Discover our plans tailored to your needs",
              },
              {
                label: "Starter",
                href: `/${lang}/tarifs#starter`,
                description:
                  lang === "fr"
                    ? "Idéal pour les TPE. À partir de 29€/mois"
                    : "Ideal for small businesses. From €29/month",
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
          {
            title: lang === "fr" ? "Entreprise" : "Company",
            items: [
              {
                label: lang === "fr" ? "Entreprise" : "Company",
                href: `/${lang}/entreprise/fibem`,
                description:
                  lang === "fr"
                    ? "Mission, vision et valeurs"
                    : "Mission, vision and values",
              },
              {
                label: "FIBEM",
                href: `/${lang}/entreprise/fibem`,
                description:
                  lang === "fr"
                    ? "Qui sommes-nous ?"
                    : "Who are we?",
              },
              {
                label: lang === "fr" ? "Le Groupe" : "The Group",
                href: `/${lang}/entreprise/le-groupe`,
                description:
                  lang === "fr"
                    ? "Notre histoire et expertise"
                    : "Our history and expertise",
              },
            ],
          },
          {
            title: lang === "fr" ? "Partenaires" : "Partners",
            items: [
              {
                label: lang === "fr" ? "Partenaire" : "Partners",
                href: `/${lang}/partenaires`,
                description:
                  lang === "fr"
                    ? "Rejoignez notre réseau de partenaires"
                    : "Join our partner network",
              },
            ],
          },
          {
            title: lang === "fr" ? "Fonctionnalités" : "Features",
            items: [
              {
                label: lang === "fr" ? "Fonctionnalités" : "Features",
                href: `/${lang}/fonctionnalites`,
                description:
                  lang === "fr"
                    ? "Découvrez toutes nos fonctionnalités"
                    : "Discover all our features",
              },
              {
                label: lang === "fr" ? "Téléphonie & Routage" : "Telephony & Routing",
                href: `/${lang}/fonctionnalites#telephonie`,
                description:
                  lang === "fr"
                    ? "Numéros pro et routage intelligent"
                    : "Business numbers and smart routing",
              },
              {
                label: lang === "fr" ? "IA & Transcription" : "AI & Transcription",
                href: `/${lang}/fonctionnalites#ia`,
                description:
                  lang === "fr"
                    ? "Transcription et analyse intelligente"
                    : "Transcription and smart analysis",
              },
            ],
          },
          {
            title: "Solutions",
            items: [
              {
                label: "Solutions",
                href: `/${lang}/solutions`,
                description:
                  lang === "fr"
                    ? "Solutions adaptées à votre métier"
                    : "Solutions tailored to your business",
              },
              {
                label: lang === "fr" ? "Équipes commerciales" : "Sales Teams",
                href: `/${lang}/solutions/equipes-commerciales`,
                description:
                  lang === "fr"
                    ? "Boostez vos ventes"
                    : "Boost your sales",
              },
              {
                label: lang === "fr" ? "Support client" : "Customer Support",
                href: `/${lang}/solutions/support-client`,
                description:
                  lang === "fr"
                    ? "Satisfaction client optimale"
                    : "Optimal customer satisfaction",
              },
            ],
          },
          {
            title: lang === "fr" ? "Performance & Conformité" : "Performance & Compliance",
            items: [
              {
                label: lang === "fr" ? "Expérience utilisateur, performance et conformité" : "User Experience, Performance & Compliance",
                href: `/${lang}/pourquoi-telephonie-ia`,
                description:
                  lang === "fr"
                    ? "UX optimale, performances et conformité RGPD"
                    : "Optimal UX, performance and GDPR compliance",
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
          {
            title: lang === "fr" ? "Différenciation" : "Differentiation",
            items: [
              {
                label: lang === "fr" ? "Page de différenciation" : "Differentiation Page",
                href: `/${lang}/services/differentiation`,
                description:
                  lang === "fr"
                    ? "Ce qui nous rend uniques"
                    : "What makes us unique",
              },
            ],
          },
        ],
        callout: {
          title:
            lang === "fr"
              ? "Découvrez tous nos services"
              : "Discover all our services",
          description:
            lang === "fr"
              ? "Une plateforme complète pour transformer votre téléphonie."
              : "A complete platform to transform your telephony.",
          href: `/${lang}/contact`,
          linkText: lang === "fr" ? "Parler à un expert" : "Talk to an expert",
          variant: "blue",
        },
      },
    },
    
    // 3. EMPLOI (avec sous-menus)
    {
      label: t.jobs,
      href: `/${lang}/emploi/annonces`,
      megaMenu: {
        sections: [
          {
            title: lang === "fr" ? "Opportunités" : "Opportunities",
            items: [
              {
                label: lang === "fr" ? "Candidature" : "Application",
                href: `/${lang}/emploi/candidature`,
                description:
                  lang === "fr"
                    ? "Candidature spontanée"
                    : "Spontaneous application",
              },
              {
                label: lang === "fr" ? "Annonces" : "Job Openings",
                href: `/${lang}/emploi/annonces`,
                description:
                  lang === "fr"
                    ? "Consultez nos offres d'emploi"
                    : "View our job openings",
              },
              {
                label: lang === "fr" ? "Stagiaires" : "Internships",
                href: `/${lang}/emploi/stagiaires`,
                description:
                  lang === "fr"
                    ? "Stages et alternances"
                    : "Internships and work-study programs",
              },
            ],
          },
        ],
        callout: {
          title: lang === "fr" ? "Rejoignez-nous" : "Join Us",
          description:
            lang === "fr"
              ? "Intégrez une équipe passionnée et innovante."
              : "Join a passionate and innovative team.",
          href: `/${lang}/entreprise/rejoignez-nous`,
          linkText: lang === "fr" ? "En savoir plus" : "Learn more",
          variant: "gradient",
        },
      },
    },
    
    // 4. CONTACT
    {
      label: t.contact,
      href: `/${lang}/contact`,
    },
  ];
}

// Export par défaut pour compatibilité
export const navigationItems = getNavigationItems("fr");