"use client";

import { useState } from "react";
import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PricingToggle } from "./PricingToggle";
import { IconCheck } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

interface PricingCardsProps {
  dict: Dictionary;
  lang: Locale;
}

type PlanData =
  | {
      key: "starter" | "business";
      name: string;
      description: string;
      priceMonthly: string;
      priceYearly: string;
      features: string[];
      cta: string;
      isPopular: boolean;
      href: string;
      isEnterprise?: false;
    }
  | {
      key: "enterprise";
      name: string;
      description: string;
      price: string;
      features: string[];
      cta: string;
      isPopular: boolean;
      href: string;
      isEnterprise: true;
    };

export function PricingCards({ dict, lang }: PricingCardsProps) {
  const [isYearly, setIsYearly] = useState(false);
  const { toggle, plans, perMonth, perYear } = dict.pricingPage;

  const planData: PlanData[] = [
    {
      key: "starter" as const,
      ...plans.starter,
      isPopular: false,
      href: `/${lang}/inscription`,
      isEnterprise: false,
    },
    {
      key: "business" as const,
      ...plans.business,
      isPopular: true,
      href: `/${lang}/inscription`,
      isEnterprise: false,
    },
    {
      key: "enterprise" as const,
      ...plans.enterprise,
      isPopular: false,
      href: `/${lang}/contact`,
      isEnterprise: true,
    },
  ];

  return (
    <Section background="gray" id="plans">
      <div className="mb-10">
        <PricingToggle
          isYearly={isYearly}
          onToggle={setIsYearly}
          labels={toggle}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {planData.map((plan) => {
          const price = plan.isEnterprise
            ? plan.price
            : isYearly
            ? plan.priceYearly
            : plan.priceMonthly;

          const priceLabel = plan.isEnterprise
            ? ""
            : isYearly
            ? perYear
            : perMonth;

          return (
            <Card
              key={plan.key}
              className={cn(
                "relative flex flex-col",
                plan.isPopular && "border-brand-blue border-2 shadow-lg"
              )}
              padding="lg"
            >
              {plan.isPopular && (
                <Badge
                  variant="blue"
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  {plans.business.popular}
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-neutral-500">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  {!plan.isEnterprise && (
                    <span className="text-4xl font-bold text-neutral-900">
                      {price}
                    </span>
                  )}
                  {plan.isEnterprise ? (
                    <span className="text-2xl font-bold text-neutral-900">
                      {price}
                    </span>
                  ) : (
                    <span className="text-sm text-neutral-500">{priceLabel}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={plan.href}
                variant={plan.isPopular ? "primary" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}