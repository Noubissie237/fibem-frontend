"use client";

import { useEffect, useRef } from "react";
import { IconClose } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: string;
}

export function SearchBar({ isOpen, onClose, lang = "fr" }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const placeholder = lang === "fr" ? "Rechercher..." : "Search...";

  return (
    <div className="flex items-center gap-2 w-full max-w-2xl animate-fade-in">
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="search"
          placeholder={placeholder}
          className={cn(
            "w-full px-4 py-2 pl-10 pr-4",
            "text-sm text-neutral-900 placeholder:text-neutral-400",
            "bg-white border border-neutral-200 rounded-lg",
            "focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent",
            "transition-all duration-200"
          )}
          aria-label={placeholder}
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <button
        type="button"
        onClick={onClose}
        className={cn(
          "p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
          "transition-colors"
        )}
        aria-label={lang === "fr" ? "Fermer la recherche" : "Close search"}
      >
        <IconClose className="w-5 h-5" />
      </button>
    </div>
  );
}
