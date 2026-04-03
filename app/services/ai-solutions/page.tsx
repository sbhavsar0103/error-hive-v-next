import type { Metadata } from "next";
import AISolutionsHero from "@/app/Pages/Services/AISolutions/AISolutionsHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "AI Solutions | Error Hive",
  description:
    "Transform your business with AI-powered solutions including automation, machine learning models, and intelligent data processing by Error Hive.",
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