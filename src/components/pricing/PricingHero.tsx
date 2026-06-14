"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Wallet, ShieldCheck, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function PricingHero() {
  const { isRtl } = useLanguage();

  return (
    <div className="relative pt-32 pb-24 md:pt-44 md:pb-40 overflow-hidden bg-[#F8FAFC]">
      {/* ═══ Light Premium Background ═══ */}
      {/* Base Grid */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Soft Glow Orbs for Light Theme */}
      <div className="absolute top-[-15%] right-[-10%] w-[50%] h-[50%] bg-teal-400/10 blur-[150px] rounded-full pointer-events-none animate-breathe" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[40%] h-[40%] bg-indigo-400/10 blur-[120px] rounded-full pointer-events-none animate-breathe-slow" />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-teal-100 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span className={`text-xs md:text-sm font-bold text-teal-900 uppercase tracking-widest ${isRtl ? "font-cairo tracking-wide" : ""}`}>
                {isRtl ? "استثمار آمن ومضمون" : "Secure & Guaranteed Investment"}
              </span>
              <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
            </div>
          </motion.div>
          
          {/* Main Content Area */}
          <div className="relative">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 ${isRtl ? "font-cairo" : "font-serif"}`}
            >
              {isRtl ? "خطط أسعار " : "Flexible "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-700">
                {isRtl ? "مرنة ومناسبة" : "Pricing Plans"}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
            >
              {isRtl 
                ? "استثمر في تعليمك الشرعي مع باقاتنا المتنوعة التي صممت خصيصاً لتناسب وقتك وميزانيتك."
                : "Invest in your Islamic education with our diverse plans specifically designed to fit your schedule and budget."}
            </motion.p>
          </div>

          {/* Icon Box with Premium Styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-12"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-teal-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-20 h-20 rounded-3xl bg-white border border-slate-200 flex items-center justify-center shadow-xl shadow-slate-200/50 hover:border-teal-200 transition-colors duration-500">
                <Wallet className="w-10 h-10 text-teal-600" />
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
          >
            {/* Primary Button */}
            <Link
              href="/courses"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-full hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 w-full sm:w-[280px]"
            >
              <span className={`text-base font-bold tracking-wide ${isRtl ? "font-cairo" : ""}`}>
                {isRtl ? "استكشف الكورسات" : "Explore Courses"}
              </span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 w-full sm:w-[280px] shadow-lg shadow-slate-200/40"
            >
              <MessageCircle className="w-5 h-5 text-teal-600" />
              <span className={`text-base font-bold tracking-wide ${isRtl ? "font-cairo" : ""}`}>
                {isRtl ? "تواصل معنا" : "Contact Us"}
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[5%] w-64 h-64 bg-teal-100/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[5%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}
