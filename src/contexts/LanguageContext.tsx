"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Lang, Translatable } from "@/types";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: <T = string>(item: Translatable<T> | T | undefined, fallback?: T) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "yf_portfolio_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to English as requested, lazy-load from localStorage if available
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      try {
        const savedLang = localStorage.getItem(STORAGE_KEY) as Lang | null;
        if (savedLang === "en" || savedLang === "id") {
          return savedLang;
        }
      } catch {
        // localStorage unavailable
      }
    }
    return "en";
  });

  useEffect(() => {
    try {
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "id" : "en");
  };

  // Helper function to resolve translatable values cleanly
  const t = <T = string>(item: Translatable<T> | T | undefined, fallback?: T): T => {
    if (item === undefined || item === null) {
      return (fallback ?? ("" as unknown)) as T;
    }
    if (typeof item === "object" && item !== null && "en" in item && "id" in item) {
      const trans = item as Translatable<T>;
      return trans[lang] ?? trans.en ?? ((fallback ?? ("" as unknown)) as T);
    }
    return item as T;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
