"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Locale, Dictionary } from "@/types/i18n";
import { FormField } from "./FormField";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface ForgotPasswordFormProps {
  lang: Locale;
  dict: Dictionary;
}

interface FormData {
  email: string;
}

interface FormErrors {
  email?: string;
}

export function ForgotPasswordForm({ lang, dict }: ForgotPasswordFormProps) {
  const { forgotPassword } = dict.authPage;
  
  const [formData, setFormData] = useState<FormData>({
    email: "",
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
      newErrors.email = forgotPassword.errors.required;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = forgotPassword.errors.email;
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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              {forgotPassword.success}
            </h2>
            <p className="text-neutral-600 mb-6 text-sm">
              {forgotPassword.success}
            </p>
            <Button
              href={`/${lang}/connexion`}
              variant="primary"
              size="lg"
              className="w-full"
            >
              {forgotPassword.backToSignin}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <Link
              href={`/${lang}/connexion`}
              className="inline-flex items-center text-sm text-neutral-600 hover:text-neutral-900 mb-6"
            >
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {forgotPassword.backToSignin}
            </Link>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
              {forgotPassword.title}
            </h1>
            <p className="text-neutral-600">
              {forgotPassword.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <FormField
              label={forgotPassword.form.email}
              htmlFor="email"
              error={errors.email}
              required
            >
              <Input
                id="email"
                type="email"
                placeholder={forgotPassword.placeholders.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={!!errors.email}
                disabled={isSubmitting}
                autoComplete="email"
              />
            </FormField>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? forgotPassword.form.submitting : forgotPassword.form.submit}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
