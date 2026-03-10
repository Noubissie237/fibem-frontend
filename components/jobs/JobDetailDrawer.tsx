"use client";

import { useEffect } from "react";
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
  fullDescription?: string;
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
}

interface JobDetailDrawerProps {
  job: JobOffer | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Locale;
}

const IconClose = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconMapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconBriefcase = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconClock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconBookmark = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
);

const IconShare = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

export function JobDetailDrawer({ job, isOpen, onClose, lang }: JobDetailDrawerProps) {
  const isFrench = lang === "fr";

  // Bloquer le scroll du body quand le drawer est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!job) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[600px] lg:w-[700px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header Sticky */}
        <div className="sticky top-0 bg-white border-b border-neutral-200 z-10">
          <div className="flex items-center justify-between p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label={isFrench ? "Fermer" : "Close"}
              >
                <IconClose className="w-6 h-6 text-neutral-600" />
              </button>
              <div>
                <p className="text-sm text-neutral-500">
                  {isFrench ? "Offre n°" : "Offer #"}{job.id}
                </p>
                <p className="text-xs text-neutral-400">
                  {isFrench ? "Actualisé le" : "Updated on"} {job.publishedDate}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label={isFrench ? "Sauvegarder" : "Save"}
              >
                <IconBookmark className="w-5 h-5 text-neutral-600" />
              </button>
              <button
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label={isFrench ? "Partager" : "Share"}
              >
                <IconShare className="w-5 h-5 text-neutral-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 pb-32">
          {/* Job Title & Company */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
              {job.title}
            </h1>
            
            <div className="flex items-center gap-3 mb-4">
              {job.logo ? (
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center shrink-0">
                  <img src={job.logo} alt={job.company} className="w-10 h-10 object-contain" />
                </div>
              ) : (
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-blue-700 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-lg">
                    {job.company.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <p className="font-semibold text-brand-blue text-lg">{job.company}</p>
                <p className="text-sm text-neutral-500">{isFrench ? "Contrat de travail" : "Employment contract"}</p>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg">
                <IconMapPin className="w-4 h-4 text-neutral-600" />
                <span className="font-medium">{job.location}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg">
                <IconBriefcase className="w-4 h-4 text-neutral-600" />
                <span className="font-medium">{job.contractType}</span>
              </span>
              {job.salary && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg font-medium">
                  {job.salary}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg">
                <IconClock className="w-4 h-4 text-neutral-600" />
                <span className="font-medium">{job.publishedDate}</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-neutral-900 mb-3">
              {isFrench ? "Missions principales" : "Main responsibilities"}
            </h2>
            <div className="prose prose-sm max-w-none text-neutral-700">
              <p>{job.fullDescription || job.description}</p>
            </div>
          </div>

          {/* Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-neutral-900 mb-3">
                {isFrench ? "Développement & évolution" : "Development & evolution"}
              </h2>
              <ul className="space-y-2">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-brand-blue mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-neutral-900 mb-3">
                {isFrench ? "Analyse et spécifications" : "Analysis and specifications"}
              </h2>
              <ul className="space-y-2">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-brand-blue mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-neutral-900 mb-3">
                {isFrench ? "Avantages" : "Benefits"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {job.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-neutral-700 bg-brand-blue-50 px-3 py-2 rounded-lg">
                    <span className="text-brand-blue">✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Company Info */}
          <div className="bg-neutral-50 rounded-xl p-4 sm:p-5 border border-neutral-200">
            <h3 className="font-semibold text-neutral-900 mb-2">
              {isFrench ? "À propos de l'entreprise" : "About the company"}
            </h3>
            <p className="text-sm text-neutral-600 mb-3">
              {job.company} {isFrench ? "recrute pour ce poste." : "is hiring for this position."}
            </p>
            <a href="#" className="text-sm text-brand-blue hover:text-brand-blue-700 font-medium">
              {isFrench ? "En savoir plus sur l'entreprise" : "Learn more about the company"} →
            </a>
          </div>
        </div>

        {/* Footer Sticky - Apply Button */}
        <div className="fixed bottom-0 right-0 w-full sm:w-[600px] lg:w-[700px] bg-white border-t border-neutral-200 p-4 sm:p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-brand-blue hover:bg-brand-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              {isFrench ? "Postuler" : "Apply"}
            </button>
          </div>
          <p className="text-xs text-neutral-500 text-center mt-3">
            {isFrench ? "Salaire brut : Annuel de 32000€ à 40000€ sur 12.0 mois" : "Gross salary: Annual from €32,000 to €40,000 over 12.0 months"}
          </p>
        </div>
      </div>
    </>
  );
}
