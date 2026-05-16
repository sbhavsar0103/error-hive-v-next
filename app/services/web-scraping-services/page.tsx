import type { Metadata } from "next";
import WebDataExtractionHero from "@/app/Pages/Services/WebDataExtraction/WebDataExtractionHero";
import { constructMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { createFAQSchema } from "@/lib/faqSchema";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata: Metadata = constructMetadata({
  title: "Web Scraping & Data Extraction Services India | Error Hive Solutions",
  description:
    "Scalable web scraping and data extraction services for eCommerce, real estate, finance, and marketplaces. Get structured datasets delivered via API, CSV, or JSON.",
  canonical: "/services/web-scraping-services",
});

const webScrapingFaqs = [
  {
    question: "What formats can you deliver scraped data in?",
    answer:
      "We deliver data as CSV, JSON, Excel, or directly into your database or API endpoint. We can also set up automated scheduled delivery.",
  },
  {
    question: "Can you scrape websites that require login or have anti-bot protection?",
    answer:
      "Yes. We have experience handling CAPTCHAs, rate limiting, JavaScript-rendered pages, and session-based authentication using ethical proxy and browser automation techniques.",
  },
  {
    question: "How accurate is your scraped data?",
    answer:
      "We implement automated validation and cleaning pipelines to ensure 99%+ accuracy. Data is cross-checked before delivery.",
  },
];

const serviceSchema = createServiceSchema({
  name: "Web Scraping & Data Extraction Services",
  description:
    "Scalable web scraping and data extraction services for eCommerce, real estate, finance, marketplaces, and business intelligence workflows.",
  url: "https://www.error-hive.com/services/web-scraping-services",
  serviceType: "Web Scraping",
});

export default function WebDataExtractionPage() {
  return (
    <>
      <SchemaMarkup schema={[serviceSchema, createFAQSchema(webScrapingFaqs)]} />
      <WebDataExtractionHero />
    </>
  );
}