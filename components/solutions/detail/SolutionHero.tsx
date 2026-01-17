import Image from "next/image";
import Link from "next/link";
import { Dictionary, Locale } from "@/types/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Solution, SolutionContent } from "@/lib/solutions";

interface SolutionHeroProps {
  solution: Solution;
  content: SolutionContent;
  dict: Dictionary;
  lang: Locale;
}

export function SolutionHero({ solution, content, dict, lang }: SolutionHeroProps) {
  const { solutionPage, breadcrumb } = dict.solutionsPage;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={solution.heroImage}
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/80 to-neutral-900/70" />
      </div>

      <Container className="relative">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href={`/${lang}/solutions`}
                className="text-white/60 hover:text-white transition-colors"
              >
                {breadcrumb.solutions}
              </Link>
            </li>
            <li className="text-white/40">/</li>
            <li className="text-white font-medium">{content.title}</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
            {content.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </Container>
    </section>
  );
}