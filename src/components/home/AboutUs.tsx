"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Target, Globe, Shield, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutUs() {
  const { t, isRtl } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <section ref={ref} className="relative py-24 md:py-32 bg-slate-50 overflow-hidden section-divider">
      {/* Premium Light Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-100/50 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-100/50 rounded-full blur-[120px] mix-blend-multiply" />
        {/* Subtle grid pattern for ultra premium technical feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col relative"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-teal-600 w-fit mb-8 shadow-sm">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wider uppercase">{t.aboutUs.title}</span>
            </div>

            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight ${isRtl ? "font-cairo" : "font-serif"}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">
                {t.aboutUs.subtitle.split(' ').slice(0, -2).join(' ')}{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                {t.aboutUs.subtitle.split(' ').slice(-2).join(' ')}
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-10">
              {t.aboutUs.description}
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white transition-all duration-400 font-semibold tracking-wide shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-0.5"
              >
                {isRtl ? "اكتشف المزيد عنا" : "Discover More About Us"}
                <ArrowRight className={`w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              {[
                { value: t.aboutUs.stats.students, label: t.aboutUs.stats.studentsLabel },
                { value: t.aboutUs.stats.scholars, label: t.aboutUs.stats.scholarsLabel },
                { value: t.aboutUs.stats.years, label: t.aboutUs.stats.yearsLabel },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <div className={`text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight ${isRtl ? "font-sans" : "font-serif"}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Premium Cards / Visuals */}
          <div className="relative h-[600px] w-full hidden lg:block">
            <motion.div style={{ y: y1 }} className="absolute inset-0 flex flex-col gap-6 justify-center">
              
              {/* Mission Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`relative p-8 rounded-3xl overflow-hidden group ml-0 lg:${isRtl ? 'ml-12' : 'mr-12'} shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60`}
              >
                {/* Full Image Background */}
                <div className="absolute inset-0 bg-[url('/about-card.webp')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
                
                {/* Premium Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${isRtl ? 'from-transparent via-white/80 to-white/95' : 'from-white/95 via-white/80 to-transparent'} backdrop-blur-[2px]`} />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-start gap-6 max-w-[85%]">
                  <div className="p-4 rounded-2xl bg-white/90 border border-teal-100/50 text-teal-600 shrink-0 shadow-lg backdrop-blur-md group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white group-hover:shadow-teal-500/25 transition-all duration-500">
                    <Target className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold text-slate-900 mb-3 drop-shadow-sm ${isRtl ? "font-cairo" : ""}`}>{t.aboutUs.mission.title}</h3>
                    <p className="text-slate-700 leading-relaxed font-semibold drop-shadow-sm">{t.aboutUs.mission.description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className={`relative p-8 rounded-3xl overflow-hidden group mt-0 lg:mt-8 ml-0 lg:${isRtl ? 'mr-12' : 'ml-12'} shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60`}
              >
                {/* Premium Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/50" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                
                <div className="relative z-10 flex items-start gap-6 max-w-[85%]">
                  <div className="p-4 rounded-2xl bg-white/90 border border-indigo-100/50 text-indigo-600 shrink-0 shadow-lg backdrop-blur-md group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-indigo-500/25 transition-all duration-500">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold text-slate-900 mb-3 drop-shadow-sm ${isRtl ? "font-cairo" : ""}`}>{t.aboutUs.vision.title}</h3>
                    <p className="text-slate-700 leading-relaxed font-semibold drop-shadow-sm">{t.aboutUs.vision.description}</p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* Mobile version of Cards (without parallax) */}
          <div className="flex flex-col gap-6 lg:hidden mt-8">
            <div className="relative p-6 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 group">
              {/* Full Image Background */}
              <div className="absolute inset-0 bg-[url('/about-card.webp')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
              
              {/* Mobile overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/80 to-white/95 backdrop-blur-[2px]" />

              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="p-4 rounded-2xl bg-white/90 border border-teal-100/50 text-teal-600 shadow-md backdrop-blur-md group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white group-hover:shadow-teal-500/25 transition-all duration-500">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold text-slate-900 mb-2 drop-shadow-sm ${isRtl ? "font-cairo" : ""}`}>{t.aboutUs.mission.title}</h3>
                  <p className="text-slate-700 leading-relaxed text-sm font-semibold drop-shadow-sm">{t.aboutUs.mission.description}</p>
                </div>
              </div>
            </div>

            <div className="relative p-6 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/50" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="p-4 rounded-2xl bg-white/90 border border-indigo-100/50 text-indigo-600 shadow-md backdrop-blur-md group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-indigo-500/25 transition-all duration-500">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold text-slate-900 mb-2 drop-shadow-sm ${isRtl ? "font-cairo" : ""}`}>{t.aboutUs.vision.title}</h3>
                  <p className="text-slate-700 leading-relaxed text-sm font-semibold drop-shadow-sm">{t.aboutUs.vision.description}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Premium Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 lg:mt-32 w-full max-w-5xl mx-auto relative group"
        >
          {/* Decorative glows behind video */}
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-indigo-500/20 to-teal-500/20 blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Video Container */}
          <div 
            className="relative aspect-video rounded-3xl bg-slate-900 border border-slate-200/50 shadow-2xl overflow-hidden cursor-pointer"
            onClick={handlePlayVideo}
          >
            {/* HTML5 Video */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              controls={isPlaying}
              playsInline
              poster="/promo.webp"
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            >
              <source src="/WalamnahoPromo.webm" type="video/webm" />
              <source src="/WalamnahoPromo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Play Button Overlay (Visible only when paused) */}
            <div 
              className={`absolute inset-0 bg-slate-900/40 flex items-center justify-center transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
              
              <div className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500 shadow-[0_0_40px_rgba(20,184,166,0.3)]">
                <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-2" />
              </div>
            </div>
          </div>
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
