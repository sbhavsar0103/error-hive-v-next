import type { Metadata } from "next";
import CustomSoftwareHero from "@/app/Pages/Services/CustomSoftware/CustomSoftwareHero";
import { constructMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata: Metadata = constructMetadata({
  title: "Custom Software Development Company India | Error Hive Solutions",
  description:
    "End-to-end custom software development for startups and enterprises. We build scalable, production-ready web and mobile applications tailored to your business goals.",
  canonical: "/services/custom-software-development",
});

const serviceSchema = createServiceSchema({
  name: "Custom Software Development",
  description:
    "End-to-end custom software development for startups and enterprises, including scalable web applications, SaaS platforms, and production-ready business tools.",
  url: "https://www.error-hive.com/services/custom-software-development",
  serviceType: "Custom Software Development",
});

export default function CustomSoftwarePage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <CustomSoftwareHero />
    </>
  );
}
