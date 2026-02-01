"use client";

import { FormField } from "@/components/auth/FormField";
import { PasswordField } from "@/components/auth/PasswordField";
import { Checkbox } from "@/components/ui/Checkbox";
import { Dictionary } from "@/types/i18n";
import Link from "next/link";

interface Step4SecurityProps {
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  subscribeNewsletter: boolean;
  onChange: (field: string, value: string | boolean) => void;
  errors: {
    password?: string;
    confirmPassword?: string;
    acceptTerms?: string;
  };
  isSubmitting: boolean;
  dict: Dictionary;
  lang: string;
}

export function Step4Security({
  password,
  confirmPassword,
  acceptTerms,
  subscribeNewsletter,
  onChange,
  errors,
  isSubmitting,
  lang,
}: Step4SecurityProps) {
  // Password strength indicator
  const getPasswordStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);
  const strengthLabels = ["Très faible", "Faible", "Moyen", "Fort", "Très fort"];
  const strengthColors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-emerald-500"];

  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
          Sécurité et consentements
        </h2>
        <p className="text-neutral-500 text-sm">
          Créez un mot de passe sécurisé et acceptez nos conditions
        </p>
      </div>

      <div className="space-y-5">
        <FormField
          label="Mot de passe"
          htmlFor="password"
          error={errors.password}
          required
        >
          <PasswordField
            id="password"
            placeholder="Créez un mot de passe"
            value={password}
            onChange={(e) => onChange("password", e.target.value)}
            error={!!errors.password}
            disabled={isSubmitting}
            autoComplete="new-password"
            showLabel="Afficher"
            hideLabel="Masquer"
          />
          
          {/* Password strength indicator */}
          {password && (
            <div className="mt-2 space-y-1.5">
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      level <= passwordStrength ? strengthColors[passwordStrength - 1] : "bg-neutral-200"
                    }`}
                  />
                ))}
              </div>
              <p className={`text-xs font-medium ${
                passwordStrength <= 2 ? "text-red-600" : passwordStrength <= 3 ? "text-yellow-600" : "text-green-600"
              }`}>
                Force du mot de passe : {strengthLabels[passwordStrength - 1] || "Très faible"}
              </p>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mt-2">
            <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
              password.length >= 8 ? "bg-green-100 text-green-700" : "bg-neutral-100 text-neutral-500"
            }`}>
              {password.length >= 8 ? (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              ) : (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
              )}
              8+ caractères
            </span>
            <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
              /\d/.test(password) ? "bg-green-100 text-green-700" : "bg-neutral-100 text-neutral-500"
            }`}>
              {/\d/.test(password) ? (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              ) : (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
              )}
              1 chiffre
            </span>
          </div>
        </FormField>

        <FormField
          label="Confirmer le mot de passe"
          htmlFor="confirmPassword"
          error={errors.confirmPassword}
          required
        >
          <PasswordField
            id="confirmPassword"
            placeholder="Confirmez votre mot de passe"
            value={confirmPassword}
            onChange={(e) => onChange("confirmPassword", e.target.value)}
            error={!!errors.confirmPassword}
            disabled={isSubmitting}
            autoComplete="new-password"
            showLabel="Afficher"
            hideLabel="Masquer"
          />
          {confirmPassword && password === confirmPassword && (
            <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Les mots de passe correspondent
            </p>
          )}
        </FormField>
      </div>

      <div className="border-t border-neutral-100 pt-6 space-y-4">
        <h3 className="text-base font-semibold text-neutral-900 mb-3">Consentements</h3>
        
        <div className={`
          p-4 rounded-xl border-2 transition-colors
          ${errors.acceptTerms ? "border-red-200 bg-red-50" : acceptTerms ? "border-green-200 bg-green-50" : "border-neutral-200 bg-neutral-50"}
        `}>
          <Checkbox
            id="acceptTerms"
            label={
              <span className="text-sm text-neutral-700">
                J'accepte les{" "}
                <Link
                  href={`/${lang}/conditions-generales`}
                  className="text-brand-blue hover:text-brand-blue-800 font-semibold underline underline-offset-2"
                  target="_blank"
                >
                  Conditions Générales d'Utilisation
                </Link>
                {" "}et la{" "}
                <Link
                  href={`/${lang}/politique-confidentialite`}
                  className="text-brand-blue hover:text-brand-blue-800 font-semibold underline underline-offset-2"
                  target="_blank"
                >
                  Politique de Confidentialité
                </Link>
                <span className="text-red-500 ml-1">*</span>
              </span>
            }
            checked={acceptTerms}
            onChange={(e) => onChange("acceptTerms", e.target.checked)}
            error={!!errors.acceptTerms}
            disabled={isSubmitting}
          />
          {errors.acceptTerms && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5 ml-8" role="alert">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.acceptTerms}
            </p>
          )}
        </div>

        <div className={`
          p-4 rounded-xl border-2 transition-colors
          ${subscribeNewsletter ? "border-brand-blue/30 bg-blue-50" : "border-neutral-200 bg-neutral-50"}
        `}>
          <Checkbox
            id="subscribeNewsletter"
            label={
              <span className="text-sm text-neutral-700">
                <span className="font-medium">Recevoir la newsletter</span>
                <br />
                <span className="text-neutral-500">Restez informé des actualités et nouveautés de FIBEM</span>
              </span>
            }
            checked={subscribeNewsletter}
            onChange={(e) => onChange("subscribeNewsletter", e.target.checked)}
            disabled={isSubmitting}
          />
        </div>
      </div>
    </div>
  );
}