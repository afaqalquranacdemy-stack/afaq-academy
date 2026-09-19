import type { Metadata } from "next";
import { FreeTrialLanding } from "@/components/landing/FreeTrialLanding";

export const metadata: Metadata = {
  title: "Free Trial | Online Quran, Arabic & Islamic Studies",
  description:
    "Book a free 1-to-1 trial with Afaq Al-Quran Academy. Learn Quran, Arabic, and Islamic Studies online with flexible scheduling and personalized instruction.",
  alternates: {
    canonical: "https://afaqalquran.com/free-trial",
  },
  openGraph: {
    title: "Book a Free Trial | Afaq Al-Quran Academy",
    description:
      "Start with a free 1-to-1 online trial for Quran, Arabic, or Islamic Studies.",
    url: "https://afaqalquran.com/free-trial",
    type: "website",
  },
};

export default function FreeTrialPage() {
  return <FreeTrialLanding />;
}
