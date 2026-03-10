"use client";

import { useState } from "react";
import { Locale } from "@/types/i18n";

interface JobOffer {
  id: number;
  title: string;
  company: string;
  location: string;
  contractType: string;
  salary?: string;
  publishedDate: string;
  description: string;
  logo?: string;
  isFavorite?: boolean;
}

interface JobResultsListProps {
  lang: Locale;
  jobs: JobOffer[];
  totalCount: number;
  searchKeyword?: string;
}

const IconMapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconClock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconBriefcase = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconHeart = ({ className, filled }: { className?: string; filled?: boolean }) => (
  <svg className={className} fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const IconMap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

export function JobResultsList({ lang, jobs, totalCount, searchKeyword }: JobResultsListProps) {
  const [sortBy, setSortBy] = useState<"relevance" | "date">("relevance");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const isFrench = lang === "fr";

  const toggleFavorite = (jobId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(jobId)) {
      newFavorites.delete(jobId);
    } else {
      newFavorites.add(jobId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Results Count and Sort */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
                {totalCount.toLocaleString()} {isFrench ? "offres" : "offers"}
                {searchKeyword && (
                  <span className="text-brand-blue"> {isFrench ? "pour" : "for"} {searchKeyword}</span>
                )}
              </h1>
              <p className="text-sm text-neutral-600 mt-1">
                {isFrench ? "Nous avons corrigé votre saisie, vous pouvez réessayer avec" : "We corrected your input, you can try again with"}{" "}
                <button className="text-brand-blue hover:underline font-medium">
                  {searchKeyword || (isFrench ? "développeur" : "developer")}
                </button>
              </p>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-neutral-600">{isFrench ? "Trier par" : "Sort by"}:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setSortBy("relevance")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    sortBy === "relevance"
                      ? "bg-brand-blue text-white"
                      : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300"
                  }`}
                >
                  {isFrench ? "Pertinence" : "Relevance"}
                </button>
                <button
                  onClick={() => setSortBy("date")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    sortBy === "date"
                      ? "bg-brand-blue text-white"
                      : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300"
                  }`}
                >
                  {isFrench ? "Date" : "Date"}
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-neutral-200 hover:border-brand-blue"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  {/* Left Side - Job Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      {/* Company Logo */}
                      {job.logo ? (
                        <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center shrink-0">
                          <img src={job.logo} alt={job.company} className="w-12 h-12 object-contain" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue-700 rounded-lg flex items-center justify-center shrink-0">
                          <span className="text-white font-bold text-xl">
                            {job.company.charAt(0)}
                          </span>
                        </div>
                      )}

                      {/* Job Details */}
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-neutral-900 group-hover:text-brand-blue transition-colors mb-1">
                          {job.title}
                        </h2>
                        <p className="text-brand-blue font-semibold mb-3">{job.company}</p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mb-3">
                          <span className="inline-flex items-center gap-1.5">
                            <IconMapPin className="w-4 h-4 text-neutral-500" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <IconBriefcase className="w-4 h-4 text-neutral-500" />
                            {job.contractType}
                          </span>
                          {job.salary && (
                            <span className="inline-flex items-center gap-1.5 text-green-600 font-medium">
                              {job.salary}
                            </span>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-neutral-600 text-sm line-clamp-2 mb-3">
                          {job.description}
                        </p>

                        {/* Published Date */}
                        <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                          <IconClock className="w-3.5 h-3.5" />
                          {isFrench ? "Publié" : "Published"} {job.publishedDate}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Actions */}
                  <div className="flex flex-col items-end gap-3 shrink-0">
                    <button
                      onClick={() => toggleFavorite(job.id)}
                      className={`p-2 rounded-lg transition-all ${
                        favorites.has(job.id)
                          ? "text-red-500 bg-red-50"
                          : "text-neutral-400 hover:text-red-500 hover:bg-red-50"
                      }`}
                      aria-label={isFrench ? "Ajouter aux favoris" : "Add to favorites"}
                    >
                      <IconHeart className="w-6 h-6" filled={favorites.has(job.id)} />
                    </button>

                    <button className="px-6 py-2.5 bg-brand-blue hover:bg-brand-blue-700 text-white font-semibold rounded-lg transition-colors">
                      {isFrench ? "Voir l'offre" : "View offer"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-brand-blue to-brand-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-neutral-300 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              {isFrench ? "Précédent" : "Previous"}
            </button>
            <button className="px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-medium">
              1
            </button>
            <button className="px-4 py-2 border border-neutral-300 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-all">
              2
            </button>
            <button className="px-4 py-2 border border-neutral-300 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-all">
              3
            </button>
            <span className="px-2 text-neutral-500">...</span>
            <button className="px-4 py-2 border border-neutral-300 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-all">
              10
            </button>
            <button className="px-4 py-2 border border-neutral-300 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-all">
              {isFrench ? "Suivant" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
