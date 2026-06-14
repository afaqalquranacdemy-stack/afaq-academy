"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQSection() {
  const { isRtl } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      qAr: "هل أحتاج لمعرفة سابقة باللغة العربية لبدء حفظ القرآن؟",
      qEn: "Do I need prior knowledge of Arabic to start memorizing the Quran?",
      aAr: "لا، برامجنا مصممة لتناسب جميع المستويات من الصفر. سيبدأ معك المعلم ببرنامج التأسيس (القاعدة النورانية) حتى تتقن القراءة.",
      aEn: "No, our programs are designed for all levels starting from scratch. The tutor will start with you on a foundational program until you master reading.",
    },
    {
      qAr: "كيف يتم تحديد مواعيد الدروس؟",
      qEn: "How are lesson times scheduled?",
      aAr: "بمرونة تامة. بعد الاشتراك، ستختار الأوقات والأيام التي تناسبك من جدول المعلم المتاح على مدار 24 ساعة.",
      aEn: "With complete flexibility. After subscribing, you choose the times and days that suit you from the tutor's 24/7 available schedule.",
    },
    {
      qAr: "هل الشهادات معتمدة؟",
      qEn: "Are the certificates accredited?",
      aAr: "نعم، نقدم شهادات إتمام مستويات، بالإضافة إلى المسار المتقدم الذي يمنحك (الإجازة بالسند المتصل) والمعتمدة من كبار القراء.",
      aEn: "Yes, we provide level completion certificates, plus the advanced track which grants you an (Ijazah with continuous chain) accredited by senior reciters.",
    },
    {
      qAr: "هل يوجد دروس تجريبية قبل الاشتراك؟",
      qEn: "Are there trial lessons before subscribing?",
      aAr: "بالطبع! نقدم جلسة تقييم وتجربة مجانية تماماً لتتعرف على المعلم وطريقة التدريس وتحديد مستواك.",
      aEn: "Absolutely! We offer a completely free evaluation and trial session to meet the tutor, see the teaching method, and assess your level.",
    },
    {
      qAr: "ما هي مدة الحصة الواحدة؟",
      qEn: "How long is each session?",
      aAr: "مدة الحصة الواحدة ساعة كاملة (60 دقيقة) من التعليم المباشر والتفاعلي مع المعلم المتخصص.",
      aEn: "Each session is a full hour (60 minutes) of direct, interactive teaching with the specialized instructor.",
    },
    {
      qAr: "هل يمكنني تغيير المعلم إذا لم أشعر بالارتياح؟",
      qEn: "Can I change my teacher if I'm not comfortable?",
      aAr: "بالتأكيد! راحتك أولويتنا. يمكنك طلب تغيير المعلم في أي وقت وسنوفر لك البديل المناسب فوراً.",
      aEn: "Absolutely! Your comfort is our priority. You can request a teacher change at any time and we'll provide a suitable replacement immediately.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest shadow-sm">
              <HelpCircle className="w-3.5 h-3.5" />
              {isRtl ? "الأسئلة الشائعة" : "FAQ"}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl ? "إجابات " : "Answers to "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              {isRtl ? "لاستفساراتك" : "Your Inquiries"}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto"
          >
            {isRtl
              ? "نجيب عن أكثر الأسئلة شيوعاً لمساعدتك في اتخاذ القرار المناسب."
              : "We answer the most common questions to help you make the right decision."}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08 }}
                className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-teal-200 shadow-xl shadow-teal-500/5"
                    : "bg-white/60 border-slate-100 hover:bg-white hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "bg-teal-500 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <h3
                      className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? "text-teal-600" : "text-slate-800"} ${isRtl ? "font-cairo text-right" : ""}`}
                    >
                      {isRtl ? faq.qAr : faq.qEn}
                    </h3>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ms-4 ${
                      isOpen
                        ? "bg-teal-50 text-teal-600 rotate-180"
                        : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 text-slate-600 text-lg leading-relaxed border-t border-slate-50">
                        <div className={`${isRtl ? "ps-12" : "ps-12"}`}>
                          {isRtl ? faq.aAr : faq.aEn}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
