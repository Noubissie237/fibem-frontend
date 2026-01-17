import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description:
    "Découvrez toutes les fonctionnalités de Téléphonie-IA : assistant vocal, transcription, analytics et plus encore.",
};

export default function FonctionnalitesPage() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Fonctionnalités</h1>
        <p className="text-lg text-neutral-600">
          Plus de 50 fonctionnalités pour transformer votre téléphonie
          d&apos;entreprise.
        </p>
      </div>
    </Section>
  );
}