import { ReactNode } from "react";

interface TimelineStep {
  icon: ReactNode;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue via-brand-blue/50 to-brand-blue/20 -translate-x-1/2" />

      <div className="space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Icon */}
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-600 flex items-center justify-center text-white shadow-lg shadow-brand-blue/30 relative z-10">
                {step.icon}
              </div>
              {/* Step number */}
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center text-sm font-bold text-brand-blue">
                {index + 1}
              </div>
            </div>

            {/* Spacer for alignment */}
            <div className="hidden md:block flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
