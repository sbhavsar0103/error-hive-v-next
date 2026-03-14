import WebDataExtractionHero from "@/app/Pages/Services/WebDataExtraction/WebDataExtractionHero";

export const metadata = {
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
  openGraph: {
    title: "Web Data Extraction Services | Error Hive",
    description:
      "Reliable web scraping and automated data extraction services for businesses and analytics.",
    url: "https://error-hive.com/services/web-scraping-services",
    siteName: "Error Hive",
    type: "website",
  },
  twitter: {
    title: "Web Data Extraction Services | Error Hive",
    description:
      "Extract structured data from websites using automated web scraping solutions.",
  },
};

export default function WebDataExtractionPage() {
  return <WebDataExtractionHero />;
}