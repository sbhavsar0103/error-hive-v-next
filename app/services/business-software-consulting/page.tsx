import type { Metadata } from "next";
import BusinessSoftwareConsultingHero from "@/app/Pages/Services/BusinessSoftwareConsulting/BusinessSoftwareConsultingHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Business Software Consulting Services India | Error Hive Solutions",
  description:
    "Expert software consulting for startups and SMEs. We help you plan, architect, and execute the right technology strategy for long-term business growth.",
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