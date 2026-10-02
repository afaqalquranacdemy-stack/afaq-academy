import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/courses";
import { startingMonthlyPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: {
    absolute: "Online Tajweed Classes with Al-Azhar Tutors | Afaq Al-Quran",
  },
  description:
    "Learn Tajweed online through live 1-to-1 lessons with experienced Al-Azhar tutors. Improve makharij, fluency and Quran recitation with a personalized plan.",
  alternates: {
    canonical: "https://afaqalquran.com/online-tajweed-classes",
  },
  openGraph: {
    title: "Online Tajweed Classes with Al-Azhar Tutors | Afaq Al-Quran",
    description:
      "Private live Tajweed lessons for adults and learners at different levels, with direct recitation correction and flexible scheduling.",
    url: "https://afaqalquran.com/online-tajweed-classes",
    type: "website",
  },
};

const tajweedCourse = courses.find(
  (course) => course.slug === "quran-recitation-with-tajweed"
);

const relatedCourses = [
  "quran-memorization-hifz",
  "ijazah-program",
]
  .map((slug) => courses.find((course) => course.slug === slug))
  .filter((course): course is (typeof courses)[number] => Boolean(course));

const trustItems = [
  {
    title: "Direct Recitation Correction",
    text: "Your tutor listens closely and corrects pronunciation, articulation and Tajweed application in real time.",
  },
  {
    title: "Private 1-to-1 Lessons",
    text: "Every lesson focuses on your actual recitation instead of a generic classroom syllabus.",
  },
  {
    title: "Experienced Al-Azhar Tutors",
    text: "Learn with qualified teachers grounded in authentic Quran recitation and Tajweed methodology.",
  },
  {
    title: "Flexible Scheduling",
    text: "Study online at times that fit your routine, wherever you are.",
  },
];

const learningAreas = [
  {
    title: "Makharij & Letter Articulation",
    text: "Improve how each Arabic letter is produced from its correct point of articulation.",
  },
  {
    title: "Core Tajweed Rules",
    text: "Apply rules such as Noon and Meem Sakinah, Madd, Qalqalah and other essential recitation principles.",
  },
  {
    title: "Fluency & Rhythm",
    text: "Reduce hesitation, improve flow and build a more controlled recitation pace.",
  },
  {
    title: "Practical Quran Application",
    text: "Move from knowing rules in theory to applying them correctly while reciting.",
  },
];

