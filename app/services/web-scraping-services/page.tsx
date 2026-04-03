import type { Metadata } from "next";
import WebDataExtractionHero from "@/app/Pages/Services/WebDataExtraction/WebDataExtractionHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Web Data Extraction Services | Error Hive",
  description:
    "Automate data collection with Error Hive's web data extraction services. Extract structured data from websites for analytics, business intelligence, and automation.",
  keywords: [
    "web scraping services",
    "web data extraction",
    "website data scraping",
    "automated data collection",
    "Error Hive scraping solutions"
  ],
  canonical: "/services/web-scraping-services",
});

export default function WebDataExtractionPage() {
  return <WebDataExtractionHero />;
}