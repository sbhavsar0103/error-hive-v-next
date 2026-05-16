import type { Metadata } from "next";
import BannerHero from "@/app/Pages/Home/Home";
import { constructMetadata } from "@/lib/seo";

// SEO fix: canonical metadata is kept, obsolete meta keywords are intentionally omitted.
export const metadata: Metadata = constructMetadata({
  title: "AI Development Company in India | LLM & Generative AI Experts | Error Hive Solutions",
  description:
    "Error Hive Solutions is a leading AI development company in India. We build LLM applications, generative AI systems, web scraping pipelines, and custom software for startups and enterprises.",
  canonical: "/",
});

export default function Home() {
  return <BannerHero />;
}
