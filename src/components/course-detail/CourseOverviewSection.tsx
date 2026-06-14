"use client";

import { motion } from "framer-motion";
import { CheckCircle2, BookOpen, Clock, Users, Star } from "lucide-react";
import { Course } from "@/data/courses";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface CourseOverviewSectionProps {
  course: Course;
}

export function CourseOverviewSection({ course }: CourseOverviewSectionProps) {
  const { locale, isRtl } = useLanguage();

  const overview = course.overview[locale as "ar" | "en"] || course.overview.en;
  const outcomes = course.outcomes[locale as "ar" | "en"] || course.outcomes.en;

  // Calculate totals from durationDetails
  const totalLessons = course.durationDetails.reduce((acc, curr) => acc + curr.lessons, 0);
  const totalHours = course.durationDetails.reduce((acc, curr) => acc + curr.hours, 0);

  const stats = [
    { icon: BookOpen, label: isRtl ? "إجمالي الدروس" : "Total Lessons", value: totalLessons },
    { icon: Clock, label: isRtl ? "إجمالي الساعات" : "Total Hours", value: totalHours },
    { icon: Users, label: isRtl ? "طالب مسجل" : "Enrolled Students", value: `${course.students}+` },
    { icon: Star, label: isRtl ? "متوسط التقييم" : "Average Rating", value: `${course.rating}/5.0` },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Key Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 -mt-32 relative z-20"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center text-center group hover:shadow-[0_20px_50px_-10px_rgba(20,184,166,0.15)] hover:border-teal-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-slate-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-teal-50 transition-all duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Overview Content */}
            <div className="md:col-span-12 lg:col-span-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className={`text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3 ${isRtl ? "font-cairo" : "font-serif"}`}>
                  <span className="w-8 h-1 rounded-full bg-teal-500 block"></span>
                  {isRtl ? "نظرة عامة على الدورة" : "Course Overview"}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {overview}
                </p>
              </motion.div>

              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[80px]" />
                
                <h3 className={`text-2xl font-bold text-slate-900 mb-8 relative z-10 ${isRtl ? "font-cairo" : "font-serif"}`}>
                  {isRtl ? "ماذا ستتعلم في هذه الدورة؟" : "What You'll Learn"}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
                  {outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="mt-1 shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-teal-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
