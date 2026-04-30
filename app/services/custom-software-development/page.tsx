import type { Metadata } from "next";
import CustomSoftwareHero from "@/app/Pages/Services/CustomSoftware/CustomSoftwareHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Custom Software Development Company India | Error Hive Solutions",
  description:
    "End-to-end custom software development for startups and enterprises. We build scalable, production-ready web and mobile applications tailored to your business goals.",
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