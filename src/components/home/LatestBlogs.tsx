"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ArrowRight, Calendar, User, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { blogPosts as blogs } from "@/data/blogs";

export function LatestBlogs() {
  const { t, isRtl } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-slate-50 overflow-hidden section-divider">
      {/* Ultra Premium Background Enhancements */}
      <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Glowing Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-teal-200/30 rounded-full blur-[120px] mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-200/20 rounded-full blur-[120px] mix-blend-multiply animate-[pulse_10s_ease-in-out_infinite_alternate]" />
      </motion.div>
      
      {/* Subtle Premium Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-teal-600 w-fit mb-6 shadow-sm">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wider uppercase">{t.blogs?.title || "Latest Articles"}</span>
            </div>
            
            <h2 className={`text-3xl md:text-5xl font-bold tracking-tight text-slate-900 ${isRtl ? "font-cairo" : "font-serif"}`}>
              {t.blogs?.subtitle || "Insights and wisdom from our scholars"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/blog" 
              className="group inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              {t.blogs?.viewAll || "Read All Articles"}
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 6).map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={`/blog/${blog.slug}`} className="group block h-full">
                <div className="relative h-full flex flex-col rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(20,184,166,0.08)] transition-all duration-500 overflow-hidden">
                  
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image 
                      src={blog.image} 
                      alt={isRtl ? blog.titleAr : blog.titleEn}
                      fill
                      quality={80}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-fill transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-slate-900 shadow-sm">
                        {isRtl ? blog.categoryAr : blog.categoryEn}
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col flex-grow p-6 relative">
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-teal-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-teal-500" />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-teal-500" />
                        {isRtl ? blog.authorAr : blog.authorEn}
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2 ${isRtl ? "font-cairo" : "font-serif"}`}>
                      {isRtl ? blog.titleAr : blog.titleEn}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {isRtl ? blog.excerptAr : blog.excerptEn}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center text-teal-600 font-semibold text-sm">
                      <span className="relative">
                        {t.blogs?.readMore || "Read More"}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300" />
                      </span>
                      <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "mr-2 ml-0 rotate-180 group-hover:-translate-x-1" : ""}`} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Blogs CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-0.5"
          >
            {t.blogs?.viewAll || "Read All Articles"}
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
          </Link>
        </motion.div>
      </div>

      {/* ═══ Ultra Premium Section Divider ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-12 bg-white/[0.5] backdrop-blur-[3px] border-t border-slate-200/60" />
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center -translate-y-1/2"
          >
             <div className="absolute inset-0 bg-teal-500/10 blur-xl rounded-full scale-[1.5]" />
             <div className="relative px-6 py-2 rounded-full bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.3)]" />
               <Sparkles className="w-3 h-3 text-teal-600/70 mx-1" />
               <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(129,140,248,0.3)]" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
