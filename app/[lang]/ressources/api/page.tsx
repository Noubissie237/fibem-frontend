import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return { title: "API & Webhooks | Téléphonie-IA" };
}

export default async function APIPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const { api } = dict.resourcesPage;

  return (
    <>
      <PageHero
        title={api.title}
        subtitle={api.subtitle}
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80"
        breadcrumbs={[
          { label: dict.nav.resources, href: `/${lang}/ressources` },
          { label: "API" },
        ]}
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(api.sections).map(([key, section]) => (
            <Card key={key} padding="lg">
              <CardTitle className="text-xl mb-3">{section.title}</CardTitle>
              <CardDescription className="text-base">{section.description}</CardDescription>
              
              {key === "examples" && (
                <div className="mt-6 bg-neutral-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-green-400">
{`// Example API call
const response = await fetch('https://api.telephonie-ia.com/v1/calls', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const calls = await response.json();`}
                  </pre>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href={`/${lang}/contact`} variant="outline">
            {lang === "fr" ? "Contacter l'équipe technique" : "Contact technical team"}
          </Button>
        </div>
      </Section>
    </>
  );
}