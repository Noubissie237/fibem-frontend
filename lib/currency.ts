import { Currency } from "@/contexts/CurrencyContext";

export const currencySymbols: Record<Currency, string> = {
  EUR: "€",
  USD: "$",
  GBP: "£",
  JPY: "¥",
  CNY: "¥",
  XAF: "FCFA",
  INR: "₹",
  BRL: "R$",
  RUB: "₽",
  AED: "د.إ",
};

export const currencyNames: Record<Currency, string> = {
  EUR: "Euro",
  USD: "US Dollar",
  GBP: "British Pound",
  JPY: "Japanese Yen",
  CNY: "Chinese Yuan",
  XAF: "CFA Franc",
  INR: "Indian Rupee",
  BRL: "Brazilian Real",
  RUB: "Russian Ruble",
  AED: "UAE Dirham",
};

// Taux de change par rapport à l'EUR (base)
// Ces taux sont approximatifs et devraient idéalement être mis à jour via une API
export const exchangeRates: Record<Currency, number> = {
  EUR: 1,
  USD: 1.09,      // 1 EUR = 1.09 USD
  GBP: 0.86,      // 1 EUR = 0.86 GBP
  JPY: 161.5,     // 1 EUR = 161.5 JPY
  CNY: 7.85,      // 1 EUR = 7.85 CNY
  XAF: 655.96,    // 1 EUR = 655.96 XAF (Franc CFA)
  INR: 91.5,      // 1 EUR = 91.5 INR
  BRL: 6.15,      // 1 EUR = 6.15 BRL
  RUB: 105.0,     // 1 EUR = 105.0 RUB
  AED: 4.0,       // 1 EUR = 4.0 AED
};

/**
 * Convertit un prix en EUR vers une autre devise
 * @param priceInEUR - Prix en euros
 * @param targetCurrency - Devise cible
 * @returns Prix converti
 */
export function convertPrice(priceInEUR: number, targetCurrency: Currency): number {
  const rate = exchangeRates[targetCurrency];
  return priceInEUR * rate;
}

/**
 * Formate un prix avec le symbole de la devise
 * @param price - Prix à formater
 * @param currency - Devise
 * @param showDecimals - Afficher les décimales (par défaut: true sauf pour JPY, XAF, INR)
 * @returns Prix formaté avec symbole
 */
export function formatPrice(price: number, currency: Currency, showDecimals?: boolean): string {
  // Certaines devises n'utilisent pas de décimales
  const noDecimalCurrencies: Currency[] = ["JPY", "XAF"];
  const shouldShowDecimals = showDecimals ?? !noDecimalCurrencies.includes(currency);
  
  const formattedNumber = shouldShowDecimals 
    ? price.toFixed(2)
    : Math.round(price).toString();
  
  const symbol = currencySymbols[currency];
  
  // Pour certaines devises, le symbole vient après
  const symbolAfter: Currency[] = ["XAF"];
  
  if (symbolAfter.includes(currency)) {
    return `${formattedNumber} ${symbol}`;
  }
  
  return `${symbol}${formattedNumber}`;
}

/**
 * Convertit et formate un prix depuis EUR vers une devise cible
 * @param priceInEUR - Prix en euros
 * @param targetCurrency - Devise cible
 * @param showDecimals - Afficher les décimales
 * @returns Prix converti et formaté
 */
export function convertAndFormatPrice(
  priceInEUR: number, 
  targetCurrency: Currency,
  showDecimals?: boolean
): string {
  const convertedPrice = convertPrice(priceInEUR, targetCurrency);
  return formatPrice(convertedPrice, targetCurrency, showDecimals);
}

/**
 * Extrait le montant numérique d'une chaîne de prix
 * @param priceString - Chaîne contenant le prix (ex: "29€", "49")
 * @returns Montant numérique
 */
export function extractPriceAmount(priceString: string): number {
  // Enlever tous les caractères non numériques sauf le point et la virgule
  const cleaned = priceString.replace(/[^\d.,]/g, '');
  // Remplacer la virgule par un point pour le parsing
  const normalized = cleaned.replace(',', '.');
  return parseFloat(normalized) || 0;
}
