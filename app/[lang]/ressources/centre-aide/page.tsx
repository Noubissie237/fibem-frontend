"use client";

import { use, useState } from "react";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { faqItems, getFaqContent } from "@/lib/resources";
import { IconChevronDown } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function HelpCenterPage({ params }: PageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const { lang: langParam } = use(params);
  if (!isValidLocale(langParam)) return null;
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const { helpCenter } = dict.resourcesPage;

  const filteredFaq = faqItems.filter((item) => {
    const content = getFaqContent(item.id, lang);
    if (!content) return false;
    return content.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
           content.answer.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <PageHero
        title={helpCenter.title}
        subtitle={helpCenter.subtitle}
        image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80"
        breadcrumbs={[
          { label: dict.nav.resources, href: `/${lang}/ressources` },
          { label: helpCenter.title },
        ]}
        size="sm"
      />

      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder={helpCenter.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
            />
          </div>

          {/* FAQ */}
          <h2 className="font-bold text-neutral-900 text-xl mb-6">{helpCenter.popularQuestions}</h2>
          <div className="space-y-3">
            {filteredFaq.map((item, index) => {
              const content = getFaqContent(item.id, lang);
              if (!content) return null;

              return (
                <Card key={item.id} padding="none" className="overflow-hidden">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full px-6 py-4 text-left"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-medium text-neutral-900">{content.question}</span>
                    <IconChevronDown
                      className={cn(
                        "w-5 h-5 text-neutral-500 transition-transform",
                        openIndex === index && "rotate-180"
                      )}
                    />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}>
                    <div className="px-6 pb-4 text-neutral-600">{content.answer}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}