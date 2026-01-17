import Image from "next/image";
import Link from "next/link";
import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { IconArrowRight } from "@/components/icons/Icons";

interface FeaturesTeamsProps {
  dict: Dictionary;
  lang: Locale;
}

const teamImages = [
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
];

const teamColors = [
  "from-brand-blue-500 to-brand-blue-600",
  "from-emerald-500 to-emerald-600",
  "from-purple-500 to-purple-600",
];

export function FeaturesTeams({ dict, lang }: FeaturesTeamsProps) {
  const { teams } = dict.featuresPage;

  return (
    <Section background="gray" id="teams">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {teams.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {teams.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {teams.items.map((team, index) => (
          <Card key={index} padding="sm" className="overflow-hidden group">
            {/* Image */}
            <div className="relative h-48 -mx-4 -mt-4 mb-6 overflow-hidden">
              <Image
                src={teamImages[index]}
                alt={team.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${teamColors[index]} opacity-60`}
              />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">{team.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="px-2">
              <CardDescription className="mb-4">
                {team.description}
              </CardDescription>
              <Link
                href={`/${lang}/solutions`}
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-brand-blue-700 transition-colors"
              >
                {team.cta}
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}