"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Star, PlayCircle, BookOpen } from "lucide-react";
import { Course, courses } from "@/data/courses";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface RelatedCoursesProps {
  currentCourse: Course;
}

export function RelatedCourses({ currentCourse }: RelatedCoursesProps) {
  const { locale, isRtl, t } = useLanguage();

  // Find 3 courses from the same category, excluding the current one
  const relatedCourses = courses
    .filter((c) => c.category === currentCourse.category && c.id !== currentCourse.id)
    .slice(0, 3);

  // If there aren't enough related courses, just pad with other featured ones
  if (relatedCourses.length < 3) {
    const fallback = courses.filter((c) => c.id !== currentCourse.id && !relatedCourses.includes(c)).slice(0, 3 - relatedCourses.length);
    relatedCourses.push(...fallback);
  }

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden section-divider">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-200 bg-teal-50 text-teal-700 text-sm font-bold tracking-wider uppercase mb-6 shadow-sm">
              <BookOpen className="w-4 h-4" />
              {isRtl ? "دورات ذات صلة" : "Related Courses"}
            </div>
            
            <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 ${isRtl ? "font-cairo" : "font-serif"}`}>
              {isRtl ? "قد يعجبك أيضاً" : "You Might Also Like"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href={`/courses?category=${currentCourse.category}`}
              className="group inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              {isRtl ? "تصفح القسم" : "Explore Category"}
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <Link href={`/courses/${course.slug}`} className="block h-full group">
                <div className="bg-white rounded-[2rem] overflow-hidden h-full flex flex-col relative border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:border-teal-100 group-hover:shadow-[0_20px_40px_rgba(20,184,166,0.08)] transition-all duration-500 hover:-translate-y-1">
                  
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    
                    <Image
                      src={course.image}
                      alt={course.title[locale as "ar" | "en"] || course.title.en}
                      fill
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                      <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50">
                        <PlayCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-semibold">
                      <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-teal-500" /> {course.duration[locale as "ar" | "en"] || course.duration.en}
                      </span>
                      <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md">
                        <Star className="w-3.5 h-3.5 text-amber-500" fill="currentColor" /> {course.rating}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors ${isRtl ? "font-cairo" : ""}`}>
                      {course.title[locale as "ar" | "en"] || course.title.en}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
