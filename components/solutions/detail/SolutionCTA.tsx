import Link from "next/link";
import { Dictionary, Locale } from "@/types/i18n";
import { Button } from "@/components/ui/Button";
import { SolutionContent } from "@/lib/solutions";

interface SolutionCTAProps {
  content: SolutionContent;
  dict: Dictionary;
  lang: Locale;
}

export function SolutionCTA({ content, dict, lang }: SolutionCTAProps) {
  const { solutionPage } = dict.solutionsPage;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue to-brand-blue-800 py-16 lg:py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          {content.cta.title}
        </h2>
        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          {content.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            href={`/${lang}/inscription`}
            size="lg"
            className="bg-white text-brand-blue hover:bg-neutral-100"
          >
            {solutionPage.ctaPrimary}
          </Button>
          <Button
            href={`/${lang}/contact`}
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            {solutionPage.ctaSecondary}
          </Button>
        </div>
        <Link
          href={`/${lang}/solutions`}
          className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm"
        >
          {solutionPage.backToSolutions}
        </Link>
      </div>
    </section>
  );
}