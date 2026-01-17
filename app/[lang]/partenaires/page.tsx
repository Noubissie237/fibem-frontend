import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import { PartnersHero } from "@/components/partners/PartnersHero";
import { WhyPartner } from "@/components/partners/WhyPartner";
import { PartnerTypes } from "@/components/partners/PartnerTypes";
import { WhatWeProvide } from "@/components/partners/WhatWeProvide";
import { OurPartners } from "@/components/partners/OurPartners";
import { ProcessSection } from "@/components/partners/ProcessSection";
import { FormSection } from "@/components/partners/FormSection";
import { PartnersCTA } from "@/components/partners/PartnersCTA";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = getDictionary(lang as Locale);
  
  return {
    title: dict.partnersPage.hero.title,
    description: dict.partnersPage.hero.subtitle,
  };
}

export default async function PartenairesPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  
  const lang = langParam as Locale;
  const dict = getDictionary(lang);

  return (
    <>
      <PartnersHero dict={dict} lang={lang} />
      <WhyPartner dict={dict} />
      <PartnerTypes dict={dict} />
      <WhatWeProvide dict={dict} lang={lang} />
      <OurPartners dict={dict} />
      <ProcessSection dict={dict} />
      <FormSection dict={dict} />
      <PartnersCTA dict={dict} lang={lang} />
    </>
  );
}