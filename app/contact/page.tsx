import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez notre équipe commerciale ou support. Nous répondons sous 24h.",
};

export default function ContactPage() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-lg text-neutral-600">
          Notre équipe est à votre disposition pour répondre à toutes vos
          questions.
        </p>
      </div>
    </Section>
  );
}