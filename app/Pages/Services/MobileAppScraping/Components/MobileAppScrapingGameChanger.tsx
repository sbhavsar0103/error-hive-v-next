import React from "react";
import { Target, Eye, Heart } from "lucide-react";

import SpotlightCard from "../../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../../Components/FadeContent/FadeContent";

import MobileAppScrapingGameChangerHeader from "./MobileAppScrapingGameChangerHeader";

const GameChangerCards = [
    {
        icon: Target,
        title: "Apps Dominate Digital Behavior",
        description:
            "Over 90% of smartphone usage happens inside mobile apps, making them one of the richest sources of consumer behavior data, product trends, and engagement insights.",
    },
    {
        icon: Eye,
        title: "Exclusive In-App Data",
        description:
            "Many discounts, promotions, product listings, and user reviews exist only inside mobile apps and are not visible on websites. App scraping unlocks this hidden data.",
    },
    {
        icon: Heart,
        title: "Competitor Intelligence",
        description:
            "Track competitor pricing, delivery time, product availability, and in-app offers across rival apps to stay ahead in highly competitive markets.",
    },
    {
        icon: Target,
        title: "Market Expansion Insights",
        description:
            "Analyze local demand, pricing patterns, and customer preferences before expanding into new cities, regions, or international markets.",
    },
    {
        icon: Eye,
        title: "Real-Time Data Monitoring",
        description:
            "Capture flash discounts, surge pricing, delivery availability, and dynamic inventory changes from mobile apps in real time.",
    },
    {
        icon: Heart,
        title: "Seamless Data Integration",
        description:
            "Receive clean structured data in JSON, CSV, Excel, or API formats ready for analytics, dashboards, and business intelligence systems.",
    },
];

const MobileAppScrapingGameChanger = () => {

    return (
        <section id="nlp-game-changer" className="bg-[#060010] py-20 px-4 sm:px-6 lg:px-8">
            <MobileAppScrapingGameChangerHeader />
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

export default MobileAppScrapingGameChanger;
