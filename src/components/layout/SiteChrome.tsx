"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { academyContact } from "@/data/site";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { trackWhatsAppContact } from "@/lib/googleAds";

const Header = dynamic(() =>
  import("@/components/layout/Header").then((module) => module.Header)
);

const Footer = dynamic(() =>
  import("@/components/layout/Footer").then((module) => module.Footer)
);

const FloatingWhatsApp = dynamic(() =>
  import("@/components/layout/FloatingWhatsApp").then((module) => module.FloatingWhatsApp)
);

type SiteChromeProps = {
  children: React.ReactNode;
  focusedLanding?: boolean;
  locale?: "en" | "ar";
};

export function SiteChrome({
  children,
  focusedLanding = false,
  locale = "en",
}: SiteChromeProps) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "220px 0px -5% 0px", threshold: 0.04 }
    );

    const observeRevealElement = (element: Element) => {
      if (!(element instanceof HTMLElement)) return;
      if (element.matches("[data-reveal]:not(.is-visible)")) {
        observer.observe(element);
      }
      element
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
        .forEach((child) => observer.observe(child));
    };

    document
      .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
      .forEach((element) => observer.observe(element));

    // Deferred home sections are inserted after the initial render.
    // Observe only newly-added DOM nodes so their reveal animations still
    // trigger when they approach the viewport without rescanning the page.
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof Element) observeRevealElement(node);
        }
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  const isFreeTrial =
    pathname === "/free-trial" || pathname.startsWith("/free-trial/");

  if (isFreeTrial) {
    return <main className="min-h-screen">{children}</main>;
  }

  if (focusedLanding) {
    const isArabic = locale === "ar";

    return (
      <>
        <header className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 md:px-6 md:pt-5">
          <div className="mx-auto flex min-h-[64px] w-full max-w-[1120px] items-center justify-between rounded-[24px] border border-slate-200/80 bg-white/95 px-4 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.4)] backdrop-blur-md md:px-6">
            <Link href={`/?lang=${isArabic ? "ar" : "en"}`} className="flex flex-col leading-none" aria-label="Afaq Al-Quran Academy">
              <span className={`font-bold text-[#075248] ${isArabic ? "font-elmessiri text-base" : "text-sm tracking-[0.04em]"}`}>
                {isArabic ? "آفَاقُ الْقُرْآنِ" : "AFAQ AL-QURAN"}
              </span>
              <span className="mt-1 text-[9px] font-extrabold tracking-[0.22em] text-[#B8892E]">
                {isArabic ? "أَكَادِيمِيَّة" : "ACADEMY"}
              </span>
            </Link>

            <Link
              href={`/free-trial?lang=${isArabic ? "ar" : "en"}`}
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#0B1120] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-teal-700 sm:px-5 sm:text-sm"
            >
              {isArabic ? "احجز تجربة مجانية" : "Book Free Trial"}
            </Link>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <a
          href={academyContact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppContact("focused_course_landing")}
          aria-label={isArabic ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
          title={isArabic ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
          className="fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_8px_25px_rgba(34,197,94,0.38)] transition-transform hover:scale-105 md:bottom-6 md:left-6 md:h-14 md:w-14"
        >
          <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
        </a>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
