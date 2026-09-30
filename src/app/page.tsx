import { Hero } from "@/components/home/Hero";
import { ValueProposition } from "@/components/home/ValueProposition";
import { AboutUs } from "@/components/home/AboutUs";
import { CoursesOverview } from "@/components/home/CoursesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { LatestBlogs } from "@/components/home/LatestBlogs";
import { PricingSection } from "@/components/pricing/PricingSection";
import { PaymentMarquee } from "@/components/shared/PaymentMarquee";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ValueProposition />
      <AboutUs />
      <CoursesOverview />
      <div className="home-defer-section"><HowItWorks /></div>
      <div className="home-defer-section"><Testimonials /></div>
      <div className="home-defer-section home-defer-section-tall"><PricingSection showViewAllButton={true} /></div>
      <div className="home-defer-section home-defer-section-small"><PaymentMarquee /></div>
      <div className="home-defer-section home-defer-section-tall"><LatestBlogs /></div>
      <div className="home-defer-section"><FinalCTA /></div>
    </div>
  );
}
