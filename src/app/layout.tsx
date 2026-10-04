import type { Metadata } from "next";
import { Playfair_Display, Inter, El_Messiri, Tajawal } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const elMessiri = El_Messiri({
  subsets: ["arabic", "latin"],
  weight: ["700"],
  variable: "--font-elmessiri",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "700", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://afaqalquran.com"),
  title: {
    default: "Afaq Al-Quran | Premium Online Islamic Academy",
    template: "%s | Afaq Al-Quran",
  },
  description:
    "Join Afaq Al-Quran — a premium online academy for Quran, Arabic, and Islamic Studies. Expert Al-Azhar scholars, personalized one-on-one sessions, and flexible scheduling.",
  keywords: [
    "Quran online", "learn Arabic", "Islamic studies", "Tajweed",
    "Hifz", "online Quran classes", "Arabic language course",
    "Islamic academy", "learn Quran online", "Noorani Qaida"
  ],
  authors: [{ name: "Afaq Al-Quran Academy" }],
  creator: "Afaq Al-Quran",
  verification: {
    google: "tT3qWROf1T5KT3uuHML2VYWHoXeUTAghkrLwjx2htJY",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_AR",
    url: "https://afaqalquran.com",
    title: "Afaq Al-Quran | Premium Online Islamic Academy",
    description: "Your Gateway to Sacred Knowledge. Master the Quran, Arabic & Islamic Sciences with expert scholars.",
    siteName: "Afaq Al-Quran",
    images: [
      {
        url: "/images/og-image.webp", // Will need to be added
        width: 1200,
        height: 630,
        alt: "Afaq Al-Quran Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afaq Al-Quran | Premium Online Islamic Academy",
    description: "Your Gateway to Sacred Knowledge. Master the Quran, Arabic & Islamic Sciences.",
    images: ["/images/og-image.webp"],
  },
  alternates: {
    canonical: "https://afaqalquran.com",
    languages: {
      "en": "https://afaqalquran.com/en",
      "ar": "https://afaqalquran.com/ar",
    },
  },
};

import { SiteChrome } from "@/components/layout/SiteChrome";
import { FocusedLandingChrome } from "@/components/layout/FocusedLandingChrome";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { cookies, headers } from "next/headers";
import { Locale, defaultLocale, isRtl, locales } from "@/i18n/config";

function resolveLocale(value: string | undefined | null): Locale | null {
  return locales.includes(value as Locale) ? (value as Locale) : null;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookieStore, headerStore] = await Promise.all([cookies(), headers()]);

  const locale =
    resolveLocale(headerStore.get("x-afaq-locale")) ??
    resolveLocale(cookieStore.get("NEXT_LOCALE")?.value) ??
    defaultLocale;

  const dir = isRtl(locale) ? "rtl" : "ltr";
  const focusedLanding = headerStore.get("x-afaq-focused-landing") === "1";
  const useSystemFonts = focusedLanding && locale === "en";
  const fontVariables = useSystemFonts
    ? ""
    : locale === "ar"
      ? `${elMessiri.variable} ${tajawal.variable}`
      : `${playfair.variable} ${inter.variable}`;

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${fontVariables} font-sans antialiased bg-slate-50 text-slate-900`}
        style={useSystemFonts ? { fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" } : undefined}
      >
        {focusedLanding ? (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function () {
                    window.dataLayer = window.dataLayer || [];
                    window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
                    window.gtag('js', new Date());
                    window.gtag('config', 'G-J3KX3TZ4F2');
                    window.gtag('config', 'AW-18440732535');

                    var script = document.createElement('script');
                    script.async = true;
                    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-J3KX3TZ4F2';
                    document.head.appendChild(script);

                    document.addEventListener('click', function (event) {
                      var target = event.target;
                      if (!(target instanceof Element)) return;
                      var link = target.closest('a[href]');
                      if (!link) return;

                      var rawHref = link.getAttribute('href');
                      if (!rawHref || rawHref.charAt(0) === '#') return;

                      var destination = new URL(rawHref, window.location.origin);
                      if (destination.origin !== window.location.origin) return;

                      var current = new URLSearchParams(window.location.search);
                      var keys = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

                      keys.forEach(function (key) {
                        var value = current.get(key);
                        if (value && !destination.searchParams.has(key)) {
                          destination.searchParams.set(key, value);
                        }
                      });

                      link.setAttribute('href', destination.pathname + destination.search + destination.hash);
                    }, true);
                  })();
                `,
              }}
            />
            <FocusedLandingChrome locale={locale}>{children}</FocusedLandingChrome>
          </>
        ) : (
          <>
            <Script id="google-tag-bootstrap" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
                window.gtag('js', new Date());
                window.gtag('config', 'G-J3KX3TZ4F2');
                window.gtag('config', 'AW-18440732535');
              `}
            </Script>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-J3KX3TZ4F2"
              strategy="lazyOnload"
            />
            <LanguageProvider initialLocale={locale}>
              <Toaster position="top-center" reverseOrder={false} />
              <SiteChrome locale={locale}>{children}</SiteChrome>
            </LanguageProvider>
          </>
        )}
      </body>
    </html>
  );
}
