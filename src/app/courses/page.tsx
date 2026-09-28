import { CoursesHero } from "@/components/courses/CoursesHero";
import { FeaturedCourses } from "@/components/courses/FeaturedCourses";
import { AcademicDepartments } from "@/components/courses/AcademicDepartments";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { LearningMethodology } from "@/components/courses/LearningMethodology";
import { CoursesFeatures } from "@/components/courses/CoursesFeatures";
import { CoursesCTA } from "@/components/courses/CoursesCTA";

import type { Metadata } from "next";

type CoursesPageProps = {
  searchParams: Promise<{
    q?: string | string[];
    category?: string | string[];
    level?: string | string[];
    intent?: string | string[];
  }>;
};

function firstParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

const metadataByLanding: Record<string, { title: string; description: string }> = {
  Arabic: {
    title: "Learn Arabic Online | Afaq Al-Quran Academy",
    description:
      "Learn Arabic online through private 1-to-1 live lessons. Study reading, speaking, grammar and Quranic Arabic with qualified tutors and flexible schedules.",
  },
  Quran: {
    title: "Learn Quran Online | Afaq Al-Quran Academy",
    description:
      "Learn Quran online with qualified tutors through private 1-to-1 lessons in recitation, memorization and Quran understanding with a personalized study plan.",
  },
  tajweed: {
    title: "Learn Tajweed Online | Afaq Al-Quran Academy",
    description:
      "Learn Tajweed online with expert Quran tutors. Improve pronunciation, Tajweed rules and accurate recitation through private 1-to-1 live lessons.",
  },
  Kids: {
    title: "Online Quran & Arabic Classes for Kids | Afaq Al-Quran Academy",
    description:
      "Private online Quran, Arabic and Islamic classes for kids with patient tutors, flexible schedules and age-appropriate learning plans.",
  },
  "Islamic Studies": {
    title: "Learn Islamic Studies Online | Afaq Al-Quran Academy",
    description:
      "Study Fiqh, Aqeedah, Hadith, Seerah and essential Islamic knowledge online through structured live lessons with qualified teachers.",
  },
};

const landingHeroTitleByLanding: Record<string, { ar: string; en: string }> = {
  Arabic: {
    ar: "تعلم العربية أونلاين مع معلمين متخصصين",
    en: "Learn Arabic Online with Expert Tutors",
  },
  Quran: {
    ar: "تعلم القرآن أونلاين مع معلمين مؤهلين",
    en: "Learn Quran Online with Qualified Tutors",
  },
  tajweed: {
    ar: "تعلم التجويد أونلاين مع معلمي قرآن متخصصين",
    en: "Learn Tajweed Online with Expert Quran Tutors",
  },
  Kids: {
    ar: "دروس قرآن وعربية أونلاين للأطفال",
    en: "Online Quran & Arabic Classes for Kids",
  },
  "Islamic Studies": {
    ar: "تعلم الدراسات الإسلامية أونلاين",
    en: "Learn Islamic Studies Online",
  },
};

export async function generateMetadata({ searchParams }: CoursesPageProps): Promise<Metadata> {
  const params = await searchParams;
  const category = firstParam(params.category);
  const intent = firstParam(params.intent).toLowerCase();
  const landingKey = category === "Quran" && intent === "tajweed" ? "tajweed" : category;
  const matched = metadataByLanding[landingKey];

  if (matched) {
    return {
      title: matched.title,
      description: matched.description,
    };
  }

  return {
    title: "Courses | Afaq Al-Quran Academy",
    description:
      "Explore our comprehensive academic programs in Quran, Arabic, and Islamic Studies. Expert Al-Azhar scholars, personalized curriculum, and certified Ijazah tracks.",
  };
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const params = await searchParams;
  const category = firstParam(params.category);
  const intent = firstParam(params.intent).toLowerCase();
  const landingKey = category === "Quran" && intent === "tajweed" ? "tajweed" : category;
  const landingTitle = landingHeroTitleByLanding[landingKey];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <CoursesHero landingTitle={landingTitle} />

      <FeaturedCourses />

      <AcademicDepartments />

      <CourseGrid
        initialQuery={firstParam(params.q)}
        initialCategory={category}
        initialLevel={firstParam(params.level)}
        initialIntent={firstParam(params.intent)}
      />

      <LearningMethodology />

      <CoursesFeatures />

      <CoursesCTA />
    </main>
  );
}
