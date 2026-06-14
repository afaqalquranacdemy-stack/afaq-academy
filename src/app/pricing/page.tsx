import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingSection } from "@/components/pricing/PricingSection";
import { PaymentMarquee } from "@/components/shared/PaymentMarquee";
import { FAQSection } from "@/components/contact/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <PricingHero />
      <PricingSection showViewAllButton={false} />
      <PaymentMarquee />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
