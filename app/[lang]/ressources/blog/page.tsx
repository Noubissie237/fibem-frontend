import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { articles, getArticleContent } from "@/lib/resources";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return { title: "Blog | Téléphonie-IA" };
}

export default async function BlogPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const { blog } = dict.resourcesPage;

  return (
    <>
      <PageHero
        title={blog.title}
        subtitle={blog.subtitle}
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80"
        breadcrumbs={[
          { label: dict.nav.resources, href: `/${lang}/ressources` },
          { label: "Blog" },
        ]}
        size="sm"
      />

      <Section background="gray">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => {
            const content = getArticleContent(article.slug, lang);
            if (!content) return null;

            return (
              <Link key={article.slug} href={`/${lang}/ressources/blog/${article.slug}`} className="group">
                <Card hover padding="none" className="overflow-hidden h-full">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={content.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="blue">{content.categoryLabel}</Badge>
                      <span className="text-sm text-neutral-500">{article.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                      {content.title}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-2">{content.excerpt}</p>
                    <p className="text-xs text-neutral-400 mt-4">{article.date}</p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}