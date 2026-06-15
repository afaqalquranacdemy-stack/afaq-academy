import type { Metadata } from "next";
import { Playfair_Display, Inter, El_Messiri, Tajawal } from "next/font/google";
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
  weight: ["400", "500", "600", "700"],
  variable: "--font-elmessiri",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
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

import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingWhatsApp } from "../components/layout/FloatingWhatsApp";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { cookies } from "next/headers";
import { Locale, defaultLocale, isRtl } from "@/i18n/config";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale =
    (cookieStore.get("NEXT_LOCALE")?.value as Locale) || defaultLocale;
  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable} ${elMessiri.variable} ${tajawal.variable} font-sans antialiased bg-slate-50 text-slate-900`}
      >
        <LanguageProvider initialLocale={locale}>
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          <main className="min-h-screen">{children}</main>
          <FloatingWhatsApp />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
