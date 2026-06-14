"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function AboutCTA() {
  const { t, isRtl } = useLanguage();

  const trustItems = isRtl
    ? ["منهجية علمية دقيقة", "إرشاد أكاديمي مستمر", "بيئة تفاعلية حديثة"]
    : ["Precise Methodology", "Continuous Academic Guidance", "Modern Interactive Environment"];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Contrasting Dark Scientific Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl mx-auto bg-[#05070A] rounded-sm p-10 md:p-20 overflow-hidden shadow-2xl"
        >
          {/* Scientific Grid Inside CTA */}
          <div 
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Corner Markers */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-teal-500/50" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-teal-500/50" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-teal-500/50" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-teal-500/50" />

          <div className="relative z-20 flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-teal-500" />
              <span className="text-[10px] text-teal-400 font-mono tracking-[0.2em] uppercase">
                {isRtl ? "انضم للمسيرة" : "Join the Journey"}
              </span>
              <span className="w-8 h-[1px] bg-teal-500" />
            </div>

            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-[1.2] tracking-tight ${isRtl ? "font-cairo" : "font-serif"}`}>
              {isRtl ? "ابدأ رحلتك في طلب " : "Start your journey in seeking "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
                {isRtl ? "العلم الشرعي" : "sacred knowledge"}
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
              {isRtl 
                ? "نقدم لك بيئة أكاديمية متكاملة تجمع بين أصالة المنهج وحداثة التقنية لتيسير طلب العلم عليك أينما كنت."
                : "We provide an integrated academic environment combining authentic methodology with modern technology to facilitate your learning journey."}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <Link
                href="/register"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#05070A] text-sm md:text-base font-bold tracking-wide uppercase rounded-sm transition-colors hover:bg-slate-200 w-full sm:w-auto"
              >
                <span className={isRtl ? "font-cairo" : ""}>
                  {isRtl ? "سجل الآن" : "Register Now"}
                </span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </Link>

              <Link
                href="/courses"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white text-sm md:text-base font-bold tracking-wide uppercase rounded-sm hover:bg-white/5 hover:border-white/40 transition-all duration-300 w-full sm:w-auto"
              >
                <span className={isRtl ? "font-cairo" : ""}>
                  {isRtl ? "استكشف البرامج" : "Explore Programs"}
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 border-t border-white/10 pt-8 w-full max-w-2xl">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-400 font-light">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
