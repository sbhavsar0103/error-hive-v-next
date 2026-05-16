import type { Metadata } from "next";
import BusinessSoftwareConsultingHero from "@/app/Pages/Services/BusinessSoftwareConsulting/BusinessSoftwareConsultingHero";
import { constructMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata: Metadata = constructMetadata({
  title: "Business Software Consulting Services India | Error Hive Solutions",
  description:
    "Expert software consulting for startups and SMEs. We help you plan, architect, and execute the right technology strategy for long-term business growth.",
  canonical: "/services/business-software-consulting",
});

const serviceSchema = createServiceSchema({
  name: "Business Software Consulting",
  description:
    "Software consulting for startups and SMEs, including technology planning, architecture, workflow automation, and execution strategy.",
  url: "https://www.error-hive.com/services/business-software-consulting",
  serviceType: "Business Software Consulting",
});

export default function BusinessSoftwareConsultingPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <BusinessSoftwareConsultingHero />
    </>
  );
}
