import MobileAppScrapingHero from "@/app/Pages/Services/MobileAppScraping/MobileAppScrapingHero";

export const metadata = {
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
  openGraph: {
    title: "Mobile App Scraping Services | Error Hive",
    description:
      "Automated mobile app data extraction solutions for businesses and analytics.",
    url: "https://error-hive.com/services/mobile-scrapping",
    siteName: "Error Hive",
    type: "website",
  },
  twitter: {
    title: "Mobile App Scraping Services | Error Hive",
    description:
      "Extract structured data from mobile apps with automated scraping solutions.",
  },
};

export default function MobileAppScrapingPage() {
  return <MobileAppScrapingHero />;
}