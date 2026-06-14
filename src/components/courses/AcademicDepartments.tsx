"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { megaMenuData } from "@/data/megaMenu";
import { courses } from "@/data/courses";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const departmentMeta: Record<
  string,
  {
    gradientFrom: string;
    gradientTo: string;
    glow: string;
    descAr: string;
    descEn: string;
    category: string;
  }
> = {
  quran: {
    gradientFrom: "from-teal-500",
    gradientTo: "to-emerald-500",
    glow: "bg-teal-500/15",
    descAr:
      "تلاوة، تجويد، حفظ — مع أسانيد متصلة وإجازات معتمدة من الأزهر الشريف",
    descEn:
      "Recitation, Tajweed, Hifz — with connected chains of narration and Al-Azhar certified Ijazahs",
    category: "Quran",
  },
  arabic: {
    gradientFrom: "from-indigo-500",
    gradientTo: "to-violet-500",
    glow: "bg-indigo-500/15",
    descAr:
      "من الأبجدية إلى البلاغة — برامج متدرجة تفتح أبواب الفهم العميق",
    descEn:
      "From alphabet to rhetoric — progressive programs that unlock deep understanding",
    category: "Arabic",
  },
  islamic: {
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
    glow: "bg-amber-500/15",
    descAr:
      "عقيدة، فقه، حديث وسيرة — دراسة منهجية بإشراف نخبة العلماء",
    descEn:
      "Aqeedah, Fiqh, Hadith & Seerah — systematic study supervised by elite scholars",
    category: "Islamic Studies",
  },
  kids: {
    gradientFrom: "from-rose-500",
    gradientTo: "to-pink-500",
    glow: "bg-rose-500/15",
    descAr:
      "تعلم تفاعلي ممتع مصمم خصيصاً للأطفال بأساليب تربوية حديثة",
    descEn:
      "Fun interactive learning designed specifically for children with modern educational methods",
    category: "Kids",
  },
};

export function AcademicDepartments() {
  const { isRtl } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-white relative section-divider overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6">
            {isRtl ? "الأقسام الأكاديمية" : "Academic Departments"}
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl
              ? "اختر مسارك العلمي"
              : "Choose Your Academic Path"}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {isRtl
              ? "أربعة أقسام أكاديمية متكاملة تغطي جميع جوانب العلم الشرعي واللغة العربية"
              : "Four comprehensive academic departments covering all aspects of Islamic scholarship and Arabic language"}
          </p>
        </motion.div>

        {/* Department Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {megaMenuData.map((dept, idx) => {
            const meta = departmentMeta[dept.id] || departmentMeta.quran;
            const deptCourses = courses.filter(c => c.category === meta.category).slice(0, 3);
            const coursesCount = courses.filter(c => c.category === meta.category).length;

            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-card p-8 md:p-10 rounded-[2.5rem] bg-[#F8FAFC] border border-slate-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Decorative glow */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 ${meta.glow} blur-[80px] rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-100 opacity-50`}
                />

                <div className="relative z-10">
                  {/* Icon + Count */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${meta.gradientFrom} ${meta.gradientTo} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                    >
                      <dept.icon className="w-8 h-8 text-white" />
                    </div>
                    <span
                      className={`px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-600 shadow-sm`}
                    >
                      {isRtl ? `${coursesCount} برامج` : `${coursesCount} Programs`}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors ${isRtl ? "font-cairo" : ""}`}
                  >
                    {isRtl ? dept.titleAr : dept.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 leading-relaxed mb-6">
                    {isRtl ? meta.descAr : meta.descEn}
                  </p>

                  {/* Course list */}
                  <div className="space-y-3 mb-6">
                    {deptCourses.map((course) => (
                      <Link
                        key={course.id}
                        href={`/courses/${course.slug}`}
                        className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all duration-300 group/c"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${meta.gradientFrom} ${meta.gradientTo} shrink-0`}
                        />
                        <span className="text-sm font-medium text-slate-700 flex-grow">
                          {isRtl ? course.title.ar : course.title.en}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 text-slate-300 group-hover/c:text-teal-500 transition-colors ${isRtl ? "rotate-180" : ""}`}
                        />
                      </Link>
                    ))}
                  </div>

                  {/* Explore Button */}
                  <Link
                    href={`/courses?category=${encodeURIComponent(meta.category)}#courses-grid`}
                    className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${meta.gradientFrom} ${meta.gradientTo} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                  >
                    {isRtl ? "استكشف القسم" : "Explore Department"}
                    <ArrowRight
                      className={`w-4 h-4 text-teal-500 ${isRtl ? "rotate-180" : ""}`}
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
