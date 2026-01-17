import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  IconPhoneArrow,
  IconMessage,
  IconSparkles,
  IconMicrophone,
  IconChartBar,
  IconShield,
} from "@/components/icons/Icons";

interface FeaturesSectionProps {
  dict: Dictionary;
  lang: Locale;
}

const icons = [
  <IconPhoneArrow key="phone" className="w-6 h-6" />,
  <IconMessage key="message" className="w-6 h-6" />,
  <IconSparkles key="sparkles" className="w-6 h-6" />,
  <IconMicrophone key="mic" className="w-6 h-6" />,
  <IconChartBar key="chart" className="w-6 h-6" />,
  <IconShield key="shield" className="w-6 h-6" />,
];

export function FeaturesSection({ dict, lang }: FeaturesSectionProps) {
  const { features } = dict;

  return (
    <Section background="gray" id="features">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {features.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {features.subtitle}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {features.items.map((item, index) => (
          <Card key={index} hover padding="lg">
            <div className="w-12 h-12 rounded-xl bg-brand-blue-100 text-brand-blue flex items-center justify-center mb-4">
              {icons[index]}
            </div>
            <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button href={`/${lang}/fonctionnalites`} variant="outline">
          {features.cta}
        </Button>
      </div>
    </Section>
  );
}