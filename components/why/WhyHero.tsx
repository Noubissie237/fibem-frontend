import Image from "next/image";
import { Dictionary, Locale } from "@/types/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface WhyHeroProps {
  dict: Dictionary;
  lang: Locale;
}

export function WhyHero({ dict, lang }: WhyHeroProps) {
  const { hero } = dict.whyPage;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-950 via-brand-blue-900 to-brand-blue-800 py-16 lg:py-24">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950/90 via-brand-blue-900/80 to-brand-blue-800/70" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={`/${lang}/contact`}
              size="lg"
              className="bg-white text-brand-blue hover:bg-neutral-100"
            >
              {hero.ctaPrimary}
            </Button>
            <Button
              href={`/${lang}/tarifs`}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}