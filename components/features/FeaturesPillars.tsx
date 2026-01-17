import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import {
  IconPhoneArrow,
  IconMessage,
  IconSparkles,
  IconChartBar,
  IconCheck,
} from "@/components/icons/Icons";

interface FeaturesPillarsProps {
  dict: Dictionary;
}

const pillarIcons = [
  <IconPhoneArrow key="phone" className="w-7 h-7" />,
  <IconMessage key="message" className="w-7 h-7" />,
  <IconSparkles key="sparkles" className="w-7 h-7" />,
  <IconChartBar key="chart" className="w-7 h-7" />,
];

const pillarColors = [
  "bg-brand-blue-100 text-brand-blue",
  "bg-emerald-100 text-emerald-600",
  "bg-purple-100 text-purple-600",
  "bg-amber-100 text-amber-600",
];

export function FeaturesPillars({ dict }: FeaturesPillarsProps) {
  const { pillars } = dict.featuresPage;

  return (
    <Section background="gray" id="pillars">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {pillars.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {pillars.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {pillars.items.map((pillar, index) => (
          <Card key={index} padding="lg" className="h-full">
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`w-14 h-14 rounded-xl ${pillarColors[index]} flex items-center justify-center shrink-0`}
              >
                {pillarIcons[index]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-neutral-600">{pillar.description}</p>
              </div>
            </div>

            <ul className="space-y-2 mt-6 pt-6 border-t border-neutral-100">
              {pillar.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}