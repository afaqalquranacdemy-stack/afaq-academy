import { CoursesHero } from "@/components/courses/CoursesHero";
import { FeaturedCourses } from "@/components/courses/FeaturedCourses";
import { AcademicDepartments } from "@/components/courses/AcademicDepartments";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { LearningMethodology } from "@/components/courses/LearningMethodology";
import { CoursesFeatures } from "@/components/courses/CoursesFeatures";
import { CoursesCTA } from "@/components/courses/CoursesCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Walamnaho Academy",
  description:
    "Explore our comprehensive academic programs in Quran, Arabic, and Islamic Studies. Expert Al-Azhar scholars, personalized curriculum, and certified Ijazah tracks.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Cinematic Hero */}
      <CoursesHero />

      {/* 2. Featured Programs Spotlight */}
      <FeaturedCourses />

      {/* 3. Academic Departments */}
      <AcademicDepartments />

      {/* 4. Complete Course Catalog */}
      <CourseGrid />

      {/* 5. Learning Methodology */}
      <LearningMethodology />

      {/* 6. Why Choose Us — Features */}
      <CoursesFeatures />

      {/* 7. CTA Section */}
      <CoursesCTA />
    </main>
  );
}
