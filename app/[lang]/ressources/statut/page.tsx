import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { statusIncidents, getStatusIncidentContent } from "@/lib/resources";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return { title: lang === "fr" ? "Statut du service | Téléphonie-IA" : "Service Status | Téléphonie-IA" };
}

function IconCheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default async function StatusPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const { status } = dict.resourcesPage;

  const services = ["API", "Téléphonie", "Transcription IA", "Dashboard", "Webhooks"];

  return (
    <>
      <PageHero
        title={status.title}
        subtitle={status.subtitle}
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
        breadcrumbs={[
          { label: dict.nav.resources, href: `/${lang}/ressources` },
          { label: status.title },
        ]}
        size="sm"
      />

      <Section background="white">
        <div className="max-w-3xl mx-auto">
          {/* Status banner */}
          <Card className="bg-emerald-50 border-emerald-200 mb-8" padding="lg">
            <div className="flex items-center gap-4">
              <IconCheckCircle className="w-10 h-10 text-emerald-500" />
              <div>
                <h2 className="font-bold text-emerald-800 text-lg">{status.operational}</h2>
                <p className="text-sm text-emerald-600">{status.allSystems}</p>
              </div>
            </div>
          </Card>

          {/* Services list */}
          <div className="space-y-3 mb-12">
            {services.map((service) => (
              <div key={service} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                <span className="font-medium text-neutral-900">{service}</span>
                <Badge variant="green">{lang === "fr" ? "Opérationnel" : "Operational"}</Badge>
              </div>
            ))}
          </div>

          {/* Incident history */}
          <h3 className="font-bold text-neutral-900 text-lg mb-4">{status.history}</h3>
          <div className="space-y-4">
            {statusIncidents.map((incident) => {
              const content = getStatusIncidentContent(incident.id, lang);
              if (!content) return null;

              return (
                <Card key={incident.id} padding="md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-neutral-900">{content.title}</h4>
                      <p className="text-sm text-neutral-600 mt-1">{content.description}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <Badge variant="green">{content.statusLabel}</Badge>
                      <p className="text-xs text-neutral-500 mt-1">{incident.date}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}