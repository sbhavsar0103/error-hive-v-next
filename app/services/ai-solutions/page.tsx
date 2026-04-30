import type { Metadata } from "next";
import AISolutionsHero from "@/app/Pages/Services/AISolutions/AISolutionsHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "LLM & Generative AI Development Services India | Error Hive Solutions",
  description:
    "Custom LLM development, generative AI applications, AI automation, and machine learning model deployment for startups and enterprises. Based in India, serving globally.",
  keywords: [
    "AI solutions",
    "machine learning services",
    "AI automation",
    "business AI integration",
  ],
  canonical: "/services/ai-solutions",
});

export default function AISolutionsHeroPage() {
  return <AISolutionsHero />;
}