"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { LanguageSelector } from "./LanguageSelector";
import { CurrencySelector } from "./CurrencySelector";
import { SearchBar } from "./SearchBar";
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
        isScrolled ? "bg-brand-blue backdrop-blur-md shadow-soft" : "bg-brand-blue/80"
      )}
    >
      <Container fluid>
        <div className="flex h-16 items-center justify-between lg:h-20 gap-1 sm:gap-2 lg:gap-3">
          {/* Logo & Branding */}
          <Link
            href="/"
            className="group flex items-center gap-1.5 sm:gap-2 lg:gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 shrink-0"
          >
            {/* Logo FIBEM */}
            <div className="relative flex items-center justify-center w-[60px] sm:w-[70px] lg:w-[90px] shrink-0">
              <div className="relative w-full h-9 sm:h-10 lg:h-12 overflow-hidden">
                <Image
                  src="/images/logo.jpg"
                  alt="FIBEM"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Séparateur vertical stylisé */}
            <div className="hidden md:block h-8 lg:h-10 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent shrink-0" />

            {/* Bloc Téléphonie-IA */}
            <div className="hidden md:flex flex-col items-start justify-center gap-0.5 shrink-0">
              {/* Badge Téléphonie-IA - Version principale */}
              <div className="relative">
                <span className="inline-flex items-center gap-1 rounded-lg bg-white px-2 py-1 lg:px-3 lg:py-1.5 text-[10px] lg:text-xs font-bold text-red-600 shadow-md shadow-brand-blue/25 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-blue/30 whitespace-nowrap">
                  {/* Icône téléphone optionnelle */}
                  <svg 
                    className="w-3 h-3 lg:w-3.5 lg:h-3.5 shrink-0" 
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
                  <span>Téléphonie-IA</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Navigation Desktop - Aligné à droite */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-1 xl:gap-2 2xl:gap-3">
            {/* Barre de recherche - masquée sur zoom important */}
            <div className="hidden 2xl:block shrink">
              <SearchBar isOpen={true} onClose={() => {}} lang={lang} />
            </div>
            
            {/* Sélecteur de langue */}
            <div className="shrink-0">
              <LanguageSelector currentLang={lang} />
            </div>
            
            {/* Sélecteur de devise */}
            <div className="shrink-0">
              <CurrencySelector />
            </div>
            
            {/* Séparateur */}
            <div className="hidden xl:block h-6 w-px bg-neutral-200 shrink-0" />
            
            {/* Navigation Items */}
            <div className="shrink-0">
              <Navigation lang={lang} dict={dict} />
            </div>
            
            {/* Séparateur */}
            <div className="hidden xl:block h-6 w-px bg-neutral-200 shrink-0" />
            
            {/* Boutons Connexion/Inscription */}
            <div className="flex items-center gap-1 xl:gap-2 shrink-0">
              <Button href={`/${lang}/connexion`} variant="outline" className="text-white whitespace-nowrap text-xs xl:text-sm px-2 xl:px-3" size="sm">
                {signinText}
              </Button>
              <Button href={`/${lang}/inscription`} variant="secondary" className="whitespace-nowrap text-xs xl:text-sm px-2 xl:px-3" size="sm">
                {signupText}
              </Button>
            </div>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            type="button"
            className="lg:hidden -mr-2 rounded-lg p-2 text-white hover:text-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 shrink-0"
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