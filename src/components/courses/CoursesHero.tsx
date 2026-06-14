"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  Sparkles,
  GraduationCap,
  BookOpen,
  Users,
  Globe,
  Award,
  Search,
} from "lucide-react";
import { CountUp } from "@/components/effects/CountUp";
import Image from "next/image";

export function CoursesHero() {
  const { t, isRtl } = useLanguage();

  const stats = [
    {
      icon: BookOpen,
      value: 20,
      suffix: "+",
      labelAr: "كورس متاح",
      labelEn: "Active Courses",
      color: "from-teal-50 via-teal-100/60 to-emerald-50",
      border: "border-teal-200/40",
      iconColor: "text-teal-600",
      glow: "bg-teal-400/20",
    },
    {
      icon: Users,
      value: 500,
      suffix: "+",
      labelAr: "طالب نشط",
      labelEn: "Active Students",
      color: "from-rose-50 via-rose-100/60 to-pink-50",
      border: "border-rose-200/40",
      iconColor: "text-rose-500",
      glow: "bg-rose-400/20",
    },
    {
      icon: GraduationCap,
      value: 50,
      suffix: "+",
      labelAr: "معلم أزهري",
      labelEn: "Azhar Scholars",
      color: "from-amber-50 via-amber-100/60 to-yellow-50",
      border: "border-amber-200/40",
      iconColor: "text-amber-600",
      glow: "bg-amber-400/20",
    },
    {
      icon: Globe,
      value: 30,
      suffix: "+",
      labelAr: "دولة",
      labelEn: "Countries",
      color: "from-indigo-50 via-indigo-100/60 to-violet-50",
      border: "border-indigo-200/40",
      iconColor: "text-indigo-600",
      glow: "bg-indigo-400/20",
    },
  ];

  return (
    <section className="relative pt-28 pb-32 md:pt-36 md:pb-44 overflow-hidden bg-slate-950">
      {/* ═══ Background Layers ═══ */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Hero Background Image */}
        {/* Desktop Hero Background Image */}
        <Image
          src="/images/courses/courses-bg.webp"
          alt="Courses background desktop"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-fill opacity-[0.5] mix-blend-overlay"
        />

        {/* Mobile Hero Background Image */}
        <Image
          src="/images/courses/courses-bg-mobail.webp"
          alt="Courses background mobile"
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-fill opacity-[0.5] mix-blend-overlay"
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.2)_100%)]" />
      </div>

      {/* ═══ Animated Gradient Orbs ═══ */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] right-[-10%] w-[60vw] h-[60vw] bg-teal-500/15 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/15 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[30%] w-[30vw] h-[30vw] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"
      />

      {/* ═══ Main Content ═══ */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden group hover:border-teal-500/50 transition-all duration-700 cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-teal-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
              <span className="text-sm text-teal-50 font-semibold tracking-wide">
                {isRtl
                  ? "البرامج والمسارات الأكاديمية"
                  : "Academic Programs & Pathways"}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-[1.2] mb-6 ${isRtl ? "font-cairo leading-[1.4]" : "font-serif"}`}
          >
            {isRtl ? "استكشف " : "Explore "}
            <span className="relative inline-block">
              <div className="absolute inset-0 bg-teal-500/20 blur-[80px] z-[-1] animate-breathe" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-500 animate-gradient bg-[length:200%_200%]">
                {isRtl ? "مسارات العلم" : "Sacred Knowledge"}
              </span>
            </span>
            <br className="hidden md:block" />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {isRtl
                ? "واختر رحلتك الأكاديمية"
                : "& Choose Your Path"}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-base md:text-l text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-medium text-justify"
          >
            {isRtl
              ? "برامج أكاديمية معتمدة بإشراف نخبة من علماء الأزهر الشريف. مناهج متكاملة تجمع بين الأصالة والمعاصرة، مصممة لتحقيق أعلى مستويات التميز العلمي."
              : "Accredited academic programs supervised by elite Al-Azhar scholars. Comprehensive curricula blending tradition and modernity, designed to achieve the highest levels of scholarly excellence."}
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-xl mx-auto mb-16"
          >
            <div className="relative group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-teal-500/30 via-indigo-500/20 to-teal-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
                <Search className="w-5 h-5 text-slate-400 mx-4 shrink-0" />
                <input
                  type="text"
                  placeholder={
                    isRtl
                      ? "ابحث عن كورس أو موضوع..."
                      : "Search for a course or topic..."
                  }
                  className="flex-1 bg-transparent py-4 pr-4 text-white placeholder:text-slate-400 outline-none text-base"
                />
                <button className="m-1.5 px-6 py-2.5 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold text-sm rounded-xl hover:from-teal-500 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-teal-500/20">
                  {isRtl ? "بحث" : "Search"}
                </button>
              </div>
            </div>
          </motion.div>

          {/* ═══ Stats Cards ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-4xl mx-auto"
          >
            {/* Animated gradient border */}
            <div className="relative">
              <div className="absolute -inset-[1.5px] rounded-[2rem] bg-gradient-to-r from-teal-400/30 via-emerald-300/20 to-indigo-400/30 animate-gradient bg-[length:300%_300%] opacity-60" />
              <div className="glass-card !rounded-[2rem] p-0 hover:!translate-y-0 hover:!scale-100">
                {/* Top edge light */}
                <div className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-teal-400/30 to-transparent z-30" />
                {/* Bottom glow */}
                <div className="absolute -bottom-4 left-[20%] right-[20%] h-8 bg-teal-400/10 blur-2xl rounded-full z-0" />

                <div className="relative z-10 px-4 py-6 md:px-8 md:py-5">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 relative">
                    {/* Desktop dividers */}
                    <div className="hidden md:block absolute top-[20%] bottom-[20%] left-[25%] w-[2px] bg-slate-200/60" />
                    <div className="hidden md:block absolute top-[20%] bottom-[20%] left-[50%] w-[2px] bg-slate-200/60" />
                    <div className="hidden md:block absolute top-[20%] bottom-[20%] left-[75%] w-[2px] bg-slate-200/60" />

                    {/* Mobile dividers */}
                    <div className="block md:hidden absolute left-1/2 top-[10%] bottom-[10%] w-[1px] bg-slate-200/60" />
                    <div className="block md:hidden absolute left-[10%] right-[10%] top-1/2 h-[1px] bg-slate-200/60" />

                    {stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center gap-2 md:gap-3 px-3 md:px-5 py-2 group/s"
                      >
                        <div className="relative">
                          <div
                            className={`absolute inset-0 ${stat.glow} rounded-xl blur-lg scale-0 group-hover/s:scale-100 transition-transform duration-700`}
                          />
                          <div
                            className={`relative w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${stat.color} border ${stat.border} flex items-center justify-center group-hover/s:shadow-lg transition-all duration-500`}
                          >
                            <stat.icon
                              className={`w-5 h-5 md:w-[22px] md:h-[22px] ${stat.iconColor}`}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <h4 className="text-[22px] md:text-[32px] font-black text-slate-900 leading-none tracking-tight tabular-nums">
                            <CountUp
                              end={stat.value}
                              suffix={stat.suffix}
                              className="font-black text-slate-900"
                            />
                          </h4>
                          <p
                            className={`text-slate-600 text-[9px] md:text-xs font-bold uppercase tracking-[0.12em] mt-1.5 ${isRtl ? "font-cairo tracking-wide" : ""}`}
                          >
                            {isRtl ? stat.labelAr : stat.labelEn}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══ Bottom Transition ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="h-32 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/40 to-transparent" />
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
          <div className="absolute inset-x-[20%] h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent blur-[2px]" />
        </div>
      </div>
    </section>
  );
}
