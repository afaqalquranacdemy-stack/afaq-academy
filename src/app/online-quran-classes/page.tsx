import type { Metadata } from "next";
import Image from "next/image";
import { courses } from "@/data/courses";
import { startingMonthlyPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: {
    absolute: "Online Quran Classes with Al-Azhar Tutors | Afaq Al-Quran",
  },
  description:
    "Join live 1-to-1 online Quran classes with experienced Al-Azhar tutors. Learn Quran recitation, Hifz, Tafsir, Qira'at and Ijazah with flexible schedules.",
  alternates: {
    canonical: "https://afaqalquran.com/online-quran-classes",
  },
  openGraph: {
    title: "Online Quran Classes with Al-Azhar Tutors | Afaq Al-Quran",
    description:
      "Private live Quran lessons with experienced Al-Azhar tutors, personalized learning plans and flexible scheduling.",
    url: "https://afaqalquran.com/online-quran-classes",
    type: "website",
  },
};

const quranCourseSlugs = [
  "quran-recitation-with-tajweed",
  "quran-memorization-hifz",
  "quran-tafsir",
  "ten-qiraat",
  "ijazah-program",
];

const quranCourses = quranCourseSlugs
  .map((slug) => courses.find((course) => course.slug === slug))
  .filter((course): course is (typeof courses)[number] => Boolean(course));

const trustItems = [
  {
    title: "Experienced Al-Azhar Tutors",
    text: "Learn with qualified teachers grounded in authentic Quran scholarship and practical online teaching.",
  },
  {
    title: "Private 1-to-1 Lessons",
    text: "Your lesson follows your level, pace and learning goals instead of a one-size-fits-all class.",
  },
  {
    title: "Structured Progress",
    text: "Follow a clear path from your current level toward stronger recitation, memorization or advanced study.",
  },
  {
    title: "Flexible Scheduling",
    text: "Choose lesson times that fit your routine and learn from home wherever you are.",
  },
];

const learningPaths = [
  {
    step: "01",
    title: "Read with confidence",
    text: "Build accurate Quran reading and strengthen letter articulation at your current level.",
  },
  {
    step: "02",
    title: "Improve recitation",
    text: "Refine pronunciation, fluency and the practical application of Tajweed rules.",
  },
  {
    step: "03",
    title: "Memorize with structure",
    text: "Follow a personalized Hifz and revision plan with consistent teacher feedback.",
  },
  {
    step: "04",
    title: "Advance your study",
    text: "Progress to Tafsir, Qira'at or Ijazah when your foundation and goals are ready.",
  },
];

