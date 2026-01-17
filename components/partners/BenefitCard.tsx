import { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            {title}
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
