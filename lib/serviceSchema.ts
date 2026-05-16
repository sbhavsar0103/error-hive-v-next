import { SITE_URL } from "@/lib/seo";

export function createServiceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Error Hive Solutions",
      url: SITE_URL,
    },
    areaServed: ["IN", "US", "GB", "AE"],
    url,
  };
}
