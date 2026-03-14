import React from "react";
import SpotlightCard from "../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../Components/FadeContent/FadeContent";
import { Code, Brain, MessageSquare, Globe, Database, Cloud, Cpu, Zap, LucideIcon } from "lucide-react";
import Link from "next/link";

/* ----------------------------------
 Types
-----------------------------------*/
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

/* ----------------------------------
 Component
-----------------------------------*/
const OurServices: React.FC = () => {
  const services: Service[] = [
    {
      icon: Brain,
      title: "AI Development Services",
      description:
        "Custom AI solutions including automation, predictive systems, and enterprise-grade artificial intelligence applications.",
    },
    {
      icon: MessageSquare,
      title: "Web & Application Scraping",
      description:
        "Structured data extraction from websites and applications for market research, lead generation, and competitive analysis.",
    },
    {
      icon: Cpu,
      title: "Machine Learning Solutions",
      description:
        "Custom ML models for classification, forecasting, recommendation engines, and data-driven decision systems.",
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Scalable, secure, and high-performance enterprise software tailored to your business needs.",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "Modern, responsive, and SEO-optimized web applications using React, Next.js, and scalable architectures.",
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description:
        "Transform data into insights with visualization, predictive modeling, and business intelligence solutions.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Engineering",
      description:
        "AWS, Azure, and GCP deployment with scalable cloud architecture and CI/CD automation.",
    },
    {
      icon: Zap,
      title: "API Development & Integration",
      description:
        "Secure REST and GraphQL APIs designed for scalability, performance, and seamless integrations.",
    },
  ];

  return (
    <section id="services" className="bg-[#060010] py-14 sm:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-white mb-3 tracking-tight" style={{ fontSize: "clamp(1.6rem, 4.5vw, 3rem)" }}>
            AI Development <span className="text-amber-500"> & </span> Software Services
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)" }}>
            We provide end-to-end AI development, LLM integration, web development,
            cloud engineering, and custom software solutions for startups and enterprises.
          </p>
        </div>

        {/* Service Cards Grid */}
        <FadeContent blur={false} duration={200} initialOpacity={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <p className="sr-only">
              Error Hive Solutions is a leading AI development company in India
              providing LLM development, generative AI solutions, machine learning,
              web development, cloud engineering, and enterprise software services.
            </p>
            {services.map((service) => {
              const Icon = service.icon;
              const slug = service.title.toLowerCase().replace(/\s+/g, "-");

              return (
                <Link key={slug} href={`/services/${slug}`} className="block">
                  <SpotlightCard className="h-full cursor-pointer">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-4 p-3 bg-[#060010] rounded-xl w-fit">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
                      </div>

                      <h3 className="font-semibold mb-2 tracking-tight bg-amber-500 bg-clip-text text-transparent" style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)" }}>
                        {service.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed flex-grow" style={{ fontSize: "clamp(0.85rem, 2.4vw, 0.95rem)" }}>
                        <ShinyText
                          text={service.description}
                          disabled={false}
                          speed={3}
                        />
                      </p>
                    </div>
                  </SpotlightCard>
                </Link>
              );
            })}
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default OurServices;