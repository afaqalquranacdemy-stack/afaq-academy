"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
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

function isSupportedLocale(value: string | null): value is Locale {
  return value === "en" || value === "ar";
}

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dir = checkRtl(locale) ? "rtl" : "ltr";
  document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;SameSite=Lax`;
}

export function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    const syncLocaleFromUrl = () => {
      const urlLocale = new URL(window.location.href).searchParams.get("lang");

      if (isSupportedLocale(urlLocale) && urlLocale !== locale) {
        setLocale(urlLocale);
        applyDocumentLocale(urlLocale);
      }
    };

    syncLocaleFromUrl();
    window.addEventListener("popstate", syncLocaleFromUrl);

    return () => window.removeEventListener("popstate", syncLocaleFromUrl);
  }, [locale]);

  const switchLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    applyDocumentLocale(newLocale);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", newLocale);

    window.history.replaceState(
      window.history.state,
      "",
      `${url.pathname}${url.search}${url.hash}`
    );
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
