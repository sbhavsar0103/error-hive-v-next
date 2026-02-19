import { useState } from "react";
import LLMServiceHeader from "./LLMServiceHeader";
import LLMServicesList from "./LLMServicesList";
import LLMServiceDetails from "./LLMServiceDetails";
import services from "./LLMServicesMenu";

export default function LLMServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);

  const selectedService =
    services.find((s) => s.id === selectedServiceId) || services[0];

  return (
    <section className="bg-[#060010] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">

        <LLMServiceHeader />

        {/* Layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[380px_1fr] items-start">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-28 self-start">
            <LLMServicesList
              services={services}
              selectedServiceId={selectedServiceId}
              setSelectedServiceId={setSelectedServiceId}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="min-h-[400px]">
            <LLMServiceDetails selectedService={selectedService} />
          </div>

        </div>
      </div>
    </section>
  );
}