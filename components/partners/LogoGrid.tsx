import Image from "next/image";

interface Logo {
  id: string;
  name: string;
  image?: string;
}

interface LogoGridProps {
  logos: Logo[];
}

export function LogoGrid({ logos }: LogoGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="bg-white rounded-xl border border-neutral-200 p-8 flex items-center justify-center hover:shadow-lg hover:border-brand-blue/30 transition-all duration-300 group min-h-[120px]"
        >
          {logo.image ? (
            <div className="relative w-full h-16">
              <Image
                src={logo.image}
                alt={logo.name}
                fill
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ) : (
            <span className="text-sm font-semibold text-neutral-700 group-hover:text-brand-blue transition-colors">
              {logo.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
