"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function PrivacyPage() {
  const { t, isRtl } = useLanguage();
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] overflow-hidden">
      {/* ═══ Subtle Background Effects ═══ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/[0.03] rounded-full blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 md:pt-40 pb-20">
        {/* ═══ Back Link ═══ */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-600 transition-colors mb-12 group"
          >
            <BackArrow className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>{isRtl ? "العودة للرئيسية" : "Back to Home"}</span>
          </Link>
        </motion.div>

        {/* ═══ Header ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 mb-6">
            <Shield className="w-7 h-7 text-teal-600" />
          </div>
          <h1
            className={`text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4 ${
              isRtl ? "font-cairo" : "font-serif"
            }`}
          >
            {t.privacy.title}
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-3">
            {t.privacy.subtitle}
          </p>
          <p className="text-sm text-slate-400">{t.privacy.lastUpdated}</p>
        </motion.div>

        {/* ═══ Content Sections — Dark Cards ═══ */}
        <div className="max-w-4xl mx-auto space-y-5">
          {t.privacy.sections.map(
            (section: { title: string; content: string }, index: number) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.06 }}
                className="relative group"
              >
                <div className="relative rounded-2xl p-8 md:p-10 bg-[#0F172A] border border-slate-800/60 hover:border-teal-500/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-teal-500/5">
                  {/* Section number watermark */}
                  <div className="absolute top-8 md:top-10 end-8 md:end-10 text-5xl font-black text-white/[0.04] select-none pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="hidden sm:flex w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-teal-400">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white mb-3">
                        {section.title}
                      </h2>
                      <p className="text-slate-400 leading-relaxed text-[15px]">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          )}
        </div>

        {/* ═══ Bottom CTA ═══ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 text-sm">
            {isRtl
              ? "لديك أسئلة؟ لا تتردد في التواصل معنا."
              : "Have questions? Don't hesitate to reach out."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-500 text-sm mt-2 transition-colors"
          >
            <span>{isRtl ? "صفحة الاتصال" : "Contact Page"}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
