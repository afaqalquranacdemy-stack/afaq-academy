"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookMarked,
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
  UserRound,
  Send,
  UserCheck,
  Users,
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
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { trackWhatsAppContact } from "@/lib/googleAds";

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
    namePlaceholder: "e.g. Abdullah Ahmed",
    email: "Email address",
    emailPlaceholder: "name@example.com",
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
    faqIntro:
      "Everything you need to know about starting your free trial, tutor selection, and flexible scheduling with zero obligation.",
    faqStillQuestion: "Still have a question?",
    faqStillText:
      "Our academic advisors are ready on WhatsApp to answer your inquiries and help choose your ideal pathway.",
    faqStillCta: "Chat on WhatsApp",
    faq1: "Is the trial really free?",
    ans1: "Yes, 100% free. You can experience a complete 1-to-1 live lesson without entering any credit card or payment details.",
    faq2: "Do you teach adults and children?",
    ans2: "Yes. We provide tailored programs for children, youth, and adults of all proficiency levels with certified male and female tutors.",
    faq3: "How long is each lesson?",
    ans3: `The trial session gives you full insight into our interactive method. Enrolled plans offer ${academyOperations.sessionDurations.join(", ")}-minute sessions tailored to your pace.`,
    faq4: "Can I choose a suitable time?",
    ans4: "Yes. We accommodate your family's schedule across all time zones with 24/7 flexible lesson timing.",
    faq5: "What happens after I submit the form?",
    ans5: `Our team reviews your preferences and contacts you via WhatsApp within ${academyOperations.responseTimeHours} hours to coordinate your preferred day and time.`,
    finalEyebrow: "Start Your Journey Today",
    finalTitle: "Your first lesson can start with one simple step.",
    finalText:
      "Experience personalized 1-on-1 Quranic learning tailored to your level and goals with certified Azhari tutors. Zero commitment, no payment required.",
    finalCta: "Book My Free Trial",
    finalTrust1: "Free 1-to-1 Trial",
    finalTrust2: "No Payment Required",
    finalTrust3: `Reply within ${academyOperations.responseTimeHours} hours`,
    finalPanelTitle: "What you will experience in your trial:",
    finalPanel1: "1-on-1 live interactive session with an Azhari certified tutor",
    finalPanel2: "Accurate assessment of your level & custom learning plan",
    finalPanel3: "Complete freedom to choose your schedule or continue",
    finalPanelBadge: "100% Free · No Obligation",
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
    namePlaceholder: "مثال: عبد الله أحمد",
    email: "البريد الإلكتروني",
    emailPlaceholder: "name@example.com",
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
    faqIntro:
      "كل ما تود معرفته عن الحصة التجريبية، اختيار المعلم، وتنسيق المواعيد بكل سهولة وبدون أي التزام.",
    faqStillQuestion: "هل لديك سؤال آخر؟",
    faqStillText:
      "فريقنا الأكاديمي متواجد على مدار اليوم عبر واتساب لمساعدتك واختيار المسار المناسب لك أو لأطفالك.",
    faqStillCta: "تواصل معنا عبر واتساب",
    faq1: "هل التجربة مجانية فعلًا؟",
    ans1: "نعم، مجانية 100%. يمكنك حضور حصة فردية كاملة وتجربة أسلوب التدريس بدون إدخال أي بيانات دفع أو بطاقة بنكية.",
    faq2: "هل تقدمون برامج للكبار والأطفال؟",
    ans2: "نعم. نوفر برامج مخصصة للأطفال والناشئة والكبار مع نخبة من المعلمين والمعلمات الأزهريين المجازين ذوي الخبرة والأسلوب المحبب.",
    faq3: "ما مدة الحصة؟",
    ans3: `الحصة التجريبية تمنحك فكرة كاملة عن التعليم التفاعلي، بينما توفر الخطط الدراسية خيارات ${academyOperations.sessionDurations.join(" أو ")} دقيقة حسب رغبتك.`,
    faq4: "هل يمكنني اختيار الموعد المناسب؟",
    ans4: "نعم تماماً. نوفر مرونة كاملة في المواعيد على مدار 24 ساعة لتتناسب مع أوقات فراغك وفارق التوقيت في أي دولة بالعالم.",
    faq5: "ماذا يحدث بعد إرسال النموذج؟",
    ans5: `يقوم فريقنا بمراجعة رغباتك والتواصل معك عبر واتساب خلال ${academyOperations.responseTimeHours} ساعة لتحديد الموعد الأنسب لبدء الحصة.`,
    finalEyebrow: "ابدأ رحلتك المباركة الآن",
    finalTitle: "خطوتك الأولى تبدأ بحصة تجريبية مخصصة بالكامل.",
    finalText:
      "جرّب التعليم الفردي المباشر المخصص لمستواك وهدفك مع نخبة من معلمي الأزهر الشريف، دون أي التزام مالي أو بطاقة بنكية.",
    finalCta: "احجز تجربتي المجانية",
    finalTrust1: "حصة تجريبية مجانية 1-إلى-1",
    finalTrust2: "بدون أي بيانات دفع أو بطاقة",
    finalTrust3: `تنسيق وتواصل خلال ${academyOperations.responseTimeHours} ساعة`,
    finalPanelTitle: "ماذا ينتظرك في حصتك التجريبية؟",
    finalPanel1: "لقاء مباشر 1-إلى-1 مع معلّم أزهري متخصص ومعتمد",
    finalPanel2: "تحديد دقيق لمستواك وتصميم خطة دراسية تناسب وقتك",
    finalPanel3: "تجربة بيئة التعلم التفاعلية بحرية تامة دون أي التزام",
    finalPanelBadge: "مجانية تماماً · بدون أي التزام",
    footer: "أكاديمية آفاق القرآن",
    footerText: "تعليم القرآن واللغة العربية والعلوم الإسلامية",
  },
} as const;

