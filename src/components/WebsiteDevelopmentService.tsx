import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, Smartphone, Globe, Eye, Sparkles, CheckCircle2, ChevronRight, 
  ArrowRight, ShieldCheck, Cpu, Code, Zap, Search, Layout, HelpCircle, 
  ShoppingBag, PenTool, Home, FileText, ArrowUpRight, Target
} from 'lucide-react';
import { Page } from '../types';

interface WebsiteDevelopmentServiceProps {
  onNavigate: (page: Page) => void;
}

export default function WebsiteDevelopmentService({ onNavigate }: WebsiteDevelopmentServiceProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  // Real website work from your list and data
  const realProjects = [
    {
      id: 'hariomcreation',
      name: 'Hariom Creation',
      website: 'https://hariomcreation.in/',
      image: '/rs_1.jpg',
      category: 'e-commerce',
      description: 'A premium apparel and clothing digital storefront focusing on ethnic designs and seamless shopping loops.'
    },
    {
      id: 'royalzari',
      name: 'Royal Zari',
      website: 'https://RoyalZari.com',
      image: '/rs_2.jpg',
      category: 'e-commerce',
      description: 'Luxury heritage fashion boutique web experience custom tailored for high-end boutique clothing selectors.'
    },
    {
      id: 'healthfull',
      name: 'Healthfull',
      website: 'https://healthfull.in',
      image: '/rs_3.jpg',
      category: 'e-commerce',
      description: 'A modern e-commerce platform for healthy foods and nutrition, optimized for seamless checkout flows and organic search traffic.'
    },
    {
      id: 'fk-property',
      name: 'FK Property Solution',
      website: 'https://fkproperty.netlify.app',
      image: '/rs_4.jpg',
      category: 'real-estate',
      description: 'A high-converting real estate portal and consultation platform engineered to capture and qualify premium property investors.'
    },
    {
      id: 'panjiar-interiors',
      name: 'Panjiar Interior',
      website: 'https://panjiarinteriors.netlify.app',
      image: '/rs_5.jpg',
      category: 'portfolio',
      description: 'A luxury visual portfolio website for a premier interior design firm showcasing high-end home and commercial office transformations.'
    },
    {
      id: 'veer-teja-water-tech',
      name: 'Veerteja Water Tech',
      website: 'https://veertejawatertech.store',
      image: '/rs_1.jpg', // cycle images cleanly to keep them authentic
      category: 'business',
      description: 'An industrial B2B digital catalog and store for advanced water purification and commercial filtration systems.'
    },
    {
      id: 'cb-pharma-india',
      name: 'CB Pharma India',
      website: 'https://cbpharmaindia.com',
      image: '/rs_2.jpg',
      category: 'business',
      description: 'A global pharmaceutical trade directory and export catalog designed to represent high-compliance manufacturing operations.'
    },
    {
      id: 'suchiverse',
      name: 'Suchiverse',
      website: 'https://suchiversehub.com',
      image: '/rs_3.jpg',
      category: 'custom',
      description: 'A hyper-modern creative tech platform presenting next-generation digital services, custom software integrations, and agency projects.'
    },
    {
      id: 'auto-rescue',
      name: 'AutoRescue',
      website: 'https://autorescuee.netlify.app',
      image: '/rs_4.jpg',
      category: 'landing-pages',
      description: 'An emergency automotive roadside assistance and towing landing page structured for maximum mobile speed and call-to-action click-throughs.'
    },
    {
      id: 'nirwan-tours',
      name: 'Nirwan Tours',
      website: 'https://nirwantourstravels.netlify.app',
      image: '/rs_5.jpg',
      category: 'portfolio',
      description: 'An elegant tour catalog and holiday itinerary planning system highlighting heritage Rajasthan hospitality and custom corporate retreats.'
    },
    {
      id: 'luxe-space-interior',
      name: 'LuxeSpace Interior',
      website: 'https://luxespaceinterior.netlify.app',
      image: '/rs_1.jpg',
      category: 'portfolio',
      description: 'A gorgeous, high-end design catalog and online consultation intake platform for luxury boutique interior creations.'
    },
    {
      id: 'prime-location',
      name: 'Prime Location',
      website: 'https://primelocations.netlify.app',
      image: '/rs_2.jpg',
      category: 'real-estate',
      description: 'An executive-level real estate portal for high-value commercial properties, penthouses, and strategic land investments.'
    },
    {
      id: 'viren-vivah',
      name: 'VirenVivah',
      website: 'https://virenvivah.netlify.app',
      image: '/rs_3.jpg',
      category: 'custom',
      description: 'A warm, trustworthy community matchmaking portal focusing on verified profile registration and discrete communication.'
    }
  ];

  const benefits = [
    {
      title: "Mobile Responsive",
      desc: "Fluid layouts optimized to fit beautifully across any mobile, tablet, or desktop viewport.",
      icon: Smartphone
    },
    {
      title: "Fast Loading",
      desc: "Lightweight, production-optimized React frameworks to guarantee near-instant load speeds.",
      icon: Zap
    },
    {
      title: "SEO Friendly",
      desc: "Structured headers, clean semantic tags, and search engine schema integrations out of the box.",
      icon: Search
    },
    {
      title: "Conversion Focused",
      desc: "Strategically placed contact blocks and direct actions to maximize visitor inquiries.",
      icon: Target
    }
  ];

  const buildSectors = [
    { title: "Business Websites", icon: Globe, desc: "Sleek corporate sites displaying services, work history, and direct lead pipelines with beautiful spacing." },
    { title: "Landing Pages", icon: Layout, desc: "Single-focused promotional channels optimized specifically for ad campaigns and immediate inquiries." },
    { title: "E-commerce Websites", icon: ShoppingBag, desc: "Stunning online catalog development, direct checkout optimization, and secure store back-end integrations." },
    { title: "Portfolio Websites", icon: PenTool, desc: "A luxury visual sanctuary displaying elegant typography, seamless page transitions, and structured discovery steps." },
    { title: "Real Estate Websites", icon: Home, desc: "A high-converting real estate portal and consultation platform engineered to capture and qualify premium property investors." },
    { title: "Lead Generation Websites", icon: Target, desc: "Contact pipelines crafted specifically to capture validated inquiries, calls, and form submissions." },
    { title: "Shopify Websites", icon: ShoppingBag, desc: "Professional, custom Shopify storefront setups with secure integrations and optimized checkouts." },
    { title: "WordPress Websites", icon: FileText, desc: "Highly customizable WordPress structures, giving you complete content editing ease and direct admin control." },
    { title: "Custom Websites", icon: Code, desc: "Next-generation web applications developed from scratch in React and Tailwind CSS for superior loading speed." }
  ];

  const processSteps = [
    { step: "01", name: "Requirement & Strategy", desc: "Analyze targets, research competitive scopes, map user persona targets, and outline final engineering specifications." },
    { step: "02", name: "UI/UX Design", desc: "Create modern visual layout designs with clean typography pairings, premium gold-accented palettes, and logical spacing." },
    { step: "03", name: "Development", desc: "Write responsive, light, production-optimized React or custom layouts, keeping code clean and highly structured." },
    { step: "04", name: "Testing & Optimization", desc: "Verify mobile responsive fluidity, compress visual assets, run speed test checks, and audit interactive contact controls." },
    { step: "05", name: "Launch & Support", desc: "Deploy configurations live to premium cloud servers, index sitemaps, and offer long-term technical support." }
  ];

  const whyGyAgency = [
    { title: "Modern Design", desc: "Rejecting generic templates for custom luxury visual design systems." },
    { title: "Mobile-First Development", desc: "Strict verification of tap targets and viewport widths on mobile devices." },
    { title: "Conversion-Focused Layouts", desc: "Strategically positioned headings, badges, and primary contact steps." },
    { title: "SEO-Friendly Structure", desc: "Wired with clean semantic HTML tags and JSON-LD structured schemas." },
    { title: "Fast Performance", desc: "Engineered to minimize layout shifts and eliminate unused template weight." },
    { title: "Clear Call-to-Actions", desc: "Prominent contact triggers routing directly to phone pipelines or WhatsApp." }
  ];

  const handleCtaClick = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = activeTab === 'all' 
    ? realProjects 
    : realProjects.filter(p => p.category === activeTab);

  return (
    <div className="pt-[72px] overflow-x-hidden text-left bg-white text-[#0B0B0F] font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B0B0F] to-[#12121A] py-20 md:py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(214,163,84,0.05),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D6A354]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#D6A354]/10 border border-[#D6A354]/20 px-4 py-2 rounded-full text-xs font-semibold text-[#D6A354]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Conversion-First Web Engineering</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Websites That Turn <br />
                <span className="text-[#D6A354]">Visitors Into Customers</span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Modern, fast and conversion-focused websites designed for businesses, brands and entrepreneurs.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCtaClick}
                  className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#D6A354]/10 cursor-pointer"
                >
                  <span>Get Your Website</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => {
                    const el = document.getElementById('portfolio');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>View Our Work</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Laptop Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none bg-gray-900 rounded-2xl border border-gray-800 p-6 space-y-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D6A354]/10 rounded-full blur-2xl"></div>
                
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-[9px] text-[#D6A354] font-mono tracking-widest font-black uppercase">REACT VITE RUNTIME</span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="h-2 w-16 bg-[#D6A354] rounded"></div>
                    <div className="h-4 w-32 bg-white rounded"></div>
                  </div>
                  
                  {/* Laptop mockup representation */}
                  <div className="aspect-video bg-gray-950 rounded-lg border border-gray-800 p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <Laptop className="w-3.5 h-3.5 text-[#D6A354]" />
                      <Smartphone className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-1.5 w-1/3 bg-gray-800 rounded"></div>
                      <div className="h-3 w-3/4 bg-gray-700 rounded"></div>
                      <div className="h-1.5 w-5/6 bg-gray-800 rounded"></div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-900 text-[8px] text-gray-500 font-bold">
                      <span>Responsive Grid Active</span>
                      <span className="text-emerald-400">100% Core Web Vitals</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-950 p-2 rounded-lg border border-gray-800 text-center">
                    <span className="text-[8px] text-gray-500 font-bold block">SPEED</span>
                    <span className="text-xs font-black text-white">1.2s avg</span>
                  </div>
                  <div className="bg-gray-950 p-2 rounded-lg border border-gray-800 text-center">
                    <span className="text-[8px] text-gray-500 font-bold block">MOBILE</span>
                    <span className="text-xs font-black text-white">Fully responsive</span>
                  </div>
                  <div className="bg-gray-950 p-2 rounded-lg border border-gray-800 text-center">
                    <span className="text-[8px] text-gray-500 font-bold block">SEO</span>
                    <span className="text-xs font-black text-[#D6A354]">Audit 100</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST / VALUE SECTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((ben, idx) => {
              const Icon = ben.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-gray-50/50 border border-gray-200/60 space-y-3 hover:border-[#D6A354] transition-all duration-300">
                  <div className="h-10 w-10 rounded-xl bg-[#D6A354]/10 text-[#D6A354] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black text-[#0B0B0F]">{ben.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">{ben.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WEBSITE WORK / PORTFOLIO SECTION */}
      <section id="portfolio" className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Authentic Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Selected Website Projects
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Browse actual live website properties designed, engineered, and structured for maximum conversion capacity.
            </p>
          </div>

          {/* Project Filtering tabs */}
          <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-6 mb-10 scrollbar-none">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'e-commerce', label: 'E-commerce' },
              { id: 'real-estate', label: 'Real Estate' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'landing-pages', label: 'Landing Pages' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0B0B0F] text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid of actual website screenshots and links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[#D6A354]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Browser Address Bar */}
                  <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center space-x-1.5 select-none">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    <span className="text-[9px] text-gray-400 font-semibold truncate pl-2 font-mono">
                      {project.website.replace('https://', '').replace('/', '')}
                    </span>
                  </div>

                  {/* Screenshot Block */}
                  <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden flex items-center justify-center group border-b border-gray-100">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#0B0B0F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-[#0B0B0F] px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center space-x-2 hover:bg-[#D6A354] hover:text-[#0B0B0F] transition-all cursor-pointer"
                      >
                        <span>View Live Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Info and links */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-black text-[#0B0B0F]">{project.name}</h4>
                      <span className="text-[9px] bg-gray-100 text-gray-500 font-bold px-2.5 py-1 rounded uppercase">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                      {project.description}
                    </p>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[10px] text-gray-400 font-mono truncate max-w-[150px]">{project.website}</span>
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#D6A354] hover:text-[#0B0B0F] text-xs font-bold flex items-center space-x-1.5 cursor-pointer"
                      >
                        <span>View Website</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 4. WHAT WE BUILD */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Strategic Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              What We Build
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Bespoke web blueprints developed to meet unique industry models and scaling targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildSectors.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="p-8 bg-gray-50/50 rounded-2xl border border-gray-200/60 hover:border-[#D6A354] transition-all duration-300 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-[#D6A354]/10 text-[#D6A354] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-[#0B0B0F]">{sec.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">{sec.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. OUR WEBSITE DEVELOPMENT PROCESS */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Engineering Roadmap</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Our Website Development Process
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              A structured, transparent web engineering playbook ensuring logical delivery steps.
            </p>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-12 max-w-5xl mx-auto space-y-12">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Number bullet */}
                <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full bg-[#0B0B0F] text-white flex items-center justify-center font-bold text-xs border-4 border-gray-50">
                  {step.step}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-black text-[#0B0B0F]">{step.name}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-3xl font-semibold">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. WHY GY MARKETING AGENCY */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Bespoke Values</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Why GY Marketing Agency
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Why leading brands choose our engineering standard over standard off-the-shelf templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyGyAgency.map((item, idx) => (
              <div key={idx} className="p-8 bg-gray-50/50 rounded-2xl border border-gray-200/60 hover:border-[#D6A354] transition-all duration-300 space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D6A354] flex-shrink-0" />
                  <h3 className="text-sm font-black text-[#0B0B0F]">{item.title}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold pl-7">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-24 bg-[#0B0B0F] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,163,84,0.06),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Build a Website That Works For Your Business?
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
            Let's create a professional online presence designed to attract, engage and convert your customers. Let's build your brand standard.
          </p>
          
          <div className="pt-4">
            <button
              onClick={handleCtaClick}
              className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-10 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#D6A354]/10 cursor-pointer"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
