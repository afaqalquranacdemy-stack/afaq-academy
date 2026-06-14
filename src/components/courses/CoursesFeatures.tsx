"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  BookOpen,
  Clock,
  Users,
  ShieldCheck,
  Headphones,
  Globe,
  Award,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: Users,
    titleAr: "جلسات فردية مباشرة",
    titleEn: "1-on-1 Live Sessions",
    descAr:
      "تواصل مباشر مع معلمك الخاص لضمان أعلى مستويات التركيز والاستفادة الشخصية.",
    descEn:
      "Direct communication with your private tutor ensuring maximum focus and personal benefit.",
    statValue: "100%",
    statLabelAr: "اهتمام شخصي",
    statLabelEn: "Personal Attention",
    gradient: "from-teal-500 to-emerald-500",
    glow: "group-hover:shadow-teal-500/20",
  },
  {
    icon: Clock,
    titleAr: "مرونة كاملة 24/7",
    titleEn: "Full Flexibility 24/7",
    descAr:
      "اختر أوقات الدراسة التي تناسب جدولك — نحن نعمل على مدار الساعة، كل أيام الأسبوع.",
    descEn:
      "Choose study times that fit your schedule — we operate around the clock, every day of the week.",
    statValue: "24/7",
    statLabelAr: "متاح دائماً",
    statLabelEn: "Always Available",
    gradient: "from-indigo-500 to-violet-500",
    glow: "group-hover:shadow-indigo-500/20",
  },
  {
    icon: ShieldCheck,
    titleAr: "مسار موثوق للإجازة",
    titleEn: "Trusted Ijazah Track",
    descAr:
      "برامج متخصصة تنتهي بالحصول على إجازة بسند متصل إلى النبي ﷺ.",
    descEn:
      "Specialized programs ending with obtaining an Ijazah with a continuous chain to the Prophet ﷺ.",
    statValue: "✓",
    statLabelAr: "سند متصل",
    statLabelEn: "Connected Chain",
    gradient: "from-amber-500 to-orange-500",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    icon: BookOpen,
    titleAr: "مناهج الأزهر الشريف",
    titleEn: "Al-Azhar Curriculums",
    descAr:
      "نعتمد في تدريسنا على مناهج الأزهر الشريف الموثوقة والمعتمدة عالمياً.",
    descEn:
      "We rely on the globally trusted and accredited Al-Azhar curriculums.",
    statValue: "50+",
    statLabelAr: "عالم أزهري",
    statLabelEn: "Azhar Scholars",
    gradient: "from-rose-500 to-pink-500",
    glow: "group-hover:shadow-rose-500/20",
  },
  {
    icon: Globe,
    titleAr: "مجتمع عالمي",
    titleEn: "Global Community",
    descAr:
      "طلاب من أكثر من 30 دولة — مجتمع متنوع يجمعه حب العلم والمعرفة.",
    descEn:
      "Students from over 30 countries — a diverse community united by the love of knowledge.",
    statValue: "30+",
    statLabelAr: "دولة",
    statLabelEn: "Countries",
    gradient: "from-cyan-500 to-blue-500",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    icon: Headphones,
    titleAr: "دعم فني مستمر",
    titleEn: "Continuous Support",
    descAr:
      "فريق دعم فني متخصص جاهز لمساعدتك في أي وقت عبر واتساب والبريد الإلكتروني.",
    descEn:
      "A dedicated support team ready to help you anytime via WhatsApp and email.",
    statValue: "<2h",
    statLabelAr: "وقت الاستجابة",
    statLabelEn: "Response Time",
    gradient: "from-emerald-500 to-green-500",
    glow: "group-hover:shadow-emerald-500/20",
  },
];

export function CoursesFeatures() {
  const { isRtl } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative section-divider overflow-hidden">
      {/* Background */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-teal-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-indigo-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
            {isRtl ? "لماذا تختارنا؟" : "Why Choose Us?"}
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl
              ? "تجربة تعليمية لا تُضاهى"
              : "An Unmatched Learning Experience"}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {isRtl
              ? "نقدم تجربة تعليمية فريدة تجمع بين الخبرة الأكاديمية والتقنية الحديثة"
              : "We deliver a unique learning experience that combines academic expertise with modern technology"}
          </p>
        </motion.div>

        {/* Features Grid — 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: idx * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`glass-card p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl ${feat.glow} transition-all duration-500 group relative overflow-hidden`}
            >
              {/* Decorative glow */}
              <div
                className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${feat.gradient} opacity-0 group-hover:opacity-10 blur-[60px] rounded-full transition-all duration-700`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feat.gradient} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <feat.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors ${isRtl ? "font-cairo" : ""}`}
                >
                  {isRtl ? feat.titleAr : feat.titleEn}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {isRtl ? feat.descAr : feat.descEn}
                </p>

                {/* Stat */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <span
                    className={`text-2xl font-black bg-gradient-to-r ${feat.gradient} bg-clip-text text-transparent`}
                  >
                    {feat.statValue}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {isRtl ? feat.statLabelAr : feat.statLabelEn}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
