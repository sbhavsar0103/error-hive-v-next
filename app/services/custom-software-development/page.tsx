import { Metadata } from "next";
import CustomSoftwareHero from "@/app/Pages/Services/CustomSoftware/CustomSoftwareHero";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Custom Software Development Services | Error Hive Solutions",
    description:
      "Build scalable, secure, and AI-powered custom software solutions with Error Hive Solutions.",
    url: "https://error-hive.com/services/custom-software",
    siteName: "Error Hive Solutions",
    type: "website",
  },
};

export default function CustomSoftwarePage() {
  return <CustomSoftwareHero />;
}