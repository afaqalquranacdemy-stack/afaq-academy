"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Sparkles, GraduationCap, Award, Globe, BookOpen } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { CountUp } from "@/components/effects/CountUp";

export function Hero() {
  const { t, isRtl } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col bg-slate-950">
      {/* Background Premium Layers (Dark Cinematic) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.03)_100%)]" />

        {/* Dark Top/Bottom Gradients */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/[0.2] to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-black/[0.05] to-transparent" />

        {/* Noise Texture for Premium Feel */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Pattern Overlay (Original Colors) */}
      <div className="absolute inset-0 z-[1] select-none pointer-events-none">
        {/* Desktop Background */}
        <Image
          src="/hero-bg.webp"
          alt=" walmnaho background desktop"
          fill
          priority
          // @ts-ignore
          fetchPriority="high"
          sizes="100vw"
          className="hidden md:block object-fill opacity-[0.4] mix-blend-overlay"
        />
        {/* Mobile Background */}
        <Image
          src="/hero-mobile-bg.webp"
          alt=" walmnaho background mobile"
          fill
          priority
          // @ts-ignore
          fetchPriority="high"
          sizes="100vw"
          className="block md:hidden object-fill opacity-[0.4]"
        />
      </div>

      {/* Main Content Area - Balanced spacing for mobile/desktop */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 md:px-8 pt-24 pb-12 md:pt-[7vh] md:pb-48">
        <motion.div
          className="container mx-auto flex flex-col items-center text-center"
        >
          {/* Animated Badge with shimmer and subtle mobile margin */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-flex items-center gap-2 md:gap-2.5 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg mb-6 md:mb-10 mt-4 md:mt-0 overflow-hidden group hover:border-teal-500/50 transition-all duration-700 cursor-default"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-teal-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-teal-400 animate-pulse" />
            <span className="text-xs md:text-base text-teal-50 font-semibold tracking-wide">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Massive Premium Typography */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-5xl mx-auto mb-4 md:mb-8"
          >
            <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-[1.25] md:leading-[1.15] ${isRtl ? "font-cairo leading-[1.4] md:leading-[1.3]" : "font-serif"}`}>
              {t.hero.title.line1}
              <br className="hidden md:block" />
              <span className="relative inline-block mt-1 md:mt-4">
                <div className="absolute inset-0 bg-teal-500/20 blur-[80px] z-[-1] animate-breathe" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-500 animate-gradient bg-[length:200%_200%] px-1 md:px-2">
                  {t.hero.title.highlight}
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`text-sm md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-16 font-medium text-center md:text-justify px-2 md:px-4`}
          >
            {t.hero.description}
          </motion.p>

          {/* Buttons - Controlled width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5 w-full max-w-[85%] sm:max-w-none sm:w-auto"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2.5 md:gap-3 px-8 md:px-12 py-3.5 md:py-5 text-sm md:text-lg font-bold rounded-full text-white overflow-hidden transition-all duration-500 hover:scale-105 w-full sm:w-auto shadow-md hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 transition-transform duration-500 group-hover:scale-110 bg-[length:200%_100%] animate-gradient" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative z-10">{t.hero.buttons.start}</span>
              <ArrowRight className={`relative z-10 w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </Link>

            <Link
              href="/courses"
              className="group relative inline-flex items-center justify-center gap-2.5 md:gap-3 px-8 md:px-12 py-3.5 md:py-5 text-sm md:text-lg font-medium rounded-full text-white bg-white/10 border border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:border-white/40 hover:bg-white/20 w-full sm:w-auto shadow-xl"
            >
              <Play className="relative z-10 w-4 h-4 md:w-5 md:h-5 text-teal-400" fill="currentColor" />
              <span className="relative z-10">{t.hero.buttons.explore}</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ═══ Ultra Premium Stats Bar - Centered Correctly ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative md:absolute md:bottom-12 inset-x-0 w-full max-w-[90%] md:max-w-5xl mx-auto z-20 mb-12 md:mb-0"
      >
        {/* Animated gradient border */}
        <div className="absolute -inset-[1.5px] rounded-[1.5rem] md:rounded-[2.1rem] bg-gradient-to-r from-teal-400/30 via-emerald-300/20 to-indigo-400/30 animate-gradient bg-[length:300%_300%] opacity-60" />

        {/* The glass card */}
        <div className="glass-card !rounded-[1.5rem] md:!rounded-[2rem] p-0 hover:!translate-y-0 hover:!scale-100">
          {/* Inner subtle top edge light */}
          <div className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-teal-400/30 to-transparent z-30" />
          {/* Bottom teal glow */}
          <div className="absolute -bottom-4 left-[20%] right-[20%] h-8 bg-teal-400/10 blur-2xl rounded-full z-0" />

          <div className="relative z-10 px-2 py-4 md:px-6 lg:px-10 md:py-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-0 relative">

              {/* ── Desktop vertical dividers ── */}
              <div className="hidden md:block absolute top-[20%] bottom-[20%] left-[25%] w-[3px] bg-slate-200/80" />
              <div className="hidden md:block absolute top-[20%] bottom-[20%] left-[50%] w-[3px] bg-slate-200/80" />
              <div className="hidden md:block absolute top-[20%] bottom-[20%] left-[75%] w-[3px] bg-slate-200/80" />

              {/* ── Mobile cross dividers ── */}
              <div className="block md:hidden absolute left-1/2 top-[10%] bottom-[10%] w-[1px] bg-slate-200/60" />
              <div className="block md:hidden absolute left-[10%] right-[10%] top-1/2 h-[1px] bg-slate-200/60" />

              {/* ─── Stat 1: Expert Tutors ─── */}
              <div className="flex flex-col items-center gap-1.5 md:gap-2.5 px-2 md:px-5 py-2 group/s">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-400/20 rounded-xl blur-lg scale-0 group-hover/s:scale-100 transition-transform duration-700" />
                  <div className="relative w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-teal-50 via-teal-100/60 to-emerald-50 border border-teal-200/40 flex items-center justify-center group-hover/s:border-teal-300/60 group-hover/s:shadow-lg group-hover/s:shadow-teal-200/30 transition-all duration-500">
                    <GraduationCap className="w-4 h-4 md:w-[22px] md:h-[22px] text-teal-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-[22px] md:text-[32px] font-black text-slate-900 leading-none tracking-tight tabular-nums">
                    <CountUp end={50} suffix="+" className="font-black text-slate-900" />
                  </h4>
                  <p className={`text-slate-600 text-[9px] md:text-xs font-bold uppercase tracking-[0.12em] mt-1.5 md:mt-2 ${isRtl ? "font-cairo tracking-wide" : ""}`}>
                    {isRtl ? "معلم خبير" : "Expert Tutors"}
                  </p>
                </div>
              </div>

              {/* ─── Stat 2: Active Courses ─── */}
              <div className="flex flex-col items-center gap-1.5 md:gap-2.5 px-2 md:px-5 py-2 group/s">
                <div className="relative">
                  <div className="absolute inset-0 bg-rose-400/20 rounded-xl blur-lg scale-0 group-hover/s:scale-100 transition-transform duration-700" />
                  <div className="relative w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-rose-50 via-rose-100/60 to-pink-50 border border-rose-200/40 flex items-center justify-center group-hover/s:border-rose-300/60 group-hover/s:shadow-lg group-hover/s:shadow-rose-200/30 transition-all duration-500">
                    <BookOpen className="w-4 h-4 md:w-[22px] md:h-[22px] text-rose-500" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-[22px] md:text-[32px] font-black text-slate-900 leading-none tracking-tight tabular-nums">
                    <CountUp end={20} suffix="+" className="font-black text-slate-900" />
                  </h4>
                  <p className={`text-slate-600 text-[9px] md:text-xs font-bold uppercase tracking-[0.12em] mt-1.5 md:mt-2 ${isRtl ? "font-cairo tracking-wide" : ""}`}>
                    {isRtl ? "كورس متاح" : "Active Courses"}
                  </p>
                </div>
              </div>

              {/* ─── Stat 3: Years Experience ─── */}
              <div className="flex flex-col items-center gap-1.5 md:gap-2.5 px-2 md:px-5 py-2 group/s">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-400/20 rounded-xl blur-lg scale-0 group-hover/s:scale-100 transition-transform duration-700" />
                  <div className="relative w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-amber-50 via-amber-100/60 to-yellow-50 border border-amber-200/40 flex items-center justify-center group-hover/s:border-amber-300/60 group-hover/s:shadow-lg group-hover/s:shadow-amber-200/30 transition-all duration-500">
                    <Award className="w-4 h-4 md:w-[22px] md:h-[22px] text-amber-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-[22px] md:text-[32px] font-black text-slate-900 leading-none tracking-tight tabular-nums">
                    <CountUp end={10} suffix="+" className="font-black text-slate-900" />
                  </h4>
                  <p className={`text-slate-600 text-[9px] md:text-xs font-bold uppercase tracking-[0.12em] mt-1.5 md:mt-2 ${isRtl ? "font-cairo tracking-wide" : ""}`}>
                    {isRtl ? "سنوات خبرة" : "Years Experience"}
                  </p>
                </div>
              </div>

              {/* ─── Stat 4: Countries ─── */}
              <div className="flex flex-col items-center gap-1.5 md:gap-2.5 px-2 md:px-5 py-2 group/s">
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-400/20 rounded-xl blur-lg scale-0 group-hover/s:scale-100 transition-transform duration-700" />
                  <div className="relative w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-indigo-50 via-indigo-100/60 to-violet-50 border border-indigo-200/40 flex items-center justify-center group-hover/s:border-indigo-300/60 group-hover/s:shadow-lg group-hover/s:shadow-indigo-200/30 transition-all duration-500">
                    <Globe className="w-4 h-4 md:w-[22px] md:h-[22px] text-indigo-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-[22px] md:text-[32px] font-black text-slate-900 leading-none tracking-tight tabular-nums">
                    <CountUp end={30} suffix="+" className="font-black text-slate-900" />
                  </h4>
                  <p className={`text-slate-600 text-[9px] md:text-xs font-bold uppercase tracking-[0.12em] mt-1.5 md:mt-2 ${isRtl ? "font-cairo tracking-wide" : ""}`}>
                    {isRtl ? "دولة" : "Countries"}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══ Ultra Premium Dark-to-Light Divider ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        {/* The Transition Fade (to the next white section) */}
        <div className="h-40 bg-gradient-to-t from-white via-white/40 to-transparent" />

        {/* The Decorative Divider */}
        <div className="relative w-full flex items-center justify-center">
          {/* Main Glowing Line */}
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
          <div className="absolute inset-x-[20%] h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent blur-[2px]" />

          {/* Centered Premium Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center -translate-y-1/2"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-full scale-[2]" />

            {/* The Capsule */}
            <div className="relative px-6 py-2.5 rounded-full bg-slate-900 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
              <Sparkles className="w-4 h-4 text-teal-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_rgba(129,140,248,0.6)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
