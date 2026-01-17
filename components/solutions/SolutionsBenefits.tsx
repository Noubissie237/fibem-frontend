import Image from "next/image";
import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";

interface SolutionsBenefitsProps {
  dict: Dictionary;
}

function IconSignal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  );
}

function IconChartPie(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>
  );
}

function IconSparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

const benefitIcons = [
  <IconSignal key="signal" className="w-6 h-6" />,
  <IconChartPie key="chart" className="w-6 h-6" />,
  <IconSparkles key="sparkles" className="w-6 h-6" />,
];

const benefitColors = [
  "bg-brand-blue-100 text-brand-blue",
  "bg-emerald-100 text-emerald-600",
  "bg-purple-100 text-purple-600",
];

export function SolutionsBenefits({ dict }: SolutionsBenefitsProps) {
  const { benefits } = dict.solutionsPage;

  return (
    <Section background="white" id="benefits">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            {benefits.title}
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            {benefits.subtitle}
          </p>

          <div className="space-y-6">
            {benefits.items.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className={`w-12 h-12 rounded-xl ${benefitColors[index]} flex items-center justify-center shrink-0`}
                >
                  {benefitIcons[index]}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Team collaboration"
              width={600}
              height={450}
              className="object-cover"
            />
          </div>
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-brand-blue-100 to-brand-blue-50 rounded-2xl" />
        </div>
      </div>
    </Section>
  );
}