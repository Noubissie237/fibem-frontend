import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import {
  IconPhone,
  IconPhoneArrow,
  IconUsers,
  IconMessage,
  IconMicrophone,
  IconDocument,
  IconSparkles,
  IconChartBar,
  IconShield,
  IconGlobe,
} from "@/components/icons/Icons";

interface FeaturesGridProps {
  dict: Dictionary;
}

// Icône générique pour la recherche
function IconSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}

// Icône pour les devices
function IconDevices(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
    </svg>
  );
}

const gridIcons = [
  <IconGlobe key="globe" className="w-6 h-6" />,
  <IconPhoneArrow key="route" className="w-6 h-6" />,
  <IconUsers key="users" className="w-6 h-6" />,
  <IconMessage key="sms" className="w-6 h-6" />,
  <IconMicrophone key="record" className="w-6 h-6" />,
  <IconSearch key="search" className="w-6 h-6" />,
  <IconSparkles key="ai" className="w-6 h-6" />,
  <IconDocument key="summary" className="w-6 h-6" />,
  <IconChartBar key="dashboard" className="w-6 h-6" />,
  <IconDocument key="export" className="w-6 h-6" />,
  <IconShield key="roles" className="w-6 h-6" />,
  <IconDevices key="devices" className="w-6 h-6" />,
];

export function FeaturesGrid({ dict }: FeaturesGridProps) {
  const { grid } = dict.featuresPage;

  return (
    <Section background="white" id="features-grid">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {grid.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {grid.subtitle}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {grid.items.map((item, index) => (
          <Card key={index} hover padding="md">
            <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue flex items-center justify-center mb-4">
              {gridIcons[index]}
            </div>
            <CardTitle className="text-base mb-2">{item.title}</CardTitle>
            <CardDescription className="text-sm">
              {item.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}