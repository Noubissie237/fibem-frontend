"use client";

import { ReactNode, useEffect } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

/**
 * Layout pour les pages d'authentification (connexion, inscription)
 * Ce layout masque le Header et le Footer du layout parent
 */
export default function AuthLayout({ children }: AuthLayoutProps) {
  useEffect(() => {
    // Ajouter une classe au body pour masquer Header/Footer
    document.body.classList.add("auth-page");
    
    return () => {
      document.body.classList.remove("auth-page");
    };
  }, []);

  return <>{children}</>;
}
