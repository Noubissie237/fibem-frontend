import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import {
  ResourcesHero,
  ResourcesGetStarted,
  ResourcesDocumentation,
  ResourcesArticles,
  ResourcesTrust,
  ResourcesCTA,
} from "@/components/resources";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return {
    title: lang === "fr" ? "Ressources | Téléphonie-IA" : "Resources | Téléphonie-IA",
    description: lang === "fr"
      ? "Documentation, guides, tutoriels, blog et tout ce dont vous avez besoin pour réussir avec Téléphonie-IA."
      : "Documentation, guides, tutorials, blog and everything you need to succeed with Téléphonie-IA.",
  };
}

export default async function ResourcesPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang = langParam as Locale;
  const dict = getDictionary(lang);

  return (
    <>
      <ResourcesHero dict={dict} lang={lang} />
      <ResourcesGetStarted dict={dict} lang={lang} />
      <ResourcesDocumentation dict={dict} lang={lang} />
      <ResourcesArticles dict={dict} lang={lang} />
      <ResourcesTrust dict={dict} />
      <ResourcesCTA dict={dict} lang={lang} />
    </>
  );
}