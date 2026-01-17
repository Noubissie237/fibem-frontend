import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface SolutionsChooseProps {
  dict: Dictionary;
  lang: Locale;
}

function IconChat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

export function SolutionsChoose({ dict, lang }: SolutionsChooseProps) {
  const { choose } = dict.solutionsPage;

  return (
    <Section background="gray" id="choose">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            {choose.title}
          </h2>
          <p className="text-lg text-neutral-600">
            {choose.subtitle}
          </p>
        </div>

        <Card className="bg-gradient-to-br from-brand-blue-50 to-white border-brand-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-6 p-2">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue-100 text-brand-blue flex items-center justify-center shrink-0">
              <IconChat className="w-8 h-8" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-neutral-900 mb-1">
                {choose.expert.title}
              </h3>
              <p className="text-neutral-600">
                {choose.expert.description}
              </p>
            </div>
            <Button href={`/${lang}/contact`} size="lg">
              {choose.cta}
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}