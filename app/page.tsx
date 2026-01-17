import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 text-balance">
            La téléphonie d&apos;entreprise{" "}
            <span className="text-brand-blue">augmentée par l&apos;IA</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto text-balance">
            Transformez chaque appel en opportunité grâce à notre assistant
            vocal intelligent. Ne manquez plus jamais un appel important.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/inscription" size="lg">
              Commencer gratuitement
            </Button>
            <Button href="/fonctionnalites" variant="outline" size="lg">
              Découvrir les fonctionnalités
            </Button>
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            Essai gratuit 14 jours • Aucune carte bancaire requise
          </p>
        </div>
      </Section>

      {/* Placeholder sections */}
      <Section background="gray">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-neutral-600">
            Plus de 500 entreprises utilisent Téléphonie-IA au quotidien.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Fonctionnalités clés
          </h2>
          <p className="text-neutral-600">
            Découvrez comment Téléphonie-IA peut transformer votre entreprise.
          </p>
        </div>
      </Section>
    </>
  );
}