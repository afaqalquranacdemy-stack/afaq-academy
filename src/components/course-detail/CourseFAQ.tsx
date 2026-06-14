"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const faqs = {
  en: [
    {
      question: "Do I need prior knowledge to join?",
      answer: "This course is tailored to fit your current level. We will assess your proficiency during the first session and customize the curriculum to ensure a smooth learning experience.",
    },
    {
      question: "Will I receive an official certificate or Ijazah?",
      answer: "Yes. Upon successful completion of the course requirements, you will receive an official certificate. For advanced Quran students, an Ijazah with a continuous chain to the Prophet ﷺ can be earned.",
    },
    {
      question: "Are the classes live or pre-recorded?",
      answer: "All our sessions are 1-on-1 live interactive classes. We believe direct interaction with certified Al-Azhar scholars yields the best and fastest educational results.",
    },
    {
      question: "What happens if I miss a scheduled class?",
      answer: "We offer flexible scheduling. You can easily reschedule your class through our student portal up to 12 hours before the session without any penalty.",
    },
  ],
  ar: [
    {
      question: "هل أحتاج إلى معرفة مسبقة للالتحاق؟",
      answer: "هذه الدورة مصممة لتناسب مستواك الحالي. سنقوم بتقييم كفاءتك في الجلسة الأولى وتخصيص المنهج لضمان تجربة تعليمية سلسة ومثمرة.",
    },
    {
      question: "هل سأحصل على شهادة رسمية أو إجازة؟",
      answer: "نعم. عند اجتياز متطلبات الدورة بنجاح، ستحصل على شهادة رسمية. لطلاب القرآن المتقدمين، يمكن الحصول على إجازة بسند متصل إلى النبي ﷺ.",
    },
    {
      question: "هل الدروس مباشرة أم مسجلة مسبقاً؟",
      answer: "جميع جلساتنا تفاعلية مباشرة 1×1. نحن نؤمن بأن التفاعل المباشر مع نخبة من علماء الأزهر المعتمدين يحقق أفضل وأسرع النتائج التعليمية.",
    },
    {
      question: "ماذا يحدث إذا فاتني درس مجدول؟",
      answer: "نحن نقدم مرونة في الجدولة. يمكنك إعادة جدولة حصتك بسهولة من خلال بوابة الطالب الخاصة بنا حتى 12 ساعة قبل الجلسة دون أي غرامات.",
    },
  ],
};

export function CourseFAQ() {
  const { locale } = useLanguage();
  const currentFaqs = faqs[locale === "ar" ? "ar" : "en"];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] opacity-5" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-teal-50 text-teal-600 rounded-2xl mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {locale === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>
          <p className="text-lg text-slate-600">
            {locale === "ar"
              ? "كل ما تحتاج لمعرفته حول الدورة وطريقة سير الدروس"
              : "Everything you need to know about the course and how our classes work"}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {currentFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group border rounded-2xl transition-all duration-300 ${
                  isOpen ? "bg-white border-teal-200 shadow-lg shadow-teal-900/5" : "bg-slate-50 border-slate-200 hover:border-teal-200"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? "text-teal-700" : "text-slate-800"}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 ml-4 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${
                      isOpen ? "bg-teal-100 text-teal-600" : "bg-white text-slate-400 group-hover:text-teal-500 border border-slate-200"
                    }`}
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
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
