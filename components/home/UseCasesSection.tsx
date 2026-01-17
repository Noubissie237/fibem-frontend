import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  IconBuilding,
  IconUsers,
  IconHeadphones,
  IconRocket,
  IconShoppingBag,
  IconHome,
} from "@/components/icons/Icons";

interface UseCasesSectionProps {
  dict: Dictionary;
  lang: Locale;
}

const icons = [
  <IconBuilding key="building" className="w-5 h-5" />,
  <IconUsers key="users" className="w-5 h-5" />,
  <IconHeadphones key="headphones" className="w-5 h-5" />,
  <IconRocket key="rocket" className="w-5 h-5" />,
  <IconShoppingBag key="shopping" className="w-5 h-5" />,
  <IconHome key="home" className="w-5 h-5" />,
];

const colors = [
  "bg-brand-blue-100 text-brand-blue",
  "bg-emerald-100 text-emerald-600",
  "bg-purple-100 text-purple-600",
  "bg-amber-100 text-amber-600",
  "bg-rose-100 text-rose-600",
  "bg-cyan-100 text-cyan-600",
];

export function UseCasesSection({ dict, lang }: UseCasesSectionProps) {
  const { useCases } = dict;

  return (
    <Section background="white" id="use-cases">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {useCases.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {useCases.subtitle}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {useCases.items.map((item, index) => (
          <Card
            key={index}
            hover
            className="group cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-10 h-10 rounded-lg ${colors[index]} flex items-center justify-center shrink-0`}
              >
                {icons[index]}
              </div>
              <div>
                <CardTitle className="text-base mb-1 group-hover:text-brand-blue transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button href={`/${lang}/solutions`} variant="outline">
          {useCases.cta}
        </Button>
      </div>
    </Section>
  );
}