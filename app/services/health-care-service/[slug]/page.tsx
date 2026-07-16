import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SchemaMarkup from "@/components/SchemaMarkup";
import { createFAQSchema } from "@/lib/faqSchema";
import { createServiceSchema } from "@/lib/serviceSchema";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import HealthcareServicePage from "@/app/Pages/Services/HealthCareService/HealthcareServicePage";
import {
  getHealthcareService,
  healthcareServices,
} from "@/app/Pages/Services/HealthCareService/healthcareServicesData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return healthcareServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getHealthcareService(slug);

  if (!service) {
    return constructMetadata({
      title: "Health Care Service | Error-Hive Solutions",
      canonical: "/services/health-care-service",
    });
  }

  return constructMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: `/services/health-care-service/${service.slug}`,
  });
}

export default async function HealthCareServiceDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const service = getHealthcareService(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = createServiceSchema({
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/health-care-service/${service.slug}`,
    serviceType: service.serviceType,
  });

  return (
    <>
      <SchemaMarkup schema={[serviceSchema, createFAQSchema(service.faqs)]} />
      <HealthcareServicePage service={service} />
    </>
  );
}
