import Image from "next/image";
import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";

interface PricingBillingProps {
  dict: Dictionary;
}

// Icônes pour la facturation
function IconCalendar(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>
  );
}

function IconReceipt(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );
}

function IconDocument(props: React.SVGProps<SVGSVGElement>) {
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
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}

function IconArrowsUpDown(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
      />
    </svg>
  );
}

const billingIcons = [
  <IconCalendar key="calendar" className="w-6 h-6" />,
  <IconReceipt key="receipt" className="w-6 h-6" />,
  <IconDocument key="document" className="w-6 h-6" />,
  <IconArrowsUpDown key="arrows" className="w-6 h-6" />,
];

const billingColors = [
  "bg-brand-blue-100 text-brand-blue",
  "bg-emerald-100 text-emerald-600",
  "bg-purple-100 text-purple-600",
  "bg-amber-100 text-amber-600",
];

export function PricingBilling({ dict }: PricingBillingProps) {
  const { billing } = dict.pricingPage;

  return (
    <Section background="white" id="billing">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            {billing.title}
          </h2>
          <p className="text-lg text-neutral-600 mb-8">{billing.subtitle}</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {billing.items.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className={`w-12 h-12 rounded-xl ${billingColors[index]} flex items-center justify-center shrink-0`}
                >
                  {billingIcons[index]}
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
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
              alt="Billing and invoicing"
              width={600}
              height={450}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-900/10 to-transparent" />
          </div>
          {/* Decorative gradient */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-brand-blue-100 to-brand-blue-50 rounded-2xl" />
        </div>
      </div>
    </Section>
  );
}