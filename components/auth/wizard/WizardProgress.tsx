"use client";

interface WizardProgressProps {
  currentStep: number;
  steps: string[];
}

export function WizardProgress({ currentStep, steps }: WizardProgressProps) {
  return (
    <div className="mb-8">
      {/* Desktop version */}
      <div className="hidden md:flex items-center justify-center">
        {steps.map((stepLabel, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={stepNumber} className="flex items-center">
              <div className="flex flex-col items-center">
                {/* Circle */}
                <div
                  className={`
                    relative w-10 h-10 rounded-full flex items-center justify-center
                    transition-all duration-500 ease-out
                    ${
                      isCompleted
                        ? "bg-gradient-to-br from-brand-blue to-blue-600 text-white shadow-lg shadow-brand-blue/30"
                        : isCurrent
                        ? "bg-white border-[3px] border-brand-blue text-brand-blue shadow-xl shadow-brand-blue/20 scale-110"
                        : "bg-neutral-100 border-2 border-neutral-200 text-neutral-400"
                    }
                  `}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-base font-bold">{stepNumber}</span>
                  )}
                  
                  {/* Pulse animation for current step */}
                  {isCurrent && (
                    <span className="absolute inset-0 rounded-full border-2 border-brand-blue animate-ping opacity-30" />
                  )}
                </div>

                {/* Label */}
                <span
                  className={`
                    mt-2 text-xs font-medium text-center max-w-[80px]
                    transition-all duration-300
                    ${isCurrent ? "text-brand-blue font-semibold" : isCompleted ? "text-neutral-700" : "text-neutral-400"}
                  `}
                >
                  {stepLabel}
                </span>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="relative w-16 h-1 mx-3 -mt-6">
                  <div className="absolute inset-0 bg-neutral-200 rounded-full" />
                  <div
                    className={`
                      absolute inset-y-0 left-0 bg-gradient-to-r from-brand-blue to-blue-500 rounded-full
                      transition-all duration-500 ease-out
                    `}
                    style={{ width: isCompleted ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile version */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-neutral-500">
            Étape {currentStep} sur {steps.length}
          </span>
          <span className="text-sm font-semibold text-brand-blue">
            {steps[currentStep - 1]}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="relative h-2 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-blue to-blue-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>

        {/* Step indicators */}
        <div className="flex justify-between mt-3">
          {steps.map((_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;

            return (
              <div
                key={stepNumber}
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                  transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-brand-blue text-white"
                      : isCurrent
                      ? "bg-white border-2 border-brand-blue text-brand-blue shadow-md"
                      : "bg-neutral-100 text-neutral-400"
                  }
                `}
              >
                {isCompleted ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNumber
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}