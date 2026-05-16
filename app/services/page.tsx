import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import SpotlightCard from "../Components/SpotlightCard/SpotlightCard";

export const metadata: Metadata = constructMetadata({
  title: "All Services | Error Hive Solutions",
  description:
    "Explore our complete range of software development, AI solutions, web scraping, and consulting services designed to scale your business.",
  canonical: "/services",
});

const allServices = [
  {
    title: 'Custom Software Development',
    description: 'Tailored enterprise solutions for unique business needs.',
    href: '/services/custom-software-development'
  },
  {
    title: 'Web App Development',
    description: 'Scalable, responsive, and modern web applications.',
    href: '/services/web-development'
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform native applications for iOS and Android.',
    href: '/services/mobile-development'
  },
  {
    title: 'Business Software Consulting',
    description: 'Expert technological guidance for software planning and growth.',
    href: '/services/business-software-consulting'
  },
  {
    title: 'UI/UX Design and Development',
    description: 'Engaging, user-centered digital experiences that drive conversions.',
    href: '/services/ui-ux-design'
  },
  {
    title: 'AI Solutions',
    description: 'Smart automation with LLMs and machine learning models.',
    href: '/services/ai-solutions'
  },
  {
    title: 'Data Preprocessing and Cleaning',
    description: 'Structured, clean data for reliable machine learning insights.',
    href: '/services/data-preprocessing'
  },
  {
    title: 'Web Scraping',
    description: 'Automated extraction of structured web data at scale.',
    href: '/services/web-scraping-services'
  },
  {
    title: 'Mobile App Scraping',
    description: 'Extract valuable market data directly from mobile applications.',
    href: '/services/mobile-scraping'
  },
  {
    title: 'Health Care Service',
    description: 'RCM, credentialing, patient enablement, and billing compliance support.',
    href: '/services/health-care-service'
  }
];

export default function ServicesIndexPage() {
  return (
    <>
      <div className="min-h-[90vh] bg-[#060010] text-white pt-32 pb-20 px-6 sm:px-8 relative overflow-hidden flex flex-col justify-center">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-500 tracking-tight mb-6">
              Our Services
            </h1>
            <p className="text-lg text-amber-200/70 max-w-3xl mx-auto leading-relaxed">
              From intelligent AI solutions to full-stack custom software and large-scale data extraction pipelines, we provide comprehensive technology services to accelerate your business growth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service, index) => (
              <Link 
                key={index} 
                href={service.href}
                className="group block h-full transition-transform duration-300 hover:-translate-y-1"
              >
                <SpotlightCard className="h-full cursor-pointer">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4 p-3 bg-[#060010] rounded-xl w-fit">
                      <ArrowRight className="w-6 h-6 text-amber-500 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 tracking-tight bg-amber-500 bg-clip-text text-transparent">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-amber-500/20" />
    </>
  );
}
