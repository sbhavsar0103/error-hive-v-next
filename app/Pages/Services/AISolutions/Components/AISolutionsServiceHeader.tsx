export default function AISolutionsServiceHeader() {
    return (
        <div className="text-center space-y-6 mb-16">

            {/* Badge */}
            <div className="inline-flex items-center justify-center">
                <span className="text-amber-500 text-xs sm:text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm">
                    AI Solutions
                </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
                Powerful{" "}
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                    AI Solutions{" "}
                </span>
                for Modern Businesses
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Our AI solutions help businesses unlock the full potential of artificial
                intelligence. From machine learning models and intelligent automation to
                predictive analytics and AI-powered applications, we design scalable
                solutions that improve decision-making, optimize operations, and drive
                innovation.
            </p>

        </div>
    );
}