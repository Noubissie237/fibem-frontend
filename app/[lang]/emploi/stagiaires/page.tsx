import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";

interface InternshipsPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: InternshipsPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.internshipsPage.meta.title,
    description: dict.internshipsPage.meta.description,
  };
}

// Icons for "Why Join" section
const REASON_ICONS = [
  // Projets concrets
  <svg key="projects" className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  // Mentorat personnalisé
  <svg key="mentoring" className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
  // Opportunités d'embauche
  <svg key="opportunities" className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
];

export default async function InternshipsPage({ params }: InternshipsPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { internshipsPage: t } = dict;

  return (
    <main>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-brand-blue-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              {t.hero.subtitle}
            </p>
          </div>
        </Container>
      </Section>

      {/* Pourquoi nous rejoindre */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              {t.whyJoin.title}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {t.whyJoin.reasons.map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {REASON_ICONS[index]}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-neutral-600">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Offres de stage */}
      <Section className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              {t.offers.title}
            </h2>
            
            <div className="space-y-6 mb-12">
              {t.offers.items.map((offer) => (
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
                      {t.offers.skillsLabel}
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

                  <Button href={`/${lang}/contact`} variant="primary">
                    {t.offers.applyButton}
                  </Button>
                </div>
              ))}
            </div>

            {/* Process de candidature */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                {t.process.title}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {t.process.steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                      {step.number}
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-brand-blue-50 border border-brand-blue-100 rounded-lg p-6 text-center">
                <p className="text-neutral-700 mb-4">
                  <strong>{t.process.compensation}</strong>
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button href="mailto:recrutement@fibem.com" variant="primary">
                    {t.process.sendApplication}
                  </Button>
                  <Button href={`/${lang}/emploi/candidature`} variant="outline">
                    {t.process.spontaneousApplication}
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