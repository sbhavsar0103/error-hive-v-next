import React from "react";
import SpotlightCard from "../../../Components/SpotlightCard/SpotlightCard";
import FadeContent from "../../../Components/FadeContent/FadeContent";
import { Atom } from "lucide-react";

/* ----------------------------------
 Types
-----------------------------------*/
interface Advantage {
  title: string;
  desc: string;
}

interface CardItem {
  title: string;
  desc: string;
}

/* ----------------------------------
 Component
-----------------------------------*/
const WhyChooseUs: React.FC = () => {
  const advantages: Advantage[] = [
    {
      title: "Specialized AI & LLM Expertise",
      desc: "Our team specializes in AI development, LLM integration, machine learning, and intelligent automation solutions tailored for modern businesses.",
    },
    {
      title: "End-to-End Software Development",
      desc: "From product strategy and UI/UX to deployment and scaling, we provide complete custom software development under one roof.",
    },
    {
      title: "Proven Technical Excellence",
      desc: "We follow best practices in architecture, security, and performance optimization to deliver enterprise-grade AI and web applications.",
    },
    {
      title: "Scalable & Future-Ready Systems",
      desc: "Our solutions are built to scale with your growth, ensuring long-term adaptability and technical sustainability.",
    },
  ];

  const cards: CardItem[] = [
    {
      title: "Experienced AI Engineers",
      desc: "Our developers specialize in AI systems, LLM architectures, and scalable software engineering.",
    },
    {
      title: "Scalable Architecture",
      desc: "We design systems built for performance, growth, and enterprise-level scalability.",
    },
    {
      title: "Business-Focused Strategy",
      desc: "We align technology decisions with measurable business outcomes and ROI.",
    },
    {
      title: "Agile & Transparent Process",
      desc: "Iterative development cycles ensure faster delivery, clear communication, and continuous improvement.",
    },
  ];

  return (
    <section id="why-choose-us" className="bg-[#060010] py-14 sm:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-white mb-3 tracking-tight" style={{ fontSize: "clamp(1.6rem, 4.5vw, 3rem)" }}>
            Why We’re a Trusted <span className="text-amber-500">AI Development Company</span>
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)" }}
          >
            We deliver scalable AI development, LLM integration, and custom software
            solutions with a strong focus on performance, reliability, and long-term business growth.
          </p>
        </div>

        <FadeContent blur={false} duration={200} initialOpacity={0}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <ul className="space-y-6 sm:space-y-8">
                {advantages.map((adv, index) => (
                  <li key={index} className="flex items-start gap-4 text-white">
                    <div className="p-3 bg-amber-500/10 rounded-full border border-amber-500/30 mt-1">
                      <Atom className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1 tracking-tight bg-amber-500 bg-clip-text text-transparent" style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)" }}>
                        {adv.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed" style={{ fontSize: "clamp(0.85rem, 2.4vw, 0.95rem)" }}>
                        {adv.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Cards */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              {/* Row 1 */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {cards.slice(0, 2).map((card, index) => (
                  <SpotlightCard key={index} className="w-full sm:w-[260px] bg-[#0a001b] p-5 sm:p-6 rounded-2xl">
                    <h3 className="font-semibold mb-2 tracking-tight bg-amber-500 bg-clip-text text-transparent" style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)" }}>
                      {card.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed" style={{ fontSize: "clamp(0.85rem, 2.4vw, 0.95rem)" }}>
                      {card.desc}
                    </p>
                  </SpotlightCard>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2 sm:mt-4">
                {cards.slice(2, 4).map((card, index) => (
                  <SpotlightCard key={index} className="w-full sm:w-[260px] bg-[#0a001b] p-5 sm:p-6 rounded-2xl">
                    <h3 className="font-semibold mb-2 tracking-tight bg-amber-500 bg-clip-text text-transparent" style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)" }}>
                      {card.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed"
                      style={{ fontSize: "clamp(0.85rem, 2.4vw, 0.95rem)" }}
                    >
                      {card.desc}
                    </p>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
      <p className="sr-only">
        Error Hive Solutions is a trusted AI development company in India
        offering LLM development, generative AI applications, machine learning,
        and enterprise software engineering services for startups and enterprises.
      </p>
    </section>
  );
};

export default WhyChooseUs;