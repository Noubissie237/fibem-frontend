"use client";

import { useState } from "react";
import { Locale } from "@/types/i18n";

interface JobFiltersProps {
  lang: Locale;
  onFilterChange?: (filters: JobFilterValues) => void;
}

export interface JobFilterValues {
  creationDate?: string;
  contractType?: string;
  weeklyHours?: string;
  domain?: string;
  experience?: string;
  location?: string;
}

const IconChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const IconFilter = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

export function JobFilters({ lang, onFilterChange }: JobFiltersProps) {
  const [filters, setFilters] = useState<JobFilterValues>({});
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const isFrench = lang === "fr";

  const filterOptions = {
    creationDate: {
      label: isFrench ? "Date de création" : "Creation date",
      options: [
        { value: "24h", label: isFrench ? "Dernières 24h" : "Last 24h" },
        { value: "7d", label: isFrench ? "7 derniers jours" : "Last 7 days" },
        { value: "30d", label: isFrench ? "30 derniers jours" : "Last 30 days" },
      ],
    },
    contractType: {
      label: isFrench ? "Type de contrat" : "Contract type",
      options: [
        { value: "cdi", label: "CDI" },
        { value: "cdd", label: "CDD" },
        { value: "interim", label: isFrench ? "Intérim" : "Temporary" },
        { value: "freelance", label: "Freelance" },
        { value: "stage", label: isFrench ? "Stage" : "Internship" },
        { value: "alternance", label: isFrench ? "Alternance" : "Apprenticeship" },
      ],
    },
    weeklyHours: {
      label: isFrench ? "Durée hebdomadaire" : "Weekly hours",
      options: [
        { value: "full", label: isFrench ? "Temps plein" : "Full-time" },
        { value: "part", label: isFrench ? "Temps partiel" : "Part-time" },
      ],
    },
    domain: {
      label: isFrench ? "Domaine professionnel" : "Professional domain",
      options: [
        { value: "it", label: isFrench ? "Informatique / Tech" : "IT / Tech" },
        { value: "marketing", label: "Marketing / Communication" },
        { value: "sales", label: isFrench ? "Commerce / Vente" : "Sales" },
        { value: "finance", label: "Finance / Comptabilité" },
        { value: "rh", label: isFrench ? "Ressources Humaines" : "Human Resources" },
        { value: "engineering", label: isFrench ? "Ingénierie" : "Engineering" },
        { value: "other", label: isFrench ? "Autre" : "Other" },
      ],
    },
    experience: {
      label: isFrench ? "Expérience" : "Experience",
      options: [
        { value: "junior", label: isFrench ? "Débutant (0-2 ans)" : "Junior (0-2 years)" },
        { value: "confirmed", label: isFrench ? "Confirmé (2-5 ans)" : "Confirmed (2-5 years)" },
        { value: "senior", label: isFrench ? "Senior (5+ ans)" : "Senior (5+ years)" },
      ],
    },
  };

  const handleFilterChange = (key: keyof JobFilterValues, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const clearFilters = () => {
    setFilters({});
    if (onFilterChange) {
      onFilterChange({});
    }
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="bg-white border-b border-neutral-200 sticky top-16 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Filters Row */}
        <div className="flex items-center gap-3 py-3 overflow-x-auto scrollbar-hide">
          {/* Date de création */}
          <div className="relative shrink-0">
            <select
              value={filters.creationDate || ""}
              onChange={(e) => handleFilterChange("creationDate", e.target.value)}
              className="appearance-none bg-white border border-neutral-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-neutral-700 hover:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue cursor-pointer transition-all"
            >
              <option value="">{filterOptions.creationDate.label}</option>
              {filterOptions.creationDate.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <IconChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>

          {/* Type de contrat */}
          <div className="relative shrink-0">
            <select
              value={filters.contractType || ""}
              onChange={(e) => handleFilterChange("contractType", e.target.value)}
              className="appearance-none bg-white border border-neutral-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-neutral-700 hover:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue cursor-pointer transition-all"
            >
              <option value="">{filterOptions.contractType.label}</option>
              {filterOptions.contractType.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <IconChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>

          {/* Durée hebdomadaire */}
          <div className="relative shrink-0">
            <select
              value={filters.weeklyHours || ""}
              onChange={(e) => handleFilterChange("weeklyHours", e.target.value)}
              className="appearance-none bg-white border border-neutral-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-neutral-700 hover:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue cursor-pointer transition-all"
            >
              <option value="">{filterOptions.weeklyHours.label}</option>
              {filterOptions.weeklyHours.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <IconChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>

          {/* Domaine */}
          <div className="relative shrink-0">
            <select
              value={filters.domain || ""}
              onChange={(e) => handleFilterChange("domain", e.target.value)}
              className="appearance-none bg-white border border-neutral-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-neutral-700 hover:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue cursor-pointer transition-all"
            >
              <option value="">{filterOptions.domain.label}</option>
              {filterOptions.domain.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <IconChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>

          {/* Expérience */}
          <div className="relative shrink-0">
            <select
              value={filters.experience || ""}
              onChange={(e) => handleFilterChange("experience", e.target.value)}
              className="appearance-none bg-white border border-neutral-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-neutral-700 hover:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue cursor-pointer transition-all"
            >
              <option value="">{filterOptions.experience.label}</option>
              {filterOptions.experience.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <IconChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>

          {/* Plus de filtres */}
          <button
            onClick={() => setShowMoreFilters(!showMoreFilters)}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg text-sm font-medium text-neutral-700 hover:border-brand-blue hover:text-brand-blue transition-all"
          >
            <IconFilter className="w-4 h-4" />
            {isFrench ? "Plus de filtres" : "More filters"}
            {activeFiltersCount > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-brand-blue text-white text-xs rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Clear Filters */}
          {activeFiltersCount > 0 && (
            <button
              onClick={clearFilters}
              className="shrink-0 text-sm text-neutral-600 hover:text-brand-blue transition-colors underline"
            >
              {isFrench ? "Effacer les filtres" : "Clear filters"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
