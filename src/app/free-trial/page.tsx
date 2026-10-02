import type { Metadata } from "next";
import { FreeTrialForm } from "@/components/landing/FreeTrialForm";

export const metadata: Metadata = {
  title: "Free Trial | Online Quran, Arabic & Islamic Studies",
  description:
    "Book a free 1-to-1 trial with Afaq Al-Quran Academy. Learn Quran, Arabic, and Islamic Studies online with flexible scheduling and personalized instruction.",
  alternates: {
    canonical: "https://afaqalquran.com/free-trial",
  },
  openGraph: {
    title: "Book a Free Trial | Afaq Al-Quran Academy",
    description:
      "Start with a free 1-to-1 online trial for Quran, Arabic, or Islamic Studies.",
    url: "https://afaqalquran.com/free-trial",
    type: "website",
  },
};

const copy = {
  en: {
    eyebrow: "Free 1-to-1 Trial",
    title: "Start with a lesson built around your level",
    body:
      "Tell us what you want to learn and when you are available. We will use the trial to understand your level and recommend the right tutor and learning path.",
    points: [
      "No payment required",
      "Live 1-to-1 session",
      "Flexible scheduling",
      "Quran, Tajweed, Arabic, Islamic Studies & Ijazah",
    ],
    formEyebrow: "Start here",
    formTitle: "Book your free trial",
    formBody:
      "Complete the short form and our team will contact you to arrange the next step.",
    processTitle: "What happens next?",
    steps: [
      ["1", "We review your request", "Your goals, level and preferred schedule guide the recommendation."],
      ["2", "We match the right tutor", "You are paired with a tutor suited to the subject and level you need."],
      ["3", "You attend your free trial", "Experience the lesson first, then decide whether you want to continue."],
    ],
  },
  ar: {
    eyebrow: "حصة تجريبية فردية مجانية",
    title: "ابدأ بحصة مصممة حول مستواك وهدفك",
    body:
      "أخبرنا بما تريد دراسته والموعد المناسب لك. نستخدم الحصة التجريبية لتحديد مستواك وترشيح المعلم والمسار الأنسب.",
    points: [
      "لا يتطلب أي دفع",
      "حصة مباشرة فردية",
      "مواعيد مرنة",
      "القرآن والتجويد والعربية والدراسات الإسلامية والإجازة",
    ],
    formEyebrow: "ابدأ من هنا",
    formTitle: "احجز تجربتك المجانية",
    formBody:
      "أكمل النموذج المختصر وسيتواصل معك فريقنا لترتيب الخطوة التالية.",
    processTitle: "ماذا يحدث بعد ذلك؟",
    steps: [
      ["1", "نراجع طلبك", "نستخدم هدفك ومستواك والمواعيد المناسبة لك لتحديد المسار الأفضل."],
      ["2", "نرشح المعلم المناسب", "يتم اختيار المعلم وفق المادة والمستوى الذي تحتاجه."],
      ["3", "تحضر الحصة المجانية", "جرّب الحصة أولًا ثم قرر إذا كنت ترغب في الاستمرار."],
    ],
  },
} as const;

export default async function FreeTrialPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const locale = params.lang === "ar" ? "ar" : "en";
  const t = copy[locale];

  return (
    <div className="paid-landing-page min-h-screen bg-[#F8FAFC] text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#071814] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 18%, rgba(20,184,166,.2), transparent 31%), radial-gradient(circle at 84% 25%, rgba(200,155,60,.16), transparent 27%), linear-gradient(135deg, #061511 0%, #0A2D26 52%, #071814 100%)",
          }}
        />

        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-4 pb-16 pt-32 sm:px-6 md:px-8 md:pb-20 md:pt-40 lg:grid-cols-[1fr_.88fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-white/[0.06] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal-100 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
              {t.eyebrow}
            </div>

            <h1 className="max-w-4xl text-[2.35rem] font-black leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[4.1rem]">
              {t.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl md:leading-9">
              {t.body}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.points.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-300/15 text-teal-200">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold leading-6 text-slate-200 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.97] p-5 text-slate-950 shadow-[0_30px_90px_-45px_rgba(0,0,0,.75)] sm:p-7">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#9A6E1D]">
              {t.formEyebrow}
            </span>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.02em] sm:text-3xl">
              {t.formTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{t.formBody}</p>
            <div className="mt-6">
              <FreeTrialForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl">
              {t.processTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.steps.map(([number, title, body]) => (
              <article
                key={number}
                className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFC] p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-sm font-black text-teal-700">
                  {number}
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
