import { Linkedin, Twitter, Instagram, Github, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const services = [
    'AI Strategy & Consultation',
    'Rapid Proof of Concept (PoC) Development',
    'End-to-End Product Development',
    'Scalable Web Application Development',
    'Generative AI Solutions for Business',
    'Intelligent Web Data Extraction Services',
    'Mobile Application Data Automation'
  ];

  const company = [
    'About Us',
    'Case Studies',
    'Blogs',
    'Careers',
    'Contact',
  ];

  const industries = [
    'Startups',
    'SaaS Businesses',
    'E-commerce',
    'Enterprises',
    'Agencies',
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-[#060010] text-gray-300">
      <div className="max-w-[90vw] mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 mb-16">
          <div className="flex flex-col items-center lg:items-start max-w-sm">
            <a href="/" className="flex items-center gap-0 mb-4 group">
              <span className="text-3xl font-bold text-white transition-colors">Error</span>
              <span className="text-3xl font-bold text-amber-500 transition-colors">Hive</span>
            </a>
            <p className="text-sm text-gray-400 text-center lg:text-left leading-relaxed">
              Building Intelligent Digital Solutions For Modern Businesses
            </p>
          </div>

          <div className="flex gap-6 justify-center lg:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-200 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Pages</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-200 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Industries We Serve</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-200 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a
                  href="mailto:hello@error-hive.com"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  hello@error-hive.com
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

        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 Error Hive. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-amber-500 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-amber-500 transition-colors duration-200"
              >
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