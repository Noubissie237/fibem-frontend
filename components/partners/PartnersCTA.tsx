import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface PartnersCTAProps {
  dict: Dictionary;
  lang: Locale;
}

export function PartnersCTA({ dict, lang }: PartnersCTAProps) {
  const { cta } = dict.partnersPage;

  return (
    <Section background="white">
      <div className="bg-gradient-to-br from-brand-blue to-brand-blue-800 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={`/${lang}/contact`}
              variant="primary"
              size="lg"
              className="bg-white text-brand-blue hover:bg-neutral-50"
            >
              {cta.primary}
            </Button>
            <Button
              href={`/${lang}/tarifs`}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              {cta.secondary}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
