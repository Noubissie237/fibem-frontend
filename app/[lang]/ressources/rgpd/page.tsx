import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle } from "@/components/ui/Card";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return { title: lang === "fr" ? "RGPD & Confidentialité | Téléphonie-IA" : "GDPR & Privacy | Téléphonie-IA" };
}

export default async function RGPDPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const { rgpd } = dict.resourcesPage;

  return (
    <>
      <PageHero
        title={rgpd.title}
        subtitle={rgpd.subtitle}
        image="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80"
        breadcrumbs={[
          { label: dict.nav.resources, href: `/${lang}/ressources` },
          { label: rgpd.title },
        ]}
        size="sm"
      />

      <Section background="white">
        <div className="max-w-3xl mx-auto space-y-6">
          {rgpd.sections.map((section, index) => (
            <Card key={index} padding="lg">
              <CardTitle className="text-lg mb-3">{section.title}</CardTitle>
              <p className="text-neutral-600 leading-relaxed">{section.content}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}