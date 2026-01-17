import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import {
  IconCentralize,
  IconSparkles,
  IconPhone,
  IconChartBar,
} from "@/components/icons/Icons";

interface WhySectionProps {
  dict: Dictionary;
}

const icons = [
  <IconCentralize key="centralize" className="w-6 h-6" />,
  <IconSparkles key="sparkles" className="w-6 h-6" />,
  <IconPhone key="phone" className="w-6 h-6" />,
  <IconChartBar key="chart" className="w-6 h-6" />,
];

const iconColors = [
  "bg-brand-blue-100 text-brand-blue",
  "bg-purple-100 text-purple-600",
  "bg-emerald-100 text-emerald-600",
  "bg-amber-100 text-amber-600",
];

export function WhySection({ dict }: WhySectionProps) {
  const { why } = dict;

  return (
    <Section background="white" id="why">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {why.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {why.subtitle}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {why.items.map((item, index) => (
          <Card key={index} hover className="text-center">
            <div
              className={`w-14 h-14 rounded-xl ${iconColors[index]} flex items-center justify-center mx-auto mb-4`}
            >
              {icons[index]}
            </div>
            <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}