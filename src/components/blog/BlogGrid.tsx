"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogs";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function BlogGrid() {
  const { locale, isRtl } = useLanguage();

  return (
    <section className="py-24 bg-[#F8FAFC]" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={locale === "ar" ? post.titleAr : post.titleEn}
                  fill
                  className="object-fill group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-teal-700 text-sm font-bold rounded-full shadow-lg">
                    {locale === "ar" ? post.categoryAr : post.categoryEn}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-slate-500 font-medium mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2 ${isRtl ? "font-cairo" : "font-serif"}`}>
                  {locale === "ar" ? post.titleAr : post.titleEn}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-8 line-clamp-3 flex-grow">
                  {locale === "ar" ? post.excerptAr : post.excerptEn}
                </p>

                {/* Footer */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm shrink-0">
                      {(locale === "ar" ? post.authorAr : post.authorEn).charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {locale === "ar" ? post.authorAr : post.authorEn}
                      </p>
                      <p className="text-xs text-slate-500">
                        {locale === "ar" ? post.authorRoleAr : post.authorRoleEn}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors shrink-0"
                  >
                    {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
