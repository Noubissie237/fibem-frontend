import Image from "next/image";
import { Dictionary, Locale } from "@/types/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface PricingHeroProps {
  dict: Dictionary;
  lang: Locale;
}

export function PricingHero({ dict, lang }: PricingHeroProps) {
  const { hero } = dict.pricingPage;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 lg:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://www.proxi-totalenergies.fr/media/contributions/pages/T2U/gaz-elec/tarif-reglemente-electricite.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/80 to-neutral-900/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
            {hero.subtitle}
          </p>
          <Button
            href={`/${lang}/contact`}
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10"
          >
            {hero.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}