import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang: langParam } = await params;
  const lang = isValidLocale(langParam) ? (langParam as Locale) : "fr";
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Header lang={lang} dict={dict} />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}