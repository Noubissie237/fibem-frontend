import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Blog, guides, webinaires et documentation pour maîtriser Téléphonie-IA.",
};

export default function RessourcesPage() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Ressources</h1>
        <p className="text-lg text-neutral-600">
          Tout ce dont vous avez besoin pour réussir avec Téléphonie-IA.
        </p>
      </div>
    </Section>
  );
}