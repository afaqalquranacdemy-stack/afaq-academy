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
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
  Send,
  UserCheck,
  Video,
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

  const programImages = [
    "/images/courses/quran-recitation1.webp",
    "/images/courses/quranic-arabic.webp",
    "/images/courses/tafsir.webp",
    "/images/courses/kids-qaida1.webp",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#FCFBF7] text-slate-900">
      {/* HERO — academic editorial composition */}
      <section className="relative overflow-hidden bg-[#F8FAF7]">
        <div className="absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(circle_at_70%_15%,rgba(200,155,60,.13),transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/35 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <header className="flex h-20 items-center justify-between border-b border-slate-200/70">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Afaq Al-Quran Academy">
              <img src="/header-icon.png" alt="" className="h-12 w-auto" />
              <div className="leading-none">
                <div className={`font-bold bg-gradient-to-r from-[#0A6A5D] via-[#075248] to-[#033D38] bg-clip-text text-transparent ${isRtl ? "font-elmessiri text-[17px]" : "font-serif text-[15px] tracking-[.03em]"}`}>
                  {isRtl ? "آفَاقُ الْقُرْآنِ" : "AFAQ AL-QURAN"}
                </div>
                <div className={`mt-1 text-[#B8892E] ${isRtl ? "font-elmessiri text-[10px]" : "text-[9px] font-bold tracking-[.28em]"}`}>
                  {isRtl ? "أَكَادِيمِيَّة" : "ACADEMY"}
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={() => switchLocale(locale === "en" ? "ar" : "en")}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 text-xs font-bold text-slate-700 shadow-sm transition hover:border-teal-200 hover:text-teal-700"
              >
                <Globe2 className="h-4 w-4 text-teal-700" />
                {locale === "en" ? "العربية" : "EN"}
              </button>
              <a
                href="#trial-form"
                className="hidden h-10 items-center rounded-full bg-[#075248] px-5 text-[11px] font-extrabold uppercase tracking-[.08em] text-white shadow-[0_12px_28px_-16px_rgba(7,82,72,.75)] transition hover:-translate-y-0.5 sm:inline-flex"
              >
                {text.navCta}
              </a>
            </div>
          </header>

          <div className="grid items-center gap-8 pb-8 pt-10 md:grid-cols-[1.02fr_.98fr] md:gap-12 md:pb-10 md:pt-12 lg:gap-14">
            <div className={isRtl ? "text-right" : "text-left"}>
              <div className="mb-6 inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#A37B2C]">
                <span className="h-px w-10 bg-[#C89B3C]" />
                {text.badge}
              </div>

              <h1 className={`max-w-[760px] font-bold tracking-[-.025em] text-[#0D2722] ${isRtl ? "font-elmessiri text-[2.55rem] leading-[1.28] sm:text-5xl lg:text-[4.5rem]" : "font-serif text-[2.8rem] leading-[1.01] sm:text-6xl lg:text-[4.9rem]"}`}>
                <span>{text.titleA}</span>
                <span className="block bg-gradient-to-r from-[#0A6A5D] via-[#087063] to-[#C89B3C] bg-clip-text text-transparent">
                  {text.titleB}
                </span>
                <span className="mt-2 block text-[#0D2722]/90">{text.titleC}</span>
              </h1>

              <p className="mt-6 max-w-[660px] text-[15px] font-medium leading-7 text-slate-600 sm:text-[17px]">
                {text.heroText}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#trial-form"
                  className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#075248] px-7 text-[12px] font-extrabold uppercase tracking-[.08em] text-white shadow-[0_18px_42px_-24px_rgba(7,82,72,.8)] transition hover:-translate-y-0.5"
                >
                  {text.primary}
                  <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </a>
                <a
                  href={academyContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => pushEvent("whatsapp_click", { page: "/free-trial", location: "hero" })}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 text-[12px] font-bold text-[#075248] shadow-sm transition hover:border-teal-200"
                >
                  <MessageCircle className="h-4 w-4" />
                  {text.whatsapp}
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[11px] font-semibold text-slate-500">
                {[text.noCard, text.flexible, text.oneToOne, text.response].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-teal-50">
                      <Check className="h-2.5 w-2.5 text-teal-700" />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual academy composition, not a card */}
            <div className="relative mx-auto h-[470px] w-full max-w-[560px] md:h-[520px]">
              <div className="absolute left-[10%] top-[2%] h-[82%] w-[66%] rounded-t-[170px] rounded-b-[34px] border border-[#C89B3C]/30 bg-white p-2 shadow-[0_32px_72px_-42px_rgba(15,23,42,.42)]">
                <div className="relative h-full overflow-hidden rounded-t-[170px] rounded-b-[31px] bg-[#EAF1EC]">
                  <Image
                    src="/images/team/fatima.webp"
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 768px) 80vw, 34vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#072F29]/70 via-[#072F29]/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#E6CF91]">
                      {text.oneToOne}
                    </div>
                    <div className="mt-1 text-sm font-bold">{text.benefit1}</div>
                  </div>
                </div>
              </div>

              <div className="absolute right-[1%] top-[19%] w-[41%] overflow-hidden rounded-[22px] border-4 border-[#FCFBF7] bg-white shadow-[0_22px_54px_-32px_rgba(15,23,42,.42)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/team/ahmed.webp"
                    alt=""
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="absolute bottom-[1%] left-[1%] w-[46%] rounded-[20px] border border-slate-200 bg-white p-3 shadow-[0_20px_48px_-30px_rgba(15,23,42,.36)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[16px]">
                  <Image
                    src="/images/courses/quran-recitation1.webp"
                    alt=""
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
                <div className="px-1 pb-1 pt-3">
                  <div className="text-[9px] font-extrabold uppercase tracking-[.14em] text-[#A37B2C]">{text.programQuran}</div>
                  <div className="mt-1 text-xs font-bold text-[#0D2722]">{text.programQuranText}</div>
                </div>
              </div>

              <div className="absolute right-[4%] bottom-[5%] min-w-[118px] rounded-[14px] border border-[#C89B3C]/25 bg-[#FFFDF9]/95 px-4 py-3 shadow-[0_14px_30px_-20px_rgba(15,23,42,.35)] backdrop-blur">
                <div className="flex items-end gap-1.5">
                  <div className="text-xl font-black leading-none text-[#075248]">{academyStats.students}+</div>
                  <div className="pb-0.5 text-[8px] font-bold uppercase tracking-[.12em] text-slate-400">{text.statsStudents}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* horizontal admissions rail — part of the hero, fully visible */}
        <div id="trial-form" className="relative z-20 px-4 pb-8 md:pb-10">
          <div className="mx-auto max-w-[1260px] rounded-[24px] border border-slate-200/90 bg-white p-5 shadow-[0_24px_60px_-34px_rgba(15,23,42,.30)] sm:p-6">
            {!submitted ? (
              <>
                <div className="mb-4 flex flex-col justify-between gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="text-[9px] font-extrabold uppercase tracking-[.16em] text-[#A37B2C]">{text.formEyebrow}</div>
                    <div className={`mt-1 text-lg font-bold text-[#0D2722] ${isRtl ? "font-elmessiri" : "font-serif"}`}>{text.formTitle}</div>
                  </div>
                  <div className="max-w-md text-xs leading-5 text-slate-500">{text.formText}</div>
                </div>
                <form onSubmit={handleSubmit} onFocus={startForm} className="grid gap-4 md:grid-cols-[1.05fr_1.1fr_1.15fr_1fr_auto] md:items-end">
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

                <label className="group/field block">
                  <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-500">{text.name}</span>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[9px] border border-teal-100 bg-teal-50/80 text-[#075248] transition group-focus-within/field:border-teal-200 group-focus-within/field:bg-teal-100/70">
                      <UserRound className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="h-13 w-full rounded-[13px] border border-slate-200 bg-[#F8FAF9] pl-12 pr-4 text-sm text-slate-800 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/8 rtl:pl-4 rtl:pr-12"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#C89B3C]/70 group-focus-within/field:block rtl:left-3 rtl:right-auto" />
                  </div>
                </label>

                <label className="group/field block">
                  <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-500">{text.email}</span>
                  <div className="relative" dir="ltr">
                    <span className="pointer-events-none absolute left-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[9px] border border-teal-100 bg-teal-50/80 text-[#075248] transition group-focus-within/field:border-teal-200 group-focus-within/field:bg-teal-100/70">
                      <Mail className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      className="h-13 w-full rounded-[13px] border border-slate-200 bg-[#F8FAF9] pl-12 pr-4 text-sm text-slate-800 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/8"
                      dir="ltr"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#C89B3C]/70 group-focus-within/field:block" />
                  </div>
                </label>

                <label className="group/field block">
                  <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-500">{text.whatsappLabel}</span>
                  <div className="relative" dir="ltr">
                    <span className="pointer-events-none absolute left-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[9px] border border-teal-100 bg-teal-50/80 text-[#075248] transition group-focus-within/field:border-teal-200 group-focus-within/field:bg-teal-100/70">
                      <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <input
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={(e) => setForm((prev) => ({ ...prev, whatsapp: e.target.value }))}
                      placeholder={locationData.code ? `${locationData.code} 104 121 3922` : "+1 555 123 4567"}
                      className="h-13 w-full rounded-[13px] border border-slate-200 bg-[#F8FAF9] pl-12 pr-4 text-sm text-slate-800 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/8"
                      dir="ltr"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#C89B3C]/70 group-focus-within/field:block" />
                  </div>
                </label>

                <label className="group/field block">
                  <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-500">{text.interest}</span>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-2.5 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[9px] border border-teal-100 bg-teal-50/80 text-[#075248] transition group-focus-within/field:border-teal-200 group-focus-within/field:bg-teal-100/70">
                      <BookOpen className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <select
                      required
                      value={form.course}
                      onChange={(e) => setForm((prev) => ({ ...prev, course: e.target.value }))}
                      className="h-13 w-full appearance-none rounded-[13px] border border-slate-200 bg-[#F8FAF9] pl-12 pr-10 text-sm text-slate-800 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/8 rtl:pl-10 rtl:pr-12"
                    >
                      <option value="">{text.choose}</option>
                      <option value="quran">{text.quran}</option>
                      <option value="arabic">{text.arabic}</option>
                      <option value="islamic">{text.islamic}</option>
                      <option value="kids">{text.kids}</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition group-focus-within/field:text-[#075248] rtl:left-3 rtl:right-auto" strokeWidth={1.8} />
                  </div>
                </label>

                <button
                  disabled={submitting}
                  className="inline-flex h-13 min-w-[170px] items-center justify-center gap-2 rounded-[13px] bg-[#075248] px-6 text-[10px] font-extrabold uppercase tracking-[.08em] text-white shadow-[0_12px_28px_-18px_rgba(7,82,72,.7)] transition hover:bg-[#096357] disabled:opacity-60"
                >
                  {submitting ? text.sending : text.submit}
                  {!submitting && <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />}
                </button>
              </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-between gap-4 py-3 text-center sm:flex-row sm:text-left">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50">
                    <CheckCircle2 className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0D2722]">{text.successTitle}</div>
                    <div className="mt-1 text-xs text-slate-500">{text.successText}</div>
                  </div>
                </div>
                <a
                  href={academyContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => pushEvent("whatsapp_click", { page: "/free-trial", location: "success" })}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[#075248] px-5 text-xs font-bold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  {text.successWhatsapp}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* learning journey — refined connected composition */}
      <section className="relative overflow-hidden px-4 pb-24 pt-24 sm:pb-28 sm:pt-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#A37B2C]">
              <span className="h-px w-9 bg-[#C89B3C]" />
              {text.howEyebrow}
              <span className="h-px w-9 bg-[#C89B3C]" />
            </div>
            <h2 className={`mt-4 text-[2.2rem] font-bold leading-tight text-[#0D2722] sm:text-5xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
              {text.howTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">{text.formText}</p>
          </div>

          {/* Desktop */}
          <div className="relative mt-14 hidden overflow-hidden rounded-[36px] border border-slate-200/80 bg-[linear-gradient(145deg,#FFFFFF_0%,#F8FBF9_55%,#F6F8F6_100%)] px-8 py-12 shadow-[0_30px_80px_-55px_rgba(15,23,42,.28)] md:block">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/45 to-transparent" />
            <div className="absolute left-1/2 top-0 h-44 w-[520px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(200,155,60,.08)_0%,transparent_70%)]" />

            {/* connector line lives above content, never across the portrait/text */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-[8%] right-[8%] top-[42px] h-[90px] w-[84%]"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M90 72 C 230 18, 360 18, 500 54 C 640 18, 770 18, 910 72"
                stroke="url(#journeyRefined)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="journeyRefined" x1="90" y1="50" x2="910" y2="50" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0A6A5D" stopOpacity=".18" />
                  <stop offset=".5" stopColor="#C89B3C" stopOpacity=".68" />
                  <stop offset="1" stopColor="#0A6A5D" stopOpacity=".18" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative z-10 grid min-h-[395px] grid-cols-[1fr_.92fr_1fr] items-center gap-10">
              {/* Step 1 */}
              <div className="mx-auto w-full max-w-[285px] pt-2">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[22px] border border-[#C89B3C]/28 bg-white shadow-[0_16px_34px_-24px_rgba(15,23,42,.28)]">
                    <Send className="h-8 w-8 text-[#075248]" strokeWidth={1.65} />
                    <span className="absolute -right-2 -top-2 flex h-7 min-w-7 items-center justify-center rounded-full border border-[#C89B3C]/35 bg-[#FFFDF8] px-1 text-[9px] font-black text-[#A37B2C] shadow-sm">
                      {steps[0].number}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C89B3C]/50 to-transparent" />
                </div>
                <h3 className="mt-6 text-[1.55rem] font-bold leading-tight text-[#0D2722]">{steps[0].title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{steps[0].body}</p>
              </div>

              {/* Step 2 — portrait is the step, not an overlapping decoration */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute left-1/2 top-[-30px] z-20 flex h-[64px] w-[64px] -translate-x-1/2 items-center justify-center rounded-[20px] border-4 border-white bg-[#075248] text-white shadow-[0_16px_34px_-22px_rgba(7,82,72,.68)]">
                    <UserCheck className="h-7 w-7" strokeWidth={1.7} />
                    <span className="absolute -right-2 -top-2 flex h-7 min-w-7 items-center justify-center rounded-full border border-[#C89B3C]/35 bg-[#FFFDF8] px-1 text-[9px] font-black text-[#A37B2C] shadow-sm">
                      {steps[1].number}
                    </span>
                  </div>
                  <div className="relative h-[245px] w-[190px] overflow-hidden rounded-t-[96px] rounded-b-[24px] border-[6px] border-white bg-slate-100 shadow-[0_24px_60px_-36px_rgba(15,23,42,.34)]">
                    <Image
                      src="/images/team/fatima.webp"
                      alt=""
                      fill
                      sizes="190px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#063C34]/72 to-transparent" />
                    <div className="absolute inset-x-4 bottom-3 text-center text-[8px] font-extrabold uppercase tracking-[.14em] text-[#F0DDA6]">
                      {text.oneToOne}
                    </div>
                  </div>
                </div>
                <div className="mt-5 max-w-[300px] text-center">
                  <h3 className="text-[1.5rem] font-bold leading-tight text-[#0D2722]">{steps[1].title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{steps[1].body}</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mx-auto w-full max-w-[285px] pt-2">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-l from-[#C89B3C]/50 to-transparent" />
                  <div className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[22px] border border-[#C89B3C]/28 bg-white shadow-[0_16px_34px_-24px_rgba(15,23,42,.28)]">
                    <Video className="h-8 w-8 text-[#075248]" strokeWidth={1.65} />
                    <span className="absolute -right-2 -top-2 flex h-7 min-w-7 items-center justify-center rounded-full border border-[#C89B3C]/35 bg-[#FFFDF8] px-1 text-[9px] font-black text-[#A37B2C] shadow-sm">
                      {steps[2].number}
                    </span>
                  </div>
                </div>
                <h3 className="mt-6 text-[1.55rem] font-bold leading-tight text-[#0D2722]">{steps[2].title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{steps[2].body}</p>
              </div>
            </div>

            <div className="relative z-10 mt-2 grid grid-cols-3 border-t border-slate-200/70 pt-5">
              <div className="text-left text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400">
                {text.step1}
              </div>
              <div className="text-center text-[9px] font-extrabold uppercase tracking-[.14em] text-[#A37B2C]">
                {text.oneToOne}
              </div>
              <div className="text-right text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400">
                {text.step3}
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="relative mt-10 space-y-0 md:hidden">
            <div className="absolute bottom-5 left-[23px] top-5 w-px bg-gradient-to-b from-[#C89B3C]/35 via-[#0A6A5D]/28 to-[#C89B3C]/35" />
            {steps.map((step, index) => (
              <div key={step.number} className="relative grid grid-cols-[48px_1fr] gap-4 pb-8 last:pb-0">
                <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-[15px] shadow-sm ${
                  index === 1
                    ? "bg-[#075248] text-white"
                    : "border border-[#C89B3C]/30 bg-white text-[#075248]"
                }`}>
                  {index === 0 ? (
                    <Send className="h-5 w-5" strokeWidth={1.7} />
                  ) : index === 1 ? (
                    <UserCheck className="h-5 w-5" strokeWidth={1.7} />
                  ) : (
                    <Video className="h-5 w-5" strokeWidth={1.7} />
                  )}
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border border-[#C89B3C]/35 bg-[#FFFDF8] px-1 text-[7px] font-black text-[#A37B2C]">
                    {step.number}
                  </span>
                </div>
                <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_18px_44px_-34px_rgba(15,23,42,.25)]">
                  {index === 1 && (
                    <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[16px]">
                      <Image
                        src="/images/team/fatima.webp"
                        alt=""
                        fill
                        sizes="80vw"
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-[#0D2722]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* programs mosaic — navigable academic pathways */}
      <section className="bg-white px-4 py-24 sm:py-28">
        <div className="mx-auto max-w-[1260px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#A37B2C]">
                <span className="h-px w-9 bg-[#C89B3C]" />
                {text.programsEyebrow}
              </div>
              <h2 className={`mt-4 text-[2.2rem] font-bold leading-tight text-[#0D2722] sm:text-5xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
                {text.programsTitle}
              </h2>
            </div>

            <div className="flex max-w-xl flex-col items-start gap-4 md:items-end">
              <p className="text-sm leading-7 text-slate-500 md:text-right">{text.programsText}</p>
              <Link
                href="/courses"
                className="group inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.13em] text-[#075248]"
              >
                {isRtl ? "عرض جميع الدورات" : "View all courses"}
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-teal-100 bg-teal-50 transition group-hover:border-teal-200 group-hover:bg-teal-100">
                  <ArrowRight className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 ${isRtl ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-10 grid auto-rows-[250px] gap-4 md:grid-cols-12 md:auto-rows-[225px]">
            {programs.map((program, index) => {
              const spans = [
                "md:col-span-7 md:row-span-2",
                "md:col-span-5",
                "md:col-span-5",
                "md:col-span-12",
              ];
              const hrefs = [
                "/courses?category=Quran#courses-grid",
                "/courses?category=Arabic#courses-grid",
                "/courses?category=Islamic%20Studies#courses-grid",
                "/courses?category=Kids#courses-grid",
              ];
              const ctas = isRtl
                ? ["استكشف دورات القرآن", "استكشف دورات العربية", "استكشف الدراسات الإسلامية", "استكشف برامج الأطفال"]
                : ["Explore Quran courses", "Explore Arabic courses", "Explore Islamic Studies", "Explore Kids programs"];

              return (
                <Link
                  key={program.title}
                  href={hrefs[index]}
                  className={`group relative overflow-hidden rounded-[28px] outline-none ring-offset-2 transition duration-500 focus-visible:ring-2 focus-visible:ring-teal-600 ${spans[index]}`}
                  aria-label={ctas[index]}
                >
                  <Image
                    src={programImages[index]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#052A24]/95 via-[#052A24]/38 to-transparent transition duration-500 group-hover:from-[#052A24]/98 group-hover:via-[#052A24]/46" />
                  <div className="absolute inset-0 border border-white/0 transition duration-500 group-hover:border-[#E0C77F]/35" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/10 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[.14em] text-white/75 backdrop-blur-md sm:left-6 sm:top-6">
                    <span className="text-[#E0C77F]">0{index + 1}</span>
                    <span className="h-1 w-1 rounded-full bg-white/35" />
                    {isRtl ? "مسار تعليمي" : "Learning path"}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                    <div className="max-w-2xl">
                      <h3 className="text-xl font-bold sm:text-2xl lg:text-[1.65rem]">{program.title}</h3>
                      <p className={`mt-2 text-sm leading-6 text-white/72 ${index === 3 ? "md:max-w-2xl" : "max-w-xl"}`}>
                        {program.body}
                      </p>
                    </div>

                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[.12em] text-white backdrop-blur-sm transition duration-300 group-hover:border-[#E0C77F]/40 group-hover:bg-[#E0C77F]/12 group-hover:text-[#F5E5B8]">
                      {ctas[index]}
                      <ArrowRight className={`h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row">
            <p className="max-w-2xl text-xs leading-6 text-slate-500">
              {isRtl
                ? "يمكنك تصفح جميع الدورات داخل كل مسار، مقارنة المستويات، ثم اختيار نقطة البداية الأنسب لك."
                : "Browse every course in each pathway, compare levels, and choose the starting point that fits you best."}
            </p>
            <Link
              href="/courses"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-[#F8FAF9] px-5 text-[10px] font-extrabold uppercase tracking-[.1em] text-[#075248] transition hover:border-teal-200 hover:bg-teal-50"
            >
              {isRtl ? "تصفح مكتبة الدورات" : "Browse course library"}
              <ArrowRight className={`h-3.5 w-3.5 ${isRtl ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* teachers + benefits fused into one composition */}
      <section className="relative overflow-hidden bg-[#EEF5F1] px-4 py-24 sm:py-32">
        <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-[#0A6A5D]/8" />
        <div className="mx-auto grid max-w-[1260px] gap-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-16">
          <div className="relative h-[560px]">
            <div className="absolute left-0 top-0 h-[78%] w-[62%] overflow-hidden rounded-[34px] bg-white shadow-[0_30px_70px_-42px_rgba(15,23,42,.4)]">
              <Image src="/images/team/omar.webp" alt="" fill sizes="40vw" className="object-cover object-top" />
            </div>
            <div className="absolute bottom-0 right-0 h-[62%] w-[54%] overflow-hidden rounded-[34px] border-[8px] border-[#EEF5F1] bg-white shadow-[0_30px_70px_-42px_rgba(15,23,42,.4)]">
              <Image src="/images/team/ahmed.webp" alt="" fill sizes="34vw" className="object-cover object-top" />
            </div>
            <div className="absolute left-[48%] top-[38%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C89B3C]/35 bg-[#FFFDF8]/95 text-center shadow-xl backdrop-blur">
              <div>
                <div className="text-xl font-black text-[#075248]">{academyStats.tutors}+</div>
                <div className="text-[8px] font-bold uppercase tracking-[.12em] text-slate-400">{text.statsTutors}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#A37B2C]">
              <span className="h-px w-9 bg-[#C89B3C]" />
              {text.benefitsEyebrow}
            </div>
            <h2 className={`mt-4 text-[2.2rem] font-bold leading-tight text-[#0D2722] sm:text-5xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
              {text.benefitsTitle}
            </h2>

            <div className="mt-8 divide-y divide-slate-200/80 border-y border-slate-200/80">
              {benefits.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[44px_1fr] gap-4 py-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#075248] shadow-sm">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[.14em] text-[#A37B2C]">0{index + 1}</div>
                    <h3 className="mt-1 text-base font-bold text-[#0D2722]">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-500">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* integrated trust + price */}
      <section className="px-4 py-24 sm:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid overflow-hidden rounded-[34px] border border-slate-200 bg-white md:grid-cols-[.92fr_1.08fr]">
            <div className="bg-[#075248] p-7 text-white sm:p-10 lg:p-12">
              <div className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#E0C77F]">{text.pricingEyebrow}</div>
              <h2 className={`mt-4 text-[2rem] font-bold leading-tight sm:text-4xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
                {text.pricingTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65">{text.pricingText}</p>

              <div className="mt-7 space-y-3">
                {[text.pricingPoint1, text.pricingPoint2, text.pricingPoint3].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-white/82">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E0C77F]" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="#trial-form"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-[11px] font-extrabold uppercase tracking-[.08em] text-[#075248]"
              >
                {text.primary}
                <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
              </a>
            </div>

            <div className="grid grid-cols-2">
              {[
                [`${academyStats.students}+`, text.statsStudents],
                [`${academyStats.countries}+`, text.statsCountries],
                [`${academyStats.years}+`, text.statsYears],
                [`${academyStats.tutors}+`, text.statsTutors],
              ].map(([value, label], index) => (
                <div key={label} className={`flex min-h-40 flex-col justify-end p-6 sm:p-8 ${index % 2 === 0 ? "border-r border-slate-200" : ""} ${index < 2 ? "border-b border-slate-200" : ""}`}>
                  <div className="text-3xl font-black text-[#075248] sm:text-4xl">{value}</div>
                  <div className="mt-2 text-[9px] font-bold uppercase tracking-[.14em] text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ as editorial split */}
      <section className="bg-[#F8FAF7] px-4 py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#A37B2C]">
              <span className="h-px w-9 bg-[#C89B3C]" />
              {text.faqEyebrow}
            </div>
            <h2 className={`mt-4 text-[2.15rem] font-bold leading-tight text-[#0D2722] sm:text-5xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
              {text.faqTitle}
            </h2>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[15px] font-bold text-[#0D2722]">
                  {question}
                  <ChevronDown className="h-4 w-4 shrink-0 text-[#A37B2C] transition group-open:rotate-180" />
                </summary>
                <p className="max-w-2xl pt-3 text-sm leading-7 text-slate-500">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* final editorial CTA */}
      <section className="relative overflow-hidden bg-white px-4 py-24 sm:py-28">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C89B3C]/12" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto h-px w-14 bg-[#C89B3C]" />
          <h2 className={`mt-6 text-[2.2rem] font-bold leading-tight text-[#0D2722] sm:text-5xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
            {text.finalTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">{text.finalText}</p>
          <a
            href="#trial-form"
            className="mt-8 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#075248] px-8 text-[11px] font-extrabold uppercase tracking-[.08em] text-white shadow-[0_18px_40px_-24px_rgba(7,82,72,.75)]"
          >
            {text.finalCta}
            <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-7">
        <div className="mx-auto flex max-w-[1260px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <img src="/header-icon.png" alt="" className="h-9 w-auto" />
            <div>
              <div className="text-sm font-bold text-[#075248]">{text.footer}</div>
              <div className="mt-0.5 text-[9px] uppercase tracking-[.12em] text-slate-400">{text.footerText}</div>
            </div>
          </div>
          <div className="text-[10px] text-slate-400">© {new Date().getFullYear()} Afaq Al-Quran Academy</div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
        <a
          href="#trial-form"
          className="flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#075248]/95 px-5 text-[11px] font-extrabold uppercase tracking-[.08em] text-white shadow-[0_18px_45px_-20px_rgba(15,23,42,.65)] backdrop-blur-xl"
        >
          <Sparkles className="h-4 w-4 text-[#E0C77F]" />
          {text.primary}
        </a>
      </div>
    </div>
  );
}
