import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "gray" | "blue";
  id?: string;
}

const backgroundStyles = {
  white: "bg-white",
  gray: "bg-neutral-50",
  blue: "bg-brand-blue-50",
};

export function Section({
  children,
  className,
  containerClassName,
  background = "white",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 lg:py-24", backgroundStyles[background], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}