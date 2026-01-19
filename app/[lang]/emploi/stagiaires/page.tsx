import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Stages & Alternances - Téléphonie-IA",
  description: "Opportunités de stage et d'alternance chez Téléphonie-IA",
};

const internshipOffers = [
  {
    id: 1,
    title: "Stage Développement Full-Stack",
    duration: "6 mois",
    startDate: "Février - Septembre 2026",
    department: "Engineering",
    description: "Participez au développement de nouvelles fonctionnalités de notre plateforme SaaS. Vous travaillerez sur React, Node.js et découvrirez l'architecture cloud.",
    skills: ["React", "JavaScript/TypeScript", "Git", "API REST"],
    level: "Bac+4/5",
  },
  {
    id: 2,
    title: "Alternance Data Science / IA",
    duration: "12-24 mois",
    startDate: "Septembre 2026",
    department: "R&D",
    description: "Rejoignez notre équipe R&D pour améliorer nos modèles de transcription et d'analyse de sentiment. Formation en Machine Learning souhaitée.",
    skills: ["Python", "Machine Learning", "NLP", "Data Analysis"],
    level: "Bac+4/5",
  },
  {
    id: 3,
    title: "Stage Product Management",
    duration: "6 mois",
    startDate: "Avril - Septembre 2026",
    department: "Product",
    description: "Assistez le Product Manager dans la définition de la roadmap, l'analyse des besoins utilisateurs et le suivi des KPIs produit.",
    skills: ["Analyse", "Communication", "Outils PM", "UX/UI"],
    level: "Bac+4/5",
  },
];

export default function StagiairesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-brand-blue-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Lancez votre carrière avec nous
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Développez vos compétences au sein d'une entreprise innovante dans le domaine de la téléphonie intelligente et de l'IA.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pourquoi nous rejoindre */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Pourquoi faire un stage chez nous ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Projets concrets
                </h3>
                <p className="text-neutral-600">
                  Travaillez sur de vraies fonctionnalités utilisées par nos clients, pas de projets fictifs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Mentorat personnalisé
                </h3>
                <p className="text-neutral-600">
                  Un tuteur dédié vous accompagne tout au long de votre parcours pour maximiser votre apprentissage.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Opportunités d'embauche
                </h3>
                <p className="text-neutral-600">
                  Les meilleurs stagiaires se voient proposer un CDI à l'issue de leur stage.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* Offres de stage */}
      <Section className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              Nos offres de stage et alternance
            </h2>
            
            <div className="space-y-6 mb-12">
              {internshipOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        {offer.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {offer.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {offer.startDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {offer.department}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      {offer.level}
                    </span>
                  </div>

                  <p className="text-neutral-600 mb-6">
                    {offer.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-900 mb-3">
                      Compétences recherchées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {offer.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button href="/fr/contact" variant="primary">
                    Postuler
                  </Button>
                </div>
              ))}
            </div>

            {/* Process de candidature */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Comment postuler ?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    1
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Envoyez votre CV
                  </h4>
                  <p className="text-sm text-neutral-600">
                    CV + lettre de motivation à recrutement@fibem.com
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    2
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Entretien RH
                  </h4>
                  <p className="text-sm text-neutral-600">
                    Discussion sur votre parcours et vos motivations
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    3
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Rencontre équipe
                  </h4>
                  <p className="text-sm text-neutral-600">
                    Échange avec votre futur tuteur et l'équipe
                  </p>
                </div>
              </div>

              <div className="bg-brand-blue-50 border border-brand-blue-100 rounded-lg p-6 text-center">
                <p className="text-neutral-700 mb-4">
                  <strong>Gratification :</strong> Selon la législation en vigueur + tickets restaurant + remboursement transport
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button href="mailto:recrutement@fibem.com" variant="primary">
                    Envoyer ma candidature
                  </Button>
                  <Button href="/fr/emploi/candidature" variant="outline">
                    Candidature spontanée
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
