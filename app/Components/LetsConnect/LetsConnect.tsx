import React from "react";
import Link from "next/link";
import FadeContent from "../FadeContent/FadeContent";
import { ArrowRight } from "lucide-react";



function CtaButtons({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link
        href="/contact"
        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-4 font-semibold text-[#060010] shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
      >
        {primary}
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-xl border border-amber-500/20 bg-white/5 px-8 py-4 font-semibold text-amber-100 transition-all duration-300 hover:border-amber-500/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
      >
        {secondary}
      </Link>
    </div>
  );
}


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
            Consultation CTA
          </h2>
        </FadeContent>

        <FadeContent delay={0.4}>
          <p
            className="text-[#060010] leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)" }}
          >
            Share your billing, credentialing, patient operations, or compliance goals and we will help map the highest-impact next steps.
          </p>
        </FadeContent>
      </div>
    </section>
  );
};

export default LetsConnect;