"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Users, BookOpen, Award, ArrowRight, Sparkles } from "lucide-react";
import { CountUp } from "@/components/effects/CountUp";
import Link from "next/link";

export function AboutHero() {
  const { t, isRtl } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: parseInt(t.aboutUs.stats.students.replace(/\D/g, '') || "10"),
      suffix: t.aboutUs.stats.students.replace(/\d/g, ''),
      labelAr: t.aboutUs.stats.studentsLabel,
      labelEn: t.aboutUs.stats.studentsLabel,
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
    {
      icon: BookOpen,
      value: parseInt(t.aboutUs.stats.scholars.replace(/\D/g, '') || "50"),
      suffix: t.aboutUs.stats.scholars.replace(/\d/g, ''),
      labelAr: t.aboutUs.stats.scholarsLabel,
      labelEn: t.aboutUs.stats.scholarsLabel,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: Award,
      value: parseInt(t.aboutUs.stats.years.replace(/\D/g, '') || "20"),
      suffix: t.aboutUs.stats.years.replace(/\d/g, ''),
      labelAr: t.aboutUs.stats.yearsLabel,
      labelEn: t.aboutUs.stats.yearsLabel,
      color: "text-amber-500",
      bg: "bg-amber-50",
    }
  ];

  return (
    <section className="relative pt-32 pb-32 md:pt-40 md:pb-48 overflow-hidden bg-[#F8FAFC]">
      {/* ═══ Website Unified Background (Soft Orbs) ═══ */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-teal-400/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-400/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-amber-300/[0.03] rounded-full blur-[100px]" />
        
        {/* Unified Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(15,23,42,0.03) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ═══ Main Content ═══ */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-teal-500 animate-pulse" />
              <span className="text-sm font-bold tracking-widest uppercase text-slate-600">
                {isRtl ? "مؤسسة أكاديمية معتمدة" : "Accredited Academic Institution"}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl ? "تأصيل " : "Authentic "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              {isRtl ? "العلم الشرعي" : "Islamic Knowledge"}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            {t.aboutUs.subtitle}
          </motion.p>
          
          {/* Rounded Button matching site style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <Link
              href="/courses"
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#0B1120] text-white rounded-full hover:bg-teal-600 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-teal-500/20 hover:scale-[1.02]"
            >
              <span className={`text-sm md:text-base font-bold tracking-wide uppercase ${isRtl ? "font-cairo" : ""}`}>
                {isRtl ? "استكشف المنهجية" : "Explore Methodology"}
              </span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </Link>
          </motion.div>

          {/* ═══ Glass Stats Panel ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl relative"
          >
            <div className="glass-card rounded-[2rem] p-6 md:p-8 border-slate-200/60 shadow-xl shadow-slate-200/50 bg-white/80">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col items-center justify-center group/stat py-4 md:py-2 ${
                      idx === 1 ? 'md:border-x md:border-y-0 border-y border-x-0 border-slate-100 my-4 md:my-0 md:mx-4' : ''
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 shadow-sm group-hover/stat:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <h4 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight tabular-nums">
                        <CountUp end={stat.value} className="text-slate-900" />
                      </h4>
                      <span className={`text-xl font-bold ${stat.color}`}>{stat.suffix}</span>
                    </div>
                    <p className="text-xs md:text-sm font-bold text-slate-500 uppercase">
                      {isRtl ? stat.labelAr : stat.labelEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
