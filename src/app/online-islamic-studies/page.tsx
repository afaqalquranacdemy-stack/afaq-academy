import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/courses";
import { startingMonthlyPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: { absolute: "Online Islamic Studies Classes | Afaq Al-Quran" },
  description:
    "Study Islamic Studies online through live 1-to-1 lessons in Fiqh, Aqeedah, Hadith, Seerah and advanced Quran pathways including Ijazah.",
  alternates: { canonical: "https://afaqalquran.com/online-islamic-studies" },
};

const islamicSlugs = [
  "fiqh-of-worship",
  "islamic-aqeedah",
  "hadith-40-nawawi",
  "prophetic-seerah",
  "usul-al-fiqh",
  "islamic-ethics-akhlaq",
];

const advancedQuranSlugs = [
  "ijazah-program",
  "quran-tafsir",
  "ten-qiraat",
  "quran-memorization-hifz",
];

const islamicCourses = islamicSlugs
  .map((slug) => courses.find((c) => c.slug === slug))
  .filter((c): c is (typeof courses)[number] => Boolean(c));

const advancedQuranCourses = advancedQuranSlugs
  .map((slug) => courses.find((c) => c.slug === slug))
  .filter((c): c is (typeof courses)[number] => Boolean(c));

const faqs = [
  ["What subjects are included in online Islamic Studies?", "Available paths include Fiqh, Aqeedah, Hadith, Seerah, Usul al-Fiqh and Islamic Ethics, with advanced Quran studies available as a separate progression path."],
  ["Do you also offer Ijazah?", "Yes. Qualified students can continue into a dedicated Quran Ijazah program with connected chain certification requirements handled within that specialized course."],
  ["Are the classes live?", "Yes. The core learning experience is live and interactive, with direct teaching, questions and structured progression."],
  ["Can adults join?", "Yes. The programs are suitable for adult learners who want structured Islamic knowledge at an appropriate level."],
  ["Do I need prior knowledge?", "Not for every program. Beginner and all-level paths are available, while advanced subjects can be recommended after discussing your background."],
  ["Can I combine Islamic Studies with Quran study?", "Yes. You can build a broader path over time, combining Islamic Studies with Hifz, Tafsir, Qira'at or Ijazah according to your goals and level."],
  ["What happens in the free trial?", "The free trial helps us understand your background, interests and schedule so we can recommend the most suitable subject and tutor."],
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q,a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function Check({ className = "" }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 4 4L19 6" /></svg>;
}
function Arrow({ className = "" }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>;
}

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#FBFCFD] shadow-[0_18px_55px_-42px_rgba(15,23,42,.4)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <Image src={course.image} alt={course.title.en} fill quality={60} sizes="(max-width: 768px) calc(100vw - 2rem), 33vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent"/>
        <span className="absolute bottom-4 left-4 rounded-full bg-slate-950/65 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">{course.level}</span>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-black sm:text-2xl">{course.title.en}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">{course.description.en}</p>
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-slate-200 pt-5">
          <div><div className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Plans from</div><div className="mt-1 text-lg font-black">${startingMonthlyPrice}<span className="text-xs font-bold text-slate-500">/mo</span></div></div>
          <Link prefetch={false} href={`/courses/${course.slug}?lang=en`} className="inline-flex min-h-10 items-center justify-center rounded-full bg-slate-950 px-4 py-2.5 text-xs font-extrabold text-white hover:bg-teal-700">View course</Link>
        </div>
      </div>
    </article>
  );
}

