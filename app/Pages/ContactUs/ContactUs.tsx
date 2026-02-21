"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const steps: Step[] = [
    {
      number: 1,
      title: "Share Your Requirements",
      description: "Tell us about your project vision and goals",
    },
    {
      number: 2,
      title: "Strategic Planning",
      description: "We analyze and create a tailored roadmap",
    },
    {
      number: 3,
      title: "Development & Design",
      description: "Our team brings your vision to life",
    },
    {
      number: 4,
      title: "Delivery & Support",
      description: "Launch with confidence and ongoing assistance",
    },
  ];

  return (
    <>
      <div className="min-h-screen relative overflow-hidden items-center flex py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#060010" }}>
        <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* LEFT CONTENT */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-amber-500 tracking-tight">
                  Let's Build Something Amazing
                </h1>
                <p className="text-lg lg:text-xl text-amber-200/70 leading-relaxed">
                  Transform your ideas into reality with our streamlined process
                </p>
              </div>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-amber-500/30 group-hover:scale-110">
                          <span className="text-xl font-bold text-amber-500">
                            {step.number}
                          </span>
                        </div>
                        {index < steps.length - 1 && (
                          <div className="absolute left-1/2 top-full h-12 w-0.5 bg-gradient-to-b from-amber-500/50 to-transparent -translate-x-1/2" />
                        )}
                      </div>
                    </div>
                    <div className="pt-2 space-y-1 flex-1">
                      <h3 className="text-xl font-semibold text-amber-200/70 group-hover:text-amber-500 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-amber-100/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* RIGHT FORM */}
            <div className="lg:pl-8">
              <div className="relative rounded-2xl p-8 lg:p-10 shadow-2xl backdrop-blur-xl border" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(245, 158, 11, 0.2)" }}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
                <div className="relative space-y-6">
                  <div className="text-center space-y-2 pb-2">
                    <h2 className="text-3xl font-bold text-amber-500">
                      Get In Touch
                    </h2>
                    <p className="text-amber-200/70">
                      Let's discuss your project
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* NAME */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-amber-200/70">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-amber-500/20 text-amber-50 focus:ring-2 focus:ring-amber-500/50" placeholder="Your Name" />
                      </div>
                    </div>
                    {/* EMAIL */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-amber-200/70">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-amber-500/20 text-amber-50 focus:ring-2 focus:ring-amber-500/50" placeholder="your@email-id.com" />
                      </div>
                    </div>
                    {/* MESSAGE */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-amber-200/70">
                        Your Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-amber-500/50" />
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-amber-500/20 text-amber-50 focus:ring-2 focus:ring-amber-500/50 resize-none" placeholder="Tell us about your project..." />
                      </div>
                    </div>
                    <button type="submit" className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ContactUs;