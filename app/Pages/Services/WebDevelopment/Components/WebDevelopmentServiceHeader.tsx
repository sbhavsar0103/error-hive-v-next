export default function WebDevelopmentServiceHeader() {
  return (
    <div className="text-center space-y-6 mb-16">

      <div className="inline-flex items-center justify-center">
        <span className="text-amber-500 text-xs sm:text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm">
          Web Services
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
        Our{" "}
        <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
          Web Development
        </span>{" "}
        Services
      </h2>

      <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
        We provide end-to-end web development services including frontend,
        backend, full-stack applications, e-commerce platforms, and website
        optimization for performance and security.
      </p>

    </div>
  );
}