import Link from "next/link";
import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { IconArrowRight } from "@/components/icons/Icons";

interface ResourcesGetStartedProps {
  dict: Dictionary;
  lang: Locale;
}

function IconSparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  );
}

function IconCurrency(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconLightBulb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

const icons = [
  <IconSparkles key="sparkles" className="w-6 h-6" />,
  <IconCurrency key="currency" className="w-6 h-6" />,
  <IconLightBulb key="lightbulb" className="w-6 h-6" />,
];

const links = ["/fonctionnalites", "/tarifs", "/solutions"];
const colors = ["bg-brand-blue-100 text-brand-blue", "bg-emerald-100 text-emerald-600", "bg-purple-100 text-purple-600"];

export function ResourcesGetStarted({ dict, lang }: ResourcesGetStartedProps) {
  const { getStarted } = dict.resourcesPage;

  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">{getStarted.title}</h2>
        <p className="text-lg text-neutral-600">{getStarted.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {getStarted.items.map((item, index) => (
          <Card key={index} hover padding="lg">
            <div className={`w-12 h-12 rounded-xl ${colors[index]} flex items-center justify-center mb-4`}>
              {icons[index]}
            </div>
            <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
            <CardDescription className="mb-4">{item.description}</CardDescription>
            <Link
              href={`/${lang}${links[index]}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-brand-blue-700"
            >
              {item.cta}
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}