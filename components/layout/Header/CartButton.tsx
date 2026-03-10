"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Locale } from "@/types/i18n";

interface CartButtonProps {
  lang: Locale;
  itemCount?: number;
  variant?: "default" | "mobile";
}

const IconCart = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

export function CartButton({ lang, itemCount = 0, variant = "default" }: CartButtonProps) {
  const isMobile = variant === "mobile";

  return (
    <Link
      href={`/${lang}/panier`}
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg transition-colors",
        isMobile
          ? "w-full px-4 py-3 text-neutral-700 hover:bg-neutral-50 border border-neutral-200"
          : "p-2 text-white hover:bg-white/10"
      )}
      aria-label={`Panier (${itemCount} article${itemCount > 1 ? "s" : ""})`}
    >
      <IconCart className={cn(isMobile ? "w-5 h-5" : "w-6 h-6")} />
      
      {itemCount > 0 && (
        <span
          className={cn(
            "absolute flex items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold",
            isMobile
              ? "top-1 right-1 min-w-[20px] h-5 px-1.5"
              : "-top-1 -right-1 min-w-[18px] h-[18px] px-1"
          )}
        >
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
      
      {isMobile && (
        <span className="ml-3 text-sm font-medium">
          {lang === "fr" ? "Panier" : "Cart"}
          {itemCount > 0 && (
            <span className="ml-2 text-neutral-500">
              ({itemCount})
            </span>
          )}
        </span>
      )}
    </Link>
  );
}
