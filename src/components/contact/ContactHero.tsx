"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Headset, ShieldCheck, Sparkles, Clock, Users, Globe } from "lucide-react";
import Image from "next/image";

export function ContactHero() {
  const { isRtl } = useLanguage();

  const stats = [
    {
      icon: Clock,
      valueAr: "24/7",
      valueEn: "24/7",
      labelAr: "دعم متواصل",
      labelEn: "Support",
    },
    {
      icon: Users,
      valueAr: "500+",
      valueEn: "500+",
      labelAr: "طالب حول العالم",
      labelEn: "Students Worldwide",
    },
    {
      icon: Globe,
      valueAr: "30+",
      valueEn: "30+",
      labelAr: "دولة",
      labelEn: "Countries",
    },
  ];

  return (
    <div className="relative pt-32 pb-40 md:pt-40 md:pb-56 overflow-hidden bg-slate-950">
      {/* ═══ Dark Cinematic Background ═══ */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ═══ Hero Background Images ═══ */}
      {/* Desktop Background */}
      <div className="absolute inset-0 z-[1] hidden md:block select-none pointer-events-none">
        <Image
          src="/contact-bg.webp"
          alt="Contact background"
          fill
          priority
          className="object-cover opacity-[0.6] mix-blend-luminosity"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 z-[1] block md:hidden select-none pointer-events-none">
        <Image
          src="/contact-mobile-bg.webp"
          alt="Contact background mobile"
          fill
          priority
          className="object-cover opacity-[0.6] mix-blend-luminosity"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-teal-500/15 blur-[150px] pointer-events-none mix-blend-screen z-[2]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/15 blur-[150px] pointer-events-none mix-blend-screen z-[2]" />
      <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-emerald-500/10 blur-[120px] pointer-events-none mix-blend-screen z-[2]" />

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none z-[3]" />

      {/* ═══ Content ═══ */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span className="text-xs md:text-sm font-bold text-slate-300 uppercase tracking-widest">
                {isRtl ? "فريق دعم متخصص ومتميز" : "Dedicated Premium Support"}
              </span>
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-20 h-20 rounded-3xl bg-slate-900/50 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/20 to-indigo-500/20 blur-xl" />
              <Headset className="w-10 h-10 text-teal-400 relative z-10" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-6 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl ? "تواصل " : "Get in "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-500">
              {isRtl ? "معنا" : "Touch"}
            </span>
          </motion.h1>

          {/* Book Free Trial Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <button
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold tracking-wide rounded-full text-white overflow-hidden transition-all duration-500 hover:scale-[1.05] shadow-[0_0_40px_rgba(20,184,166,0.2)] hover:shadow-[0_0_60px_rgba(20,184,166,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-500 bg-[length:200%_100%] animate-gradient rounded-full" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              <span className="relative z-10">
                {isRtl ? "احجز حصتك التجريبية المجانية الآن" : "Book Your Free Trial Now"}
              </span>
              <Sparkles className="relative z-10 w-5 h-5 text-white/80 animate-pulse" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Spacer between title and stats */}
      <div className="h-[25vh]" />

      {/* ═══ Floating Stats Cards ═══ */}
      <div className="container mx-auto px-4 md:px-8 relative z-30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + idx * 0.1,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center hover:bg-white/[0.1] hover:border-white/20 transition-all duration-500 group"
              >
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-teal-400 mx-auto mb-2 md:mb-4" />
                  <p className={`text-2xl md:text-4xl font-black text-white mb-1 ${isRtl ? "font-cairo" : ""}`}>
                    {isRtl ? stat.valueAr : stat.valueEn}
                  </p>
                  <p className="text-[10px] md:text-sm text-slate-400 font-medium">
                    {isRtl ? stat.labelAr : stat.labelEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none z-20" />
    </div>
  );
}
