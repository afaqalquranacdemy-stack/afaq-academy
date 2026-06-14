"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Image from "next/image";
import { Sparkles, Users, Calendar, Award } from "lucide-react";

const icons = {
  0: Award,
  1: Users,
  2: Calendar,
  3: Sparkles,
};

const bentoClasses = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "md:col-span-2 lg:col-span-3 lg:row-span-1"
];

function FeatureCard({ item, index, isRtl, bgImage }: any) {
  const Icon = icons[index as keyof typeof icons] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative h-full ${bentoClasses[index % bentoClasses.length] || ""}`}
    >
      <div 
        className={`relative h-full glass-card p-10 flex flex-col items-start overflow-hidden ${bgImage ? "border-white/30" : "border-slate-200/60"}`}
      >
        {/* Premium Background Image for card 01 */}
        {bgImage && (
          <div className="absolute inset-0 z-0">
            <Image 
              src={bgImage} 
              alt="" 
              fill
              className="object-cover opacity-95 group-hover:scale-110 transition-transform duration-[2s] ease-out"
            />
            {/* Overlay to ensure text readability - Clearer & More Defined */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/30 to-slate-950/60" />
            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[0.5px]" />
          </div>
        )}

        {/* Static Background Glow instead of mouse-reactive */}
        <div 
          className={`absolute inset-0 z-0 bg-[radial-gradient(400px_circle_at_50%_0%,rgba(13,148,136,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${bgImage ? "hidden" : ""}`}
        />
        {/* 3D Floating Icon (Remains, but simpler) */}
        <div className={`relative z-30 mb-8 p-4 rounded-2xl border transition-all duration-700 shadow-sm group-hover:scale-110 origin-left ${bgImage ? "bg-white/20 backdrop-blur-md border-white/30 group-hover:bg-white/40" : "bg-teal-50 border-teal-100/50 group-hover:bg-teal-100 group-hover:border-teal-200"}`}>
          <Icon className={`w-8 h-8 transition-colors duration-500 ${bgImage ? "text-white" : "text-teal-600"}`} />
        </div>

        <h3 className={`relative z-30 text-2xl md:text-3xl font-extrabold mb-4 transition-all duration-500 ${bgImage ? "text-white drop-shadow-sm" : "text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-teal-500"} ${isRtl ? "font-cairo leading-snug" : ""}`}>
          {item.title}
        </h3>
        
        <p className={`relative z-30 leading-relaxed text-lg font-medium transition-colors duration-500 ${bgImage ? "text-white/95 drop-shadow-sm" : "text-slate-700/90 group-hover:text-slate-900"}`}>
          {item.description}
        </p>

        {/* Bottom glow splash */}
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-teal-100/50 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-1000 z-0" />
        
        {/* Number watermark */}
        <div className={`absolute ${isRtl ? "left-6" : "right-6"} bottom-4 text-[120px] font-bold ${bgImage ? "text-white/[0.08]" : "text-slate-900/[0.03]"} pointer-events-none z-0 leading-none select-none`}>
          0{index + 1}
        </div>
      </div>
    </motion.div>
  );
}

export function ValueProposition() {
  const { t, isRtl } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  
  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden section-divider">
      {/* Background Decor - Extremely Soft & Fine */}
      <div className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none">
        <div className="absolute top-[2%] left-[2%] w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[18px] will-change-transform" />
        <div className="absolute bottom-[2%] right-[2%] w-[700px] h-[700px] bg-indigo-50/40 rounded-full blur-[18px] will-change-transform" />
      </div>

      {/* Noise texture - Ultra subtle for a premium paper feel */}
      <div className="noise-bg opacity-[0.015] invert scale-100" />

      <div className="container mx-auto px-2 md:px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-teal-700 text-sm font-bold tracking-widest uppercase mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            {t.value.title}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600 mb-8 ${isRtl ? "font-cairo leading-relaxed" : "font-serif"}`}
          >
            {t.value.subtitle}
          </motion.h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {t.value.items.map((item: any, i: number) => (
             <FeatureCard 
               key={i} 
               item={item} 
               index={i} 
               isRtl={isRtl} 
               bgImage={i === 0 ? "/about-card.webp" : undefined}
             />
          ))}
        </div>
      </div>

      {/* ═══ Ultra Premium Section Divider ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        {/* The Dark bar backdrop - Slightly Darker for better definition */}
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
