import Image from "next/image";
import { Dictionary } from "@/types/i18n";
import { Card } from "@/components/ui/Card";
import { IconCheck } from "@/components/icons/Icons";

interface ContactInfoProps {
  dict: Dictionary;
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function IconClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconMapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function IconTwitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export function ContactInfo({ dict }: ContactInfoProps) {
  const { info, whyContact } = dict.contactPage;

  return (
    <div className="space-y-6">
      {/* Contact Info Card */}
      <Card padding="lg">
        <h3 className="text-lg font-bold text-neutral-900 mb-6">{info.title}</h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-blue-100 text-brand-blue flex items-center justify-center shrink-0">
              <IconMail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Email</p>
              <p className="font-medium text-neutral-900">{info.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <IconClock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">{info.hours}</p>
              <p className="font-medium text-neutral-900">{info.hoursValue}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <IconMapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">{info.location}</p>
              <p className="font-medium text-neutral-900">{info.locationValue}</p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="mt-6 pt-6 border-t border-neutral-100">
          <p className="text-sm text-neutral-500 mb-3">{info.social}</p>
          <div className="flex gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <IconTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Card>

      {/* Why Contact */}
      <Card padding="lg" className="bg-brand-blue-50 border-brand-blue-100">
        <h3 className="text-lg font-bold text-neutral-900 mb-4">{whyContact.title}</h3>
        <ul className="space-y-3">
          {whyContact.items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <IconCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <span className="text-sm text-neutral-700">{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Image */}
      <div className="relative rounded-xl overflow-hidden h-48">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
          alt="Customer success team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/40 to-transparent" />
      </div>
    </div>
  );
}