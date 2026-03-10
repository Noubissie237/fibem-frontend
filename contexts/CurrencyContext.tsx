"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Currency = "EUR" | "USD" | "GBP" | "JPY" | "CNY" | "XAF" | "INR" | "BRL" | "RUB" | "AED";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("EUR");

  // Charger la devise depuis localStorage au montage
  useEffect(() => {
    const saved = localStorage.getItem("preferred-currency");
    if (saved && isValidCurrency(saved)) {
      setCurrency(saved as Currency);
    }
  }, []);

  // Sauvegarder la devise dans localStorage quand elle change
  useEffect(() => {
    localStorage.setItem("preferred-currency", currency);
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}

function isValidCurrency(value: string): value is Currency {
  return ["EUR", "USD", "GBP", "JPY", "CNY", "XAF", "INR", "BRL", "RUB", "AED"].includes(value);
}
