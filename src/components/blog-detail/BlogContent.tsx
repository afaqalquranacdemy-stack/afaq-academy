"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { BlogPost } from "@/data/blogs";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  const { locale, isRtl } = useLanguage();
  
  const content = locale === "ar" ? post.contentAr : post.contentEn;

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`prose prose-base md:prose-lg prose-slate max-w-none prose-headings:font-bold prose-a:text-teal-600 hover:prose-a:text-teal-700 prose-img:rounded-2xl ${isRtl ? "font-cairo text-right" : "font-serif"}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
 
          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-slate-200 flex flex-wrap gap-2.5"
          >
            {(locale === "ar" ? post.tagsAr : post.tagsEn)?.map((tag: string, idx: number) => (
              <span 
                key={idx}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-100 text-slate-600 text-xs md:text-sm font-semibold hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
