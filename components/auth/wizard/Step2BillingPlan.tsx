"use client";

import { BillingPeriod, AccountType } from "@/types/signup-wizard";
import { Dictionary } from "@/types/i18n";

interface Step2BillingPlanProps {
  accountType: AccountType;
  selectedPeriod: BillingPeriod;
  onSelect: (period: BillingPeriod, price: number) => void;
  dict: Dictionary;
}

const accountTypePrices: Record<AccountType, number> = {
  stagiaire: 2,
  candidat: 5,
  particulier: 6,
  freelance: 8,
  professionnel: 10,
  vendeur: 12,
  administrateur: 0,
};

interface BillingOption {
  id: BillingPeriod;
  name: string;
  badge: string;
  badgeColor: string;
  getPrice: (monthlyPrice: number) => number;
  getPriceLabel: (monthlyPrice: number) => string;
  getSubLabel: (monthlyPrice: number) => string;
}

const billingOptions: BillingOption[] = [
  {
    id: "monthly",
    name: "Mensuel",
    badge: "Flexible",
    badgeColor: "bg-neutral-100 text-neutral-700",
    getPrice: (monthlyPrice) => monthlyPrice,
    getPriceLabel: (monthlyPrice) => `${monthlyPrice}€`,
    getSubLabel: () => "par mois",
  },
  {
    id: "yearly",
    name: "Annuel",
    badge: "-12€",
    badgeColor: "bg-green-100 text-green-700",
    getPrice: (monthlyPrice) => monthlyPrice * 12 - 12,
    getPriceLabel: (monthlyPrice) => `${monthlyPrice * 12 - 12}€`,
    getSubLabel: (monthlyPrice) => `${((monthlyPrice * 12 - 12) / 12).toFixed(2)}€/mois`,
  },
  {
    id: "twoYears",
    name: "2 ans",
    badge: "-29€",
    badgeColor: "bg-brand-blue/10 text-brand-blue",
    getPrice: (monthlyPrice) => monthlyPrice * 24 - 29,
    getPriceLabel: (monthlyPrice) => `${monthlyPrice * 24 - 29}€`,
    getSubLabel: (monthlyPrice) => `${((monthlyPrice * 24 - 29) / 24).toFixed(2)}€/mois`,
  },
];

export function Step2BillingPlan({
  accountType,
  selectedPeriod,
  onSelect,
}: Step2BillingPlanProps) {
  const monthlyPrice = accountTypePrices[accountType];
  const isAdministrator = accountType === "administrateur";

  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
          Choisissez votre forfait
        </h2>
        <p className="text-neutral-500 text-sm">
          Sélectionnez la durée d'abonnement qui vous convient
        </p>
      </div>

      {/* Bannière essai gratuit */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl p-4 shadow-lg shadow-green-200/50">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative flex items-center justify-center gap-3 text-white">
          <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl font-bold">
              1 mois d'essai GRATUIT
            </p>
            <p className="text-white/80 text-xs">
              Pour tous les nouveaux comptes
            </p>
          </div>
        </div>
      </div>

      {isAdministrator ? (
        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-blue/25">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-neutral-900 mb-2">
            Compte Administrateur
          </h3>
          <p className="text-neutral-600 text-sm max-w-md mx-auto">
            Votre demande sera examinée par notre équipe. Vous recevrez une réponse sous 48h.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {billingOptions.map((option, index) => {
            const price = option.getPrice(monthlyPrice);
            const priceLabel = option.getPriceLabel(monthlyPrice);
            const subLabel = option.getSubLabel(monthlyPrice);
            const isPopular = option.id === "yearly";

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => onSelect(option.id, price)}
                className={`
                  group relative overflow-hidden rounded-2xl border-2 transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                  ${
                    selectedPeriod === option.id
                      ? "border-brand-blue bg-gradient-to-br from-blue-50 to-white shadow-lg shadow-brand-blue/10"
                      : "border-neutral-200 bg-white hover:border-neutral-300"
                  }
                  ${isPopular ? "md:scale-105 md:z-10" : ""}
                `}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-px -right-px">
                    <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl shadow-sm">
                      Populaire
                    </div>
                  </div>
                )}

                {/* Selected indicator */}
                {selectedPeriod === option.id && (
                  <div className="absolute top-4 left-4 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center shadow-lg animate-scale-in">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}

                <div className="p-5 pt-8">

                  {/* Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-4 ${option.badgeColor}`}>
                    {option.badge}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    {option.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-neutral-900">{priceLabel}</span>
                  </div>
                  <p className="text-sm text-neutral-500 mb-4">
                    {subLabel}
                  </p>

                  {/* Features */}
                  <div className="pt-4 border-t border-neutral-100">
                    <p className="text-sm text-neutral-600">
                      {option.id === "monthly" && "Sans engagement, annulez à tout moment"}
                      {option.id === "yearly" && `Économisez 12€ par rapport au mensuel`}
                      {option.id === "twoYears" && `Économisez 29€, notre meilleure offre`}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}