import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer";

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
    "Transformez votre accueil téléphonique avec l'intelligence artificielle. Solution SaaS française pour les entreprises : assistant vocal IA, transcription automatique, analytics avancés.",
  keywords: [
    "téléphonie IA",
    "assistant vocal",
    "SaaS téléphonie",
    "standard téléphonique intelligent",
    "transcription appels",
    "téléphonie entreprise",
  ],
  authors: [{ name: "FIBEM" }],
  creator: "FIBEM",
  publisher: "FIBEM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fibem.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fibem.com",
    siteName: "FIBEM Téléphonie-IA",
    title: "FIBEM Téléphonie-IA | Solution de téléphonie augmentée par l'IA",
    description:
      "Transformez votre accueil téléphonique avec l'intelligence artificielle.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIBEM Téléphonie-IA",
    description:
      "Transformez votre accueil téléphonique avec l'intelligence artificielle.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}