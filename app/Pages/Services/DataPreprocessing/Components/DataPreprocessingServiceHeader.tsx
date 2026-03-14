import React from "react";

const DataPreprocessingServiceHeader: React.FC = () => {
  return (
    <div className="text-center space-y-6 mb-16">

      {/* Badge */}
      <div className="inline-flex items-center justify-center">
        <span className="text-amber-500 text-xs sm:text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm">
          Services
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
        Our Core Data Processing{" "}
        <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
          &{" "}
        </span>
        Cleaning Services
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
        We transform raw, messy data into clean, structured, and reliable datasets. 
        Our data processing and cleaning services ensure high data quality, enabling 
        accurate analytics, machine learning models, and data-driven business decisions.
      </p>

    </div>
  );
};

export default DataPreprocessingServiceHeader;