export default function OnlineIslamicStudiesPage() {
  return (
    <div className="paid-landing-page min-h-screen bg-[#F8FAFC] text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative isolate overflow-hidden bg-[#071814] text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{backgroundImage:"radial-gradient(circle at 15% 18%, rgba(20,184,166,.18), transparent 31%), radial-gradient(circle at 84% 25%, rgba(200,155,60,.16), transparent 27%), linear-gradient(135deg, #061511 0%, #0A2D26 52%, #071814 100%)"}} />
        <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-4 pb-16 pt-32 sm:px-6 md:min-h-[760px] md:px-8 md:pb-24 md:pt-40 lg:grid-cols-[1.08fr_.92fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-white/[0.06] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-100 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" /> Structured Islamic Learning Online
            </div>
            <h1 className="max-w-4xl text-[2.3rem] font-black leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-[4.05rem]">
              Online Islamic Studies with <span className="text-[#D9B45F]">Qualified Scholars</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl md:leading-9">
              Build a stronger foundation in Fiqh, Aqeedah, Hadith and Seerah, then continue into advanced Quran studies such as Tafsir, Qira&apos;at and Ijazah when your goals and level are ready.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link prefetch={false} href="/free-trial" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#D0A64A] px-7 py-3.5 text-sm font-extrabold text-[#10211d] hover:bg-[#E2BD68] sm:text-base">Book Your Free Trial <Arrow className="h-4 w-4"/></Link>
              <Link prefetch={false} href="#islamic-programs" className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-bold hover:bg-white/[0.11] sm:text-base">Explore Programs</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-200">
              {["Live 1-to-1 Classes","Structured Curriculum","Advanced Quran Paths","Flexible Scheduling"].map((x)=><span key={x} className="inline-flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-300/15 text-teal-200"><Check className="h-3.5 w-3.5"/></span>{x}</span>)}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-[0_35px_100px_-45px_rgba(0,0,0,.75)]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Build a complete learning path</p>
              <p className="mt-2 text-lg font-bold">Start with foundations, then advance when ready</p>
              <div className="mt-7 space-y-4">
                {[
                  ["Islamic foundations","Fiqh, Aqeedah, Hadith and Seerah"],
                  ["Deeper scholarship","Usul al-Fiqh and Islamic Ethics"],
                  ["Advanced Quran study","Tafsir, Hifz and Ten Qira'at"],
                  ["Ijazah pathway","A specialized certification route for qualified Quran students"],
                ].map(([t,d],i)=><div key={t} className="flex gap-4 rounded-2xl border border-white/[0.08] bg-black/10 p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal-300/10 text-xs font-black text-teal-200">0{i+1}</span><div><p className="font-bold">{t}</p><p className="mt-1 text-sm leading-6 text-slate-300">{d}</p></div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-slate-200/70 px-4 sm:px-6 md:grid-cols-4 md:px-8">
          {[
            ["Scholar-led instruction","Learn through structured guidance instead of disconnected lectures."],
            ["Multiple disciplines","Build knowledge across belief, worship, Prophetic teachings and history."],
            ["Advanced Quran progression","Continue into Tafsir, Hifz, Qira'at or Ijazah when appropriate."],
            ["Flexible schedule","Study online at times that work around your responsibilities."],
          ].map(([t,d])=><div key={t} className="bg-white px-4 py-7 sm:px-6 md:py-9"><div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700"><Check className="h-4 w-4"/></div><h2 className="text-sm font-extrabold sm:text-base">{t}</h2><p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{d}</p></div>)}
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">A structured learning journey</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] sm:text-4xl md:text-5xl">Study the subject that matches your current need</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">You do not need to study everything at once. Start with the area that matters most now, then build a broader path over time.</p>
          </div>
        </div>
      </section>

      <section id="islamic-programs" className="scroll-mt-24 border-y border-slate-200 bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">Islamic Studies programs</span>
          <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-[-0.025em] sm:text-4xl md:text-5xl">Core Islamic Studies paths</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">Choose from foundational and advanced subjects in worship, belief, Prophetic teachings, methodology and character development.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {islamicCourses.map((course)=><CourseCard key={course.id} course={course}/>)}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B8892E]">Advanced Quran & Ijazah</span>
          <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-[-0.025em] sm:text-4xl md:text-5xl">Continue into advanced Quran study</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Students who want to deepen their Quran journey can continue into Hifz, Tafsir, Ten Qira&apos;at and the specialized Ijazah Certification Program.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {advancedQuranCourses.map((course)=><CourseCard key={course.id} course={course}/>)}
          </div>
          <div className="mt-10 rounded-[2rem] border border-[#D0A64A]/25 bg-white px-6 py-8 text-center shadow-[0_20px_60px_-45px_rgba(15,23,42,.35)] sm:px-10">
            <h3 className="text-2xl font-black sm:text-3xl">Interested in Ijazah but not sure if you are ready?</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">Use the free assessment to discuss your recitation, memorization background and goals before choosing the right advanced Quran path.</p>
            <Link prefetch={false} href="/free-trial" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 text-sm font-extrabold text-white hover:bg-teal-800">Book Free Assessment <Arrow className="h-4 w-4"/></Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">Personalized academic path</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] sm:text-4xl md:text-5xl">Build knowledge with a clear sequence</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">Your learning plan can start with a single subject and expand into a broader Islamic and Quranic curriculum as your level and goals develop.</p>
          </div>
          <div className="rounded-[2rem] bg-[#0B1120] p-6 text-white sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-300">How it works</p>
            <div className="mt-7 space-y-6">
              {[
                ["Book your free trial","Tell us your background, interests and learning goals."],
                ["Choose the right starting subject","We recommend the program that best matches your current level."],
                ["Build your long-term path","Continue into related Islamic or advanced Quran studies when you are ready."],
              ].map(([t,d],i)=><div key={t} className="flex gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-400/10 text-sm font-black text-teal-300">{i+1}</div><div><h3 className="text-lg font-extrabold">{t}</h3><p className="mt-1 text-sm leading-6 text-slate-300">{d}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <div className="text-center"><span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">Common questions</span><h2 className="mt-4 text-3xl font-black tracking-[-0.025em] sm:text-4xl md:text-5xl">Online Islamic Studies — FAQ</h2></div>
          <div className="mt-10 divide-y divide-slate-200 rounded-[1.75rem] border border-slate-200 bg-white px-5 sm:px-7">
            {faqs.map(([q,a])=><details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-extrabold sm:text-lg">{q}<span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xl font-normal transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl pb-1 pt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 md:px-8">
          <div className="rounded-[2.25rem] bg-gradient-to-br from-[#0A2D26] via-[#0B3A30] to-[#071814] px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#E0BE70]">Start with clarity</span>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-[-0.025em] sm:text-4xl md:text-5xl">Build an Islamic learning path that can grow with you</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">Start with the right subject now, then continue into deeper Islamic or Quranic study when you are ready.</p>
            <Link prefetch={false} href="/free-trial" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D0A64A] px-7 py-3.5 text-sm font-black text-[#10211d] hover:bg-[#E2BD68]">Book Your Free Trial <Arrow className="h-4 w-4"/></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
