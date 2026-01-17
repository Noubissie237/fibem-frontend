import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex items-start gap-3">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={cn(
            "w-5 h-5 rounded border-neutral-300 text-brand-blue",
            "focus:ring-2 focus:ring-brand-blue focus:ring-offset-2",
            "transition-colors duration-200 cursor-pointer mt-0.5",
            error && "border-red-300",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "text-sm text-neutral-600 cursor-pointer leading-relaxed",
            error && "text-red-600"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";