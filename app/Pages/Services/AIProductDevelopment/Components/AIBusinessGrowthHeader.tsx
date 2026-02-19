import React from "react";

const AIBusinessGrowthHeader: React.FC = () => {
  return (
    <header className="mb-16 text-center space-y-6 max-w-4xl mx-auto">
      <div>
        <span className="inline-block text-amber-500 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/5">
          AI Business Growth
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        Why Choose{" "}
        <span className="text-amber-400">ErrorHive</span>{" "}
        as Your AI Product Development Partner?
      </h2>

      <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
        We combine AI engineering expertise, scalable architecture, and ethical
        AI practices to deliver intelligent systems that create measurable
        business impact.
      </p>
    </header>
  );
};

export default AIBusinessGrowthHeader;