const faqs = [
  {
    question: "Can beginners join online Tajweed classes?",
    answer:
      "Yes. Beginners can start with pronunciation and foundational recitation before progressing into more detailed Tajweed rules and practical application.",
  },
  {
    question: "Are the Tajweed lessons live or recorded?",
    answer:
      "The main lessons are live 1-to-1 sessions so your tutor can hear your recitation and correct mistakes immediately.",
  },
  {
    question: "Do I need to know all Tajweed rules before joining?",
    answer:
      "No. Your tutor identifies what you already know and what needs improvement, then builds the learning plan from your current level.",
  },
  {
    question: "Can adults take these Tajweed classes?",
    answer:
      "Yes. The program is well suited to adults who want to improve Quran pronunciation, fluency and practical Tajweed application.",
  },
  {
    question: "Will the tutor correct my makharij?",
    answer:
      "Yes. Correct articulation is a central part of the program, and your tutor gives direct feedback while you recite.",
  },
  {
    question: "Can Tajweed lessons help with Hifz?",
    answer:
      "Yes. Stronger pronunciation and recitation can support memorization, and students pursuing Hifz can continue into a dedicated memorization path.",
  },
  {
    question: "What happens during the free trial?",
    answer:
      "The free trial helps identify your recitation level, pronunciation issues and goals so we can recommend the most suitable Tajweed path and tutor.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function OnlineTajweedClassesPage() {
  return (
    <div className="paid-landing-page min-h-screen bg-[#F8FAFC] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative isolate overflow-hidden bg-[#071814] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 16% 18%, rgba(20,184,166,.19), transparent 31%), radial-gradient(circle at 84% 25%, rgba(200,155,60,.15), transparent 27%), linear-gradient(135deg, #061511 0%, #0A2D26 52%, #071814 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(to bottom, black, transparent 78%)",
          }}
        />

        <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-4 pb-16 pt-32 sm:px-6 md:min-h-[760px] md:px-8 md:pb-24 md:pt-40 lg:grid-cols-[1.08fr_.92fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-white/[0.06] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-100 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
              Live 1-to-1 Tajweed Learning
            </div>

            <h1 className="max-w-4xl text-[2.3rem] font-black leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[4.1rem]">
              Learn Tajweed Online with{" "}
              <span className="text-[#D9B45F]">Expert Quran Tutors</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl md:leading-9">
              Improve makharij, Tajweed rules and Quran recitation through private
              live lessons built around your current level and the mistakes you
              actually need to correct.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/free-trial"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#D0A64A] px-7 py-3.5 text-sm font-extrabold text-[#10211d] shadow-[0_16px_45px_-18px_rgba(208,166,74,.75)] transition-colors hover:bg-[#E2BD68] sm:text-base"
              >
                Book Your Free Trial
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#tajweed-program"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/[0.11] sm:text-base"
              >
                Explore the Tajweed Program
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-200">
              {[
                "Direct Recitation Correction",
                "1-to-1 Live Lessons",
                "Flexible Schedule",
                "Adults & Beginners Welcome",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-300/15 text-teal-200">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 rounded-full bg-teal-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-[0_35px_100px_-45px_rgba(0,0,0,.75)] backdrop-blur-sm">
              <div className="mb-8 border-b border-white/10 pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">
                  Your recitation improvement path
                </p>
                <p className="mt-1 text-lg font-bold text-white">
                  Learn the rules — then apply them while reciting
                </p>
              </div>

              <div className="space-y-4">
                {[
                  ["Assess your recitation", "Identify pronunciation, fluency and Tajweed gaps"],
                  ["Correct articulation", "Work directly on makharij and letter qualities"],
                  ["Apply Tajweed rules", "Turn theory into correct Quran recitation"],
                  ["Build consistency", "Strengthen fluency through guided repetition and feedback"],
                ].map(([title, text], index) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl border border-white/[0.08] bg-black/10 p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal-300/10 text-xs font-black text-teal-200">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="font-bold text-white">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#D0A64A]/20 bg-[#D0A64A]/[0.08] p-4 text-sm leading-6 text-[#F3E6C7]">
                The free trial is used to identify your current recitation level
                before recommending the right focus and tutor.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-slate-200/70 px-4 sm:px-6 md:grid-cols-4 md:px-8">
          {trustItems.map((item) => (
            <div key={item.title} className="bg-white px-4 py-7 sm:px-6 md:py-9">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <CheckIcon className="h-4.5 w-4.5" />
              </div>
              <h2 className="text-sm font-extrabold text-slate-950 sm:text-base">
                {item.title}
              </h2>
              <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
              Practical Tajweed learning
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
              Improve the parts of your recitation that actually need correction
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Tajweed improves through listening, correction and repetition. Your
              tutor focuses on the exact areas holding your recitation back.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {learningAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_-40px_rgba(15,23,42,.35)]"
              >
                <h3 className="text-xl font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {tajweedCourse && (
        <section
          id="tajweed-program"
          className="scroll-mt-24 border-y border-slate-200 bg-white py-16 sm:py-20 md:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100">
              <Image
                src={tajweedCourse.image}
                alt={tajweedCourse.title.en}
                fill
                quality={62}
                sizes="(max-width: 1024px) calc(100vw - 2rem), 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-slate-950/65 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                {tajweedCourse.level}
              </span>
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
                Featured Tajweed path
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
                {tajweedCourse.title.en}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                {tajweedCourse.description.en}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {tajweedCourse.outcomes.en.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={`/courses/${tajweedCourse.slug}?lang=en`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-teal-700"
                >
                  View Full Course
                </Link>
                <Link
                  href="/free-trial"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-teal-800"
                >
                  Book Free Tajweed Trial
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                Plans from ${startingMonthlyPrice}/month
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
              Designed for adult learners too
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
              Online Tajweed classes for adults
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              Whether you learned Quran years ago or are only now focusing on
              accurate recitation, private lessons let you improve without the
              pressure of keeping pace with a group.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Correct long-standing pronunciation habits",
                "Understand why specific Tajweed rules apply",
                "Practice directly on Quran passages",
                "Progress at a pace that fits work and family commitments",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm font-semibold leading-6 text-slate-700 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#0B1120] p-6 text-white shadow-[0_28px_80px_-45px_rgba(15,23,42,.65)] sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-300">
              How it works
            </p>
            <div className="mt-7 space-y-6">
              {[
                ["Book your free trial", "Tell us about your current recitation level and goals."],
                ["Recite for your tutor", "The tutor identifies pronunciation, fluency and Tajweed issues."],
                ["Start a focused plan", "Each lesson targets the corrections that will improve your recitation most."],
              ].map(([title, text], index) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-400/10 text-sm font-black text-teal-300">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/free-trial"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-black text-[#071814] transition-colors hover:bg-teal-400 sm:w-auto"
            >
              Book Your Free Trial
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {relatedCourses.length > 0 && (
        <section className="border-y border-slate-200 bg-white py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B8892E]">
                Continue your Quran journey
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl">
                Where stronger recitation can lead next
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Once your recitation is stronger, you may continue into structured
                Hifz or advanced certification depending on your goals.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
              {relatedCourses.map((course) => (
                <article
                  key={course.id}
                  className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFC] p-6"
                >
                  <h3 className="text-xl font-black text-slate-950">
                    {course.title.en}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {course.description.en}
                  </p>
                  <Link
                    href={`/courses/${course.slug}?lang=en`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-teal-700 hover:text-teal-900"
                  >
                    View program
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
              Common questions
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
              Online Tajweed classes — FAQ
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-[1.75rem] border border-slate-200 bg-white px-5 sm:px-7">
            {faqs.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-extrabold text-slate-950 marker:content-none sm:text-lg">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-normal text-slate-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-1 pt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 md:px-8">
          <div className="rounded-[2.25rem] bg-gradient-to-br from-[#0A2D26] via-[#0B3A30] to-[#071814] px-6 py-10 text-white shadow-[0_30px_90px_-50px_rgba(6,78,59,.7)] sm:px-10 md:px-14 md:py-14">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#E0BE70]">
              Start with your real recitation level
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-[-0.025em] text-white sm:text-4xl md:text-5xl">
              Improve your Quran recitation with focused personal guidance
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              Use the free trial to identify the mistakes that matter most and start
              with a Tajweed plan tailored to your level.
            </p>
            <Link
              href="/free-trial"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D0A64A] px-7 py-3.5 text-sm font-black text-[#10211d] transition-colors hover:bg-[#E2BD68]"
            >
              Book Your Free Tajweed Trial
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
