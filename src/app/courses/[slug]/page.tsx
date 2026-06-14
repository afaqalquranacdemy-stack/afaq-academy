import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { CourseDetailHero } from "@/components/course-detail/CourseDetailHero";
import { CourseOverviewSection } from "@/components/course-detail/CourseOverviewSection";
import { CourseCurriculum } from "@/components/course-detail/CourseCurriculum";
import { CourseHowItWorks } from "@/components/course-detail/CourseHowItWorks";
import { CourseFAQ } from "@/components/course-detail/CourseFAQ";
import { RelatedCourses } from "@/components/course-detail/RelatedCourses";
import { CourseDetailCTA } from "@/components/course-detail/CourseDetailCTA";

// Generate static parameters for all known course slugs
export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

// Ensure the page gets the right dynamic params
export default async function SingleCoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <CourseDetailHero course={course} />
      <CourseOverviewSection course={course} />
      <CourseCurriculum course={course} />
      <CourseHowItWorks />
      <CourseFAQ />
      <RelatedCourses currentCourse={course} />
      <CourseDetailCTA />
    </main>
  );
}
