"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function CourseDetailCTA() {
  const { isRtl } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-[#0B1120] to-indigo-950 z-0" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-teal-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-sm font-bold tracking-wider uppercase mb-8 backdrop-blur-sm"
          >
            <ShieldCheck className="w-4 h-4" />
            {isRtl ? "ضمان استرداد الأموال 100%" : "100% Money-Back Guarantee"}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl ? "جاهز لبدء رحلتك؟" : "Ready to Begin Your Journey?"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {isRtl 
              ? "انضم إلى آلاف الطلاب الذين يدرسون معنا وتواصل مع أفضل العلماء المعتمدين من الأزهر الشريف."
              : "Join thousands of students learning with us and connect with top certified scholars from Al-Azhar."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="https://wa.me/201061957018"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative px-8 py-4 bg-white rounded-full font-bold text-slate-900 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-slate-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5 text-teal-600" />
                {isRtl ? "احجز عبر الواتساب" : "Enroll via WhatsApp"}
              </span>
            </Link>
            
            <Link 
              href="/contact"
              className="w-full sm:w-auto group px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 rounded-full font-bold text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isRtl ? "المزيد من المعلومات" : "More Information"}
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
