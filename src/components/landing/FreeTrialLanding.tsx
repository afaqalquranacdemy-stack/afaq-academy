"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronDown,
  Globe2,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  formatInternationalPhone,
  useCountryCallingCode,
} from "@/hooks/useCountryCallingCode";
import {
  academyContact,
  academyOperations,
  academyStats,
} from "@/data/site";
import { startingMonthlyPrice } from "@/data/pricing";

type LeadForm = {
  name: string;
  email: string;
  whatsapp: string;
  course: string;
  website: string;
};

const copy = {
  en: {
    navCta: "Book Free Trial",
    badge: "Premium 1-to-1 Online Learning",
    titleA: "Learn Quran, Arabic &",
    titleB: "Islamic Studies",
    titleC: "with a plan built around you.",
    heroText:
      "Personalized live sessions, flexible scheduling, and qualified tutors for adults and children — wherever you are.",
    primary: "Book My Free Trial",
    whatsapp: "Chat on WhatsApp",
    noCard: "No payment required",
    flexible: "Flexible scheduling",
    oneToOne: "Private 1-to-1 sessions",
    response: `Reply within ${academyOperations.responseTimeHours} hours`,
    formEyebrow: "Start here",
    formTitle: "Book your free trial",
    formText: "Tell us how to reach you. Our team will help you choose the right program.",
    name: "Full name",
    email: "Email address",
    whatsappLabel: "WhatsApp number",
    interest: "I'm interested in",
    choose: "Choose a program",
    quran: "Quran",
    arabic: "Arabic Language",
    islamic: "Islamic Studies",
    kids: "Programs for Kids",
    submit: "Request Free Trial",
    sending: "Sending...",
    privacy: "Your details are used only to arrange your trial and contact you about your request.",
    successTitle: "Your trial request is in.",
    successText: `We usually respond within ${academyOperations.responseTimeHours} hours. You can also message us directly on WhatsApp.`,
    successWhatsapp: "Open WhatsApp",
    trustLabel: "Trusted learning, built around the student",
    statsStudents: "Students",
    statsTutors: "Expert Tutors",
    statsCountries: "Countries",
    statsYears: "Years Experience",
    benefitsEyebrow: "Why Afaq",
    benefitsTitle: "A focused learning experience — not a crowded online class.",
    benefit1: "Dedicated 1-to-1 tutor",
    benefit1Text: "Every lesson is centered on your level, pace, goals, and learning needs.",
    benefit2: "Flexible lesson lengths",
    benefit2Text: `Choose ${academyOperations.sessionDurations.join(", ")}-minute sessions and coordinate times that fit your schedule.`,
    benefit3: "Structured progression",
    benefit3Text: "Clear learning paths, regular feedback, and a program designed for steady progress.",
    benefit4: "Learn from anywhere",
    benefit4Text: "Live online sessions for students worldwide with a simple, convenient setup.",
    programsEyebrow: "Programs",
    programsTitle: "Choose the path that matches your goal.",
    programsText: "You do not need to decide everything now — the trial helps us recommend the right starting point.",
    programQuran: "Quran",
    programQuranText: "Recitation, Tajweed, memorization and structured Quran learning.",
    programArabic: "Arabic",
    programArabicText: "Build reading, speaking, grammar and comprehension step by step.",
    programIslamic: "Islamic Studies",
    programIslamicText: "Develop a stronger foundation in essential Islamic knowledge.",
    programKids: "Kids",
    programKidsText: "Engaging, age-appropriate 1-to-1 learning for younger students.",
    howEyebrow: "How it works",
    howTitle: "From ad click to your first live lesson — simple.",
    step1: "Send your details",
    step1Text: "Complete the short form. It takes less than a minute.",
    step2: "We match the right tutor",
    step2Text: "Our team confirms your goals, level, availability and preferred program.",
    step3: "Attend your free trial",
    step3Text: "Meet your tutor, experience the class, then decide what works for you.",
    pricingEyebrow: "Simple starting point",
    pricingTitle: `Plans start from $${startingMonthlyPrice}/month`,
    pricingText:
      "Pricing depends on session length and weekly frequency. Start with the free trial, then choose the schedule that fits you.",
    pricingPoint1: "30, 45 or 60-minute sessions",
    pricingPoint2: "1 to 4 classes per week",
    pricingPoint3: "No need to choose a plan before the trial",
    faqEyebrow: "FAQ",
    faqTitle: "Questions before you book?",
    faq1: "Is the trial really free?",
    ans1: "Yes. You can request the trial without entering payment details.",
    faq2: "Do you teach adults and children?",
    ans2: "Yes. Programs are available for different ages and levels, including dedicated learning paths for children.",
    faq3: "How long is each lesson?",
    ans3: `Paid plans offer ${academyOperations.sessionDurations.join(", ")}-minute session options. The team will explain the best fit after your trial request.`,
    faq4: "Can I choose a suitable time?",
    ans4: "Yes. Scheduling is coordinated according to tutor availability and your preferred times.",
    faq5: "What happens after I submit the form?",
    ans5: `Our team reviews your request and usually contacts you within ${academyOperations.responseTimeHours} hours to arrange the trial.`,
    finalTitle: "Your first lesson can start with one simple step.",
    finalText: "Book the free trial and see whether the teaching style, tutor and program are right for you.",
    finalCta: "Book My Free Trial",
    footer: "Afaq Al-Quran Academy",
    footerText: "Online Quran, Arabic & Islamic Studies",
  },
  ar: {
    navCta: "احجز التجربة المجانية",
    badge: "تعليم فردي مباشر عبر الإنترنت",
    titleA: "تعلّم القرآن والعربية",
    titleB: "والعلوم الإسلامية",
    titleC: "بخطة مصممة حول احتياجاتك.",
    heroText:
      "حصص مباشرة فردية، مواعيد مرنة، ومعلمون مؤهلون للكبار والأطفال أينما كنت.",
    primary: "احجز تجربتي المجانية",
    whatsapp: "تواصل عبر واتساب",
    noCard: "لا يتطلب وسيلة دفع",
    flexible: "مواعيد مرنة",
    oneToOne: "حصص فردية 1 إلى 1",
    response: `نرد خلال ${academyOperations.responseTimeHours} ساعة`,
    formEyebrow: "ابدأ من هنا",
    formTitle: "احجز تجربتك المجانية",
    formText: "أرسل بيانات التواصل وسنساعدك في اختيار البرنامج المناسب.",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    whatsappLabel: "رقم واتساب",
    interest: "أرغب في دراسة",
    choose: "اختر البرنامج",
    quran: "القرآن الكريم",
    arabic: "اللغة العربية",
    islamic: "العلوم الإسلامية",
    kids: "برامج الأطفال",
    submit: "طلب تجربة مجانية",
    sending: "جاري الإرسال...",
    privacy: "نستخدم بياناتك فقط لترتيب التجربة والتواصل معك بخصوص طلبك.",
    successTitle: "تم استلام طلب التجربة.",
    successText: `نرد عادة خلال ${academyOperations.responseTimeHours} ساعة، ويمكنك أيضًا التواصل معنا مباشرة عبر واتساب.`,
    successWhatsapp: "فتح واتساب",
    trustLabel: "تجربة تعليمية مبنية حول الطالب",
    statsStudents: "طالب",
    statsTutors: "معلم خبير",
    statsCountries: "دولة",
    statsYears: "سنوات خبرة",
    benefitsEyebrow: "لماذا آفاق",
    benefitsTitle: "تعليم مركز على الطالب — وليس فصلًا إلكترونيًا مزدحمًا.",
    benefit1: "معلم مخصص لك",
    benefit1Text: "كل حصة مبنية على مستواك وسرعتك وأهدافك واحتياجاتك التعليمية.",
    benefit2: "مدد حصص مرنة",
    benefit2Text: `اختر حصة مدتها ${academyOperations.sessionDurations.join(" أو ")} دقيقة ونسّق الموعد المناسب لك.`,
    benefit3: "تقدم منظم",
    benefit3Text: "مسار تعليمي واضح، متابعة منتظمة، وبرنامج يساعدك على التقدم بثبات.",
    benefit4: "تعلّم من أي مكان",
    benefit4Text: "حصص مباشرة عبر الإنترنت لطلاب من مختلف الدول بسهولة ومرونة.",
    programsEyebrow: "البرامج",
    programsTitle: "اختر المسار الأقرب لهدفك.",
    programsText: "لا تحتاج لحسم كل شيء الآن — التجربة تساعدنا في تحديد أفضل نقطة بداية لك.",
    programQuran: "القرآن الكريم",
    programQuranText: "تلاوة وتجويد وحفظ ومسارات منظمة لتعلم القرآن الكريم.",
    programArabic: "اللغة العربية",
    programArabicText: "تطوير القراءة والمحادثة والقواعد والفهم خطوة بخطوة.",
    programIslamic: "العلوم الإسلامية",
    programIslamicText: "بناء أساس أقوى في العلوم والمعارف الإسلامية الأساسية.",
    programKids: "الأطفال",
    programKidsText: "تعليم فردي ممتع ومناسب لأعمار ومستويات الطلاب الصغار.",
    howEyebrow: "كيف تبدأ",
    howTitle: "من الإعلان إلى أول حصة مباشرة — خطوات بسيطة.",
    step1: "أرسل بياناتك",
    step1Text: "املأ النموذج المختصر؛ لن يستغرق أكثر من دقيقة.",
    step2: "نرشح المعلم المناسب",
    step2Text: "نتأكد من هدفك ومستواك ومواعيدك والبرنامج الذي يناسبك.",
    step3: "احضر التجربة المجانية",
    step3Text: "تعرّف على المعلم وجرّب الحصة ثم قرر ما إذا كان البرنامج مناسبًا لك.",
    pricingEyebrow: "بداية بسيطة",
    pricingTitle: `الباقات تبدأ من $${startingMonthlyPrice} شهريًا`,
    pricingText:
      "السعر يعتمد على مدة الحصة وعدد الحصص الأسبوعية. ابدأ بالتجربة المجانية ثم اختر الجدول المناسب.",
    pricingPoint1: "حصص 30 أو 45 أو 60 دقيقة",
    pricingPoint2: "من حصة إلى 4 حصص أسبوعيًا",
    pricingPoint3: "لا تحتاج لاختيار الباقة قبل التجربة",
    faqEyebrow: "الأسئلة الشائعة",
    faqTitle: "عندك سؤال قبل الحجز؟",
    faq1: "هل التجربة مجانية فعلًا؟",
    ans1: "نعم. يمكنك طلب التجربة بدون إدخال أي بيانات دفع.",
    faq2: "هل تقدمون برامج للكبار والأطفال؟",
    ans2: "نعم. توجد برامج لمراحل عمرية ومستويات مختلفة، بالإضافة إلى مسارات مخصصة للأطفال.",
    faq3: "ما مدة الحصة؟",
    ans3: `الباقات المدفوعة تتضمن خيارات ${academyOperations.sessionDurations.join(" أو ")} دقيقة. يساعدك الفريق في اختيار الأنسب بعد طلب التجربة.`,
    faq4: "هل يمكنني اختيار الموعد؟",
    ans4: "نعم. يتم تنسيق المواعيد بناءً على الأوقات المناسبة لك وتوفر المعلم.",
    faq5: "ماذا يحدث بعد إرسال النموذج؟",
    ans5: `يراجع الفريق الطلب ويتواصل معك عادة خلال ${academyOperations.responseTimeHours} ساعة لترتيب التجربة.`,
    finalTitle: "أول حصة تبدأ بخطوة بسيطة.",
    finalText: "احجز التجربة المجانية وتأكد بنفسك من أسلوب التدريس والمعلم والبرنامج المناسب لك.",
    finalCta: "احجز تجربتي المجانية",
    footer: "أكاديمية آفاق القرآن",
    footerText: "تعليم القرآن واللغة العربية والعلوم الإسلامية",
  },
} as const;

