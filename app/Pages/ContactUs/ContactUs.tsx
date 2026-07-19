"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Send, Mail, User, MessageSquare, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const payload = {
        first_name: formData.name,
        to_email: formData.email,
        message: formData.message,
      };

      const response = await fetch("/api/mail/send", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setFormData({ name: "", email: "", message: "" });

      // Redirect to thank you page
      router.push("/thank-you");
    } catch (err) {
      console.error("Send mail error:", err);
      setErrorMessage("Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
      title: "We review your request",
      description: "within 24 hours",
    },
    {
      number: 2,
      title: "We schedule a discovery call",
      description: "30 minutes, no commitment",
    },
    {
      number: 3,
      title: "You receive a custom proposal",
      description: "scope, timeline, and budget",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/error-hive-solutions/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/errorhivesolutions",
      label: "Instagram",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/919408882844",
      label: "WhatsApp",
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
                  What happens after you reach out?
                </h1>
                <p className="text-lg lg:text-xl text-amber-200/70 leading-relaxed">
                  We review, connect, and propose a solution tailored to your goals.
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

              <div className="mt-8 pt-8 border-t border-amber-500/20">
                <h3 className="text-xl font-semibold text-amber-500 mb-2">Our Location</h3>
                <span className="text-amber-100/70 text-lg">
                  507 Krupal Pathshala , Nr Pintoo Apparels, Shivranjani Cross Road 132Ft. Ring Road, Satellite Rd, opp. HP Petrol Pump, Ahmedabad, Gujarat 380015
                </span>
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
                  <form onSubmit={handleSend} className="space-y-5">
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
                    <button type="submit" disabled={isLoading} className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer">
                      {isLoading ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5" />
                    </button>
                  </form>

                  {errorMessage && (
                    <p className="text-red-400 text-center font-medium">{errorMessage}</p>
                  )}

                  <div className="mt-8 pt-6 border-t border-amber-500/20 text-center space-y-4">
                    <div className="flex items-center justify-center gap-4">
                      {socialLinks.map((social) => (
                        <Link
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors duration-300 hover:border-amber-500 hover:text-amber-500"
                        >
                          <social.icon className="h-5 w-5" />
                        </Link>
                      ))}
                    </div>
                    <p className="text-amber-200/70 text-sm">
                      Prefer email? Reach us at <a href="mailto:contact@error-hive.com" className="text-amber-500 hover:underline">contact@error-hive.com</a>
                    </p>
                  </div>
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