import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { guides, getGuideContent } from "@/lib/resources";
import { IconArrowRight } from "@/components/icons/Icons";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return {
    title: lang === "fr" ? "Guides & Documentation | Téléphonie-IA" : "Guides & Documentation | Téléphonie-IA",
  };
}

export default async function GuidesPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const { guides: guidesDict } = dict.resourcesPage;

  return (
    <>
      <PageHero
        title={guidesDict.title}
        subtitle={guidesDict.subtitle}
        image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80"
        breadcrumbs={[
          { label: dict.nav.resources, href: `/${lang}/ressources` },
          { label: guidesDict.title },
        ]}
      />

      <Section background="gray">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => {
            const content = getGuideContent(guide.slug, lang);
            if (!content) return null;

            return (
              <Card key={guide.slug} hover padding="lg">
                <Badge variant="blue" className="mb-4">{content.categoryLabel}</Badge>
                <CardTitle className="text-lg mb-2">{content.title}</CardTitle>
                <CardDescription className="mb-4">{content.description}</CardDescription>
                <Link
                  href={`/${lang}/ressources/guides/${guide.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-brand-blue-700"
                >
                  {lang === "fr" ? "Lire le guide" : "Read guide"}
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}