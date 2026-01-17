"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { IconPhone } from "@/components/icons/Icons";

// --- DONNÉES DE LOCALISATION ---
const locations = [
  {
    country: "France",
    flag: "🇫🇷",
    name: "SEN FIBEM - France",
    address: "51 Rue du Grévarin - 27200 Vernon", 
    phone: "+33 6 05 51 14 32",
    siret: "435 574 937 00032",
    email: "senfibem.paris@outlook.com",
    mapLink: "https://share.google/FBj1EnsBL7EM6UwY9",
    whatsapp: "https://wa.me/33605511432",
  },
  {
    country: "Sénégal",
    flag: "🇸🇳",
    name: "SEN FIBEM - Sénégal",
    address: "Rue 7 Corniche x 6, Médina, Dakar", 
    phone: "+221 77 877 69 32",
    siret: "30 84 31 62 02 - APE 7112B Ingénierie Étude Technique", 
    email: "senfibem.sn@outlook.com",
    mapLink: "https://maps.app.goo.gl/b3APqeGrp7jnZQLU7",
    whatsapp: "https://wa.me/221778776932",
  },
];

const footerLinks = {
  produit: {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "/fonctionnalites" },
      { label: "Tarifs", href: "/tarifs" },
      { label: "Solutions", href: "/solutions" },
      { label: "Intégrations", href: "/ressources#api" },
    ],
  },
  entreprise: {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/pourquoi-telephonie-ia" },
      { label: "Partenaires", href: "/partenaires" },
      { label: "Carrières", href: "/contact#carrieres" },
      { label: "Contact", href: "/contact" },
    ],
  },
  ressources: {
    title: "Ressources",
    links: [
      { label: "Blog", href: "/ressources#blog" },
      { label: "Centre d'aide", href: "/ressources#aide" },
      { label: "Documentation API", href: "/ressources#api" },
      { label: "Statut des services", href: "/ressources#statut" },
    ],
  },
  legal: {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "CGU", href: "/cgu" },
      { label: "Confidentialité", href: "/confidentialite" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
      <Container>
        {/* --- SECTION HAUTE : LOGO & DESCRIPTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 border-b border-neutral-800 pb-12">
          
          <div className="max-w-md">
            {/* Nouveau Logo Style Header */}
            <Link href="/" className="group flex items-center gap-4 mb-6">
              {/* Logo Image */}
              <div className="relative w-28 h-12 overflow-hidden p-1">
                <Image
                  src="/images/logo-wbg.png"
                  alt="FIBEM"
                  fill
                  className="object-contain" 
                />
              </div>

              {/* Badge Téléphonie-IA (Copié du Header) */}
              <div className="relative hidden sm:block">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-md shadow-brand-blue/25">
                  <svg 
                    className="w-3.5 h-3.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Téléphonie-IA
                </span>
              </div>
            </Link>

            <p className="text-base text-neutral-400 leading-relaxed">
              La solution de téléphonie augmentée par l&apos;intelligence artificielle
              pour propulser les entreprises modernes vers l&apos;efficacité.
            </p>
          </div>

          {/* Grille de liens (Navigation) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full lg:w-auto">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION MILIEU : LOCALISATIONS --- */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {locations.map((loc) => (
            <div 
              key={loc.country} 
              className="bg-neutral-800/40 rounded-2xl p-6 border border-neutral-800 hover:border-brand-blue/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" role="img" aria-label={`Drapeau ${loc.country}`}>
                  {loc.flag}
                </span>
                <h4 className="text-lg font-bold text-white">
                  {loc.name}
                </h4>
              </div>

              <div className="space-y-3 text-sm text-neutral-400 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-1 shrink-0 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconPhone className="w-4 h-4 shrink-0 text-brand-blue" />
                  <span>{loc.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 shrink-0 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${loc.email}`} className="hover:text-white transition-colors">{loc.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 shrink-0 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="uppercase text-xs tracking-wider">Siret/ID: {loc.siret}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a 
                  href={loc.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-xs text-white transition-colors"
                >
                  <svg className="w-4 h-4 mt-0 shrink-0 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Voir sur Google Maps
                </a>
                
                <a 
                  href={loc.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-xs font-medium border border-[#25D366]/20 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION BASSE : COPYRIGHT & LANGUE --- */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-neutral-500">
            &copy; {currentYear} FIBEM. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}