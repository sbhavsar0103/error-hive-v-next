'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from "next/link";

const serviceColumns = [
  {
    columnTitle: 'Software Development',
    items: [
      {
        title: 'Custom Software Development',
        description: 'Tailored solutions for unique business needs',
        href: '/services/custom-software-development'
      },
      {
        title: 'Web App Development',
        description: 'Scalable, responsive, and modern web applications',
        href: '/services/web-development'
      },
      {
        title: 'Mobile App Development',
        description: 'Cross-platform apps for iOS and Android',
        href: '/services/mobile-development'
      }
    ]
  },
  {
    columnTitle: 'IT Consulting & Design',
    items: [
      {
        title: 'Business Software Consulting',
        description: 'Expert guidance for software planning and growth',
        href: '/services/business-software-consulting'
      },
      {
        title: 'UI/UX Design and Development',
        description: 'Engaging, user-centered digital experiences',
        href: '/services/ui-ux-design'
      }
    ]
  },
  {
    columnTitle: 'AI & Data Solutions',
    items: [
      {
        title: 'AI Solutions',
        description: 'Smart automation with machine learning models',
        href: '/services/ai-solutions'
      },
      {
        title: 'Data Preprocessing and Cleaning',
        description: 'Structured, clean data for reliable insights',
        href: '/services/data-preprocessing'
      }
    ]
  },
  {
    columnTitle: 'Scraping',
    items: [
      {
        title: 'Web Scraping',
        description: 'Automated extraction of structured web data',
        href: '/services/web-scraping-services'
      },
      {
        title: 'Mobile App Scraping',
        description: 'Extract valuable data from mobile applications',
        href: '/services/mobile-scraping'
      }
    ]
  }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#060010]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex flex-col items-start group">

            <span className="text-2xl lg:text-3xl font-bold flex items-center space-x-2">
              <span className="text-white transition-colors">
                Error
              </span>

              <span className="text-amber-500 transition-colors">
                -
              </span>

              <span className="text-white transition-colors">
                Hive
              </span>
            </span>

            <span className="text-[11px] text-amber-500 tracking-[0.3em] uppercase mt-1 m-auto">
              Solutions
            </span>

          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2 group">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`fixed left-1/2 top-[80px] -translate-x-1/2 w-[95vw] max-w-7xl transition-all duration-200 z-40 ${isServicesOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-2'
                }`}>
                <div className="bg-[#0a0a1a] rounded-2xl shadow-2xl p-8 border border-gray-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceColumns.map((column, colIndex) => (
                      <div key={colIndex} className={serviceColumns.length === 4 && colIndex === 3
                        ? "lg:col-start-1" : ""}>
                        <h2 className="text-amber-500 font-semibold text-sm mb-4 px-4">
                          {column.columnTitle}
                        </h2>

                        <div className="space-y-4">
                          {column.items.map((service, index) => (
                            <a
                              key={index}
                              href={service.href}
                              className="block p-4 rounded-xl bg-gray-800/50 transition-all duration-200"
                            >
                              <h3 className="text-white font-semibold text-sm mb-1 hover:text-amber-500 transition-colors">
                                {service.title}
                              </h3>
                              <p className="text-gray-400 text-xs leading-relaxed">
                                {service.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
              About Us
            </Link>
            <Link href="/testimonials" className="text-gray-300 hover:text-amber-500 transition-colors">
              Testimonials
            </Link>
            {/* <a href="/blogs" className="text-gray-300 hover:text-amber-500 transition-colors">
              Blogs
            </a> */}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact" className="inline-block px-6 py-2.5 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-500 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200">
              Let's Talk
            </Link>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 top-16 bg-[#060010] transition-all duration-300 ${isMobileMenuOpen
        ? 'opacity-100 visible'
        : 'opacity-0 invisible'}`}>
        <div className="h-full overflow-y-auto px-4 py-6 space-y-4">
          <div className="space-y-0">
            <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-3 px-4 hover:bg-gray-800/50 rounded-lg">
              <span className="font-medium">Services</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''
                }`} />
            </button>
            <div className={`space-y-2 overflow-hidden transition-all duration-300 mx-3 ${isMobileServicesOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
              {serviceColumns.map((column, colIndex) => (
                <div key={colIndex} className="space-y-2">
                  <h3 className="text-amber-500 text-sm px-4 pt-3">
                    {column.columnTitle}
                  </h3>

                  {column.items.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="block px-6 py-2 text-gray-300 text-sm hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Link href="/about" className="block text-gray-300 hover:text-white transition-colors py-3 px-4 hover:bg-gray-800/50 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/testimonials" className="block text-gray-300 hover:text-white transition-colors py-3 px-4 hover:bg-gray-800/50 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Testimonials
          </Link>
          {/* <a href="/blogs" className="block text-gray-300 hover:text-white transition-colors py-3 px-4 hover:bg-gray-800/50 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Blogs
          </a> */}
          <div className="pt-4">
            <Link href="/contact" className="block text-center px-6 py-3 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-500 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}