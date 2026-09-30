import { Hero } from "@/components/home/Hero";
import { ValueProposition } from "@/components/home/ValueProposition";
import { AboutUs } from "@/components/home/AboutUs";
import { CoursesOverview } from "@/components/home/CoursesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { DeferredHomeTail } from "@/components/home/DeferredHomeTail";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="home-defer-section"><ValueProposition /></div>
      <div className="home-defer-section"><AboutUs /></div>
      <div className="home-defer-section"><CoursesOverview /></div>
      <div className="home-defer-section"><HowItWorks /></div>
      <DeferredHomeTail />
    </div>
  );
}
