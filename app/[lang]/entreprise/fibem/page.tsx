import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CompanyValueCard } from "@/components/company";
import { companyValues, keyFigures, getKeyFigureContent } from "@/lib/company";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return {
    title: "FIBEM | Téléphonie-IA",
    description: lang === "fr"
      ? "Découvrez FIBEM, l'entreprise derrière Téléphonie-IA. Notre mission, vision et valeurs."
      : "Discover FIBEM, the company behind Téléphonie-IA. Our mission, vision and values.",
  };
}

export default async function FibemPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { fibem } = dict.companyPages;

  return (
    <>
      <PageHero
        title={fibem.hero.title}
        subtitle={fibem.hero.subtitle}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
        breadcrumbs={[
          { label: dict.companyPages.breadcrumb.company, href: `/${lang}/pourquoi-telephonie-ia` },
          { label: "FIBEM" },
        ]}
      />

      {/* Mission & Vision */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-8">
          <Card padding="lg" className="bg-brand-blue-50 border-brand-blue-100">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">{fibem.mission.title}</h2>
            <p className="text-neutral-700 leading-relaxed">{fibem.mission.content}</p>
          </Card>
          <Card padding="lg" className="bg-neutral-50">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">{fibem.vision.title}</h2>
            <p className="text-neutral-700 leading-relaxed">{fibem.vision.content}</p>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{fibem.values.title}</h2>
          <p className="text-lg text-neutral-600">{fibem.values.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {companyValues.map((value) => (
            <CompanyValueCard key={value.id} value={value} lang={lang} />
          ))}
        </div>
      </Section>

      {/* Key Figures */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{fibem.figures.title}</h2>
          <p className="text-lg text-neutral-600">{fibem.figures.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFigures.map((figure) => {
            const content = getKeyFigureContent(figure.id, lang);
            if (!content) return null;

            return (
              <Card key={figure.id} padding="lg" className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">{figure.value}</div>
                <p className="text-neutral-600">{content.label}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Team Image */}
      <Section background="gray">
        <div className="relative rounded-2xl overflow-hidden h-80">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
            alt="FIBEM Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-center text-white">
            <p className="text-xl font-semibold">
              {lang === "fr" ? "Une équipe passionnée au service de votre réussite" : "A passionate team dedicated to your success"}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{fibem.cta.title}</h2>
          <p className="text-lg text-white/80 mb-8">{fibem.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`/${lang}/contact`} size="lg" className="bg-white text-brand-blue hover:bg-neutral-100">
              {fibem.cta.primary}
            </Button>
            <Button href={`/${lang}/entreprise/rejoignez-nous`} size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              {fibem.cta.secondary}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}