const faqs = [
  {
    question: "How do online Quran classes work?",
    answer:
      "Lessons are taught live online in private 1-to-1 sessions. Your tutor first identifies your level and goals, then follows a personalized learning plan with direct correction and ongoing feedback.",
  },
  {
    question: "Are the Quran classes live or recorded?",
    answer:
      "The core learning experience is live and interactive. You work directly with your tutor rather than relying on pre-recorded lessons.",
  },
  {
    question: "Can complete beginners join?",
    answer:
      "Yes. Beginners can start from foundational Quran reading and pronunciation, while experienced students can enter recitation, Hifz or advanced Quran study at the appropriate level.",
  },
  {
    question: "Do you offer online Quran classes for adults?",
    answer:
      "Yes. Private lessons are suitable for adults who want to begin from the basics, improve recitation, memorize Quran or continue into advanced study.",
  },
  {
    question: "Are the lessons one-to-one?",
    answer:
      "Yes. The private format allows the tutor to focus on your recitation, pace, strengths and areas that need correction.",
  },
  {
    question: "Can I choose my lesson schedule?",
    answer:
      "Scheduling is flexible and arranged around available tutor times and your preferred routine.",
  },
  {
    question: "What happens during the free trial?",
    answer:
      "The trial helps us understand your current level, learning goals and preferred schedule so we can recommend the right Quran path and tutor.",
  },
  {
    question: "Which Quran course should I start with?",
    answer:
      "You do not need to decide alone. Start with the free trial and we will recommend the most suitable path based on your current ability and goals.",
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

export default function OnlineQuranClassesPage() {
  return (
    <div className="paid-landing-page min-h-screen bg-[#F8FAFC] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative isolate overflow-hidden bg-[#071814] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 18%, rgba(20,184,166,.18), transparent 32%), radial-gradient(circle at 82% 28%, rgba(200,155,60,.14), transparent 28%), linear-gradient(135deg, #061511 0%, #0A2C25 48%, #071814 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(to bottom, black, transparent 78%)",
          }}
        />

        <div className="mx-auto grid min-h-[690px] max-w-7xl items-center gap-12 px-4 pb-16 pt-32 sm:px-6 md:min-h-[760px] md:px-8 md:pb-24 md:pt-40 lg:grid-cols-[1.08fr_.92fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-white/[0.06] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-100 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
              Online Quran Learning
            </div>

            <h1 className="max-w-4xl text-[2.35rem] font-black leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Online Quran Classes with{" "}
              <span className="text-[#D9B45F]">Expert Al-Azhar Tutors</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl md:leading-9">
              Learn the Quran through live, one-to-one lessons tailored to your
              level, goals and schedule — with personal guidance from experienced
              Quran tutors.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/free-trial"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#D0A64A] px-7 py-3.5 text-sm font-extrabold text-[#10211d] shadow-[0_16px_45px_-18px_rgba(208,166,74,.75)] transition-colors hover:bg-[#E2BD68] sm:text-base"
              >
                Book Your Free Trial
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href="#quran-programs"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/[0.11] sm:text-base"
              >
                Explore Quran Programs
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-200">
              {["Live 1-to-1 Classes", "Flexible Scheduling", "All Levels Welcome"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-300/15 text-teal-200">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 rounded-full bg-teal-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-[0_35px_100px_-45px_rgba(0,0,0,.75)] backdrop-blur-sm">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">
                    Your learning path
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    Personal from the first lesson
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
                  ["Level assessment", "Start from where you are today"],
                  ["Right program", "Recitation, Hifz or advanced study"],
                  ["Dedicated tutor", "Direct correction and guidance"],
                  ["Progress plan", "Clear goals and consistent follow-up"],
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
                Not sure where to begin? Your free trial helps us recommend the
                most suitable Quran path for your level and goals.
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
              A trusted path to Quran mastery
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
              Quran learning built around your level — not a generic syllabus
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Authentic Quran learning needs correction, repetition and personal
              guidance. Your tutor adapts the pace and focus to what you actually
              need next.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {learningPaths.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_-40px_rgba(15,23,42,.35)]"
              >
                <div className="text-xs font-black tracking-[0.16em] text-[#B8892E]">
                  {item.step}
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quran-programs" className="scroll-mt-24 border-y border-slate-200 bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
                Quran programs
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
                Choose the Quran path that matches your goal
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Start with the program closest to your objective, or book a free
                trial and let us recommend the right path after assessing your level.
              </p>
            </div>
            <a
              href="/courses?category=Quran&lang=en#courses-grid"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-teal-700 hover:text-teal-900"
            >
              View all Quran courses
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {quranCourses.map((course, index) => (
              <article
                key={course.id}
                className={`overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#FBFCFD] shadow-[0_18px_55px_-42px_rgba(15,23,42,.4)] ${
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={course.image}
                    alt={course.title.en}
                    fill
                    quality={60}
                    sizes="(max-width: 768px) calc(100vw - 2rem), (max-width: 1024px) 50vw, 33vw"
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
              Not sure where to begin?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Book a free assessment and we will recommend the most suitable Quran
              program based on your current level, goals and preferred schedule.
            </p>
            <a
              href="/free-trial"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-teal-800"
            >
              Book Free Assessment
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
              Personalised learning
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
              Your Quran journey, built around you
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              No two students begin at exactly the same point. Your tutor identifies
              your current ability, then focuses each lesson on the next skill that
              will move you forward.
            </p>
            <div className="mt-7 space-y-4">
              {[
                "Direct correction during live recitation",
                "A pace matched to your current ability",
                "Clear goals for reading, Tajweed, Hifz or advanced study",
                "Regular feedback so weak points do not become habits",
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
                ["Book your free trial", "Tell us your level, goals and preferred schedule."],
                ["Meet your Quran tutor", "Your tutor evaluates your current level and identifies the right learning path."],
                ["Begin your personal program", "Start live 1-to-1 lessons with direct guidance and clear progress goals."],
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
              Book Your Free Trial
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B8892E]">
              Scholar-led learning
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl">
              Learn Quran with qualified tutors
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Strong Quran learning depends on a teacher who can hear your recitation,
              identify the exact issue and correct it clearly. Our teaching approach
              combines traditional scholarship with personal online instruction.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Authentic methodology", "Learning rooted in sound Quran instruction and careful correction."],
              ["Personal feedback", "Your tutor addresses your actual recitation instead of giving generic advice."],
              ["Clear progression", "Move from foundations toward higher study without skipping essential skills."],
              ["International access", "Study privately online without being limited by where you live."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-extrabold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-[#0A2D26] via-[#0B3A30] to-[#071814] px-6 py-10 text-white shadow-[0_30px_90px_-50px_rgba(6,78,59,.7)] sm:px-10 md:px-14 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.18em] text-[#E0BE70]">
                  Quran classes for adults
                </span>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-white sm:text-4xl md:text-5xl">
                  Start at your level. Learn at your pace.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                  Whether you are returning to Quran study after years away, beginning
                  from the basics or working toward advanced recitation and
                  memorization, private lessons let you progress without classroom
                  pressure.
                </p>
                <a
                  href="/free-trial"
                  className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D0A64A] px-7 py-3.5 text-sm font-black text-[#10211d] transition-colors hover:bg-[#E2BD68]"
                >
                  Start Your Quran Journey
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  "Beginner-friendly private lessons",
                  "Recitation and Tajweed correction",
                  "Personalized Hifz and revision plans",
                  "Advanced paths for qualified students",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm font-semibold text-slate-100"
                  >
                    <CheckIcon className="h-4 w-4 shrink-0 text-teal-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
              Common questions
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
              Online Quran classes — FAQ
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

      <section className="bg-[#F8FAFC] py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 md:px-8">
          <div className="rounded-[2.25rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_24px_80px_-50px_rgba(15,23,42,.5)] sm:px-10 md:px-14 md:py-14">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B8892E]">
              Your first lesson starts with clarity
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-[-0.025em] text-slate-950 sm:text-4xl md:text-5xl">
              Begin your Quran journey with confidence
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Meet a Quran tutor, identify your current level and get a personalized
              recommendation before committing to a program.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/free-trial"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 text-sm font-black text-white transition-colors hover:bg-teal-800"
              >
                Book Your Free Trial
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href="/courses?category=Quran&lang=en#courses-grid"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-extrabold text-slate-800 transition-colors hover:bg-slate-50"
              >
                Explore Quran Courses
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
