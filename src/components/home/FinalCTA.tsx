"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2, Star } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FinalCTA() {
  const { t, isRtl } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleCard = useTransform(scrollYProgress, [0, 0.5], [0.88, 1]);
  const opacityCard = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const trustItems = isRtl
    ? ["بدون بطاقة ائتمان", "إلغاء في أي وقت", "مجاني 100%"]
    : ["No Credit Card", "Cancel Anytime", "100% Free"];

  return (
    <section ref={ref} className="relative py-28 md:py-40 overflow-hidden bg-[#F8FAFC]">
      {/* ═══ Light Premium Background ═══ */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle radial gradient orbs */}
        <div className="absolute top-[-30%] left-[-15%] w-[70%] h-[70%] bg-teal-400/[0.06] rounded-full blur-[160px]" />
        <div className="absolute bottom-[-30%] right-[-15%] w-[70%] h-[70%] bg-indigo-400/[0.05] rounded-full blur-[160px]" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-amber-300/[0.04] rounded-full blur-[120px]" />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          style={{ scale: scaleCard, opacity: opacityCard }}
          className="relative max-w-5xl mx-auto rounded-[3rem] p-10 md:p-20 text-center overflow-hidden z-20"
        >
          {/* ═══ Ultra Premium Dark Glass Card ═══ */}
          {/* Base deep dark layer with heavy glass blur and outer drop shadow */}
          <div className="absolute inset-0 bg-[#0B1120]/85 backdrop-blur-3xl rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(2,6,23,0.4)]" />
          
          {/* 3D Specular highlight and deep shadow gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/50 rounded-[3rem]" />
          
          {/* Crisp borders to define edges against the light background */}
          <div className="absolute inset-0 rounded-[3rem] border border-white/10" />
          <div className="absolute inset-0 rounded-[3rem] border-t border-white/20" />

          {/* Chromatic animated border */}
          <div
            className="absolute inset-0 rounded-[3rem] animate-chromatic opacity-30 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, rgba(13,148,136,0.4), rgba(99,102,241,0.2), rgba(245,158,11,0.15), rgba(13,148,136,0.4))`,
              mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
              WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
              padding: "1.5px",
            }}
          />

          {/* Top highlight line */}
          <div className="absolute top-0 inset-x-16 h-[1px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent z-10" />

          {/* Inner glow sweep */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/[0.06] via-transparent to-indigo-500/[0.04] rounded-[3rem] pointer-events-none" />

          {/* ═══ Content ═══ */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
              <span className="text-sm font-bold tracking-widest uppercase text-teal-300">
                {isRtl ? "ابدأ رحلتك" : "Begin Your Journey"}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1] ${
                isRtl ? "font-cairo leading-[1.3]" : "font-serif"
              }`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-emerald-300 drop-shadow-sm">
                {t.cta.title}
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              {t.cta.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mb-10"
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold tracking-wide rounded-full text-white overflow-hidden transition-all duration-500 hover:scale-[1.03] w-full sm:w-auto animate-pulse-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-500 bg-[length:200%_100%] animate-gradient rounded-full" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                <span className="relative z-10">{t.cta.button}</span>
                <ArrowRight
                  className={`relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2 ${
                    isRtl ? "rotate-180 group-hover:-translate-x-2" : ""
                  }`}
                />
              </Link>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/201010575332"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-full text-white/80 bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 hover:text-white transition-all duration-500 w-full sm:w-auto overflow-hidden hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 rounded-full" />
                <MessageCircle className="relative z-10 w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-500" />
                <span className="relative z-10">
                  {isRtl ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
                </span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-teal-500/60" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
