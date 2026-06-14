import { ContactHero } from "@/components/contact/ContactHero";
import { ContactCards } from "@/components/contact/ContactCards";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { FAQSection } from "@/components/contact/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <ContactHero />
      <ContactCards />
      <ContactFormSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
