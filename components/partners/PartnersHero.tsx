import Image from "next/image";
import { Dictionary, Locale } from "@/types/i18n";
import { Button } from "@/components/ui/Button";

interface PartnersHeroProps {
  dict: Dictionary;
  lang: Locale;
}

export function PartnersHero({ dict, lang }: PartnersHeroProps) {
  const { hero } = dict.partnersPage;

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80"
          alt="Partnership"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/85 to-brand-blue/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {hero.title}
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="#devenir-partenaire"
              variant="primary"
              size="lg"
              className="bg-white text-brand-blue hover:bg-neutral-50"
            >
              {hero.ctaPrimary}
            </Button>
            <Button
              href={`/${lang}/contact`}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent z-10" />
    </section>
  );
}
