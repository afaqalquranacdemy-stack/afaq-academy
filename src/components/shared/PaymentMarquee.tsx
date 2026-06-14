"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function PaymentMarquee() {
  const { isRtl } = useLanguage();

  const logos = [
    { name: "Visa", url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" },
    { name: "Mastercard", url: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" },
    { name: "PayPal", url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
    { name: "Apple Pay", url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" },
    { name: "Google Pay", url: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" },
    { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  ];

  // Double the array for seamless infinite scroll
  const scrollers = [...logos, ...logos, ...logos];

  return (
    <div className="py-6 border-y border-slate-100 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 mb-4 text-center">
        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
          {isRtl ? "طرق دفع آمنة 100%" : "100% Secure Payment Methods"}
        </p>
      </div>
      
      <div className="relative flex max-w-[100vw] overflow-hidden group">
        <motion.div
          animate={{ x: isRtl ? ["0%", "50%"] : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // 30 seconds for a full cycle
          }}
          className="flex gap-16 items-center w-max px-8"
        >
          {scrollers.map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
