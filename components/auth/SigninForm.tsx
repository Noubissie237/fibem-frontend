"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Locale, Dictionary } from "@/types/i18n";
import { FormField } from "./FormField";
import { PasswordField } from "./PasswordField";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";

interface SigninFormProps {
  lang: Locale;
  dict: Dictionary;
}

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export function SigninForm({ lang, dict }: SigninFormProps) {
  const router = useRouter();
  const { signin } = dict.authPage;
  
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = signin.errors.required;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = signin.errors.email;
    }

    if (!formData.password) {
      newErrors.password = signin.errors.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate error for emails containing "fail"
    if (formData.email.toLowerCase().includes("fail")) {
      setErrors({ general: signin.errors.invalid });
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    // Redirect after 1 second
    setTimeout(() => {
      router.push(`/${lang}`);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Lien retour accueil */}
          <div className="mb-6">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-brand-blue transition-colors"
            >
              <span className="text-sm font-medium">Retour à l'accueil</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              {signin.success}
            </h2>
            <p className="text-neutral-600">
              {signin.redirecting}
            </p>
            <div className="mt-4 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Lien retour accueil */}
        <div className="mb-6">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-brand-blue transition-colors"
          >
            <span className="text-sm font-medium">Retour à l'accueil</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            {signin.title}
          </h1>
          <p className="text-neutral-600">
            {signin.subtitle}
          </p>
        </div>

        {errors.general && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-red-800">{errors.general}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <FormField
            label={signin.form.email}
            htmlFor="email"
            error={errors.email}
            required
          >
            <Input
              id="email"
              type="email"
              placeholder={signin.placeholders.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={!!errors.email}
              disabled={isSubmitting}
              autoComplete="email"
            />
          </FormField>

          <FormField
            label={signin.form.password}
            htmlFor="password"
            error={errors.password}
            required
          >
            <PasswordField
              id="password"
              placeholder={signin.placeholders.password}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={!!errors.password}
              disabled={isSubmitting}
              autoComplete="current-password"
              showLabel={dict.authPage.signup.showPassword}
              hideLabel={dict.authPage.signup.hidePassword}
            />
          </FormField>

          <div className="flex items-center justify-between">
            <Checkbox
              id="rememberMe"
              label={signin.form.rememberMe}
              checked={formData.rememberMe}
              onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
              disabled={isSubmitting}
            />
            <Link
              href={`/${lang}/connexion/mot-de-passe-oublie`}
              className="text-sm text-brand-blue hover:text-brand-blue-800 font-medium"
            >
              {signin.form.forgotPassword}
            </Link>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? signin.form.submitting : signin.form.submit}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-neutral-600">
          {signin.noAccount}{" "}
          <Link
            href={`/${lang}/inscription`}
            className="text-brand-blue hover:text-brand-blue-800 font-medium"
          >
            {signin.signUpLink}
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
