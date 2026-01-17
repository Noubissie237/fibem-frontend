"use client";

import { useState, FormEvent } from "react";
import { Dictionary } from "@/types/i18n";
import { FormField } from "@/components/auth/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";

interface PartnerFormProps {
  dict: Dictionary;
}

interface FormData {
  fullName: string;
  email: string;
  company: string;
  partnerType: string;
  country: string;
  city: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  partnerType?: string;
  country?: string;
  city?: string;
  message?: string;
  consent?: string;
}

export function PartnerForm({ dict }: PartnerFormProps) {
  const { form } = dict.partnersPage;
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    partnerType: "",
    country: "",
    city: "",
    message: "",
    consent: false,
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = form.errors.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = form.errors.required;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = form.errors.email;
    }

    if (!formData.company.trim()) {
      newErrors.company = form.errors.required;
    }

    if (!formData.partnerType) {
      newErrors.partnerType = form.errors.required;
    }

    if (!formData.country.trim()) {
      newErrors.country = form.errors.required;
    }

    if (!formData.city.trim()) {
      newErrors.city = form.errors.required;
    }

    if (!formData.message.trim()) {
      newErrors.message = form.errors.required;
    }

    if (!formData.consent) {
      newErrors.consent = form.errors.consent;
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

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        company: "",
        partnerType: "",
        country: "",
        city: "",
        message: "",
        consent: false,
      });
      setIsSuccess(false);
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
          {form.success}
        </h3>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 mb-2">
          {form.title}
        </h2>
        <p className="text-neutral-600">
          {form.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label={form.fields.fullName}
            htmlFor="fullName"
            error={errors.fullName}
            required
          >
            <Input
              id="fullName"
              type="text"
              placeholder={form.placeholders.fullName}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              error={!!errors.fullName}
              disabled={isSubmitting}
            />
          </FormField>

          <FormField
            label={form.fields.email}
            htmlFor="email"
            error={errors.email}
            required
          >
            <Input
              id="email"
              type="email"
              placeholder={form.placeholders.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={!!errors.email}
              disabled={isSubmitting}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label={form.fields.company}
            htmlFor="company"
            error={errors.company}
            required
          >
            <Input
              id="company"
              type="text"
              placeholder={form.placeholders.company}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              error={!!errors.company}
              disabled={isSubmitting}
            />
          </FormField>

          <FormField
            label={form.fields.partnerType}
            htmlFor="partnerType"
            error={errors.partnerType}
            required
          >
            <Select
              id="partnerType"
              placeholder={form.placeholders.partnerType}
              options={form.partnerTypes}
              value={formData.partnerType}
              onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
              error={!!errors.partnerType}
              disabled={isSubmitting}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label={form.fields.country}
            htmlFor="country"
            error={errors.country}
            required
          >
            <Input
              id="country"
              type="text"
              placeholder={form.placeholders.country}
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              error={!!errors.country}
              disabled={isSubmitting}
            />
          </FormField>

          <FormField
            label={form.fields.city}
            htmlFor="city"
            error={errors.city}
            required
          >
            <Input
              id="city"
              type="text"
              placeholder={form.placeholders.city}
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              error={!!errors.city}
              disabled={isSubmitting}
            />
          </FormField>
        </div>

        <FormField
          label={form.fields.message}
          htmlFor="message"
          error={errors.message}
          required
        >
          <textarea
            id="message"
            rows={5}
            placeholder={form.placeholders.message}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            disabled={isSubmitting}
            className={`w-full px-4 py-2.5 rounded-lg border bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors duration-200 resize-none ${
              errors.message
                ? "border-red-300 focus:ring-red-500"
                : "border-neutral-300 hover:border-neutral-400"
            } ${isSubmitting && "opacity-50 cursor-not-allowed bg-neutral-50"}`}
          />
        </FormField>

        <div className="space-y-1.5">
          <Checkbox
            id="consent"
            label={form.fields.consent}
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
          {isSubmitting ? form.submitting : form.submit}
        </Button>
      </form>
    </div>
  );
}
