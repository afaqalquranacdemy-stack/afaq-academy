"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Sparkles, ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

export function TrialBooking() {
  const { t, locale, isRtl } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "male",
    preferredTeacher: "any",
    whatsapp: "",
    course: "",
    message: ""
  });

  const [locationData, setLocationData] = useState({
    code: "+20",
    country: "Egypt"
  });

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        if (data.country_calling_code) {
          setLocationData({
            code: data.country_calling_code,
            country: data.country_name
          });
        }
      } catch (error) {
        console.warn("Country detection failed, using default (Egypt):", error);
      }
    };
    detectCountry();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.whatsapp) {
      toast.error(isRtl ? "يرجى ملء الحقول الأساسية (الاسم، البريد، الواتساب)" : "Please fill in essential fields (Name, Email, WhatsApp)");
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading(isRtl ? "جاري إرسال طلبك..." : "Sending your request...");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          whatsapp: `${locationData.code} ${formData.whatsapp}`,
          formType: 'Home Page Trial Booking'
        }),
      });

      if (!response.ok) throw new Error('Failed to send');

      toast.success(isRtl ? "تم إرسال طلبك بنجاح! سنتواصل معك قريباً." : "Request sent successfully! We will contact you soon.", { id: loadingToast });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        gender: "male",
        preferredTeacher: "any",
        whatsapp: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error(isRtl ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى." : "An error occurred. Please try again.", { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  const courses = [
    { id: "quran", label: t.courses.categories.Quran },
    { id: "arabic", label: t.courses.categories.Arabic },
    { id: "islamic", label: t.courses.categories["Islamic Studies"] },
    { id: "kids", label: t.courses.categories.Kids },
  ];

  const contactInfo = [
    { icon: Phone, label: "WhatsApp", value: "+20 10 6100 3860", color: "bg-teal-50 text-teal-600" },
    { icon: Mail, label: "Email", value: "info@afaqalquran.com", color: "bg-indigo-50 text-indigo-600" },
  ];

  return (
    <div className="mt-12 md:mt-32 w-full max-w-7xl mx-auto px-0 md:px-8">
      {/* Unified Master Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card border border-slate-200/60 p-1 md:p-2 rounded-[2rem] md:rounded-[3.5rem] bg-white/80 shadow-2xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-[3rem]">
          
          {/* Left Column: Context & Contact */}
          <div className="lg:col-span-5 px-3 py-6 md:p-12 lg:p-16 flex flex-col justify-between relative bg-slate-50/50">
            {/* Background Decorative Blob */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/5 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100/50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-widest mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                {t.trial.cardSubtitle}
              </div>
              
              <h3 className={`text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight ${isRtl ? "font-cairo" : "font-serif"}`}>
                {t.trial.cardTitle}
              </h3>
              
              <div className="flex flex-col gap-4 mb-8 md:gap-6 md:mb-12">
                {t.trial.cardPoints.slice(0, 4).map((point: string, i: number) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center shrink-0 shadow-lg shadow-teal-500/20">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-600 text-sm sm:text-base font-normal leading-normal">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Grid - Balancing Height */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 relative z-10">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm font-bold text-slate-800">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Refined Compact Form */}
          <div className="lg:col-span-7 px-3.5 py-6 md:p-12 lg:p-16 bg-white">
            <div className="max-w-xl mx-auto">
              <div className="mb-10">
                <h4 className={`text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 ${isRtl ? "font-cairo" : "font-serif"}`}>
                  {t.trial.formTitle}
                </h4>
                <p className="text-slate-500">
                  {t.trial.formSubtitle}
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.trial.firstName}</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Abdullah"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 md:py-3 px-3 md:px-4 outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm md:text-base text-slate-900 placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.trial.lastName}</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Al-Farsi"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 md:py-3 px-3 md:px-4 outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm md:text-base text-slate-900 placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.trial.email}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="hello@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 md:py-3 px-3 md:px-4 outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm md:text-base text-slate-900 placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.trial.age}</label>
                    <input 
                      type="number" 
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="25"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 md:py-3 px-3 md:px-4 outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm md:text-base text-slate-900 placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.trial.gender}</label>
                    <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200">
                       <button 
                         type="button"
                         onClick={() => setFormData({...formData, gender: "male"})}
                         className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${formData.gender === "male" ? "bg-white text-teal-600 shadow-sm border border-slate-100" : "text-slate-400 hover:text-slate-600"}`}
                       >
                         {t.trial.male}
                       </button>
                       <button 
                         type="button"
                         onClick={() => setFormData({...formData, gender: "female"})}
                         className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${formData.gender === "female" ? "bg-white text-teal-600 shadow-sm border border-slate-100" : "text-slate-400 hover:text-slate-600"}`}
                       >
                         {t.trial.female}
                       </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.trial.preferredTeacher}</label>
                    <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200">
                       <button type="button" onClick={() => setFormData({...formData, preferredTeacher: "any"})} className={`flex-1 py-3 rounded-lg text-[10px] font-bold transition-all ${formData.preferredTeacher === "any" ? "bg-white text-teal-600 shadow-sm border border-slate-100" : "text-slate-400"}`}>{t.trial.anyTeacher}</button>
                       <button type="button" onClick={() => setFormData({...formData, preferredTeacher: "male"})} className={`flex-1 py-3 rounded-lg text-[10px] font-bold transition-all ${formData.preferredTeacher === "male" ? "bg-white text-teal-600 shadow-sm border border-slate-100" : "text-slate-400"}`}>{t.trial.male}</button>
                       <button type="button" onClick={() => setFormData({...formData, preferredTeacher: "female"})} className={`flex-1 py-3 rounded-lg text-[10px] font-bold transition-all ${formData.preferredTeacher === "female" ? "bg-white text-teal-600 shadow-sm border border-slate-100" : "text-slate-400"}`}>{t.trial.female}</button>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.trial.course}</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    aria-label={t.trial.course}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all text-slate-900 appearance-none cursor-pointer"
                  >
                    <option value="">{t.trial.course}</option>
                    {courses.map(course => (
                      <option key={course.id} value={course.id}>{course.label}</option>
                    ))}
                  </select>
                </div>

                {/* WhatsApp with Country Code Inline Layout */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.trial.whatsapp}</label>
                  <div className="flex gap-2 md:gap-3">
                    <div className="w-[35%] md:w-[25%] min-h-[50px] md:min-h-[56px] px-2 md:px-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-600">
                      <span className="text-[10px] md:text-xs font-bold truncate text-center">
                        {locationData.country === 'Egypt' ? 'EG Egypt' : locationData.country}
                      </span>
                    </div>
                    <input 
                      type="tel" 
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      placeholder={`${locationData.code} 101 451 7018`}
                      className="flex-1 min-h-[50px] md:min-h-[56px] bg-slate-50 border border-slate-200 rounded-xl py-2.5 md:py-3 px-3 md:px-4 outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm md:text-base text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.trial.message}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.trial.messagePlaceholder}
                    rows={3}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all text-slate-900 placeholder:text-slate-300 resize-none px-4"
                  />
                </div>

                <motion.button
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01, boxShadow: "0 20px 40px -15px rgba(20, 184, 166, 0.3)" }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full bg-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all text-lg shadow-xl mt-4 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? (isRtl ? "جاري الإرسال..." : "Sending...") : t.trial.submit}
                  {!isSubmitting && <ArrowRight className={`w-5 h-5 ${isRtl ? "rotate-180" : ""}`} />}
                </motion.button>
              </form>

              {/* Premium Footer Logo */}
              <div className="flex justify-center mt-6">
                <Image 
                  src={locale === "ar" ? "/logo-ar.png" : "/logo.png"} 
                  alt="Afaq Al-Quran Academy Logo" 
                  width={200} 
                  height={100} 
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
