import Link from "next/link";
import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { SolutionContent } from "@/lib/solutions";
import { IconArrowRight } from "@/components/icons/Icons";

interface SolutionFeaturesProps {
  content: SolutionContent;
  dict: Dictionary;
  lang: Locale;
}

export function SolutionFeatures({ content, lang }: SolutionFeaturesProps) {

  return (
    <Section background="white" id="features">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
          {content.features.title}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.features.items.map((feature, index) => (
          <Card key={index} hover padding="md">
            <CardTitle className="text-base mb-2">{feature.title}</CardTitle>
            <CardDescription className="text-sm mb-4">
              {feature.description}
            </CardDescription>
            <Link
              href={`/${lang}/fonctionnalites`}
              className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-brand-blue-700 transition-colors"
            >
              {lang === "fr" ? "En savoir plus" : "Learn more"}
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}