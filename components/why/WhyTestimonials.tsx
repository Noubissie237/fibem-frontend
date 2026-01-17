import Image from "next/image";
import { Dictionary, Locale } from "@/types/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { testimonials, getTestimonialContent } from "@/lib/company";

interface WhyTestimonialsProps {
  dict: Dictionary;
  lang: Locale;
}

function IconQuote(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export function WhyTestimonials({ dict, lang }: WhyTestimonialsProps) {
  const { testimonials: testimonialsDict } = dict.whyPage;

  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {testimonialsDict.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {testimonialsDict.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => {
          const content = getTestimonialContent(testimonial.id, lang);
          if (!content) return null;

          return (
            <Card key={testimonial.id} padding="lg" className="relative">
              <IconQuote className="w-8 h-8 text-brand-blue-200 absolute top-6 right-6" />
              
              <p className="text-neutral-600 mb-6 leading-relaxed relative z-10">
                &quot;{content.quote}&quot;
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}