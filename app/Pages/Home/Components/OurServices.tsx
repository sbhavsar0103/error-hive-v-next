import React from "react";
import SpotlightCard from "../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../Components/FadeContent/FadeContent";
import {
  Code,
  Brain,
  MessageSquare,
  Globe,
  Database,
  Cloud,
  Cpu,
  Zap,
  LucideIcon,
} from "lucide-react";

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
      icon: Code,
      title: "Python Development",
      description:
        "Build robust and scalable applications with Python, leveraging its powerful libraries and frameworks for enterprise solutions.",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "Implement cutting-edge AI solutions to automate processes, gain insights, and drive innovation in your business.",
    },
    {
      icon: MessageSquare,
      title: "LLM Integration",
      description:
        "Harness the power of Large Language Models to create intelligent chatbots, content generation, and natural language processing solutions.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Create stunning, responsive, and high-performance web applications using modern frameworks and best practices.",
    },
    {
      icon: Database,
      title: "Data Science",
      description:
        "Transform raw data into actionable insights with advanced analytics, visualization, and predictive modeling.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Deploy and manage scalable cloud infrastructure on AWS, Azure, or GCP with optimized performance and cost.",
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description:
        "Develop custom ML models for classification, regression, clustering, and recommendation systems tailored to your needs.",
    },
    {
      icon: Zap,
      title: "API Development",
      description:
        "Design and build RESTful and GraphQL APIs that are secure, efficient, and easy to integrate with your applications.",
    },
  ];

  return (
    <section id="services" className="bg-[#060010] py-14 sm:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-white mb-3 tracking-tight" style={{ fontSize: "clamp(1.6rem, 4.5vw, 3rem)" }}>
            Our <span className="text-amber-500">Services</span>
          </h2>

          <p
            className="text-gray-400 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)" }}
          >
            We deliver cutting-edge technology solutions tailored to your business needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <FadeContent
          blur={false}
          duration={200}

          initialOpacity={0}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <SpotlightCard key={index} className="h-full">
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
              );
            })}
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default OurServices;