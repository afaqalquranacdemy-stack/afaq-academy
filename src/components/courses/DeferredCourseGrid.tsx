"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const CourseGrid = dynamic(
  () => import("@/components/courses/CourseGrid").then((module) => module.CourseGrid),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="min-h-24 w-full bg-[#F8FAFC]"
      />
    ),
  }
);

interface DeferredCourseGridProps {
  initialQuery?: string;
  initialCategory?: string;
  initialLevel?: string;
  initialIntent?: string;
}

export function DeferredCourseGrid(props: DeferredCourseGridProps) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const hasDirectIntent = Boolean(
    props.initialQuery?.trim() ||
    (props.initialCategory && props.initialCategory !== "all") ||
    (props.initialLevel && props.initialLevel !== "all") ||
    props.initialIntent?.trim()
  );
  const [ready, setReady] = useState(hasDirectIntent);

  useEffect(() => {
    if (ready) return;

    if (window.location.hash === "#courses-grid") {
      setReady(true);
      return;
    }

    const node = anchorRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setReady(true);
        observer.disconnect();
      },
      {
        rootMargin: "1200px 0px 1200px 0px",
        threshold: 0,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ready]);

  return (
    <div id="courses-grid" ref={anchorRef} className="scroll-mt-20">
      {ready ? (
        <CourseGrid {...props} />
      ) : (
        <div
          aria-hidden="true"
          className="min-h-24 w-full bg-[#F8FAFC]"
        />
      )}
    </div>
  );
}
