import React from "react";
import { LucideIcon, Target, Eye, Heart } from "lucide-react";
import SpotlightCard from "../../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../../Components/FadeContent/FadeContent";
import NLPGameChangerHeader from "./NLPGameChangerHeader";

interface NLPCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const NLPGameChangerCards: NLPCard[] = [
  {
    icon: Target,
    title: "80% of enterprise data",
    description:
      "is unstructured, making NLP essential for business intelligence.",
  },
  {
    icon: Eye,
    title: "60% faster document processing",
    description:
      "with AI-driven text understanding.",
  },
  {
    icon: Heart,
    title: "50% reduction in manual efforts",
    description:
      "for customer support through AI chatbots.",
  },
];

const NLPGameChanger = () => {
  return (
    <section id="nlp-game-changer" className="bg-[#060010] py-20 px-4 sm:px-6 lg:px-8">
      <NLPGameChangerHeader />
      <div className="max-w-7xl mx-auto">
        <FadeContent blur={false} duration={200} initialOpacity={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NLPGameChangerCards.map((card) => {
              const Icon = card.icon;
              return (
                <SpotlightCard key={card.title} className="h-full group">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4 p-3 bg-[#060010] rounded-xl w-fit transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-amber-500" />
                    </div>

                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-amber-500 via-amber-300 to-amber-400 bg-clip-text text-transparent mb-3">
                      {card.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed flex-grow text-justify">
                      <ShinyText text={card.description} disabled={false} speed={3} />
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

export default NLPGameChanger;