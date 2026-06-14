import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutTeam } from "@/components/about/AboutTeam";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <FinalCTA />
    </main>
  );
}
