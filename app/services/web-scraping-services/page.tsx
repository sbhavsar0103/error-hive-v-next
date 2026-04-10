import type { Metadata } from "next";
import WebDataExtractionHero from "@/app/Pages/Services/WebDataExtraction/WebDataExtractionHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "AI Development Company for SaaS, Custom Software & Automation | Error Hive",
  description:
    "Error Hive is an AI development company helping startups and businesses build SaaS products, custom web applications, and data automation systems from India.",
  keywords: [
    "AI development company",
    "SaaS development",
    "custom software development India",
    "custom web app development",
    "data automation services",
    "web scraping company India"
  ],
  canonical: "/services/web-scraping-services",
});

export default function WebDataExtractionPage() {
  return <WebDataExtractionHero />;
}
