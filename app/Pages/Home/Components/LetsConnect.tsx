import React from "react";
import Link from "next/link";
import FadeContent from "../../../Components/FadeContent/FadeContent";

const LetsConnect: React.FC = () => {
  return (
    <section
      className="relative bg-[#060010] py-14 sm:py-20 px-5 sm:px-6 lg:px-8 text-center overflow-hidden"
    >
      <div
        className="max-w-4xl mx-auto bg-amber-500 rounded-3xl py-10 sm:py-16 px-6 sm:px-12 relative z-10 shadow-[0_0_30px_rgba(245,158,11,0.35)]"
      >
        <FadeContent delay={0.2}>
          <h2
            className="font-semibold text-[#060010] mb-4 leading-[1.15] tracking-tight"
            style={{ fontSize: "clamp(1.4rem, 4.5vw, 2.75rem)" }}
          >
            Ready to Build Something Amazing?
          </h2>
        </FadeContent>

        <FadeContent delay={0.4}>
          <p
            className="text-[#060010] leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)" }}
          >
            Let&apos;s discuss your project and create a custom web application that drives your
            business forward. Get started with a free consultation today.
          </p>
        </FadeContent>

        <FadeContent delay={0.6}>
          <Link href="/contact" passHref>
            <button
              type="button"
              className="px-6 sm:px-10 py-3 sm:py-4 bg-[#060010] text-white font-semibold text-sm sm:text-base rounded-full shadow-md hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer"
            >
              Let&apos;s Connect
            </button>
          </Link>
        </FadeContent>
      </div>
    </section>
  );
};

export default LetsConnect;