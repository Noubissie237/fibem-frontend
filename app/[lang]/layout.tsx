import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";

export const metadata: Metadata = {
  title: {
    default: "FIBEM Téléphonie-IA | Solution de téléphonie augmentée par l'IA",
    template: "%s | FIBEM Téléphonie-IA",
  },
  description:
    "Transformez votre accueil téléphonique avec l'intelligence artificielle. Solution SaaS française pour les entreprises.",
  keywords: [
    "téléphonie IA",
    "assistant vocal",
    "SaaS téléphonie",
    "standard téléphonique intelligent",
  ],
  authors: [{ name: "FIBEM" }],
  creator: "FIBEM",
  metadataBase: new URL("https://fibem.com"),
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang: langParam } = await params;
  const lang = isValidLocale(langParam) ? (langParam as Locale) : "fr";
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}