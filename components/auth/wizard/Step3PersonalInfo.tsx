"use client";

import { FormField } from "@/components/auth/FormField";
import { Input } from "@/components/ui/Input";
import { Dictionary } from "@/types/i18n";

interface Step3PersonalInfoProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  onChange: (field: string, value: string) => void;
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
  isSubmitting: boolean;
  dict: Dictionary;
}

export function Step3PersonalInfo({
  firstName,
  lastName,
  email,
  phone,
  onChange,
  errors,
  isSubmitting,
}: Step3PersonalInfoProps) {
  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
          Informations personnelles
        </h2>
        <p className="text-neutral-500 text-sm">
          Renseignez vos coordonnées pour créer votre compte
        </p>
      </div>

      {/* Info card */}
      <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl">
        <div className="flex-shrink-0 w-8 h-8 bg-brand-blue/10 rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-neutral-600">
            Vos informations sont protégées et ne seront jamais partagées avec des tiers sans votre consentement.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            label="Prénom"
            htmlFor="firstName"
            error={errors.firstName}
            required
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <Input
                id="firstName"
                type="text"
                placeholder="Votre prénom"
                value={firstName}
                onChange={(e) => onChange("firstName", e.target.value)}
                error={!!errors.firstName}
                disabled={isSubmitting}
                autoComplete="given-name"
                className="pl-12"
              />
            </div>
          </FormField>

          <FormField
            label="Nom"
            htmlFor="lastName"
            error={errors.lastName}
            required
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <Input
                id="lastName"
                type="text"
                placeholder="Votre nom"
                value={lastName}
                onChange={(e) => onChange("lastName", e.target.value)}
                error={!!errors.lastName}
                disabled={isSubmitting}
                autoComplete="family-name"
                className="pl-12"
              />
            </div>
          </FormField>
        </div>

        <FormField
          label="Adresse email"
          htmlFor="email"
          error={errors.email}
          required
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <Input
              id="email"
              type="email"
              placeholder="votre.email@exemple.com"
              value={email}
              onChange={(e) => onChange("email", e.target.value)}
              error={!!errors.email}
              disabled={isSubmitting}
              autoComplete="email"
              className="pl-12"
            />
          </div>
        </FormField>

        <FormField
          label="Téléphone"
          htmlFor="phone"
          error={errors.phone}
          required
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <Input
              id="phone"
              type="tel"
              placeholder="+33 6 12 34 56 78"
              value={phone}
              onChange={(e) => onChange("phone", e.target.value)}
              error={!!errors.phone}
              disabled={isSubmitting}
              autoComplete="tel"
              className="pl-12"
            />
          </div>
        </FormField>
      </div>
    </div>
  );
}