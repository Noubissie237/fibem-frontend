"use client";

import { useState, useRef, useEffect } from "react";
import { IconChevronDown } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

export type Currency = "EUR" | "USD" | "GBP" | "JPY" | "CNY" | "XAF" | "INR" | "BRL" | "RUB" | "AED";

interface CurrencySelectorProps {
  currentCurrency?: Currency;
  onCurrencyChange?: (currency: Currency) => void;
}

const currencyLabels: Record<Currency, { label: string; symbol: string; name: string }> = {
  EUR: { label: "EUR", symbol: "€", name: "Euro" },
  USD: { label: "USD", symbol: "$", name: "US Dollar" },
  GBP: { label: "GBP", symbol: "£", name: "British Pound" },
  JPY: { label: "JPY", symbol: "¥", name: "Japanese Yen" },
  CNY: { label: "CNY", symbol: "¥", name: "Chinese Yuan" },
  XAF: { label: "XAF", symbol: "FCFA", name: "CFA Franc" },
  INR: { label: "INR", symbol: "₹", name: "Indian Rupee" },
  BRL: { label: "BRL", symbol: "R$", name: "Brazilian Real" },
  RUB: { label: "RUB", symbol: "₽", name: "Russian Ruble" },
  AED: { label: "AED", symbol: "د.إ", name: "UAE Dirham" },
};

const currencies: Currency[] = ["EUR", "USD", "GBP", "JPY", "CNY", "XAF", "INR", "BRL", "RUB", "AED"];

export function CurrencySelector({ 
  currentCurrency = "EUR",
  onCurrencyChange 
}: CurrencySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currentCurrency);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
    if (onCurrencyChange) {
      onCurrencyChange(currency);
    }
  };

  const currentSymbol = currencyLabels[selectedCurrency].symbol;

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        className={cn(
          "flex items-center gap-1.5 px-2 py-1.5 text-sm text-white hover:text-neutral-900 rounded-lg transition-colors",
          isOpen && "bg-neutral-50"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="font-semibold">{currentSymbol}</span>
        <span className="hidden sm:inline">{selectedCurrency}</span>
        <IconChevronDown
          className={cn(
            "w-3 h-3 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-mega border border-neutral-100 overflow-hidden animate-fade-in z-50">
          <ul role="listbox" className="py-1 max-h-80 overflow-y-auto">
            {currencies.map((currency) => {
              const { label, symbol, name } = currencyLabels[currency];
              return (
                <li key={currency}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selectedCurrency === currency}
                    className={cn(
                      "flex items-center justify-between w-full px-3 py-2 text-sm text-left transition-colors",
                      selectedCurrency === currency
                        ? "bg-brand-blue-50 text-brand-blue"
                        : "text-neutral-700 hover:bg-neutral-50"
                    )}
                    onClick={() => handleCurrencyChange(currency)}
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-semibold w-8">{symbol}</span>
                      <span className="font-medium">{label}</span>
                    </span>
                    <span className="text-xs text-neutral-500">{name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
