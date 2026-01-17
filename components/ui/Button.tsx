import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-800 active:bg-brand-blue-900 shadow-sm",
  secondary:
    "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-300",
  outline:
    "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  ghost: "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ variant = "primary", size = "md", className, children, ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={combinedClassName}
        {...(props as Omit<ButtonAsLink, "variant" | "size">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={combinedClassName}
      {...(props as Omit<ButtonAsButton, "variant" | "size">)}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";