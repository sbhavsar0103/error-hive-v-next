import type { Metadata } from "next";
import ContactUs from "@/app/Pages/ContactUs/ContactUs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact Error Hive Solutions | Book a Free Strategy Call",
  description:
    "Get in touch with Error Hive Solutions. Book a free 30-minute strategy call to discuss your AI development, software, or data project. We respond within 24 hours.",
  canonical: "/contact",
});

export default function ContactUsPage() {
  return <ContactUs />;
}
