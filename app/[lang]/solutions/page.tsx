import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import {
  SolutionsHero,
  SolutionsGrid,
  SolutionsBenefits,
  SolutionsChoose,
  SolutionsCTA,
} from "@/components/solutions";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};

  const title =
    lang === "fr"
      ? "Solutions | Téléphonie-IA par FIBEM"
      : "Solutions | Téléphonie-IA by FIBEM";

  const description =
    lang === "fr"
      ? "Découvrez nos solutions adaptées à chaque métier : PME, équipes commerciales, support client, startups, retail et télétravail."
      : "Discover our solutions for every business: SMBs, sales teams, customer support, startups, retail and remote work.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
          width: 1200,
          height: 630,
          alt: "Téléphonie-IA Solutions",
        },
      ],
    },
  };
}

export default async function SolutionsPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <SolutionsHero dict={dict} lang={lang} />
      <SolutionsGrid dict={dict} lang={lang} />
      <SolutionsBenefits dict={dict} />
      <SolutionsChoose dict={dict} lang={lang} />
      <SolutionsCTA dict={dict} lang={lang} />
    </>
  );
}