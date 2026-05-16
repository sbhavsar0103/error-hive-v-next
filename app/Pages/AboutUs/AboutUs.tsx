'use client';

import React from "react";
import FadeContent from "../../Components/FadeContent/FadeContent";
import RotatingText from "../../Components/RotatingText/RotatingText";
import DomeGallery from "../../Components/DomeGallery/DomeGallery";
import OurStory from "./Components/OurStory";
import OurMission from "./Components/OurMission";

/** -----------------------------
 * Types
 * ----------------------------*/
interface TechImage {
  src: string;
  alt: string;
}

const AboutUs: React.FC = () => {
  // SEO/performance fix: self-host skill icons to avoid external skillicons.dev requests.
  const techImages: TechImage[] = [
    { src: "/skills/react.svg", alt: "React development icon" },
    { src: "/skills/javascript.svg", alt: "JavaScript development icon" },
    { src: "/skills/typescript.svg", alt: "TypeScript development icon" },
    { src: "/skills/nodejs.svg", alt: "Node.js development icon" },
    { src: "/skills/python.svg", alt: "Python development icon" },
    { src: "/skills/html.svg", alt: "HTML development icon" },
    { src: "/skills/css.svg", alt: "CSS development icon" },
    { src: "/skills/tailwind.svg", alt: "Tailwind CSS development icon" },
    { src: "/skills/nextjs.svg", alt: "Next.js development icon" },
    { src: "/skills/git.svg", alt: "Git version control icon" },
    { src: "/skills/github.svg", alt: "GitHub source control icon" },
    { src: "/skills/docker.svg", alt: "Docker deployment icon" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#060010] px-4 sm:px-6 lg:px-8 text-center overflow-hidden" style={{ paddingTop: "10rem", paddingBottom: "6rem" }}>
        <div className="mx-auto bg-amber-500 rounded-3xl py-16 px-6 sm:px-12 relative z-10 shadow-[0_0_40px_rgba(245,158,11,0.4)]">
          <FadeContent delay={0.1}>
            <p className="text-sm sm:text-base italic text-[#060010] mb-6 tracking-wide">
              “Innovation is not just what we do — it’s who we are.”
            </p>
          </FadeContent>

          <FadeContent delay={0.3}>
            <h2 className="text-2xl sm:text-4xl font-medium text-[#060010] mb-5 leading-snug">
              We Build{" "}
              <span className="text-white bg-[#060010] px-2 rounded-md">
                Ideas
              </span>{" "}
              That{" "}
              <span className="text-white bg-[#060010] px-2 ml-1 rounded-md">
                Inspire
              </span>{" "}
              Tomorrow
            </h2>
          </FadeContent>

          <FadeContent delay={0.5}>
            <p className="text-base sm:text-lg text-[#060010]/90 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              At <span className="font-medium">Error-Hive Solution</span>, we
              specialize in creating intelligent digital experiences through the
              perfect blend of{" "}
              <span className="px-2 bg-white/50 rounded-md font-medium text-[#060010]">
                innovation
              </span>
              ,{" "}
              <span className="px-2 bg-white/50 rounded-md font-medium text-[#060010]">
                precision
              </span>
              , and{" "}
              <span className="px-2 bg-white/50 rounded-md font-medium text-[#060010]">
                creativity
              </span>
              . We believe technology should not only perform — it should{" "}
              <span className="font-semibold">inspire</span> and{" "}
              <span className="font-semibold">connect</span>.
            </p>
          </FadeContent>

          <FadeContent delay={0.7}>
            <button className="px-8 py-3 bg-[#060010] text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              Let&apos;s Connect
            </button>
          </FadeContent>
        </div>
      </section>
      <hr />
      <OurStory />
      <hr />
      <div className="flex flex-col items-center justify-center py-16 bg-[#060010] text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide flex items-center gap-4">
          <span className="text-amber-500 drop-shadow-md">Our</span>
          <RotatingText texts={["Mission", "Vision", "Purpose"]} mainClassName="overflow-hidden text-[#060010] font-semibold px-2 md:px-3 bg-amber-500 rounded-lg" staggerFrom="last" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-120%" }} staggerDuration={0.025} transition={{ type: "spring", damping: 30, stiffness: 400 }} rotationInterval={2000} splitBy="characters" />
        </h2>
        <OurMission />
      </div>
      <hr />
      <div className="h-[70vh] bg-[#060010] flex items-center justify-center">
        <DomeGallery images={techImages} overlayBlurColor="#060010" grayscale={false} fit={0.8} imageBorderRadius="50px" openedImageBorderRadius="50px" />
      </div>
      <hr />
    </>
  );
};

export default AboutUs;
