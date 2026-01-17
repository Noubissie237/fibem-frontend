import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { videos, getVideoContent } from "@/lib/resources";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return { title: lang === "fr" ? "Vidéos & Tutoriels | Téléphonie-IA" : "Videos & Tutorials | Téléphonie-IA" };
}

function IconPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
  );
}

export default async function VideosPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const { videos: videosDict } = dict.resourcesPage;

  return (
    <>
      <PageHero
        title={videosDict.title}
        subtitle={videosDict.subtitle}
        image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&q=80"
        breadcrumbs={[
          { label: dict.nav.resources, href: `/${lang}/ressources` },
          { label: videosDict.title },
        ]}
        size="sm"
      />

      <Section background="gray">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => {
            const content = getVideoContent(video.id, lang);
            if (!content) return null;

            return (
              <Card key={video.id} hover padding="none" className="overflow-hidden group cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={video.thumbnail}
                    alt={content.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <IconPlay className="w-8 h-8 text-brand-blue ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <Badge variant="blue" className="mb-2">{content.categoryLabel}</Badge>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-brand-blue transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1">{content.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}