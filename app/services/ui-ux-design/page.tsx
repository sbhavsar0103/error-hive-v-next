import type { Metadata } from "next";
import UIUXDevelopmentHero from "@/app/Pages/Services/UIUXDevelopment/UIUXDevelopmentHero";
import { constructMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata: Metadata = constructMetadata({
  title: "UI/UX Design & Development Services India | Error-Hive Solutions",
  description:
    "User-centered UI/UX design and front-end development. We create engaging, high-converting digital experiences that align with your brand and business goals.",
  canonical: "/services/ui-ux-design",
});

const serviceSchema = createServiceSchema({
  name: "UI/UX Design & Development",
  description:
    "User-centered UI/UX design and front-end development for high-converting digital experiences.",
  url: "https://www.error-hive.com/services/ui-ux-design",
  serviceType: "UI/UX Design",
});

export default function UIUXDevelopmentPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <UIUXDevelopmentHero />
    </>
  );
}
