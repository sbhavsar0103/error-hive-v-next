import type { Metadata } from "next";
import MobileDevelopmentHero from "@/app/Pages/Services/MobileDevelopment/MobileDevelopmentHero";
import { constructMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata: Metadata = constructMetadata({
  title: "Mobile App Development Company India | Error Hive Solutions",
  description:
    "Cross-platform iOS and Android mobile app development. We build fast, scalable, and user-friendly mobile applications for startups and growing businesses.",
  canonical: "/services/mobile-development",
});

const serviceSchema = createServiceSchema({
  name: "Mobile App Development",
  description:
    "Cross-platform iOS and Android mobile app development for startups and growing businesses.",
  url: "https://www.error-hive.com/services/mobile-development",
  serviceType: "Mobile App Development",
});

export default function MobileDevelopmentPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <MobileDevelopmentHero />
    </>
  );
}
