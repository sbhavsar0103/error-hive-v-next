import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse, ShieldCheck } from "lucide-react";

import SpotlightCard from "@/app/Components/SpotlightCard/SpotlightCard";
import SchemaMarkup from "@/components/SchemaMarkup";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import {
  healthcareHub,
  healthcareServices,
} from "@/app/Pages/Services/HealthCareService/healthcareServicesData";

export const metadata: Metadata = constructMetadata({
  title: healthcareHub.metaTitle,
  description: healthcareHub.metaDescription,
  canonical: "/services/health-care-service",
});

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: healthcareHub.title,
  description: healthcareHub.description,
  itemListElement: healthcareServices.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${SITE_URL}/services/health-care-service/${service.slug}`,
  })),
};

export default function HealthCareServiceHubPage() {
  return (
    <>
      <SchemaMarkup schema={itemListSchema} />
      <section className="relative min-h-[90vh] overflow-hidden bg-[#060010] px-6 pt-32 pb-20 text-white sm:px-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-sm font-medium uppercase tracking-wider text-amber-500">
              Healthcare Operations
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Health Care Service
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-amber-200/70">
              {healthcareHub.description}
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {["Revenue integrity", "Compliance-aware workflows", "Patient-first operations"].map((item) => (
              <SpotlightCard key={item} className="h-full bg-white/5 text-center">
                <div className="relative z-10">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#060010]">
                    <ShieldCheck className="h-6 w-6 text-amber-500" />
                  </div>
                  <p className="font-semibold text-amber-100/80">{item}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {healthcareServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/health-care-service/${service.slug}`}
                className="group block h-full transition-transform duration-300 hover:-translate-y-1"
              >
                <SpotlightCard className="h-full cursor-pointer">
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-5 w-fit rounded-xl bg-[#060010] p-3">
                      <HeartPulse className="h-7 w-7 text-amber-500" />
                    </div>
                    <h2 className="mb-3 text-xl font-semibold tracking-tight text-amber-500">
                      {service.title}
                    </h2>
                    <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-400">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500">
                      Explore service
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <hr className="border-amber-500/20" />
    </>
  );
}
