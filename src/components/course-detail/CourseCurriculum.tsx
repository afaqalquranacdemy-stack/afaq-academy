"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, Clock, FileText } from "lucide-react";
import { Course } from "@/data/courses";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface CourseCurriculumProps {
  course: Course;
}

export function CourseCurriculum({ course }: CourseCurriculumProps) {
  const { locale, isRtl } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-200 bg-teal-50 text-teal-700 text-sm font-bold tracking-wider uppercase mb-6 shadow-sm">
              <FileText className="w-4 h-4" />
              {isRtl ? "المنهج الدراسي" : "Course Curriculum"}
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold text-slate-900 mb-6 ${isRtl ? "font-cairo" : "font-serif"}`}>
              {isRtl ? "خريطة طريقك للإتقان" : "Your Roadmap to Mastery"}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {course.durationDetails.map((phase, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-teal-200 shadow-[0_20px_40px_-10px_rgba(20,184,166,0.1)]" : "border-slate-100 shadow-sm hover:border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left rtl:text-right focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen ? "bg-teal-500 text-white shadow-lg shadow-teal-500/30" : "bg-slate-50 text-slate-400"
                      }`}>
                        <span className="text-xl font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-teal-600 mb-1 uppercase tracking-wider">
                          {isRtl ? "المرحلة" : "Phase"} {index + 1}
                        </div>
                        <h3 className={`text-xl font-bold text-slate-900 ${isRtl ? "font-cairo" : ""}`}>
                          {phase.title[locale as "ar" | "en"] || phase.title.en}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 md:ml-auto rtl:md:mr-auto pl-20 md:pl-0 rtl:pr-20 rtl:md:pr-0">
                      <div className="flex items-center gap-4 text-sm font-semibold text-slate-500">
                        <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-slate-400" /> {phase.lessons} {isRtl ? "درس" : "Lessons"}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> {phase.hours} {isRtl ? "ساعة" : "Hours"}</span>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? "bg-teal-50 text-teal-600 rotate-180" : "bg-slate-50 text-slate-400"}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-slate-50 border-t border-slate-100"
                      >
                        <div className="p-6 md:p-8 md:pl-[6.5rem] rtl:md:pr-[6.5rem]">
                          <p className="text-slate-600 leading-relaxed font-medium">
                            {isRtl 
                              ? `في هذه المرحلة، سيركز الطالب على إتقان ${phase.title.ar} من خلال ${phase.lessons} درساً تفاعلياً مصمماً لضمان الفهم العميق والتطبيق العملي السليم.`
                              : `In this phase, the student will focus on mastering ${phase.title.en} through ${phase.lessons} interactive lessons designed to ensure deep understanding and proper practical application.`}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
