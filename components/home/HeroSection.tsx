"use client";

import Image from "next/image";
import { Dictionary, Locale } from "@/types/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  IconPhone,
  IconCheckCircle,
  IconSparkles,
} from "@/components/icons/Icons";

interface HeroSectionProps {
  dict: Dictionary;
  lang: Locale;
}

const LOGOS = [
  { src: "/images/trusts/logo1.png", alt: "Company 1" },
  { src: "/images/trusts/logo2.png", alt: "Company 2" },
  { src: "/images/trusts/logo3.jpeg", alt: "Company 3" },
  { src: "/images/trusts/logo4.png", alt: "Company 4" },
  { src: "/images/trusts/logo5.png", alt: "Company 5" },
  { src: "/images/trusts/logo6.png", alt: "Company 6" },
];

const FEATURES = [
  { key: "calls", value: "10M+", labelFr: "Appels traités", labelEn: "Calls processed" },
  { key: "satisfaction", value: "98%", labelFr: "Satisfaction", labelEn: "Satisfaction" },
  { key: "uptime", value: "99.9%", labelFr: "Disponibilité", labelEn: "Uptime" },
];

export function HeroSection({ dict, lang }: HeroSectionProps) {
  const { hero } = dict;

  // Double les logos pour un défilement infini fluide
  const duplicatedLogos = [...LOGOS, ...LOGOS];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-[1.1]">
              {hero.title}{" "}
              <span className="relative">
                <span className="text-brand-blue">{hero.titleHighlight}</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-brand-blue/30" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-neutral-600 mb-8 leading-relaxed">
              {hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href={`/${lang}/inscription`} variant="primary" size="lg" className="group">
                {hero.ctaPrimary}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href={`/${lang}/contact`} variant="ghost" size="lg" className="group">
                {lang === "fr" ? "Voir la démo" : "Watch demo"}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <IconCheckCircle className="w-5 h-5 text-green-500" />
                <span>{hero.noCard}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCheckCircle className="w-5 h-5 text-green-500" />
                <span>{lang === "fr" ? "Setup en 5 min" : "5 min setup"}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative lg:h-[600px]">
            {/* Main Image */}
            <div className="relative bg-gradient-to-br from-brand-blue to-brand-blue-600 rounded-2xl p-1 shadow-2xl shadow-brand-blue/20">
              <div className="bg-neutral-900 rounded-xl overflow-hidden">
                <div className="relative aspect-[4/4]">
                  <Image
                    src="/images/telephone-ia.webp"
                    alt="AlloMedia Dashboard"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -left-8 top-1/4 bg-white rounded-xl p-4 shadow-lg border border-neutral-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <IconPhone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">+127%</p>
                  <p className="text-xs text-neutral-500">{lang === "fr" ? "Appels traités" : "Calls handled"}</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl p-4 shadow-lg border border-neutral-100 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-blue-50 rounded-lg flex items-center justify-center">
                  <IconSparkles className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">AI</p>
                  <p className="text-xs text-neutral-500">{lang === "fr" ? "Transcription auto" : "Auto transcription"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-neutral-200 py-10">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {FEATURES.map((feat) => (
              <div key={feat.key} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-neutral-900">{feat.value}</p>
                <p className="text-sm text-neutral-500 mt-1">{lang === "fr" ? feat.labelFr : feat.labelEn}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Logo Carousel - Full Width */}
      <div className="border-t border-neutral-200 bg-neutral-50/50 py-10">
        <Container>
          <p className="text-center text-sm font-medium text-neutral-500 mb-8">
            {hero.trustedBy || (lang === "fr" ? "Ils nous font confiance" : "Trusted by leading companies")}
          </p>
        </Container>
        
        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-50/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-50/50 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Track */}
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 lg:mx-12"
              >
                <div className="relative h-12 w-32 lg:h-14 lg:w-40 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 1s;
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}