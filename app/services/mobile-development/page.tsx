import type { Metadata } from "next";
import MobileDevelopmentHero from "@/app/Pages/Services/MobileDevelopment/MobileDevelopmentHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Mobile App Development Company India | Error Hive Solutions",
  description:
    "Cross-platform iOS and Android mobile app development. We build fast, scalable, and user-friendly mobile applications for startups and growing businesses.",
  keywords: [
    "Mobile App Development Company",
    "iOS App Development",
    "Android App Development",
    "Cross Platform App Development",
    "Custom Mobile App Development",
    "Mobile Application Development Services",
    "App Development Company"
  ],
  canonical: "/services/mobile-development",
});

export default function MobileDevelopmentPage() {
  return <MobileDevelopmentHero />;
}