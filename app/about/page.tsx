import type { Metadata } from "next";
import AboutUs from "@/app/Pages/AboutUs/AboutUs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About Error Hive Solutions | AI & Software Development Company India",
  description:
    "Learn about Error Hive Solutions — our team, mission, and approach to building AI-powered software and custom digital products for businesses globally.",
  keywords: [
    "About Error Hive",
    "AI Development Company",
    "Software Development Experts",
    "Tech Company India"
  ],
  canonical: "/about",
});

export default function AboutPage() {
  return <AboutUs />;
}
