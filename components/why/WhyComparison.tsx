import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { IconCheck } from "@/components/icons/Icons";

interface WhyComparisonProps {
  dict: Dictionary;
}

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function WhyComparison({ dict }: WhyComparisonProps) {
  const { comparison } = dict.whyPage;

  return (
    <Section background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {comparison.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {comparison.subtitle}
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-hidden rounded-xl border border-neutral-200">
        <table className="w-full">
          <thead>
            <tr className="bg-neutral-50">
              <th className="py-4 px-6 text-left text-sm font-medium text-neutral-500 w-1/3">
                &nbsp;
              </th>
              <th className="py-4 px-6 text-center text-sm font-medium text-neutral-500 w-1/3">
                {comparison.traditional}
              </th>
              <th className="py-4 px-6 text-center text-sm font-medium text-white bg-brand-blue w-1/3">
                {comparison.modern}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.items.map((item, index) => (
              <tr key={index} className="border-t border-neutral-200">
                <td className="py-4 px-6 font-medium text-neutral-900">
                  {item.aspect}
                </td>
                <td className="py-4 px-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <IconX className="w-5 h-5 text-red-400 shrink-0" />
                    <span className="text-sm text-neutral-600">{item.traditional}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center bg-brand-blue-50/50">
                  <div className="flex items-center justify-center gap-2">
                    <IconCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm text-neutral-900 font-medium">{item.modern}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-6">
        {comparison.items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-50 px-4 py-3 font-medium text-neutral-900">
              {item.aspect}
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-start gap-3">
                <IconX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-neutral-500 mb-1">{comparison.traditional}</p>
                  <p className="text-sm text-neutral-600">{item.traditional}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-brand-blue-50 -mx-4 -mb-4 p-4">
                <IconCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-brand-blue mb-1">{comparison.modern}</p>
                  <p className="text-sm text-neutral-900 font-medium">{item.modern}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}