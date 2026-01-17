import Image from "next/image";
import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { BenefitCard } from "./BenefitCard";
import { benefitIcons } from "@/lib/partners";

interface WhyPartnerProps {
  dict: Dictionary;
}

export function WhyPartner({ dict }: WhyPartnerProps) {
  const { whyPartner } = dict.partnersPage;

  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            {whyPartner.title}
          </h2>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            {whyPartner.subtitle}
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyPartner.benefits.map((benefit, index) => {
              const iconKeys = Object.keys(benefitIcons) as Array<keyof typeof benefitIcons>;
              const icon = benefitIcons[iconKeys[index % iconKeys.length]];
              
              return (
                <BenefitCard
                  key={index}
                  icon={icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              );
            })}
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
