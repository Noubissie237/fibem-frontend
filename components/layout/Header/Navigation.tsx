"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { getNavigationItems } from "@/lib/navigation";
import { MegaMenu } from "./MegaMenu";
import { IconChevronDown } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";
import { Locale, Dictionary } from "@/types/i18n";

interface NavigationProps {
  lang: Locale;
  dict?: Dictionary;
}

export function Navigation({ lang, dict }: NavigationProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const navigationItems = getNavigationItems(lang, dict);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="flex items-center" role="navigation">
      <ul className="flex items-center gap-1">
        {navigationItems.map((item) => {
          const hasMegaMenu = !!item.megaMenu;
          const isActive = activeMenu === item.label;

          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => hasMegaMenu && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {hasMegaMenu ? (
                <>
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "text-brand-blue bg-brand-blue-50"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                    )}
                    onClick={() => setActiveMenu(isActive ? null : item.label)}
                    aria-expanded={isActive}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <IconChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isActive && "rotate-180"
                      )}
                    />
                  </button>

                  {isActive && item.megaMenu && (
                    <MegaMenu
                      data={item.megaMenu}
                      onClose={() => setActiveMenu(null)}
                    />
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}