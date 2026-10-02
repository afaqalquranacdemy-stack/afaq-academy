import { academyContact } from "@/data/site";

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
          <a
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
          </a>

          <a
            href={`/free-trial?lang=${isArabic ? "ar" : "en"}`}
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#0B1120] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-teal-700 sm:px-5 sm:text-sm"
          >
            {isArabic ? "احجز تجربة مجانية" : "Book Free Trial"}
          </a>
        </div>
      </header>

      <main className="min-h-screen">{children}</main>

      <a
        id="focused-whatsapp"
        href={academyContact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isArabic ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
        title={isArabic ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
        className="fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_8px_25px_rgba(34,197,94,0.38)] transition-transform hover:scale-105 md:bottom-6 md:left-6 md:h-14 md:w-14"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-6 w-6 md:h-7 md:w-7"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.03-.5.25-.23.3-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.52 2.39 3.74 3.32.74.31 1.32.5 1.77.64.74.24 1.42.2 1.96.12.6-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.48-.08-.14-.29-.22-.6-.37s-1.84-.91-2.13-1.01c-.28-.11-.49-.16-.7.16-.2.32-.8 1.01-.98 1.22-.18.21-.36.24-.67.08-.31-.15-1.31-.48-2.5-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.13-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53z" />
        </svg>
      </a>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              var link = document.getElementById('focused-whatsapp');
              if (!link) return;
              link.addEventListener('click', function () {
                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
                var page = window.location.pathname;
                window.dataLayer.push({
                  event: 'whatsapp_click',
                  page: page,
                  location: 'focused_course_landing'
                });
                window.gtag('event', 'whatsapp_click', {
                  send_to: 'G-J3KX3TZ4F2',
                  page: page,
                  location: 'focused_course_landing'
                });
                window.gtag('event', 'conversion', {
                  send_to: 'AW-18440732535/PqGrCKXtsoEdEPf-nNlE',
                  value: 1,
                  currency: 'EGP'
                });
              }, { passive: true });
            })();
          `,
        }}
      />
    </>
  );
}
