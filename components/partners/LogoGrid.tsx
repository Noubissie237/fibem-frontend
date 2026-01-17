interface Logo {
  id: string;
  name: string;
}

interface LogoGridProps {
  logos: Logo[];
}

export function LogoGrid({ logos }: LogoGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="bg-white rounded-xl border border-neutral-200 p-6 flex items-center justify-center hover:shadow-md hover:border-brand-blue/30 transition-all duration-300 group"
        >
          <div className="text-center">
            {/* Simple SVG logo mock */}
            <svg
              className="w-12 h-12 mx-auto mb-2 text-neutral-400 group-hover:text-brand-blue transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="text-sm font-semibold text-neutral-700 group-hover:text-brand-blue transition-colors">
              {logo.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
