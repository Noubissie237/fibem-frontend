import Image from "next/image";
import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

interface WhyProblemProps {
  dict: Dictionary;
}

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function WhyProblem({ dict }: WhyProblemProps) {
  const { problem } = dict.whyPage;

  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            {problem.title}
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            {problem.subtitle}
          </p>

          <ul className="space-y-4">
            {problem.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <IconX className="w-4 h-4" />
                </div>
                <span className="text-neutral-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
              alt="Business challenges"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>

          {/* Stats overlay */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md">
            <Card className="bg-white/95 backdrop-blur shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                {problem.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-brand-blue">{stat.value}</div>
                    <div className="text-xs text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}