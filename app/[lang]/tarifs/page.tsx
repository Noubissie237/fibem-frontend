import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import {
  PricingHero,
  PricingCards,
  PricingCompare,
  PricingAddons,
  PricingBilling,
  PricingFAQ,
  PricingCTA,
} from "@/components/pricing";

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
      ? "Tarifs | Téléphonie-IA par FIBEM"
      : "Pricing | Téléphonie-IA by FIBEM";

  const description =
    lang === "fr"
      ? "Découvrez nos tarifs transparents. Plans Starter, Business et Enterprise adaptés à toutes les tailles d'entreprise. Essai gratuit 14 jours."
      : "Discover our transparent pricing. Starter, Business and Enterprise plans for all business sizes. 14-day free trial.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
          width: 1200,
          height: 630,
          alt: "Téléphonie-IA Pricing",
        },
      ],
    },
  };
}

export default async function PricingPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();

  const lang = langParam as Locale;
  const dict = getDictionary(lang);

  return (
    <>
      <PricingHero dict={dict} lang={lang} />
      <PricingCards dict={dict} lang={lang} />
      <PricingCompare dict={dict} />
      <PricingAddons dict={dict} lang={lang} />
      <PricingBilling dict={dict} />
      <PricingFAQ dict={dict} />
      <PricingCTA dict={dict} lang={lang} />
    </>
  );
}