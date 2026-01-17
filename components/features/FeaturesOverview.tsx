import Image from "next/image";
import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";

interface FeaturesOverviewProps {
  dict: Dictionary;
}

export function FeaturesOverview({ dict }: FeaturesOverviewProps) {
  const { overview } = dict.featuresPage;

  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            {overview.title}
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {overview.description}
          </p>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
              alt="Unified communications platform"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
          {/* Decorative gradient */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-brand-blue-100 to-brand-blue-50 rounded-2xl" />
        </div>
      </div>
    </Section>
  );
}