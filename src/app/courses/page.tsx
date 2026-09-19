import { CoursesHero } from "@/components/courses/CoursesHero";
import { FeaturedCourses } from "@/components/courses/FeaturedCourses";
import { AcademicDepartments } from "@/components/courses/AcademicDepartments";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { LearningMethodology } from "@/components/courses/LearningMethodology";
import { CoursesFeatures } from "@/components/courses/CoursesFeatures";
import { CoursesCTA } from "@/components/courses/CoursesCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Afaq Al-Quran Academy",
  description:
    "Explore our comprehensive academic programs in Quran, Arabic, and Islamic Studies. Expert Al-Azhar scholars, personalized curriculum, and certified Ijazah tracks.",
};

type CoursesPageProps = {
  searchParams: Promise<{
    q?: string | string[];
    category?: string | string[];
    level?: string | string[];
  }>;
};

function firstParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <CoursesHero />

      <FeaturedCourses />

      <AcademicDepartments />

      <CourseGrid
        initialQuery={firstParam(params.q)}
        initialCategory={firstParam(params.category)}
        initialLevel={firstParam(params.level)}
      />

      <LearningMethodology />

      <CoursesFeatures />

      <CoursesCTA />
    </main>
  );
}
