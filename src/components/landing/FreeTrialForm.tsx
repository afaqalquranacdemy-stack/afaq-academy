"use client";

import { FormEvent, useState } from "react";

type Locale = "en" | "ar";

type Props = {
  locale: Locale;
};

const copy = {
  en: {
    name: "Full name",
    email: "Email address",
    whatsapp: "WhatsApp number",
    whatsappHint: "Include country code, e.g. +1 555 123 4567",
    interest: "I'm interested in",
    choose: "Choose a program",
    submit: "Request Free Trial",
    sending: "Sending...",
    success: "Your free trial request has been received.",
    successBody: "Our team will contact you to arrange the most suitable tutor and time.",
    error: "We could not send your request right now. Please try again.",
    required: "Please complete all required fields.",
    privacy: "Your details are used only to arrange your trial and contact you about your request.",
    options: [
      ["Quran", "Quran"],
      ["Tajweed", "Tajweed"],
      ["Quran for Kids", "Quran for Kids"],
      ["Arabic", "Arabic"],
      ["Islamic Studies", "Islamic Studies"],
      ["Ijazah", "Ijazah"],
    ],
  },
  ar: {
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    whatsapp: "رقم واتساب",
    whatsappHint: "اكتب كود الدولة، مثال: +20 10 1234 5678",
    interest: "أرغب في دراسة",
    choose: "اختر البرنامج",
    submit: "طلب تجربة مجانية",
    sending: "جاري الإرسال...",
    success: "تم استلام طلب التجربة المجانية.",
    successBody: "سيتواصل معك فريقنا لترتيب المعلم والموعد المناسبين.",
    error: "تعذر إرسال الطلب الآن. حاول مرة أخرى.",
    required: "يرجى إكمال جميع الحقول المطلوبة.",
    privacy: "نستخدم بياناتك فقط لترتيب التجربة والتواصل معك بخصوص طلبك.",
    options: [
      ["Quran", "القرآن الكريم"],
      ["Tajweed", "التجويد"],
      ["Quran for Kids", "القرآن للأطفال"],
      ["Arabic", "اللغة العربية"],
      ["Islamic Studies", "الدراسات الإسلامية"],
      ["Ijazah", "الإجازة"],
    ],
  },
} as const;

export function FreeTrialForm({ locale }: Props) {
  const t = copy[locale];
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const whatsapp = String(form.get("whatsapp") || "").trim();
    const course = String(form.get("course") || "").trim();
    const website = String(form.get("website") || "").trim();

    if (website) return;
    if (!name || !email || !whatsapp || !course) {
      setMessage(t.required);
      return;
    }

    setSubmitting(true);

    try {
      const params = new URLSearchParams(window.location.search);
      const campaignInfo = [
        ["utm_source", params.get("utm_source")],
        ["utm_medium", params.get("utm_medium")],
        ["utm_campaign", params.get("utm_campaign")],
        ["utm_term", params.get("utm_term")],
        ["utm_content", params.get("utm_content")],
        ["gclid", params.get("gclid")],
      ]
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name,
          lastName: "",
          email,
          age: "",
          gender: "",
          preferredTeacher: "",
          whatsapp,
          course,
          message: campaignInfo
            ? `Landing page: /free-trial\n${campaignInfo}`
            : "Landing page: /free-trial",
          formType: "Trial Booking",
        }),
      });

      if (!response.ok) throw new Error("Lead submission failed");

      const target = window as typeof window & {
        dataLayer?: Array<Record<string, unknown>>;
        gtag?: (...args: unknown[]) => void;
      };

      target.dataLayer = target.dataLayer || [];
      target.dataLayer.push({
        event: "free_trial_lead",
        page: "/free-trial",
        course,
      });

      target.gtag?.("event", "free_trial_lead", {
        send_to: "G-J3KX3TZ4F2",
        page: "/free-trial",
        course,
        form_type: "trial_booking",
      });

      setSubmitted(true);
      event.currentTarget.reset();
    } catch {
      setMessage(t.error);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[1.75rem] border border-teal-200 bg-teal-50 p-7 text-center sm:p-9">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 text-white">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="m5 12 4 4L19 6" />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-black text-slate-950">{t.success}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <label className="block">
        <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.1em] text-slate-500">{t.name}</span>
        <input
          name="name"
          required
          autoComplete="name"
          className="min-h-13 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.1em] text-slate-500">{t.email}</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          dir="ltr"
          className="min-h-13 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.1em] text-slate-500">{t.whatsapp}</span>
        <input
          name="whatsapp"
          type="tel"
          required
          autoComplete="tel"
          dir="ltr"
          placeholder={t.whatsappHint}
          className="min-h-13 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.1em] text-slate-500">{t.interest}</span>
        <select
          name="course"
          required
          defaultValue=""
          className="min-h-13 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
        >
          <option value="" disabled>{t.choose}</option>
          {t.options.map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </label>

      {message && (
        <p role="alert" className="rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex min-h-13 w-full items-center justify-center rounded-full bg-[#075248] px-7 py-3.5 text-sm font-black text-white shadow-[0_16px_36px_-20px_rgba(7,82,72,.65)] transition-colors hover:bg-[#096357] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? t.sending : t.submit}
      </button>

      <p className="text-center text-xs leading-5 text-slate-500">{t.privacy}</p>
    </form>
  );
}
