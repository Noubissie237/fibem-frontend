import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import {
  FeaturesHero,
  FeaturesOverview,
  FeaturesPillars,
  FeaturesGrid,
  FeaturesTeams,
  FeaturesSecurity,
  FeaturesCTA,
} from "@/components/features";

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  if (!isValidLocale(params.lang)) return {};
  const dict = getDictionary(params.lang as Locale);

  const title =
    params.lang === "fr"
      ? "Fonctionnalités | Téléphonie-IA"
      : "Features | Téléphonie-IA";

  const description =
    params.lang === "fr"
      ? "Découvrez toutes les fonctionnalités de Téléphonie-IA : téléphonie cloud, SMS pro, transcription IA, analytics et plus encore."
      : "Discover all Téléphonie-IA features: cloud telephony, business SMS, AI transcription, analytics and more.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
          width: 1200,
          height: 630,
          alt: "Téléphonie-IA Features",
        },
      ],
    },
  };
}

export default function FeaturesPage({ params }: PageProps) {
  if (!isValidLocale(params.lang)) notFound();

  const lang = params.lang as Locale;
  const dict = getDictionary(lang);

  return (
    <>
      <FeaturesHero dict={dict} lang={lang} />
      <FeaturesOverview dict={dict} />
      <FeaturesPillars dict={dict} />
      <FeaturesGrid dict={dict} />
      <FeaturesTeams dict={dict} lang={lang} />
      <FeaturesSecurity dict={dict} />
      <FeaturesCTA dict={dict} lang={lang} />
    </>
  );
}