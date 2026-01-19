"use client";

import Link from "next/link";
import { MegaMenuData } from "@/types/navigation";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@/components/icons/Icons";

interface MegaMenuProps {
  data: MegaMenuData;
  onClose: () => void;
}

export function MegaMenu({ data, onClose }: MegaMenuProps) {
  const { sections, callout } = data;
  const hasCallout = !!callout;
  const sectionCount = sections.length;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
      onMouseEnter={(e) => e.stopPropagation()}
    >
      <div
        className={cn(
          "bg-white rounded-xl shadow-mega border border-neutral-100 overflow-hidden animate-slide-down",
          hasCallout ? "w-[1000px]" : "w-[900px]"
        )}
      >
        <div className="flex">
          {/* Sections de liens */}
          <div
            className={cn(
              "flex-1 p-6",
              hasCallout ? "grid gap-6" : "grid gap-6",
              sectionCount === 1 && "grid-cols-1",
              sectionCount === 2 && "grid-cols-2",
              sectionCount === 3 && "grid-cols-3",
              sectionCount >= 4 && "grid-cols-4"
            )}
          >
            {sections.map((section, idx) => (
              <div key={idx}>
                {section.title && (
                  <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                    {section.title}
                  </h3>
                )}
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group block p-3 -m-3 rounded-lg hover:bg-neutral-50 transition-colors"
                      >
                        <span className="block text-sm font-medium text-neutral-900 group-hover:text-brand-blue transition-colors">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="block mt-0.5 text-xs text-neutral-500 leading-relaxed">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Callout */}
          {callout && (
            <div
              className={cn(
                "w-64 p-6",
                callout.variant === "gradient"
                  ? "bg-linear-to-br from-brand-blue to-brand-blue-700"
                  : "bg-brand-blue-50"
              )}
            >
              <div className="h-full flex flex-col justify-center">
                <h3
                  className={cn(
                    "text-sm font-semibold mb-2",
                    callout.variant === "gradient"
                      ? "text-white"
                      : "text-neutral-900"
                  )}
                >
                  {callout.title}
                </h3>
                <p
                  className={cn(
                    "text-xs leading-relaxed mb-4",
                    callout.variant === "gradient"
                      ? "text-white/80"
                      : "text-neutral-600"
                  )}
                >
                  {callout.description}
                </p>
                <Link
                  href={callout.href}
                  onClick={onClose}
                  className={cn(
                    "inline-flex items-center gap-1 text-sm font-medium transition-colors",
                    callout.variant === "gradient"
                      ? "text-white hover:text-white/80"
                      : "text-brand-blue hover:text-brand-blue-700"
                  )}
                >
                  {callout.linkText}
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}