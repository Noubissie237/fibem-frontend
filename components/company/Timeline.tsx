import { Locale } from "@/types/i18n";
import { timeline, getTimelineEventContent } from "@/lib/company";

interface TimelineProps {
  lang: Locale;
}

export function Timeline({ lang }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-blue-200 -translate-x-1/2" />

      <div className="space-y-8">
        {timeline.map((event, index) => {
          const content = getTimelineEventContent(event.id, lang);
          if (!content) return null;

          const isEven = index % 2 === 0;

          return (
            <div
              key={event.id}
              className={`relative flex items-center gap-6 md:gap-0 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-blue rounded-full -translate-x-1/2 border-4 border-white shadow z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-soft">
                  <span className="inline-block px-3 py-1 bg-brand-blue-100 text-brand-blue text-sm font-semibold rounded-full mb-3">
                    {event.year}
                  </span>
                  <h3 className="font-bold text-neutral-900 mb-2">{content.title}</h3>
                  <p className="text-sm text-neutral-600">{content.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}