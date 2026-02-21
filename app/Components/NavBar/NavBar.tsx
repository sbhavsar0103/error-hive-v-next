'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  {
    title: 'AI Strategy & Consultation',
    description: 'Transform your business vision into AI-powered reality',
    href: '/services/ai-consulting'
  },
  {
    title: 'Rapid Proof of Concept (PoC) Development',
    description: 'Validate your ideas with speed and precision',
    href: '/services/poc-services'
  },
  {
    title: 'End-to-End Product Development',
    description: 'From concept to launch, we build it all',
    href: '/services/ai-product-development'
  },
  {
    title: 'Scalable Web Application Development',
    description: 'Build robust applications that grow with your business',
    href: '/services/web-development'
  },
  {
    title: 'Generative AI Solutions for Business',
    description: 'Harness AI to automate and innovate',
    href: '/services/llm-service'
  },
  {
    title: 'Intelligent Web Data Extraction Services',
    description: 'Extract insights from web data effortlessly',
    href: '/services/data-extraction'
  },
  {
    title: 'Mobile Application Data Automation',
    description: 'Streamline mobile workflows with intelligent automation',
    href: '/services/mobile-automation'
  }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#060010]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl lg:text-3xl font-bold">
              <span className="text-white group-hover:text-gray-200 transition-colors">Error</span>
              <span className="text-amber-500 group-hover:text-amber-400 transition-colors">Hive</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2 group">
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4  w-[90vw] max-w-6xl transition-all duration-200 ${isServicesOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                  }`}>
                <div className="bg-[#0a0a1a] rounded-2xl shadow-2xl p-8 border border-gray-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                      <a key={index} href={service.href} className="group p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-200">
                        <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-amber-500 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {service.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a href="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
              About Us
            </a>
            <a href="/case-study" className="text-gray-300 hover:text-amber-500 transition-colors">
              Case Study
            </a>
            <a href="/blogs" className="text-gray-300 hover:text-amber-500 transition-colors">
              Blogs
            </a>
          </div>

          <div className="hidden lg:block">
            <a href="/contact" className="inline-block px-6 py-2.5 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-400 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 transition-all duration-200">
              Let's Talk
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 top-16 bg-[#060010] transition-all duration-300 ${isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
          }`}>
        <div className="h-full overflow-y-auto px-4 py-6 space-y-4">
          <div className="space-y-0">
            <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-3 px-4 hover:bg-gray-800/50 rounded-lg">
              <span className="font-medium">Services</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''
                  }`}/>
            </button>
            <div className={`space-y-2 overflow-hidden transition-all duration-300 mx-3 ${isMobileServicesOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
              {services.map((service, index) => (
                <a key={index} href={service.href} className="block p-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <h3 className="text-amber-500 text-sm">
                    {service.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
          <a href="/about" className="block text-gray-300 hover:text-white transition-colors py-3 px-4 hover:bg-gray-800/50 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </a>
          <a href="/case-study" className="block text-gray-300 hover:text-white transition-colors py-3 px-4 hover:bg-gray-800/50 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Case Study
          </a>
          <a href="/blogs" className="block text-gray-300 hover:text-white transition-colors py-3 px-4 hover:bg-gray-800/50 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Blogs
          </a>
          <div className="pt-4">
            <a href="/contact" className="block text-center px-6 py-3 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-400 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}