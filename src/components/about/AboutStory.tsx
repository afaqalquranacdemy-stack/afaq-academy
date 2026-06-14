"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { CheckCircle2, Play, BookOpen } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

export function AboutStory() {
  const { t, isRtl } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 md:py-32 relative bg-white overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col pr-0 lg:pr-8 xl:pr-12"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-8 self-start shadow-sm">
              <BookOpen className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                {isRtl ? "نشأة المنصة" : "Origin Story"}
              </span>
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight ${isRtl ? "font-cairo" : "font-serif"}`}>
              {isRtl ? "نضيء دروب العلم برؤية " : "Illuminating Paths with "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                {isRtl ? "معاصرة" : "Modern Vision"}
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                {t.aboutUs.description}
              </p>
              
              {/* Highlight Quote Block */}
              <div className="relative p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm mt-8">
                <p className="text-slate-700 italic font-medium">
                  {isRtl 
                    ? "« لقد صممنا أكاديميتنا لتكون منصة عالمية تجمع بين أصالة العلم الشرعي المستمد من كبار علماء الأزهر الشريف، وبين أحدث تقنيات التعليم عن بعد. هدفنا هو تذليل كل الصعاب أمام طالب العلم. »"
                    : '"We designed our academy to be a global platform that combines the authenticity of sacred knowledge derived from senior Al-Azhar scholars with the latest remote learning technologies."'
                  }
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  isRtl ? "مناهج معتمدة وأكاديمية" : "Accredited Curriculums",
                  isRtl ? "إجازات بسند متصل" : "Continuous Ijazah Chains",
                  isRtl ? "متابعة وتقييم مستمر" : "Continuous Evaluation",
                  isRtl ? "بيئة تفاعلية متطورة" : "Advanced Environment"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center gap-3 text-slate-700 font-bold group bg-white p-3 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-100 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm md:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Media Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:ml-8 mt-10 lg:mt-0"
          >
            {/* Main Glass Frame */}
            <div className="glass-card p-3 rounded-[3rem] bg-white/60 border border-white/80 shadow-2xl shadow-teal-900/5 backdrop-blur-xl">
              <div 
                className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] group bg-slate-900 cursor-pointer"
                onClick={handlePlayVideo}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/images/courses/courses-bg.webp"
                  playsInline
                  loop
                >
                  <source src="/WalamnahoPromo.webm" type="video/webm" />
                  <source src="/WalamnahoPromo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className={`absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500 pointer-events-none ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />
                
                {/* Play Button */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center hover:scale-110 hover:bg-teal-500 group/btn transition-all duration-300">
                      <Play className="w-8 h-8 text-teal-600 group-hover/btn:text-white fill-current ml-1" />
                    </div>
                  </div>
                )}

                {/* Floating Badge */}
                <div className={`absolute top-6 ${isRtl ? 'right-6' : 'left-6'} bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2 pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Promo</span>
                </div>
              </div>
            </div>

            {/* Decorative Floating Element */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 glass-card bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 z-20 flex flex-col items-center justify-center gap-1 min-w-[200px]">
              <div className="text-xs text-slate-500 font-bold uppercase mb-1">
                {isRtl ? 'إجمالي الساعات' : 'Total Hours'}
              </div>
              <p className={`text-3xl font-black text-teal-600 ${isRtl ? 'font-cairo' : 'font-serif'}`}>10,000<span className="text-amber-400">+</span></p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
