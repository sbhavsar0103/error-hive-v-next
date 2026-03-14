import { Users, Lightbulb, Target } from "lucide-react";

function UIUXDevelopmentDriveResults() {
  return (
    <div className="h-full bg-[#060010] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Crafting Digital Experiences That{" "}
            <span className="text-amber-500">Drive Results</span>
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-5 text-gray-300 leading-relaxed m-auto">
            <p>
              In the technologically advanced world of today, the design of your
              product is generally the first and longest-lasting impression of
              your brand. Beyond looks, our{" "}
              <span className="text-amber-500 font-medium">
                UI/UX design and development services
              </span>{" "}
              create experiences that are user-friendly and aligned with real
              user needs.
            </p>

            <p>
              Whether you're starting a{" "}
              <span className="text-amber-500 font-medium">mobile app</span>, a{" "}
              <span className="text-amber-500 font-medium">SaaS platform</span>,
              or an{" "}
              <span className="text-amber-500 font-medium">
                innovative business
              </span>{" "}
              solution, our UI/UX experts translate ideas into meaningful
              designs.
            </p>

            <p>
              Every swipe, click, and scroll helps create a seamless experience
              that captivates users and keeps them returning.
            </p>
          </div>

          <div className="space-y-4">
            {/* Card 1 */}
            <div className="bg-blue-900/20 border border-blue-800/30 rounded-xl p-5 hover:bg-blue-900/30 transition-all duration-300">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-1">User-Centered Design</h3>
              <p className="text-sm text-gray-300">
                We blend design thinking and research to build intuitive and
                engaging interfaces.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-5 hover:bg-gray-800/40 transition-all duration-300">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-lg font-semibold mb-1">
                Innovation & Strategy
              </h3>
              <p className="text-sm text-gray-300">
                We transform your ideas into impactful designs that support
                real business growth.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-emerald-900/20 border border-emerald-800/30 rounded-xl p-5 hover:bg-emerald-900/30 transition-all duration-300">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Results-Driven</h3>
              <p className="text-sm text-gray-300">
                Every interaction is designed to deliver seamless experiences
                and measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UIUXDevelopmentDriveResults;