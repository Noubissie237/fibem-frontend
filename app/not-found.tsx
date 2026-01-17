import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-brand-blue mb-4">404</h1>
          <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Page introuvable
        </h2>
        <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        {/* Illustration */}
        <div className="mb-12">
          <svg
            className="w-64 h-64 mx-auto text-brand-blue/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/"
            variant="primary"
            size="lg"
            className="inline-flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Retour à l&apos;accueil
          </Button>
          <Button
            href="/fr/contact"
            variant="outline"
            size="lg"
            className="inline-flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Nous contacter
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500 mb-4">Liens utiles :</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link
              href="/fr/fonctionnalites"
              className="text-brand-blue hover:underline"
            >
              Fonctionnalités
            </Link>
            <Link
              href="/fr/tarifs"
              className="text-brand-blue hover:underline"
            >
              Tarifs
            </Link>
            <Link
              href="/fr/ressources/centre-aide"
              className="text-brand-blue hover:underline"
            >
              Centre d&apos;aide
            </Link>
            <Link
              href="/fr/ressources/blog"
              className="text-brand-blue hover:underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
