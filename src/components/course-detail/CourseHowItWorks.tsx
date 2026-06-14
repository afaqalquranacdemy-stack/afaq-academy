"use client";

import { motion } from "framer-motion";
import { MousePointerClick, CalendarCheck, BookOpen, Award, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function CourseHowItWorks() {
  const { isRtl } = useLanguage();

  const steps = [
    {
      icon: MousePointerClick,
      titleEn: "Book Free Trial",
      titleAr: "احجز حصة تجريبية",
      descEn: "Select a convenient time for your introductory session.",
      descAr: "اختر وقتاً مناسباً لجلستك التمهيدية.",
    },
    {
      icon: CalendarCheck,
      titleEn: "Assessment",
      titleAr: "التقييم وتحديد المستوى",
      descEn: "Meet your instructor to determine your current level.",
      descAr: "قابل معلمك لتحديد مستواك الحالي ووضع الخطة.",
    },
    {
      icon: BookOpen,
      titleEn: "Start Learning",
      titleAr: "ابدأ رحلة التعلم",
      descEn: "Begin your customized learning path with 1-on-1 guidance.",
      descAr: "ابدأ مسارك التعليمي المخصص بتوجيه فردي مباشر.",
    },
    {
      icon: Award,
      titleEn: "Get Certified",
      titleAr: "احصل على الشهادة",
      descEn: "Complete your course and earn your Al-Azhar certified diploma.",
      descAr: "أكمل دورتك واحصل على شهادتك المعتمدة.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-sm font-bold tracking-wider uppercase mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-teal-500" />
            {isRtl ? "رحلة التعلم" : "Learning Journey"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-5xl font-bold text-slate-900 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl ? "كيف تبدأ معنا؟" : "How to Start?"}
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0" />
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-teal-500 to-indigo-500 -translate-y-1/2 z-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(20,184,166,0.1)] transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shadow-lg border-4 border-white z-20">
                    {index + 1}
                  </div>

                  <div className="w-20 h-20 rounded-full bg-slate-50 group-hover:bg-teal-50 text-slate-400 group-hover:text-teal-600 flex items-center justify-center mb-6 transition-colors duration-300 shadow-inner">
                    <step.icon className="w-10 h-10" />
                  </div>
                  
                  <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors ${isRtl ? "font-cairo" : ""}`}>
                    {isRtl ? step.titleAr : step.titleEn}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {isRtl ? step.descAr : step.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
