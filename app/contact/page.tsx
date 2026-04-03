import type { Metadata } from "next";
import ContactUs from "@/app/Pages/ContactUs/ContactUs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us | Error Hive Solutions",
  description:
    "Get in touch with Error Hive Solutions. We are ready to help you with AI development, software consulting, and customized technological solutions.",
  keywords: [
    "Contact Error Hive",
    "Hire AI Developers",
    "Software Consulting Contact",
    "Tech Support India"
  ],
  canonical: "/contact",
});

export default function ContactUsPage() {
  return <ContactUs />;
}
