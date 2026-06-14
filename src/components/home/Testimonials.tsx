"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({ testimonial, locale, isRtl }: any) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[320px] md:w-[450px] glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shrink-0 group border border-slate-200 relative overflow-hidden flex flex-col"
      style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease, border-color 0.5s ease" }}
    >
      {/* Interactive glow */}
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(13,148,136,0.06),transparent_40%)]" />

      {/* Border reveal */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-inherit opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(13,148,136,0.2),transparent_40%)]"
        style={{
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
          borderRadius: "inherit",
        }}
      />

      {/* Glow Splashes */}
      <div className={`absolute top-0 ${isRtl ? "left-0" : "right-0"} w-48 h-48 bg-teal-100/50 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      <div className={`absolute bottom-0 ${isRtl ? "right-0" : "left-0"} w-48 h-48 bg-indigo-100/50 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6 md:mb-8">
          <div className="flex gap-1 bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-slate-100 shadow-sm">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 md:w-4 md:h-4 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"} transition-colors duration-300`} />
            ))}
          </div>
          <motion.div 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Quote className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
          </motion.div>
        </div>

        <p className={`text-slate-600 text-base md:text-xl leading-relaxed mb-6 md:mb-10 flex-grow font-light italic ${isRtl ? "font-cairo" : "font-serif"}`}>
          &ldquo;{locale === "ar" ? testimonial.review.ar : testimonial.review.en}&rdquo;
        </p>

        <div className="flex items-center gap-3 md:gap-4 border-t border-slate-100 pt-5 md:pt-6 mt-auto">
          <div className="relative w-11 h-11 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0 border-2 border-white group-hover:border-teal-200 shadow-sm transition-all duration-500 group-hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base md:text-lg">
              {locale === "ar" ? testimonial.name.ar.charAt(0) : testimonial.name.en.charAt(0)}
            </div>
          </div>
          <div className="min-w-0">
            <h4 className={`text-slate-900 font-bold text-base md:text-lg truncate group-hover:text-teal-600 transition-colors duration-300 ${isRtl ? "font-cairo" : ""}`}>
              {locale === "ar" ? testimonial.name.ar : testimonial.name.en}
            </h4>
            <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-slate-500 truncate mt-0.5 md:mt-1">
              <span className="truncate">{locale === "ar" ? testimonial.course.ar : testimonial.course.en}</span>
              <span className="w-1 h-1 rounded-full bg-teal-500/50 shrink-0" />
              <span className="truncate font-medium text-slate-600">{locale === "ar" ? testimonial.location.ar : testimonial.location.en}</span>
              <span className="w-1 h-1 rounded-full bg-teal-500/50 shrink-0" />
              <span className="flex items-center gap-1 text-teal-600 font-medium">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[12px] h-[12px] md:w-[14px] md:h-[14px]">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                {locale === "ar" ? "موثق" : "Verified"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t, locale, isRtl } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Helper to get cards at specific offsets
  const getIndex = (offset: number) => {
    return (activeIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* ═══ Top Section Divider ═══ */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none rotate-180">
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 mb-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-sm font-bold tracking-widest uppercase mb-4 shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          {t.testimonials.title}
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-950 tracking-tight max-w-xl ${isRtl ? "font-cairo leading-[1.3]" : "font-serif"}`}
        >
          {t.testimonials.subtitle}
        </motion.h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        {/* Navigation Controls */}
        <div className="absolute inset-x-0 top-[45%] -translate-y-1/2 flex justify-between px-2 md:-inline-x-12 z-40 pointer-events-none">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            aria-label={isRtl ? "التالي" : "Previous"}
            className="w-11 h-11 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl md:shadow-2xl flex items-center justify-center pointer-events-auto text-slate-800 hover:text-teal-600 transition-colors"
          >
            <ChevronLeft className={`w-6 h-6 md:w-8 md:h-8 ${isRtl ? "rotate-180" : ""}`} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            aria-label={isRtl ? "السابق" : "Next"}
            className="w-11 h-11 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl md:shadow-2xl flex items-center justify-center pointer-events-auto text-slate-800 hover:text-teal-600 transition-colors"
          >
            <ChevronRight className={`w-6 h-6 md:w-8 md:h-8 ${isRtl ? "rotate-180" : ""}`} />
          </motion.button>
        </div>

        {/* Carousel Container - Optimized for 100vh */}
        <div className="relative h-[340px] md:h-[500px] flex items-center justify-center overflow-visible">
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            {/* Side Card Left (Ghost) */}
            <motion.div
              key={`ghost-left-${getIndex(-1)}`}
              initial={{ opacity: 0, x: -100, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 0.4, x: -350, scale: 0.85, rotateY: 25, zIndex: 10, filter: "blur(4px)" }}
              exit={{ opacity: 0, x: -500, scale: 0.7 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute hidden lg:block"
            >
              <TestimonialCard testimonial={testimonials[getIndex(-1)]} locale={locale} isRtl={isRtl} />
            </motion.div>

            {/* Active Card */}
            <motion.div
              key={`active-${activeIndex}`}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300, scale: 0.9, rotateY: direction > 0 ? -25 : 25 }}
              animate={{ opacity: 1, x: 0, scale: 1.1, rotateY: 0, zIndex: 30, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: direction > 0 ? -300 : 300, scale: 0.9, rotateY: direction > 0 ? 25 : -25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-20 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) prev();
                else if (info.offset.x < -100) next();
              }}
            >
              <TestimonialCard testimonial={testimonials[activeIndex]} locale={locale} isRtl={isRtl} />
            </motion.div>

            {/* Side Card Right (Ghost) */}
            <motion.div
              key={`ghost-right-${getIndex(1)}`}
              initial={{ opacity: 0, x: 100, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 0.4, x: 350, scale: 0.85, rotateY: -25, zIndex: 10, filter: "blur(4px)" }}
              exit={{ opacity: 0, x: 500, scale: 0.7 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute hidden lg:block"
            >
              <TestimonialCard testimonial={testimonials[getIndex(1)]} locale={locale} isRtl={isRtl} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > activeIndex ? 1 : -1);
                setActiveIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 transition-all duration-500 rounded-full ${i === activeIndex ? "w-12 bg-teal-500 shadow-[0_0_12px_rgba(20,184,166,0.4)]" : "w-2 bg-slate-200 hover:bg-slate-300"}`}
            />
          ))}
        </div>
      </div>

      {/* ═══ Bottom Section Divider ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-12 bg-slate-950/[0.05] backdrop-blur-[3px] border-t border-slate-900/10" />
        
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
          <div className="absolute inset-x-[20%] h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent blur-[2px]" />
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center -translate-y-1/2"
          >
             <div className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-full scale-[2]" />
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
