"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Locale, Dictionary } from "@/types/i18n";
import { AuthLayout } from "./AuthLayout";
import { FormField } from "./FormField";
import { PasswordField } from "./PasswordField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";

interface SignupFormProps {
  lang: Locale;
  dict: Dictionary;
}

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  company: string;
  teamSize: string;
  phone: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  company?: string;
  teamSize?: string;
  consent?: string;
}

export function SignupForm({ lang, dict }: SignupFormProps) {
  const { signup } = dict.authPage;
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    teamSize: "",
    phone: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    // Min 8 chars + at least 1 digit
    return password.length >= 8 && /\d/.test(password);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = signup.errors.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = signup.errors.required;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = signup.errors.email;
    }

    if (!formData.password) {
      newErrors.password = signup.errors.required;
    } else if (!validatePassword(formData.password)) {
      newErrors.password = signup.errors.passwordMin;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = signup.errors.required;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = signup.errors.passwordMatch;
    }

    if (!formData.company.trim()) {
      newErrors.company = signup.errors.required;
    }

    if (!formData.teamSize) {
      newErrors.teamSize = signup.errors.required;
    }

    if (!formData.consent) {
      newErrors.consent = signup.errors.consent;
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
      <AuthLayout
        imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
        imageAlt={signup.imageAlt}
        valueTitle={signup.valueTitle}
        valueSubtitle={signup.valueSubtitle}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            {signup.success}
          </h2>
          <p className="text-neutral-600 mb-6">
            {signup.subtitle}
          </p>
          <Button
            href={`/${lang}/connexion`}
            variant="primary"
            size="lg"
            className="w-full"
          >
            {signup.goToSignin}
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
      imageAlt={signup.imageAlt}
      valueTitle={signup.valueTitle}
      valueSubtitle={signup.valueSubtitle}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            {signup.title}
          </h1>
          <p className="text-neutral-600">
            {signup.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <FormField
            label={signup.form.fullName}
            htmlFor="fullName"
            error={errors.fullName}
            required
          >
            <Input
              id="fullName"
              type="text"
              placeholder={signup.placeholders.fullName}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              error={!!errors.fullName}
              disabled={isSubmitting}
            />
          </FormField>

          <FormField
            label={signup.form.email}
            htmlFor="email"
            error={errors.email}
            required
          >
            <Input
              id="email"
              type="email"
              placeholder={signup.placeholders.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={!!errors.email}
              disabled={isSubmitting}
            />
          </FormField>

          <FormField
            label={signup.form.password}
            htmlFor="password"
            error={errors.password}
            required
          >
            <PasswordField
              id="password"
              placeholder={signup.placeholders.password}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={!!errors.password}
              disabled={isSubmitting}
              showLabel={signup.showPassword}
              hideLabel={signup.hidePassword}
            />
            <p className="text-xs text-neutral-500 mt-1">
              {signup.passwordRules}
            </p>
          </FormField>

          <FormField
            label={signup.form.confirmPassword}
            htmlFor="confirmPassword"
            error={errors.confirmPassword}
            required
          >
            <PasswordField
              id="confirmPassword"
              placeholder={signup.placeholders.confirmPassword}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              error={!!errors.confirmPassword}
              disabled={isSubmitting}
              showLabel={signup.showPassword}
              hideLabel={signup.hidePassword}
            />
          </FormField>

          <FormField
            label={signup.form.company}
            htmlFor="company"
            error={errors.company}
            required
          >
            <Input
              id="company"
              type="text"
              placeholder={signup.placeholders.company}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              error={!!errors.company}
              disabled={isSubmitting}
            />
          </FormField>

          <FormField
            label={signup.form.teamSize}
            htmlFor="teamSize"
            error={errors.teamSize}
            required
          >
            <Select
              id="teamSize"
              placeholder={signup.placeholders.teamSize}
              options={signup.teamSizes}
              value={formData.teamSize}
              onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
              error={!!errors.teamSize}
              disabled={isSubmitting}
            />
          </FormField>

          <FormField
            label={signup.form.phone}
            htmlFor="phone"
          >
            <Input
              id="phone"
              type="tel"
              placeholder={signup.placeholders.phone}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isSubmitting}
            />
          </FormField>

          <div className="space-y-1.5">
            <Checkbox
              id="consent"
              label={signup.form.consent}
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              error={!!errors.consent}
              disabled={isSubmitting}
            />
            {errors.consent && (
              <p className="text-sm text-red-600 flex items-center gap-1 ml-8" role="alert">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.consent}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? signup.form.submitting : signup.form.submit}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-neutral-600">
          {signup.alreadyHaveAccount}{" "}
          <Link
            href={`/${lang}/connexion`}
            className="text-brand-blue hover:text-brand-blue-800 font-medium"
          >
            {signup.signInLink}
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
