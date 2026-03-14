'use client';

import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

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
        href: '/services/mobile-scrapping'
      }
    ]
  }
];

const Footer = () => {
  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    // { name: 'Blogs', href: '/blogs' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#060010] text-gray-300">
      <div className="max-w-[90vw] mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 mb-16">

          <div className="flex flex-col items-center lg:items-start max-w-sm">
            <a href="/" className="flex flex-col items-center lg:items-start mb-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">Error</span>
                <span className="text-3xl font-bold text-amber-500">-</span>
                <span className="text-3xl font-bold text-white">Hive</span>
              </div>

              <span className="text-[11px] text-amber-500 tracking-[0.3em] uppercase mt-1 m-auto">
                Solutions
              </span>
            </a>
          </div>

          <div className="flex gap-6 justify-center lg:justify-end">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-colors duration-300">
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12 mb-16">

          {/* Services Columns */}
          {serviceColumns.map((column) => (
            <div key={column.columnTitle}>
              <h3 className="text-white font-semibold text-lg mb-6">
                {column.columnTitle}
              </h3>

              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item.title}>
                    <a href={item.href} className="text-gray-400 hover:text-amber-500 transition-colors duration-200 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Pages</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-amber-500 transition-colors duration-200 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Contact
            </h3>

            <ul className="space-y-4">

              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />

                <a href="mailto:hello@error-hive.com" className="hover:text-amber-500 transition-colors duration-200">
                  contact@error-hive.com
                </a>
              </li>

              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>India</span>
              </li>

            </ul>

            <p className="text-sm text-gray-400 mt-6 leading-relaxed">
              Let's discuss how we can transform your business digitally.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Error - Hive Solutions. All rights reserved.
            </p>

            <div className="flex gap-6">

              <a href="/privacy-policy" className="text-sm text-gray-500 hover:text-amber-500 transition-colors duration-200">
                Privacy Policy
              </a>

              <a href="/terms" className="text-sm text-gray-500 hover:text-amber-500 transition-colors duration-200">
                Terms of Service
              </a>

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;