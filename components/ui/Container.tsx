import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
  fluid?: boolean; 
}

export function Container({
  children,
  className,
  as: Component = "div",
  fluid = false,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        !fluid && "max-w-7xl",
        className
      )}
    >
      {children}
    </Component>
  );
}
