import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Offres d'Emploi - Téléphonie-IA",
  description: "Découvrez nos offres d'emploi et rejoignez l'équipe Téléphonie-IA",
};

const jobOffers = [
  {
    id: 1,
    title: "Développeur Full-Stack Senior",
    department: "Engineering",
    location: "Paris / Remote",
    type: "CDI",
    description: "Nous recherchons un développeur Full-Stack passionné pour rejoindre notre équipe produit et participer au développement de notre plateforme de téléphonie intelligente.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    experience: "5+ ans",
  },
  {
    id: 2,
    title: "Ingénieur IA / Machine Learning",
    department: "R&D",
    location: "Paris",
    type: "CDI",
    description: "Rejoignez notre équipe R&D pour développer et améliorer nos modèles d'IA (transcription, analyse de sentiment, résumés automatiques).",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "MLOps"],
    experience: "3+ ans",
  },
  {
    id: 3,
    title: "Product Manager",
    department: "Product",
    location: "Paris / Hybride",
    type: "CDI",
    description: "Pilotez la roadmap produit et travaillez en étroite collaboration avec les équipes engineering, design et business pour créer des fonctionnalités innovantes.",
    skills: ["Product Management", "Agile", "Data Analysis", "UX/UI"],
    experience: "4+ ans",
  },
  {
    id: 4,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Paris / Remote",
    type: "CDI",
    description: "Accompagnez nos clients dans leur adoption de la plateforme et assurez leur satisfaction à long terme.",
    skills: ["Relation client", "SaaS", "Communication", "Analyse"],
    experience: "2+ ans",
  },
];

export default function AnnoncesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-brand-blue-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Nos offres d'emploi
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Rejoignez une équipe passionnée qui révolutionne la téléphonie d'entreprise avec l'intelligence artificielle.
            </p>
          </div>
        </Container>
      </Section>

      {/* Job Offers */}
      <Section className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {jobOffers.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                          {job.title}
                        </h2>
                        <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-blue-100 text-brand-blue">
                        {job.experience}
                      </span>
                    </div>

                    <p className="text-neutral-600 mb-6">
                      {job.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                        Compétences requises
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button href="/fr/contact" variant="primary">
                        Postuler
                      </Button>
                      <button className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-br from-brand-blue-50 to-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Vous ne trouvez pas l'offre idéale ?
              </h3>
              <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                Nous sommes toujours à la recherche de talents passionnés. Envoyez-nous une candidature spontanée !
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/fr/emploi/candidature" variant="primary">
                  Candidature spontanée
                </Button>
                <Button href="/fr/emploi/stagiaires" variant="outline">
                  Stages & Alternances
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
