"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Locale } from "@/types/i18n";

interface JobSearchHeroProps {
  lang: Locale;
  onSearch?: (keyword: string, location: string) => void;
  onShowAllOffers?: () => void;
}

const IconSearch = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconMapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export function JobSearchHero({ lang, onSearch, onShowAllOffers }: JobSearchHeroProps) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(keyword, location);
    }
  };

  const isFrench = lang === "fr";

  const registrationButtons = [
    {
      id: "job-seeker",
      title: isFrench ? "S'inscrire / Se réinscrire" : "Register / Re-register",
      subtitle: isFrench ? "Comme demandeur d'emploi" : "As a job seeker",
      icon: "1",
      href: `/${lang}/inscription?type=job-seeker`,
    },
    {
      id: "intern",
      title: isFrench ? "Demandeur de stage" : "Internship seeker",
      subtitle: isFrench ? "Trouver un stage" : "Find an internship",
      icon: "2",
      href: `/${lang}/inscription?type=intern`,
    },
    {
      id: "apprentice",
      title: isFrench ? "Chercheur d'alternance" : "Apprenticeship seeker",
      subtitle: isFrench ? "Trouver une alternance" : "Find an apprenticeship",
      icon: "3",
      href: `/${lang}/inscription?type=apprentice`,
    },
  ];

  return (
    <section className="relative py-12 bg-gradient-to-br from-brand-blue to-brand-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Search */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-blue-100 rounded-xl flex items-center justify-center">
                <IconSearch className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">
                  {isFrench ? "Recherche d'offres" : "Job Search"}
                </h2>
                <p className="text-sm text-neutral-500">
                  {isFrench ? "930 197 offres d'emploi disponibles" : "930,197 job offers available"}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Keyword Input */}
              <div>
                <label htmlFor="keyword" className="block text-sm font-medium text-neutral-700 mb-2">
                  {isFrench ? "Métier, mot-clé, n° d'offre" : "Job title, keyword, offer number"}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder={isFrench ? "Ex: développeur, comptable..." : "Ex: developer, accountant..."}
                    className="w-full px-4 py-3 pl-11 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                  />
                  <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                </div>
              </div>

              {/* Location Input */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-2">
                  {isFrench ? "Lieu de travail" : "Work location"}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={isFrench ? "Ex: Paris, Lyon, Dakar..." : "Ex: Paris, Lyon, Dakar..."}
                    className="w-full px-4 py-3 pl-11 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                  />
                  <IconMapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="w-full bg-brand-blue hover:bg-brand-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <IconSearch className="w-5 h-5" />
                {isFrench ? "Rechercher" : "Search"}
              </button>

              {/* Advanced Search Link */}
              <button
                type="button"
                onClick={onShowAllOffers}
                className="w-full text-sm text-brand-blue hover:text-brand-blue-700 font-medium transition-colors"
              >
                {isFrench ? "Voir toutes les offres" : "See all offers"}
              </button>
            </form>
          </div>

          {/* Right Side - Registration Buttons */}
          <div className="space-y-4">
            {registrationButtons.map((button) => (
              <a
                key={button.id}
                href={button.href}
                className="group block bg-white hover:bg-brand-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 border-2 border-transparent hover:border-brand-blue"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-lg flex items-center justify-center font-bold text-xl shrink-0 group-hover:scale-110 transition-transform">
                    {button.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-900 mb-1 group-hover:text-brand-blue transition-colors">
                      {button.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {button.subtitle}
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-neutral-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}

            {/* Additional Services */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-white/50">
              <h4 className="font-semibold text-neutral-900 mb-3 text-sm">
                {isFrench ? "Autres actions" : "Other actions"}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={`/${lang}/contact`} className="text-neutral-700 hover:text-brand-blue transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span>
                    {isFrench ? "Se connecter à mon espace personnel" : "Connect to my personal space"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
