import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { PartnerTypeCard } from "./PartnerTypeCard";
import { partnerTypeIcons } from "@/lib/partners";

interface PartnerTypesProps {
  dict: Dictionary;
}

export function PartnerTypes({ dict }: PartnerTypesProps) {
  const { partnerTypes } = dict.partnersPage;

  const icons = [
    partnerTypeIcons.reseller,
    partnerTypeIcons.agency,
    partnerTypeIcons.tech,
  ];

  return (
    <Section background="gray">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
          {partnerTypes.title}
        </h2>
        <p className="text-lg text-neutral-600">
          {partnerTypes.subtitle}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {partnerTypes.types.map((type, index) => (
          <PartnerTypeCard
            key={index}
            icon={icons[index]}
            title={type.title}
            description={type.description}
            forWho={type.forWho}
            whatYouGet={type.whatYouGet}
          />
        ))}
      </div>
    </Section>
  );
}
