"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { LanguageSelector } from "./LanguageSelector";
import { IconMenu, IconClose } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";
import { Locale, Dictionary } from "@/types/i18n";

interface HeaderProps {
  lang?: Locale;
  dict?: Dictionary;
}

export function Header({ lang = "fr", dict }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const signupText = dict?.nav.signup || "Inscription";
  const signinText = dict?.nav.signin || "Connexion";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-white"
      )}
    >
      <Container fluid>
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo & Branding */}
          <Link
            href="/"
            className="group flex items-center gap-3 lg:gap-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
          >
            {/* Logo FIBEM */}
            <div className="relative flex items-center justify-center min-w-[80px] lg:min-w-[100px]">
              <div className="relative w-full h-12 lg:h-14 overflow-hidden shadow-sm">
                <Image
                  src="/images/logo-wbg.png"
                  alt="FIBEM"
                  fill
                  className=""
                  priority
                />
              </div>
            </div>

            {/* Séparateur vertical stylisé */}
            <div className="hidden sm:block h-10 lg:h-12 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />

            {/* Bloc Téléphonie-IA */}
            <div className="flex flex-col items-start justify-center gap-0.5">
              {/* Badge Téléphonie-IA - Version principale */}
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-blue-600 px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-bold text-white shadow-md shadow-brand-blue/25 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-blue/30 group-hover:scale-[1.02]">
                  {/* Icône téléphone optionnelle */}
                  <svg 
                    className="w-3.5 h-3.5 lg:w-4 lg:h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                  Téléphonie-IA
                </span>
                
                {/* Effet de brillance subtil */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Sous-texte optionnel */}
              <span className="hidden lg:block text-[10px] text-neutral-500 font-medium tracking-wider uppercase pl-1">
                {lang === "fr" 
                  ? "Solutions intelligentes" 
                  : "Smart solutions"
                }
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            <Navigation lang={lang} dict={dict} />
          </div>

          {/* Actions Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <LanguageSelector currentLang={lang} />
            <Button href={`/${lang}/connexion`} variant="outline" size="sm">
              {signinText}
            </Button>
            <Button href={`/${lang}/inscription`} variant="primary" size="sm">
              {signupText}
            </Button>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            type="button"
            className="lg:hidden -mr-2 rounded-lg p-2 text-neutral-600 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Menu Mobile */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        lang={lang}
        dict={dict}
      />
    </header>
  );
}