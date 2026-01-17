"use client";

import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

interface PricingCompareProps {
  dict: Dictionary;
}

export function PricingCompare({ dict }: PricingCompareProps) {
  const { compare } = dict.pricingPage;

  const featureKeys = Object.keys(compare.features) as Array<
    keyof typeof compare.features
  >;

  const plans = [
    { key: "starter" as const, name: "Starter" },
    { key: "business" as const, name: "Business" },
    { key: "enterprise" as const, name: "Enterprise" },
  ];

  return (
    <Section background="white" id="compare">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {compare.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {compare.subtitle}
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="py-4 px-6 text-left text-sm font-medium text-neutral-500">
                &nbsp;
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.key}
                  className={cn(
                    "py-4 px-6 text-center",
                    plan.key === "business" && "bg-brand-blue-50"
                  )}
                >
                  <span className="text-lg font-bold text-neutral-900">
                    {plan.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureKeys.map((featureKey, index) => (
              <tr
                key={featureKey}
                className={cn(
                  "border-b border-neutral-100",
                  index % 2 === 0 && "bg-neutral-50/50"
                )}
              >
                <td className="py-4 px-6 text-sm font-medium text-neutral-700">
                  {compare.features[featureKey]}
                </td>
                {plans.map((plan) => (
                  <td
                    key={plan.key}
                    className={cn(
                      "py-4 px-6 text-center text-sm text-neutral-600",
                      plan.key === "business" && "bg-brand-blue-50/50"
                    )}
                  >
                    {compare.values[plan.key][featureKey] === "—" ? (
                      <span className="text-neutral-300">—</span>
                    ) : (
                      compare.values[plan.key][featureKey]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-6">
        {plans.map((plan) => (
          <div
            key={plan.key}
            className={cn(
              "bg-white rounded-xl border p-6",
              plan.key === "business"
                ? "border-brand-blue shadow-lg"
                : "border-neutral-200"
            )}
          >
            <h3 className="text-lg font-bold text-neutral-900 mb-4">
              {plan.name}
            </h3>
            <dl className="space-y-3">
              {featureKeys.map((featureKey) => (
                <div
                  key={featureKey}
                  className="flex justify-between items-start gap-4"
                >
                  <dt className="text-sm text-neutral-500">
                    {compare.features[featureKey]}
                  </dt>
                  <dd className="text-sm font-medium text-neutral-900 text-right">
                    {compare.values[plan.key][featureKey] === "—" ? (
                      <span className="text-neutral-300">—</span>
                    ) : (
                      compare.values[plan.key][featureKey]
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </Section>
  );
}