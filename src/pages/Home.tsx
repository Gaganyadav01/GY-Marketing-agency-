import { useState, useEffect } from 'react';
import { Page, Project } from '../types';
import { 
  ArrowRight, CheckCircle2, Star, Plus, Minus, Send, MessageSquare, 
  ShieldCheck, Cpu, Target, HelpCircle, TrendingUp, Users, Search, 
  Smartphone, Code2, Sparkles, AlertCircle, ChevronRight, Check, Network, Layers, Mail, MapPin,
  Rocket, Shield, HeartHandshake, LineChart, Bot, Phone
} from 'lucide-react';
import { motion } from 'motion/react';

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(ref);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
      ref={setRef}
      className={`${className} transition-all duration-300 ${isInView ? 'animate-in fade-in-up opacity-100' : 'opacity-0 translate-y-6'}`}
    >
      {children}
    </div>
  );
}

interface HomeProps {
  onNavigate: (page: Page) => void;
  onSelectProject: (project: Project) => void;
}

export default function Home({ onNavigate, onSelectProject }: HomeProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleCtaClick = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-[72px] overflow-x-hidden text-left bg-[#0B0B0F] text-white font-sans">
      
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-36 bg-gradient-to-b from-[#0B0B0F] via-[#0E0E14] to-[#12121A]">
        {/* Subtle background nodes & gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(214,163,84,0.06),transparent_55%)]"></div>
        <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-[#D6A354]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center space-x-1 bg-[#D6A354]/10 border border-[#D6A354]/20 px-3 py-1 rounded-full text-xs font-bold text-[#D6A354] uppercase tracking-wider">
                DIGITAL MARKETING & TECHNOLOGY SOLUTIONS
              </span>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Grow Your Business.<br />
                <span className="text-[#D6A354]">Build Your Digital Presence.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed font-medium">
                We help businesses reach the right audience, generate quality opportunities and build a stronger online presence through digital marketing and technology solutions.
              </p>
              
              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCtaClick}
                  className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#D6A354]/15 cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Premium High-Quality Image Mockup Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gray-800/80 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                <img 
                  src="/hero_growth_analytics.jpg" 
                  alt="GY Marketing Agency digital growth analytics workspace" 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500 rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST / VALUE STRIP */}
      <section className="bg-gray-950 border-y border-gray-900/60 py-10 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {[
              { title: "Performance-Focused", desc: "Measurable metrics over simple traffic boosts" },
              { title: "Customized Strategies", desc: "Campaign pipelines tailored directly around your goals" },
              { title: "Transparent Communication", desc: "Honest analytics and operational metrics always" },
              { title: "Business-Focused Solutions", desc: "Designed entirely to expand client opportunities" }
            ].map((strip, idx) => (
              <div key={idx} className="space-y-1">
                <h3 className="text-xs sm:text-sm font-black text-white">{strip.title}</h3>
                <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">{strip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Scope of Excellence</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Everything You Need to Grow Online
            </h2>
            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm font-medium">
              From advertising and SEO to websites and automation, we provide digital solutions designed around your business goals.
            </p>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Meta Ads", page: "meta-ads" as Page, icon: Rocket, desc: "High-ROI Facebook and Instagram advertising structures targeting key customer niches." },
              { title: "Google Ads", page: "google-ads" as Page, icon: Target, desc: "Capture high-intent searches instantly on Google Search, Maps, and YouTube." },
              { title: "SEO", page: "seo" as Page, icon: Shield, desc: "Technical crawls and keyword index alignment to capture long-term organic web traffic." },
              { title: "Social Media Marketing", page: "social-media-growth" as Page, icon: HeartHandshake, desc: "Cohesive aesthetic layouts and interactive community branding on major channels." },
              { title: "Social Media Growth", page: "social-media-growth" as Page, icon: TrendingUp, desc: "Aesthetic grids structure and short-form Reels optimization to expand local reach." },
              { title: "Website Development", page: "website-development" as Page, icon: Code2, desc: "Custom hand-coded React architectures focusing on extreme speeds and conversions." },
              { title: "App Development", page: "app-development" as Page, icon: Smartphone, desc: "Fluid cross-platform and native mobile business applications built to scale workflows." },
              { title: "Lead Generation", page: "contact" as Page, icon: LineChart, desc: "Highly optimized lead capture channels, quote calculators, and direct WhatsApp paths." },
              { title: "AI Chatbot", page: "contact" as Page, icon: Bot, desc: "Smarter automated assistants configured to systematically route active customer questions." },
              { title: "AI Automation", page: "contact" as Page, icon: Cpu, desc: "Streamlining complex administrative workflows and third-party API data paths easily." }
            ].map((ser, idx) => (
              <div 
                key={idx} 
                className="bg-gray-950 p-6 rounded-2xl border border-gray-900 hover:border-[#D6A354] transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3 text-left">
                  <div className="h-9 w-9 rounded-xl bg-white/5 text-[#D6A354] flex items-center justify-center border border-white/10">
                    <ser.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-white">{ser.title}</h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-semibold">{ser.desc}</p>
                </div>

                <button 
                  onClick={() => {
                    onNavigate(ser.page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[10px] text-[#D6A354] hover:text-white font-bold uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
                >
                  <span>Explore Service</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </ScrollReveal>

        </div>
      </section>

      {/* 4. WHY GY MARKETING AGENCY */}
      <section className="py-24 bg-gray-950 border-y border-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Strategic Value</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Why Choose GY Marketing Agency?
            </h2>
            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm font-medium">
              Factual, transparent, and direct methodologies focused strictly on your commercial expansion goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Strategy First", desc: "We understand your business goals before recommending digital solutions." },
              { step: "02", title: "Data-Informed Decisions", desc: "We use performance data and insights to guide optimization." },
              { step: "03", title: "Complete Digital Solutions", desc: "Marketing, websites and technology solutions under one roof." },
              { step: "04", title: "Focused on Your Growth", desc: "We build strategies around your audience, objectives and business needs." }
            ].map((col, idx) => (
              <div 
                key={idx} 
                className="bg-[#0B0B0F] p-8 rounded-2xl border border-gray-900 space-y-4 flex flex-col justify-between h-[220px]"
              >
                <span className="text-xs font-bold text-gray-500 font-mono block uppercase">{col.step} / FOCUS</span>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-black text-white">{col.title}</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-semibold">{col.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. HOW WE WORK (TIMELINE) */}
      <section className="py-24 bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Procedural Standard</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Our Simple Growth Process
            </h2>
          </ScrollReveal>

          {/* Timeline mapping: Horizontal on desktop, Vertical on mobile */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop continuous line */}
            <div className="absolute top-[34px] left-12 right-12 h-0.5 bg-gray-900 hidden md:block"></div>
            
            <ScrollReveal className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {[
                { num: "01", name: "Discover", desc: "Understand your business, audience and goals." },
                { num: "02", name: "Strategize", desc: "Build a customized digital strategy." },
                { num: "03", name: "Execute", desc: "Launch campaigns, websites and digital solutions." },
                { num: "04", name: "Optimize", desc: "Monitor performance and continuously improve." },
                { num: "05", name: "Grow", desc: "Scale what works and build long-term digital presence." }
              ].map((work, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center space-y-4">
                  {/* Node Circle */}
                  <div className="h-16 w-16 bg-[#0E0E14] border border-gray-800 rounded-full flex items-center justify-center font-mono font-bold text-sm text-[#D6A354] shadow-md">
                    {work.num}
                  </div>
                  {/* Text labels */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs sm:text-sm font-black text-white tracking-wider uppercase">{work.name}</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-semibold max-w-[160px]">{work.desc}</p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 6. OUR WORK */}
      <section className="py-24 bg-gray-950 border-y border-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center space-x-1 bg-[#D6A354]/10 border border-[#D6A354]/20 px-3 py-1 rounded-full text-[10px] font-bold text-[#D6A354] uppercase tracking-wider">
              SELECTED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Some of Our Work
            </h2>
            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm font-medium">
              Explore websites and digital projects we've worked on across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Healthfull", url: "https://healthfull.in", industry: "E-commerce / Health & Wellness", accent: "from-emerald-500/10 to-teal-500/10" },
              { name: "FK Property", url: "https://fkproperty.netlify.app", industry: "Real Estate / Property Management", accent: "from-amber-500/10 to-yellow-500/10" },
              { name: "Panjiar Interiors", url: "https://panjiarinteriors.netlify.app", industry: "Interior Design & Architecture", accent: "from-blue-500/10 to-indigo-500/10" },
              { name: "Veer Teja Water Tech", url: "https://veertejawatertech.store", industry: "Industrial Equipment & B2B", accent: "from-sky-500/10 to-blue-500/10" },
              { name: "CB Pharma India", url: "https://cbpharmaindia.com", industry: "Healthcare & Pharmaceutical", accent: "from-teal-500/10 to-cyan-500/10" },
              { name: "Suchiverse Hub", url: "https://suchiversehub.com", industry: "Technology & Web3", accent: "from-purple-500/10 to-pink-500/10" }
            ].map((proj, index) => (
              <div 
                key={index}
                className="group bg-gray-900/40 hover:bg-[#0B0B0F] rounded-2xl border border-gray-900 hover:border-[#D6A354] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-[280px]"
              >
                {/* Visual mockup tab header */}
                <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex justify-between items-center select-none">
                  <div className="flex space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/70"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/70"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400/70"></span>
                  </div>
                  <span className="text-[8px] text-gray-500 font-mono tracking-wider">{proj.name.toLowerCase().replace(/\s+/g, '')}.com</span>
                </div>

                {/* Mock content center */}
                <div className={`flex-1 bg-gradient-to-tr ${proj.accent} p-6 flex flex-col justify-center items-center text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300"></div>
                  <span className="text-[9px] bg-black text-[#D6A354] font-black px-2 py-0.5 rounded uppercase tracking-wider select-none mb-2">
                    {proj.industry.split(' / ')[0]}
                  </span>
                  <h4 className="text-base font-black text-white group-hover:scale-105 transition-transform duration-300">{proj.name}</h4>
                  <span className="text-[10px] text-gray-500 font-mono font-semibold block mt-1">{proj.industry}</span>
                </div>

                {/* View Website CTA bar */}
                <div className="p-4 bg-[#0B0B0F] border-t border-gray-900 flex justify-between items-center">
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider select-none">Live Website</span>
                  <a 
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white hover:text-[#D6A354] font-black uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
                  >
                    <span>View Website</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-12 text-center">
            <button
              onClick={() => {
                onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              View All Projects
            </button>
          </div>

        </div>
      </section>

      {/* 7. FEATURED DIGITAL MARKETING */}
      <section className="py-24 bg-[#0B0B0F] border-b border-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Conversion Pipeline</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Turn Attention Into Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                phase: "ATTRACT", 
                color: "border-[#D6A354]/40 bg-gray-950 text-white", 
                techs: ["Meta Ads", "Google Ads", "SEO Optimization"],
                desc: "Capture primary search intent and strategic customer audience parameters."
              },
              { 
                phase: "ENGAGE", 
                color: "border-gray-900 bg-[#0E0E14] text-white", 
                techs: ["Social Media", "Cohesive Content", "Website Experience"],
                desc: "Establish direct client trust through high-fidelity visual and structural assets."
              },
              { 
                phase: "CONVERT", 
                color: "border-[#D6A354]/40 bg-gray-950 text-white", 
                techs: ["Landing Pages", "Lead Generation", "Conversion-Focused Experiences"],
                desc: "Turn active reader session metrics into validated, qualified inbound enquiries."
              }
            ].map((node, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${node.color} space-y-4 flex flex-col justify-between h-[240px]`}>
                <div className="space-y-4">
                  <span className="text-xs font-black tracking-widest text-[#D6A354] block uppercase">{node.phase}</span>
                  <div className="space-y-1">
                    {node.techs.map((t, idx) => (
                      <span key={idx} className="block text-sm font-black tracking-tight">{t}</span>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 leading-relaxed font-semibold">{node.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SOCIAL MEDIA / DIGITAL PRESENCE */}
      <section className="py-24 bg-gray-950 border-b border-gray-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Integrated Systems</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Build a Stronger Digital Presence
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
            Your website, social media and advertising should work together. We help bring your digital presence together into a consistent business growth strategy.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      {/* 9. ABOUT PREVIEW */}
      <section className="py-24 bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354] block">Strategic Alliance</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Your Digital Growth Partner
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-medium">
                GY Marketing Agency helps businesses with digital marketing, online presence and technology solutions. Our approach combines strategy, creative execution and performance-focused optimization.
              </p>
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#D6A354] hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
              >
                <span>About GY Marketing Agency</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 bg-gray-950 border-y border-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Title & CTA info */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354] block">FAQ</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Frequently Asked <br />
                <span className="text-[#D6A354]">Questions</span>
              </h2>
              <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-md">
                Have questions about our services, process or pricing? Find quick answers below.
              </p>

              {/* Consultation Card */}
              <div className="p-6 rounded-2xl bg-[#0B0B0F] border border-gray-900 space-y-4 pt-6 mt-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block">Still Have Questions?</span>
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                  Let's discuss your business requirements and find the right digital solution for you.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleCtaClick}
                    className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-5 py-3 rounded-xl text-[10.5px] font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
                  >
                    Get Free Consultation
                  </button>
                  <button
                    onClick={handleCtaClick}
                    className="bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 px-5 py-3 rounded-xl text-[10.5px] font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: 8 Accordion Questions */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  q: "What services does GY Marketing Agency provide?",
                  a: "GY Marketing Agency provides Meta Ads, Google Ads, Website Development, App Development, SEO and Social Media Growth solutions for businesses and brands."
                },
                {
                  q: "Do you work with startups and small businesses?",
                  a: "Yes. Our digital marketing and development services can be customized according to your business goals, audience, requirements and budget."
                },
                {
                  q: "Do you manage Meta Ads and Google Ads?",
                  a: "Yes. We provide campaign setup, audience or keyword research, ad strategy, monitoring and optimization for Meta Ads and Google Ads, depending on the project scope."
                },
                {
                  q: "Do you build websites and mobile apps?",
                  a: "Yes. We provide website development and app development solutions based on the required features, design and business objectives."
                },
                {
                  q: "How long does it take to see SEO results?",
                  a: "SEO is a long-term process. The timeline can vary depending on the website, industry, competition, keywords, content and other factors. Specific rankings or results cannot be guaranteed."
                },
                {
                  q: "How much do your services cost?",
                  a: "Pricing depends on the service, project scope and business requirements. Contact us to discuss your requirements and receive a customized quotation."
                },
                {
                  q: "Can I get a consultation before starting?",
                  a: "Yes. You can contact GY Marketing Agency through the website enquiry form or WhatsApp to discuss your business, requirements and digital growth goals."
                },
                {
                  q: "How can I contact GY Marketing Agency?",
                  a: "You can contact us through our Contact Us page, enquiry form or WhatsApp. Our team can discuss your requirements and guide you through the next steps."
                }
              ].map((faq, i) => (
                <div 
                  key={i} 
                  className="bg-[#0B0B0F] border border-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-800"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none"
                    aria-expanded={activeFaq === i}
                  >
                    <span className="text-sm font-black text-white pr-4">{faq.q}</span>
                    <span className="text-xs text-[#D6A354] font-bold flex-shrink-0">
                      {activeFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-5 border-t border-gray-900/60 pt-4 text-xs text-gray-400 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-28 bg-[#0B0B0F] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,163,84,0.06),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed font-medium">
            Let's discuss your goals and build the right digital strategy for your business.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCtaClick}
              className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-10 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#D6A354]/10 cursor-pointer"
            >
              Start Your Project
            </button>
            <a
              href="https://wa.me/919608872151"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-white text-white hover:text-[#0B0B0F] px-10 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-lg shadow-[#25D366]/10"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 border-t border-gray-900 py-16 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          
          <div className="space-y-4">
            <h4 className="text-sm font-black tracking-widest text-white uppercase">GY MARKETING AGENCY</h4>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              Real Growth • Real Strategy • Real Results
            </p>
            <p className="leading-relaxed">
              Bhopal, Madhya Pradesh, India
            </p>
            <div className="pt-2">
              <a 
                href="https://wa.me/919608872151"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-[#25D366] text-white px-4 py-2 rounded-lg font-bold uppercase tracking-wider text-[10px] hover:bg-white hover:text-[#0B0B0F] transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat With Us</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col space-y-2 font-bold uppercase text-[10px] tracking-wider">
              <button onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D6A354] transition-colors text-left cursor-pointer">Home</button>
              <button onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D6A354] transition-colors text-left cursor-pointer">About</button>
              <button onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D6A354] transition-colors text-left cursor-pointer">Services</button>
              <button onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D6A354] transition-colors text-left cursor-pointer">Our Work</button>
              <button onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D6A354] transition-colors text-left cursor-pointer">Contact</button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">Services</h4>
            <div className="flex flex-col space-y-2 font-semibold">
              <button onClick={() => { onNavigate('meta-ads'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D6A354] transition-colors text-left cursor-pointer">Meta Ads</button>
              <button onClick={() => { onNavigate('google-ads'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D6A354] transition-colors text-left cursor-pointer">Google Ads</button>
              <button onClick={() => { onNavigate('seo'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D6A354] transition-colors text-left cursor-pointer">SEO</button>
              <button onClick={() => { onNavigate('social-media-growth'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D6A354] transition-colors text-left cursor-pointer">Social Media Marketing</button>
              <button onClick={() => { onNavigate('website-development'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D6A354] transition-colors text-left cursor-pointer">Website Development</button>
              <button onClick={() => { onNavigate('app-development'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D6A354] transition-colors text-left cursor-pointer">App Development</button>
              <button onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D6A354] transition-colors text-left cursor-pointer">Lead Generation</button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">Contact</h4>
            <div className="space-y-2 leading-relaxed">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#D6A354]" />
                <a href="tel:+919608872151" className="hover:text-[#D6A354] transition-colors font-bold">+91 9608872151</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#D6A354]" />
                <a href="mailto:digitalgagan127@gmail.com" className="hover:text-[#D6A354] transition-colors font-bold break-all">digitalgagan127@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#D6A354]" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-900 text-center text-[10px] text-gray-600 select-none">
          <p>© {new Date().getFullYear()} GY Marketing Agency. All rights reserved. Handcrafted with modern React frameworks.</p>
        </div>
      </footer>

      {/* CONVERSION: MOBILE STICKY BOTTOM CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-950/95 backdrop-blur-md border-t border-gray-800 p-3 flex justify-center md:hidden">
        <a
          href="https://wa.me/919608872151"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center shadow-lg flex items-center justify-center space-x-2"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>

    </div>
  );
}
