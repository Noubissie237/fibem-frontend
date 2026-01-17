import Image from "next/image";
import Link from "next/link";
import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { solutions, getSolutionContent } from "@/lib/solutions";
import { IconArrowRight } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

interface SolutionsGridProps {
  dict: Dictionary;
  lang: Locale;
}

const colorStyles: Record<string, string> = {
  blue: "bg-brand-blue-100 text-brand-blue group-hover:bg-brand-blue group-hover:text-white",
  emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
  purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-500 group-hover:text-white",
  amber: "bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
  rose: "bg-rose-100 text-rose-600 group-hover:bg-rose-500 group-hover:text-white",
  cyan: "bg-cyan-100 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white",
};

export function SolutionsGrid({ dict, lang }: SolutionsGridProps) {
  const { grid } = dict.solutionsPage;

  return (
    <Section background="gray" id="solutions-grid">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {grid.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {grid.subtitle}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution) => {
          const content = getSolutionContent(solution.slug, lang);
          if (!content) return null;

          return (
            <Link
              key={solution.slug}
              href={`/${lang}/solutions/${solution.slug}`}
              className="group"
            >
              <Card hover padding="none" className="overflow-hidden h-full">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={content.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span
                      className={cn(
                        "inline-block px-3 py-1 rounded-full text-xs font-medium transition-colors",
                        colorStyles[solution.color]
                      )}
                    >
                      {content.benefit}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    {content.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue">
                    {lang === "fr" ? "Découvrir" : "Learn more"}
                    <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}