import Image from "next/image";
import Link from "next/link";
import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { articles, getArticleContent } from "@/lib/resources";
import { IconArrowRight } from "@/components/icons/Icons";

interface ResourcesArticlesProps {
  dict: Dictionary;
  lang: Locale;
}

export function ResourcesArticles({ dict, lang }: ResourcesArticlesProps) {
  const { articles: articlesDict } = dict.resourcesPage;
  const displayArticles = articles.slice(0, 3);

  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">{articlesDict.title}</h2>
        <p className="text-lg text-neutral-600">{articlesDict.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {displayArticles.map((article) => {
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
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="text-center">
        <Button href={`/${lang}/ressources/blog`} variant="outline">
          {articlesDict.cta}
          <IconArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Section>
  );
}