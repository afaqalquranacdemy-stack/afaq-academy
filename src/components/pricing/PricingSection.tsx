"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { pricingData, Duration } from "@/data/pricing";
import { CheckCircle2, Star, Clock, Zap, Crown, ShieldCheck, CreditCard, RotateCcw } from "lucide-react";
import Link from "next/link";

interface PricingSectionProps {
  showViewAllButton?: boolean;
}

const icons = {
  starter: Star,
  regular: Clock,
  intensive: Zap,
  premium: Crown,
};

export function PricingSection({ showViewAllButton = false }: PricingSectionProps) {
  const { isRtl } = useLanguage();
  const [duration, setDuration] = useState<Duration>("30");

  const durations: { value: Duration; labelAr: string; labelEn: string }[] = [
    { value: "30", labelAr: "30 دقيقة", labelEn: "30 Minutes" },
    { value: "45", labelAr: "45 دقيقة", labelEn: "45 Minutes" },
    { value: "60", labelAr: "60 دقيقة", labelEn: "60 Minutes" },
  ];

  return (
    <section className="pb-32 bg-[#F8FAFC] relative overflow-hidden pt-10">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Apple-style Segmented Control */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="relative flex p-1.5 bg-white/60 backdrop-blur-xl rounded-full border border-slate-200 shadow-xl shadow-slate-200/50">
            {durations.map((d) => (
              <button
                key={d.value}
                onClick={() => setDuration(d.value)}
                className={`relative px-8 md:px-10 py-3.5 rounded-full text-sm font-bold transition-all duration-300 z-10 ${
                  duration === d.value ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {duration === d.value && (
                  <motion.div
                    layoutId="duration-indicator-premium"
                    className="absolute inset-0 bg-slate-900 rounded-full -z-10 shadow-lg shadow-slate-900/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{isRtl ? d.labelAr : d.labelEn}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          <AnimatePresence>
            {pricingData.map((plan, idx) => {
              const isPopular = plan.isPopular;
              const Icon = icons[plan.id as keyof typeof icons] || Star;
              
              return (
                <motion.div
                  key={`${plan.id}-${duration}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 group ${
                    isPopular 
                      ? "bg-[#0B1120] text-white shadow-2xl shadow-emerald-900/20 z-10 lg:scale-105" 
                      : "glass-card bg-white/80 text-slate-900 border border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-slate-200/50"
                  }`}
                >
                  {isPopular && (
                    <>
                      {/* Premium Glowing Border */}
                      <div className="absolute inset-[-2px] rounded-[2.6rem] bg-gradient-to-b from-teal-400 via-emerald-500 to-transparent opacity-50 -z-10 pointer-events-none" />
                      {/* Popular Badge */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-teal-400 to-emerald-500 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-teal-500/20 whitespace-nowrap">
                        {isRtl ? "الأكثر شعبية" : "Most Popular"}
                      </div>
                    </>
                  )}

                  {/* Card Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 shadow-sm ${
                    isPopular 
                      ? "bg-gradient-to-br from-teal-500/20 to-emerald-500/20 text-teal-400 border border-white/10" 
                      : "bg-gradient-to-br from-slate-50 to-slate-100 text-slate-600 border border-slate-200"
                  }`}>
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 ${isRtl ? "font-cairo" : "font-serif"}`}>
                    {isRtl ? plan.titleAr : plan.titleEn}
                  </h3>
                  <p className={`${isPopular ? "text-teal-400" : "text-teal-600"} text-xs font-bold uppercase tracking-widest mb-4`}>
                    {isRtl ? plan.classesPerWeekAr : plan.classesPerWeekEn}
                  </p>
                  <p className={`${isPopular ? "text-slate-400" : "text-slate-500"} text-sm leading-relaxed mb-8 min-h-[40px]`}>
                    {isRtl ? plan.descriptionAr : plan.descriptionEn}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-start gap-1 mb-1">
                      <span className={`${isPopular ? "text-slate-500" : "text-slate-400"} font-bold mt-2 text-xl`}>$</span>
                      <span className="text-6xl font-black tracking-tight tabular-nums">{plan.prices[duration].monthly}</span>
                      <span className={`${isPopular ? "text-slate-500" : "text-slate-400"} self-end mb-2 font-medium`}>{isRtl ? "/شهر" : "/mo"}</span>
                    </div>
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                      isPopular ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500"
                    }`}>
                      ${plan.prices[duration].perSession} {isRtl ? "للحصة الواحدة" : "per session"}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 group/feat">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 transition-transform group-hover/feat:scale-110 ${isPopular ? "text-teal-400" : "text-teal-500"}`} strokeWidth={2} />
                        <span className={`${isPopular ? "text-slate-300" : "text-slate-600"} text-sm leading-relaxed`}>{isRtl ? feat.textAr : feat.textEn}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 mt-auto shadow-sm ${
                    isPopular
                      ? "bg-gradient-to-r from-teal-400 to-emerald-500 text-white shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02]"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900"
                  }`}>
                    {isPopular ? (isRtl ? "اشترك الآن" : "Subscribe Now") : (isRtl ? "اختر الباقة" : "Choose Plan")}
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ═══ Trust Signals ═══ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-200/60"
        >
          {[
            { icon: ShieldCheck, titleAr: "دفع آمن", titleEn: "Secure Payment", descAr: "مشفر بالكامل لحمايتك", descEn: "Fully encrypted for your safety" },
            { icon: RotateCcw, titleAr: "ضمان استرداد", titleEn: "Money-Back Guarantee", descAr: "ضمان استرداد لمدة ١٤ يوم", descEn: "14-day refund guarantee" },
            { icon: CreditCard, titleAr: "إلغاء مرن", titleEn: "Flexible Cancellation", descAr: "يمكنك الإلغاء في أي وقت", descEn: "Cancel your plan anytime" },
          ].map((signal, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-teal-50 transition-colors duration-300">
                <signal.icon className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors duration-300" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">{isRtl ? signal.titleAr : signal.titleEn}</h4>
              <p className="text-xs text-slate-500">{isRtl ? signal.descAr : signal.descEn}</p>
            </div>
          ))}
        </motion.div>

        {/* View All Pricing Button (Optional) */}
        {showViewAllButton && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link 
              href="/pricing" 
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-teal-600 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {isRtl ? "شاهد التفاصيل الكاملة" : "View Full Details"}
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  );
}
