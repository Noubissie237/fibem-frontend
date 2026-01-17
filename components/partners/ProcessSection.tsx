import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Timeline } from "./Timeline";
import { processStepIcons } from "@/lib/partners";

interface ProcessSectionProps {
  dict: Dictionary;
}

export function ProcessSection({ dict }: ProcessSectionProps) {
  const { process } = dict.partnersPage;

  const icons = [
    processStepIcons.application,
    processStepIcons.qualification,
    processStepIcons.onboarding,
    processStepIcons.launch,
  ];

  const steps = process.steps.map((step, index) => ({
    icon: icons[index],
    title: step.title,
    description: step.description,
  }));

  return (
    <Section background="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
          {process.title}
        </h2>
        <p className="text-lg text-neutral-600">
          {process.subtitle}
        </p>
      </div>

      <Timeline steps={steps} />
    </Section>
  );
}
