"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  BookOpen,
  Mail,
  MessageCircle,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  quickLinks: [
    { key: "home", href: "/" },
    { key: "courses", href: "/courses" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
  ],
  programs: [
    { label: { en: "Quran & Tajweed", ar: "القرآن والتجويد" }, href: "/courses" },
    { label: { en: "Arabic Language", ar: "اللغة العربية" }, href: "/courses" },
    { label: { en: "Islamic Studies", ar: "الدراسات الإسلامية" }, href: "/courses" },
    { label: { en: "Kids Programs", ar: "برامج الأطفال" }, href: "/courses" },
  ],
};

const socialLinks = [
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
    hoverColor: "hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-50",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    hoverColor: "hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-50",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
      </svg>
    ),
    href: "#",
    label: "TikTok",
    hoverColor: "hover:text-black hover:border-black/30 hover:bg-slate-50",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@walamnahoacademy",
    label: "YouTube",
    hoverColor: "hover:text-red-500 hover:border-red-500/30 hover:bg-red-50",
  },
];

export function Footer() {
  const { t, locale, isRtl } = useLanguage();

  return (
    <footer className="relative bg-[#F8FAFC] overflow-hidden border-t border-slate-200">
      {/* ═══ Decorative Top Border ═══ */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400 to-transparent blur-[3px] opacity-30" />
      </div>

      {/* ═══ Background Effects ═══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-40%] left-[-10%] w-[50%] h-[60%] bg-teal-400/[0.05] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[40%] h-[50%] bg-indigo-400/[0.05] rounded-full blur-[120px]" />

        {/* Subtle hexagonal geometric pattern */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.65V49h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "28px 49px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* ═══ Brand Column ═══ */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 relative group">
              <Image
                src={locale === "ar" ? "/logo-ar.png" : "/logo.png"}
                alt="Afaq Al-Quran Academy"
                width={160}
                height={80}
                className="object-contain w-auto h-16 md:h-20 opacity-90 group-hover:opacity-100 transition-all duration-500"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
          </div>

          {/* ═══ Quick Links ═══ */}
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-[0.2em] mb-6">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="group text-sm text-slate-600 hover:text-teal-600 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <ArrowRight
                      className={`w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-teal-600 ${
                        isRtl ? "rotate-180 translate-x-2 group-hover:translate-x-0" : ""
                      }`}
                    />
                    <span>{t.nav[link.key as keyof typeof t.nav]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ═══ Programs ═══ */}
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-[0.2em] mb-6">
              {t.footer.programs}
            </h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group text-sm text-slate-600 hover:text-teal-600 transition-all duration-300 flex items-center gap-2"
                  >
                    <BookOpen className="w-3 h-3 text-slate-400 group-hover:text-teal-600 transition-colors" />
                    {locale === "ar" ? link.label.ar : link.label.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ═══ Contact + Social Media ═══ */}
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-[0.2em] mb-6">
              {t.footer.contact}
            </h3>
            
            {/* Contact Items - styled as mini dark cards based on user preference */}
            <div className="space-y-3 text-sm mb-8">
              <a
                href="mailto:afaqalquranacdemy@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0F172A] border border-slate-800 text-slate-300 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-all">
                   <Mail className="w-4 h-4 text-teal-400" />
                </div>
                <span>info@afaqalquran.com</span>
              </a>
              <a
                href="tel:+201061003860"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0F172A] border border-slate-800 text-slate-300 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-all">
                  <Phone className="w-4 h-4 text-teal-400" />
                </div>
                <span dir="ltr">+20 106 100 3860</span>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className={`w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${social.hoverColor}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
              <a
                href="https://wa.me/201061003860"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-emerald-500 hover:border-emerald-500/30 hover:bg-emerald-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ═══ Bottom Bar ═══ */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Afaq Al-Quran Academy. {t.footer.rights}
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Link
              href="/privacy"
              className="px-3 py-1.5 rounded-full hover:text-slate-800 hover:bg-slate-100 transition-all duration-300"
            >
              {t.footer.privacy}
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/terms"
              className="px-3 py-1.5 rounded-full hover:text-slate-800 hover:bg-slate-100 transition-all duration-300"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
