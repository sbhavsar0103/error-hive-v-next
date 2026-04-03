import type { Metadata } from "next";
import WebDevelopmentHero from "@/app/Pages/Services/WebDevelopment/WebDevelopmentHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Web Development Company in India | Custom Website Development",
  description:
    "Professional web development company in India offering custom website development, responsive design, eCommerce solutions, and scalable web applications. Build fast, secure, SEO-friendly websites with Error Hive Solutions.",
  keywords: [
    "Web Development Company",
    "Custom Website Development",
    "Web Development Services India",
    "Responsive Website Development",
    "SEO Friendly Website Development",
    "Full Stack Web Development",
  ],
  canonical: "/services/web-development",
});

export default function WebDevelopmentPage() {
  return <WebDevelopmentHero />;
}