import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { IconCheck } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

interface PricingPreviewSectionProps {
  dict: Dictionary;
  lang: Locale;
}

export function PricingPreviewSection({ dict, lang }: PricingPreviewSectionProps) {
  const { pricing } = dict;

  return (
    <Section background="gray" id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {pricing.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {pricing.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
        {pricing.plans.map((plan, index) => {
          const isPopular = index === 1;

          return (
            <Card
              key={index}
              className={cn(
                "relative",
                isPopular && "border-brand-blue border-2 shadow-lg"
              )}
              padding="lg"
            >
              {isPopular && (
                <Badge
                  variant="blue"
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  {pricing.popular}
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-neutral-500">{pricing.from}</span>
                  <span className="text-4xl font-bold text-neutral-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Sur devis" && plan.price !== "Custom" && (
                    <span className="text-sm text-neutral-500">
                      {pricing.perMonth}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={`/${lang}/inscription`}
                variant={isPopular ? "primary" : "outline"}
                className="w-full"
              >
                {dict.hero.ctaPrimary}
              </Button>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Button href={`/${lang}/tarifs`} variant="ghost">
          {pricing.cta}
        </Button>
      </div>
    </Section>
  );
}