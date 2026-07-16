import type { Metadata } from "next";
import MobileAppScrapingHero from "@/app/Pages/Services/MobileAppScraping/MobileAppScrapingHero";
import { constructMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata: Metadata = constructMetadata({
  title: "Mobile App Data Extraction Services | Error-Hive Solutions",
  description:
    "Extract structured data from mobile applications and APIs for market research, competitive analysis, and business intelligence. Scalable and automated pipelines.",
  canonical: "/services/mobile-scraping",
});

const serviceSchema = createServiceSchema({
  name: "Mobile App Data Extraction",
  description:
    "Structured mobile application and API data extraction for market research, competitive analysis, and business intelligence.",
  url: "https://www.error-hive.com/services/mobile-scraping",
  serviceType: "Mobile App Scraping",
});

export default function MobileAppScrapingPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <MobileAppScrapingHero />
    </>
  );
}
