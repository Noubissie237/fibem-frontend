import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary, isValidLocale } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { JobCard, ApplicationForm } from "@/components/company";
import { jobOffers } from "@/lib/company";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return {
    title: lang === "fr" ? "Rejoignez-nous | FIBEM" : "Join us | FIBEM",
  };
}

function IconRocket(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
}

function IconCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  );
}

function IconHeart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function IconTrendingUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

const icons = [
  <IconRocket key="rocket" className="w-6 h-6" />,
  <IconCode key="code" className="w-6 h-6" />,
  <IconHeart key="heart" className="w-6 h-6" />,
  <IconTrendingUp key="trending" className="w-6 h-6" />,
];

const colors = [
  "bg-brand-blue-100 text-brand-blue",
  "bg-purple-100 text-purple-600",
  "bg-rose-100 text-rose-600",
  "bg-emerald-100 text-emerald-600",
];

export default async function CareersPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { careers } = dict.companyPages;

  return (
    <>
      <PageHero
        title={careers.hero.title}
        subtitle={careers.hero.subtitle}
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
        breadcrumbs={[
          { label: dict.companyPages.breadcrumb.company, href: `/${lang}/pourquoi-telephonie-ia` },
          { label: careers.hero.title },
        ]}
      />

      {/* Culture */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">{careers.culture.title}</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">{careers.culture.content}</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-80">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Team culture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Why Join */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{careers.whyJoin.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careers.whyJoin.items.map((item, index) => (
            <Card key={index} hover padding="lg">
              <div className={`w-12 h-12 rounded-xl ${colors[index]} flex items-center justify-center mb-4`}>
                {icons[index]}
              </div>
              <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* Job Openings */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{careers.openings.title}</h2>
          <p className="text-lg text-neutral-600">{careers.openings.subtitle}</p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {jobOffers.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              lang={lang}
              applyLabel={careers.openings.apply}
              locationLabel={careers.openings.location}
            />
          ))}
        </div>
      </Section>

      {/* Spontaneous Application */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">{careers.spontaneous.title}</h2>
            <p className="text-lg text-neutral-600">{careers.spontaneous.subtitle}</p>
          </div>

          <ApplicationForm labels={careers.spontaneous.form} />
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">{careers.cta.title}</h2>
          <Button href={`/${lang}/contact`} size="lg" className="bg-white text-brand-blue hover:bg-neutral-100">
            {careers.cta.primary}
          </Button>
        </div>
      </section>
    </>
  );
}