import Image from "next/image";
import { Dictionary, Locale } from "@/types/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface FeaturesHeroProps {
  dict: Dictionary;
  lang: Locale;
}

export function FeaturesHero({ dict, lang }: FeaturesHeroProps) {
  const { hero } = dict.featuresPage;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-950 via-brand-blue-900 to-brand-blue-800 py-16 lg:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950/90 via-brand-blue-900/80 to-brand-blue-800/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                href={`/${lang}/inscription`}
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

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Professional team using Téléphonie-IA"
                width={600}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">50+</p>
                <p className="text-sm text-neutral-500">
                  {lang === "fr" ? "Fonctionnalités" : "Features"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}