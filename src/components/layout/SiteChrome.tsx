"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFocusedLandingPage =
    pathname === "/free-trial" || pathname.startsWith("/free-trial/");

  if (isFocusedLandingPage) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
