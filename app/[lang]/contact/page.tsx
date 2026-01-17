import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import {
  ContactHero,
  ContactForm,
  ContactInfo,
  ContactDemo,
  ContactFAQ,
  ContactCTA,
} from "@/components/contact";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};

  return {
    title: lang === "fr" ? "Contact | Téléphonie-IA" : "Contact | Téléphonie-IA",
    description:
      lang === "fr"
        ? "Contactez l'équipe Téléphonie-IA pour une démonstration personnalisée ou pour toute question."
        : "Contact the Téléphonie-IA team for a personalized demo or any questions.",
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <ContactHero dict={dict} lang={lang} />

      {/* Main Content: Form + Info */}
      <Section background="white">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form - takes 3 columns */}
          <div className="lg:col-span-3">
            <ContactForm dict={dict} />
          </div>

          {/* Info - takes 2 columns */}
          <div className="lg:col-span-2">
            <ContactInfo dict={dict} />
          </div>
        </div>
      </Section>

      <ContactDemo dict={dict} />
      <ContactFAQ dict={dict} />
      <ContactCTA dict={dict} lang={lang} />
    </>
  );
}