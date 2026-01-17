import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { LogoGrid } from "./LogoGrid";
import { partnerLogos } from "@/lib/partners";

interface OurPartnersProps {
  dict: Dictionary;
}

export function OurPartners({ dict }: OurPartnersProps) {
  const { ourPartners } = dict.partnersPage;

  return (
    <Section background="gray">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
          {ourPartners.title}
        </h2>
        <p className="text-lg text-neutral-600">
          {ourPartners.subtitle}
        </p>
      </div>

      <LogoGrid logos={partnerLogos} />
    </Section>
  );
}
