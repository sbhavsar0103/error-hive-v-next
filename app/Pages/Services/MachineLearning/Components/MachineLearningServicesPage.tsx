import { useState, useEffect } from "react";
import MachineLearningServiceHeader from "./MachineLearningServiceHeader";
import MachineLearningServicesList from "./MachineLearningServicesList";
import MachineLearningServiceDetails from "./MachineLearningServiceDetails";
import services from "./MachineLearningServicesMenu";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MachineLearningServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === services.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };


  const selectedService =
    services.find((s) => s.id === selectedServiceId) || services[0];

  return (
    <div className="min-h-screen bg-[#060010] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <MachineLearningServiceHeader />

        {/* <div className="grid lg:grid-cols-[400px,1fr] gap-6 lg:gap-8 h-[600px]" style={{ display: "flex"}}> */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:h-[600px]">

          <MachineLearningServicesList
            services={services}
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
          />

          <div className="hidden lg:block">
            <MachineLearningServiceDetails selectedService={selectedService} />
          </div>
          {/* MOBILE VIEW - AUTO SLIDER */}
          <div className="relative lg:hidden overflow-hidden">

            {/* Slider Wrapper */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {services.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0 px-2">
                  <MachineLearningServiceDetails selectedService={service} />
                </div>
              ))}
            </div>

            {/* Left Button */}
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:bg-amber-500 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Button */}
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:bg-amber-500 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}