import type { Metadata } from "next";
import UIUXDevelopmentHero from "@/app/Pages/Services/UIUXDevelopment/UIUXDevelopmentHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "UI/UX Design & Development | Error Hive",
  description:
    "Create engaging and user-centered digital experiences with Error Hive's UI/UX design and development services. We design intuitive interfaces that improve user satisfaction and business growth.",
  keywords: [
    "UI UX design services",
    "user experience design",
    "user interface development",
    "website UI UX design",
    "Error Hive UI UX services"
  ],
  canonical: "/services/ui-ux-design",
});

export default function UIUXDevelopmentPage() {
  return <UIUXDevelopmentHero />;
}