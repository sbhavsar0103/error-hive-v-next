import React from "react";
import SpotlightCard from "../../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../../Components/FadeContent/FadeContent";
import WebDataExtractionGameChangerHeader from "./WebDataExtractionGameChangerHeader";
import { Target, Eye, Heart } from "lucide-react";

const GameChangerCards = [
  {
    icon: Target,
    title: "99.9% Data Accuracy",
    description:
      "Advanced scraping pipelines with automated validation and cleaning ensure highly accurate, structured datasets ready for analytics and business intelligence.",
  },
  {
    icon: Eye,
    title: "Global Website Coverage",
    description:
      "Extract data from websites across the USA, UK, UAE, Europe, and Asia. Our scraping solutions support eCommerce, travel, real estate, finance, and marketplace platforms.",
  },
  {
    icon: Heart,
    title: "Real-Time Data Delivery",
    description:
      "Receive scraped data through APIs, databases, CSV, or JSON formats with automated scheduling and real-time updates for seamless integration into your systems.",
  },
];

const WebDataExtractionGameChanger = () => {

  return (
    <section id="web-scraping-benefits" className="bg-[#060010] py-20 px-4 sm:px-6 lg:px-8">
      <WebDataExtractionGameChangerHeader />
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

export default WebDataExtractionGameChanger;
