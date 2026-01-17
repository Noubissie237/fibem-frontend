import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Inscription",
  description:
    "Créez votre compte Téléphonie-IA gratuitement. Essai 14 jours sans engagement.",
};

export default function InscriptionPage() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Inscription</h1>
        <p className="text-lg text-neutral-600">
          Créez votre compte en quelques secondes et commencez votre essai
          gratuit.
        </p>
      </div>
    </Section>
  );
}