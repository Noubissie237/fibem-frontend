import { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

interface PartnerTypeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  forWho: string;
  whatYouGet: string;
}

export function PartnerTypeCard({
  icon,
  title,
  description,
  forWho,
  whatYouGet,
}: PartnerTypeCardProps) {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col gap-6">
        {/* Icon & Title */}
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-blue to-brand-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-brand-blue/25">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              {title}
            </h3>
            <p className="text-neutral-600">
              {description}
            </p>
          </div>
        </div>

        {/* For Who */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
            Pour qui ?
          </h4>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {forWho}
          </p>
        </div>

        {/* What You Get */}
        <div className="space-y-2 pt-4 border-t border-neutral-100">
          <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
            Ce que vous obtenez
          </h4>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {whatYouGet}
          </p>
        </div>
      </div>
    </Card>
  );
}
