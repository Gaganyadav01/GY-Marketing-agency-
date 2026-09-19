import { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { Menu, X, ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect scroll state to apply backgrounds and shadows
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceClick = (servicePage: Page) => {
    onNavigate(servicePage);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', value: 'home' as Page },
    { label: 'About', value: 'about' as Page },
    { label: 'Our Work', value: 'portfolio' as Page },
    { label: 'Contact', value: 'contact' as Page },
  ];

  const services = [
    { name: 'Meta Ads', value: 'meta-ads' as Page },
    { name: 'Google Ads', value: 'google-ads' as Page },
    { name: 'Website Development', value: 'website-development' as Page },
    { name: 'App Development', value: 'app-development' as Page },
    { name: 'SEO', value: 'seo' as Page },
    { name: 'Social Media Growth', value: 'social-media-growth' as Page },
  ];

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="h-9 w-9 bg-[#0B0B0F] rounded-lg overflow-hidden flex items-center justify-center border border-[#D6A354]/30 group-hover:border-[#D6A354] transition-all duration-300">
              <img 
                src="/gy_logo.png" 
                alt="GY Marketing Agency Logo" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-[#0B0B0F] group-hover:text-[#D6A354] transition-colors duration-300">
              GY Marketing Agency
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-[15px] font-medium transition-colors hover:text-[#D6A354] ${
                currentPage === 'home' ? 'text-[#D6A354] font-semibold' : 'text-[#111111]'
              }`}
            >
              Home
            </button>
            
            <button
              onClick={() => onNavigate('about')}
              className={`text-[15px] font-medium transition-colors hover:text-[#D6A354] ${
                currentPage === 'about' ? 'text-[#D6A354] font-semibold' : 'text-[#111111]'
              }`}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className={`flex items-center space-x-1 text-[15px] font-medium transition-colors hover:text-[#D6A354] ${
                  ['meta-ads', 'google-ads', 'website-development', 'app-development', 'seo', 'social-media-growth', 'services'].includes(currentPage)
                    ? 'text-[#D6A354] font-semibold'
                    : 'text-[#111111]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-fade-in z-50"
                >
                  <div className="px-4 py-2 border-b border-gray-50 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Growth Specialities
                  </div>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-[#D6A354] hover:bg-gray-50 transition-colors"
                  >
                    View All Services &rarr;
                  </button>
                  <div className="h-[1px] bg-gray-50 my-1"></div>
                  {services.map((service) => (
                    <button
                      key={service.value}
                      onClick={() => handleServiceClick(service.value)}
                      className={`w-full text-left px-4 py-2.5 text-[14px] transition-colors hover:bg-gray-50 hover:text-[#D6A354] flex items-center justify-between ${
                        currentPage === service.value ? 'text-[#D6A354] bg-gray-50 font-medium' : 'text-[#111111]'
                      }`}
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 hover:opacity-100 transition-opacity text-[#D6A354]" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('portfolio')}
              className={`text-[15px] font-medium transition-colors hover:text-[#D6A354] ${
                currentPage === 'portfolio' ? 'text-[#D6A354] font-semibold' : 'text-[#111111]'
              }`}
            >
              Our Work
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`text-[15px] font-medium transition-colors hover:text-[#D6A354] ${
                currentPage === 'contact' ? 'text-[#D6A354] font-semibold' : 'text-[#111111]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="cta-free-consultation"
              onClick={() => onNavigate('contact')}
              className="bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border border-[#0B0B0F] hover:border-[#D6A354] cursor-pointer"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#0B0B0F] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white z-40 border-t border-gray-100 animate-fade-in flex flex-col justify-between overflow-y-auto">
          <div className="px-4 pt-6 pb-4 space-y-2">
            
            <button
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-lg text-base font-semibold ${
                currentPage === 'home' ? 'bg-gray-50 text-[#D6A354]' : 'text-[#111111]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => {
                onNavigate('about');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-lg text-base font-semibold ${
                currentPage === 'about' ? 'bg-gray-50 text-[#D6A354]' : 'text-[#111111]'
              }`}
            >
              About
            </button>

            {/* Mobile Services Section */}
            <div className="py-2 px-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Services</p>
              <div className="grid grid-cols-1 gap-1 pl-2 border-l border-gray-100">
                <button
                  onClick={() => {
                    onNavigate('services');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left py-2 text-sm font-semibold text-[#D6A354]"
                >
                  Explore All Services
                </button>
                {services.map((service) => (
                  <button
                    key={service.value}
                    onClick={() => handleServiceClick(service.value)}
                    className={`text-left py-2 text-sm ${
                      currentPage === service.value ? 'text-[#D6A354] font-semibold' : 'text-[#6B7280]'
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                onNavigate('portfolio');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-lg text-base font-semibold ${
                currentPage === 'portfolio' ? 'bg-gray-50 text-[#D6A354]' : 'text-[#111111]'
              }`}
            >
              Our Work
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-lg text-base font-semibold ${
                currentPage === 'contact' ? 'bg-gray-50 text-[#D6A354]' : 'text-[#111111]'
              }`}
            >
              Contact
            </button>

          </div>

          {/* Mobile bottom callouts */}
          <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-3">
            <button
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-[#0B0B0F] text-white py-3 rounded-lg text-center font-medium block text-sm border border-[#0B0B0F]"
            >
              Get Free Consultation
            </button>
            <a
              href="https://wa.me/919999999999?text=Hi%20GY%20Marketing%20Agency,%20I%20would%20like%20to%20enquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-3 rounded-lg text-center font-medium flex items-center justify-center space-x-2 text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Contact via WhatsApp</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
