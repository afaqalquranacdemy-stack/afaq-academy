import { NextRequest, NextResponse } from "next/server";
import { Locale, locales } from "./i18n/config";

const LOCALE_COOKIE = "NEXT_LOCALE";
const LOCALE_HEADER = "x-afaq-locale";

function resolveLocale(value: string | undefined | null): Locale | null {
  return locales.includes(value as Locale) ? (value as Locale) : null;
}

export function proxy(request: NextRequest) {
  const urlLocale = resolveLocale(request.nextUrl.searchParams.get("lang"));
  const cookieLocale = resolveLocale(request.cookies.get(LOCALE_COOKIE)?.value);
  const locale = urlLocale ?? cookieLocale;
  const isFocusedQuranLanding =
    request.nextUrl.pathname === "/online-quran-classes";
  const isFocusedKidsLanding =
    request.nextUrl.pathname === "/online-quran-classes-for-kids";
  const isFocusedTajweedLanding =
    request.nextUrl.pathname === "/online-tajweed-classes";
  const isFocusedArabicLanding =
    request.nextUrl.pathname === "/online-arabic-classes";
  const isFocusedIslamicLanding =
    request.nextUrl.pathname === "/online-islamic-studies";
  const isFocusedFreeTrialLanding =
    request.nextUrl.pathname === "/free-trial";
  const isFocusedLanding =
    isFocusedQuranLanding ||
    isFocusedKidsLanding ||
    isFocusedTajweedLanding ||
    isFocusedArabicLanding ||
    isFocusedIslamicLanding ||
    isFocusedFreeTrialLanding;

  if (!locale && !isFocusedLanding) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  if (
    isFocusedQuranLanding ||
    isFocusedKidsLanding ||
    isFocusedTajweedLanding ||
    isFocusedArabicLanding ||
    isFocusedIslamicLanding
  ) {
    requestHeaders.set(LOCALE_HEADER, "en");
  } else if (isFocusedFreeTrialLanding) {
    requestHeaders.set(LOCALE_HEADER, urlLocale ?? cookieLocale ?? "en");
  } else if (locale) {
    requestHeaders.set(LOCALE_HEADER, locale);
  }
  if (isFocusedLanding) {
    requestHeaders.set("x-afaq-focused-landing", "1");
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (urlLocale) {
    response.cookies.set(LOCALE_COOKIE, urlLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|apple-icon.png|icon.png|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|woff|woff2)$).*)",
  ],
};
