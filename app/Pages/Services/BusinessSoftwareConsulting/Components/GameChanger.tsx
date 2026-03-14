import React from "react";
import { Target, Eye, Heart } from "lucide-react";

import SpotlightCard from "../../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../../Components/FadeContent/FadeContent";

import GameChangerHeader from "./GameChangerHeader";

const GameChanger = () => {
  const GameChangerCards = [
    {
      icon: Target,
      title: "70% of business processes",
      description:
        "can be automated with the right software strategy, reducing operational costs and improving efficiency.",
    },
    {
      icon: Eye,
      title: "2x faster decision-making",
      description:
        "through real-time dashboards, analytics, and integrated business intelligence systems.",
    },
    {
      icon: Heart,
      title: "40% increase in productivity",
      description:
        "when companies implement customized ERP, CRM, and workflow automation solutions.",
    },
  ];
  
  return (
    <section
      id="mission"
      className="bg-[#060010] py-24 px-6 sm:px-8 lg:px-12"
    >
      <GameChangerHeader />

      <div className="max-w-7xl mx-auto mt-16">
        <FadeContent blur={false} duration={300} initialOpacity={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GameChangerCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <SpotlightCard
                  key={index}
                  className="h-full transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="relative z-10 flex flex-col h-full p-2">

                    {/* Icon */}
                    <div className="mb-6 p-4 bg-white/5 backdrop-blur-sm rounded-2xl w-fit border border-white/10">
                      <Icon className="w-7 h-7 text-amber-500" />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        font-semibold mb-4
                        text-[clamp(1.25rem,2vw,1.6rem)]
                        leading-snug
                        text-amber-500
                      "
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-[clamp(0.9rem,1.2vw,1rem)] leading-relaxed flex-grow">
                      <ShinyText
                        text={card.description}
                        disabled={false}
                        speed={2}
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

export default GameChanger;