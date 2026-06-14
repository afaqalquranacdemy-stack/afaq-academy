"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  ClipboardCheck,
  UserCheck,
  MonitorPlay,
  Award,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    titleAr: "التقييم المبدئي",
    titleEn: "Initial Assessment",
    descAr:
      "تقييم شامل لمستواك الحالي وتحديد نقاط القوة والمجالات التي تحتاج تطوير.",
    descEn:
      "Comprehensive assessment of your current level, identifying strengths and areas for development.",
    color: "from-teal-500 to-emerald-500",
    glow: "bg-teal-500/20",
    tagAr: "الخطوة 1",
    tagEn: "Step 1",
  },
  {
    icon: UserCheck,
    titleAr: "خطة تعلّم مخصصة",
    titleEn: "Personalized Learning Plan",
    descAr:
      "بناء خطة أكاديمية شخصية مصممة وفق أهدافك ومستواك وجدولك الزمني.",
    descEn:
      "Building a personalized academic plan designed around your goals, level, and schedule.",
    color: "from-indigo-500 to-violet-500",
    glow: "bg-indigo-500/20",
    tagAr: "الخطوة 2",
    tagEn: "Step 2",
  },
  {
    icon: MonitorPlay,
    titleAr: "التعلّم المباشر 1-1",
    titleEn: "Live 1-on-1 Learning",
    descAr:
      "جلسات تفاعلية مباشرة مع معلمك الخاص عبر منصتنا التعليمية المتقدمة.",
    descEn:
      "Interactive live sessions with your dedicated tutor through our advanced learning platform.",
    color: "from-amber-500 to-orange-500",
    glow: "bg-amber-500/20",
    tagAr: "الخطوة 3",
    tagEn: "Step 3",
  },
  {
    icon: Award,
    titleAr: "التقدم والشهادة",
    titleEn: "Progress & Certification",
    descAr:
      "متابعة مستمرة لتقدمك مع تقارير دورية وإمكانية الحصول على شهادة أو إجازة.",
    descEn:
      "Continuous progress tracking with periodic reports and the possibility of obtaining a certificate or Ijazah.",
    color: "from-rose-500 to-pink-500",
    glow: "bg-rose-500/20",
    tagAr: "الخطوة 4",
    tagEn: "Step 4",
  },
];

export function LearningMethodology() {
  const { isRtl } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-white relative section-divider overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-6">
            {isRtl ? "منهجيتنا في التعليم" : "Our Methodology"}
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl
              ? "كيف نصنع التميّز الأكاديمي؟"
              : "How We Achieve Academic Excellence?"}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {isRtl
              ? "منهجية تعليمية مُثبتة تجمع بين التقليد والابتكار لتحقيق أفضل النتائج"
              : "A proven educational methodology that blends tradition with innovation for the best outcomes"}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <div className="h-full bg-gradient-to-b from-teal-500/30 via-indigo-500/30 to-rose-500/30 rounded-full" />
          </div>

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}
                >
                  <div className="glass-card p-8 rounded-[2rem] bg-[#F8FAFC] border border-slate-100 hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                    {/* Glow */}
                    <div
                      className={`absolute -top-10 ${isEven ? "-right-10" : "-left-10"} w-32 h-32 ${step.glow} blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                    />

                    <div className="relative z-10">
                      {/* Tag */}
                      <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 shadow-sm">
                        {isRtl ? step.tagAr : step.tagEn}
                      </span>

                      <h3
                        className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors ${isRtl ? "font-cairo" : ""}`}
                      >
                        {isRtl ? step.titleAr : step.titleEn}
                      </h3>
                      <p className="text-slate-500 leading-relaxed">
                        {isRtl ? step.descAr : step.descEn}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative z-10 shrink-0 order-first md:order-none">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  {/* Connector dot */}
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-slate-300 shadow-sm left-1/2 -translate-x-1/2" />
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
