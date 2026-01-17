"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  imageUrl: string;
  imageAlt: string;
  valueTitle: string;
  valueSubtitle: string;
}

export function AuthLayout({
  children,
  imageUrl,
  imageAlt,
  valueTitle,
  valueSubtitle,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-50 flex">
      {/* Left Column - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Right Column - Image & Value Prop (hidden on mobile) */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-brand-blue to-brand-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16 text-white">
          <h2 className="text-3xl xl:text-4xl font-bold mb-4">
            {valueTitle}
          </h2>
          <p className="text-lg xl:text-xl text-blue-100 leading-relaxed">
            {valueSubtitle}
          </p>
          
          {/* Decorative elements */}
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-blue-100">Essai gratuit 14 jours</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-blue-100">Données sécurisées RGPD</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-blue-100">Configuration en 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
