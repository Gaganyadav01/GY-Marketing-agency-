import { Page } from '../types';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Compass, Shield, Rocket, HeartHandshake, ArrowRight, Sparkles, 
  CheckCircle2, ChevronRight, MessageSquare, Zap, ShieldCheck, HelpCircle, 
  Network, Code2, LineChart, Cpu, Bot, TrendingUp, Smartphone, Layers
} from 'lucide-react';
import { portfolioProjects } from '../data/portfolio';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export default function About({ onNavigate }: AboutProps) {
  
  // Real active portfolio projects for showcase
  const activeWork = portfolioProjects.slice(0, 3);

  const whatWeDoServices = [
    { title: "Meta Ads", page: "meta-ads" as Page, icon: Rocket, desc: "High-ROI strategic social campaigns on Facebook & Instagram targeting active customer selectors." },
    { title: "Google Ads", page: "google-ads" as Page, icon: Target, desc: "Capturing high-intent customer search queries on Google Search, Maps, and YouTube." },
    { title: "SEO", page: "seo" as Page, icon: Shield, desc: "Technical crawls and keyword index alignment to organically capture long-term search value." },
    { title: "Social Media Marketing", page: "social-media-growth" as Page, icon: HeartHandshake, desc: "Aesthetic branding layout structures and community management across Meta channels." },
    { title: "Social Media Growth", page: "social-media-growth" as Page, icon: TrendingUp, desc: "Aesthetic grids alignment and short-form video pacing to expand follower authority." },
    { title: "Website Development", page: "website-development" as Page, icon: Code2, desc: "Custom hand-coded React and SPA architectures focused on elite load speeds and conversions." },
    { title: "App Development", page: "app-development" as Page, icon: Smartphone, desc: "Scalable, user-first native and cross-platform mobile apps structured for business use cases." },
    { title: "Lead Generation", page: "contact" as Page, icon: LineChart, desc: "Custom structured forms, qualified calculator metrics, and instant WhatsApp routing." },
    { title: "AI Chatbot Solutions", page: "contact" as Page, icon: Bot, desc: "Conversational customer service bots configured to automatically schedule visitor discovery calls." },
    { title: "AI Automation", page: "contact" as Page, icon: Cpu, desc: "Structuring programmatic backend integrations to streamline client lead flow entries." }
  ];

  const coreApproachSteps = [
    { step: "01", name: "Understand", desc: "We first understand the business, audience and goals." },
    { step: "02", name: "Strategize", desc: "We create a digital strategy based on the business objectives." },
    { step: "03", name: "Execute", desc: "We implement campaigns, websites and digital solutions with a focus on quality and usability." },
    { step: "04", name: "Optimize", desc: "We monitor performance and continuously look for opportunities to improve." }
  ];

  const builtForGoals = [
    { title: "Customized Strategies", desc: "Crafting customized campaign matrices tailored to match your specific commercial goals." },
    { title: "Performance-Focused Approach", desc: "Prioritizing objective outcomes, active clicks, and inquiries over arbitrary metric gains." },
    { title: "Modern Digital Solutions", desc: "Leveraging custom code standards, modern React grids, and high-efficiency automation nodes." },
    { title: "Transparent Communication", desc: "Presenting honest metrics reporting, crawl status data, and analytics insights cleanly." },
    { title: "Multi-Channel Expertise", desc: "Managing cross-platform campaign structures flawlessly from search index rankings to social media engagement." },
    { title: "Long-Term Growth Mindset", desc: "Constructing durable organic search value assets and robust platforms that scale over time." }
  ];

  const handleCtaClick = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6A354] block">
                ABOUT GY MARKETING AGENCY
              </span>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Helping Businesses Grow <br />
                <span className="text-[#D6A354]">in the Digital World.</span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed font-medium">
                GY Marketing Agency provides digital marketing, advertising, website and technology solutions designed to help businesses build a stronger online presence and generate more opportunities.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCtaClick}
                  className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#D6A354]/10 cursor-pointer"
                >
                  <span>Work With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => onNavigate('services')}
                  className="bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Premium Digital Agency Visual Node Graphics */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[380px] bg-gray-950 rounded-2xl border border-gray-800 p-6 space-y-5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D6A354]/10 rounded-full blur-2xl"></div>
                
                {/* Header info */}
                <div className="flex justify-between items-center border-b border-gray-900 pb-3 select-none">
                  <div className="flex items-center space-x-2">
                    <Network className="w-4 h-4 text-[#D6A354] animate-pulse" />
                    <span className="text-[10px] text-gray-400 font-mono font-bold uppercase">GY Agency Node map</span>
                  </div>
                  <span className="text-[8px] bg-[#D6A354]/10 text-[#D6A354] px-2 py-0.5 rounded border border-[#D6A354]/20 uppercase font-bold">INTEGRATED PIPELINE</span>
                </div>

                {/* Simulated ecosystem lines */}
                <div className="space-y-4">
                  {[
                    { label: "ATTRACT", tech: "Meta Ads · Google Ads · SEO", progress: "94%" },
                    { label: "ENGAGE", tech: "Social Content · High-speed React Store", progress: "99%" },
                    { label: "CONVERT", tech: "Qualified Captures · WhatsApp APIs", progress: "96%" }
                  ].map((node, i) => (
                    <div key={i} className="bg-gray-900/60 p-3.5 rounded-xl border border-gray-800/50 space-y-1.5">
                      <div className="flex justify-between items-center text-[9px] font-bold">
                        <span className="text-[#D6A354]">{node.label}</span>
                        <span className="text-gray-500 font-mono">{node.progress} EFFICIENCY</span>
                      </div>
                      <span className="text-xs text-white font-bold block">{node.tech}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center text-[8px] text-gray-500 font-bold uppercase select-none pt-1">
                  <span>*Bespoke integrated solutions</span>
                  <span className="text-[#D6A354]">GY Growth Standards</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354] block">Identity Standard</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
                Who We Are
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-lg text-gray-600 leading-relaxed font-semibold">
                GY Marketing Agency is a digital growth agency focused on helping businesses establish, improve and grow their online presence.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed font-medium mt-4">
                From paid advertising and SEO to websites, social media and digital solutions, we bring multiple growth-focused services together under one roof.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Expert Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              What We Do
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Reliable, modern digital pipelines managed seamlessly by technical growth engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whatWeDoServices.map((ser, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-gray-200/60 hover:border-[#D6A354] transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="h-9 w-9 rounded-xl bg-gray-50 text-[#D6A354] flex items-center justify-center border border-gray-100">
                    <ser.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-black text-[#0B0B0F]">{ser.title}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">{ser.desc}</p>
                </div>

                <button 
                  onClick={() => {
                    onNavigate(ser.page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[10px] text-[#D6A354] hover:text-[#0B0B0F] font-bold uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
                >
                  <span>Explore Service</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. OUR APPROACH */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Operational Timeline</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              How We Approach Growth
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              A transparent, outcome-oriented methodology focused entirely on execution quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreApproachSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-gray-50 rounded-2xl border border-gray-200/60 flex flex-col justify-between aspect-[4/3]"
              >
                <span className="text-xs font-bold text-gray-400 font-mono block uppercase">{step.step} / STEP</span>
                <div className="space-y-1.5">
                  <h4 className="text-base font-black text-[#0B0B0F]">{step.name}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY BUSINESSES WORK WITH US */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Strategic Alignment</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Built Around Your Business Goals
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Why business partners trust our objective roadmap and transparent communication pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builtForGoals.map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border border-gray-200/60 hover:border-[#D6A354] transition-all duration-300 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#D6A354] flex-shrink-0" />
                  <h3 className="text-sm font-black text-[#0B0B0F]">{item.title}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold pl-7">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. OUR SERVICES UNDER ONE ROOF (CONNECTED FLOW) */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Connected Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Our Services Under One Roof
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Visualizing how each digital segment maps together cleanly to create an efficient growth loop.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
            {[
              { 
                phase: "ATTRACT", 
                color: "border-[#D6A354]/40 bg-gradient-to-b from-[#0B0B0F] to-[#12121A] text-white", 
                techs: ["Meta Ads", "Google Ads", "SEO Optimization"],
                desc: "Capturing primary audience awareness and transactional search intent."
              },
              { 
                phase: "ENGAGE", 
                color: "border-gray-200 bg-gray-50 text-[#0B0B0F]", 
                techs: ["Social Content", "Brand Story", "Fast React Website"],
                desc: "Nurturing immediate visitor trust with elite visual alignments."
              },
              { 
                phase: "CONVERT", 
                color: "border-gray-200 bg-gray-50 text-[#0B0B0F]", 
                techs: ["Landing Pages", "Lead Qualifiers", "CRO Forms"],
                desc: "Converting active visitor attention into validated inbound inquiries."
              },
              { 
                phase: "AUTOMATE", 
                color: "border-[#D6A354]/40 bg-gradient-to-b from-[#0B0B0F] to-[#12121A] text-white", 
                techs: ["AI Chatbots", "Custom Lead Routers", "Flow Automation"],
                desc: "Streamlining backends to keep client pipelines operational 24/7."
              }
            ].map((node, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${node.color} space-y-4 flex flex-col justify-between relative`}>
                <div className="space-y-4">
                  <span className="text-xs font-black tracking-widest text-[#D6A354] block uppercase">{node.phase}</span>
                  <div className="space-y-1">
                    {node.techs.map((t, idx) => (
                      <span key={idx} className="block text-sm font-black tracking-tight">{t}</span>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] opacity-70 leading-relaxed font-semibold">{node.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7 & 8. MISSION & VISION */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission block */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/60 shadow-sm space-y-4">
              <div className="h-10 w-10 bg-[#0B0B0F] text-[#D6A354] rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-[#0B0B0F]">Our Mission</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                Our mission is to make effective digital solutions more accessible to businesses and help them build a stronger, more meaningful presence online.
              </p>
            </div>

            {/* Vision block */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/60 shadow-sm space-y-4">
              <div className="h-10 w-10 bg-[#0B0B0F] text-[#D6A354] rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-[#0B0B0F]">Our Vision</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                To become a trusted digital growth partner for businesses by combining marketing, technology and creative solutions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 9. SOME OF OUR WORK */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center space-x-1 bg-[#D6A354]/10 border border-[#D6A354]/20 px-3 py-1 rounded-full text-[10px] font-bold text-[#D6A354] uppercase tracking-wider">
              SELECTED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Turning Ideas Into Digital Experiences
            </h2>
            <p className="text-gray-500 leading-relaxed text-xs sm:text-sm font-medium">
              From business websites and e-commerce stores to real estate, interiors and other digital experiences, our previous work reflects our focus on modern design, usability and strong online presence.
            </p>
          </div>

          {/* Premium Portfolio Filter & Grid Showcase */}
          <div className="space-y-12">
            
            {/* Real portfolio list mapping */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Healthfull",
                  url: "https://healthfull.in",
                  industry: "E-commerce / Health & Wellness",
                  accent: "from-emerald-500/10 to-teal-500/10"
                },
                {
                  name: "FK Property",
                  url: "https://fkproperty.netlify.app",
                  industry: "Real Estate / Property Management",
                  accent: "from-amber-500/10 to-yellow-500/10"
                },
                {
                  name: "Panjiar Interiors",
                  url: "https://panjiarinteriors.netlify.app",
                  industry: "Interior Design & Architecture",
                  accent: "from-blue-500/10 to-indigo-500/10"
                },
                {
                  name: "Veer Teja Water Tech",
                  url: "https://veertejawatertech.store",
                  industry: "Industrial Equipment & B2B",
                  accent: "from-sky-500/10 to-blue-500/10"
                },
                {
                  name: "CB Pharma India",
                  url: "https://cbpharmaindia.com",
                  industry: "Healthcare & Pharmaceutical",
                  accent: "from-teal-500/10 to-cyan-500/10"
                },
                {
                  name: "Suchiverse Hub",
                  url: "https://suchiversehub.com",
                  industry: "Technology & Web3",
                  accent: "from-purple-500/10 to-pink-500/10"
                },
                {
                  name: "Auto Rescue",
                  url: "https://autorescuee.netlify.app",
                  industry: "Automotive & On-Demand Services",
                  accent: "from-red-500/10 to-orange-500/10"
                },
                {
                  name: "Nirwan Tours & Travels",
                  url: "https://nirwantourstravels.netlify.app",
                  industry: "Travel & Hospitality",
                  accent: "from-orange-500/10 to-yellow-500/10"
                },
                {
                  name: "Luxe Space Interior",
                  url: "https://luxespaceinterior.netlify.app",
                  industry: "Interior Design & Luxury Custom Homes",
                  accent: "from-amber-600/10 to-yellow-600/10"
                },
                {
                  name: "Prime Locations",
                  url: "https://primelocations.netlify.app",
                  industry: "Real Estate Commercial & Luxury Resale",
                  accent: "from-indigo-600/10 to-blue-600/10"
                },
                {
                  name: "Viren Vivah",
                  url: "https://virenvivah.netlify.app",
                  industry: "Matchmaking & Family Services",
                  accent: "from-pink-600/10 to-rose-600/10"
                }
              ].map((proj, index) => (
                <div 
                  key={index}
                  className="group bg-gray-50/50 hover:bg-white rounded-2xl border border-gray-200 hover:border-[#D6A354] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-[280px]"
                >
                  {/* Visual mockup tab header */}
                  <div className="bg-gray-100 px-4 py-2 border-b border-gray-200/60 flex justify-between items-center select-none">
                    <div className="flex space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    </div>
                    <span className="text-[8px] text-gray-400 font-mono tracking-wider">{proj.name.toLowerCase().replace(/\s+/g, '')}.com</span>
                  </div>

                  {/* Mock content center */}
                  <div className={`flex-1 bg-gradient-to-tr ${proj.accent} p-6 flex flex-col justify-center items-center text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300"></div>
                    <span className="text-[9px] bg-[#0B0B0F] text-[#D6A354] font-black px-2 py-0.5 rounded uppercase tracking-wider select-none mb-2">
                      {proj.industry.split(' / ')[0]}
                    </span>
                    <h4 className="text-base font-black text-[#0B0B0F] group-hover:scale-105 transition-transform duration-300">{proj.name}</h4>
                    <span className="text-[10px] text-gray-400 font-mono font-semibold block mt-1">{proj.industry}</span>
                  </div>

                  {/* View Website CTA bar */}
                  <div className="p-4 bg-white border-t border-gray-100 flex justify-between items-center">
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider select-none">Live Website</span>
                    <a 
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#0B0B0F] hover:text-[#D6A354] font-black uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
                    >
                      <span>View Website</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 10. TRUST SECTION */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Authentic Standards</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Our Professional Standards
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              A transparent growth playbook structured purely around actual verified deliverables and real engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Multi-Industry Services", desc: "Engineered specifically to support dentists, salons, industrial catalogs, e-commerce fronts, and property advisors." },
              { title: "Digital Marketing Solutions", desc: "Cohesive strategic campaigns built across Meta Ads, Google Ads, and search keyword indexes." },
              { title: "Website & Tech Solutions", desc: "Custom hand-coded frameworks that bypass slow layout tools to maximize page speeds." },
              { title: "Dedicated Client Support", desc: "Working directly with the digital engineers responsible for designing and deploying your assets." }
            ].map((col, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/60 space-y-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#D6A354]" />
                <h4 className="text-sm font-black text-[#0B0B0F]">{col.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">{col.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section className="py-24 bg-[#0B0B0F] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,163,84,0.06),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed font-medium">
            Let's create a modern digital experience for your business.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCtaClick}
              className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-10 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#D6A354]/10 cursor-pointer"
            >
              Start Your Project
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="bg-transparent hover:bg-white/5 text-white px-10 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40 cursor-pointer"
            >
              View Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
