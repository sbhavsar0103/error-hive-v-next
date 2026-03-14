import { Target, Eye, Heart } from "lucide-react";

import SpotlightCard from "../../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../../Components/FadeContent/FadeContent";

import MobileDevelopmentGameChangerHeader from "./MobileDevelopmentGameChangerHeader";

const GameChangerCards = [
  {
    icon: Target,
    title: "70% of Digital Time is Spent on Mobile Apps",
    description:
      "Mobile applications dominate user engagement. Businesses investing in mobile app development experience higher customer retention and stronger brand interaction.",
  },
  {
    icon: Eye,
    title: "53% Users Abandon Slow Apps",
    description:
      "Performance-driven mobile development ensures fast load times, smooth navigation, and optimized user experience across Android and iOS devices.",
  },
  {
    icon: Heart,
    title: "90% Higher Engagement via Mobile",
    description:
      "Push notifications, real-time features, and intuitive UI/UX increase customer engagement and improve conversion rates through mobile-first strategies.",
  },
];

const MobileDevelopmentGameChanger = () => {
  return (
    <section id="mobile-development-benefits" className="bg-[#060010] py-20 px-4 sm:px-6 lg:px-8">
      <MobileDevelopmentGameChangerHeader />

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
    </section>
  );
};

export default MobileDevelopmentGameChanger;