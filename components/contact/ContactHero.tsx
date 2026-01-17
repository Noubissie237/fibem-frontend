import Image from "next/image";
import { Dictionary, Locale } from "@/types/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface ContactHeroProps {
  dict: Dictionary;
  lang: Locale;
}

export function ContactHero({ dict, lang }: ContactHeroProps) {
  const { hero } = dict.contactPage;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-950 via-brand-blue-900 to-brand-blue-800 py-16 lg:py-20">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950/90 to-brand-blue-800/80" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
            {hero.subtitle}
          </p>
          <Button
            href={`/${lang}/tarifs`}
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