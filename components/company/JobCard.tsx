import { Locale } from "@/types/i18n";
import { Card, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JobOffer, getJobOfferContent } from "@/lib/company";

interface JobCardProps {
  job: JobOffer;
  lang: Locale;
  applyLabel: string;
  locationLabel: string;
}

function IconMapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

export function JobCard({ job, lang, applyLabel, locationLabel }: JobCardProps) {
  const content = getJobOfferContent(job.id, lang);
  if (!content) return null;

  return (
    <Card padding="lg" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="blue">{content.departmentLabel}</Badge>
          <Badge variant="default">{content.typeLabel}</Badge>
        </div>
        <CardTitle className="text-lg mb-1">{content.title}</CardTitle>
        <div className="flex items-center gap-1 text-sm text-neutral-500">
          <IconMapPin className="w-4 h-4" />
          <span>{locationLabel}: {job.location}</span>
        </div>
      </div>
      <Button href={`/${lang}/contact`} variant="outline" className="shrink-0">
        {applyLabel}
      </Button>
    </Card>
  );
}