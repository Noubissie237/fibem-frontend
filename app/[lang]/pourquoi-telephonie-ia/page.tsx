import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import {
  WhyHero,
  WhyProblem,
  WhyApproach,
  WhyComparison,
  WhyTestimonials,
  WhyCompany,
  WhyCTA,
} from "@/components/why";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};

  return {
    title: lang === "fr" 
      ? "Pourquoi Téléphonie-IA | FIBEM" 
      : "Why Téléphonie-IA | FIBEM",
    description: lang === "fr"
      ? "Découvrez pourquoi plus de 500 entreprises ont choisi Téléphonie-IA pour moderniser leur téléphonie."
      : "Discover why 500+ companies chose Téléphonie-IA to modernize their telephony.",
  };
}

export default async function WhyPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <WhyHero dict={dict} lang={lang} />
      <WhyProblem dict={dict} />
      <WhyApproach dict={dict} lang={lang} />
      <WhyComparison dict={dict} />
      <WhyTestimonials dict={dict} lang={lang} />
      <WhyCompany dict={dict} lang={lang} />
      <WhyCTA dict={dict} lang={lang} />
    </>
  );
}