import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  IconDocument,
  IconShield,
  IconQuestionMark,
  IconCheckCircle,
} from "@/components/icons/Icons";
import Link from "next/link";

interface ResourcesSectionProps {
  dict: Dictionary;
  lang: Locale;
}

const icons = [
  <IconDocument key="doc" className="w-6 h-6" />,
  <IconShield key="shield" className="w-6 h-6" />,
  <IconQuestionMark key="question" className="w-6 h-6" />,
];

const colors = [
  "bg-brand-blue-100 text-brand-blue",
  "bg-emerald-100 text-emerald-600",
  "bg-purple-100 text-purple-600",
];

export function ResourcesSection({ dict, lang }: ResourcesSectionProps) {
  const { resources } = dict;

  return (
    <Section background="white" id="resources">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {resources.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {resources.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {resources.items.map((item, index) => (
          <Card key={index} hover className="group">
            <div
              className={`w-12 h-12 rounded-xl ${colors[index]} flex items-center justify-center mb-4`}
            >
              {icons[index]}
            </div>
            <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
            <CardDescription className="mb-4">{item.description}</CardDescription>
            <Link
              href={`/${lang}/ressources`}
              className="text-sm font-medium text-brand-blue hover:text-brand-blue-700 transition-colors"
            >
              {item.cta} →
            </Link>
          </Card>
        ))}
      </div>

      {/* Status Banner */}
      <div className="bg-neutral-50 rounded-xl border border-neutral-100 p-4 flex items-center justify-center gap-3">
        <IconCheckCircle className="w-5 h-5 text-emerald-500" />
        <span className="text-sm text-neutral-600">
          {resources.status}:{" "}
          <Badge variant="green">{resources.statusOperational}</Badge>
        </span>
      </div>
    </Section>
  );
}