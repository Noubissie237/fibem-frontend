"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { IconPhone } from "@/components/icons/Icons";
import { Locale, Dictionary } from "@/types/i18n";

interface FooterProps {
  lang?: Locale;
  dict?: Dictionary;
}

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

export function Footer({ lang = "fr" }: FooterProps) {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  const navigationLinks = [
    { label: "Accueil", href: `/${lang}` },
    { label: "Tarifs", href: `/${lang}/tarifs` },
    { label: "Fonctionnalités", href: `/${lang}/fonctionnalites` },
    { label: "Solutions", href: `/${lang}/solutions` },
    { label: "Emploi", href: `/${lang}/emploi` },
    { label: "Partenaires", href: `/${lang}/partenaires` },
    { label: "Contact", href: `/${lang}/contact` },
    { label: "Ressources", href: `/${lang}/ressources` },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
      <Container fluid>
        {/* Section unique avec 4 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 px-6 lg:px-12">
          
          {/* Colonne 1 : Logo + Navigation */}
          <div>
            {/* Logo */}
            <Link href={`/${lang}`} className="inline-block mb-3">
              <div className="relative w-28 h-12 overflow-hidden">
                <Image
                  src="/images/logo-wbg.png"
                  alt="FIBEM"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            
            {/* Badge Téléphonie IA */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-800 text-sm mb-4">
              <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Téléphonie IA
            </div>

            {/* Navigation en boutons - 2 lignes de 4 */}
            <div className="grid grid-cols-4 gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium transition-colors text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Colonne 2 : France */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{locations[0].flag}</span>
              <h4 className="font-bold text-white text-lg">{locations[0].name}</h4>
            </div>
            
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{locations[0].address}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <IconPhone className="w-4 h-4 shrink-0 text-brand-blue" />
                <span>{locations[0].phone}</span>
              </div>
              
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-xs">SIRET: {locations[0].siret}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${locations[0].email}`} className="hover:text-white transition-colors text-xs">
                  {locations[0].email}
                </a>
              </div>
            </div>

            <div className="flex flex-row gap-2 mt-4">
              <a
                href={locations[0].mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs transition-colors"
              >
                <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Voir sur Google Maps
              </a>
              
              <a
                href={locations[0].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#25D366] hover:bg-[#25D366]/90 text-white text-xs transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Colonne 3 : Sénégal */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{locations[1].flag}</span>
              <h4 className="font-bold text-white text-lg">{locations[1].name}</h4>
            </div>
            
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{locations[1].address}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <IconPhone className="w-4 h-4 shrink-0 text-brand-blue" />
                <span>{locations[1].phone}</span>
              </div>
              
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-xs">{locations[1].siret}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${locations[1].email}`} className="hover:text-white transition-colors text-xs">
                  {locations[1].email}
                </a>
              </div>
            </div>

            <div className="flex flex-row gap-2 mt-4">
              <a
                href={locations[1].mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs transition-colors"
              >
                <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Voir sur Google Maps
              </a>
              
              <a
                href={locations[1].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#25D366] hover:bg-[#25D366]/90 text-white text-xs transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Colonne 4 : Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Newsletter</h3>
            <p className="text-sm text-neutral-400 mb-4">
              Recevez 1 fois/mois des conseils pratiques SEO/SEA et e-commerce.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email..."
                className="flex-1 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium text-sm transition-colors whitespace-nowrap"
              >
                S&apos;abonner
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-3">
              En cliquant, vous nous rejoindrez via la page Contact avec votre email pré-rempli.
            </p>
          </div>
        </div>

      </Container>
      
      {/* Mentions légales déroulables */}
      <Container fluid>
        <div className="mt-12 px-6 lg:px-12">
          <button
            onClick={() => setIsLegalOpen(!isLegalOpen)}
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
          >
            <span className={`transform transition-transform ${isLegalOpen ? 'rotate-90' : ''}`}>▸</span>
            Mentions légales
          </button>
          
          {isLegalOpen && (
            <div className="mt-4 p-4 rounded-lg bg-neutral-800/50 border border-neutral-700 text-sm text-neutral-300 space-y-4 animate-fade-in">
              <div>
                <h4 className="font-bold text-white mb-2">Éditeur du site</h4>
                <p>SEN F.I.B.E.M.</p>
                <p>Rue 7 Corniche X 6, Dakar (Sénégal)</p>
                <p>Tél. : +221 77 877 69 32</p>
                <p>Email : do.amdigitale99@gmail.com</p>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-2">Identifiants légaux</h4>
                <p>NINEA : 30 84 31 62 U2</p>
                <p>APE/NAF : 7112B — Ingénierie Étude Technique</p>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-2">Contact</h4>
                <p>
                  Pour toute question, veuillez utiliser la{" "}
                  <Link href={`/${lang}/contact`} className="text-brand-blue hover:underline">
                    page Contact
                  </Link>
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>

      {/* Séparateur */}
      <Container fluid>
        <div className="mt-8 border-t border-neutral-800 px-6 lg:px-12" />
      </Container>

      {/* Footer bottom : Réseaux sociaux + Liens légaux */}
      <Container fluid>
        <div className="mt-6 pb-4 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Réseaux sociaux */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-400">Suivez-nous :</span>
            <div className="flex items-center gap-3">
              {/* Facebook - Bleu #1877F2 */}
              <a
                href="https://www.facebook.com/profile.php?id=61580826024280"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* LinkedIn - Bleu #0A66C2 */}
              <a
                href="https://www.linkedin.com/in/sen-fibem-france-953349213/?originalSubdomain=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* Twitter/X - Bleu clair #1DA1F2 */}
              <a
                href="https://x.com/senfibemfrance"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              {/* Instagram - Dégradé rose/orange #E4405F */}
              <a
                href="https://www.instagram.com/sen.fibemfrance/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              
              {/* YouTube - Rouge #FF0000 */}
              <a
                href="https://www.youtube.com/channel/UC1ro5Fjh6Se9pMQ_kc-QzBw"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              
              {/* TikTok - Cyan clair #00F2EA (visible sur fond sombre) */}
              <a
                href="https://www.tiktok.com/@senfibemfrance"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Liens légaux */}
          <div className="flex items-center gap-6 text-xs">
            <Link href={`/${lang}/confidentialite`} className="text-neutral-500 hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href={`/${lang}/mentions-legales`} className="text-neutral-500 hover:text-white transition-colors">
              Mentions légales
            </Link>
            <button className="text-neutral-500 hover:text-white transition-colors">
              Gérer mes cookies
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}