import React from 'react';
import { Calendar, Handshake, LucideIcon, PhoneCall } from 'lucide-react';
import SpotlightCard from "../../Components/SpotlightCard/SpotlightCard";

interface Expectation {
  icon: LucideIcon;
  title: string;
  description: string;
}

const expectations: Expectation[] = [
  {
    icon: Calendar,
    title: "Typical project timeline",
    description: "2-8 weeks depending on scope",
  },
  {
    icon: Handshake,
    title: "Engagement type",
    description: "Project-based or retainer",
  },
  {
    icon: PhoneCall,
    title: "Getting started",
    description: "Free 30-min discovery call, no commitment",
  },
];

const ServiceExpectations: React.FC = () => {
  return (
    <section className="bg-[#060010] py-20 px-6 sm:px-8 relative overflow-hidden">      
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-4">
            What to Expect
          </h2>
          <p className="text-amber-100/70 max-w-2xl mx-auto">
            A clear and transparent approach to delivering value.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-10">
          {expectations.map(({ icon: Icon, title, description }) => (
            <SpotlightCard key={title} className="h-full cursor-pointer text-center">
              <div className="relative z-10 flex h-full flex-col items-center">
                <div className="mb-6 p-3 bg-[#060010] rounded-xl w-fit">
                  <Icon className="w-7 h-7 text-amber-500" />
                </div>

                <h3 className="text-xl font-semibold mb-3 tracking-tight bg-amber-500 bg-clip-text text-transparent">
                  {title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceExpectations;
