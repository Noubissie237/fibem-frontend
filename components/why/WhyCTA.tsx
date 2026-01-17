import { Dictionary, Locale } from "@/types/i18n";
import { Button } from "@/components/ui/Button";

interface WhyCTAProps {
  dict: Dictionary;
  lang: Locale;
}

export function WhyCTA({ dict, lang }: WhyCTAProps) {
  const { cta } = dict.whyPage;

  return (
    <section className="bg-gradient-to-br from-brand-blue to-brand-blue-800 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{cta.title}</h2>
        <p className="text-lg text-white/80 mb-10">{cta.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={`/${lang}/inscription`} size="lg" className="bg-white text-brand-blue hover:bg-neutral-100">
            {cta.primary}
          </Button>
          <Button href={`/${lang}/contact`} size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            {cta.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}