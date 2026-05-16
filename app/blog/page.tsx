import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { getAllBlogPosts } from "@/lib/blog";

// SEO growth fix: blog infrastructure supports incremental MDX publishing.
export const metadata: Metadata = constructMetadata({
  title: "Blog | Error Hive Solutions",
  description:
    "Insights from Error Hive Solutions on AI development, LLM applications, web scraping, automation, and custom software engineering.",
  canonical: "/blog",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-[#060010] px-6 py-32 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-amber-500 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Practical notes on AI development, automation, web scraping, and
            building software products that survive real users.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-lg border border-amber-500/20 bg-white/5 p-6 transition-colors hover:border-amber-500/50 hover:bg-white/10"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-amber-100/70">
                  <time dateTime={post.meta.publishedAt}>
                    {new Date(post.meta.publishedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-amber-500">
                  {post.meta.title}
                </h2>
                <p className="mt-3 text-gray-300">{post.meta.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-500">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-amber-500/20 bg-white/5 p-8 text-gray-300">
            Blog infrastructure is ready. Add MDX files to{" "}
            <code className="text-amber-500">content/blog</code> to publish
            articles.
          </div>
        )}
      </div>
    </main>
  );
}
