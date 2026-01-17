import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connectez-vous à votre espace Téléphonie-IA.",
};

export default function ConnexionPage() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Connexion</h1>
        <p className="text-lg text-neutral-600">
          Accédez à votre tableau de bord Téléphonie-IA.
        </p>
      </div>
    </Section>
  );
}