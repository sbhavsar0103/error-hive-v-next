import type { Metadata } from "next";
import WebDataExtractionHero from "@/app/Pages/Services/WebDataExtraction/WebDataExtractionHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Web Scraping & Data Extraction Services India | Error Hive Solutions",
  description:
    "Scalable web scraping and data extraction services for eCommerce, real estate, finance, and marketplaces. Get structured datasets delivered via API, CSV, or JSON.",
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
