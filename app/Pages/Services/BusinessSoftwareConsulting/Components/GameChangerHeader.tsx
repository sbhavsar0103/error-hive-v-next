export default function GameChangerHeader() {
  return (
    <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">

      {/* Badge */}
      <div className="inline-flex items-center justify-center">
        <span className="text-amber-500 text-xs sm:text-sm font-medium tracking-widest uppercase px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 backdrop-blur-sm">
          Business Impact
        </span>
      </div>

      {/* Heading */}
      <h2
        className="
          font-bold text-white leading-tight
          text-[clamp(1rem,4vw,3rem)]
        "
      >
        Why Business Software Consulting is a Game-Changer for Growing Companies
      </h2>

      {/* Optional Subtext */}
      <p className="text-gray-400 text-[clamp(1rem,1vw,1.05rem)] leading-relaxed max-w-2xl mx-auto">
        Strategic software consulting aligns technology with your business goals, 
        streamlining operations, automating workflows, and building scalable systems 
        that drive long-term growth and competitive advantage.
      </p>
    </div>
  );
}