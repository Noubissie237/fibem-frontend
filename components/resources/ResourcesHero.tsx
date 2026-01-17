import Image from "next/image";
import { Dictionary, Locale } from "@/types/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface ResourcesHeroProps {
  dict: Dictionary;
  lang: Locale;
}

export function ResourcesHero({ dict, lang }: ResourcesHeroProps) {
  const { hero } = dict.resourcesPage;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-950 via-brand-blue-900 to-brand-blue-800 py-16 lg:py-24">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950/90 to-brand-blue-800/70" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={`/${lang}/ressources/centre-aide`}
              size="lg"
              className="bg-white text-brand-blue hover:bg-neutral-100"
            >
              {hero.ctaPrimary}
            </Button>
            <Button
              href={`/${lang}/contact`}
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