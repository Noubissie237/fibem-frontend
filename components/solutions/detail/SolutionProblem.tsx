import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { SolutionContent } from "@/lib/solutions";

interface SolutionProblemProps {
  content: SolutionContent;
  dict: Dictionary;
}

export function SolutionProblem({ content }: SolutionProblemProps) {
  return (
    <Section background="white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
          {content.problem.title}
        </h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          {content.problem.description}
        </p>
      </div>
    </Section>
  );
}