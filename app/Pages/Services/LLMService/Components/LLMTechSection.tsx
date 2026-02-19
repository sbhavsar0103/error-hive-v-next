import { useState } from "react";
import { categories, techLogos, CategoryId } from "./LLMTechData";
import LLMCategoryTabs from "./LLMCategoryTabs";
import LLMTechGrid from "./LLMTechGrid";

export default function LLMTechSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryId>("data");

  return (
    <section className="relative bg-[#060010] text-white py-20 lg:py-28 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16 lg:mb-20">

          {/* Label */}
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-6">
            <span className="text-amber-500 text-sm tracking-wide font-medium">
              Technology Stack
            </span>
          </div>

          {/* Responsive clamp typography */}
          <h2
            className="
              font-semibold
              tracking-tight
              leading-tight
              mb-8
            "
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            Innovating with Advanced Tech
          </h2>

          {/* Tabs */}
          <div className="mt-8">
            <LLMCategoryTabs
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          {/* Elegant divider */}
          <div className="relative mt-12 h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-amber-500/40 to-transparent">
            <div className="absolute inset-0 bg-amber-500/20 blur-sm" />
          </div>
        </div>

        {/* GRID */}
        <div className="mt-16">
          <LLMTechGrid techs={techLogos[selectedCategory]} />
        </div>

      </div>
    </section>
  );
}
