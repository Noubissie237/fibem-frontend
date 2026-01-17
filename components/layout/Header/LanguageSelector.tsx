"use client";

import { useState, useRef, useEffect } from "react";
import { IconGlobe, IconChevronDown } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

const languages = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleSelect = (lang: (typeof languages)[0]) => {
    setSelectedLang(lang);
    setIsOpen(false);
    // TODO: Implémenter le changement de langue réel
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
        <span className="hidden sm:inline">{selectedLang.code.toUpperCase()}</span>
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
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selectedLang.code === lang.code}
                  className={cn(
                    "flex items-center gap-2 w-full px-3 py-2 text-sm text-left transition-colors",
                    selectedLang.code === lang.code
                      ? "bg-brand-blue-50 text-brand-blue"
                      : "text-neutral-700 hover:bg-neutral-50"
                  )}
                  onClick={() => handleSelect(lang)}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}