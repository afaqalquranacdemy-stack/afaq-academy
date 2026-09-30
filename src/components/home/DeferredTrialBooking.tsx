"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const TrialBooking = dynamic(
  () => import("./TrialBooking").then((m) => m.TrialBooking),
  { ssr: false }
);

export function DeferredTrialBooking() {
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
      { rootMargin: "1200px 0px 1200px 0px", threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ready]);

  return (
    <div ref={anchorRef}>
      {ready ? <TrialBooking /> : <div aria-hidden="true" className="h-px w-full" />}
    </div>
  );
}
