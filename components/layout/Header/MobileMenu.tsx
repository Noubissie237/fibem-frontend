"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationItems } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { LanguageSelector } from "./LanguageSelector";
import { IconChevronDown } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 top-16 z-40">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="relative h-full bg-white overflow-y-auto animate-fade-in">
        <nav className="p-4">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const hasMegaMenu = !!item.megaMenu;
              const isExpanded = expandedItems.includes(item.label);

              return (
                <li key={item.label}>
                  {hasMegaMenu ? (
                    <div>
                      <button
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-base font-medium text-neutral-800 hover:bg-neutral-50 rounded-lg transition-colors"
                        onClick={() => toggleExpanded(item.label)}
                        aria-expanded={isExpanded}
                      >
                        {item.label}
                        <IconChevronDown
                          className={cn(
                            "w-5 h-5 text-neutral-400 transition-transform duration-200",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>

                      {isExpanded && item.megaMenu && (
                        <div className="mt-1 ml-4 pl-4 border-l-2 border-neutral-100 space-y-4 py-2">
                          {item.megaMenu.sections.map((section, idx) => (
                            <div key={idx}>
                              {section.title && (
                                <h4 className="px-4 py-1 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                                  {section.title}
                                </h4>
                              )}
                              <ul className="space-y-1">
                                {section.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      onClick={onClose}
                                      className="block px-4 py-2 text-sm text-neutral-600 hover:text-brand-blue hover:bg-brand-blue-50/50 rounded-lg transition-colors"
                                    >
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block px-4 py-3 text-base font-medium text-neutral-800 hover:bg-neutral-50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions Mobile */}
        <div className="p-4 border-t border-neutral-100 space-y-3">
          <div className="flex justify-center mb-4">
            <LanguageSelector />
          </div>
          <Button
            href="/inscription"
            variant="primary"
            size="lg"
            className="w-full"
            onClick={onClose}
          >
            Inscription
          </Button>
          <Button
            href="/connexion"
            variant="outline"
            size="lg"
            className="w-full"
            onClick={onClose}
          >
            Connexion
          </Button>
        </div>
      </div>
    </div>
  );
}