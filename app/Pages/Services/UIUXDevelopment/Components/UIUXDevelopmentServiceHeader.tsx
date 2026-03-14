export default function UIUXDevelopmentServiceHeader() {
    return (
        <div className="text-center space-y-6 mb-16">

            {/* Badge */}
            <div className="inline-flex items-center justify-center">
                <span className="text-amber-500 text-xs sm:text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm">
                    UI/UX Design Services
                </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
                Key{" "}
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                    UI/UX{" "}
                </span>
                Design Services
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Our UI/UX design services focus on creating intuitive, user-centered
                digital experiences that improve usability, engagement, and
                conversion rates. From user research and wireframing to modern
                interface design and usability testing, we design websites and
                mobile applications that deliver seamless user experiences and
                strengthen your digital product strategy.
            </p>

        </div>
    );
}