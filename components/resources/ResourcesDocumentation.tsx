import Link from "next/link";
import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { IconArrowRight } from "@/components/icons/Icons";

interface ResourcesDocumentationProps {
  dict: Dictionary;
  lang: Locale;
}

const docLinks = ["/ressources/guides", "/ressources/api", "/ressources/changelog"];
const trustLinks = ["/ressources/rgpd", "/ressources/statut", "/ressources/centre-aide"];
const resourceLinks = ["/ressources/etudes-de-cas", "/ressources/blog"];

export function ResourcesDocumentation({ dict, lang }: ResourcesDocumentationProps) {
  const { documentation } = dict.resourcesPage;

  return (
    <Section background="white">
      <h2 className="text-3xl font-bold text-neutral-900 mb-10 text-center">{documentation.title}</h2>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Docs Column */}
        <div className="bg-neutral-50 rounded-xl p-6">
          <h3 className="font-semibold text-neutral-900 mb-4">{documentation.columns.docs.title}</h3>
          <ul className="space-y-4">
            {documentation.columns.docs.items.map((item, i) => (
              <li key={i}>
                <Link href={`/${lang}${docLinks[i]}`} className="group block">
                  <span className="font-medium text-neutral-900 group-hover:text-brand-blue transition-colors">{item.label}</span>
                  <p className="text-sm text-neutral-500">{item.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Trust Column */}
        <div className="bg-neutral-50 rounded-xl p-6">
          <h3 className="font-semibold text-neutral-900 mb-4">{documentation.columns.trust.title}</h3>
          <ul className="space-y-4">
            {documentation.columns.trust.items.map((item, i) => (
              <li key={i}>
                <Link href={`/${lang}${trustLinks[i]}`} className="group block">
                  <span className="font-medium text-neutral-900 group-hover:text-brand-blue transition-colors">{item.label}</span>
                  <p className="text-sm text-neutral-500">{item.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Column */}
        <div className="bg-neutral-50 rounded-xl p-6">
          <h3 className="font-semibold text-neutral-900 mb-4">{documentation.columns.resources.title}</h3>
          <ul className="space-y-4">
            {documentation.columns.resources.items.map((item, i) => (
              <li key={i}>
                <Link href={`/${lang}${resourceLinks[i]}`} className="group block">
                  <span className="font-medium text-neutral-900 group-hover:text-brand-blue transition-colors">{item.label}</span>
                  <p className="text-sm text-neutral-500">{item.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Callout */}
        <Card className="bg-gradient-to-br from-brand-blue to-brand-blue-700 text-white" padding="lg">
          <h3 className="font-semibold mb-2">{documentation.callout.title}</h3>
          <p className="text-sm text-white/80 mb-4">{documentation.callout.description}</p>
          <Link
            href={`/${lang}/ressources/videos`}
            className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-white/80"
          >
            {documentation.callout.cta}
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </Card>
      </div>
    </Section>
  );
}