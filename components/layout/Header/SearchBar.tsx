"use client";

import { useEffect, useRef } from "react";
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
    <div className="w-full max-w-md animate-fade-in">
      <div className="relative">
        <input
          ref={inputRef}
          type="search"
          placeholder={placeholder}
          className={cn(
            "w-full px-4 py-2 pl-10 pr-12",
            "text-sm text-neutral-900 placeholder:text-neutral-400",
            "bg-white border border-neutral-200 rounded-lg",
            "focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent",
            "transition-all duration-200"
          )}
          aria-label={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              // Logique de recherche ici
            }
          }}
        />
        
        {/* Icône de recherche à gauche */}
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
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
        
        {/* Bouton de validation à droite */}
        <button
          type="button"
          onClick={() => {
            // Logique de validation de recherche
          }}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2",
            "p-1.5 rounded-md text-white bg-brand-blue hover:bg-brand-blue-700",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-1",
            "transition-colors"
          )}
          aria-label={lang === "fr" ? "Rechercher" : "Search"}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
