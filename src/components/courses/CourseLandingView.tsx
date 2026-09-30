import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/courses";
import { startingMonthlyPrice } from "@/data/pricing";

type CourseLandingViewProps = {
  category: string;
  intent?: string;
  lang?: string;
};

type Copy = {
  eyebrow: { ar: string; en: string };
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  cta: { ar: string; en: string };
};

const landingCopy: Record<string, Copy> = {
  Arabic: {
    eyebrow: { ar: "دروس عربية مباشرة 1 إلى 1", en: "Private 1-to-1 Arabic Lessons" },
    title: { ar: "تعلم العربية أونلاين مع معلمين متخصصين", en: "Learn Arabic Online with Expert Tutors" },
    description: {
      ar: "طوّر القراءة والتحدث والقواعد والعربية القرآنية من خلال دروس مباشرة مخصصة لمستواك مع مواعيد مرنة وخطة تعلم شخصية.",
      en: "Build your Arabic reading, speaking, grammar and Quranic Arabic skills through personalized live lessons, flexible schedules and a study plan built around your level.",
    },
    cta: { ar: "احجز تجربة عربية مجانية", en: "Book Free Arabic Trial" },
  },
  Quran: {
    eyebrow: { ar: "دروس قرآن مباشرة 1 إلى 1", en: "Private 1-to-1 Quran Lessons" },
    title: { ar: "تعلم القرآن أونلاين مع معلمين مؤهلين", en: "Learn Quran Online with Qualified Tutors" },
    description: {
      ar: "حسّن التلاوة والحفظ والفهم من خلال دروس قرآن مباشرة فردية، وخطة تعلم تناسب مستواك ووقتك.",
      en: "Improve Quran recitation, memorization and understanding through private live lessons with qualified tutors and a learning plan tailored to your level and schedule.",
    },
    cta: { ar: "احجز تجربة قرآن مجانية", en: "Book Free Quran Trial" },
  },
  tajweed: {
    eyebrow: { ar: "دروس تجويد مباشرة 1 إلى 1", en: "Private 1-to-1 Tajweed Lessons" },
    title: { ar: "تعلم التجويد أونلاين مع معلمي قرآن متخصصين", en: "Learn Tajweed Online with Expert Quran Tutors" },
    description: {
      ar: "أتقن مخارج الحروف وأحكام التجويد وصحح تلاوتك من خلال دروس مباشرة فردية وخطة تناسب مستواك.",
      en: "Master pronunciation, Tajweed rules and accurate Quran recitation through private live lessons with expert tutors and a personalized learning plan.",
    },
    cta: { ar: "احجز تجربة تجويد مجانية", en: "Book Free Tajweed Trial" },
  },
  Kids: {
    eyebrow: { ar: "تعليم إسلامي ممتع للأطفال", en: "Engaging 1-to-1 Lessons for Kids" },
    title: { ar: "دروس قرآن وعربية أونلاين للأطفال", en: "Online Quran & Arabic Classes for Kids" },
    description: {
      ar: "ساعد طفلك على بناء أساس قوي في القرآن والعربية والدراسات الإسلامية من خلال دروس فردية مناسبة لعمره مع معلمين صبورين.",
      en: "Help your child build strong Quran, Arabic and Islamic foundations through engaging private lessons, patient tutors and age-appropriate learning plans.",
    },
    cta: { ar: "احجز تجربة مجانية لطفلك", en: "Book Kids Free Trial" },
  },
  "Islamic Studies": {
    eyebrow: { ar: "دروس إسلامية مباشرة 1 إلى 1", en: "Private 1-to-1 Islamic Lessons" },
    title: { ar: "تعلم الدراسات الإسلامية أونلاين", en: "Learn Islamic Studies Online" },
    description: {
      ar: "ادرس الفقه والعقيدة والحديث والسيرة والمعارف الإسلامية الأساسية من خلال دروس منظمة مع معلمين مؤهلين لمستويات مختلفة.",
      en: "Study Fiqh, Aqeedah, Hadith, Seerah and essential Islamic knowledge through structured live lessons with qualified teachers for different learning levels.",
    },
    cta: { ar: "احجز تجربة إسلامية مجانية", en: "Book Free Islamic Trial" },
  },
};

const labels: Record<string, { ar: string; en: string }> = {
  Quran: { ar: "القرآن الكريم", en: "Quran Studies" },
  Arabic: { ar: "اللغة العربية", en: "Arabic Language" },
  "Islamic Studies": { ar: "الدراسات الإسلامية", en: "Islamic Studies" },
  Kids: { ar: "برامج الأطفال", en: "Kids Programs" },
};

