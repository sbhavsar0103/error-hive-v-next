import React from "react";
import SpotlightCard from "../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../Components/FadeContent/FadeContent";
import { Code, Brain, Globe, Database, Smartphone, Briefcase, Layout, Search, AppWindow, LucideIcon } from "lucide-react";
import Link from "next/link";

/* ----------------------------------
 Types
-----------------------------------*/
interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

/* ----------------------------------
 Component
-----------------------------------*/
const OurServices: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions for unique business needs",
      href: "/services/custom-software-development",
    },
    {
      id: 2,
      icon: Globe,
      title: "Web App Development",
      description: "Scalable, responsive, and modern web applications",
      href: "/services/web-development",
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform apps for iOS and Android",
      href: "/services/mobile-development",
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Business Software Consulting",
      description: "Expert guidance for software planning and growth",
      href: "/services/business-software-consulting",
    },
    {
      id: 5,
      icon: Layout,
      title: "UI/UX Design and Development",
      description: "Engaging, user-centered digital experiences",
      href: "/services/ui-ux-design",
    },
    {
      id: 6,
      icon: Brain,
      title: "AI Solutions",
      description: "Smart automation with machine learning models",
      href: "/services/ai-solutions",
    },
    {
      id: 7,
      icon: Database,
      title: "Data Preprocessing and Cleaning",
      description: "Structured, clean data for reliable insights",
      href: "/services/data-preprocessing",
    },
    {
      id: 8,
      icon: Search,
      title: "Web Scraping",
      description: "Automated extraction of structured web data",
      href: "/services/web-scraping-services",
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
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link href={service.href} key={service.id || index} className="block h-full">
                  <SpotlightCard className="h-full cursor-pointer">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-4 p-3 bg-[#060010] rounded-xl w-fit">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
                      </div>

                      <h3
                        className="font-semibold mb-2 tracking-tight bg-amber-500 bg-clip-text text-transparent"
                        style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)" }}
                      >
                        {service.title}
                      </h3>

                      <p
                        className="text-gray-400 leading-relaxed flex-grow"
                        style={{ fontSize: "clamp(0.85rem, 2.4vw, 0.95rem)" }}
                      >
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