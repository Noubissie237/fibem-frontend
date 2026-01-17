"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { LanguageSelector } from "./LanguageSelector";
import { IconMenu, IconClose, IconPhone } from "@/components/icons/Icons";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft"
          : "bg-white"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-lg"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-brand-blue rounded-lg">
              <IconPhone className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-brand-blue leading-none">
                FIBEM
              </span>
              <span className="text-xs text-neutral-500 leading-none">
                Téléphonie-IA
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            <Navigation />
          </div>

          {/* Actions Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <LanguageSelector />
            <Button href="/connexion" variant="outline" size="sm">
              Connexion
            </Button>
            <Button href="/inscription" variant="primary" size="sm">
              Inscription
            </Button>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-neutral-600 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? (
              <IconClose className="w-6 h-6" />
            ) : (
              <IconMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Menu Mobile */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}