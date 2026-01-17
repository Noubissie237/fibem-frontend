import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-neutral-100",
        padding !== "none" && paddingStyles[padding],
        hover &&
          "transition-all duration-300 hover:shadow-soft hover:border-neutral-200 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({
  children,
  className,
  as: Component = "h3",
}: CardTitleProps) {
  return (
    <Component className={cn("font-semibold text-neutral-900", className)}>
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("text-neutral-600 text-sm leading-relaxed", className)}>
      {children}
    </p>
  );
}

interface CardImageProps {
  children: ReactNode;
  className?: string;
}

export function CardImage({ children, className }: CardImageProps) {
  return (
    <div className={cn("relative overflow-hidden -mx-6 -mt-6 mb-6", className)}>
      {children}
    </div>
  );
}