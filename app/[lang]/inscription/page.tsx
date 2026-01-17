import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = getDictionary(lang as Locale);
  
  return {
    title: dict.nav.signup,
  };
}

export default async function InscriptionPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  
  const lang = langParam as Locale;
  const dict = getDictionary(lang);

  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{dict.nav.signup}</h1>
        <p className="text-lg text-neutral-600">
          {lang === "fr" 
            ? "Créez votre compte en quelques secondes et commencez votre essai gratuit."
            : "Create your account in seconds and start your free trial."}
        </p>
      </div>
    </Section>
  );
}