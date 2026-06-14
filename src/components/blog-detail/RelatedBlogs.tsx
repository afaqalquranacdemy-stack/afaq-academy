"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { BlogPost, blogPosts } from "@/data/blogs";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface RelatedBlogsProps {
  currentPost: BlogPost;
}

export function RelatedBlogs({ currentPost }: RelatedBlogsProps) {
  const { locale, isRtl } = useLanguage();

  // Find 2 posts, excluding the current one
  const relatedPosts = blogPosts
    .filter((p) => p.id !== currentPost.id)
    .slice(0, 2);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden section-divider">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-200 bg-teal-50 text-teal-700 text-sm font-bold tracking-wider uppercase mb-6 shadow-sm">
                <BookOpen className="w-4 h-4" />
                {isRtl ? "مقالات ذات صلة" : "Related Articles"}
              </div>
              
              <h2 className={`text-3xl font-bold text-slate-900 ${isRtl ? "font-cairo" : "font-serif"}`}>
                {isRtl ? "اقرأ أيضاً" : "Read More"}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/blog"
                className="group inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
              >
                {isRtl ? "تصفح المدونة" : "Explore Blog"}
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link href={`/blog/${post.slug}`} className="block h-full group">
                  <div className="bg-white rounded-3xl overflow-hidden h-full flex flex-col relative border border-slate-100 shadow-sm group-hover:border-teal-100 group-hover:shadow-xl transition-all duration-300">
                    
                    {/* Image Container */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={locale === "ar" ? post.titleAr : post.titleEn}
                        fill
                        className="object-fill transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                        {locale === "ar" ? post.categoryAr : post.categoryEn}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-4">
                        <span>{new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", { month: "short", day: "numeric" }).format(new Date(post.date))}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>

                      <h3 className={`text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors ${isRtl ? "font-cairo" : "font-serif"}`}>
                        {locale === "ar" ? post.titleAr : post.titleEn}
                      </h3>
                      
                      <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed mb-6">
                        {locale === "ar" ? post.excerptAr : post.excerptEn}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-xs shrink-0">
                            {(locale === "ar" ? post.authorAr : post.authorEn).charAt(0)}
                          </div>
                          <span className="text-sm font-semibold text-slate-900">
                            {locale === "ar" ? post.authorAr : post.authorEn}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
