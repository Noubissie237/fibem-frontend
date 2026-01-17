"use client";

import { useState } from "react";
import { Dictionary } from "@/types/i18n";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";
import { Toast } from "@/components/ui/Toast";

interface ContactFormProps {
  dict: Dictionary;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  subject: string;
  phone: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  teamSize?: string;
  subject?: string;
  message?: string;
  consent?: string;
}

export function ContactForm({ dict }: ContactFormProps) {
  const { form } = dict.contactPage;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    subject: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = form.errors.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = form.errors.required;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = form.errors.email;
    }

    if (!formData.company.trim()) {
      newErrors.company = form.errors.required;
    }

    if (!formData.teamSize) {
      newErrors.teamSize = form.errors.required;
    }

    if (!formData.subject) {
      newErrors.subject = form.errors.required;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowToast(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      teamSize: "",
      subject: "",
      phone: "",
      message: "",
      consent: false,
    });
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <Card padding="lg" className="shadow-soft">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">{form.title}</h2>
        <p className="text-neutral-600 mb-6">{form.subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <FormField
              label={form.fields.name}
              htmlFor="name"
              error={errors.name}
              required
            >
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={form.placeholders.name}
                error={!!errors.name}
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
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={form.placeholders.email}
                error={!!errors.email}
                disabled={isSubmitting}
              />
            </FormField>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <FormField
              label={form.fields.company}
              htmlFor="company"
              error={errors.company}
              required
            >
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={form.placeholders.company}
                error={!!errors.company}
                disabled={isSubmitting}
              />
            </FormField>

            <FormField
              label={form.fields.teamSize}
              htmlFor="teamSize"
              error={errors.teamSize}
              required
            >
              <Select
                id="teamSize"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                placeholder={form.placeholders.teamSize}
                options={form.teamSizes}
                error={!!errors.teamSize}
                disabled={isSubmitting}
              />
            </FormField>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <FormField
              label={form.fields.subject}
              htmlFor="subject"
              error={errors.subject}
              required
            >
              <Select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={form.placeholders.subject}
                options={form.subjects}
                error={!!errors.subject}
                disabled={isSubmitting}
              />
            </FormField>

            <FormField
              label={form.fields.phone}
              htmlFor="phone"
              optional
              optionalLabel={form.optional}
            >
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder={form.placeholders.phone}
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
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={form.placeholders.message}
              rows={4}
              error={!!errors.message}
              disabled={isSubmitting}
            />
          </FormField>

          <div className="space-y-1.5">
            <Checkbox
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              label={form.fields.consent}
              error={!!errors.consent}
              disabled={isSubmitting}
            />
            {errors.consent && (
              <p className="text-sm text-red-600 ml-8" role="alert">
                {errors.consent}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? form.submitting : form.submit}
          </Button>
        </form>
      </Card>

      {showToast && (
        <Toast
          message={form.success}
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}