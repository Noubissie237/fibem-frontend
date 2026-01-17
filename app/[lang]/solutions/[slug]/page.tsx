import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import {
  getSolution,
  getSolutionContent,
  getAllSolutionSlugs,
} from "@/lib/solutions";
import {
  SolutionHero,
  SolutionProblem,
  SolutionHelp,
  SolutionFeatures,
  SolutionResults,
  SolutionCTA,
} from "@/components/solutions/detail";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSolutionSlugs();
  const locales = ["fr", "en"];

  return locales.flatMap((lang) =>
    slugs.map((slug) => ({
      lang,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) return {};

  const content = getSolutionContent(slug, lang);
  const solution = getSolution(slug);

  if (!content || !solution) return {};

  const title = `${content.title} | Téléphonie-IA`;
  const description = content.heroSubtitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: solution.heroImage,
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const solution = getSolution(slug);
  const content = getSolutionContent(slug, lang);

  if (!solution || !content) {
    notFound();
  }

  return (
    <>
      <SolutionHero
        solution={solution}
        content={content}
        dict={dict}
        lang={lang}
      />
      <SolutionProblem content={content} dict={dict} />
      <SolutionHelp content={content} dict={dict} />
      <SolutionFeatures content={content} dict={dict} lang={lang} />
      <SolutionResults
        solution={solution}
        content={content}
        dict={dict}
        lang={lang}
      />
      <SolutionCTA content={content} dict={dict} lang={lang} />
    </>
  );
}