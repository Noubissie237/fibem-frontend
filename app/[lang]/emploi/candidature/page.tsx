import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";

interface SpontaneousApplicationPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: SpontaneousApplicationPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.spontaneousApplicationPage.meta.title,
    description: dict.spontaneousApplicationPage.meta.description,
  };
}

export default async function SpontaneousApplicationPage({ params }: SpontaneousApplicationPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { spontaneousApplicationPage: t } = dict;

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

      {/* Formulaire */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Formulaire de contact */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                {t.form.title}
              </h3>
              
              <div className="space-y-6">
                <div className="bg-brand-blue-50 border border-brand-blue-100 rounded-lg p-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">
                    {t.form.howToApply.title}
                  </h4>
                  <p className="text-neutral-600 mb-4">
                    {t.form.howToApply.description}
                  </p>
                  <a 
                    href={`mailto:${t.form.howToApply.email}`}
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-700 transition-colors"
                  >
                    {t.form.howToApply.email}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      {t.form.profiles.title}
                    </h4>
                    <ul className="space-y-2 text-neutral-600">
                      {t.form.profiles.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-brand-blue mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      {t.form.expectations.title}
                    </h4>
                    <ul className="space-y-2 text-neutral-600">
                      {t.form.expectations.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-brand-blue mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-neutral-600 mb-6">
                {t.cta.question}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href={`/${lang}/emploi/annonces`} variant="outline">
                  {t.cta.viewOffers}
                </Button>
                <Button href={`/${lang}/contact`} variant="primary">
                  {t.cta.contactUs}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}