import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "py-12 lg:py-16",
  md: "py-16 lg:py-20",
  lg: "py-16 lg:py-24",
};

export function PageHero({
  title,
  subtitle,
  image,
  breadcrumbs,
  children,
  size = "md",
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 ${sizeStyles[size]}`}>
      {image && (
        <div className="absolute inset-0">
          <Image src={image} alt="" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 to-neutral-900/70" />
        </div>
      )}

      <Container className="relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && <span className="text-white/40">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="text-white/60 hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
          {subtitle && <p className="text-lg sm:text-xl text-white/80 mb-8">{subtitle}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}