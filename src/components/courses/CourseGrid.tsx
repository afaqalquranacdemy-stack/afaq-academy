"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { courses, categories } from "@/data/courses";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Clock,
  Users,
  ArrowRight,
  Filter,
  LayoutGrid,
  List,
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

function CourseGridContent() {
  const { isRtl } = useLanguage();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");

  useEffect(() => {
    const cat = searchParams.get("category");
    const lvl = searchParams.get("level");
    if (cat) setActiveCategory(cat);
    if (lvl) setActiveLevel(lvl);
  }, [searchParams]);

  const filteredCourses = courses.filter((c) => {
    const catMatch = activeCategory === "all" || c.category === activeCategory;
    const lvlMatch = activeLevel === "all" || c.level === activeLevel;
    return catMatch && lvlMatch;
  });

  const uniqueLevels = [
    "all",
    ...Array.from(new Set(courses.map((c) => c.level))),
  ];

  return (
    <section id="courses-grid" className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-500/[0.02] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/[0.02] blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
            <BookOpen className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
            {isRtl ? "كتالوج البرامج" : "Program Catalog"}
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl
              ? "جميع البرامج الأكاديمية"
              : "All Academic Programs"}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {isRtl
              ? "تصفح جميع برامجنا الأكاديمية واختر ما يناسب مستواك وأهدافك"
              : "Browse all our academic programs and choose what fits your level and goals"}
          </p>
        </motion.div>

        {/* ═══ Filter Bar ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="glass-card !rounded-2xl p-4 md:p-5 hover:!translate-y-0 hover:!scale-100 border-slate-200/50">
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              {/* Category Filters */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {isRtl ? "التصنيف" : "Category"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["all", ...categories].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${activeCategory === cat
                        ? "bg-[#0B1120] text-white shadow-lg shadow-slate-900/20"
                        : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                        }`}
                    >
                      {isRtl
                        ? categoryLabels[cat]?.ar
                        : categoryLabels[cat]?.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-16 bg-slate-200" />

              {/* Level Filters */}
              <div className="shrink-0">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {isRtl ? "المستوى" : "Level"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {uniqueLevels.map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setActiveLevel(lvl)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${activeLevel === lvl
                        ? "bg-teal-600 text-white shadow-lg shadow-teal-600/20"
                        : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                        }`}
                    >
                      {isRtl ? levelLabels[lvl]?.ar : levelLabels[lvl]?.en}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        <div className="max-w-7xl mx-auto mb-8">
          <p className="text-sm text-slate-400">
            {isRtl
              ? `عرض ${filteredCourses.length} برنامج`
              : `Showing ${filteredCourses.length} programs`}
          </p>
        </div>

        {/* ═══ Course Grid ═══ */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={course.id}
                className="glass-card p-2 rounded-[2.5rem] bg-white border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col"
              >
                {/* ── Image ── */}
                <div className="relative h-52 rounded-[2rem] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={isRtl ? course.title.ar : course.title.en}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-fill transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                    <div
                      className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${categoryGradients[course.category]} text-white text-[10px] font-bold shadow-lg`}
                    >
                      {isRtl
                        ? categoryLabels[course.category]?.ar
                        : course.category}
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-md">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-[11px] font-bold text-slate-800">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 text-white/80 text-[10px]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {isRtl ? course.duration.ar : course.duration.en}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {course.students} {isRtl ? "طالب" : ""}
                    </span>
                  </div>
                </div>

                {/* ── Content ── */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  {/* Level badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${levelColors[course.level]}`}
                    >
                      {isRtl
                        ? levelLabels[course.level]?.ar
                        : course.level}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight ${isRtl ? "font-cairo" : ""}`}
                  >
                    {isRtl ? course.title.ar : course.title.en}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {isRtl ? course.description.ar : course.description.en}
                  </p>

                  {/* Study plan summary - Total Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="text-center p-2 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-sm font-bold text-slate-900">
                        {course.durationDetails.reduce((acc, curr) => acc + curr.lessons, 0)}
                      </div>
                      <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">
                        {isRtl ? "درس" : "Lessons"}
                      </div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-sm font-bold text-slate-900">
                        {course.durationDetails.reduce((acc, curr) => acc + curr.hours, 0)}
                      </div>
                      <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">
                        {isRtl ? "ساعة" : "Hours"}
                      </div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-sm font-bold text-slate-900">
                        {course.students}
                      </div>
                      <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">
                        {isRtl ? "طالب" : "Students"}
                      </div>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-xl font-black text-slate-900">
                        {isRtl ? course.price.ar : course.price.en}
                      </span>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 text-slate-700 font-bold text-sm group-hover:bg-[#0B1120] group-hover:text-white transition-all duration-300"
                    >
                      {isRtl ? "التفاصيل" : "Details"}
                      <ArrowRight
                        className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`}
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <GraduationCap className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-lg text-slate-400">
              {isRtl
                ? "لا توجد برامج تطابق الفلاتر المحددة"
                : "No programs match the selected filters"}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function CourseGrid() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <CourseGridContent />
    </Suspense>
  );
}
