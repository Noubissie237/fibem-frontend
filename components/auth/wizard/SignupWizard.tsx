"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Locale, Dictionary } from "@/types/i18n";
import { WizardFormData, WizardErrors, AccountType, BillingPeriod } from "@/types/signup-wizard";
import { Button } from "@/components/ui/Button";
import { Step1AccountType } from "./Step1AccountType";
import { Step2BillingPlan } from "./Step2BillingPlan";
import { Step3PersonalInfo } from "./Step3PersonalInfo";
import { Step4Security } from "./Step4Security";
import { WizardProgress } from "./WizardProgress";
import Link from "next/link";

interface SignupWizardProps {
  lang: Locale;
  dict: Dictionary;
}

const TOTAL_STEPS = 4;
const STEP_LABELS = ["Type de compte", "Forfait", "Information", "Sécurité"];

export function SignupWizard({ lang, dict }: SignupWizardProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState<WizardFormData>({
    accountType: null,
    billingPeriod: "monthly",
    calculatedPrice: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    subscribeNewsletter: false,
  });

  const [errors, setErrors] = useState<WizardErrors>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8 && /\d/.test(password);
  };

  const validatePhone = (phone: string): boolean => {
    return phone.trim().length >= 10;
  };

  const validateStep = (step: number): boolean => {
    const newErrors: WizardErrors = {};

    switch (step) {
      case 1:
        if (!formData.accountType) {
          newErrors.accountType = "Veuillez sélectionner un type de compte";
        }
        break;

      case 2:
        break;

      case 3:
        if (!formData.firstName.trim()) {
          newErrors.firstName = "Le prénom est requis";
        }
        if (!formData.lastName.trim()) {
          newErrors.lastName = "Le nom est requis";
        }
        if (!formData.email.trim()) {
          newErrors.email = "L'email est requis";
        } else if (!validateEmail(formData.email)) {
          newErrors.email = "Format d'email invalide";
        }
        if (!formData.phone.trim()) {
          newErrors.phone = "Le téléphone est requis";
        } else if (!validatePhone(formData.phone)) {
          newErrors.phone = "Numéro de téléphone invalide";
        }
        break;

      case 4:
        if (!formData.password) {
          newErrors.password = "Le mot de passe est requis";
        } else if (!validatePassword(formData.password)) {
          newErrors.password = "Minimum 8 caractères avec au moins 1 chiffre";
        }
        if (!formData.confirmPassword) {
          newErrors.confirmPassword = "Veuillez confirmer le mot de passe";
        } else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
        }
        if (!formData.acceptTerms) {
          newErrors.acceptTerms = "Vous devez accepter les conditions pour continuer";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAccountTypeSelect = (type: AccountType) => {
    setFormData({ ...formData, accountType: type });
    setErrors({ ...errors, accountType: undefined });
  };

  const handleBillingPlanSelect = (period: BillingPeriod, price: number) => {
    setFormData({ ...formData, billingPeriod: period, calculatedPrice: price });
  };

  const handleFieldChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: undefined });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateStep(4)) {
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Données d'inscription:", formData);

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          {/* Lien retour accueil */}
          <div className="mb-8">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-brand-blue transition-all duration-200 group"
            >
              <span className="text-sm font-medium">Retour à l'accueil</span>
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl shadow-neutral-200/50 p-8 text-center border border-neutral-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-200">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              Compte créé avec succès !
            </h2>
            <p className="text-neutral-600 mb-6 text-sm">
              Un email de confirmation vous a été envoyé. Vous pouvez maintenant vous connecter.
            </p>
            <Button
              href={`/${lang}/connexion`}
              variant="primary"
              size="lg"
              className="w-full shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 transition-all duration-300"
            >
              Se connecter
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1AccountType
            selectedType={formData.accountType}
            onSelect={handleAccountTypeSelect}
            dict={dict}
            error={errors.accountType}
          />
        );
      case 2:
        return formData.accountType ? (
          <Step2BillingPlan
            accountType={formData.accountType}
            selectedPeriod={formData.billingPeriod}
            onSelect={handleBillingPlanSelect}
            dict={dict}
          />
        ) : null;
      case 3:
        return (
          <Step3PersonalInfo
            firstName={formData.firstName}
            lastName={formData.lastName}
            email={formData.email}
            phone={formData.phone}
            onChange={handleFieldChange}
            errors={errors}
            isSubmitting={isSubmitting}
            dict={dict}
          />
        );
      case 4:
        return (
          <Step4Security
            password={formData.password}
            confirmPassword={formData.confirmPassword}
            acceptTerms={formData.acceptTerms}
            subscribeNewsletter={formData.subscribeNewsletter}
            onChange={handleFieldChange}
            errors={errors}
            isSubmitting={isSubmitting}
            dict={dict}
            lang={lang}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 py-8 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Lien retour accueil */}
        <div className="mb-8">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-brand-blue transition-all duration-200 group"
          >
            <span className="text-sm font-medium">Retour à l'accueil</span>
          </Link>
        </div>

        {/* Logo et titre */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2 tracking-tight">
            Créer un compte FIBEM
          </h1>
          <p className="text-neutral-500 text-sm">
            Rejoignez-nous en quelques étapes simples
          </p>
        </div>

        {/* Progress indicator avec anneaux */}
        <WizardProgress currentStep={currentStep} steps={STEP_LABELS} />

        <div className="bg-white rounded-3xl shadow-2xl shadow-neutral-200/50 p-6 md:p-8 border border-neutral-100">
          <form onSubmit={handleSubmit}>
            <div className="min-h-[350px]">
              {renderStep()}
            </div>

            {/* Navigation buttons */}
            <div className="mt-6 pt-6 border-t border-neutral-100 flex gap-4">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  onClick={handlePrevious}
                  disabled={isSubmitting}
                  className="flex-1 group"
                >
                  <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Précédent
                </Button>
              )}
              {currentStep < TOTAL_STEPS ? (
                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="flex-1 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 transition-all duration-300 group"
                >
                  Suivant
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="flex-1 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Création en cours...
                    </span>
                  ) : (
                    "Créer mon compte"
                  )}
                </Button>
              )}
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-neutral-100 text-center">
            <p className="text-neutral-500">
              Vous avez déjà un compte ?{" "}
              <Link
                href={`/${lang}/connexion`}
                className="text-brand-blue hover:text-brand-blue-800 font-semibold transition-colors"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}