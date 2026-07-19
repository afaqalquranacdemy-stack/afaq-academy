"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Mail, MessageCircle, MapPin, Phone, ArrowRight, ExternalLink } from "lucide-react";

export function ContactCards() {
  const { isRtl } = useLanguage();

  const cards = [
    {
      icon: MessageCircle,
      titleAr: "واتساب",
      titleEn: "WhatsApp",
      detailAr: "رد فوري خلال دقائق",
      detailEn: "Instant reply within minutes",
      valueAr: "+20 10 4121 3922",
      valueEn: "+20 10 4121 3922",
      link: "https://wa.me/201041213922",
      actionAr: "ابدأ المحادثة",
      actionEn: "Start Chat",
      gradient: "from-green-500 to-emerald-600",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      hoverBorder: "hover:border-green-200",
      hoverShadow: "hover:shadow-green-500/10",
    },
    {
      icon: Mail,
      titleAr: "البريد الإلكتروني",
      titleEn: "Email",
      detailAr: "رد خلال ساعة",
      detailEn: "Reply within an hour",
      valueAr: "info@afaqalquran.com",
      valueEn: "info@afaqalquran.com",
      link: "mailto:afaqalquranacdemy@gmail.com",
      actionAr: "أرسل بريداً",
      actionEn: "Send Email",
      gradient: "from-indigo-500 to-violet-600",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      hoverBorder: "hover:border-indigo-200",
      hoverShadow: "hover:shadow-indigo-500/10",
    },
    {
      icon: Phone,
      titleAr: "اتصل بنا",
      titleEn: "Call Us",
      detailAr: "متاح ٢٤ ساعة / ٧ أيام",
      detailEn: "Available 24/7",
      valueAr: "+20 10 4121 3922",
      valueEn: "+20 10 4121 3922",
      link: "tel:+201041213922",
      actionAr: "اتصل الآن",
      actionEn: "Call Now",
      gradient: "from-teal-500 to-cyan-600",
      iconBg: "bg-teal-50",
      iconColor: "text-teal-600",
      hoverBorder: "hover:border-teal-200",
      hoverShadow: "hover:shadow-teal-500/10",
    },
    {
      icon: MapPin,
      titleAr: "الموقع",
      titleEn: "Location",
      detailAr: "أكاديمية تعليم عن بعد",
      detailEn: "Online Academy",
      valueAr: "من مصر للعالم 🌍",
      valueEn: "From Egypt to the World 🌍",
      link: "#",
      actionAr: "تعلم من أي مكان",
      actionEn: "Learn from anywhere",
      gradient: "from-amber-500 to-orange-600",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      hoverBorder: "hover:border-amber-200",
      hoverShadow: "hover:shadow-amber-500/10",
    },
  ];

  return (
    <section className="relative z-20 pt-[10vh] pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {cards.map((card, idx) => (
            <motion.a
              href={card.link}
              target={card.link.startsWith("http") ? "_blank" : undefined}
              rel={card.link.startsWith("http") ? "noreferrer" : undefined}
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col ${card.hoverBorder} ${card.hoverShadow}`}
            >
              {/* Top gradient accent line */}
              <div className={`absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                <card.icon className={`w-7 h-7 ${card.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className={`text-lg font-bold text-slate-900 mb-1 ${isRtl ? "font-cairo" : ""}`}>
                {isRtl ? card.titleAr : card.titleEn}
              </h3>

              {/* Detail */}
              <p className="text-sm text-slate-500 mb-3">
                {isRtl ? card.detailAr : card.detailEn}
              </p>

              {/* Value */}
              <p className="text-sm font-bold text-slate-800 mb-6 flex-grow" dir="ltr">
                {isRtl ? card.valueAr : card.valueEn}
              </p>

              {/* Action */}
              <div className={`flex items-center gap-2 text-sm font-bold ${card.iconColor} group-hover:gap-3 transition-all duration-300`}>
                <span>{isRtl ? card.actionAr : card.actionEn}</span>
                {card.link.startsWith("http") ? (
                  <ExternalLink className="w-4 h-4" />
                ) : (
                  <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
