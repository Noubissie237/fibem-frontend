import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { changelog, getChangelogContent } from "@/lib/resources";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return { title: "Changelog | Téléphonie-IA" };
}

const typeColors: Record<string, "green" | "blue" | "gold"> = {
  feature: "green",
  improvement: "blue",
  fix: "gold",
};

export default async function ChangelogPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const { changelog: changelogDict } = dict.resourcesPage;

  return (
    <>
      <PageHero
        title={changelogDict.title}
        subtitle={changelogDict.subtitle}
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
        breadcrumbs={[
          { label: dict.nav.resources, href: `/${lang}/ressources` },
          { label: "Changelog" },
        ]}
        size="sm"
      />

      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {changelog.map((entry) => {
              const content = getChangelogContent(entry.version, lang);
              if (!content) return null;

              return (
                <div key={entry.version} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-brand-blue" />
                    <div className="w-px flex-1 bg-neutral-200" />
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono font-bold text-neutral-900">v{entry.version}</span>
                      <Badge variant={typeColors[entry.type]}>{content.typeLabel}</Badge>
                      <span className="text-sm text-neutral-500">{entry.date}</span>
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{content.title}</h3>
                    <p className="text-neutral-600">{content.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}