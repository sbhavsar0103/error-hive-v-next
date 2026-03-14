import React from "react";

import { Palette, MousePointerClick, TrendingUp, Layers, Accessibility, BarChart3, Smartphone, Sparkles, LucideIcon } from "lucide-react";

import SpotlightCard from "../../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../../Components/FadeContent/FadeContent";

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
const WhyUIUXMatter: React.FC = () => {
  const services: Service[] = [
    {
      icon: MousePointerClick,
      title: "Improved User Experience",
      description:
        "A well-designed UI/UX ensures users can easily navigate your website or app. Clear layouts and intuitive interfaces improve usability and engagement.",
    },
    {
      icon: Sparkles,
      title: "Higher Customer Engagement",
      description:
        "Beautiful and interactive interfaces keep users engaged and encourage them to explore your digital platform longer.",
    },
    {
      icon: TrendingUp,
      title: "Better Conversion Rates",
      description:
        "Strategic UX design guides users toward key actions such as purchases, sign-ups, and inquiries, improving overall conversions.",
    },
    {
      icon: Palette,
      title: "Stronger Brand Identity",
      description:
        "Consistent visual design, colors, typography, and UI components strengthen brand recognition across digital platforms.",
    },
    {
      icon: Accessibility,
      title: "Improved Accessibility",
      description:
        "Accessible UI/UX ensures your digital products are usable by everyone, including people with disabilities.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Design",
      description:
        "UX decisions backed by analytics, usability testing, and user research help create optimized experiences.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description:
        "Responsive and mobile-first design ensures seamless user experiences across smartphones, tablets, and desktops.",
    },
    {
      icon: Layers,
      title: "Competitive Advantage",
      description:
        "A superior UI/UX design differentiates your product from competitors and builds long-term customer loyalty.",
    },
  ];

  return (
    <section id="services" className="bg-[#060010] py-14 sm:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-white mb-3 tracking-tight" style={{ fontSize: "clamp(1.6rem, 4.5vw, 3rem)" }}>
            Why <span className="text-amber-500">UI/UX Design</span> Matters
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)" }}>
            UI/UX design plays a critical role in creating successful digital products.
            A well-structured user interface and seamless user experience help businesses
            improve engagement, increase conversions, and build strong brand trust.
            Effective UX design ensures users can easily interact with websites,
            mobile applications, and SaaS platforms.
          </p>
        </div>

        {/* Service Cards Grid */}
        <FadeContent blur={false} duration={200} initialOpacity={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <p className="sr-only">
              Error Hive Solutions provides professional UI UX design services including
              user experience research, interface design, mobile app UX, website UX
              optimization, usability testing, and product design for startups and enterprises.
            </p>
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <SpotlightCard key={service.title} className="h-full cursor-pointer">
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
                      <ShinyText text={service.description} disabled={false} speed={3} />
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

export default WhyUIUXMatter;