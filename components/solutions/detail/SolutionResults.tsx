import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Solution, SolutionContent } from "@/lib/solutions";

interface SolutionResultsProps {
  solution: Solution;
  content: SolutionContent;
  dict: Dictionary;
  lang: Locale;
}

export function SolutionResults({ solution, content, lang }: SolutionResultsProps) {

  return (
    <Section background="gray" id="results">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
          {content.results.title}
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {solution.metrics.map((metric, index) => (
          <Card key={index} className="text-center" padding="lg">
            <div className="text-4xl font-bold text-brand-blue mb-2">
              {metric.value}
            </div>
            <p className="text-neutral-600">
              {lang === "fr" ? metric.labelFr : metric.labelEn}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}