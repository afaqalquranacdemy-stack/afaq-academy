"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Users, PlayCircle, ArrowRight, BookOpen, Sparkles, ChevronRight, MessageSquare } from "lucide-react";
import { Course } from "@/data/courses";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface CourseDetailHeroProps {
  course: Course;
}

export function CourseDetailHero({ course }: CourseDetailHeroProps) {
  const { locale, isRtl } = useLanguage();

  const title = course.title[locale as "ar" | "en"] || course.title.en;
  const description = course.description[locale as "ar" | "en"] || course.description.en;
  const price = course.price[locale as "ar" | "en"] || course.price.en;
  const duration = course.duration[locale as "ar" | "en"] || course.duration.en;

  const categoryAr = course.category === "Islamic Studies" ? "الدراسات الإسلامية" : 
                     course.category === "Quran" ? "القرآن" : 
                     course.category === "Arabic" ? "اللغة العربية" : "للأطفال";
                     
  const levelAr = course.level === "Beginner" ? "مبتدئ" : 
                  course.level === "Intermediate" ? "متوسط" : 
                  course.level === "Advanced" ? "متقدم" : "كل المستويات";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#0B1120] min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={course.image}
          alt={title}
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-transparent to-[#0B1120] opacity-80" />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm text-slate-400 font-medium mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide"
        >
          <Link href="/" className="hover:text-teal-400 transition-colors">{isRtl ? "الرئيسية" : "Home"}</Link>
          <ChevronRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
          <Link href="/courses" className="hover:text-teal-400 transition-colors">{isRtl ? "الدورات" : "Courses"}</Link>
          <ChevronRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
          <Link href={`/courses?category=${course.category}`} className="hover:text-teal-400 transition-colors">
            {isRtl ? categoryAr : course.category}
          </Link>
          <ChevronRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
          <span className="text-slate-200">{title}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold tracking-wider uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(20,184,166,0.15)]">
                {isRtl ? categoryAr : course.category}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold backdrop-blur-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                {isRtl ? levelAr : course.level}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md ${isRtl ? "font-cairo" : "font-serif"}`}
            >
              {title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl"
            >
              {description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-300 mb-12"
            >
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-full border border-white/10 backdrop-blur-sm">
                <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
                <span className="text-white text-base">{course.rating}</span>
                <span className="text-slate-400 ml-1">({isRtl ? "تقييم" : "Rating"})</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-full border border-white/10 backdrop-blur-sm">
                <Users className="w-5 h-5 text-indigo-400" />
                <span className="text-white text-base">{course.students}+</span>
                <span className="text-slate-400 ml-1">{isRtl ? "طالب" : "Students"}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-full border border-white/10 backdrop-blur-sm">
                <Clock className="w-5 h-5 text-teal-400" />
                <span className="text-white text-base">{duration}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link 
                href="https://wa.me/201061957018"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full font-bold text-white overflow-hidden shadow-[0_0_40px_rgba(20,184,166,0.3)] hover:shadow-[0_0_60px_rgba(20,184,166,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  {isRtl ? "احجز عبر الواتساب" : "Enroll via WhatsApp"}
                </span>
              </Link>
              
              <Link 
                href="/contact"
                className="w-full sm:w-auto group px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/50 rounded-full font-bold text-white transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                {isRtl ? "احجز حصة تجريبية مجانية" : "Book Free Trial"}
              </Link>
            </motion.div>
          </div>

          {/* Right Floating Card */}
          <div className="lg:col-span-5 xl:col-span-4 lg:justify-self-end w-full max-w-md hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-3xl p-[1px] bg-gradient-to-b from-teal-500/30 via-indigo-500/20 to-white/5 overflow-hidden shadow-2xl"
              style={{ transformPerspective: 1000 }}
            >
              <div className="absolute inset-0 bg-[#0B1120]/80 backdrop-blur-2xl z-0" />
              
              <div className="relative z-10 p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 p-[2px] mb-6 shadow-[0_0_30px_rgba(20,184,166,0.4)]">
                  <div className="w-full h-full rounded-full bg-[#0B1120] flex items-center justify-center border-4 border-[#0B1120]">
                    <BookOpen className="w-8 h-8 text-teal-400" />
                  </div>
                </div>

                <h3 className={`text-2xl font-bold text-white mb-2 ${isRtl ? "font-cairo" : ""}`}>
                  {isRtl ? "استثمارك في العلم" : "Investment in Knowledge"}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6">
                  {isRtl ? "مرونة في الدفع وإلغاء في أي وقت" : "Flexible payments, cancel anytime"}
                </p>

                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 mb-8">
                  {price}
                </div>

                <div className="w-full space-y-3 text-sm text-slate-300 text-left rtl:text-right font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    </div>
                    {isRtl ? "جلسات فردية مباشرة 1-to-1" : "Live 1-to-1 sessions"}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    </div>
                    {isRtl ? "علماء معتمدون من الأزهر" : "Certified Al-Azhar scholars"}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    </div>
                    {isRtl ? "جدول زمني مرن 24/7" : "Flexible 24/7 scheduling"}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    </div>
                    {isRtl ? "تقارير تقدم شهرية" : "Monthly progress reports"}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
