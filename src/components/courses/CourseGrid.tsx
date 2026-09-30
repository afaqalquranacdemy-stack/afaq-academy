"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { courses, categories } from "@/data/courses";
import { startingMonthlyPrice } from "@/data/pricing";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Clock,
  Users,
  ArrowRight,
  Filter,
  BookOpen,
  Award,
  GraduationCap,
} from "lucide-react";

const categoryLabels: Record<string, { ar: string; en: string }> = {
  all: { ar: "الكل", en: "All Programs" },
  Quran: { ar: "القرآن الكريم", en: "Quran Studies" },
  Arabic: { ar: "اللغة العربية", en: "Arabic Language" },
  "Islamic Studies": { ar: "الدراسات الإسلامية", en: "Islamic Studies" },
  Kids: { ar: "برامج الأطفال", en: "Kids Programs" },
};

const levelLabels: Record<string, { ar: string; en: string }> = {
  all: { ar: "جميع المستويات", en: "All Levels" },
  Beginner: { ar: "مبتدئ", en: "Beginner" },
  Intermediate: { ar: "متوسط", en: "Intermediate" },
  Advanced: { ar: "متقدم", en: "Advanced" },
  "All Levels": { ar: "جميع المستويات", en: "All Levels" },
};

const levelColors: Record<string, string> = {
  Beginner: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Intermediate: "bg-amber-50 text-amber-700 border-amber-200",
  Advanced: "bg-rose-50 text-rose-700 border-rose-200",
  "All Levels": "bg-indigo-50 text-indigo-700 border-indigo-200",
};

const categoryGradients: Record<string, string> = {
  Quran: "from-teal-500 to-emerald-500",
  Arabic: "from-indigo-500 to-violet-500",
  "Islamic Studies": "from-amber-500 to-orange-500",
  Kids: "from-rose-500 to-pink-500",
};

const categoryOptions = ["all", ...categories];
const levelOptions = ["all", "Beginner", "Intermediate", "Advanced"];

type LandingCopy = {
  eyebrow: { ar: string; en: string };
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  cta: { ar: string; en: string };
};

