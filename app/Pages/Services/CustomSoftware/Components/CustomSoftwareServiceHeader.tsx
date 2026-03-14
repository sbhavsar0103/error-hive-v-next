export default function CustomSoftwareServiceHeader() {
    return (
        <section className="text-center space-y-6 mb-16" aria-labelledby="custom-software-heading">
            {/* Badge */}
            <div className="inline-flex items-center justify-center">
                <span className="text-amber-500 text-xs sm:text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm">
                    Custom Software Development
                </span>
            </div>

            {/* Title */}
            <h1 id="custom-software-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
                Scalable & Secure{" "}
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                    Custom Software Solutions
                </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                We design and develop tailored software applications that streamline
                operations, enhance productivity, and accelerate digital transformation
                for modern businesses.
            </p>
        </section>
    );
}