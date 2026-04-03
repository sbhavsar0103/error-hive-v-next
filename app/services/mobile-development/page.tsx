import type { Metadata } from "next";
import MobileDevelopmentHero from "@/app/Pages/Services/MobileDevelopment/MobileDevelopmentHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Mobile App Development Company | iOS & Android App Development Services",
  description:
    "We are a leading mobile app development company offering custom iOS, Android, and cross-platform app development services. Build scalable, secure, and high-performance mobile applications tailored to your business goals.",
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