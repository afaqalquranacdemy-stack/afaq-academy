"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Users, GraduationCap, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutTeam() {
  const { isRtl } = useLanguage();

  const team = [
    {
      id: 1,
      nameAr: "د. أحمد محمد",
      nameEn: "Dr. Ahmed Mohammed",
      roleAr: "أستاذ التفسير",
      roleEn: "Professor of Tafseer",
      descAr: "دكتوراه في التفسير وعلوم القرآن من جامعة الأزهر. أكثر من ٢٠ عاماً في التدريس.",
      descEn: "PhD in Tafseer & Quranic Sciences from Al-Azhar University. Over 20 years of teaching.",
      image: "/images/team/ahmed.webp",
    },
    {
      id: 2,
      nameAr: "د. فاطمة عبد الله",
      nameEn: "Dr. Fatima Abdullah",
      roleAr: "أستاذة القراءات",
      roleEn: "Professor of Qira'at",
      descAr: "مجازة بالقراءات العشر المتواترة من أعلى الأسانيد. أشرفت على أكثر من ١٠٠٠ طالبة.",
      descEn: "Certified in 10 Qira'at with high Isnad. Supervised over 1000 students globally.",
      image: "/images/team/fatima.webp",
    },
    {
      id: 3,
      nameAr: "د. عمر محمود",
      nameEn: "Dr. Omar Mahmoud",
      roleAr: "أستاذ الفقه المقارن",
      roleEn: "Prof. of Comparative Fiqh",
      descAr: "متخصص في الفقه المقارن والسياسة الشرعية. له العديد من المؤلفات والأبحاث المحكمة.",
      descEn: "Specialist in Comparative Fiqh. Author of numerous peer-reviewed research papers.",
      image: "/images/team/omar.webp",
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Users className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
              {isRtl ? "أعضاء هيئة التدريس" : "Faculty Members"}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl ? "نخبة من " : "Elite "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              {isRtl ? "علماء الأزهر الشريف" : "Al-Azhar Scholars"}
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
              ? "يضم كادرنا الأكاديمي نخبة من العلماء المتخصصين والمجازين بأعلى الأسانيد لضمان جودة التعليم."
              : "Our academic staff includes elite specialized scholars certified with the highest isnads to ensure quality education."}
          </motion.p>
        </div>

        {/* Unified Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-2 rounded-[2.5rem] bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={isRtl ? member.nameAr : member.nameEn}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />

                {/* Floating Role Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-slate-800 text-[11px] font-bold shadow-lg flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                    {isRtl ? member.roleAr : member.roleEn}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors duration-300 ${isRtl ? "font-cairo" : "font-serif"}`}>
                  {isRtl ? member.nameAr : member.nameEn}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                  {isRtl ? member.descAr : member.descEn}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <Link
                    href={`/teachers/${member.id}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-700 font-bold text-xs group-hover:bg-[#0B1120] group-hover:text-white transition-all duration-300 w-full justify-center"
                  >
                    {isRtl ? "عرض السيرة الذاتية" : "View Profile"}
                    <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
