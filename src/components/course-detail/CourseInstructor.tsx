"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, Star, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function CourseInstructor() {
  const { isRtl } = useLanguage();

  return (
    <section className="py-24 bg-[#0B1120] relative overflow-hidden text-white">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-50" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
              {/* Image Side */}
              <div className="md:col-span-5 flex justify-center md:justify-start">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden relative shadow-2xl border-2 border-white/10">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image
                      src="/images/team/dr-ahmed.jpg" // Using a dummy image path
                      alt={isRtl ? "د. أحمد خليل" : "Dr. Ahmed Khalil"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 rtl:-left-6 rtl:-right-auto bg-slate-900 p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{isRtl ? "معتمد" : "Certified"}</div>
                      <div className="text-xs text-slate-400">{isRtl ? "الأزهر الشريف" : "Al-Azhar"}</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="md:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-bold tracking-wider uppercase mb-6">
                    {isRtl ? "كبير المعلمين" : "Lead Instructor"}
                  </div>
                  
                  <h2 className={`text-3xl md:text-4xl font-bold text-white mb-2 ${isRtl ? "font-cairo" : "font-serif"}`}>
                    {isRtl ? "الشيخ د. أحمد خليل" : "Sheikh Dr. Ahmed Khalil"}
                  </h2>
                  <p className="text-teal-400 font-medium mb-6">
                    {isRtl ? "أستاذ الشريعة وعلوم القرآن" : "Professor of Shariah & Quranic Sciences"}
                  </p>

                  <p className="text-slate-300 leading-relaxed mb-8">
                    {isRtl 
                      ? "عالم جليل تخرج من جامعة الأزهر الشريف بمصر. يتمتع بخبرة تزيد عن 15 عاماً في تدريس القرآن الكريم والعلوم الشرعية للناطقين بغير العربية. حاصل على إجازة بالقراءات العشر المتواترة بسند متصل إلى النبي ﷺ."
                      : "A distinguished scholar who graduated from Al-Azhar University in Egypt. He brings over 15 years of experience in teaching the Holy Quran and Islamic Sciences to non-Arabic speakers. He holds an Ijazah in the ten Mutawatir recitations with a continuous chain to the Prophet ﷺ."}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                        <Award className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div className="text-sm">
                        <div className="font-bold text-white">{isRtl ? "15+ سنة" : "15+ Years"}</div>
                        <div className="text-slate-400 text-xs">{isRtl ? "خبرة في التدريس" : "Teaching Exp."}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                        <BookOpen className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="text-sm">
                        <div className="font-bold text-white">{isRtl ? "إجازة عالية" : "High Ijazah"}</div>
                        <div className="text-slate-400 text-xs">{isRtl ? "بالقراءات العشر" : "10 Qira'at"}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                        <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
                      </div>
                      <div className="text-sm">
                        <div className="font-bold text-white">4.9/5</div>
                        <div className="text-slate-400 text-xs">{isRtl ? "تقييم الطلاب" : "Student Rating"}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
