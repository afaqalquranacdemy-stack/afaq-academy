"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function BlogHero() {
  const { locale, isRtl } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-900" dir={isRtl ? "rtl" : "ltr"}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/pattern-light.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight ${
              isRtl ? "font-cairo" : "font-serif"
            }`}
          >
            {locale === "ar" ? "مدونة الأكاديمية" : "Academy Blog"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            {locale === "ar"
              ? "مقالات، وتأملات، وأخبار من علمائنا لإثراء رحلتك في طلب العلم."
              : "Articles, reflections, and news from our scholars to enrich your journey of seeking knowledge."}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
