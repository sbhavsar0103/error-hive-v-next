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
      title: "Offshore Outsourcing Expertise",
      desc: "We excel in delivering efficient and cost-effective IT services, ensuring seamless communication and smooth project management from start to finish.",
    },
    {
      title: "One-Stop IT Solutions",
      desc: "From consulting and UI/UX design to development, deployment, and maintenance, we provide all your IT needs under one roof, saving time and maximizing convenience.",
    },
    {
      title: "Proven Track Record",
      desc: "With a portfolio of successful projects and a growing base of satisfied clients, we have earned a reputation for reliability, quality, and excellence.",
    },
    {
      title: "Sustainable and Scalable Solutions",
      desc: "Our future-ready IT solutions are designed to adapt and scale as your business grows, ensuring long-term value and dependability.",
    },
  ];

  const cards: CardItem[] = [
    {
      title: "Expert Team",
      desc: "Our developers are highly skilled in cutting-edge technologies to deliver top-quality solutions.",
    },
    {
      title: "Scalable Solutions",
      desc: "We build systems that grow seamlessly with your business and evolving demands.",
    },
    {
      title: "Client-Centric Approach",
      desc: "We focus on understanding your business goals to deliver tailor-made solutions.",
    },
    {
      title: "Agile Development",
      desc: "Flexible and iterative process ensures faster delivery and continuous improvement.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="bg-[#060010] py-14 sm:py-20 px-5 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="font-bold text-white mb-3 tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 4.5vw, 3rem)" }}
          >
            Why <span className="text-amber-500">Choose Us</span>
          </h2>
          <p
            className="text-gray-400 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)" }}
          >
            We combine innovation, expertise, and dedication to help you achieve your digital goals.
          </p>
        </div>

        <FadeContent
          blur={false}
          duration={200}

          initialOpacity={0}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
          >
            {/* Left Content */}
            <div>
              <ul className="space-y-6 sm:space-y-8">
                {advantages.map((adv, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-white"
                  >
                    <div className="p-3 bg-amber-400/10 rounded-full border border-amber-500/30 mt-1">
                      <Atom className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1 tracking-tight bg-amber-500 bg-clip-text text-transparent" style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)" }}>
                        {adv.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed"
                        style={{ fontSize: "clamp(0.85rem, 2.4vw, 0.95rem)" }}
                      >
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
    </section>
  );
};

export default WhyChooseUs;