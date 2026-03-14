import type { Metadata } from "next";
import BusinessSoftwareConsultingHero from "@/app/Pages/Services/BusinessSoftwareConsulting/BusinessSoftwareConsultingHero";

export const metadata: Metadata = {
  title: "Business Software Consulting Services | Digital Transformation Experts",
  description:
    "Error Hive Solutions offers professional Business Software Consulting services including ERP & CRM implementation, workflow automation, system integration, and scalable enterprise solutions to accelerate digital transformation and business growth.",
  keywords: [
    "Business Software Consulting",
    "Business Software Consulting Services",
    "Digital Transformation Consulting",
    "ERP Implementation Services",
    "CRM Consulting Services",
    "Workflow Automation Solutions",
    "Enterprise Software Consulting",
    "Custom Business Software Development",
  ],
  openGraph: {
    title: "Business Software Consulting Services | Error Hive Solutions",
    description:
      "Strategic software consulting to streamline operations, automate processes, and implement scalable enterprise systems for long-term growth.",
    url: "https://error-hive.com/services/business-software-consulting",
    siteName: "Error Hive Solutions",
    type: "website",
  },
  alternates: {
    canonical: "https://error-hive.com/services/business-software-consulting",
  },
};

export default function BusinessSoftwareConsultingPage() {
  return <BusinessSoftwareConsultingHero />;
}