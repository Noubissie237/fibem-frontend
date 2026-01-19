import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Emploi - Téléphonie-IA",
  description: "Découvrez nos opportunités d'emploi",
};

export default function EmploiPage() {
  // Redirection vers la page des annonces
  redirect("/fr/emploi/annonces");
}
