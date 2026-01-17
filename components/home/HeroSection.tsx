import Image from "next/image";
import { Dictionary, Locale } from "@/types/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  IconPhone,
  IconChartBar,
  IconUsers,
  IconStar,
  IconSparkles, // Remonté ici pour être propre
} from "@/components/icons/Icons";

interface HeroSectionProps {
  dict: Dictionary;
  lang: Locale;
}

// Liste des logos
const LOGOS = [
  "/images/trusts/logo1.png",
  "/images/trusts/logo2.png",
  "/images/trusts/logo3.jpeg",
  "/images/trusts/logo4.png",
  "/images/trusts/logo5.png",
  "/images/trusts/logo6.png",
];

export function HeroSection({ dict, lang }: HeroSectionProps) {
  const { hero } = dict;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-50/50 to-white pt-8 pb-16 lg:pt-16 lg:pb-24">
      
      {/* Animation CSS locale pour le défilement */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              {hero.title}{" "}
              <span className="text-brand-blue">{hero.titleHighlight}</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button href={`/${lang}/inscription`} size="lg">
                {hero.ctaPrimary}
              </Button>
              <Button href={`/${lang}/contact`} variant="outline" size="lg">
                {hero.ctaSecondary}
              </Button>
            </div>

            <p className="text-sm text-neutral-500">{hero.noCard}</p>

            {/* Trust indicators (Modifié) */}
            <div className="mt-10 pt-8 border-t border-neutral-200 w-full overflow-hidden">
              <p className="text-sm text-neutral-500 mb-6">{hero.trustedBy}</p>
              
              {/* Conteneur du slider avec masque de fondu sur les côtés */}
              <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
                <div className="flex w-max animate-infinite-scroll items-center">
                  {/* On duplique la liste des logos pour créer la boucle infinie */}
                  {[...LOGOS, ...LOGOS].map((src, index) => (
                    <div 
                      key={index} 
                      className="mx-1 w-24 h-12 relative flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    >
                      <Image
                        src={src}
                        alt={`Partner logo ${index}`}
                        fill
                        className="object-contain"
                        sizes="100px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Preview Card */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-mega border border-neutral-100 p-6 lg:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                    <IconPhone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      {hero.dashboardPreview.title}
                    </h3>
                    <p className="text-xs text-neutral-500">FIBEM Téléphonie-IA</p>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 bg-red-400 rounded-full" />
                  <span className="w-3 h-3 bg-amber-400 rounded-full" />
                  <span className="w-3 h-3 bg-emerald-400 rounded-full" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <StatCard
                  label={hero.dashboardPreview.callsToday}
                  value="127"
                  trend="+12%"
                  icon={<IconPhone className="w-4 h-4" />}
                  color="blue"
                />
                <StatCard
                  label={hero.dashboardPreview.responseRate}
                  value="94%"
                  trend="+3%"
                  icon={<IconChartBar className="w-4 h-4" />}
                  color="green"
                />
                <StatCard
                  label={hero.dashboardPreview.satisfaction}
                  value="4.8"
                  icon={<IconStar className="w-4 h-4" />}
                  color="gold"
                />
                <StatCard
                  label={hero.dashboardPreview.activeAgents}
                  value="8/10"
                  icon={<IconUsers className="w-4 h-4" />}
                  color="neutral"
                />
              </div>

              {/* Mini chart placeholder */}
              <div className="h-24 bg-gradient-to-r from-brand-blue-50 to-brand-blue-100/50 rounded-lg flex items-end justify-around p-3">
                {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                  <div
                    key={i}
                    className="w-6 bg-brand-blue/60 rounded-t"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-neutral-100 p-3 animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <IconPhone className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-xs">
                  <p className="font-medium text-neutral-900">
                    {lang === "fr" 
                      ? "Appel entrant" 
                      : "Incoming call"
                    }
                  </p>
                  <p className="text-neutral-500">+33 1 23 45 67 89</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-neutral-100 p-3 animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-blue-100 rounded-full flex items-center justify-center">
                  <IconSparkles className="w-4 h-4 text-brand-blue" />
                </div>
                <div className="text-xs">
                  <p className="font-medium text-neutral-900">IA active</p>
                  <p className="text-neutral-500">
                    {lang === "fr" 
                      ? "Transcription en cours..." 
                      : "Transcription in progress..."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  icon: React.ReactNode;
  color: "blue" | "green" | "gold" | "neutral";
}

const colorStyles = {
  blue: "bg-brand-blue-50 text-brand-blue",
  green: "bg-emerald-50 text-emerald-600",
  gold: "bg-amber-50 text-amber-600",
  neutral: "bg-neutral-100 text-neutral-600",
};

function StatCard({ label, value, trend, icon, color }: StatCardProps) {
  return (
    <div className="bg-neutral-50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colorStyles[color]}`}>
          {icon}
        </div>
        {trend && (
          <span className="text-xs font-medium text-emerald-600">{trend}</span>
        )}
      </div>
      <p className="text-2xl font-bold text-neutral-900">{value}</p>
      <p className="text-xs text-neutral-500">{label}</p>
    </div>
  );
}