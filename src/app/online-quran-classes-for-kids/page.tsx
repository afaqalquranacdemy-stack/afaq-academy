import type { Metadata } from "next";
import Image from "next/image";
import { courses } from "@/data/courses";
import { startingMonthlyPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: {
    absolute: "Online Quran Classes for Kids | Afaq Al-Quran",
  },
  description:
    "Live 1-to-1 Quran, Arabic and Islamic classes for kids with patient tutors, structured learning paths and flexible scheduling. Book a free trial.",
  alternates: {
    canonical: "https://afaqalquran.com/online-quran-classes-for-kids",
  },
  openGraph: {
    title: "Online Quran Classes for Kids | Afaq Al-Quran",
    description:
      "Private live Quran, Arabic and Islamic lessons for children with patient tutors and age-appropriate learning plans.",
    url: "https://afaqalquran.com/online-quran-classes-for-kids",
    type: "website",
  },
};

const kidsCourseSlugs = [
  "noorani-qaida-for-kids",
  "kids-juz-amma",
  "kids-arabic-language",
  "kids-islamic-manners",
];

const kidsCourses = kidsCourseSlugs
  .map((slug) => courses.find((course) => course.slug === slug))
  .filter((course): course is (typeof courses)[number] => Boolean(course));

const benefits = [
  {
    title: "Patient 1-to-1 Tutors",
    text: "Your child learns at a comfortable pace with direct attention, correction and encouragement.",
  },
  {
    title: "Age-Appropriate Learning",
    text: "Lessons are adapted to the child's age, current level and ability to stay engaged online.",
  },
  {
    title: "Clear Learning Path",
    text: "Parents know what the child is working on and what the next learning goal should be.",
  },
  {
    title: "Flexible Family Schedule",
    text: "Choose lesson times that work around school, family routines and different time zones.",
  },
];

const parentConcerns = [
  ["My child is a complete beginner", "Start with Arabic letters, sounds and Noorani Qaida before moving into Quran reading."],
  ["My child can read but needs correction", "Focus on accurate pronunciation, fluency and early Tajweed through guided recitation."],
  ["My child wants to memorize Quran", "Use a structured memorization and revision routine with age-appropriate targets."],
  ["I want broader Islamic learning", "Combine Quran learning with Arabic and Islamic manners when that better fits your child's goals."],
];

