import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Partenaires",
  description:
    "Rejoignez notre réseau de partenaires et développez votre activité avec Téléphonie-IA.",
};

export default function PartenairesPage() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Partenaires</h1>
        <p className="text-lg text-neutral-600">
          Développez votre activité en devenant partenaire FIBEM.
        </p>
      </div>
    </Section>
  );
}