function AfaqBrandSeal({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="38 0 180 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Afaq Al-Quran Academy Emblem"
    >
      <defs>
        <linearGradient id="sealGreen" x1="42" y1="24" x2="196" y2="223" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B665B" />
          <stop offset="0.52" stopColor="#075248" />
          <stop offset="1" stopColor="#033B36" />
        </linearGradient>
        <linearGradient id="sealGreenLight" x1="93" y1="81" x2="159" y2="187" gradientUnits="userSpaceOnUse">
          <stop stopColor="#149985" />
          <stop offset="1" stopColor="#075248" />
        </linearGradient>
        <linearGradient id="sealGold" x1="77" y1="42" x2="177" y2="207" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2D27D" />
          <stop offset="0.46" stopColor="#C8972C" />
          <stop offset="1" stopColor="#9B6715" />
        </linearGradient>
        <linearGradient id="sealPaper" x1="55" y1="174" x2="199" y2="218" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFDF6" />
          <stop offset="0.6" stopColor="#F6E7BE" />
          <stop offset="1" stopColor="#E5C56C" />
        </linearGradient>
      </defs>
      <g>
        <path
          d="M128 18C109 43 87 54 68 76C51 96 43 119 43 148V184H61V149C61 124 68 105 82 88C95 72 112 62 128 42C144 62 161 72 174 88C188 105 195 124 195 149V184H213V148C213 119 205 96 188 76C169 54 147 43 128 18Z"
          fill="url(#sealGreen)"
        />
        <path
          d="M128 29C111 50 94 59 79 77C62 96 55 117 55 146V179"
          stroke="url(#sealGold)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M128 29C145 50 162 59 177 77C194 96 201 117 201 146V179"
          stroke="url(#sealGold)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path d="M128 51L134 61L128 71L122 61L128 51Z" fill="url(#sealGold)" />
        <circle cx="128" cy="75" r="5" fill="url(#sealGreen)" />
        <path
          d="M128 78C118 92 107 98 99 109C89 121 84 135 84 151V183H172V151C172 135 167 121 157 109C149 98 138 92 128 78Z"
          fill="url(#sealGreenLight)"
        />
        <path
          d="M128 106C120 117 112 122 106 130C99 138 96 148 96 159V183H160V159C160 148 157 138 150 130C144 122 136 117 128 106Z"
          fill="#F9F4E7"
        />
        <path
          d="M128 116C122 124 116 128 112 134C107 141 105 148 105 157V183H151V157C151 148 149 141 144 134C140 128 134 124 128 116Z"
          fill="url(#sealGreen)"
        />
        <path d="M126 183C107 171 84 168 58 174C73 183 91 193 126 207V183Z" fill="url(#sealPaper)" />
        <path d="M130 183C149 171 172 168 198 174C183 183 165 193 130 207V183Z" fill="url(#sealPaper)" />
        <path d="M126 190C105 180 86 178 67 181C82 188 99 196 126 207V190Z" fill="url(#sealGold)" />
        <path d="M130 190C151 180 170 178 189 181C174 188 157 196 130 207V190Z" fill="url(#sealGold)" />
        <path d="M126 208C102 207 80 201 59 190C70 208 88 218 113 220L126 208Z" fill="url(#sealGreen)" />
        <path d="M130 208C154 207 176 201 197 190C186 208 168 218 143 220L130 208Z" fill="url(#sealGreen)" />
        <path d="M128 211L136 226L128 241L120 226L128 211Z" fill="url(#sealGreen)" />
      </g>
    </svg>
  );
}

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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

      // Send the lead event to GA4 only after the API confirms a successful submission.
      const analyticsTarget = window as typeof window & {
        gtag?: (...args: unknown[]) => void;
      };
      analyticsTarget.gtag?.("event", "free_trial_lead", {
        send_to: "G-J3KX3TZ4F2",
        page: "/free-trial",
        course: form.course,
        form_type: "trial_booking",
      });

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
    { title: text.programIslamic, body: text.programIslamicText, icon: BookMarked },
    { title: text.programKids, body: text.programKidsText, icon: UserRound },
  ];

  const steps = [
    { number: "01", title: text.step1, body: text.step1Text },
    { number: "02", title: text.step2, body: text.step2Text },
    { number: "03", title: text.step3, body: text.step3Text },
  ];

  const faqs = [
    {
      icon: BadgeCheck,
      question: text.faq1,
      answer: text.ans1,
    },
    {
      icon: Users,
      question: text.faq2,
      answer: text.ans2,
    },
    {
      icon: CalendarClock,
      question: text.faq3,
      answer: text.ans3,
    },
    {
      icon: Globe2,
      question: text.faq4,
      answer: text.ans4,
    },
    {
      icon: Send,
      question: text.faq5,
      answer: text.ans5,
    },
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

          <div className="grid items-center gap-8 pb-8 pt-8 md:grid-cols-[1.02fr_.98fr] md:gap-12 md:pb-10 md:pt-12 lg:gap-14">
            <div className="flex flex-col items-center text-center md:items-start md:text-left rtl:md:items-start rtl:md:text-right">
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#C89B3C]/35 bg-[#FFFDF8] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-[#A37B2C] shadow-sm md:mb-6">
                <AfaqBrandSeal className="h-4 w-auto inline-block shrink-0" />
                <span>{text.badge}</span>
              </div>

              <h1 className={`max-w-[760px] font-bold tracking-[-.025em] text-[#0D2722] text-center md:text-left rtl:md:text-right mx-auto md:mx-0 ${
                isRtl
                  ? "font-elmessiri text-[1.85rem] leading-[1.24] xs:text-[2.15rem] sm:text-4xl md:text-5xl lg:text-[4.5rem]"
                  : "font-serif text-[1.7rem] leading-[1.12] xs:text-[1.95rem] sm:text-4xl md:text-5xl lg:text-[4.75rem]"
              }`}>
                <span>{text.titleA} </span>
                <span className="inline md:block bg-gradient-to-r from-[#0A6A5D] via-[#087063] to-[#C89B3C] bg-clip-text text-transparent">
                  {text.titleB}
                </span>
                <span className="mt-1.5 block text-[#0D2722]/90 sm:mt-2">{text.titleC}</span>
              </h1>

              <p className="mt-4 max-w-[620px] text-[14px] font-medium leading-6 text-slate-600 sm:mt-6 sm:text-[17px] sm:leading-7 mx-auto md:mx-0 text-center md:text-left rtl:md:text-right">
                {text.heroText}
              </p>

              <div className="mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:w-auto sm:max-w-none sm:flex-row justify-center md:justify-start">
                <a
                  href="#trial-form"
                  className="group inline-flex min-h-13 sm:min-h-14 items-center justify-center gap-2 rounded-full bg-[#075248] px-7 text-[12px] font-extrabold uppercase tracking-[.08em] text-white shadow-[0_18px_42px_-24px_rgba(7,82,72,.8)] transition hover:-translate-y-0.5"
                >
                  {text.primary}
                  <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </a>
                <a
                  href={academyContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppContact("hero", "/free-trial")}
                  className="inline-flex min-h-13 sm:min-h-14 items-center justify-center gap-2.5 rounded-full border border-slate-200 bg-white px-7 text-[12px] font-bold text-[#075248] shadow-sm transition hover:border-[#25D366]/50 hover:bg-emerald-50/40"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 text-[#25D366]" />
                  {text.whatsapp}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 text-[10px] sm:text-[11px] font-semibold text-slate-500 md:justify-start sm:mt-7 sm:gap-x-5 sm:gap-y-3">
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-[#075248]">
                    <ShieldCheck className="h-3 w-3" strokeWidth={2.2} />
                  </span>
                  {text.noCard}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-[#075248]">
                    <CalendarClock className="h-3 w-3" strokeWidth={2.2} />
                  </span>
                  {text.flexible}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-[#075248]">
                    <UserCheck className="h-3 w-3" strokeWidth={2.2} />
                  </span>
                  {text.oneToOne}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-[#075248]">
                    <BadgeCheck className="h-3 w-3" strokeWidth={2.2} />
                  </span>
                  {text.response}
                </span>
              </div>
            </div>

            {/* Visual academy composition, not a card */}
            <div className="relative mx-auto h-[470px] w-full max-w-[560px] md:h-[520px]">
              <div className="absolute left-[10%] top-[2%] h-[82%] w-[66%] rounded-t-[170px] rounded-b-[34px] border border-[#C89B3C]/30 bg-white p-2 shadow-[0_32px_72px_-42px_rgba(15,23,42,.42)]">
                <div className="relative h-full overflow-hidden rounded-t-[170px] rounded-b-[31px] bg-[#EAF1EC]">
                  <Image
                    src="/images/team/teacher-fatima.webp"
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
                    src="/images/team/teacher-ahmed.webp"
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
                      placeholder={text.namePlaceholder}
                      className="h-13 w-full rounded-[13px] border border-slate-200 bg-[#F8FAF9] pl-12 pr-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/8 rtl:pl-4 rtl:pr-12"
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
                      placeholder={text.emailPlaceholder}
                      className="h-13 w-full rounded-[13px] border border-slate-200 bg-[#F8FAF9] pl-12 pr-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/8"
                      dir="ltr"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#C89B3C]/70 group-focus-within/field:block" />
                  </div>
                </label>

                <label className="group/field block">
                  <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-500">{text.whatsappLabel}</span>
                  <div className="relative" dir="ltr">
                    <span className="pointer-events-none absolute left-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[9px] border border-emerald-100 bg-emerald-50/90 text-[#25D366] transition group-focus-within/field:border-emerald-200 group-focus-within/field:bg-emerald-100/80">
                      <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                    </span>
                    <input
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={(e) => setForm((prev) => ({ ...prev, whatsapp: e.target.value }))}
                      placeholder={locationData.code ? `${locationData.code} 104 121 3922` : "+1 555 123 4567"}
                      className="h-13 w-full rounded-[13px] border border-slate-200 bg-[#F8FAF9] pl-12 pr-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/8"
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
                  onClick={() => trackWhatsAppContact("success", "/free-trial")}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 text-xs font-bold text-white shadow-sm transition hover:bg-[#20ba59]"
                >
                  <WhatsAppIcon className="h-4 w-4 text-white" />
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
                      src="/images/team/teacher-fatima.webp"
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
            {steps.map((step, index) => (
              <div key={step.number} className="relative grid grid-cols-[48px_1fr] gap-4 pb-8 last:pb-0">
                {/* Connecting Line between steps - seamlessly spans from icon center to next icon center */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute start-[23px] top-6 -bottom-6 w-0.5 bg-[#C89B3C]/45"
                  />
                )}

                {/* Timeline icon column */}
                <div className="relative flex flex-col items-center">
                  <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] shadow-sm ${
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
                </div>

                <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_18px_44px_-34px_rgba(15,23,42,.25)]">
                  {index === 1 && (
                    <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[16px]">
                      <Image
                        src="/images/team/teacher-fatima.webp"
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

      {/* teachers + benefits — editorial academic composition */}
      <section className="relative overflow-hidden bg-[#EEF5F1] px-4 py-24 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/30 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgba(7,82,72,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(7,82,72,.035)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid max-w-[1260px] gap-14 lg:grid-cols-[.96fr_1.04fr] lg:items-center lg:gap-20">
          {/* Faculty visual */}
          <div className="relative min-h-[560px]">
            <div className="absolute left-0 top-0 h-[82%] w-[64%] overflow-hidden rounded-[30px] bg-white shadow-[0_30px_70px_-42px_rgba(15,23,42,.38)]">
              <Image
                src="/images/team/teacher-omar.webp"
                alt=""
                fill
                sizes="(max-width: 1024px) 80vw, 38vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#052D27]/76 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-[9px] font-extrabold uppercase tracking-[.16em] text-[#E7CF8A]">
                  {text.oneToOne}
                </div>
                <div className="mt-1 text-sm font-bold">{text.benefit1}</div>
              </div>
            </div>

            <div className="absolute bottom-[2%] right-[2%] h-[58%] w-[52%] overflow-hidden rounded-[28px] border-[7px] border-[#EEF5F1] bg-white shadow-[0_26px_60px_-38px_rgba(15,23,42,.36)]">
              <Image
                src="/images/team/teacher-ahmed.webp"
                alt=""
                fill
                sizes="(max-width: 1024px) 70vw, 31vw"
                className="object-cover object-top"
              />
            </div>

            <div className="absolute left-[46%] top-[39%] min-w-[122px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] border border-[#C89B3C]/25 bg-[#FFFDF9]/95 px-4 py-3 shadow-[0_16px_36px_-24px_rgba(15,23,42,.35)] backdrop-blur">
              <div className="flex items-end gap-2">
                <div className="text-2xl font-black leading-none text-[#075248]">{academyStats.tutors}+</div>
                <div className="pb-0.5 text-[8px] font-bold uppercase tracking-[.12em] text-slate-400">{text.statsTutors}</div>
              </div>
            </div>

            <div className="absolute bottom-[9%] left-[2%] max-w-[220px] rounded-[18px] border border-white/80 bg-white/90 p-4 shadow-[0_18px_44px_-32px_rgba(15,23,42,.28)] backdrop-blur">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[.14em] text-[#A37B2C]">
                <span className="h-px w-7 bg-[#C89B3C]" />
                {text.trustLabel}
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-500">{text.heroText}</p>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#A37B2C]">
              <span className="h-px w-9 bg-[#C89B3C]" />
              {text.benefitsEyebrow}
            </div>

            <h2 className={`mt-4 max-w-2xl text-[2.2rem] font-bold leading-[1.08] text-[#0D2722] sm:text-5xl ${isRtl ? "font-elmessiri leading-[1.24]" : "font-serif"}`}>
              {text.benefitsTitle}
            </h2>

            <div className="mt-8 space-y-2">
              {benefits.map((item, index) => (
                <div
                  key={item.title}
                  className="group grid grid-cols-[58px_1fr_auto] items-start gap-4 rounded-[18px] border border-transparent px-3 py-4 transition duration-300 hover:border-white/80 hover:bg-white/55 hover:shadow-[0_14px_32px_-28px_rgba(15,23,42,.32)]"
                >
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-[15px] border border-white bg-white text-[#075248] shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:border-teal-100 group-hover:bg-teal-50">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border border-[#C89B3C]/30 bg-[#FFFDF8] px-1 text-[7px] font-black text-[#A37B2C]">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[1.05rem] font-extrabold text-[#0D2722]">{item.title}</h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-6 text-slate-500">{item.body}</p>
                  </div>

                  <div className="mt-1 hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-300 transition group-hover:border-teal-100 group-hover:text-[#075248] sm:flex">
                    <Check className="h-3.5 w-3.5" strokeWidth={2} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-[#075248]/10 pt-6 sm:flex-row">
              <a
                href="#trial-form"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#075248] px-6 text-[10px] font-extrabold uppercase tracking-[.09em] text-white shadow-[0_14px_30px_-20px_rgba(7,82,72,.65)] transition hover:bg-[#096357]"
              >
                {text.primary}
                <ArrowRight className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 ${isRtl ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
              </a>

              <Link
                href="/courses"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#075248]/15 bg-white/65 px-6 text-[10px] font-extrabold uppercase tracking-[.09em] text-[#075248] transition hover:border-teal-200 hover:bg-white"
              >
                {isRtl ? "استكشف الدورات" : "Explore courses"}
                <ArrowRight className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 ${isRtl ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* pricing + proof — premium asymmetric composition */}
      <section className="relative overflow-hidden px-4 py-24 sm:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/25 to-transparent" />
        <div className="mx-auto max-w-[1220px]">
          <div className="grid overflow-hidden rounded-[36px] border border-slate-200/90 bg-white shadow-[0_34px_90px_-58px_rgba(15,23,42,.34)] lg:grid-cols-[.9fr_1.1fr]">
            {/* Pricing side */}
            <div className="relative overflow-hidden bg-[#075248] p-7 text-white sm:p-10 lg:p-12">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E0C77F]/65 to-transparent" />
              <div className="absolute -bottom-20 -right-16 h-56 w-56 bg-[radial-gradient(circle,rgba(224,199,127,.10)_0%,transparent_70%)]" />

              <div className="relative">
                <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#E0C77F]">
                  <span className="h-px w-8 bg-[#E0C77F]/70" />
                  {text.pricingEyebrow}
                </div>

                <div className="mt-7 flex items-end gap-3">
                  <div className={`text-[4.8rem] font-black leading-[.82] tracking-[-.06em] text-white sm:text-[5.6rem] ${isRtl ? "font-elmessiri" : "font-serif"}`}>
                    <span className="mr-1 align-top text-[1.7rem] font-bold text-[#E0C77F]">$</span>{startingMonthlyPrice}
                  </div>
                  <div className="pb-1.5">
                    <div className="text-[10px] font-extrabold uppercase tracking-[.16em] text-white/40">
                      {isRtl ? "يبدأ من" : "starting from"}
                    </div>
                    <div className="mt-1 text-sm font-bold text-white/85">
                      {isRtl ? "شهريًا" : "/ month"}
                    </div>
                  </div>
                </div>

                <h2 className={`mt-7 max-w-lg text-[1.65rem] font-bold leading-tight sm:text-[2rem] ${isRtl ? "font-elmessiri" : "font-serif"}`}>
                  {isRtl ? "خطة مرنة تبدأ من احتياجاتك الحقيقية." : "A flexible plan built around your real learning needs."}
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/62">{text.pricingText}</p>

                <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
                  {[
                    [CalendarClock, text.pricingPoint1],
                    [BookOpen, text.pricingPoint2],
                    [ShieldCheck, text.pricingPoint3],
                  ].map(([Icon, item], index) => {
                    const RowIcon = Icon as typeof CalendarClock;
                    return (
                      <div key={String(item)} className="grid grid-cols-[38px_1fr] items-center gap-3 py-3.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-[#E0C77F]/20 bg-[#E0C77F]/8 text-[#E7D395]">
                          <RowIcon className="h-4 w-4" strokeWidth={1.7} />
                        </div>
                        <div>
                          <div className="text-[9px] font-black uppercase tracking-[.13em] text-[#E0C77F]/65">0{index + 1}</div>
                          <div className="mt-0.5 text-sm font-semibold text-white/86">{String(item)}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#trial-form"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[10px] font-extrabold uppercase tracking-[.09em] text-[#075248] shadow-[0_14px_30px_-20px_rgba(0,0,0,.28)] transition hover:-translate-y-0.5"
                  >
                    {text.primary}
                    <ArrowRight className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 ${isRtl ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
                  </a>

                  <div className="inline-flex items-center justify-center gap-2 text-[10px] font-bold text-white/52 sm:justify-start">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#E0C77F]" />
                    {text.noCard}
                  </div>
                </div>
              </div>
            </div>

            {/* Proof side */}
            <div className="relative bg-[linear-gradient(145deg,#FFFFFF_0%,#F8FBF9_100%)] p-6 sm:p-8 lg:p-10">
              <div className="mb-7 flex flex-col justify-between gap-3 border-b border-slate-100 pb-6 sm:flex-row sm:items-end">
                <div>
                  <div className="text-[9px] font-extrabold uppercase tracking-[.18em] text-[#A37B2C]">
                    {isRtl ? "الثقة بالأرقام" : "Proof in numbers"}
                  </div>
                  <h3 className={`mt-2 text-[1.65rem] font-bold leading-tight text-[#0D2722] ${isRtl ? "font-elmessiri" : "font-serif"}`}>
                    {isRtl ? "تعلم فردي مدعوم بخبرة حقيقية." : "Personal learning backed by real experience."}
                  </h3>
                </div>
                <p className="max-w-[260px] text-xs leading-5 text-slate-500">
                  {text.trustLabel}
                </p>
              </div>

              {/* Primary proof */}
              <div className="group relative overflow-hidden rounded-[26px] border border-teal-100/80 bg-[#F1F8F5] p-6 sm:p-7">
                <div className="absolute right-0 top-0 h-full w-[44%] bg-[linear-gradient(135deg,transparent,rgba(7,82,72,.045))]" />
                <div className="relative flex items-center justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-[#075248] shadow-sm">
                        <UserRound className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <div className="text-[9px] font-extrabold uppercase tracking-[.15em] text-slate-400">{text.statsStudents}</div>
                    </div>
                    <div className="mt-5 text-[3.4rem] font-black leading-none tracking-[-.045em] text-[#075248] sm:text-[4rem]">
                      {academyStats.students}+
                    </div>
                    <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500">
                      {isRtl ? "طلاب بدأوا رحلتهم التعليمية معنا من دول مختلفة." : "Learners who have started their academic journey with Afaq from around the world."}
                    </p>
                  </div>
                  <div className="hidden h-24 w-px bg-gradient-to-b from-transparent via-teal-200 to-transparent sm:block" />
                  <div className="hidden sm:flex flex-col items-center gap-2 rounded-2xl border border-[#C89B3C]/25 bg-white/80 p-3.5 shadow-sm backdrop-blur-sm transition duration-300 group-hover:scale-105">
                    <AfaqBrandSeal className="h-14 w-auto" />
                    <span className="text-[8px] font-black uppercase tracking-[.18em] text-[#A37B2C]">
                      {isRtl ? "مُعْتَمَد" : "CERTIFIED"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Supporting proofs */}
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {[
                  [Globe2, `${academyStats.countries}+`, text.statsCountries],
                  [GraduationCap, `${academyStats.tutors}+`, text.statsTutors],
                  [CalendarClock, `${academyStats.years}+`, text.statsYears],
                ].map(([Icon, value, label]) => {
                  const StatIcon = Icon as typeof Globe2;
                  return (
                    <div key={String(label)} className="group rounded-[20px] border border-slate-200/90 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-teal-100 hover:shadow-[0_14px_30px_-24px_rgba(15,23,42,.28)]">
                      <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#F3F8F6] text-[#075248]">
                        <StatIcon className="h-4.5 w-4.5" strokeWidth={1.7} />
                      </div>
                      <div className="mt-5 text-2xl font-black leading-none text-[#075248] sm:text-[1.7rem]">{String(value)}</div>
                      <div className="mt-2 text-[8px] font-extrabold uppercase tracking-[.14em] text-slate-400">{String(label)}</div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 rounded-[16px] border border-[#C89B3C]/18 bg-[#FFFCF5] px-4 py-3">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-[#A37B2C]" strokeWidth={1.7} />
                  {isRtl ? "ابدأ بالتجربة المجانية قبل اختيار الباقة." : "Start with the free trial before choosing a plan."}
                </div>
                <a href="#trial-form" className="shrink-0 text-[9px] font-extrabold uppercase tracking-[.11em] text-[#075248]">
                  {isRtl ? "ابدأ الآن" : "Start now"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden bg-[#F8FAF7] px-4 py-20 sm:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/20 to-transparent" />

        <div className="relative mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#A37B2C]">
              <span className="h-px w-8 bg-[#C89B3C]" />
              {text.faqEyebrow}
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className={`mt-3.5 text-[2.2rem] font-bold leading-tight text-[#0D2722] sm:text-4xl lg:text-[2.65rem] ${isRtl ? "font-elmessiri" : "font-serif"}`}>
              {text.faqTitle}
            </h2>
            <p className="mx-auto mt-3.5 max-w-xl text-sm sm:text-[15px] leading-relaxed text-slate-500">
              {text.faqIntro}
            </p>
          </div>

          {/* FAQ Rows */}
          <div className="mt-10 space-y-3.5 sm:mt-12 sm:space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openFaqIndex === index;
              const FaqIcon = item.icon;

              return (
                <div
                  key={item.question}
                  className={`group rounded-[20px] transition-all duration-300 border ${
                    isOpen
                      ? `bg-[#F2F8F5] border-[#C89B3C]/45 shadow-[0_12px_28px_-18px_rgba(7,82,72,.18)] ${
                          isRtl ? "border-r-[3.5px] border-r-[#C89B3C]" : "border-l-[3.5px] border-l-[#C89B3C]"
                        }`
                      : "bg-white border-slate-200/85 hover:border-teal-200 hover:bg-[#FAFDFB] hover:shadow-[0_4px_16px_-8px_rgba(15,23,42,.06)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#075248] rounded-[20px] sm:p-6"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] transition-all duration-300 ${
                          isOpen
                            ? "bg-[#075248] text-[#E0C77F] shadow-sm"
                            : "bg-[#F0F6F3] text-[#075248] group-hover:bg-[#075248]/10"
                        }`}
                      >
                        <FaqIcon className="h-5 w-5" strokeWidth={1.8} />
                      </div>
                      <span className="text-[15px] sm:text-[1.08rem] font-bold text-[#0D2722] leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#075248]/10 text-[#075248] rotate-180"
                          : "bg-slate-100 text-slate-400 group-hover:bg-teal-50 group-hover:text-[#075248]"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" strokeWidth={2.2} />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      className={`px-5 pb-5 sm:px-6 sm:pb-6 pt-0 ${
                        isRtl ? "pr-[62px] sm:pr-[72px]" : "pl-[62px] sm:pl-[72px]"
                      }`}
                    >
                      <p className="text-sm sm:text-[15px] leading-7 text-slate-600 font-normal">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still have questions bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[24px] border border-[#075248]/12 bg-white p-6 shadow-[0_16px_40px_-24px_rgba(7,82,72,.12)] sm:flex-row sm:p-7">
            <div className="flex items-center gap-4 text-center sm:text-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#1E7E34]">
                <MessageCircle className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0D2722] sm:text-lg">
                  {text.faqStillQuestion}
                </h3>
                <p className="mt-0.5 max-w-xl text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {text.faqStillText}
                </p>
              </div>
            </div>

            <a
              href={academyContact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppContact("faq", "/free-trial")}
              className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs font-black uppercase tracking-wider text-white shadow-[0_12px_28px_-12px_rgba(37,211,102,.55)] transition-all duration-200 hover:bg-[#20ba59] hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4 text-white" />
              <span>{text.faqStillCta}</span>
              <ArrowRight className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </a>
          </div>
        </div>
      </section>

      {/* Final Conversion Scene - Replaces the old weak CTA with NO circles */}
      <section className="relative overflow-hidden bg-[#052721] px-4 py-20 sm:py-28 text-white">
        {/* Top gold border line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E0C77F]/45 to-transparent" />

        {/* Subtle branded grid texture & ambient lighting (ZERO circles) */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(224,199,127,1)_1px,transparent_1px),linear-gradient(90deg,rgba(224,199,127,1)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-3xl bg-[#08483D] opacity-35 blur-[90px]" />
        <div className="pointer-events-none absolute -top-28 -right-20 h-80 w-80 rounded-3xl bg-[#0A574A] opacity-30 blur-[80px]" />

        <div className="relative mx-auto max-w-[1240px]">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:items-center">
            {/* Text & Primary Value Proposition */}
            <div>
              <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#E0C77F]">
                <span className="h-px w-9 bg-[#E0C77F]/80" />
                {text.finalEyebrow}
              </div>

              <h2 className={`mt-5 text-[2.2rem] font-bold leading-[1.14] tracking-tight text-white sm:text-4xl lg:text-[2.85rem] ${isRtl ? "font-elmessiri leading-[1.25]" : "font-serif"}`}>
                {text.finalTitle}
              </h2>

              <p className="mt-5 max-w-xl text-sm sm:text-base leading-7 text-white/75">
                {text.finalText}
              </p>

              {/* 3 Trust Points with SVG icons */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 backdrop-blur-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E0C77F]/15 text-[#E0C77F]">
                    <Award className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-semibold leading-snug text-white/90">
                    {text.finalTrust1}
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 backdrop-blur-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E0C77F]/15 text-[#E0C77F]">
                    <ShieldCheck className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-semibold leading-snug text-white/90">
                    {text.finalTrust2}
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 backdrop-blur-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E0C77F]/15 text-[#E0C77F]">
                    <CalendarClock className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-semibold leading-snug text-white/90">
                    {text.finalTrust3}
                  </span>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#trial-form"
                  className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-[#E0C77F] px-8 text-xs font-black uppercase tracking-[.09em] text-[#052721] shadow-[0_16px_36px_-12px_rgba(224,199,127,.4)] transition duration-200 hover:bg-[#ebd9a6] hover:-translate-y-0.5"
                >
                  <span>{text.finalCta}</span>
                  <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </a>

                <a
                  href={academyContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppContact("final_cta", "/free-trial")}
                  className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.07] px-7 text-xs font-bold uppercase tracking-[.08em] text-white backdrop-blur-sm transition duration-200 hover:border-[#25D366]/60 hover:bg-[#25D366]/15 hover:text-white"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 text-[#25D366]" />
                  <span>{text.whatsapp}</span>
                </a>
              </div>
            </div>

            {/* Conversion Guarantee Panel */}
            <div className="relative rounded-[30px] border border-[#E0C77F]/25 bg-gradient-to-b from-white/[0.11] to-white/[0.04] p-7 sm:p-9 shadow-[0_30px_70px_-25px_rgba(0,0,0,.6)] backdrop-blur-md">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div>
                  <div className="text-[9px] font-extrabold uppercase tracking-[.18em] text-[#E0C77F]">
                    {text.finalPanelBadge}
                  </div>
                  <h3 className={`mt-1 text-lg font-bold text-white sm:text-xl ${isRtl ? "font-elmessiri" : "font-serif"}`}>
                    {text.finalPanelTitle}
                  </h3>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E0C77F]/30 bg-[#E0C77F]/10 text-[#E0C77F]">
                  <BadgeCheck className="h-5 w-5" strokeWidth={1.8} />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[text.finalPanel1, text.finalPanel2, text.finalPanel3].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E0C77F]/20 text-[#E0C77F]">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-white/85">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1 text-[#E0C77F] text-xs">
                      {"★".repeat(5)}
                      <span className="ms-1.5 font-bold text-white text-xs">4.9/5</span>
                    </div>
                    <div className="mt-1 text-[11px] text-white/60">
                      {isRtl ? "أكثر من 500 طالب مستمر من 30 دولة" : "Trusted by 500+ learners across 30+ countries"}
                    </div>
                  </div>
                  <a
                    href="#trial-form"
                    className="shrink-0 text-[10px] font-extrabold uppercase tracking-wider text-[#E0C77F] hover:underline"
                  >
                    {isRtl ? "ابدأ الآن" : "Start Now"}
                  </a>
                </div>
              </div>
            </div>
          </div>
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
          <GraduationCap className="h-4 w-4 text-[#E0C77F]" />
          {text.primary}
        </a>
      </div>

      {/* Floating Eye-Catching WhatsApp Action Button */}
      <div
        aria-label={isRtl ? "تواصل عبر واتساب" : "WhatsApp Quick Contact"}
        className="fixed bottom-[74px] end-4 z-40 h-13 w-13 md:bottom-7 md:start-7 md:end-auto md:h-14 md:w-14"
      >
        <div className="relative flex h-full w-full items-center justify-center group">
          {/* Animated pulse halo - strictly circular and bounded to button */}
          <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75" />
          <span className="pointer-events-none absolute -inset-1 rounded-full border border-[#25D366]/50 animate-pulse" />

          {/* Desktop Tooltip */}
          <div className="pointer-events-none absolute bottom-full mb-3 hidden -translate-x-1/2 whitespace-nowrap rounded-xl bg-slate-900/95 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur transition-all duration-300 group-hover:opacity-100 md:block opacity-0 start-1/2 rtl:translate-x-1/2">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
              {isRtl ? "تواصل معنا مباشرة عبر واتساب" : "Chat with us on WhatsApp"}
            </span>
            <div className="absolute -bottom-1 start-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900/95" />
          </div>

          <a
            href={academyContact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppContact("floating_fab", "/free-trial")}
            aria-label={isRtl ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
            className="relative flex h-full w-full items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_26px_rgba(37,211,102,.5)] transition-all duration-300 hover:scale-110 hover:bg-[#20ba59] hover:shadow-[0_14px_35px_rgba(37,211,102,.65)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 active:scale-95"
          >
            <WhatsAppIcon className="h-7 w-7 text-white drop-shadow-sm" />
          </a>
        </div>
      </div>
    </div>
  );
}
