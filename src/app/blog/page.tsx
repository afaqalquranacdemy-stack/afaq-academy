import { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog | Walamnaho Academy",
  description: "Articles, reflections, and news from our scholars to enrich your journey of seeking knowledge.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <BlogHero />
      <BlogGrid />
    </main>
  );
}
