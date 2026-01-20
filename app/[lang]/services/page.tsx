import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Services - Téléphonie-IA",
  description: "Découvrez l'ensemble de nos services de téléphonie intelligente",
};

export default function ServicesPage() {
  return (
    <main>
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Nos Services
            </h1>
            <p className="text-lg text-neutral-600 mb-12">
              Découvrez notre gamme complète de services pour transformer votre téléphonie d&apos;entreprise.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/fr/ressources"
                className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-blue transition-colors">
                  Ressources & Support
                </h2>
                <p className="text-neutral-600">
                  Documentation complète, guides pratiques et support technique pour vous accompagner.
                </p>
              </Link>

              <Link
                href="/fr/tarifs"
                className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-blue transition-colors">
                  Offres & Tarifs
                </h2>
                <p className="text-neutral-600">
                  Des formules adaptées à tous les besoins, de la TPE à la grande entreprise.
                </p>
              </Link>

              <Link
                href="/fr/entreprise/fibem"
                className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-blue transition-colors">
                  Entreprise
                </h2>
                <p className="text-neutral-600">
                  Découvrez notre mission, notre vision et nos valeurs.
                </p>
              </Link>

              <Link
                href="/fr/partenaires"
                className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-blue transition-colors">
                  Partenaires
                </h2>
                <p className="text-neutral-600">
                  Rejoignez notre réseau de partenaires et développez votre activité.
                </p>
              </Link>

              <Link
                href="/fr/fonctionnalites"
                className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-blue transition-colors">
                  Fonctionnalités
                </h2>
                <p className="text-neutral-600">
                  Plus de 50 fonctionnalités pour optimiser votre téléphonie professionnelle.
                </p>
              </Link>

              <Link
                href="/fr/solutions"
                className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-blue transition-colors">
                  Solutions
                </h2>
                <p className="text-neutral-600">
                  Des solutions adaptées à votre métier et à la taille de votre entreprise.
                </p>
              </Link>

              <Link
                href="/fr/pourquoi-telephonie-ia"
                className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-blue transition-colors">
                  Performance & Conformité
                </h2>
                <p className="text-neutral-600">
                  Excellence UX, performances optimales et conformité RGPD garantie.
                </p>
              </Link>

              <Link
                href="/fr/services/differentiation"
                className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-blue transition-colors">
                  Notre Différenciation
                </h2>
                <p className="text-neutral-600">
                  Découvrez ce qui fait de Téléphonie-IA une solution unique sur le marché.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
