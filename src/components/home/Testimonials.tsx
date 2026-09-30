"use client";

import { useRef, useState, type MouseEvent, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({ testimonial, locale, isRtl }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x=e.clientX-rect.left, y=e.clientY-rect.top, cx=rect.width/2, cy=rect.height/2;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    cardRef.current.style.transform=`perspective(900px) rotateX(${((y-cy)/cy)*-4}deg) rotateY(${((x-cx)/cx)*4}deg) translateY(-4px)`;
  };
  const handleMouseLeave=()=>{if(cardRef.current) cardRef.current.style.transform="perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)"};
  return <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="w-[320px] md:w-[450px] glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shrink-0 group border border-slate-200 relative overflow-hidden flex flex-col" style={{transition:"transform .35s cubic-bezier(.16,1,.3,1), box-shadow .5s ease, border-color .5s ease"}}>
    <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(13,148,136,0.06),transparent_40%)]" />
    <div className={`absolute top-0 ${isRtl?"left-0":"right-0"} w-48 h-48 bg-teal-100/50 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
    <div className={`absolute bottom-0 ${isRtl?"right-0":"left-0"} w-48 h-48 bg-indigo-100/50 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
    <div className="relative z-10 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-6 md:mb-8">
        <div className="flex gap-1 bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-slate-100 shadow-sm">{[...Array(5)].map((_,i)=><Star key={i} className={`w-3.5 h-3.5 md:w-4 md:h-4 ${i<testimonial.rating?"fill-amber-400 text-amber-400":"text-slate-200"}`} />)}</div>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"><Quote className="w-4 h-4 md:w-5 md:h-5 text-teal-600" /></div>
      </div>
      <p className={`text-slate-600 text-base md:text-xl leading-relaxed mb-6 md:mb-10 flex-grow font-light italic ${isRtl?"font-cairo":"font-serif"}`}>&ldquo;{locale==="ar"?testimonial.review.ar:testimonial.review.en}&rdquo;</p>
      <div className="flex items-center gap-3 md:gap-4 border-t border-slate-100 pt-5 md:pt-6 mt-auto">
        <div className="relative w-11 h-11 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0 border-2 border-white group-hover:border-teal-200 shadow-sm transition-all duration-500"><div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base md:text-lg">{locale==="ar"?testimonial.name.ar.charAt(0):testimonial.name.en.charAt(0)}</div></div>
        <div className="min-w-0"><h4 className={`text-slate-900 font-bold text-base md:text-lg truncate group-hover:text-teal-600 transition-colors duration-300 ${isRtl?"font-cairo":""}`}>{locale==="ar"?testimonial.name.ar:testimonial.name.en}</h4>
          <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-slate-500 truncate mt-0.5 md:mt-1"><span className="truncate">{locale==="ar"?testimonial.course.ar:testimonial.course.en}</span><span className="w-1 h-1 rounded-full bg-teal-500/50 shrink-0" /><span className="truncate font-medium text-slate-600">{locale==="ar"?testimonial.location.ar:testimonial.location.en}</span><span className="w-1 h-1 rounded-full bg-teal-500/50 shrink-0" /><span className="flex items-center gap-1 text-teal-600 font-medium">✓ {locale==="ar"?"موثق":"Verified"}</span></div>
        </div>
      </div>
    </div>
  </div>;
}

export function Testimonials(){
  const {t,locale,isRtl}=useLanguage();
  const [activeIndex,setActiveIndex]=useState(0);
  const [touchStart,setTouchStart]=useState<number|null>(null);
  const getIndex=(offset:number)=>(activeIndex+offset+testimonials.length)%testimonials.length;
  const next=()=>setActiveIndex(p=>(p+1)%testimonials.length);
  const prev=()=>setActiveIndex(p=>(p-1+testimonials.length)%testimonials.length);
  const onTouchStart=(e:TouchEvent<HTMLDivElement>)=>setTouchStart(e.changedTouches[0]?.clientX??null);
  const onTouchEnd=(e:TouchEvent<HTMLDivElement>)=>{if(touchStart===null)return;const d=(e.changedTouches[0]?.clientX??touchStart)-touchStart;if(Math.abs(d)>55)(d>0?prev:next)();setTouchStart(null)};
  const positions=[{offset:-1,cls:"hidden lg:block opacity-40 -translate-x-[78%] scale-[0.86] blur-[2px] z-10"},{offset:0,cls:"opacity-100 translate-x-0 scale-100 z-30"},{offset:1,cls:"hidden lg:block opacity-40 translate-x-[78%] scale-[0.86] blur-[2px] z-10"}];
  return <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
    <div className="container mx-auto px-4 md:px-8 relative z-20 mb-8 text-center flex flex-col items-center"><div data-reveal="true" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-sm font-bold tracking-widest uppercase mb-4 shadow-sm"><Sparkles className="w-4 h-4" />{t.testimonials.title}</div><h2 data-reveal="true" className={`text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-950 tracking-tight max-w-xl ${isRtl?"font-cairo leading-[1.3]":"font-serif"}`}>{t.testimonials.subtitle}</h2></div>
    <div className="relative max-w-7xl mx-auto px-4 w-full">
      <div className="absolute inset-x-0 top-[45%] -translate-y-1/2 flex justify-between px-2 z-40 pointer-events-none"><button onClick={prev} aria-label={isRtl?"التالي":"Previous"} className="w-11 h-11 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl md:shadow-2xl flex items-center justify-center pointer-events-auto text-slate-800 hover:text-teal-600 hover:scale-105 transition-all"><ChevronLeft className={`w-6 h-6 md:w-8 md:h-8 ${isRtl?"rotate-180":""}`} /></button><button onClick={next} aria-label={isRtl?"السابق":"Next"} className="w-11 h-11 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl md:shadow-2xl flex items-center justify-center pointer-events-auto text-slate-800 hover:text-teal-600 hover:scale-105 transition-all"><ChevronRight className={`w-6 h-6 md:w-8 md:h-8 ${isRtl?"rotate-180":""}`} /></button></div>
      <div data-reveal="true" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} className="relative h-[360px] md:h-[520px] flex items-center justify-center touch-pan-y">{positions.map(({offset,cls})=><div key={`${activeIndex}-${offset}`} className={`absolute transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${cls}`}><TestimonialCard testimonial={testimonials[getIndex(offset)]} locale={locale} isRtl={isRtl} /></div>)}</div>
      <div className="flex justify-center gap-3 mt-6">{testimonials.map((_:any,i:number)=><button key={i} onClick={()=>setActiveIndex(i)} aria-label={`Go to slide ${i+1}`} className={`h-2 transition-all duration-500 rounded-full ${i===activeIndex?"w-12 bg-teal-500 shadow-[0_0_12px_rgba(20,184,166,0.4)]":"w-2 bg-slate-200 hover:bg-slate-300"}`} />)}</div>
    </div>
  </section>;
}
