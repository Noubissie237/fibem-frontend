import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Découvrez nos offres adaptées à toutes les tailles d'entreprise. Essai gratuit 14 jours.",
};

export default function TarifsPage() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Tarifs</h1>
        <p className="text-lg text-neutral-600">
          Des offres transparentes, adaptées à votre croissance.
        </p>
      </div>
    </Section>
  );
}