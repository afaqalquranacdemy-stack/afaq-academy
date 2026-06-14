"use client";

import { useRef, useEffect } from "react";

interface MeshGradientProps {
  className?: string;
  colors?: string[];
  speed?: number;
}

const DEFAULT_COLORS = [
  { r: 13, g: 148, b: 136, a: 0.3 },  // teal
  { r: 99, g: 102, b: 241, a: 0.2 },   // indigo
  { r: 245, g: 158, b: 11, a: 0.15 },   // gold
  { r: 6, g: 78, b: 59, a: 0.25 },     // emerald dark
];

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: typeof DEFAULT_COLORS[0];
}

export function MeshGradient({
  className = "",
  speed = 0.4,
}: MeshGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();

    const blobCount = isMobile ? 3 : 5;
    const blobs: Blob[] = [];
    const rect = canvas.getBoundingClientRect();

    for (let i = 0; i < blobCount; i++) {
      blobs.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: Math.random() * 300 + 200,
        color: DEFAULT_COLORS[i % DEFAULT_COLORS.length],
      });
    }

    function animate() {
      if (!canvas || !ctx) return;
      const r = canvas.getBoundingClientRect();
      const w = r.width;
      const h = r.height;

      ctx.clearRect(0, 0, w, h);

      for (const blob of blobs) {
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < -blob.radius) blob.x = w + blob.radius;
        if (blob.x > w + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = h + blob.radius;
        if (blob.y > h + blob.radius) blob.y = -blob.radius;

        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );
        const { r: cr, g, b, a } = blob.color;
        gradient.addColorStop(0, `rgba(${cr}, ${g}, ${b}, ${a})`);
        gradient.addColorStop(1, `rgba(${cr}, ${g}, ${b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ filter: "blur(80px)", opacity: 0.7 }}
    />
  );
}