function pushEvent(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const target = window as typeof window & {
    dataLayer?: Array<Record<string, unknown>>;
  };
  target.dataLayer?.push({ event, ...data });
}

export function FreeTrialLanding() {
  const { locale, isRtl, switchLocale } = useLanguage();
  const text = locale === "ar" ? copy.ar : copy.en;
  const locationData = useCountryCallingCode();

  const [form, setForm] = useState<LeadForm>({
    name: "",
    email: "",
    whatsapp: "",
    course: "",
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);

  const startForm = () => {
    if (started) return;
    setStarted(true);
    pushEvent("free_trial_form_start", { page: "/free-trial" });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (form.website) return;

    if (!form.name.trim() || !form.email.trim() || !form.whatsapp.trim() || !form.course) {
      toast.error(
        isRtl
          ? "يرجى إكمال الاسم والبريد والواتساب والبرنامج."
          : "Please complete your name, email, WhatsApp number, and program.",
      );
      return;
    }

    setSubmitting(true);

    try {
      const params = new URLSearchParams(window.location.search);
      const campaignInfo = [
        ["utm_source", params.get("utm_source")],
        ["utm_medium", params.get("utm_medium")],
        ["utm_campaign", params.get("utm_campaign")],
        ["utm_term", params.get("utm_term")],
        ["utm_content", params.get("utm_content")],
        ["gclid", params.get("gclid")],
      ]
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.name.trim(),
          lastName: "",
          email: form.email.trim(),
          age: "",
          gender: "",
          preferredTeacher: "",
          whatsapp: formatInternationalPhone(form.whatsapp, locationData.code),
          course: form.course,
          message: campaignInfo
            ? `Landing page: /free-trial\n${campaignInfo}`
            : "Landing page: /free-trial",
          formType: "Trial Booking",
        }),
      });

      if (!response.ok) throw new Error("Lead submission failed");

      pushEvent("free_trial_lead", {
        page: "/free-trial",
        course: form.course,
      });

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        whatsapp: "",
        course: "",
        website: "",
      });
    } catch (error) {
      console.error(error);
      toast.error(
        isRtl
          ? "تعذر إرسال الطلب الآن. يمكنك التواصل معنا عبر واتساب."
          : "We could not send your request. You can contact us on WhatsApp instead.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const benefits = [
    { icon: UserRound, title: text.benefit1, body: text.benefit1Text },
    { icon: CalendarClock, title: text.benefit2, body: text.benefit2Text },
    { icon: ShieldCheck, title: text.benefit3, body: text.benefit3Text },
    { icon: Globe2, title: text.benefit4, body: text.benefit4Text },
  ];

  const programs = [
    { title: text.programQuran, body: text.programQuranText, icon: BookOpen },
    { title: text.programArabic, body: text.programArabicText, icon: GraduationCap },
    { title: text.programIslamic, body: text.programIslamicText, icon: Sparkles },
    { title: text.programKids, body: text.programKidsText, icon: UserRound },
  ];

  const steps = [
    { number: "01", title: text.step1, body: text.step1Text },
    { number: "02", title: text.step2, body: text.step2Text },
    { number: "03", title: text.step3, body: text.step3Text },
  ];

  const faqs = [
    [text.faq1, text.ans1],
    [text.faq2, text.ans2],
    [text.faq3, text.ans3],
    [text.faq4, text.ans4],
    [text.faq5, text.ans5],
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7FAF8] text-slate-900">
      <section className="relative min-h-[100svh] overflow-hidden bg-[#031612] text-white">
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-center opacity-70"
        />
        <Image
          src="/hero-mobile-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,12,10,.80)_0%,rgba(3,25,21,.66)_44%,rgba(2,13,11,.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_40%,rgba(16,185,129,.08)_0%,transparent_46%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="flex h-20 items-center justify-between border-b border-white/10">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Afaq Al-Quran Academy">
              <img src="/header-icon.png" alt="" className="h-12 w-auto" />
              <div className="leading-none">
                <div className={`font-bold text-white ${isRtl ? "font-elmessiri text-base" : "font-serif text-sm tracking-wide"}`}>
                  {isRtl ? "آفَاقُ الْقُرْآنِ" : "AFAQ AL-QURAN"}
                </div>
                <div className={`mt-1 text-[#D1A447] ${isRtl ? "font-elmessiri text-[10px]" : "text-[9px] font-bold tracking-[.24em]"}`}>
                  {isRtl ? "أَكَادِيمِيَّة" : "ACADEMY"}
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={() => switchLocale(locale === "en" ? "ar" : "en")}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 text-xs font-bold text-white/85 backdrop-blur-md transition hover:bg-white/10"
              >
                <Globe2 className="h-4 w-4" />
                {locale === "en" ? "العربية" : "EN"}
              </button>
              <a
                href="#trial-form"
                className="hidden sm:inline-flex min-h-10 items-center rounded-full bg-white px-4 text-xs font-extrabold text-[#064E46] shadow-lg transition hover:-translate-y-0.5"
              >
                {text.navCta}
              </a>
            </div>
          </header>

          <div className="grid items-center gap-10 pb-24 pt-10 md:grid-cols-[1.08fr_.92fr] md:gap-12 md:pb-28 md:pt-16 lg:gap-16">
            <div className={isRtl ? "text-right" : "text-left"}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-bold text-emerald-100 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-emerald-300" />
                {text.badge}
              </div>

              <h1 className={`max-w-3xl font-bold leading-[1.05] tracking-tight ${isRtl ? "font-elmessiri text-[2.25rem] sm:text-5xl lg:text-[4rem] leading-[1.25]" : "font-serif text-[2.55rem] sm:text-5xl lg:text-[4.2rem]"}`}>
                <span className="text-white">{text.titleA}</span>{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#E4C16B] bg-clip-text text-transparent">
                  {text.titleB}
                </span>
                <span className="mt-2 block text-white/95">{text.titleC}</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white/72 sm:text-lg">
                {text.heroText}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#trial-form"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 text-sm font-extrabold text-white shadow-[0_18px_50px_-20px_rgba(16,185,129,.9)] transition hover:-translate-y-0.5"
                >
                  {text.primary}
                  <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
                </a>
                <a
                  href={academyContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => pushEvent("whatsapp_click", { page: "/free-trial", location: "hero" })}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-7 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/12"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-300" />
                  {text.whatsapp}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/65">
                {[text.noCard, text.flexible, text.oneToOne, text.response].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div id="trial-form" className="scroll-mt-6">
              <div className="rounded-[2rem] border border-white/15 bg-white/[0.96] p-5 text-slate-900 shadow-[0_35px_90px_-30px_rgba(0,0,0,.75)] sm:p-7">
                {!submitted ? (
                  <>
                    <div className="mb-6">
                      <div className="text-[11px] font-extrabold uppercase tracking-[.2em] text-teal-700">
                        {text.formEyebrow}
                      </div>
                      <h2 className={`mt-2 text-2xl font-bold text-slate-950 ${isRtl ? "font-elmessiri" : "font-serif"}`}>
                        {text.formTitle}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{text.formText}</p>
                    </div>

                    <form onSubmit={handleSubmit} onFocus={startForm} className="space-y-3.5">
                      <input
                        type="text"
                        name="website"
                        value={form.website}
                        onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
                        tabIndex={-1}
                        autoComplete="off"
                        className="hidden"
                        aria-hidden="true"
                      />

                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-600">{text.name}</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                          className="min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-600">{text.email}</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                          className="min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                          dir="ltr"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-600">{text.whatsappLabel}</label>
                        <div className="flex gap-2">
                          {locationData.country && (
                            <div className="flex min-h-12 max-w-[32%] items-center rounded-xl border border-slate-200 bg-slate-50 px-3 text-[10px] font-bold text-slate-500">
                              {locationData.country}
                            </div>
                          )}
                          <input
                            type="tel"
                            required
                            value={form.whatsapp}
                            onChange={(e) => setForm((prev) => ({ ...prev, whatsapp: e.target.value }))}
                            placeholder={locationData.code ? `${locationData.code} 104 121 3922` : "+1 555 123 4567"}
                            className="min-h-12 min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                            dir="ltr"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-600">{text.interest}</label>
                        <select
                          required
                          value={form.course}
                          onChange={(e) => setForm((prev) => ({ ...prev, course: e.target.value }))}
                          className="min-h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                        >
                          <option value="">{text.choose}</option>
                          <option value="quran">{text.quran}</option>
                          <option value="arabic">{text.arabic}</option>
                          <option value="islamic">{text.islamic}</option>
                          <option value="kids">{text.kids}</option>
                        </select>
                      </div>

                      <button
                        disabled={submitting}
                        className="mt-1 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#073E38] px-5 py-3.5 text-sm font-extrabold text-white shadow-lg transition hover:bg-[#09564D] disabled:cursor-not-allowed disabled:opacity-65"
                      >
                        {submitting ? text.sending : text.submit}
                        {!submitting && <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />}
                      </button>

                      <p className="text-center text-[10px] leading-4 text-slate-400">{text.privacy}</p>
                    </form>
                  </>
                ) : (
                  <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                      <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h2 className={`mt-5 text-2xl font-bold text-slate-950 ${isRtl ? "font-elmessiri" : "font-serif"}`}>
                      {text.successTitle}
                    </h2>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">{text.successText}</p>
                    <a
                      href={academyContact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => pushEvent("whatsapp_click", { page: "/free-trial", location: "success" })}
                      className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-emerald-500 px-6 text-sm font-bold text-white"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {text.successWhatsapp}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-10 px-4">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_22px_70px_-35px_rgba(15,23,42,.35)] sm:p-7">
          <p className="text-center text-xs font-extrabold uppercase tracking-[.16em] text-slate-400">{text.trustLabel}</p>
          <div className="mt-5 grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-4 sm:divide-y-0">
            {[
              [`${academyStats.students}+`, text.statsStudents],
              [`${academyStats.tutors}+`, text.statsTutors],
              [`${academyStats.countries}+`, text.statsCountries],
              [`${academyStats.years}+`, text.statsYears],
            ].map(([value, label]) => (
              <div key={label} className="px-3 py-4 text-center">
                <div className="text-2xl font-black text-[#073E38] sm:text-3xl">{value}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-extrabold uppercase tracking-[.18em] text-teal-700">{text.benefitsEyebrow}</div>
            <h2 className={`mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
              {text.benefitsTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-38px_rgba(15,23,42,.32)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-teal-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-xs font-extrabold uppercase tracking-[.18em] text-[#B8892E]">{text.programsEyebrow}</div>
            <h2 className={`mt-3 text-3xl font-bold text-slate-950 sm:text-4xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
              {text.programsTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">{text.programsText}</p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <div key={program.title} className="group rounded-[1.5rem] border border-slate-200 bg-[#F8FAF9] p-5 transition hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-xl">
                <program.icon className="h-6 w-6 text-teal-700" />
                <h3 className="mt-4 text-lg font-extrabold text-slate-900">{program.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{program.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs font-extrabold uppercase tracking-[.18em] text-teal-700">{text.howEyebrow}</div>
            <h2 className={`mt-3 text-3xl font-bold text-slate-950 sm:text-4xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
              {text.howTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6">
                <div className="absolute right-5 top-3 text-6xl font-black text-slate-100">{step.number}</div>
                <div className="relative z-10 text-xs font-extrabold text-[#B8892E]">{step.number}</div>
                <h3 className="relative z-10 mt-7 text-lg font-extrabold text-slate-900">{step.title}</h3>
                <p className="relative z-10 mt-2 text-sm leading-6 text-slate-500">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2.25rem] bg-[#073E38] p-7 text-white sm:p-10 md:grid-cols-[1.1fr_.9fr] md:items-center lg:p-14">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-300">{text.pricingEyebrow}</div>
            <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
              {text.pricingTitle}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">{text.pricingText}</p>
          </div>
          <div className="space-y-3">
            {[text.pricingPoint1, text.pricingPoint2, text.pricingPoint3].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300" />
                {item}
              </div>
            ))}
            <a
              href="#trial-form"
              className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-extrabold text-[#073E38]"
            >
              {text.primary}
              <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="text-xs font-extrabold uppercase tracking-[.18em] text-teal-700">{text.faqEyebrow}</div>
            <h2 className={`mt-3 text-3xl font-bold text-slate-950 sm:text-4xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
              {text.faqTitle}
            </h2>
          </div>
          <div className="mt-9 space-y-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-[#F9FBFA] px-5 py-4 open:bg-white open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {question}
                  <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="pt-3 text-sm leading-6 text-slate-500">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAF8] px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className={`text-3xl font-bold text-slate-950 sm:text-4xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
            {text.finalTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">{text.finalText}</p>
          <a
            href="#trial-form"
            className="mt-7 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#073E38] px-8 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5"
          >
            {text.finalCta}
            <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <img src="/header-icon.png" alt="" className="h-9 w-auto" />
            <div>
              <div className="text-sm font-extrabold text-[#073E38]">{text.footer}</div>
              <div className="text-[10px] text-slate-400">{text.footerText}</div>
            </div>
          </div>
          <div className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Afaq Al-Quran Academy
          </div>
        </div>
      </footer>
    </div>
  );
}
