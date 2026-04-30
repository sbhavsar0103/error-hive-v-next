import type { Metadata } from "next";
import MobileAppScrapingHero from "@/app/Pages/Services/MobileAppScraping/MobileAppScrapingHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Mobile App Data Extraction Services | Error Hive Solutions",
  description:
    "Extract structured data from mobile applications and APIs for market research, competitive analysis, and business intelligence. Scalable and automated pipelines.",
  keywords: [
    "mobile app scraping",
    "app data extraction",
    "mobile data scraping service",
    "automated mobile data collection",
    "Error Hive scraping services"
  ],
  canonical: "/services/mobile-scraping",
});

export default function MobileAppScrapingPage() {
  return <MobileAppScrapingHero />;
}