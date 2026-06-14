"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, User, Clock, Share2 } from "lucide-react";
import { BlogPost } from "@/data/blogs";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface BlogDetailHeroProps {
  post: BlogPost;
}

export function BlogDetailHero({ post }: BlogDetailHeroProps) {
  const { locale, isRtl } = useLanguage();

  const title = locale === "ar" ? post.titleAr : post.titleEn;
  const excerpt = locale === "ar" ? post.excerptAr : post.excerptEn;
  const category = locale === "ar" ? post.categoryAr : post.categoryEn;
  const readTime = post.readTime;
  const authorName = locale === "ar" ? post.authorAr : post.authorEn;
  const authorRole = locale === "ar" ? post.authorRoleAr : post.authorRoleEn;

  // Format date
  const dateObj = new Date(post.date);
  const formattedDate = new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateObj);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#0B1120] min-h-[70vh] flex flex-col justify-center">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={post.image}
          alt={title}
          fill
          priority
          className="object-fill opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm text-slate-400 font-medium mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide"
          >
            <Link href="/" className="hover:text-teal-400 transition-colors">{isRtl ? "الرئيسية" : "Home"}</Link>
            <ChevronRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
            <Link href="/blog" className="hover:text-teal-400 transition-colors">{isRtl ? "المدونة" : "Blog"}</Link>
            <ChevronRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
            <span className="text-slate-200 truncate max-w-[200px] sm:max-w-none">{title}</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold tracking-wider uppercase backdrop-blur-sm inline-block shadow-[0_0_15px_rgba(20,184,166,0.15)]">
              {category}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-md ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed"
          >
            {excerpt}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8"
          >
            {/* Author & Meta */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-lg backdrop-blur-sm shadow-[0_0_15px_rgba(20,184,166,0.1)] shrink-0">
                  {authorName.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{authorName}</div>
                  <div className="text-slate-400 text-xs">{authorRole}</div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-white/10" />

              <div className="flex items-center gap-4 text-sm text-slate-300 font-medium">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span>{readTime}</span>
                </div>
              </div>
            </div>

            {/* Share Button */}
            <button title="Share" aria-label="Share this post" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-400 hover:bg-teal-400/10 transition-all duration-300">
              <Share2 className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
