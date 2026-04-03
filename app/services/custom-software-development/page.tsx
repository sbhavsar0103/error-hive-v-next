import type { Metadata } from "next";
import CustomSoftwareHero from "@/app/Pages/Services/CustomSoftware/CustomSoftwareHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Custom Software Development Services | Error Hive Solutions",
  description:
    "Error Hive Solutions provides custom software development services including AI-powered applications, enterprise systems, SaaS platforms, and scalable digital solutions tailored to your business needs.",
  keywords: [
    "Custom Software Development",
    "AI Software Development Company",
    "Enterprise Software Solutions",
    "SaaS Development",
    "Software Development Company in India"
  ],
  canonical: "/services/custom-software-development",
});

export default function CustomSoftwarePage() {
  return <CustomSoftwareHero />;
}