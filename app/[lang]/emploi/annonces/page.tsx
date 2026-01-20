import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Locale } from "@/types/i18n";

interface JobsPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: JobsPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.jobsPage.meta.title,
    description: dict.jobsPage.meta.description,
  };
}

export default async function JobsPage({ params }: JobsPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { jobsPage: t } = dict;

  return (
    <main>
      {/* Hero Section */}
      <Section className="relative py-20 bg-gradient-to-br from-brand-blue-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
          </div>
        </Container>
      </Section>

      {/* Job Offers */}
      <Section className="py-16 bg-neutral-50/50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {t.jobs.items.map((job) => (
                <div
                  key={job.id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100"
                >
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div>
                            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-brand-blue transition-colors">
                              {job.title}
                            </h2>
                            <p className="text-sm text-neutral-500">{job.department}</p>
                          </div>
                        </div>
                        
                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 rounded-full">
                            <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 rounded-full">
                            <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {job.type}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue-50 text-brand-blue rounded-full font-medium">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            {job.experience}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        {t.jobs.skillsLabel}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-sm rounded-lg transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-100">
                      <Button href={`/${lang}/contact`} variant="primary" size="md">
                        {t.jobs.applyButton}
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                      <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-600 hover:text-brand-blue transition-colors">
                        {t.jobs.learnMore}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Hover Accent */}
                  <div className="h-1 bg-gradient-to-r from-brand-blue to-brand-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}