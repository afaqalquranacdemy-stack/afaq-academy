import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import { BlogDetailHero } from "@/components/blog-detail/BlogDetailHero";
import { BlogContent } from "@/components/blog-detail/BlogContent";
import { RelatedBlogs } from "@/components/blog-detail/RelatedBlogs";

// Generate static parameters for all known blog slugs
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <BlogDetailHero post={post} />
      <BlogContent post={post} />
      <RelatedBlogs currentPost={post} />
    </main>
  );
}
