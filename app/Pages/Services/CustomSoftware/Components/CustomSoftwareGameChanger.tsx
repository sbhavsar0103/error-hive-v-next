import { Target, Eye, Heart, LucideIcon } from "lucide-react";

import SpotlightCard from "../../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../../Components/FadeContent/FadeContent";

import GameChangerHeader from "./GameChangerHeader";

interface GameChangerCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const GAME_CHANGER_CARDS: readonly GameChangerCard[] = [
  {
    icon: Target,
    title: "Scalable Enterprise Architecture",
    description:
      "We build custom software systems designed to scale with growing users, data, and evolving business requirements.",
  },
  {
    icon: Eye,
    title: "40% Faster Digital Transformation",
    description:
      "Streamlined development workflows and agile delivery accelerate your product launch and time-to-market.",
  },
  {
    icon: Heart,
    title: "Long-Term Technical Reliability",
    description:
      "Secure, maintainable, and performance-optimized systems built with industry best practices.",
  },
];

const GameChanger = () => {
  return (
    <section id="software-development-impact" className="bg-[#060010] py-20 px-4 sm:px-6 lg:px-8">
      <GameChangerHeader />
      <div className="max-w-7xl mx-auto">
        <FadeContent blur={false} duration={200} initialOpacity={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GAME_CHANGER_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <SpotlightCard key={card.title} className="h-full group">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4 p-3 bg-[#060010] rounded-xl w-fit transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-amber-500" />
                    </div>

                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 bg-clip-text text-transparent mb-3">
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
      <p className="sr-only">
        Our custom software development services help businesses build scalable
        SaaS platforms, enterprise systems, AI-powered applications, and secure
        digital infrastructure tailored to long-term growth.
      </p>
    </section>
  );
};

export default GameChanger;