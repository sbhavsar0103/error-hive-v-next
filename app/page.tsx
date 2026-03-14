import type { Metadata } from "next";
import BannerHero from "@/app/Pages/Home/Home";

export const metadata: Metadata = {
  title: "AI Development Company in India | LLM & Generative AI Experts",
  description:
    "Leading AI Development Company in India helping startups and enterprises build LLM solutions, Generative AI applications, AI automation systems, and scalable web platforms.",
  keywords: [
    "AI Development Company",
    "AI Company India",
    "LLM Development Company",
    "Generative AI Development",
    "AI Automation Services",
  ],
  alternates: {
    canonical: "https://error-hive.com",
  },
};

export default function Home() {
  return <BannerHero />;
}