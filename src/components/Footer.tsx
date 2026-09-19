import { Page } from '../types';
import { Mail, MessageSquare, MapPin, Instagram, Facebook, Linkedin, Youtube, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="agency-footer" className="bg-[#0B0B0F] text-white pt-16 pb-8 border-t border-[#D6A354]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top section: Brand & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-gray-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div 
              onClick={() => handleLinkClick('home')}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="h-9 w-9 bg-[#0B0B0F] rounded-lg overflow-hidden flex items-center justify-center border border-[#D6A354]/30">
                <img 
                  src="/gy_logo.png" 
                  alt="GY Marketing Agency Logo" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#D6A354] transition-colors duration-300">
                GY Marketing Agency
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Digital marketing, web development and growth solutions for modern businesses. We design premium high-converting custom channels.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/advertising_on_top?stkn=MW1qMXNuMmhndjU0Yw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-9 w-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#D6A354] hover:border-[#D6A354] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ads-by-akshay-undefined-33b40a411?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-9 w-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#D6A354] hover:border-[#D6A354] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/@gymarketingagency?si=KLHrW0nqmeTUMp9U" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-9 w-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#D6A354] hover:border-[#D6A354] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#D6A354] tracking-wider uppercase">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('about')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('portfolio')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#D6A354] tracking-wider uppercase">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('meta-ads')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Meta Ads
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('google-ads')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Google Ads
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('website-development')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Website Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('app-development')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  App Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('seo')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  SEO Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('social-media-growth')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Social Media Growth
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#D6A354] tracking-wider uppercase">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('home')} // scroll to home section
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  FAQ Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('privacy-policy')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('terms-conditions')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('refund-policy')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Refund & Cancellation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('disclaimer')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Performance Disclaimer
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Middle section: Contact info highlights */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-800 text-sm text-gray-400">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-[#D6A354]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Business Email</p>
              <a href="mailto:digitalgagan127@gmail.com" className="hover:text-white transition-colors font-medium">
                digitalgagan127@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-[#D6A354]">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">WhatsApp Assistance</p>
              <a href="https://wa.me/919608872151?text=Hi%20GY%20Marketing%20Agency" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">
                +91 9608872151
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-[#D6A354]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Headquarters</p>
              <p className="font-medium text-gray-300">Bhopal, Madhya Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © 2026 GY Marketing Agency. All rights reserved. Designed to generate premium results securely.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 p-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:border-[#D6A354] text-gray-400 hover:text-white transition-all flex items-center space-x-1 text-xs"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
