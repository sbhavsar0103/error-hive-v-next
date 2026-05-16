import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { constructMetadata } from "@/lib/seo";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return constructMetadata({
      title: "Blog Post Not Found | Error Hive Solutions",
      description: "The requested blog post could not be found.",
      canonical: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${post.meta.title} | Error Hive Solutions`,
    description: post.meta.description,
    canonical: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#060010] px-6 py-32 text-white sm:px-8">
      <article className="prose prose-invert prose-amber mx-auto max-w-3xl">
        <div className="mb-10 not-prose">
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
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-amber-500 sm:text-5xl">
            {post.meta.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-300">
            {post.meta.description}
          </p>
        </div>

        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
