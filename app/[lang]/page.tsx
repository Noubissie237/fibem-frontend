import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import {
  HeroSection,
  WhySection,
  FeaturesSection,
  UseCasesSection,
  PricingPreviewSection,
  ResourcesSection,
  CTASection,
} from "@/components/home";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  
  if (!isValidLocale(lang)) {
    return {};
  }

  const dict = getDictionary(lang as Locale);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang: langParam } = await params;
  
  if (!isValidLocale(langParam)) {
    notFound();
  }

  const lang = langParam as Locale;
  const dict = getDictionary(lang);

  return (
    <>
      <HeroSection dict={dict} lang={lang} />
      <WhySection dict={dict} />
      <FeaturesSection dict={dict} lang={lang} />
      <UseCasesSection dict={dict} lang={lang} />
      <PricingPreviewSection dict={dict} lang={lang} />
      <ResourcesSection dict={dict} lang={lang} />
      <CTASection dict={dict} lang={lang} />
    </>
  );
}