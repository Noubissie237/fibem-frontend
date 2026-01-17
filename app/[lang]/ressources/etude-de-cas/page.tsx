import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { caseStudies, getCaseStudyContent } from "@/lib/resources";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return { title: lang === "fr" ? "Études de cas | Téléphonie-IA" : "Case Studies | Téléphonie-IA" };
}

export default async function CaseStudiesPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const { caseStudies: csDict } = dict.resourcesPage;

  return (
    <>
      <PageHero
        title={csDict.title}
        subtitle={csDict.subtitle}
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80"
        breadcrumbs={[
          { label: dict.nav.resources, href: `/${lang}/ressources` },
          { label: csDict.title },
        ]}
        size="sm"
      />

      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => {
            const content = getCaseStudyContent(study.slug, lang);
            if (!content) return null;

            return (
              <Card key={study.slug} padding="none" className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={study.image} alt={content.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="blue">{content.industryLabel}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="text-xl mb-4">{content.title}</CardTitle>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-neutral-900">{csDict.challenge}</h4>
                      <p className="text-neutral-600">{content.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">{csDict.solution}</h4>
                      <p className="text-neutral-600">{content.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">{csDict.results}</h4>
                      <p className="text-neutral-600">{content.result}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6 pt-4 border-t border-neutral-100">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-brand-blue">{metric.value}</div>
                        <div className="text-xs text-neutral-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}