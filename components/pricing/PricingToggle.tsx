"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface PricingToggleProps {
  isYearly: boolean;
  onToggle: (yearly: boolean) => void;
  labels: {
    monthly: string;
    yearly: string;
    discount: string;
  };
}

export function PricingToggle({ isYearly, onToggle, labels }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={() => onToggle(false)}
        className={cn(
          "text-sm font-medium transition-colors",
          !isYearly ? "text-brand-blue" : "text-neutral-500 hover:text-neutral-700"
        )}
      >
        {labels.monthly}
      </button>

      <button
        type="button"
        onClick={() => onToggle(!isYearly)}
        className="relative w-14 h-8 bg-neutral-200 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
        role="switch"
        aria-checked={isYearly}
      >
        <span
          className={cn(
            "absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200",
            isYearly && "translate-x-6 bg-brand-blue"
          )}
        />
        <span
          className={cn(
            "absolute inset-0 rounded-full transition-colors",
            isYearly && "bg-brand-blue"
          )}
        />
        <span
          className={cn(
            "absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200",
            isYearly && "translate-x-6"
          )}
        />
      </button>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onToggle(true)}
          className={cn(
            "text-sm font-medium transition-colors",
            isYearly ? "text-brand-blue" : "text-neutral-500 hover:text-neutral-700"
          )}
        >
          {labels.yearly}
        </button>
        <Badge variant="green" className="text-xs">
          {labels.discount}
        </Badge>
      </div>
    </div>
  );
}