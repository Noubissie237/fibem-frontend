import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "blue" | "green" | "gold" | "red";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-neutral-100 text-neutral-700",
  blue: "bg-brand-blue-50 text-brand-blue",
  green: "bg-emerald-50 text-emerald-700",
  gold: "bg-amber-50 text-amber-700",
  red: "bg-red-50 text-red-700",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}