const faqs = [
  {
    question: "What age can children start online Quran classes?",
    answer:
      "Children can begin when they are able to engage in a short live lesson and follow simple instructions. The learning plan is adapted to the child's age, attention span and current level.",
  },
  {
    question: "Are the classes private or group lessons?",
    answer:
      "The core lessons are private 1-to-1 sessions so the tutor can focus on your child's pronunciation, reading level, pace and confidence.",
  },
  {
    question: "Can my child start from the Arabic alphabet?",
    answer:
      "Yes. Complete beginners can begin with letter recognition, pronunciation and foundational reading before progressing into Quran recitation.",
  },
  {
    question: "Do you teach Noorani Qaida online?",
    answer:
      "Yes. Noorani Qaida is available as a structured beginner path for children who need a strong foundation in Arabic letters, sounds and connected reading.",
  },
  {
    question: "Do you offer Quran memorization for kids?",
    answer:
      "Yes. Children can follow a personalized memorization and revision plan, including focused paths such as Juz Amma.",
  },
  {
    question: "Can my child also learn Arabic or Islamic Studies?",
    answer:
      "Yes. Afaq offers children's paths in Quran, Arabic and age-appropriate Islamic learning, allowing parents to choose the combination that best fits their goals.",
  },
  {
    question: "How do you keep online lessons engaging?",
    answer:
      "Tutors adapt lesson length, pace, repetition and interaction to the child's age and level rather than teaching every child in the same way.",
  },
  {
    question: "What happens in the free trial?",
    answer:
      "The trial helps identify your child's current level, learning needs and preferred schedule so we can recommend the most suitable tutor and program.",
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

export default function OnlineQuranClassesForKidsPage() {
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
              "radial-gradient(circle at 14% 18%, rgba(20,184,166,.2), transparent 30%), radial-gradient(circle at 84% 26%, rgba(200,155,60,.16), transparent 28%), linear-gradient(135deg, #061511 0%, #0A2D26 52%, #071814 100%)",
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
              Online Learning for Children
            </div>

            <h1 className="max-w-4xl text-[2.3rem] font-black leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[4.15rem]">
              Online Quran Classes for Kids with{" "}
              <span className="text-[#D9B45F]">Patient Expert Tutors</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl md:leading-9">
              Help your child build strong foundations in Quran, Arabic and Islamic
              learning through live one-to-one lessons designed around their age,
              level and pace.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/free-trial"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#D0A64A] px-7 py-3.5 text-sm font-extrabold text-[#10211d] shadow-[0_16px_45px_-18px_rgba(208,166,74,.75)] transition-colors hover:bg-[#E2BD68] sm:text-base"
              >
                Book Your Child&apos;s Free Trial
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href="#kids-programs"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/[0.11] sm:text-base"
              >
                Explore Kids Programs
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-200">
              {[
                "Live 1-to-1 Lessons",
                "Patient Tutors",
                "Flexible Scheduling",
                "Beginner Friendly",
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
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">
                    A clear path for every child
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    Start from their real level
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D0A64A]/30 bg-[#D0A64A]/10 text-[#E4C477]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M4 5.5C6.7 4 9.3 4 12 5.5V19c-2.7-1.5-5.3-1.5-8 0V5.5Z" />
                    <path d="M20 5.5C17.3 4 14.7 4 12 5.5V19c2.7-1.5 5.3-1.5 8 0V5.5Z" />
                  </svg>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ["Assess their level", "Letters, reading, recitation or memorization"],
                  ["Choose the right path", "Quran, Noorani Qaida, Arabic or Islamic learning"],
                  ["Match the right tutor", "A teaching style suited to the child's age"],
                  ["Build steady progress", "Clear goals with direct parent visibility"],
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
                Your child does not need to fit a fixed level before joining. The
                free trial helps us recommend the right starting point.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-slate-200/70 px-4 sm:px-6 md:grid-cols-4 md:px-8">
          {benefits.map((item) => (
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
              Built for real family goals
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
              The right starting point depends on your child
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Some children need letters and sounds first. Others can already read
              and need better recitation, memorization or broader Islamic learning.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {parentConcerns.map(([title, text], index) => (
              <article
                key={title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_-40px_rgba(15,23,42,.35)] sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-xs font-black text-teal-700">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kids-programs" className="scroll-mt-24 border-y border-slate-200 bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
                Kids learning paths
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
                Choose the program that matches your child&apos;s next step
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Begin with Quran reading, memorization, Arabic or Islamic manners,
                then build a broader path as your child progresses.
              </p>
            </div>
            <a
              href="/courses?category=Kids&lang=en#courses-grid"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-teal-700 hover:text-teal-900"
            >
              View all kids courses
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {kidsCourses.map((course) => (
              <article
                key={course.id}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#FBFCFD] shadow-[0_18px_55px_-42px_rgba(15,23,42,.4)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={course.image}
                    alt={course.title.en}
                    fill
                    quality={60}
                    sizes="(max-width: 768px) calc(100vw - 2rem), 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-slate-950/65 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    {course.level}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-black leading-tight text-slate-950 sm:text-2xl">
                    {course.title.en}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                    {course.description.en}
                  </p>
                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-slate-200 pt-5">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Plans from
                      </div>
                      <div className="mt-1 text-lg font-black text-slate-950">
                        ${startingMonthlyPrice}
                        <span className="text-xs font-bold text-slate-500">/mo</span>
                      </div>
                    </div>
                    <a
                      href={`/courses/${course.slug}?lang=en`}
                      className="inline-flex min-h-10 items-center justify-center rounded-full bg-slate-950 px-4 py-2.5 text-xs font-extrabold text-white transition-colors hover:bg-teal-700"
                    >
                      View course
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-teal-100 bg-gradient-to-br from-teal-50 to-white px-6 py-8 text-center sm:px-10 md:py-10">
            <h3 className="text-2xl font-black text-slate-950 sm:text-3xl">
              Not sure which program your child needs?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Book a free trial and we will recommend the right starting point based
              on age, current level, goals and preferred schedule.
            </p>
            <a
              href="/free-trial"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-teal-800"
            >
              Book Your Child&apos;s Free Trial
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
              Parent-focused learning
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
              Lessons that respect your child&apos;s pace
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              Children progress best when the lesson is challenging enough to move
              them forward without becoming overwhelming. Private teaching gives the
              tutor room to adjust repetition, pace and correction in real time.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Direct correction without classroom pressure",
                "Short, focused goals suited to the child's level",
                "A learning path that can grow from Quran reading into Hifz, Arabic and Islamic studies",
                "Clearer visibility for parents into what the child is learning",
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
                ["Book a free trial", "Tell us your child's age, level, goals and preferred schedule."],
                ["Meet the tutor", "The tutor identifies the right starting point and how your child responds to the lesson."],
                ["Begin the right program", "Start a focused 1-to-1 path with clear goals and regular progress."],
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

            <a
              href="/free-trial"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-black text-[#071814] transition-colors hover:bg-teal-400 sm:w-auto"
            >
              Book Your Child&apos;s Free Trial
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B8892E]">
              More than one subject
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
              Build a complete learning path over time
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              A child may begin with Quran reading today and later add memorization,
              Arabic or Islamic learning. The path can grow without forcing every
              subject into the first lesson.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["Quran Reading", "Letters, reading fluency and accurate recitation."],
              ["Noorani Qaida", "A structured foundation for letters, sounds and connected reading."],
              ["Arabic for Kids", "Reading, writing and simple age-appropriate language skills."],
              ["Islamic Learning", "Manners, daily duas and foundational Islamic knowledge."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-[1.5rem] border border-slate-200 bg-[#F8FAFC] p-5">
                <h3 className="text-lg font-extrabold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
              Common parent questions
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
              Online Quran classes for kids — FAQ
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
              Start with the right level
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-[-0.025em] text-white sm:text-4xl md:text-5xl">
              Give your child a learning path that can grow with them
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              Use the free trial to identify the right program, tutor and starting
              point before committing to a longer plan.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/free-trial"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D0A64A] px-7 py-3.5 text-sm font-black text-[#10211d] transition-colors hover:bg-[#E2BD68]"
              >
                Book Your Child&apos;s Free Trial
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href="/courses?category=Kids&lang=en#courses-grid"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-white/[0.1]"
              >
                Explore Kids Courses
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
