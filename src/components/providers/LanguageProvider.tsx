"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Locale, defaultLocale, isRtl as checkRtl } from "@/i18n/config";
import en from "@/i18n/dictionaries/en";
import ar from "@/i18n/dictionaries/ar";

type Dictionary = typeof en;

interface LanguageContextType {
  locale: Locale;
  t: Dictionary;
  isRtl: boolean;
  switchLocale: (locale: Locale) => void;
}

const dictionaries: Record<Locale, Dictionary> = { en, ar };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const switchLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = checkRtl(newLocale) ? "rtl" : "ltr";
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        t: dictionaries[locale],
        isRtl: checkRtl(locale),
        switchLocale,
      }}
    >
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
