import React, { useState } from "react";
import AnnotationServiceHeader from "./AnnotationServiceHeader";
import AnnotationServicesList from "./AnnotationServicesList";
import AnnotationServiceDetails from "./AnnotationServiceDetails";
import services, { AnnotationService } from "./AnnotationServicesMenu";

const AnnotationServicesPage: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<number>(
    services[0].id
  );

  const selectedService: AnnotationService =
    services.find((service) => service.id === selectedServiceId) ??
    services[0];

  return (
    <div className="min-h-screen bg-[#060010] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <AnnotationServiceHeader />

        <div className="grid lg:grid-cols-[400px,1fr] gap-6 lg:gap-8 h-[600px]" style={{ display : "flex"}}>
          <AnnotationServicesList
            services={services}
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
          />

          <AnnotationServiceDetails selectedService={selectedService} />
        </div>
      </div>
    </div>
  );
};

export default AnnotationServicesPage;
