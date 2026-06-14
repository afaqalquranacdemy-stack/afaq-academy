export type Locale = "en" | "ar";
export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "ar"];

export function isRtl(locale: Locale): boolean {
  return locale === "ar";
}
