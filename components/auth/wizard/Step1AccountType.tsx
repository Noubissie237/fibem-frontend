"use client";

import { AccountType, AccountTypeOption } from "@/types/signup-wizard";
import { Dictionary } from "@/types/i18n";

interface Step1AccountTypeProps {
  selectedType: AccountType | null;
  onSelect: (type: AccountType) => void;
  dict: Dictionary;
  error?: string;
}

const accountTypes: AccountTypeOption[] = [
  {
    id: "stagiaire",
    name: "Stagiaire",
    description: "Pour les étudiants et stagiaires en formation",
    monthlyPrice: 2,
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
  },
  {
    id: "candidat",
    name: "Candidat",
    description: "Pour les chercheurs d'emploi et candidats",
    monthlyPrice: 5,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: "particulier",
    name: "Particulier",
    description: "Pour un usage personnel et familial",
    monthlyPrice: 6,
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: "freelance",
    name: "Freelance",
    description: "Pour les travailleurs indépendants",
    monthlyPrice: 8,
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
  },
  {
    id: "professionnel",
    name: "Professionnel",
    description: "Pour les professionnels et petites entreprises",
    monthlyPrice: 10,
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80",
  },
  {
    id: "vendeur",
    name: "Vendeur",
    description: "Pour les commerciaux et équipes de vente",
    monthlyPrice: 12,
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80",
  },
  {
    id: "administrateur",
    name: "Administrateur",
    description: "Accès complet pour la gestion de la plateforme",
    monthlyPrice: null,
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
  },
];

export function Step1AccountType({
  selectedType,
  onSelect,
  error,
}: Step1AccountTypeProps) {
  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
          Choisissez votre type de compte
        </h2>
        <p className="text-neutral-500 text-sm">
          Sélectionnez le type de compte qui correspond le mieux à vos besoins
        </p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 animate-shake">
          <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm font-medium text-red-800">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {accountTypes.map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() => onSelect(type.id)}
            className={`
              group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 text-left
              hover:shadow-xl hover:-translate-y-1
              ${
                selectedType === type.id
                  ? "border-brand-blue bg-gradient-to-br from-blue-50 to-white shadow-lg shadow-brand-blue/10"
                  : "border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-neutral-200/50"
              }
            `}
          >
            {/* Image header */}
            <div className="relative h-32 overflow-hidden">
              <img
                src={type.imageUrl}
                alt={type.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Selected indicator */}
              {selectedType === type.id && (
                <div className="absolute top-3 right-3 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center shadow-lg animate-scale-in">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              {/* Price badge on image */}
              <div className="absolute bottom-3 left-3">
                <span className="inline-flex items-center bg-brand-blue px-3 py-1.5 rounded-full text-sm font-bold text-white shadow-sm">
                  {type.monthlyPrice !== null ? (
                    <>{type.monthlyPrice}€<span className="font-normal text-white">/mois</span></>
                  ) : (
                    <span className="text-white">Sur validation</span>
                  )}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-brand-blue transition-colors">
                {type.name}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {type.description}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className={`
              absolute bottom-0 left-0 right-0 h-1 transition-all duration-300
              ${selectedType === type.id ? "bg-brand-blue" : "bg-transparent group-hover:bg-neutral-200"}
            `} />
          </button>
        ))}
      </div>
    </div>
  );
}