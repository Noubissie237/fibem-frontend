import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Pourquoi Téléphonie-IA",
  description:
    "Découvrez pourquoi plus de 500 entreprises ont choisi notre solution de téléphonie augmentée.",
};

export default function PourquoiTelephoneIAPage() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Pourquoi Téléphonie-IA</h1>
        <p className="text-lg text-neutral-600">
          Une technologie française, une expertise de 20 ans, une vision
          d&apos;avenir.
        </p>
      </div>
    </Section>
  );
}