"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";


const DIFFERENTIATORS = [
  {
    id: "ai",
    title: "Intelligence artificielle intégrée",
    subtitle: "L'IA au cœur de chaque appel",
    description: "Notre plateforme intègre nativement l'IA pour la transcription en temps réel, l'analyse de sentiment et les résumés automatiques. Transformez chaque conversation en données exploitables.",
    features: [
      "Transcription en temps réel avec 98% de précision",
      "Analyse de sentiment automatique",
      "Résumés intelligents post-appel",
      "Détection des mots-clés et intentions",
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    imageAlt: "Intelligence artificielle et analyse de données",
    gradient: "from-brand-blue to-brand-blue-700",
    bgGradient: "from-brand-blue-50 to-brand-blue-100",
    iconBg: "bg-brand-blue-100",
    iconColor: "text-brand-blue",
    stat: { value: "98%", label: "Précision IA" },
  },
  {
    id: "simplicity",
    title: "Simplicité et performance",
    subtitle: "Puissance sans complexité",
    description: "Une interface intuitive conçue pour les équipes modernes. Déployez en 5 minutes, formez en 1 heure, maîtrisez en 1 jour. Zéro friction, 100% productivité.",
    features: [
      "Déploiement en 5 minutes chrono",
      "Interface drag-and-drop intuitive",
      "Intégrations en un clic (CRM, Slack...)",
      "Formation vidéo incluse",
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    imageAlt: "Interface utilisateur moderne et intuitive",
    gradient: "from-brand-blue to-brand-blue-700",
    bgGradient: "from-brand-blue-50 to-brand-blue-100",
    iconBg: "bg-brand-blue-100",
    iconColor: "text-brand-blue",
    stat: { value: "5 min", label: "Setup" },
  },
  {
    id: "support",
    title: "Support client d'excellence",
    subtitle: "Votre succès, notre priorité",
    description: "Une équipe dédiée disponible 24/7 pour vous accompagner. Chaque client a un Customer Success Manager attitré et un accès direct à nos experts techniques.",
    features: [
      "Support 24/7 par chat, email et téléphone",
      "Customer Success Manager dédié",
      "Temps de réponse moyen < 2 minutes",
      "Base de connaissances complète",
    ],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    imageAlt: "Équipe de support client souriante",
    gradient: "from-brand-blue to-brand-blue-700",
    bgGradient: "from-brand-blue-50 to-brand-blue-100",
    iconBg: "bg-brand-blue-100",
    iconColor: "text-brand-blue",
    stat: { value: "< 2min", label: "Réponse" },
  },
  {
    id: "security",
    title: "Sécurité & Conformité",
    subtitle: "Vos données, notre responsabilité",
    description: "Infrastructure hébergée en France, certifiée ISO 27001 et conforme RGPD. Chiffrement de bout en bout et audits de sécurité réguliers.",
    features: [
      "Hébergement 100% français",
      "Certification ISO 27001",
      "Conformité RGPD garantie",
      "Chiffrement AES-256",
    ],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    imageAlt: "Sécurité et protection des données",
    gradient: "from-brand-blue to-brand-blue-700",
    bgGradient: "from-brand-blue-50 to-brand-blue-100",
    iconBg: "bg-brand-blue-100",
    iconColor: "text-brand-blue",
    stat: { value: "100%", label: "France" },
  },
];

const TESTIMONIALS = [
  {
    quote: "La différence se voit dès le premier appel. L'IA qui transcrit et analyse en temps réel, c'est un game-changer.",
    author: "Marie",
    role: "Directrice Commerciale",
    company: "TechStartup",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  { 
    quote: "On a testé 5 solutions avant. Téléphonie-IA est la seule qui combine vraiment simplicité et puissance.",
    author: "Thomas Bernard",
    role: "CEO",
    company: "GrowthAgency",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
];

export default function DifferentiationPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Section className="relative pt-20 pb-32 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-[1.1]">
              Ce qui nous rend{" "}
              <span className="relative">
                <span className="text-brand-blue">
                  différents
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Nous ne sommes pas qu'une solution de téléphonie. Nous sommes votre partenaire pour transformer chaque appel en opportunité de croissance.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { value: "500+", label: "Entreprises" },
                { value: "2M+", label: "Appels/mois" },
                { value: "98%", label: "Satisfaction" },
                { value: "< 2min", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-neutral-900">{stat.value}</p>
                  <p className="text-neutral-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Differentiators - Alternating Layout */}
      {DIFFERENTIATORS.map((item, index) => (
        <Section 
          key={item.id} 
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}`}
        >
          <Container>
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                {/* Icon & Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center`}>
                    <DifferentiatorIcon id={item.id} className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-medium`}>
                    {item.subtitle}
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                  {item.title}
                </h2>

                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  {item.description}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stat Highlight */}
                <div className={`inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r ${item.bgGradient}`}>
                  <span className={`text-4xl font-bold bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text`}>
                    {item.stat.value}
                  </span>
                  <span className="text-neutral-600 font-medium">{item.stat.label}</span>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl blur-3xl opacity-20 scale-95`} />
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${item.gradient} opacity-10`} />
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Floating Card */}
                  <div className={`absolute ${index % 2 === 0 ? '-right-6 -bottom-6' : '-left-6 -bottom-6'} bg-white rounded-2xl shadow-xl p-4 border border-neutral-100`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                        <DifferentiatorIcon id={item.id} className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-neutral-900">{item.stat.value}</p>
                        <p className="text-sm text-neutral-500">{item.stat.label}</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute ${index % 2 === 0 ? '-left-4 top-8' : '-right-4 top-8'} w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-20 blur-xl`} />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* Testimonials */}
      <Section className="py-24 bg-gradient-to-b from-white to-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Témoignages
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Ce que nos clients disent
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={index}
                className="relative bg-white rounded-3xl p-8 shadow-xl shadow-neutral-200/50 border border-neutral-100"
              >
                {/* Quote Icon */}
                <svg className="absolute top-6 right-6 w-12 h-12 text-brand-blue/10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-lg text-neutral-700 mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-gradient-to-br from-brand-blue to-brand-blue-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-10" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-blue-300/20 rounded-full blur-3xl" />
        </div>

        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Prêt à faire la différence ?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Rejoignez les 500+ entreprises qui ont transformé leur téléphonie avec notre solution IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/inscription" 
                size="lg"
                className="bg-white text-brand-blue hover:bg-neutral-100 px-8 py-4 text-lg font-semibold shadow-xl shadow-black/20"
              >
                Démarrer gratuitement
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button 
                href="/contact"
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Parler à un expert
              </Button>
            </div>

            <p className="text-white/60 mt-8 text-sm">
              ✓ Essai gratuit 14 jours · ✓ Sans engagement · ✓ Support inclus
            </p>
          </div>
        </Container>
      </Section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </main>
  );
}

// Helper component for icons
function DifferentiatorIcon({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case "ai":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "simplicity":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "support":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case "security":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    default:
      return null;
  }
}