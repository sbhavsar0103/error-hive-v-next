import React from 'react';
import { Calendar, Handshake, PhoneCall } from 'lucide-react';

const ServiceExpectations: React.FC = () => {
  return (
    <section className="bg-[#060010] py-20 px-6 sm:px-8 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What to Expect
          </h2>
          <p className="text-amber-100/70 max-w-2xl mx-auto">
            A clear and transparent approach to delivering value.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-10">
          <div className="p-8 rounded-2xl bg-white/5 border border-amber-500/20 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
            <div className="w-14 h-14 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-amber-500 mb-3">Typical project timeline</h3>
            <p className="text-gray-300">2–8 weeks depending on scope</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-amber-500/20 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
            <div className="w-14 h-14 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center mb-6">
              <Handshake className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-amber-500 mb-3">Engagement type</h3>
            <p className="text-gray-300">Project-based or retainer</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-amber-500/20 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
            <div className="w-14 h-14 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center mb-6">
              <PhoneCall className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-amber-500 mb-3">Getting started</h3>
            <p className="text-gray-300">Free 30-min discovery call, no commitment</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-amber-200/50 italic">
            * Every project is scoped individually. Contact us for a custom estimate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceExpectations;
