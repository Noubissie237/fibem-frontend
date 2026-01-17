import Link from "next/link";
import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { provideIcons } from "@/lib/partners";

interface WhatWeProvideProps {
  dict: Dictionary;
  lang: Locale;
}

export function WhatWeProvide({ dict, lang }: WhatWeProvideProps) {
  const { whatWeProvide } = dict.partnersPage;

  const icons = [
    provideIcons.marketing,
    provideIcons.demo,
    provideIcons.documentation,
    provideIcons.onboarding,
    provideIcons.support,
    provideIcons.tools,
  ];

  return (
    <Section background="white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
          {whatWeProvide.title}
        </h2>
        <p className="text-lg text-neutral-600">
          {whatWeProvide.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {whatWeProvide.items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg hover:border-brand-blue/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
              {icons[index]}
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              {item.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 rounded-2xl p-8 lg:p-10 border border-brand-blue/20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              {whatWeProvide.callout.title}
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              {whatWeProvide.callout.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/${lang}/ressources/api`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-blue text-white font-medium hover:bg-brand-blue-800 transition-colors"
            >
              {whatWeProvide.callout.linkApi}
            </Link>
            <Link
              href={`/${lang}/ressources/guides`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-brand-blue text-brand-blue font-medium hover:bg-brand-blue hover:text-white transition-colors"
            >
              {whatWeProvide.callout.linkGuides}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
