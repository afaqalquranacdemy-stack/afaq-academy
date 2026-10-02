import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/courses";
import { startingMonthlyPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: { absolute: "Online Arabic Classes with Expert Tutors | Afaq Al-Quran" },
  description:
    "Learn Arabic online through live 1-to-1 lessons. Study Modern Standard Arabic, Quranic Arabic, grammar and morphology with flexible scheduling.",
  alternates: { canonical: "https://afaqalquran.com/online-arabic-classes" },
};

const slugs = [
  "comprehensive-arabic",
  "quranic-arabic",
  "arabic-grammar-nahw",
  "arabic-morphology-sarf",
  "arabic-rhetoric-balagha",
];

const selected = slugs
  .map((slug) => courses.find((c) => c.slug === slug))
  .filter((c): c is (typeof courses)[number] => Boolean(c));

const faqs = [
  ["Can complete beginners join?", "Yes. Beginners can start with letters, pronunciation, reading and essential vocabulary before progressing into grammar and comprehension."],
  ["Do you teach Modern Standard Arabic?", "Yes. The Comprehensive Arabic path develops reading, writing, vocabulary and communication in Modern Standard Arabic."],
  ["Do you teach Quranic Arabic?", "Yes. Quranic Arabic focuses on recurring Quran vocabulary, structures and language patterns to support direct understanding."],
  ["Are lessons private?", "Yes. The core learning format is live 1-to-1 so the tutor can adapt the pace and focus to your level."],
  ["Can I study Arabic grammar online?", "Yes. Dedicated Nahw, Sarf and Balagha paths are available for students who want deeper language study."],
  ["What happens in the free trial?", "The trial helps identify your current Arabic level, goals and preferred schedule so we can recommend the right starting path."],
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({
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

export default function OnlineArabicClassesPage() {
  return (
    <div className="paid-landing-page min-h-screen bg-[#F8FAFC] text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative isolate overflow-hidden bg-[#071814] text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{backgroundImage:"radial-gradient(circle at 16% 18%, rgba(20,184,166,.19), transparent 31%), radial-gradient(circle at 84% 25%, rgba(200,155,60,.15), transparent 27%), linear-gradient(135deg, #061511 0%, #0A2D26 52%, #071814 100%)"}} />
        <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-4 pb-16 pt-32 sm:px-6 md:min-h-[760px] md:px-8 md:pb-24 md:pt-40 lg:grid-cols-[1.08fr_.92fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-white/[0.06] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-100 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" /> Live 1-to-1 Arabic Learning
            </div>
            <h1 className="max-w-4xl text-[2.3rem] font-black leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-[4.1rem]">
              Learn Arabic Online with <span className="text-[#D9B45F]">Expert Private Tutors</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl md:leading-9">
              Build confident reading, vocabulary, grammar and comprehension through live one-to-one lessons in Modern Standard and Quranic Arabic — at a pace matched to your level.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link prefetch={false} href="/free-trial" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#D0A64A] px-7 py-3.5 text-sm font-extrabold text-[#10211d] hover:bg-[#E2BD68] sm:text-base">Book Your Free Trial <Arrow className="h-4 w-4" /></Link>
              <Link prefetch={false} href="#arabic-programs" className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-bold hover:bg-white/[0.11] sm:text-base">Explore Arabic Programs</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-200">
              {["1-to-1 Live Lessons","Beginner Friendly","Quranic Arabic","Flexible Scheduling"].map((x)=><span key={x} className="inline-flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-300/15 text-teal-200"><Check className="h-3.5 w-3.5"/></span>{x}</span>)}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-[0_35px_100px_-45px_rgba(0,0,0,.75)]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Your Arabic path</p>
              <p className="mt-2 text-lg font-bold">Start from the skill you actually need</p>
              <div className="mt-7 space-y-4">
                {[
                  ["Foundations","Letters, sounds, reading and essential vocabulary"],
                  ["Modern Standard Arabic","Structured reading, writing and communication"],
                  ["Quranic Arabic","Vocabulary and structures found throughout the Quran"],
                  ["Grammar & Morphology","Nahw and Sarf for deeper language control"],
                ].map(([t,d],i)=><div key={t} className="flex gap-4 rounded-2xl border border-white/[0.08] bg-black/10 p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal-300/10 text-xs font-black text-teal-200">0{i+1}</span><div><p className="font-bold">{t}</p><p className="mt-1 text-sm leading-6 text-slate-300">{d}</p></div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-slate-200/70 px-4 sm:px-6 md:grid-cols-4 md:px-8">
          {[
            ["Private instruction","A tutor can adapt vocabulary, grammar and practice to your actual level."],
            ["Clear progression","Move from foundations into reading, comprehension and structured language study."],
            ["Quran connection","Choose a Quranic Arabic path when understanding revelation is your main goal."],
            ["Flexible schedule","Learn online at times that work around study, work and family."],
          ].map(([t,d])=><div key={t} className="bg-white px-4 py-7 sm:px-6 md:py-9"><div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700"><Check className="h-4 w-4"/></div><h2 className="text-sm font-extrabold sm:text-base">{t}</h2><p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{d}</p></div>)}
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">A path for every level</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] sm:text-4xl md:text-5xl">Learn Arabic for the goal that matters to you</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">General Arabic and Quranic Arabic overlap, but they are not the same goal. Your program should reflect why you want to learn the language.</p>
          </div>
        </div>
      </section>

      <section id="arabic-programs" className="scroll-mt-24 border-y border-slate-200 bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">Arabic programs</span>
          <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-[-0.025em] sm:text-4xl md:text-5xl">Choose the Arabic path that matches your level and purpose</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {selected.map((course,i)=>(
              <article key={course.id} className={`overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#FBFCFD] shadow-[0_18px_55px_-42px_rgba(15,23,42,.4)] ${i<2?"lg:col-span-3":"lg:col-span-2"}`}>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image src={course.image} alt={course.title.en} fill quality={60} sizes="(max-width: 768px) calc(100vw - 2rem), 50vw" className="object-cover"/>
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
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-teal-100 bg-gradient-to-br from-teal-50 to-white px-6 py-8 text-center">
            <h3 className="text-2xl font-black sm:text-3xl">Not sure where to start?</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">Use the free trial to identify your level and the Arabic path that best matches your goals.</p>
            <Link prefetch={false} href="/free-trial" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 text-sm font-extrabold text-white hover:bg-teal-800">Book Free Assessment <Arrow className="h-4 w-4"/></Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">Personalized instruction</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.025em] sm:text-4xl md:text-5xl">Build real Arabic skill, one layer at a time</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">Private learning lets the tutor spend less time on what you already know and more time on the reading, grammar or vocabulary that is slowing you down.</p>
          </div>
          <div className="rounded-[2rem] bg-[#0B1120] p-6 text-white sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-300">How it works</p>
            <div className="mt-7 space-y-6">
              {[
                ["Book your free trial","Tell us your current Arabic experience and your main learning goal."],
                ["Complete a simple level check","Your tutor identifies the right starting point and the gaps that matter most."],
                ["Begin a focused program","Build reading, vocabulary, grammar and comprehension through a plan matched to you."],
              ].map(([t,d],i)=><div key={t} className="flex gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-400/10 text-sm font-black text-teal-300">{i+1}</div><div><h3 className="text-lg font-extrabold">{t}</h3><p className="mt-1 text-sm leading-6 text-slate-300">{d}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <div className="text-center"><span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">Common questions</span><h2 className="mt-4 text-3xl font-black tracking-[-0.025em] sm:text-4xl md:text-5xl">Online Arabic classes — FAQ</h2></div>
          <div className="mt-10 divide-y divide-slate-200 rounded-[1.75rem] border border-slate-200 bg-white px-5 sm:px-7">
            {faqs.map(([q,a])=><details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-extrabold sm:text-lg">{q}<span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xl font-normal transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl pb-1 pt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 md:px-8">
          <div className="rounded-[2.25rem] bg-gradient-to-br from-[#0A2D26] via-[#0B3A30] to-[#071814] px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#E0BE70]">Start at the right level</span>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-[-0.025em] sm:text-4xl md:text-5xl">Make Arabic a language you can actually understand and use</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">Start with a free level assessment and a learning path matched to your goals.</p>
            <Link prefetch={false} href="/free-trial" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D0A64A] px-7 py-3.5 text-sm font-black text-[#10211d] hover:bg-[#E2BD68]">Book Your Free Trial <Arrow className="h-4 w-4"/></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
