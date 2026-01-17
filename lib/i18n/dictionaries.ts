import { Locale, Dictionary } from "@/types/i18n";
import { fr } from "./fr";
import { en } from "./en";

const dictionaries: Record<Locale, Dictionary> = {
  fr,
  en,
};

export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}