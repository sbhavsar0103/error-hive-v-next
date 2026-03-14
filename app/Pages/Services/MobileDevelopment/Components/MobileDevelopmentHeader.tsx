export default function MobileDevelopmentHeader() {
  return (
    <div className="mb-10 sm:mb-14 text-center space-y-6 sm:space-y-8">
      
      {/* Badge */}
      <div className="inline-block">
        <span className="text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500">
          Mobile App Growth
        </span>
      </div>

      {/* SEO-Optimized H2 */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight max-w-4xl mx-auto">
        Why Your Business Needs <br />
        <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
          Professional Mobile App Development
        </span>
      </h2>

      {/* SEO-Rich Description */}
      <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-xl sm:max-w-2xl mx-auto">
        In today’s mobile-first world, businesses need high-performance Android
        and iOS applications to stay competitive. Professional mobile app
        development improves user engagement, increases customer retention,
        enhances brand credibility, and creates scalable digital experiences
        that drive long-term business growth.
      </p>
    </div>
  );
}