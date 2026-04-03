import type { Metadata } from "next";
import MobileAppScrapingHero from "@/app/Pages/Services/MobileAppScraping/MobileAppScrapingHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Mobile App Scraping Services | Error Hive",
  description:
    "Extract valuable data from mobile applications with Error Hive's mobile app scraping solutions. Automate data collection and gain actionable insights.",
  keywords: [
    "mobile app scraping",
    "app data extraction",
    "mobile data scraping service",
    "automated mobile data collection",
    "Error Hive scraping services"
  ],
  canonical: "/services/mobile-scrapping",
});

export default function MobileAppScrapingPage() {
  return <MobileAppScrapingHero />;
}