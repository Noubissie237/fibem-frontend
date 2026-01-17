import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { articles, getArticle, getArticleContent } from "@/lib/resources";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ["fr", "en"];
  return locales.flatMap((lang) =>
    articles.map((article) => ({ lang, slug: article.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) return {};
  const content = getArticleContent(slug, lang as Locale);
  if (!content) return {};
  return { title: `${content.title} | Téléphonie-IA`, description: content.excerpt };
}

export default async function ArticlePage({ params }: PageProps) {
  const { lang: langParam, slug } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const article = getArticle(slug);
  const content = getArticleContent(slug, lang);

  if (!article || !content) notFound();

  const { article: articleDict } = dict.resourcesPage;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image src={article.image} alt={content.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <Container className="relative h-full flex flex-col justify-end pb-12">
          <Link
            href={`/${lang}/ressources/blog`}
            className="text-white/70 hover:text-white text-sm mb-4 inline-block"
          >
            {articleDict.backToBlog}
          </Link>
          <Badge variant="blue" className="w-fit mb-4">{content.categoryLabel}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl mb-4">
            {content.title}
          </h1>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime} {articleDict.readTime}</span>
          </div>
        </Container>
      </section>

      {/* Content */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-neutral max-w-none">
            {content.content.map((paragraph, index) => (
              <p key={index} className="text-neutral-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-brand-blue-50 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              {lang === "fr" ? "Prêt à essayer Téléphonie-IA ?" : "Ready to try Téléphonie-IA?"}
            </h3>
            <p className="text-neutral-600 mb-6">
              {lang === "fr" ? "Testez gratuitement pendant 14 jours." : "Try free for 14 days."}
            </p>
            <Button href={`/${lang}/inscription`}>
              {lang === "fr" ? "Commencer gratuitement" : "Get started free"}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}