"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Target, Eye, Compass, Heart, Bookmark } from "lucide-react";

export function AboutValues() {
  const { t, isRtl } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t.aboutUs.mission.title,
      description: t.aboutUs.mission.description,
      delay: 0.1,
      colSpan: "md:col-span-2 lg:col-span-3",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
    },
    {
      icon: Eye,
      title: t.aboutUs.vision.title,
      description: t.aboutUs.vision.description,
      delay: 0.2,
      colSpan: "md:col-span-2 lg:col-span-2",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
    },
    {
      icon: Compass,
      title: isRtl ? "منهجيتنا" : "Our Methodology",
      description: isRtl 
        ? "نعتمد أحدث الأساليب التقنية في نقل العلم الشرعي الأصيل للحفاظ على جودة التعليم وتيسيره لجميع الطلاب بطرق منهجية دقيقة." 
        : "We adopt the latest technical methods in transmitting authentic Islamic knowledge to maintain education quality systematically.",
      delay: 0.3,
      colSpan: "md:col-span-1 lg:col-span-2",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
    {
      icon: Heart,
      title: isRtl ? "قيمنا" : "Our Core Values",
      description: isRtl 
        ? "الإخلاص، الإتقان، التيسير، والأصالة هي الركائز الأساسية التي تنبني عليها كافة برامجنا وأنشطتنا التعليمية." 
        : "Sincerity, mastery, facilitation, and authenticity are the fundamental pillars upon which all our educational programs are built.",
      delay: 0.4,
      colSpan: "md:col-span-1 lg:col-span-3",
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Bookmark className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
              {isRtl ? "الهوية الأكاديمية" : "Academic Identity"}
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl ? "نبني جيلاً يعتز " : "Building a generation proud of "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              {isRtl ? "بدينه وعلمه" : "faith & knowledge"}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed max-w-2xl"
          >
            {isRtl 
              ? "نؤمن بأن العلم الشرعي هو الأساس المتين لبناء جيل واعي ومثقف، ولذلك سخرنا كل إمكانياتنا لتقديم تجربة تعليمية فريدة."
              : "We believe that Islamic knowledge is the solid foundation for building an aware generation, so we harnessed all our capabilities to provide a unique learning experience."}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: val.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group glass-card bg-white/80 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${val.colSpan}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${val.bg} ${val.color} border ${val.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <val.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                    0{idx + 1}
                  </div>
                </div>
                
                <h3 className={`text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors duration-300 ${isRtl ? "font-cairo" : "font-serif"}`}>
                  {val.title}
                </h3>
                
                <p className="text-slate-500 text-sm md:text-base leading-relaxed flex-grow">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
