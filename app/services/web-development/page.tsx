import type { Metadata } from "next";
import WebDevelopmentHero from "@/app/Pages/Services/WebDevelopment/WebDevelopmentHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Web App Development Services India | Error Hive Solutions",
  description:
    "Scalable and modern web application development using React, Next.js, and Node.js. From MVPs to enterprise platforms, we deliver fast and reliable web solutions.",
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