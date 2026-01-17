import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IconPhone } from "@/components/icons/Icons";

const footerLinks = {
  produit: {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "/fonctionnalites" },
      { label: "Tarifs", href: "/tarifs" },
      { label: "Solutions", href: "/solutions" },
      { label: "Intégrations", href: "/ressources#api" },
    ],
  },
  entreprise: {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/pourquoi-telephonie-ia" },
      { label: "Partenaires", href: "/partenaires" },
      { label: "Carrières", href: "/contact#carrieres" },
      { label: "Contact", href: "/contact" },
    ],
  },
  ressources: {
    title: "Ressources",
    links: [
      { label: "Blog", href: "/ressources#blog" },
      { label: "Centre d'aide", href: "/ressources#aide" },
      { label: "Documentation API", href: "/ressources#api" },
      { label: "Statut des services", href: "/ressources#statut" },
    ],
  },
  legal: {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "CGU", href: "/cgu" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <Container>
        {/* Liens principaux */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo et description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-brand-blue rounded-lg">
                <IconPhone className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-none">
                  FIBEM
                </span>
                <span className="text-xs text-neutral-400 leading-none">
                  Téléphonie-IA
                </span>
              </div>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              La solution de téléphonie augmentée par l&apos;intelligence artificielle
              pour les entreprises modernes.
            </p>
          </div>

          {/* Colonnes de liens */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Barre inférieure */}
        <div className="py-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {currentYear} FIBEM. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-neutral-500">
              🇫🇷 Conçu et hébergé en France
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}