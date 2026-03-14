import { Target, Eye, Heart } from "lucide-react";

import SpotlightCard from "../../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../../Components/FadeContent/FadeContent";

import GameChangerHeader from "./GameChangerHeader";

const GameChangerCards = [
  {
    icon: Target,
    title: "94% First Impression is Design-Related",
    description:
      "Your website design directly impacts user trust and conversion rates. A professionally developed website builds authority and improves engagement.",
  },
  {
    icon: Eye,
    title: "53% Users Leave Slow Websites",
    description:
      "High-performance web development ensures fast loading speed, optimized code, and smooth user experience across all devices.",
  },
  {
    icon: Heart,
    title: "75% Credibility Judged by Website",
    description:
      "Modern, secure, and scalable web applications increase brand credibility and help businesses convert visitors into customers.",
  },
];
const GameChanger = () => {
  return (
    <section id="web-development-benefits" className="bg-[#060010] py-20 px-4 sm:px-6 lg:px-8">
      <GameChangerHeader />
      <div className="max-w-7xl mx-auto">
        <FadeContent blur={false} duration={200} initialOpacity={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GameChangerCards.map((card) => {
              const Icon = card.icon;
              return (
                <SpotlightCard key={card.title} className="h-full group">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4 p-3 bg-[#060010] rounded-xl w-fit transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-amber-500" />
                    </div>

                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-clip-text text-transparent mb-3">
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

export default GameChanger;