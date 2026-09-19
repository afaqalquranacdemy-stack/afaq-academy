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
    <div className="min-h-screen overflow-hidden bg-[#F5F0E6] text-[#10211E]">
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-[#061713] text-white">
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-[72%_center] opacity-[0.52] saturate-[0.86] contrast-[1.05]"
        />
        <Image
          src="/hero-mobile-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover object-center opacity-[0.46] saturate-[0.84]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,15,.97)_0%,rgba(3,20,16,.94)_38%,rgba(3,20,16,.68)_66%,rgba(3,16,13,.86)_100%)] md:block hidden" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,15,.94)_0%,rgba(3,20,16,.82)_52%,rgba(3,16,13,.96)_100%)] md:hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_35%,rgba(205,168,86,.14)_0%,transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#061713] via-[#061713]/80 to-transparent" />

        {/* decorative arch */}
        <div aria-hidden="true" className="pointer-events-none absolute right-[5%] top-[14%] hidden h-[68%] w-[34%] rounded-t-[180px] border border-[#D5B76A]/15 lg:block" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[18%] hidden h-[60%] w-[28%] rounded-t-[150px] border border-white/5 lg:block" />

        <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <header className="flex h-20 items-center justify-between border-b border-white/10">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Afaq Al-Quran Academy">
              <img src="/header-icon.png" alt="" className="h-12 w-auto" />
              <div className="leading-none">
                <div className={`font-bold text-white ${isRtl ? "font-elmessiri text-[17px]" : "font-serif text-[15px] tracking-[.03em]"}`}>
                  {isRtl ? "آفَاقُ الْقُرْآنِ" : "AFAQ AL-QURAN"}
                </div>
                <div className={`mt-1 text-[#D4B261] ${isRtl ? "font-elmessiri text-[10px]" : "text-[9px] font-bold tracking-[.28em]"}`}>
                  {isRtl ? "أَكَادِيمِيَّة" : "ACADEMY"}
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={() => switchLocale(locale === "en" ? "ar" : "en")}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-3 text-xs font-bold text-white/80 backdrop-blur-xl transition hover:border-[#D4B261]/30 hover:bg-white/[0.07]"
              >
                <Globe2 className="h-4 w-4 text-[#D4B261]" />
                {locale === "en" ? "العربية" : "EN"}
              </button>
              <a
                href="#trial-form"
                className="hidden h-10 items-center rounded-full border border-[#D4B261]/35 bg-[#D4B261] px-5 text-[11px] font-extrabold uppercase tracking-[.08em] text-[#0B231E] shadow-[0_10px_30px_-16px_rgba(212,178,97,.8)] transition hover:-translate-y-0.5 sm:inline-flex"
              >
                {text.navCta}
              </a>
            </div>
          </header>

          <div className="grid items-center gap-12 pb-16 pt-10 md:grid-cols-[1.02fr_.78fr] md:gap-14 md:pb-20 md:pt-14 lg:gap-20">
            <div className={isRtl ? "text-right" : "text-left"}>
              <div className="mb-6 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.24em] text-[#D6BD79]">
                <span className="h-px w-9 bg-[#D6BD79]/65" />
                {text.badge}
              </div>

              <h1 className={`max-w-[820px] font-bold tracking-[-.025em] ${isRtl ? "font-elmessiri text-[2.45rem] leading-[1.28] sm:text-5xl lg:text-[4.4rem]" : "font-serif text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-[4.9rem]"}`}>
                <span className="text-[#FFFDF8]">{text.titleA}</span>
                <span className="block bg-gradient-to-r from-[#F4E2A5] via-[#D4B261] to-[#9ACDBF] bg-clip-text text-transparent">
                  {text.titleB}
                </span>
                <span className="mt-2 block text-[#FFFDF8]/92">{text.titleC}</span>
              </h1>

              <p className="mt-6 max-w-[680px] text-[15px] font-medium leading-7 text-white/66 sm:text-[17px]">
                {text.heroText}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#trial-form"
                  className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#D4B261] px-7 text-[12px] font-extrabold uppercase tracking-[.08em] text-[#09241E] shadow-[0_20px_50px_-22px_rgba(212,178,97,.75)] transition hover:-translate-y-0.5 hover:bg-[#E4C775]"
                >
                  {text.primary}
                  <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </a>
                <a
                  href={academyContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => pushEvent("whatsapp_click", { page: "/free-trial", location: "hero" })}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.045] px-7 text-[12px] font-bold text-white/82 backdrop-blur-xl transition hover:border-[#D4B261]/30 hover:bg-white/[0.07]"
                >
                  <MessageCircle className="h-4 w-4 text-[#D4B261]" />
                  {text.whatsapp}
                </a>
              </div>

              <div className="mt-7 grid max-w-2xl grid-cols-2 gap-x-5 gap-y-3 text-[11px] font-semibold text-white/55 sm:flex sm:flex-wrap">
                {[text.noCard, text.flexible, text.oneToOne, text.response].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#D4B261]/35 bg-[#D4B261]/10">
                      <Check className="h-2.5 w-2.5 text-[#D4B261]" />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Premium enquiry panel */}
            <div id="trial-form" className="relative scroll-mt-6">
              <div className="absolute -inset-6 rounded-[42px] bg-[#D4B261]/8 blur-3xl" />
              <div className="relative rounded-[34px] border border-[#D4B261]/35 bg-[linear-gradient(145deg,rgba(255,255,255,.13),rgba(255,255,255,.035))] p-[1px] shadow-[0_45px_100px_-35px_rgba(0,0,0,.78)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[33px] bg-[#FBF7EC] p-5 text-[#14231F] sm:p-7 lg:p-8">
                  <div aria-hidden="true" className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#CDAA58] to-transparent" />
                  <div aria-hidden="true" className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#D4B261]/12 blur-3xl" />

                  {!submitted ? (
                    <>
                      <div className="relative mb-6">
                        <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#A57B26]">
                          <span className="h-px w-7 bg-[#CDAA58]" />
                          {text.formEyebrow}
                        </div>
                        <h2 className={`mt-3 text-[1.75rem] font-bold leading-tight text-[#0C211C] ${isRtl ? "font-elmessiri" : "font-serif"}`}>
                          {text.formTitle}
                        </h2>
                        <p className="mt-2 max-w-sm text-[13px] leading-6 text-[#68736E]">{text.formText}</p>
                      </div>

                      <form onSubmit={handleSubmit} onFocus={startForm} className="relative space-y-4">
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

                        {[
                          [text.name, "text", form.name, (value: string) => setForm((prev) => ({ ...prev, name: value }))],
                          [text.email, "email", form.email, (value: string) => setForm((prev) => ({ ...prev, email: value }))],
                        ].map(([label, type, value, setter]) => (
                          <label key={String(label)} className="block">
                            <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[.12em] text-[#66716C]">{String(label)}</span>
                            <input
                              type={String(type)}
                              required
                              value={String(value)}
                              onChange={(e) => (setter as (v: string) => void)(e.target.value)}
                              className="h-12 w-full rounded-[14px] border border-[#DCD6C8] bg-white/75 px-4 text-sm text-[#152620] outline-none transition placeholder:text-slate-300 focus:border-[#B99645] focus:bg-white focus:ring-4 focus:ring-[#D4B261]/10"
                              dir={type === "email" ? "ltr" : undefined}
                            />
                          </label>
                        ))}

                        <label className="block">
                          <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[.12em] text-[#66716C]">{text.whatsappLabel}</span>
                          <div className="flex gap-2">
                            {locationData.country && (
                              <div className="flex h-12 max-w-[34%] items-center rounded-[14px] border border-[#DCD6C8] bg-white/70 px-3 text-[9px] font-bold text-[#6F7773]">
                                {locationData.country}
                              </div>
                            )}
                            <input
                              type="tel"
                              required
                              value={form.whatsapp}
                              onChange={(e) => setForm((prev) => ({ ...prev, whatsapp: e.target.value }))}
                              placeholder={locationData.code ? `${locationData.code} 104 121 3922` : "+1 555 123 4567"}
                              className="h-12 min-w-0 flex-1 rounded-[14px] border border-[#DCD6C8] bg-white/75 px-4 text-sm outline-none transition focus:border-[#B99645] focus:bg-white focus:ring-4 focus:ring-[#D4B261]/10"
                              dir="ltr"
                            />
                          </div>
                        </label>

                        <label className="block">
                          <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[.12em] text-[#66716C]">{text.interest}</span>
                          <select
                            required
                            value={form.course}
                            onChange={(e) => setForm((prev) => ({ ...prev, course: e.target.value }))}
                            className="h-12 w-full appearance-none rounded-[14px] border border-[#DCD6C8] bg-white/75 px-4 text-sm text-[#152620] outline-none transition focus:border-[#B99645] focus:bg-white focus:ring-4 focus:ring-[#D4B261]/10"
                          >
                            <option value="">{text.choose}</option>
                            <option value="quran">{text.quran}</option>
                            <option value="arabic">{text.arabic}</option>
                            <option value="islamic">{text.islamic}</option>
                            <option value="kids">{text.kids}</option>
                          </select>
                        </label>

                        <button
                          disabled={submitting}
                          className="group mt-1 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-[14px] bg-[#0B3D35] px-5 text-[12px] font-extrabold uppercase tracking-[.08em] text-white shadow-[0_18px_40px_-24px_rgba(11,61,53,.8)] transition hover:bg-[#0D4D42] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {submitting ? text.sending : text.submit}
                          {!submitting && <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />}
                        </button>

                        <p className="text-center text-[9px] leading-4 text-[#8A928E]">{text.privacy}</p>
                      </form>
                    </>
                  ) : (
                    <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D4B261]/35 bg-[#D4B261]/10">
                        <CheckCircle2 className="h-8 w-8 text-[#A77B23]" />
                      </div>
                      <h2 className={`mt-5 text-2xl font-bold text-[#0C211C] ${isRtl ? "font-elmessiri" : "font-serif"}`}>
                        {text.successTitle}
                      </h2>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-[#68736E]">{text.successText}</p>
                      <a
                        href={academyContact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => pushEvent("whatsapp_click", { page: "/free-trial", location: "success" })}
                        className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0B3D35] px-6 text-sm font-bold text-white"
                      >
                        <MessageCircle className="h-4 w-4 text-[#D4B261]" />
                        {text.successWhatsapp}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* integrated trust rail */}
          <div className="grid grid-cols-2 border-t border-white/10 sm:grid-cols-4">
            {[
              [`${academyStats.students}+`, text.statsStudents],
              [`${academyStats.tutors}+`, text.statsTutors],
              [`${academyStats.countries}+`, text.statsCountries],
              [`${academyStats.years}+`, text.statsYears],
            ].map(([value, label], index) => (
              <div key={label} className={`relative px-4 py-5 sm:py-6 ${index > 0 ? "sm:border-l sm:border-white/10" : ""}`}>
                <div className="text-xl font-black text-[#F3E4B2] sm:text-2xl">{value}</div>
                <div className="mt-1 text-[9px] font-bold uppercase tracking-[.16em] text-white/42">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL BENEFITS */}
      <section className="relative px-4 py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#9B772D]">
              <span className="h-px w-8 bg-[#B99645]" />
              {text.benefitsEyebrow}
            </div>
            <h2 className={`mt-5 max-w-xl text-[2.15rem] font-bold leading-[1.08] tracking-[-.02em] text-[#10211E] sm:text-5xl ${isRtl ? "font-elmessiri leading-[1.25]" : "font-serif"}`}>
              {text.benefitsTitle}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#6F7773]">{text.heroText}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-[28px] border p-6 sm:p-7 ${
                  index === 0
                    ? "border-[#C9AE68]/35 bg-[#0B3D35] text-white sm:row-span-2"
                    : "border-[#D8D2C4] bg-[#FBF8F0]"
                }`}
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                  index === 0
                    ? "border-[#D4B261]/40 bg-[#D4B261]/10 text-[#E7CD84]"
                    : "border-[#D5C79F]/60 bg-[#F1E8D0] text-[#8B6721]"
                }`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <div className={`mt-10 text-[10px] font-black uppercase tracking-[.18em] ${index === 0 ? "text-white/35" : "text-[#A08E68]"}`}>
                  0{index + 1}
                </div>
                <h3 className={`mt-2 text-xl font-bold ${index === 0 ? "text-white" : "text-[#10211E]"}`}>{item.title}</h3>
                <p className={`mt-3 text-sm leading-7 ${index === 0 ? "text-white/58" : "text-[#6F7773]"}`}>{item.body}</p>
                {index === 0 && (
                  <div aria-hidden="true" className="absolute -bottom-20 -right-16 h-44 w-44 rounded-full border border-[#D4B261]/15" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="border-y border-[#D8D2C4] bg-[#FBF8F0] px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <div>
              <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#9B772D]">
                <span className="h-px w-8 bg-[#B99645]" />
                {text.programsEyebrow}
              </div>
              <h2 className={`mt-4 text-[2.15rem] font-bold leading-tight text-[#10211E] sm:text-5xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
                {text.programsTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#6F7773] md:justify-self-end">{text.programsText}</p>
          </div>

          <div className="mt-12 divide-y divide-[#DCD6C8] border-y border-[#DCD6C8]">
            {programs.map((program, index) => (
              <div key={program.title} className="group grid gap-5 py-7 transition md:grid-cols-[80px_1fr_1.2fr] md:items-center md:py-8">
                <div className="text-sm font-black text-[#B99645]">0{index + 1}</div>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5C79F] bg-[#F5EBD3] text-[#8B6721] transition group-hover:bg-[#0B3D35] group-hover:text-[#E7CD84]">
                    <program.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#10211E]">{program.title}</h3>
                </div>
                <p className="text-sm leading-7 text-[#6F7773]">{program.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#9B772D]">{text.howEyebrow}</div>
            <h2 className={`mt-4 text-[2.1rem] font-bold text-[#10211E] sm:text-5xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
              {text.howTitle}
            </h2>
          </div>

          <div className="relative mt-14 grid gap-8 md:grid-cols-3">
            <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-5 hidden h-px bg-gradient-to-r from-transparent via-[#C9AE68] to-transparent md:block" />
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#C9AE68] bg-[#F5F0E6] text-[10px] font-black text-[#9B772D]">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-bold text-[#10211E]">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-7 text-[#6F7773]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE FRAME */}
      <section className="px-4 pb-24 sm:pb-32">
        <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[34px] border border-[#C8AA5D]/25 bg-[#08231E] p-7 text-white shadow-[0_40px_100px_-55px_rgba(6,23,19,.95)] sm:p-10 lg:p-14">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#D4B261]/15" />
          <div aria-hidden="true" className="absolute -left-16 -bottom-24 h-56 w-56 rounded-full bg-[#D4B261]/5 blur-2xl" />
          <div className="relative grid gap-10 md:grid-cols-[1.05fr_.95fr] md:items-center">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#D4B261]">{text.pricingEyebrow}</div>
              <h2 className={`mt-4 max-w-xl text-[2rem] font-bold leading-tight sm:text-4xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
                {text.pricingTitle}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">{text.pricingText}</p>
            </div>
            <div className="space-y-3">
              {[text.pricingPoint1, text.pricingPoint2, text.pricingPoint3].map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-white/9 pb-3 text-sm font-semibold text-white/75">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4B261]" />
                  {item}
                </div>
              ))}
              <a
                href="#trial-form"
                className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#D4B261] px-6 text-[11px] font-extrabold uppercase tracking-[.09em] text-[#09241E]"
              >
                {text.primary}
                <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#D8D2C4] bg-[#FBF8F0] px-4 py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#9B772D]">
              <span className="h-px w-8 bg-[#B99645]" />
              {text.faqEyebrow}
            </div>
            <h2 className={`mt-4 text-[2.1rem] font-bold leading-tight text-[#10211E] sm:text-5xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
              {text.faqTitle}
            </h2>
          </div>

          <div className="divide-y divide-[#DCD6C8] border-y border-[#DCD6C8]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[15px] font-bold text-[#10211E]">
                  {question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D5C79F] text-[#9B772D]">
                    <ChevronDown className="h-3.5 w-3.5 transition group-open:rotate-180" />
                  </span>
                </summary>
                <p className="max-w-2xl pt-3 text-sm leading-7 text-[#6F7773]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#061713] px-4 py-24 text-white sm:py-28">
        <div aria-hidden="true" className="absolute left-1/2 top-[-180px] h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-[#D4B261]/15" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-5 h-px w-14 bg-[#D4B261]" />
          <h2 className={`text-[2.15rem] font-bold leading-tight sm:text-5xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
            {text.finalTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55">{text.finalText}</p>
          <a
            href="#trial-form"
            className="mt-8 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#D4B261] px-8 text-[11px] font-extrabold uppercase tracking-[.09em] text-[#09241E] shadow-[0_20px_50px_-22px_rgba(212,178,97,.72)]"
          >
            {text.finalCta}
            <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/8 bg-[#061713] px-4 py-7 text-white">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <img src="/header-icon.png" alt="" className="h-9 w-auto" />
            <div>
              <div className="text-sm font-bold text-white">{text.footer}</div>
              <div className="mt-0.5 text-[9px] uppercase tracking-[.12em] text-white/35">{text.footerText}</div>
            </div>
          </div>
          <div className="text-[10px] text-white/30">
            © {new Date().getFullYear()} Afaq Al-Quran Academy
          </div>
        </div>
      </footer>

      {/* mobile conversion bar */}
      <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
        <a
          href="#trial-form"
          className="flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E4C775]/40 bg-[#0B3D35]/95 px-5 text-[11px] font-extrabold uppercase tracking-[.08em] text-white shadow-[0_18px_50px_-20px_rgba(0,0,0,.75)] backdrop-blur-xl"
        >
          <Sparkles className="h-4 w-4 text-[#D4B261]" />
          {text.primary}
        </a>
      </div>
    </div>
  );
}
