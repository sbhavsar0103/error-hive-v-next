export default function MobileDevelopmentGameChangerHeader() {
  return (
    <div className="mb-16 text-center space-y-6 max-w-3xl mx-auto">
      
      {/* Badge */}
      <div className="inline-block">
        <span className="text-amber-500 text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5">
          Why It Matters
        </span>
      </div>

      {/* H2 (Hero already has H1) */}
      <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
        Why Professional{" "}
        <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
          Mobile App Development
        </span>{" "}
        is a Game-Changer for Modern Businesses
      </h2>

      {/* SEO-Optimized Paragraph */}
      <p className="text-gray-400 text-lg leading-relaxed">
        High-performance mobile applications go beyond design. Strategic mobile app development 
        for Android and iOS improves user engagement, increases retention rates, 
        enhances performance speed, and drives higher conversions — helping 
        businesses scale faster in today’s mobile-first digital economy.
      </p>
    </div>
  );
}