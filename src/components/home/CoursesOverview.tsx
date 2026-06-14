"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Star, PlayCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { courses } from "@/data/courses";

const categories = ["FEATURED", "Quran", "Arabic", "Islamic Studies", "Kids"];

function CourseCard({ course, index, locale, isRtl }: any) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="h-full"
    >
      <Link href={`/courses/${course.slug}`} className="block h-full group">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden h-full flex flex-col relative border border-slate-200/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_30px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] group-hover:border-teal-400/50 group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_24px_60px_-12px_rgba(13,148,136,0.25),0_0_0_1px_rgba(13,148,136,0.1)]"
          style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease, border-color 0.5s ease" }}
        >
          {/* Interactive glow */}
          <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 bg-[radial-gradient(500px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(13,148,136,0.08),transparent_40%)]" />

          {/* Image Container */}
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            {/* Dark/Light Gradient Overlay for Premium Look */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-teal-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <Image
              src={course.image}
              alt={course.title[locale as keyof typeof course.title] || course.title.en}
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />

            {/* Floating Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:bg-white/30 transition-colors">
                <PlayCircle className="w-8 h-8 text-white drop-shadow-md" />
              </div>
            </div>

            {/* Course Badge */}
            <div className="absolute top-5 left-5 z-20">
              <span className="px-4 py-2 text-xs font-bold rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg uppercase tracking-wider">
                {course.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-grow relative z-20 bg-gradient-to-b from-white/40 to-white/80">
            <div className="flex items-center gap-6 text-sm text-slate-500 mb-5 font-semibold">
              <span className="flex items-center gap-2 bg-slate-100/50 px-3 py-1.5 rounded-full border border-slate-200/50">
                <Clock className="w-4 h-4 text-teal-600" /> {course.duration[locale as keyof typeof course.duration] || course.duration.en}
              </span>
              <span className="flex items-center gap-2 bg-slate-100/50 px-3 py-1.5 rounded-full border border-slate-200/50">
                <Star className="w-4 h-4 text-amber-500" fill="currentColor" /> {course.rating}
              </span>
            </div>

            <h3 className={`text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-teal-600 transition-colors duration-500 drop-shadow-sm ${isRtl ? "font-cairo" : ""}`}>
              {course.title[locale as keyof typeof course.title] || course.title.en}
            </h3>

            <p className="text-slate-600 line-clamp-2 mb-8 flex-grow leading-relaxed font-medium">
              {course.description[locale as keyof typeof course.description] || course.description.en}
            </p>

            {/* Footer */}
            <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between mt-auto">
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-500 uppercase tracking-widest mb-1 font-bold">{isRtl ? "يبدأ من" : "Starts from"}</span>
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">{course.price[locale as keyof typeof course.price] || course.price.en}</span>
              </div>
              <div className="w-14 h-14 rounded-full border border-teal-100 flex items-center justify-center bg-teal-50 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-indigo-500 transition-all duration-500 shadow-sm group-hover:shadow-[0_8px_20px_rgba(20,184,166,0.3)] group-hover:scale-110 group-hover:-rotate-12">
                <ArrowRight className={`w-6 h-6 text-teal-600 group-hover:text-white transition-all duration-300 ${isRtl ? "rotate-180" : ""}`} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function CoursesOverview() {
  const { t, locale, isRtl } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("FEATURED");

  const filteredCourses = courses
    .filter((c) => {
      if (activeCategory === "ALL") return true;
      if (activeCategory === "FEATURED") return c.isFeatured;
      return c.category === activeCategory;
    })
    .slice(0, 6);

  return (
    <section className="relative py-32 md:py-48 bg-slate-50 overflow-hidden section-divider">
      {/* Premium Light Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-100/50 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-100/50 rounded-full blur-[120px] mix-blend-multiply" />
        {/* Subtle grid pattern for ultra premium technical feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-70" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-200 bg-teal-50 text-teal-700 text-sm font-bold tracking-wider uppercase mb-8 shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              {t.courses.title}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 tracking-tight ${isRtl ? "font-cairo leading-[1.4]" : "font-serif"}`}
            >
              {t.courses.subtitle}
            </motion.h2>
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/courses"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-slate-200 hover:border-teal-300 bg-white hover:bg-teal-50 text-slate-700 transition-all duration-400 font-medium tracking-wide shadow-sm hover:shadow-md"
            >
              {t.courses.viewAll}
              <ArrowRight className={`w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </Link>
          </motion.div>
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-500 tracking-wide outline-none ${activeCategory === category
                ? "bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md shadow-teal-500/20 scale-105"
                : "bg-white text-slate-600 hover:bg-slate-50 hover:text-teal-600 border border-slate-200 hover:border-slate-300"
                }`}
            >
              {category === "FEATURED" 
                ? (isRtl ? "الكورسات المميزة" : "Featured Courses") 
                : (category === "Islamic Studies" && isRtl ? "الدراسات الإسلامية" : 
                   category === "Quran" && isRtl ? "القرآن" :
                   category === "Arabic" && isRtl ? "اللغة العربية" :
                   category === "Kids" && isRtl ? "للأطفال" : category)}
            </button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} locale={locale} isRtl={isRtl} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ═══ Ultra Premium Section Divider ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        {/* The Dark bar backdrop - Synced with Why Us */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-slate-950/[0.05] backdrop-blur-[3px] border-t border-slate-900/10" />

        {/* The Decorative Divider */}
        <div className="relative w-full flex items-center justify-center">
          {/* Main Glowing Line */}
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
          <div className="absolute inset-x-[20%] h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent blur-[2px]" />

          {/* Centered Premium Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center -translate-y-1/2"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-full scale-[2]" />

            {/* The Capsule */}
            <div className="relative px-6 py-2.5 rounded-full bg-slate-900 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
              <Sparkles className="w-4 h-4 text-teal-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_rgba(129,140,248,0.6)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
