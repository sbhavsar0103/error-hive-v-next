import type { Metadata } from "next";
import BusinessSoftwareConsultingHero from "@/app/Pages/Services/BusinessSoftwareConsulting/BusinessSoftwareConsultingHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
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
  canonical: "/services/business-software-consulting",
});

export default function BusinessSoftwareConsultingPage() {
  return <BusinessSoftwareConsultingHero />;
}