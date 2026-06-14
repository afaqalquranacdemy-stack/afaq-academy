export interface Testimonial {
  id: string;
  name: { ar: string; en: string };
  location: { ar: string; en: string };
  review: { ar: string; en: string };
  rating: number;
  course: { ar: string; en: string };
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: { ar: "أحمد المنصوري", en: "Ahmed Al-Mansouri" },
    location: { ar: "الإمارات", en: "UAE" },
    review: {
      ar: "تجربة استثنائية في تعلم التجويد. المعلم كان صبوراً ومحترفاً، وتحسنت تلاوتي بشكل ملحوظ خلال شهرين فقط.",
      en: "An exceptional Tajweed learning experience. The teacher was patient and professional. My recitation improved noticeably in just two months.",
    },
    rating: 5,
    course: { ar: "تلاوة القرآن مع التجويد", en: "Quran Recitation with Tajweed" },
    avatar: "/images/avatars/avatar-1.webp",
  },
  {
    id: "t2",
    name: { ar: "سارة ويليامز", en: "Sarah Williams" },
    location: { ar: "المملكة المتحدة", en: "United Kingdom" },
    review: {
      ar: "كأم مسلمة جديدة، كنت أبحث عن مكان آمن لتعلم أساسيات الإسلام. أكاديمية آفاق القرآن وفرت لي بيئة داعمة ومعلمات رائعات.",
      en: "As a new Muslim mother, I was looking for a safe place to learn the basics of Islam. Afaq Al-Quran provided me with a supportive environment and amazing female teachers.",
    },
    rating: 5,
    course: { ar: "فقه العبادات", en: "Fiqh of Worship" },
    avatar: "/images/avatars/avatar-2.webp",
  },
  {
    id: "t3",
    name: { ar: "محمد عبد الرحمن", en: "Mohammed Abdulrahman" },
    location: { ar: "كندا", en: "Canada" },
    review: {
      ar: "ابني عمره 7 سنوات وتعلم القاعدة النورانية في 3 أشهر. المعلم كان ممتازاً في التعامل مع الأطفال ومحافظاً على حماسهم.",
      en: "My 7-year-old son learned the Noorani Qaida in 3 months. The teacher was excellent with kids and kept them enthusiastic throughout.",
    },
    rating: 5,
    course: { ar: "القاعدة النورانية للأطفال", en: "Noorani Qaida for Kids" },
    avatar: "/images/avatars/avatar-3.webp",
  },
  {
    id: "t4",
    name: { ar: "فاطمة الزهراء", en: "Fatima Alzahra" },
    location: { ar: "أمريكا", en: "United States" },
    review: {
      ar: "الجدول المرن ساعدني كثيراً كأم عاملة. أدرس في أوقات تناسبني وأحرز تقدماً حقيقياً في اللغة العربية.",
      en: "The flexible schedule helped me a lot as a working mother. I study at times that suit me and make real progress in Arabic.",
    },
    rating: 4,
    course: { ar: "اللغة العربية الشاملة", en: "Comprehensive Arabic" },
    avatar: "/images/avatars/avatar-4.webp",
  },
];