export function CourseLandingView({ category, intent = "", lang = "en" }: CourseLandingViewProps) {
  const isRtl = lang.toLowerCase() === "ar";
  const key = category === "Quran" && intent.toLowerCase() === "tajweed" ? "tajweed" : category;
  const copy = landingCopy[key] ?? landingCopy[category] ?? landingCopy.Quran;

  let filtered = courses.filter((course) => course.category === category);
  if (key === "tajweed") {
    const tajweedCourses = filtered.filter((course) =>
      [course.slug, course.title.en, course.description.en].join(" ").toLowerCase().includes("tajweed")
    );
    if (tajweedCourses.length) filtered = tajweedCourses;
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section id="courses-grid" className="scroll-mt-20 border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 pb-12 pt-28 md:px-8 md:pb-16 md:pt-36">
          <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.3)] md:rounded-[2.25rem] md:px-10 md:py-11">
            <span className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-teal-700">
              {isRtl ? copy.eyebrow.ar : copy.eyebrow.en}
            </span>
            <h1 className={`max-w-4xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl ${isRtl ? "font-cairo leading-[1.35]" : "font-serif leading-[1.08]"}`}>
              {isRtl ? copy.title.ar : copy.title.en}
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
              {isRtl ? copy.description.ar : copy.description.en}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 sm:text-sm">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">{isRtl ? "دروس مباشرة فردية" : "Live 1-to-1 lessons"}</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">{isRtl ? "مواعيد مرنة" : "Flexible schedules"}</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">{isRtl ? "معلمون متخصصون" : "Qualified tutors"}</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">{isRtl ? "تجربة مجانية" : "Free trial"}</span>
            </div>

            <Link
              href={`/free-trial?lang=${isRtl ? "ar" : "en"}`}
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#0B1120] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition-colors hover:bg-teal-700"
            >
              {isRtl ? copy.cta.ar : copy.cta.en}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto mb-8 max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
              {isRtl ? labels[category]?.ar : labels[category]?.en}
            </p>
            <h2 className={`mt-2 text-2xl font-bold text-slate-950 sm:text-3xl md:text-4xl ${isRtl ? "font-cairo" : "font-serif"}`}>
              {isRtl ? "اختر البرنامج المناسب لك" : "Choose the program that fits your goals"}
            </h2>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <article key={course.id} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_14px_45px_-30px_rgba(15,23,42,0.35)]">
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <Image
                    src={course.image}
                    alt={isRtl ? course.title.ar : course.title.en}
                    fill
                    quality={65}
                    sizes="(max-width: 768px) calc(100vw - 2rem), (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold">
                    <span className="rounded-full bg-teal-50 px-2.5 py-1 text-teal-700">{isRtl ? labels[course.category]?.ar : course.category}</span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{course.level}</span>
                  </div>
                  <h3 className={`text-xl font-bold leading-tight text-slate-950 ${isRtl ? "font-cairo" : ""}`}>
                    {isRtl ? course.title.ar : course.title.en}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {isRtl ? course.description.ar : course.description.en}
                  </p>
                  <div className="mt-5 flex items-end justify-between gap-4 border-t border-slate-100 pt-4">
                    <div>
                      <div className="text-xs text-slate-500">{isRtl ? "الخطط تبدأ من" : "Plans from"}</div>
                      <div className="text-lg font-black text-slate-950">${startingMonthlyPrice}{isRtl ? "/شهريًا" : "/mo"}</div>
                    </div>
                    <Link href={`/courses/${course.slug}?lang=${isRtl ? "ar" : "en"}`} className="rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-teal-700">
                      {isRtl ? "التفاصيل" : "View course"}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-5xl rounded-[1.75rem] bg-[#0B1120] px-6 py-8 text-center text-white md:px-10 md:py-10">
            <h2 className={`text-2xl font-bold md:text-3xl ${isRtl ? "font-cairo" : "font-serif"}`}>
              {isRtl ? "ابدأ بخطة تعلم تناسب مستواك" : "Start with a learning plan built for your level"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              {isRtl ? "احجز تجربتك المجانية وتحدث مع فريقنا لاختيار البرنامج والمعلم والموعد المناسب لك." : "Book a free trial and let our team match you with the right program, tutor and schedule."}
            </p>
            <Link href={`/free-trial?lang=${isRtl ? "ar" : "en"}`} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-teal-500 px-7 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-teal-400">
              {isRtl ? copy.cta.ar : copy.cta.en}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
