import type { Metadata } from "next";
import AboutUs from "@/app/Pages/AboutUs/AboutUs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About Us | Error Hive Solutions",
  description:
    "Learn about Error Hive Solutions, our mission, vision, and the expert team behind our AI and Custom Software Development services.",
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
