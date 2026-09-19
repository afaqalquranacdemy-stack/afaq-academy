export const academyStats = {
  students: 500,
  tutors: 50,
  courses: 20,
  countries: 30,
  years: 10,
} as const;

export const academyStatSuffix = "+";

export const academyContact = {
  email: "info@afaqalquran.com",
  emailUrl: "mailto:info@afaqalquran.com",
  phoneDisplay: "+20 10 4121 3922",
  phoneE164: "+201041213922",
  phoneUrl: "tel:+201041213922",
  whatsappDisplay: "+20 10 4121 3922",
  whatsappNumber: "201041213922",
  whatsappUrl: "https://wa.me/201041213922",
} as const;

export const academyOperations = {
  responseTimeHours: 24,
  sessionDurations: [30, 45, 60],
  schedulingEn: "Flexible scheduling",
  schedulingAr: "مواعيد مرنة",
} as const;
