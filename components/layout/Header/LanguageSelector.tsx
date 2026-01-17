"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IconGlobe, IconChevronDown } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";
import { Locale } from "@/types/i18n";
import { locales } from "@/lib/i18n/dictionaries";

interface LanguageSelectorProps {
  currentLang?: Locale;
}

const languageLabels: Record<Locale, { label: string; flag: string }> = {
  fr: { label: "Français", flag: "🇫🇷" },
  en: { label: "English", flag: "🇬🇧" },
};

export function LanguageSelector({ currentLang = "fr" }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLang: Locale) => {
    // Remplace le segment de langue dans le pathname
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = newLang;
    } else {
      segments.splice(1, 0, newLang);
    }
    const newPath = segments.join("/") || `/${newLang}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        className={cn(
          "flex items-center gap-1.5 px-2 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 rounded-lg transition-colors",
          isOpen && "bg-neutral-50"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <IconGlobe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang.toUpperCase()}</span>
        <IconChevronDown
          className={cn(
            "w-3 h-3 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-mega border border-neutral-100 overflow-hidden animate-fade-in z-50">
          <ul role="listbox" className="py-1">
            {locales.map((lang) => {
              const { label, flag } = languageLabels[lang];
              return (
                <li key={lang}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={currentLang === lang}
                    className={cn(
                      "flex items-center gap-2 w-full px-3 py-2 text-sm text-left transition-colors",
                      currentLang === lang
                        ? "bg-brand-blue-50 text-brand-blue"
                        : "text-neutral-700 hover:bg-neutral-50"
                    )}
                    onClick={() => handleLanguageChange(lang)}
                  >
                    <span>{flag}</span>
                    <span>{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}