"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Testimonials = dynamic(
  () => import("@/components/home/Testimonials").then((m) => m.Testimonials),
  { ssr: false }
);

const PricingSection = dynamic(
  () => import("@/components/pricing/PricingSection").then((m) => m.PricingSection),
  { ssr: false }
);

const PaymentMarquee = dynamic(
  () => import("@/components/shared/PaymentMarquee").then((m) => m.PaymentMarquee),
  { ssr: false }
);

const LatestBlogs = dynamic(
  () => import("@/components/home/LatestBlogs").then((m) => m.LatestBlogs),
  { ssr: false }
);

const FinalCTA = dynamic(
  () => import("@/components/home/FinalCTA").then((m) => m.FinalCTA),
  { ssr: false }
);

export function DeferredHomeTail() {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;

    const node = anchorRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setReady(true);
        observer.disconnect();
      },
      { rootMargin: "1800px 0px 1800px 0px", threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ready]);

  return (
    <div ref={anchorRef}>
      {ready ? (
        <>
          <div className="home-defer-section"><Testimonials /></div>
          <div className="home-defer-section home-defer-section-tall"><PricingSection showViewAllButton={true} /></div>
          <div className="home-defer-section home-defer-section-small"><PaymentMarquee /></div>
          <div className="home-defer-section home-defer-section-tall"><LatestBlogs /></div>
          <div className="home-defer-section"><FinalCTA /></div>
        </>
      ) : (
        <div aria-hidden="true" className="h-px w-full" />
      )}
    </div>
  );
}
