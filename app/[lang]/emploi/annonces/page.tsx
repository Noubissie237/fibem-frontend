"use client";

import { useState } from "react";
import { JobSearchHero } from "@/components/jobs/JobSearchHero";
import { JobFilters, JobFilterValues } from "@/components/jobs/JobFilters";
import { JobResultsList } from "@/components/jobs/JobResultsList";
import { Locale } from "@/types/i18n";

// Données d'exemple - À remplacer par des données réelles depuis une API
const MOCK_JOBS = [
  {
    id: 1,
    title: "Développeur/Développeuse UNITY 3D, PYTHON, FLUTTER (H/F)",
    company: "EJRL INFO DEV",
    location: "57 - METZ",
    contractType: "CDI",
    salary: "Temps plein",
    publishedDate: "aujourd'hui",
    description: "Nous recrutons un(e) Développeur/Développeuse pour compléter notre équipe. Vous contribuerez à la conception et au développement de logiciels informatiques. Vous maîtriserez les langages informatiques...",
  },
  {
    id: 2,
    title: "Développeur Full Stack Java Spring / Angular Senior (H/F)",
    company: "TALENT BRUT RECRUTEMENT",
    location: "92 - RUEIL-MALMAISON",
    contractType: "CDI",
    salary: "Temps plein",
    publishedDate: "aujourd'hui",
    description: "Talent Brut recherche un ingénieur d'études et développement fullstack Java / Angular à Rueil-Malmaison (92). Notre client est un éditeur de logiciels et prestataire de services spécialisé dans le...",
  },
  {
    id: 3,
    title: "Développeur / Programmeur - Imagerie Industrielle (H/F)",
    company: "PRYAM CONSULTING",
    location: "13 - MARTIGUES",
    contractType: "CDI",
    salary: "Temps plein",
    publishedDate: "aujourd'hui",
    description: "Pryam Consulting accompagne les entreprises dans leurs projets industriels en apportant expertise et solutions innovantes. Dans le cadre de notre développement et afin de renforcer l'équipe de l'un...",
  },
  {
    id: 4,
    title: "Développeur C# .net (H/F)",
    company: "BDO SOFTWARE & SERVICES",
    location: "74 - SAINT-PIERRE-EN-FAUCIGNY",
    contractType: "CDI",
    salary: "Temps plein",
    publishedDate: "aujourd'hui",
    description: "BDO Software & Services, filiale du groupe BDO, est une société de services informatiques à taille humaine qui a su conserver un esprit familial. L'expertise de ses collaborateurs et les...",
  },
  {
    id: 5,
    title: "Développeur Web Full Stack (H/F)",
    company: "FIBEM TECHNOLOGIES",
    location: "Dakar, Sénégal",
    contractType: "CDI",
    salary: "À négocier",
    publishedDate: "il y a 2 jours",
    description: "FIBEM recherche un développeur full stack pour rejoindre notre équipe de développement. Vous travaillerez sur des projets innovants dans le domaine de la téléphonie IA et des solutions cloud...",
  },
];

interface JobsPageProps {
  params: Promise<{ lang: Locale }>;
}

export default function JobsPage({ params }: JobsPageProps) {
  const [lang, setLang] = useState<Locale>("fr");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [filters, setFilters] = useState<JobFilterValues>({});
  const [showResults, setShowResults] = useState(false);

  // Initialiser la langue depuis les params
  params.then(({ lang: paramLang }) => {
    if (paramLang !== lang) {
      setLang(paramLang);
    }
  });

  const handleSearch = (keyword: string, location: string) => {
    setSearchKeyword(keyword);
    setSearchLocation(location);
    setShowResults(true);
    console.log("Recherche:", { keyword, location });
  };

  const handleShowAllOffers = () => {
    setShowResults(true);
  };

  const handleFilterChange = (newFilters: JobFilterValues) => {
    setFilters(newFilters);
    console.log("Filtres:", newFilters);
  };

  return (
    <main className="min-h-screen">
      {/* Hero avec recherche et boutons d'inscription */}
      <JobSearchHero 
        lang={lang} 
        onSearch={handleSearch}
        onShowAllOffers={handleShowAllOffers}
      />

      {/* Filtres et Résultats - Affichés uniquement après recherche ou clic sur "Voir toutes les offres" */}
      {showResults && (
        <>
          {/* Filtres */}
          <JobFilters lang={lang} onFilterChange={handleFilterChange} />

          {/* Résultats */}
          <JobResultsList 
            lang={lang} 
            jobs={MOCK_JOBS} 
            totalCount={9366} 
            searchKeyword={searchKeyword || "développeur"}
          />
        </>
      )}
    </main>
  );
}