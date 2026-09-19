import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ShieldCheck, CheckCircle2, ChevronRight, ArrowRight, MessageCircle, 
  Settings, Globe, Eye, Sparkles, TrendingUp, BarChart3, Star, AlertTriangle, 
  HelpCircle, ExternalLink, RefreshCw, Layout, BookOpen, Target, FileText
} from 'lucide-react';
import { Page } from '../types';

interface SEOServiceProps {
  onNavigate: (page: Page) => void;
}

export default function SEOService({ onNavigate }: SEOServiceProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // SEO Search Result Simulator Interactive States
  const [activeSearchTab, setActiveSearchTab] = useState<string>('organic');
  const [searchQuery, setSearchQuery] = useState<string>('best marketing agency near me');
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);

  // SEO Audit Request State
  const [auditRequested, setAuditRequested] = useState<boolean>(false);
  const [websiteUrl, setWebsiteUrl] = useState<string>('');

  const services = [
    { title: "Technical SEO", icon: "⚙️", desc: "Optimizing code structures, sitemaps, robots.txt files, schema markup, and speed metrics to ensure search engines crawl your site perfectly." },
    { title: "On-Page SEO", icon: "📝", desc: "Structuring header tags, crafting click-optimized title and description meta tags, and natural keyword alignment on copy." },
    { title: "Off-Page SEO", icon: "🔗", desc: "Building organic search authority and quality trust signals safely and systematically through white-hat methods." },
    { title: "Local SEO", icon: "📍", desc: "Optimizing visibility for location-based searches so near-me prospect intent routes directly to your doorstep." },
    { title: "E-commerce SEO", icon: "🛒", desc: "Scaling search index visibility for rich product catalogs, Category structures, and individual product pages." },
    { title: "Keyword Research", icon: "🔑", desc: "Deep analytical identification of highly relevant search phrases and keywords with transactional search intent." },
    { title: "SEO Content Strategy", icon: "📚", desc: "Structuring valuable content pillars, answering user inquiries directly, and developing structured topic authority." },
    { title: "Google Business Profile Optimization", icon: "🏪", desc: "Full calibration of your Google Maps presence to drive calls, physical visits, and positive public reviews." },
    { title: "Website SEO Audit", icon: "🔍", desc: "Meticulous structural inspection of technical barriers, crawler hurdles, keyword gaps, and accessibility errors." }
  ];

  const benefits = [
    { title: "Improve Search Visibility", desc: "Positioning your business assets systematically across targeted transactional search queries." },
    { title: "Reach Relevant Customers", desc: "Connecting directly with prospective clients who are actively looking for your exact services." },
    { title: "Increase Organic Traffic", desc: "Developing a consistent stream of inbound, non-paid website visitors month-over-month." },
    { title: "Build Online Authority", desc: "Establishing your brand as the trustworthy, expert resource inside your local or national niche." },
    { title: "Improve Website Experience", desc: "Enhancing overall user experience through faster load speeds, clean layouts, and simple navigation." },
    { title: "Generate Long-Term Opportunities", desc: "Creating a durable organic pipeline that continues to perform without recurring paid ad click costs." }
  ];

  const processSteps = [
    { step: "01", name: "Website & SEO Audit", desc: "We run a technical inspection to diagnose crawl hurdles, loading speeds, sitemap compliance, and technical structure errors." },
    { step: "02", name: "Keyword Research", desc: "We find high-value, highly relevant search terms matching exact transactional user intent to ensure we target real business inquiries." },
    { step: "03", name: "Competitor & Market Analysis", desc: "We study organic search competitors in your niche to map their keyword visibility, authority profiles, and content setups." },
    { step: "04", name: "On-Page & Technical Optimization", desc: "We refine metatags, header hierarchies, image alt tags, schema scripts, internal linking paths, and structural code components." },
    { step: "05", name: "Content & Authority Building", desc: "We construct high-quality search content structures that answer real user questions, paired with safe authority-building signals." },
    { step: "06", name: "Monitoring & Continuous Optimization", desc: "We monitor rank fluctuations, crawl indexes, impressions, clicks, and organic conversions to systematically optimize results." }
  ];

  const industrySectors = [
    { title: "Local Businesses", desc: "Dentists, salons, auto garages, plumbing experts, and neighborhood retail shops seeking nearby traffic." },
    { title: "E-commerce Stores", desc: "Product-based digital stores aiming to drive direct, low-cost organic customer acquisitions." },
    { title: "Real Estate", desc: "Brokers, property agencies, and development groups seeking organic lead captures for luxury properties." },
    { title: "Healthcare", desc: "Clinics, wellness groups, and diagnostic labs looking to capture local patient consultations." },
    { title: "Professional Services", desc: "Lawyers, consulting companies, financial advisors, and architects aiming to establish niche authority." },
    { title: "Startups", desc: "Next-gen tech solutions, app landing hubs, and SaaS properties wanting to scale non-paid traffic pipelines." },
    { title: "Personal Brands", desc: "Industry authorities, public keynote speakers, and authors who require clean search authority rankings." },
    { title: "Service-Based Businesses", desc: "Cleaning, home renovation, catering, and business-to-business services looking to capture active client search intent." }
  ];

  const whyChooseUs = [
    { title: "Customized SEO Strategy", desc: "Avoiding generic cookie-cutter methods to build customized keyword roadmaps tailored to your industry." },
    { title: "Data-Driven Approach", desc: "Formulating adjustments based purely on search volumes, competitor metrics, and real analytics signals." },
    { title: "Transparent Reporting", desc: "Presenting honest search trends, organic clicks, and index statistics clearly without complex jargon." },
    { title: "Technical & Content Optimization", desc: "A holistic strategy covering both clean backend search schemas and rich frontend copy layouts." },
    { title: "Local & National SEO", desc: "Vast experience targeting both hyper-local neighborhoods and high-volume national search landscapes." },
    { title: "Continuous Monitoring", desc: "Actively tracking search algorithm changes and index performance to keep your pages highly visible." }
  ];

  const faqs = [
    {
      q: "How long does SEO take to show results?",
      a: "SEO is a long-term process. The timeline varies depending on the website's age, competition, industry, technical condition and strategy. Generally, initial indexing improvements are visible in 1 to 3 months, with meaningful traffic development maturing within 6 to 12 months."
    },
    {
      q: "Do you guarantee Google rankings?",
      a: "No legitimate SEO strategy can guarantee a specific Google ranking. Search algorithms use hundreds of proprietary parameters. Our focus is on improving technical SEO, content value, user experience, authority, and overall search visibility to organically attract rankings."
    },
    {
      q: "Do you provide Local SEO?",
      a: "Yes, Local SEO strategies can be used to improve visibility for businesses targeting customers in specific locations. This includes configuring Google Business Profiles and local map rankings."
    },
    {
      q: "Can you work with an existing website?",
      a: "Yes, we can audit your existing website, isolate technical crawl blocks, update header tags and metatags, identify content opportunities, and enhance on-page layouts without breaking your existing brand design."
    },
    {
      q: "Do you provide SEO reports?",
      a: "Yes, SEO progress can be monitored through regular reporting and performance analysis. Reports display clear, honest sample search visibility shifts, clicks, impressions, and index status."
    }
  ];

  const handleCtaClick = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAuditRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl) return;
    setAuditRequested(true);
  };

  // Structured Data Schema for Search Results (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="pt-[72px] overflow-x-hidden text-left bg-white text-[#0B0B0F] font-sans">
      
      {/* JSON-LD Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

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
                <span>Search Engine Optimization Standard</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Get Found. Get Traffic. <br />
                <span className="text-[#D6A354]">Grow Your Business.</span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed font-medium">
                Data-driven SEO strategies designed to improve your online visibility, attract relevant traffic and generate more business opportunities.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCtaClick}
                  className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#D6A354]/10 cursor-pointer"
                >
                  <span>Get Free SEO Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <a
                  href="https://wa.me/919915228669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Talk to an SEO Expert</span>
                </a>
              </div>
            </div>

            {/* Premium SEO/Search Engine Live Simulator Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none bg-[#12121A] rounded-2xl border border-gray-800 p-6 space-y-5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D6A354]/10 rounded-full blur-2xl"></div>
                
                {/* Simulated Google Search Browser header */}
                <div className="flex items-center justify-between border-b border-gray-800 pb-3 select-none">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-black tracking-tight text-white">Google</span>
                    <span className="text-[9px] bg-gray-800 text-gray-400 font-mono px-2 py-0.5 rounded uppercase">Search Box</span>
                  </div>
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                </div>

                {/* Simulated Google Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowAutoComplete(true)}
                    onBlur={() => setTimeout(() => setShowAutoComplete(false), 200)}
                    className="w-full bg-gray-900 border border-gray-800 text-xs text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#D6A354] transition-colors"
                    placeholder="Search queries..."
                  />
                  <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                  
                  {/* Autocomplete list */}
                  <AnimatePresence>
                    {showAutoComplete && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute left-0 right-0 top-full mt-1.5 bg-[#12121A] border border-gray-800 rounded-xl overflow-hidden shadow-2xl z-20 text-xs text-gray-300 select-none"
                      >
                        {[
                          "best marketing agency near me",
                          "conversion-focused website developers",
                          "premium search engine optimization specialists",
                          "local business ranking strategies"
                        ].map((q) => (
                          <div 
                            key={q} 
                            onClick={() => setSearchQuery(q)}
                            className="p-3 hover:bg-[#D6A354]/10 hover:text-white cursor-pointer border-b border-gray-900/40 last:border-0"
                          >
                            {q}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* SERP Search Result Render Showcase */}
                <div className="bg-gray-950 p-4 rounded-xl border border-gray-800/60 space-y-3.5 relative overflow-hidden">
                  <span className="text-[8px] text-gray-500 font-bold block uppercase tracking-wider select-none">Live Organic SERP Simulation</span>
                  
                  {/* Google Ranking #1 block */}
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1.5 text-[10px] text-[#D6A354] font-semibold">
                      <span>https://gymarketingagency.com</span>
                      <ChevronRight className="w-2.5 h-2.5" />
                      <span className="text-gray-400 font-mono">seo-services</span>
                    </div>
                    
                    {/* H1 Structured anchor */}
                    <h3 className="text-xs font-black text-blue-400 hover:underline cursor-pointer">
                      SEO Services | Organic Search Optimization Specialists
                    </h3>
                    
                    <p className="text-[10px] text-gray-400 leading-relaxed font-semibold">
                      Improve your organic brand visibility, search keyword rankings, and drive premium traffic with our bespoke search engine optimization strategies.
                    </p>

                    {/* Rich snippets details */}
                    <div className="flex items-center space-x-3 pt-1 text-[8px] text-gray-500 font-bold">
                      <span className="flex items-center text-[#D6A354]">
                        <Star className="w-2.5 h-2.5 fill-[#D6A354] mr-0.5" />
                        <span>Rating: 4.9 · 11 real projects</span>
                      </span>
                      <span>• Mobile friendly</span>
                      <span className="text-emerald-400">#1 Spot Verified</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[9px] text-gray-500 font-bold select-none pt-1">
                  <span>Showing organic results index</span>
                  <span className="text-[#D6A354]">Target Location: Local Niche</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR SEO SERVICES */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Core Deliverables</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Our SEO Services
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Systematic search parameters optimized across on-page configurations, keyword indexes, and technical architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((ser, idx) => (
              <div 
                key={idx} 
                className="p-8 bg-gray-50/50 rounded-2xl border border-gray-200/60 hover:border-[#D6A354] hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <span className="text-3xl block select-none">{ser.icon}</span>
                <h3 className="text-base font-black text-[#0B0B0F]">{ser.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">{ser.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HOW SEO HELPS YOUR BUSINESS */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Strategic Value</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              How SEO Helps Your Business
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              The factual business values derived from high-converting, sustainable search engine visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/60 hover:border-[#D6A354] transition-all duration-300 space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D6A354] flex-shrink-0" />
                  <h4 className="text-sm font-black text-[#0B0B0F]">{item.title}</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold pl-7">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. OUR SEO PROCESS */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Organic Lifecycle</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Our SEO Process
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              A transparent, logical roadmap crafted to identify indexing opportunities and address technical performance gaps.
            </p>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-12 max-w-5xl mx-auto space-y-12">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Number bullet */}
                <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full bg-[#0B0B0F] text-white flex items-center justify-center font-bold text-xs border-4 border-white">
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

      {/* 5. SEO FOR DIFFERENT BUSINESSES */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Industry Niches</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              SEO Solutions for Every Business
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Factual, customized strategies mapped to the unique search behaviors of your target audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySectors.map((sector, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/60 hover:border-[#D6A354] transition-colors space-y-3">
                <h4 className="text-sm font-black text-[#0B0B0F]">{sector.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">{sector.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SEO AUDIT / REPORT SECTION */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-[#12121A] rounded-3xl border border-gray-800 p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D6A354]/5 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs text-[#D6A354] font-bold uppercase tracking-wider block">Diagnostics Audit</span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                  Know What's Holding Your Website Back
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  We analyze your website to identify technical issues, content opportunities, keyword gaps and areas that can improve your search visibility.
                </p>
              </div>

              <div className="lg:col-span-5">
                <AnimatePresence mode="wait">
                  {!auditRequested ? (
                    <motion.form 
                      onSubmit={handleAuditRequest}
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <input 
                        type="url"
                        required
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="https://yourwebsite.com"
                        className="w-full bg-gray-950 border border-gray-800 text-xs text-white placeholder-gray-500 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D6A354]"
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#D6A354] hover:bg-white text-[#0B0B0F] py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Request SEO Audit
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      className="bg-gray-950 p-6 rounded-xl border border-emerald-500/20 text-center space-y-2"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                      <h4 className="text-xs font-black text-white">Audit Request Received</h4>
                      <p className="text-[10px] text-gray-400 leading-relaxed font-semibold">
                        Our SEO engineers will examine {websiteUrl} and reach out to you within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. WHY GY MARKETING AGENCY */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Our Standard</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Why GY Marketing Agency
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Why business selectors trust our disciplined, search-standard playbook over template checklists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border border-gray-200/60 hover:border-[#D6A354] transition-all duration-300 space-y-3">
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

      {/* 8. SEO REPORTING SECTION (DASHBOARD VISUAL) */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Dashboard explanation text */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Honest Operations</span>
              <h2 className="text-3xl font-black tracking-tight text-[#0B0B0F]">
                Track Your SEO Progress
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                We believe in full operational transparency. Our monitoring systems map real indexes, organic impressions, user clicks, and dynamic keyword visibility.
              </p>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D6A354] mt-0.5" />
                  <span className="text-xs text-gray-600 font-semibold">Custom monthly reporting containing genuine search performance datasets.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D6A354] mt-0.5" />
                  <span className="text-xs text-gray-600 font-semibold">Direct access to search engine crawl indices and live traffic monitoring.</span>
                </div>
              </div>
            </div>

            {/* Premium Dashboard-style Visual Graphics */}
            <div className="lg:col-span-7">
              <div className="bg-[#0B0B0F] rounded-2xl border border-gray-800 p-6 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D6A354]/5 rounded-full blur-2xl"></div>
                
                {/* Header indicators */}
                <div className="flex justify-between items-center border-b border-gray-800 pb-4 select-none">
                  <div>
                    <span className="text-[10px] text-[#D6A354] font-black uppercase tracking-wider block">Organic Index Analytics</span>
                    <span className="text-xs font-bold text-white">Illustrative Dashboard (Sample Data)</span>
                  </div>
                  <span className="text-[8px] border border-gray-800 text-gray-500 font-mono px-2 py-1 rounded">UPDATED REAL-TIME</span>
                </div>

                {/* Performance stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Organic Traffic", val: "12,450", change: "+14.2%" },
                    { label: "Keyword Visibility", val: "1,890", change: "+8.9%" },
                    { label: "Search Impressions", val: "340K", change: "+22.5%" },
                    { label: "Goal Conversions", val: "450", change: "+11.3%" }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-gray-900 p-3.5 rounded-xl border border-gray-800/60 space-y-1 text-center">
                      <span className="text-[8px] text-gray-500 font-bold block uppercase">{stat.label}</span>
                      <span className="text-sm font-black text-white block">{stat.val}</span>
                      <span className="text-[9px] text-emerald-400 font-semibold font-mono block">{stat.change}</span>
                    </div>
                  ))}
                </div>

                {/* Graphic chart mockup */}
                <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-800/60 space-y-2">
                  <div className="flex justify-between items-center text-[9px] text-gray-500 font-bold uppercase select-none">
                    <span>Organic Traffic Performance Trend</span>
                    <span>Q1 Scaling Map</span>
                  </div>
                  
                  {/* Visual Chart Bars */}
                  <div className="h-28 flex items-end space-x-3 pt-4">
                    {[35, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-gray-800 hover:bg-[#D6A354] rounded-t-sm transition-all relative group" style={{ height: `${h}%` }}>
                        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-[#12121A] border border-gray-800 px-1.5 py-0.5 rounded text-[8px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 font-mono">
                          +{h * 12} views
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-[8px] text-gray-500 font-bold uppercase select-none pt-1">
                  <span>*Data illustrated is strictly for sample modeling parameters</span>
                  <span className="text-[#D6A354]">Standard reporting system</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Client Search Inquiries</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Clear, honest, and straightforward answers concerning custom organic search ranking standards.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = activeFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-xl border border-gray-200/60 overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setActiveFaq(isExpanded ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors cursor-pointer animate-none"
                  >
                    <span className="text-sm font-extrabold text-[#0B0B0F]">{faq.q}</span>
                    <span className={`h-6 w-6 rounded-full bg-[#0B0B0F]/5 text-[#0B0B0F] flex items-center justify-center font-bold text-xs transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="p-6 pt-0 border-t border-gray-200/60 text-xs text-gray-500 leading-relaxed font-semibold">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Internal links to related services */}
          <div className="mt-16 text-center border-t border-gray-200/60 pt-10">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Other Channels We Support</h4>
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                onClick={() => onNavigate('website-development')}
                className="text-xs bg-white hover:bg-gray-100 text-gray-600 px-4 py-2 rounded-xl border border-gray-200/60 font-semibold cursor-pointer flex items-center space-x-1"
              >
                <span>Website Development</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => onNavigate('google-ads')}
                className="text-xs bg-white hover:bg-gray-100 text-gray-600 px-4 py-2 rounded-xl border border-gray-200/60 font-semibold cursor-pointer flex items-center space-x-1"
              >
                <span>Google PPC Ads</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-24 bg-[#0B0B0F] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,163,84,0.06),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Improve Your Search Visibility?
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed font-medium">
            Let's build an SEO strategy that helps your business reach the right audience organically.
          </p>
          
          <div className="pt-4">
            <button
              onClick={handleCtaClick}
              className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-10 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#D6A354]/10 cursor-pointer"
            >
              Get Started With SEO
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
