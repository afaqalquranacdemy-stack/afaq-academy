export type Duration = "30" | "45" | "60";

export interface PricingFeature {
  textAr: string;
  textEn: string;
}

export interface PricingPlan {
  id: string;
  titleAr: string;
  titleEn: string;
  classesPerWeekAr: string;
  classesPerWeekEn: string;
  descriptionAr: string;
  descriptionEn: string;
  isPopular?: boolean;
  prices: Record<Duration, { monthly: number; perSession: number }>;
  features: PricingFeature[];
}

export const pricingData: PricingPlan[] = [
  {
    id: "starter",
    titleAr: "الباقة الأساسية",
    titleEn: "Starter",
    classesPerWeekAr: "حصة واحدة / أسبوعياً",
    classesPerWeekEn: "1 CLASS / WEEK",
    descriptionAr: "مثالية للمحترفين المشغولين الذين يرغبون في بدء رحلتهم.",
    descriptionEn: "Perfect for busy professionals who want to begin their journey.",
    prices: {
      "30": { monthly: 17, perSession: 4.25 },
      "45": { monthly: 26, perSession: 6.50 },
      "60": { monthly: 34, perSession: 8.50 },
    },
    features: [
      { textAr: "معلم معتمد", textEn: "Certified Tutor" },
      { textAr: "جدولة مرنة", textEn: "Flexible Scheduling" },
      { textAr: "تقارير شهرية", textEn: "Monthly Reports" },
    ],
  },
  {
    id: "regular",
    titleAr: "الباقة المنتظمة",
    titleEn: "Regular",
    classesPerWeekAr: "حصتين / أسبوعياً",
    classesPerWeekEn: "2 CLASSES / WEEK",
    descriptionAr: "تقدم ثابت مع ممارسة أسبوعية منتظمة.",
    descriptionEn: "Steady progress with consistent weekly practice.",
    isPopular: true,
    prices: {
      "30": { monthly: 34, perSession: 4.25 },
      "45": { monthly: 51, perSession: 6.38 },
      "60": { monthly: 68, perSession: 8.50 },
    },
    features: [
      { textAr: "معلم معتمد", textEn: "Certified Tutor" },
      { textAr: "جدولة مرنة", textEn: "Flexible Scheduling" },
      { textAr: "تقارير أسبوعية", textEn: "Weekly Reports" },
      { textAr: "دعم عبر واتساب", textEn: "WhatsApp Support" },
    ],
  },
  {
    id: "intensive",
    titleAr: "الباقة المكثفة",
    titleEn: "Intensive",
    classesPerWeekAr: "3 حصص / أسبوعياً",
    classesPerWeekEn: "3 CLASSES / WEEK",
    descriptionAr: "تعلم سريع للطلاب الطموحين.",
    descriptionEn: "Accelerated learning for ambitious students.",
    prices: {
      "30": { monthly: 51, perSession: 4.25 },
      "45": { monthly: 77, perSession: 6.42 },
      "60": { monthly: 102, perSession: 8.50 },
    },
    features: [
      { textAr: "معلم خبير", textEn: "Expert Tutor" },
      { textAr: "أولوية في الدعم", textEn: "Priority Support" },
      { textAr: "تحليلات الأداء", textEn: "Analytics" },
      { textAr: "جلسات مسجلة", textEn: "Recorded Sessions" },
    ],
  },
  {
    id: "premium",
    titleAr: "الباقة المتقدمة",
    titleEn: "Premium",
    classesPerWeekAr: "4 حصص / أسبوعياً",
    classesPerWeekEn: "4 CLASSES / WEEK",
    descriptionAr: "انغماس كامل للوصول إلى الإتقان التام.",
    descriptionEn: "Maximum immersion for complete mastery.",
    prices: {
      "30": { monthly: 68, perSession: 4.25 },
      "45": { monthly: 102, perSession: 6.38 },
      "60": { monthly: 136, perSession: 8.50 },
    },
    features: [
      { textAr: "شيخ مجاز", textEn: "Sheikh with Ijazah" },
      { textAr: "دعم لكبار الشخصيات 24/7", textEn: "24/7 VIP Support" },
      { textAr: "ملاحظات يومية", textEn: "Daily Feedback" },
      { textAr: "شهادة إتمام", textEn: "Completion Certificate" },
    ],
  },
];
