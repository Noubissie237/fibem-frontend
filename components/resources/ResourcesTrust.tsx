import Image from "next/image";
import { Dictionary } from "@/types/i18n";
import { Section } from "@/components/ui/Section";

interface ResourcesTrustProps {
  dict: Dictionary;
}

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconServer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function IconChat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

const icons = [
  <IconShield key="shield" className="w-6 h-6" />,
  <IconServer key="server" className="w-6 h-6" />,
  <IconChat key="chat" className="w-6 h-6" />,
];

const colors = [
  "bg-emerald-100 text-emerald-600",
  "bg-brand-blue-100 text-brand-blue",
  "bg-purple-100 text-purple-600",
];

export function ResourcesTrust({ dict }: ResourcesTrustProps) {
  const { trust } = dict.resourcesPage;

  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{trust.title}</h2>
          <p className="text-lg text-neutral-600 mb-8">{trust.subtitle}</p>

          <div className="space-y-6">
            {trust.items.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl ${colors[index]} flex items-center justify-center shrink-0`}>
                  {icons[index]}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
              alt="Security and trust"
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