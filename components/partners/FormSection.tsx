import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { PartnerForm } from "./PartnerForm";

interface FormSectionProps {
  dict: Dictionary;
}

export function FormSection({ dict }: FormSectionProps) {
  return (
    <Section background="gray" id="devenir-partenaire">
      <div className="max-w-4xl mx-auto">
        <PartnerForm dict={dict} />
      </div>
    </Section>
  );
}
