import type { Metadata } from "next";
import MobileDevelopmentHero from "@/app/Pages/Services/MobileDevelopment/MobileDevelopmentHero";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Mobile App Development Company | Custom iOS & Android Apps",
    description:
      "Build scalable and high-performance mobile apps with our expert iOS, Android, and cross-platform development services.",
    type: "website",
  },
  twitter: {
    title: "Mobile App Development Company",
    description:
      "Custom mobile app development services for startups and enterprises.",
  },
};

export default function MobileDevelopmentPage() {
  return <MobileDevelopmentHero />;
}