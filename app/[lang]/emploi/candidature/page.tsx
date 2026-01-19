import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Candidature Spontanée - Téléphonie-IA",
  description: "Postulez chez Téléphonie-IA et rejoignez notre équipe innovante",
};

export default function CandidaturePage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-brand-blue-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Candidature spontanée
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Vous ne trouvez pas l'offre qui vous correspond ? Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre équipe.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pourquoi nous rejoindre */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
             {/* Formulaire de contact */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Envoyez-nous votre candidature
              </h3>
              
              <div className="space-y-6">
                <div className="bg-brand-blue-50 border border-brand-blue-100 rounded-lg p-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">
                    📧 Comment postuler ?
                  </h4>
                  <p className="text-neutral-600 mb-4">
                    Envoyez votre CV et lettre de motivation à :
                  </p>
                  <a 
                    href="mailto:recrutement@fibem.com" 
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-700 transition-colors"
                  >
                    recrutement@fibem.com
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Profils recherchés
                    </h4>
                    <ul className="space-y-2 text-neutral-600">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-blue mt-1">✓</span>
                        <span>Développeurs Full-Stack (React, Node.js)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-blue mt-1">✓</span>
                        <span>Ingénieurs IA / Machine Learning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-blue mt-1">✓</span>
                        <span>Product Managers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-blue mt-1">✓</span>
                        <span>Customer Success Managers</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Ce que nous attendons
                    </h4>
                    <ul className="space-y-2 text-neutral-600">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-blue mt-1">✓</span>
                        <span>Passion pour la technologie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-blue mt-1">✓</span>
                        <span>Esprit d'équipe et autonomie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-blue mt-1">✓</span>
                        <span>Curiosité et envie d'apprendre</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-blue mt-1">✓</span>
                        <span>Orientation résultats</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-neutral-600 mb-6">
                Vous avez des questions sur le processus de recrutement ?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/fr/emploi/annonces" variant="outline">
                  Voir nos offres
                </Button>
                <Button href="/fr/contact" variant="primary">
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
