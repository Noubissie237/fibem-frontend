import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Solutions téléphonie IA par secteur : santé, immobilier, e-commerce, finance et plus.",
};

export default function SolutionsPage() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Solutions</h1>
        <p className="text-lg text-neutral-600">
          Des solutions adaptées à chaque secteur d&apos;activité.
        </p>
      </div>
    </Section>
  );
}