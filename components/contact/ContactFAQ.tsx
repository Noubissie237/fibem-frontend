"use client";

import { useState } from "react";
import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { IconChevronDown } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

interface ContactFAQProps {
  dict: Dictionary;
}

export function ContactFAQ({ dict }: ContactFAQProps) {
  const { faq } = dict.contactPage;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section background="white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            {faq.title}
          </h2>
          <p className="text-lg text-neutral-600">{faq.subtitle}</p>
        </div>

        <div className="space-y-3">
          {faq.items.map((item, index) => (
            <Card key={index} padding="none" className="overflow-hidden">
              <button
                type="button"
                className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-inset"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-neutral-900">{item.question}</span>
                <IconChevronDown
                  className={cn(
                    "w-5 h-5 text-neutral-500 transition-transform duration-200 shrink-0 ml-4",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-4 text-neutral-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}