"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ClipboardList, Video, Rocket, Sparkles } from "lucide-react";
import { MeshGradient } from "@/components/effects/MeshGradient";
import { TrialBooking } from "./TrialBooking";

export function HowItWorks() {
  const { t, isRtl } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacityGradient = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const icons = [ClipboardList, Video, Rocket];

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-sm font-bold tracking-widest uppercase mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            {t.howItWorks.title}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {t.howItWorks.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            {t.howItWorks.subtitle}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Animated Connecting Line - Simplified & Elegant */}
          <div className="hidden md:block absolute top-[110px] left-[15%] w-[70%] h-[2px] pointer-events-none z-0">
            <div className="w-full h-full bg-slate-200/50 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500 to-teal-500/0"
                style={{ scaleX: pathLength, originX: isRtl ? 1 : 0 }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 w-full">
            {t.howItWorks.steps.map((step, i) => {
              const Icon = icons[i];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center w-full relative group"
                >
                  {/* Icon Area with Large Number Backdrop */}
                  <div className="relative mb-6 w-full flex flex-col items-center group">
                    {/* Large Professional Number - Positioned Above/Peeking */}
                    <div className="text-[80px] font-bold text-teal-500/10 mb-[-30px] select-none leading-none z-0">
                      0{i + 1}
                    </div>

                    <motion.div
                      className="relative w-24 h-24 rounded-3xl bg-white border border-slate-100 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:border-teal-500/20 transition-all duration-500 z-10"
                      whileHover={{ y: -5 }}
                    >
                      <Icon className="w-10 h-10 text-slate-400 group-hover:text-teal-600 transition-colors duration-500" />
                    </motion.div>
                  </div>

                  {/* Text Card */}
                  <div className="w-full relative z-10 px-4">
                    <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors duration-500 ${isRtl ? "font-cairo" : ""}`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm max-w-[280px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <TrialBooking />
      </div>

      {/* ═══ Ultra Premium Bottom Divider ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        {/* The Transition bar - Mirroring the theme */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-slate-950/[0.05] backdrop-blur-[3px] border-t border-slate-900/10" />

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
