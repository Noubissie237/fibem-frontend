import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { SolutionContent } from "@/lib/solutions";
import { IconCheck } from "@/components/icons/Icons";

interface SolutionHelpProps {
  content: SolutionContent;
  dict: Dictionary;
}

export function SolutionHelp({ content }: SolutionHelpProps) {
  return (
    <Section background="gray">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8">
          {content.howWeHelp.title}
        </h2>
        <ul className="space-y-4">
          {content.howWeHelp.points.map((point, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <IconCheck className="w-4 h-4" />
              </div>
              <span className="text-lg text-neutral-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}