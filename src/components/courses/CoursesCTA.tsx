"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export function CoursesCTA() {
  const { isRtl } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-white relative section-divider overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Outer glow */}
          <div className="absolute -inset-[2px] rounded-[3rem] bg-gradient-to-r from-teal-500/30 via-indigo-500/20 to-teal-500/30 animate-gradient bg-[length:300%_300%] opacity-60" />

          {/* Main Card */}
          <div className="relative bg-[#0B1120] rounded-[3rem] overflow-hidden">
            {/* Background decorative */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-teal-500/10 blur-[150px] rounded-full" />
              <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-500/10 blur-[120px] rounded-full" />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-teal-300 text-xs font-bold uppercase tracking-widest mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                {isRtl ? "ابدأ رحلتك اليوم" : "Start Your Journey Today"}
              </div>

              {/* Title */}
              <h2
                className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight ${isRtl ? "font-cairo" : "font-serif"}`}
              >
                {isRtl ? (
                  <>
                    هل أنت مستعد{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                      لبداية رحلتك
                    </span>
                    <br />
                    في طلب العلم الشريف؟
                  </>
                ) : (
                  <>
                    Ready to Begin Your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                      Journey
                    </span>
                    <br />
                    in Sacred Knowledge?
                  </>
                )}
              </h2>

              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                {isRtl
                  ? "انضم إلى مئات الطلاب حول العالم الذين بدأوا رحلتهم مع أكاديمية آفاق القرآن. جلسة تجريبية مجانية بانتظارك."
                  : "Join hundreds of students worldwide who started their journey with Afaq Al-Quran Academy. A free trial session awaits you."}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 text-base font-bold rounded-full text-white overflow-hidden transition-all duration-500 hover:scale-105 shadow-lg shadow-teal-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 transition-transform duration-500 group-hover:scale-110 bg-[length:200%_100%] animate-gradient" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <span className="relative z-10">
                    {isRtl ? "احجز جلسة تجريبية مجانية" : "Book Free Trial"}
                  </span>
                  <ArrowRight
                    className={`relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
                  />
                </Link>

                <a
                  href="https://wa.me/201010575332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 text-base font-medium rounded-full text-white bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span>
                    {isRtl ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
                  </span>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {isRtl ? "بدون التزام" : "No commitment"}
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {isRtl ? "مجاني 100%" : "100% Free"}
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {isRtl ? "رد خلال 24 ساعة" : "Response within 24h"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
