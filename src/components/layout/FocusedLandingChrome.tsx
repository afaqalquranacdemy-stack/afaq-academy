import Link from "next/link";
import { academyContact } from "@/data/site";
import { TrackedWhatsAppLink } from "@/components/layout/TrackedWhatsAppLink";

type FocusedLandingChromeProps = {
  children: React.ReactNode;
  locale?: "en" | "ar";
};

export function FocusedLandingChrome({
  children,
  locale = "en",
}: FocusedLandingChromeProps) {
  const isArabic = locale === "ar";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 md:px-6 md:pt-5">
        <div className="mx-auto flex min-h-[64px] w-full max-w-[1120px] items-center justify-between rounded-[24px] border border-slate-200/80 bg-white/95 px-4 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.4)] md:px-6">
          <Link
            href={`/?lang=${isArabic ? "ar" : "en"}`}
            className="flex flex-col leading-none"
            aria-label="Afaq Al-Quran Academy"
          >
            <span
              className={`font-bold text-[#075248] ${
                isArabic
                  ? "font-elmessiri text-base"
                  : "text-sm tracking-[0.04em]"
              }`}
            >
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

      <TrackedWhatsAppLink
        href={academyContact.whatsappUrl}
        ariaLabel={isArabic ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
        title={isArabic ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
      />
    </>
  );
}