const landingCopy: Record<string, LandingCopy> = {
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

interface CourseGridProps {
  initialQuery?: string;
  initialCategory?: string;
  initialLevel?: string;
  initialIntent?: string;
}

function normalizeCategory(value = "") {
  return categoryOptions.includes(value) ? value : "all";
}

function normalizeLevel(value = "") {
  return levelOptions.includes(value) ? value : "all";
}

function CourseGridContent({
  initialQuery = "",
  initialCategory = "all",
  initialLevel = "all",
  initialIntent = "",
}: CourseGridProps) {
  const { isRtl } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(normalizeCategory(initialCategory));
  const [activeLevel, setActiveLevel] = useState(normalizeLevel(initialLevel));
  const [query, setQuery] = useState(initialQuery.trim());

  useEffect(() => {
    setActiveCategory(normalizeCategory(initialCategory));
    setActiveLevel(normalizeLevel(initialLevel));
    setQuery(initialQuery.trim());
  }, [initialCategory, initialLevel, initialQuery]);

  const normalizedQuery = query.toLocaleLowerCase();
  const normalizedIntent = initialIntent.trim().toLocaleLowerCase();
  const landingKey =
    activeCategory === "Quran" && normalizedIntent === "tajweed"
      ? "tajweed"
      : activeCategory;
  const activeLanding = activeCategory === "all" ? null : landingCopy[landingKey];

  const filteredCourses = courses.filter((c) => {
    const catMatch = activeCategory === "all" || c.category === activeCategory;
    const lvlMatch = activeLevel === "all" || c.level === activeLevel || c.level === "All Levels";
    const searchableText = [
      c.title.ar, c.title.en, c.description.ar, c.description.en, c.overview.ar,
      c.overview.en, c.category, c.level, ...c.outcomes.ar, ...c.outcomes.en,
    ].join(" ").toLocaleLowerCase();
    const queryMatch = !normalizedQuery || searchableText.includes(normalizedQuery);
    return catMatch && lvlMatch && queryMatch;
  });

  return (
    <section id="courses-grid" className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-500/[0.02] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/[0.02] blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {activeLanding ? (
          <div className="max-w-5xl mx-auto mb-10 md:mb-12">
            <div className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem] border border-slate-200/80 bg-white px-6 py-8 md:px-10 md:py-11 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.28)]">
              <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-teal-100/70 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-indigo-100/55 blur-3xl pointer-events-none" />
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-teal-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-teal-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                    {isRtl ? activeLanding.eyebrow.ar : activeLanding.eyebrow.en}
                  </span>
                  <h2 className={`mb-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl ${isRtl ? "font-cairo leading-[1.35]" : "font-serif leading-[1.08]"}`}>
                    {isRtl ? activeLanding.title.ar : activeLanding.title.en}
                  </h2>
                  <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                    {isRtl ? activeLanding.description.ar : activeLanding.description.en}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-500 sm:text-sm">
                    <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" />{isRtl ? "دروس مباشرة فردية" : "Live 1-to-1 lessons"}</span>
                    <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" />{isRtl ? "مواعيد مرنة" : "Flexible schedules"}</span>
                    <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" />{isRtl ? "تجربة مجانية" : "Free trial"}</span>
                  </div>
                </div>

                <div className="lg:pl-4">
                  <Link
                    href={`/free-trial?lang=${isRtl ? "ar" : "en"}`}
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0B1120] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 lg:w-auto"
                  >
                    {isRtl ? activeLanding.cta.ar : activeLanding.cta.en}
                    <ArrowRight className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 ${isRtl ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
              <BookOpen className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
              {isRtl ? "كتالوج البرامج" : "Program Catalog"}
            </span>
            <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 ${isRtl ? "font-cairo" : "font-serif"}`}>
              {isRtl ? "جميع البرامج الأكاديمية" : "All Academic Programs"}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed">
              {isRtl ? "تصفح جميع برامجنا الأكاديمية واختر ما يناسب مستواك وأهدافك" : "Browse all our academic programs and choose what fits your level and goals"}
            </p>
          </div>
        )}

        <div className="max-w-5xl mx-auto mb-12">
          <div className="glass-card !rounded-2xl p-4 md:p-5 hover:!translate-y-0 hover:!scale-100 border-slate-200/50">
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2"><Filter className="w-3.5 h-3.5 text-slate-400" /><span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{isRtl ? "التصنيف" : "Category"}</span></div>
                <div className="flex flex-wrap gap-2">
                  {["all", ...categories].map((cat) => (
                    <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${activeCategory === cat ? "bg-[#0B1120] text-white shadow-lg shadow-slate-900/20" : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"}`}>
                      {isRtl ? categoryLabels[cat]?.ar : categoryLabels[cat]?.en}
                    </button>
                  ))}
                </div>
              </div>
              <div className="hidden md:block w-px h-16 bg-slate-200" />
              <div className="shrink-0">
                <div className="flex items-center gap-2 mb-2"><Award className="w-3.5 h-3.5 text-slate-400" /><span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{isRtl ? "المستوى" : "Level"}</span></div>
                <div className="flex flex-wrap gap-2">
                  {levelOptions.map((lvl) => (
                    <button key={lvl} onClick={() => setActiveLevel(lvl)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${activeLevel === lvl ? "bg-teal-600 text-white shadow-lg shadow-teal-600/20" : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"}`}>
                      {isRtl ? levelLabels[lvl]?.ar : levelLabels[lvl]?.en}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-8 flex flex-wrap items-center gap-3">
          <p className="text-sm text-slate-400">{isRtl ? `عرض ${filteredCourses.length} برنامج` : `Showing ${filteredCourses.length} programs`}</p>
          {query && <Link href="/courses#courses-grid" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 hover:border-teal-300 hover:text-teal-700 transition-colors">{isRtl ? `مسح البحث: ${query}` : `Clear search: ${query}`}</Link>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredCourses.map((course) => (
              <div key={course.id} className="glass-card p-2 rounded-[1.5rem] md:rounded-[2.5rem] bg-white border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col">
                <div className="relative h-52 rounded-[1.2rem] md:rounded-[2rem] overflow-hidden">
                  <Image src={course.image} alt={isRtl ? course.title.ar : course.title.en} fill sizes="(max-width: 768px) calc(100vw - 3rem), (max-width: 1024px) 50vw, 33vw" quality={60} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                    <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${categoryGradients[course.category]} text-white text-[10px] font-bold shadow-lg`}>{isRtl ? categoryLabels[course.category]?.ar : course.category}</div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-md"><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><span className="text-[11px] font-bold text-slate-800">{course.rating}</span></div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 text-white/80 text-[10px]">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{isRtl ? course.duration.ar : course.duration.en}</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.students} {isRtl ? "طالب" : ""}</span>
                  </div>
                </div>

                <div className="p-4 md:p-7 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4"><span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${levelColors[course.level]}`}>{isRtl ? levelLabels[course.level]?.ar : course.level}</span></div>
                  <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight ${isRtl ? "font-cairo" : ""}`}>{isRtl ? course.title.ar : course.title.en}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{isRtl ? course.description.ar : course.description.en}</p>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="text-center p-2 bg-slate-50 rounded-xl border border-slate-100"><div className="text-sm font-bold text-slate-900">{course.durationDetails.reduce((acc, curr) => acc + curr.lessons, 0)}</div><div className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">{isRtl ? "درس" : "Lessons"}</div></div>
                    <div className="text-center p-2 bg-slate-50 rounded-xl border border-slate-100"><div className="text-sm font-bold text-slate-900">{course.durationDetails.reduce((acc, curr) => acc + curr.hours, 0)}</div><div className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">{isRtl ? "ساعة" : "Hours"}</div></div>
                    <div className="text-center p-2 bg-slate-50 rounded-xl border border-slate-100"><div className="text-sm font-bold text-slate-900">{course.students}</div><div className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">{isRtl ? "طالب" : "Students"}</div></div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div><span className="text-xl font-black text-slate-900">{isRtl ? `يبدأ من $${startingMonthlyPrice}/شهرياً` : `Plans from $${startingMonthlyPrice}/mo`}</span></div>
                    <Link href={`/courses/${course.slug}`} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 text-slate-700 font-bold text-sm group-hover:bg-[#0B1120] group-hover:text-white transition-all duration-300">{isRtl ? "التفاصيل" : "Details"}<ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} /></Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <GraduationCap className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-lg text-slate-400">{isRtl ? "لا توجد برامج تطابق الفلاتر المحددة" : "No programs match the selected filters"}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export function CourseGrid(props: CourseGridProps) {
  return <CourseGridContent {...props} />;
}
