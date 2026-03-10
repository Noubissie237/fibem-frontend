import { Locale, Dictionary } from "@/types/i18n";
import { fr } from "./fr";
import { en } from "./en";

const dictionaries: Record<Locale, Dictionary> = {
  fr,
  en,
  es: en, // Espagnol - utilise EN par défaut
  de: en, // Allemand - utilise EN par défaut
  ar: fr, // Arabe - utilise FR par défaut
  zh: en, // Chinois - utilise EN par défaut
  pt: en, // Portugais - utilise EN par défaut
  ru: en, // Russe - utilise EN par défaut
  ja: en, // Japonais - utilise EN par défaut
  hi: en, // Hindi - utilise EN par défaut
};

export const locales: Locale[] = ["fr", "en", "es", "de", "ar", "zh", "pt", "ru", "ja", "hi"];
export const defaultLocale: Locale = "fr";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}