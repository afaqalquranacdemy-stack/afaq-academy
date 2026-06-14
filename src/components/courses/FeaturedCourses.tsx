"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { courses } from "@/data/courses";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Clock,
  Users,
  ArrowRight,
  Award,
  TrendingUp,
} from "lucide-react";

export function FeaturedCourses() {
  const { isRtl } = useLanguage();
  const featured = courses.filter((c) => c.isFeatured).slice(0, 3);

  const levelColors: Record<string, string> = {
    Beginner:
      "bg-emerald-50 text-emerald-700 border-emerald-200",
    Intermediate:
      "bg-amber-50 text-amber-700 border-amber-200",
    Advanced:
      "bg-rose-50 text-rose-700 border-rose-200",
    "All Levels":
      "bg-indigo-50 text-indigo-700 border-indigo-200",
  };

  const categoryColors: Record<string, string> = {
    Quran: "from-teal-500 to-emerald-500",
    Arabic: "from-indigo-500 to-violet-500",
    "Islamic Studies": "from-amber-500 to-orange-500",
    Kids: "from-rose-500 to-pink-500",
  };

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
            <TrendingUp className="w-3.5 h-3.5" />
            {isRtl ? "الأكثر طلباً" : "Most Popular"}
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl
              ? "البرامج الأكثر تميّزاً"
              : "Featured Programs"}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {isRtl
              ? "برامج مختارة بعناية حققت أعلى تقييمات من طلابنا حول العالم"
              : "Handpicked programs that earned the highest ratings from our global students"}
          </p>
        </motion.div>

        {/* Featured Grid — 1 Large + 2 Stacked */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ── Large Featured Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-2 rounded-[2.5rem] bg-white border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col lg:row-span-2"
          >
            {/* Image */}
            <div className="relative h-72 lg:h-[400px] rounded-[2rem] overflow-hidden">
              <Image
                src={featured[0].image}
                alt={isRtl ? featured[0].title.ar : featured[0].title.en}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-fill transition-transform duration-700 group-hover:scale-102"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Top badges */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div
                  className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${categoryColors[featured[0].category]} text-white text-xs font-bold shadow-lg`}
                >
                  {isRtl
                    ? featured[0].category === "Quran"
                      ? "القرآن الكريم"
                      : featured[0].category
                    : featured[0].category}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-slate-800">
                    {featured[0].rating}
                  </span>
                </div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-4 text-white/80 text-xs mb-3">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {isRtl
                      ? featured[0].duration.ar
                      : featured[0].duration.en}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {featured[0].students}{" "}
                    {isRtl ? "طالب" : "Students"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    {featured[0].level}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3
                className={`text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors ${isRtl ? "font-cairo" : ""}`}
              >
                {isRtl ? featured[0].title.ar : featured[0].title.en}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6 flex-grow">
                {isRtl
                  ? featured[0].description.ar
                  : featured[0].description.en}
              </p>

              {/* Outcomes preview */}
              <div className="space-y-2 mb-6">
                {(isRtl
                  ? featured[0].outcomes.ar
                  : featured[0].outcomes.en
                )
                  .slice(0, 3)
                  .map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      </div>
                      <span className="text-sm text-slate-600">
                        {outcome}
                      </span>
                    </div>
                  ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="text-2xl font-black text-slate-900">
                  {isRtl ? featured[0].price.ar : featured[0].price.en}
                </div>
                <Link
                  href={`/courses/${featured[0].slug}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1120] text-white font-bold text-sm hover:bg-teal-600 transition-colors duration-300 shadow-lg"
                >
                  {isRtl ? "عرض البرنامج" : "View Program"}
                  <ArrowRight
                    className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`}
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ── Two Stacked Cards ── */}
          {featured.slice(1, 3).map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card p-2 rounded-[2.5rem] bg-white border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="relative h-56 md:h-auto md:w-64 rounded-[2rem] overflow-hidden shrink-0">
                <Image
                  src={course.image}
                  alt={isRtl ? course.title.ar : course.title.en}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 to-transparent" />

                {/* Category badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${categoryColors[course.category]} text-white text-xs font-bold shadow-lg`}
                >
                  {isRtl
                    ? course.category === "Arabic"
                      ? "اللغة العربية"
                      : course.category === "Islamic Studies"
                        ? "الدراسات الإسلامية"
                        : course.category
                    : course.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1 rounded-lg">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-amber-700">
                      {course.rating}
                    </span>
                  </div>
                  <div
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${levelColors[course.level]}`}
                  >
                    {course.level}
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {course.students}
                  </span>
                </div>

                <h3
                  className={`text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors ${isRtl ? "font-cairo" : ""}`}
                >
                  {isRtl ? course.title.ar : course.title.en}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                  {isRtl ? course.description.ar : course.description.en}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-black text-slate-900">
                      {isRtl ? course.price.ar : course.price.en}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {isRtl ? course.duration.ar : course.duration.en}
                    </span>
                  </div>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors"
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
        </div>
      </div>
    </section>
  );
}
