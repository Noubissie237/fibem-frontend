import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { notFound } from "next/navigation";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = getDictionary(lang as Locale);
  
  return {
    title: dict.authPage.forgotPassword.title,
    description: dict.authPage.forgotPassword.subtitle,
  };
}

export default async function ForgotPasswordPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  
  const lang = langParam as Locale;
  const dict = getDictionary(lang);

  return <ForgotPasswordForm lang={lang} dict={dict} />;
}
