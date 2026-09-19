import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ShieldAlert, CheckCircle2, ChevronRight, X, ArrowRight, 
  MessageCircle, Info, Star, Play, TrendingUp, Sparkles, HelpCircle, 
  ExternalLink, BarChart3, Target, ShieldCheck, Layers, Eye, Laptop, Smartphone,
  DollarSign, RefreshCw, Layers3, Flame, Award, Globe
} from 'lucide-react';
import { Page } from '../types';

interface GoogleAdsServiceProps {
  onNavigate: (page: Page) => void;
}

export default function GoogleAdsService({ onNavigate }: GoogleAdsServiceProps) {
  // Lightbox / Work Sample state
  const [activeScreenshot, setActiveScreenshot] = useState<number | null>(null);

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Keyword Dashboard tabs state
  const [activeKeywordTab, setActiveKeywordTab] = useState<string>('all');

  // Reporting table sample state
  const [selectedCampaignTab, setSelectedCampaignTab] = useState<string>('all');

  // Realistic Search Result Mockup interactions
  const [activeAdHeadline, setActiveAdHeadline] = useState<number>(0);
  const adHeadlines = [
    "High-Performance Paid Acquisition | GY Agency",
    "Scale Your Inquiries & Leads | Certified Experts",
    "Data-Driven Google Ads Strategy | Maximize ROAS"
  ];

  // Actual uploaded work samples with verified figures
  const realWorkSamples = [
    {
      id: 1,
      title: "Enterprise Sales Scaling",
      image: "/ga_1.png",
      dateRange: "Lifetime Aggregated Core",
      type: "High-Volume Lead Acquisition",
      metrics: [
        { label: "Cost", val: "$22.9K" },
        { label: "Conversions", val: "1.43K" },
        { label: "Conv. Value / Cost", val: "5.22" },
        { label: "Purchases/Sales", val: "119K" }
      ],
      desc: "This dashboard displays deep acquisition scaling with an active focus on high purchase/sale values relative to initial ad spend parameters."
    },
    {
      id: 2,
      title: "Strategic Multi-Month Campaign",
      image: "/ga_2.png",
      dateRange: "Oct 1, 2020 – Mar 31, 2021",
      type: "Search & Intent Campaign",
      metrics: [
        { label: "Total Cost", val: "$1.19M" },
        { label: "Conversions", val: "29.1K" },
        { label: "Cost per Conv.", val: "$41.03" },
        { label: "Conv. Rate", val: "2.46%" }
      ],
      desc: "A verified large-budget overview showing stable cost-per-conversion benchmarks over an extended six-month execution window."
    },
    {
      id: 3,
      title: "Year-Over-Year Optimization",
      image: "/ga_3.png",
      dateRange: "Jan 1 – Dec 31, 2022 (vs. previous)",
      type: "Performance Max Integration",
      metrics: [
        { label: "Impressions", val: "8.59M" },
        { label: "Cost per Conv.", val: "$45.97" },
        { label: "Conversions", val: "6.53K" },
        { label: "Ad Cost", val: "$300K" }
      ],
      desc: "Demonstrating dual-timeline trend line comparison metrics focused on structured budget utilization over twelve months."
    },
    {
      id: 5,
      title: "Single-Day High-Intent Spike",
      image: "/ga_5.png",
      dateRange: "Nov 5, 2022",
      type: "Local Intent Search Ads",
      metrics: [
        { label: "Clicks", val: "157" },
        { label: "Impressions", val: "10K" },
        { label: "Conv. Value", val: "59K" },
        { label: "Total Cost", val: "₹371" }
      ],
      desc: "Sleek single-day performance data highlighting precise, low-cost traffic generation aligned with real-time conversion values."
    }
  ];

  // Why Google Ads Cards
  const whyCards = [
    {
      title: "Search Intent",
      desc: "Reach users who are actively searching for relevant products or services.",
      icon: Search
    },
    {
      title: "Keyword Strategy",
      desc: "Research and organize relevant search terms to build focused campaigns.",
      icon: Target
    },
    {
      title: "Targeted Advertising",
      desc: "Control targeting using location, audience signals, keywords and campaign settings.",
      icon: Layers
    },
    {
      title: "Conversion Focus",
      desc: "Track relevant actions such as enquiries, calls, form submissions or purchases when tracking is properly configured.",
      icon: BarChart3
    }
  ];

  // Google Ads Solutions
  const solutions = [
    {
      title: "Search Ads",
      desc: "Show ads when people search for relevant keywords on Google. Capture hot intent directly at the moment of lookup.",
      tag: "High Intent",
      icon: "🔍"
    },
    {
      title: "Display Ads",
      desc: "Reach audiences across millions of websites and apps within the Google Display Network using engaging visual banners.",
      tag: "Broad Awareness",
      icon: "🖼️"
    },
    {
      title: "YouTube Ads",
      desc: "Reach potential customers through targeted, cinematic video advertising placements across video categories on YouTube.",
      tag: "Video Engagement",
      icon: "🎥"
    },
    {
      title: "Performance Max",
      desc: "Use Google's automated campaign system to reach customers across all eligible Google inventory from a single campaign structure.",
      tag: "AI Automation",
      icon: "⚡"
    },
    {
      title: "Shopping Ads",
      desc: "Promote inventory with direct product photos, pricing, and ratings for eligible e-commerce retail businesses.",
      tag: "Direct Sales",
      icon: "🛒"
    },
    {
      title: "Remarketing",
      desc: "Reconnect dynamically with people who have previously interacted with your website to guide them back to conversion.",
      tag: "High ROI Retention",
      icon: "🔄"
    }
  ];

  // Google Ads Services Grid (16 items)
  const servicesList = [
    "Google Ads Account Setup", "Campaign Setup", "Keyword Research",
    "Search Campaign Management", "Display Campaigns", "YouTube Advertising",
    "Performance Max Campaigns", "Shopping Ads", "Remarketing",
    "Audience Targeting", "Ad Copy Strategy", "Conversion Tracking",
    "Landing Page Strategy", "Campaign Monitoring", "Performance Optimization",
    "Monthly Reporting"
  ];

  // Keyword Research Dashboard visual structure
  const keywordData = [
    { word: "commercial building builders", intent: "Commercial Transactional", type: "Exact Match", cpc: "₹185.00", competition: "High", campaign: "Real Estate Core" },
    { word: "luxury real estate agency near me", intent: "Local / Direct Search", type: "Phrase Match", cpc: "₹142.50", competition: "High", campaign: "Local Intent Primary" },
    { word: "hire business consultant for startups", intent: "Professional Service", type: "Broad Match Modifier", cpc: "₹92.00", competition: "Medium", campaign: "B2B Pro Advisory" },
    { word: "best e-commerce store logistics solution", intent: "B2B / Solution Hunt", type: "Phrase Match", cpc: "₹115.30", competition: "High", campaign: "E-comm Enterprise" },
    { word: "residential villas for sale in suburbia", intent: "Transactional Discovery", type: "Exact Match", cpc: "₹210.00", competition: "High", campaign: "Real Estate High-Tier" }
  ];

  // Metrics We Monitor
  const monitorMetrics = [
    { name: "CTR", title: "Click-Through Rate", desc: "The percentage ratio of ad clicks divided by total views. Demonstrates search copy relevance." },
    { name: "CPC", title: "Cost Per Click", desc: "The net amount charged each time a target prospect triggers your sponsored keyword link." },
    { name: "CPM", title: "Cost Per 1,000 Impressions", desc: "The foundational pricing index for displaying your creative assets 1,000 times within ad networks." },
    { name: "CPA", title: "Cost Per Acquisition", desc: "The advertising spend required to generate a single tracked conversion action." },
    { name: "Conversion Rate", title: "Conversion Ratio", desc: "The percentage of clicking visitors who complete a tracked landing page objective." },
    { name: "Conversions", title: "Tracked Conversions", desc: "The absolute cumulative count of user actions recorded by your tracking configurations." },
    { name: "Impressions", title: "Ad Impressions", desc: "The raw frequency index tracking how many times your sponsored listing appeared on search pages." },
    { name: "Clicks", title: "Ad Clicks", desc: "The total number of physical user click-through triggers registered across campaigns." },
    { name: "ROAS", title: "Return on Ad Spend", desc: "The metric representing campaign-generated revenue divided directly by campaign cost." }
  ];

  // Process Steps
  const processSteps = [
    { step: "01", title: "Business & Goal Research", desc: "Understand your business parameters, customer profiles, competitive margins, and core advertising objective." },
    { step: "02", title: "Keyword & Audience Research", desc: "Research relevant search terms, search volumes, buyer intent, and potential audience parameters." },
    { step: "03", title: "Campaign Structure", desc: "Build campaigns, ad groups/assets, targeting boundaries, and budget structures aligned with selected strategy." },
    { step: "04", title: "Ad & Creative Setup", desc: "Formulate highly relevant ad copy, extension assets, callouts, and landing-page visual messages." },
    { step: "05", title: "Tracking Setup", desc: "Configure appropriate Google Tag Manager, Analytics triggers, and search pixel conversions where required." },
    { step: "06", title: "Launch & Monitor", desc: "Deploy configurations live, superheating tracking layers, monitoring initial placement quality and search term reports." },
    { step: "07", title: "Optimize", desc: "Review campaign data to adjust bids, introduce negative keywords, swap underperforming creatives, and lift conversion gains." }
  ];

  // Sectors we serve
  const sectorsHelp = [
    "Real Estate", "E-commerce", "Local Businesses", "Restaurants", 
    "Healthcare & Wellness", "Education", "Professional Services", 
    "Coaches & Consultants", "B2B Businesses", "Startups"
  ];

  // Sample Reporting Table Data
  const sampleReportData = [
    { name: "Brand Authority Search", impressions: "42,500", clicks: "4,820", ctr: "11.34%", cpc: "₹18.40", conversions: "592", cpa: "₹132.00", spend: "₹88,688" },
    { name: "High-Intent Lead Gen B2B", impressions: "185,000", clicks: "5,410", ctr: "2.92%", cpc: "₹48.20", conversions: "214", cpa: "₹1,218.00", spend: "₹260,762" },
    { name: "Performance Max Discovery", impressions: "920,000", clicks: "18,400", ctr: "2.00%", cpc: "₹21.10", conversions: "650", cpa: "₹597.00", spend: "₹388,240" },
    { name: "Dynamic Retargeting Asset", impressions: "28,400", clicks: "1,120", ctr: "3.94%", cpc: "₹15.50", conversions: "98", cpa: "₹177.00", spend: "₹17,360" }
  ];

  // FAQs Accordion Answers
  const faqs = [
    {
      q: "What is Google Ads?",
      a: "Google Ads is a paid search marketing platform that operates on a pay-per-click (PPC) model. It allows businesses to bid on terms to display sponsored advertisements, search snippets, shopping cards, and video creatives directly inside search result streams, YouTube videos, and eligible network websites."
    },
    {
      q: "Which Google Ads campaign type is suitable for my business?",
      a: "The ideal format depends heavily on your industry. Businesses with immediate search intent (such as home repair or real estate builders) usually benefit most from Search campaigns. E-commerce shops favor Shopping and Performance Max campaigns, while brands looking to generate high-volume awareness rely on Display and YouTube formats."
    },
    {
      q: "How much should I spend on Google Ads?",
      a: "There is no static minimum budget. Setup limits depend completely on local keywords competition, search volume metrics, and campaign scope. We recommend allocating a budget that yields sufficient data volume (typically at least 15-20 clicks per day) to allow the algorithms to optimize."
    },
    {
      q: "Can Google Ads generate leads?",
      a: "Yes, when paired with high-performance search keyword targeting and a structured, quick-loading landing page, search advertising is highly effective for capturing real-time commercial inquiries, form inputs, and phone calls."
    },
    {
      q: "Do you provide keyword research?",
      a: "Yes. Every campaign setup includes comprehensive search term analysis. We look at monthly volume statistics, estimated cost-per-click values, buyer intent metrics, and historical competitive bid rates."
    },
    {
      q: "Do you set up conversion tracking?",
      a: "Yes. We configure core tracking events—such as form submissions, clicks on call buttons, WhatsApp interactions, or direct transactions—to ensure that all ad budgets are monitored against real-time conversion feedback."
    },
    {
      q: "Can you manage existing Google Ads accounts?",
      a: "Yes, we can conduct thorough keyword structure and placement audits on existing setups, identifying keyword waste and adjusting bids structure to clean up historic performance limits."
    },
    {
      q: "Do I need a landing page?",
      a: "We highly recommend a dedicated, focused landing page. Campaigns that send expensive paid traffic to general homepages usually experience higher bounce rates and significantly higher cost-per-conversion indices."
    },
    {
      q: "How do you monitor campaign performance?",
      a: "We check campaigns daily for search term matches, budget utilization, ad rank health, and negative keyword exclusions. We provide unified metrics breakdowns covering all active metrics."
    },
    {
      q: "How can I get started?",
      a: "To begin, click 'Get Free Consultation' to message or schedule a strategy meeting. We will discuss your commercial metrics, budget range, and current online resources."
    }
  ];

  const handleCtaClick = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeSample = activeScreenshot !== null ? realWorkSamples.find(s => s.id === activeScreenshot) : null;

  return (
    <div className="pt-[72px] overflow-x-hidden text-left bg-white text-[#0B0B0F] font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B0B0F] to-[#12121A] py-20 md:py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(214,163,84,0.06),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D6A354]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#D6A354]/10 border border-[#D6A354]/20 px-4 py-2 rounded-full text-xs font-semibold text-[#D6A354]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Certified Google Partners Channel</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Google Ads That Put <br className="hidden sm:inline" />
                Your Business In Front Of <br />
                <span className="text-[#D6A354]">The Right Customers</span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Reach people when they are actively searching for products and services like yours with strategically planned Google Ads campaigns.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCtaClick}
                  className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#D6A354]/10 hover:shadow-none cursor-pointer"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => {
                    const el = document.getElementById('work-samples');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>View Our Work</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Hero Premium Visual Dashboard & Laptop Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none bg-gray-900 rounded-2xl border border-gray-800 p-6 space-y-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D6A354]/10 rounded-full blur-2xl"></div>
                
                {/* Visual Title / Browser bar */}
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-bold tracking-wider uppercase font-mono">Intent Tracker Engine</span>
                </div>

                {/* Simulated search results search bar */}
                <div className="bg-gray-950 p-3 rounded-lg border border-gray-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Search className="w-3.5 h-3.5 text-[#D6A354]" />
                    <span className="text-[10px] text-gray-300 font-bold truncate">keyword targeting active ...</span>
                  </div>
                  <div className="bg-[#D6A354]/10 text-[#D6A354] px-2 py-0.5 rounded text-[9px] font-black uppercase font-mono">
                    CPC Cap
                  </div>
                </div>

                {/* Metric overview cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-950 p-3.5 rounded-xl border border-gray-800 space-y-1">
                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Search Campaigns</span>
                    <p className="text-sm font-black text-[#D6A354]">98.2% Imp. Share</p>
                  </div>
                  <div className="bg-gray-950 p-3.5 rounded-xl border border-gray-800 space-y-1">
                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Conversion rate</span>
                    <p className="text-sm font-black text-white">9.12% Avg</p>
                  </div>
                </div>

                {/* Dynamic mini-bar chart visual representation */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-gray-400 font-bold">Daily Conversion Attribution Feed</span>
                    <span className="text-emerald-400 font-black flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>+14.2%</span>
                    </span>
                  </div>
                  <div className="h-16 flex items-end space-x-1 pt-2">
                    {[35, 45, 30, 60, 50, 75, 90, 65, 80, 95].map((val, i) => (
                      <div key={i} className="flex-1 bg-gray-800 hover:bg-[#D6A354] rounded transition-all duration-300" style={{ height: `${val}%` }}></div>
                    ))}
                  </div>
                </div>

                {/* Subtitle / Badge */}
                <div className="pt-2 flex items-center justify-between text-[9px] text-gray-500 border-t border-gray-800">
                  <span className="font-semibold">Performance Charts Sandbox</span>
                  <span className="font-bold text-[#D6A354]">GY Luxury Division</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Why Google Ads Section */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Active Intent Targeting</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Why Google Ads?
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                Google Ads can help businesses reach potential customers at different stages of their buying journey, from active search intent to discovery and remarketing.
              </p>
              
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200/60 space-y-4">
                <div className="flex items-center space-x-3 text-sm font-bold text-[#0B0B0F]">
                  <ShieldCheck className="w-5 h-5 text-[#D6A354]" />
                  <span>Intent Optimization Standards</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Unlike passive social feeds, search traffic is defined by active demand parameters. We structuralize keyword targeting models so you pay only when direct interest exists.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div key={idx} className="p-8 rounded-2xl border border-gray-200/60 bg-white hover:border-[#D6A354] hover:shadow-xl hover:shadow-[#D6A354]/5 transition-all duration-300 space-y-4">
                    <div className="h-10 w-10 rounded-xl bg-[#D6A354]/10 flex items-center justify-center text-[#D6A354]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B0B0F]">{card.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Real Campaign Dashboard Section (OUR WORK WITH SCREENSHOTS) */}
      <section id="work-samples" className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Real Work Samples</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Verified Google Ads Performance
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Explore actual metric snapshots captured from Google Ads Manager campaigns managed and monitored through our specialized setup patterns.
            </p>
          </div>

          {/* Grid of actual campaign screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {realWorkSamples.map((sample) => (
              <div 
                key={sample.id} 
                className="group relative bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#D6A354]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                onClick={() => setActiveScreenshot(sample.id)}
              >
                {/* Browser address bar */}
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center space-x-1.5 select-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <span className="text-[10px] text-gray-400 font-semibold truncate pl-2 font-mono">{sample.title}</span>
                </div>

                {/* Screenshot Visual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-900 border-b border-gray-100 flex items-center justify-center">
                  <img 
                    src={sample.image} 
                    alt={sample.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#0B0B0F]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/95 text-[#0B0B0F] px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center space-x-2">
                      <Eye className="w-3.5 h-3.5 text-[#D6A354]" />
                      <span>Verify Dashboard Numbers</span>
                    </div>
                  </div>
                </div>

                {/* Screenshot Info and Stats */}
                <div className="p-6 space-y-4 bg-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#D6A354] bg-[#D6A354]/10 px-2.5 py-1 rounded">{sample.type}</span>
                    <span className="text-[10px] text-gray-400 font-semibold font-mono">{sample.dateRange.split('(')[0]}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#0B0B0F]">{sample.title}</h4>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-4 gap-2 pt-3 border-t border-gray-100">
                    {sample.metrics.map((met, idx) => (
                      <div key={idx} className="space-y-1">
                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tight block truncate">{met.label}</span>
                        <span className="text-xs font-black text-[#0B0B0F]">{met.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-[10px] text-gray-400 leading-relaxed font-semibold max-w-2xl mx-auto">
            *Performance Policy Notice: These screenshots represent direct platform evidence of active client campaign dashboards. These results do not promise typical averages or represent guaranteed returns for any industry.
          </div>
        </div>
      </section>

      {/* 4. Google Ads Solutions (Campaign Types) */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Placements & Formats</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Google Ads Solutions
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Strategically selected formats mapped to meet precise commercial objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, idx) => (
              <div key={idx} className="p-8 bg-gray-50/50 rounded-2xl border border-gray-200/60 hover:border-[#D6A354] transition-all duration-300 space-y-4 relative overflow-hidden group">
                <div className="absolute top-4 right-4 bg-white/80 border border-gray-100 px-2.5 py-1 rounded text-[9px] font-bold text-[#0B0B0F]">
                  {sol.tag}
                </div>
                
                <span className="text-3xl block select-none pt-2">{sol.icon}</span>
                <h3 className="text-lg font-bold text-[#0B0B0F]">{sol.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{sol.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-[10px] text-gray-400 font-semibold max-w-lg mx-auto">
            *Note: Not every campaign type is suitable for every business structure. Setup selections depend heavily on local keyword metrics and commercial models.
          </div>
        </div>
      </section>

      {/* 5. Keyword Research Section (Reach Customers With The Right Search Terms) */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Semantic Engineering</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
                Reach Customers With The Right Search Terms
              </h2>
              <p className="text-gray-500 leading-relaxed text-xs sm:text-sm">
                We research relevant search terms and organize them according to business goals, search intent and campaign structure.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-3 text-xs font-bold text-gray-700">
                  <div className="h-6 w-6 rounded bg-[#D6A354]/10 text-[#D6A354] flex items-center justify-center text-[10px]">1</div>
                  <span>High-Intent Commercial Focus</span>
                </div>
                <div className="flex items-center space-x-3 text-xs font-bold text-gray-700">
                  <div className="h-6 w-6 rounded bg-[#D6A354]/10 text-[#D6A354] flex items-center justify-center text-[10px]">2</div>
                  <span>Negative Keywords Scrubbing</span>
                </div>
              </div>
            </div>

            {/* Keyword Dashboard Mockup Visual */}
            <div className="lg:col-span-7 bg-[#0B0B0F] p-6 rounded-2xl border border-gray-800 text-white space-y-4 shadow-2xl relative">
              <div className="absolute top-4 right-4 bg-gray-800 border border-gray-700 text-gray-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase select-none">
                SAMPLE DATA
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Search Terms Research Panel</h4>
                <p className="text-[9px] text-gray-400">Target metrics extracted from strategic keyword mapping models.</p>
              </div>

              {/* Keyword Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-[10px] text-left text-gray-300">
                  <thead className="text-[8px] uppercase text-gray-500 border-b border-gray-800">
                    <tr>
                      <th className="py-2.5">Keyword</th>
                      <th className="py-2.5">Match Type</th>
                      <th className="py-2.5 text-right">Est. CPC</th>
                      <th className="py-2.5 text-right">Competition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/50">
                    {keywordData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-900/40 transition-colors">
                        <td className="py-3 font-bold text-[#D6A354]">{row.word}</td>
                        <td className="py-3 text-gray-400 font-semibold">{row.type}</td>
                        <td className="py-3 text-right font-black text-white">{row.cpc}</td>
                        <td className="py-3 text-right">
                          <span className="bg-red-500/15 text-red-400 border border-red-500/20 px-1.5 py-0.5 rounded font-mono text-[8px] font-bold">
                            {row.competition}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-2 border-t border-gray-800 text-[8px] text-gray-500 leading-relaxed font-semibold">
                *Values listed inside the research table represent simulated estimations based on average benchmark indicators. Actual live bidding values change in real time.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Search Ads visual mockup section */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Search Result Mockup */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                </div>
                <span className="text-[10px] text-gray-400 font-bold font-mono">Conceptual Mockup</span>
              </div>

              {/* Sponsored Result Box */}
              <div className="p-5 border border-gray-100 rounded-xl bg-gray-50/50 space-y-2.5">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-extrabold text-gray-800 tracking-wider uppercase font-mono bg-gray-200 px-1.5 py-0.5 rounded">Sponsored</span>
                  <span className="text-xs font-bold text-gray-400 font-mono">https://www.gymarketing.agency/google-ads</span>
                </div>

                <div className="space-y-1.5">
                  {/* Headline */}
                  <h4 className="text-sm sm:text-base font-extrabold text-blue-600 hover:underline cursor-pointer leading-tight">
                    {adHeadlines[activeAdHeadline]}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Capture active purchase intent across search streams. Maximize commercial ROI using targeted keyword structures and deep analytics optimization.
                  </p>
                </div>

                {/* Sitelink Extensions mockup */}
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-100/80 text-[10px]">
                  <div>
                    <span className="font-bold text-blue-600 hover:underline cursor-pointer block">Get Free Consultation</span>
                    <span className="text-gray-400">Speak with our certified ad planners today.</span>
                  </div>
                  <div>
                    <span className="font-bold text-blue-600 hover:underline cursor-pointer block">Our Portfolio Metrics</span>
                    <span className="text-gray-400">Review transparent campaign case evidence.</span>
                  </div>
                </div>
              </div>

              {/* Interface Interactive Toggles */}
              <div className="pt-3 flex justify-between items-center text-[10px] text-gray-400 font-bold">
                <span>Toggle ad variations:</span>
                <div className="flex space-x-1.5">
                  {adHeadlines.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveAdHeadline(i)}
                      className={`h-6 w-6 rounded-md font-bold transition-all cursor-pointer ${
                        activeAdHeadline === i ? 'bg-[#0B0B0F] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Placements Proofing</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
                Search Ads Placement
              </h2>
              <p className="text-gray-500 leading-relaxed text-xs sm:text-sm">
                Ensure maximum click share when targets run active keyword searches. We build layouts designed to achieve top ad ranks while defending your bids limit.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Conversion Tracking Section (Track What Matters) */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Data Accuracy</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Track What Matters
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Properly configured conversion tracking can help measure actions such as:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                "Form Submissions", "Phone Calls", "Website Enquiries",
                "Purchases", "Sign-ups", "WhatsApp Clicks", "Landing Page Actions"
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-gray-200 bg-white flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D6A354] flex-shrink-0" />
                  <span className="text-xs font-bold text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Visual Conversion Funnel */}
            <div className="lg:col-span-7 bg-[#0B0B0F] p-8 rounded-2xl border border-gray-800 text-white relative">
              <div className="absolute top-4 right-4 bg-gray-800 text-gray-400 text-[8px] px-2 py-0.5 rounded font-bold uppercase select-none">
                Tracking Infrastructure
              </div>
              
              <h4 className="text-xs font-bold tracking-wider text-[#D6A354] uppercase mb-6 font-mono">Conversion Funnel Cycle</h4>

              <div className="space-y-4">
                {[
                  { name: "Ad Trigger", desc: "User views & clicks on ad placement" },
                  { name: "Landing Page", desc: "User lands on focused design layout" },
                  { name: "User Action", desc: "Prospect completes form or triggers call" },
                  { name: "Conversion Record", desc: "System records conversion event" },
                  { name: "Optimization Loop", desc: "Bid adjustments made on data feedback" }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="h-6 w-6 rounded-full bg-gray-900 border border-gray-800 text-[#D6A354] text-[10px] font-black flex items-center justify-center">
                      {idx + 1}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">{step.name}</span>
                      <span className="text-[10px] text-gray-400 font-medium">{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 text-[9px] text-gray-500 font-semibold leading-relaxed">
                *Integration Notice: Conversion tracking depends completely on correct website installation, active Google Ads container structures, and Google Analytics/tag manager triggers.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Our Google Ads Services (The 16 premium services grid) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Strategic Framework</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Our Google Ads Services
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Every critical tactical setup and optimization module included inside your advertising campaign scope.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesList.map((serv, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-gray-200/60 bg-gray-50/50 flex items-center space-x-3 hover:border-[#D6A354] transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-[#D6A354] flex-shrink-0" />
                <span className="text-xs font-bold text-gray-700 leading-relaxed">{serv}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. What We Monitor Metric Cards */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Core Parameters</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              What We Monitor
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Performance parameters tracked continuously to make data-informed optimization decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitorMetrics.map((m, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/60 flex flex-col justify-between hover:border-[#D6A354] hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="inline-block bg-[#0B0B0F] text-[#D6A354] text-xs font-bold px-3 py-1 rounded-md mb-4 font-mono">
                    {m.name}
                  </div>
                  <h4 className="text-base font-bold text-[#0B0B0F] mb-2">{m.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Google Ads Management Process */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Step-By-Step Playbook</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              How We Manage Google Ads
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              A structured management methodology engineered to maximize focus and protect ad spend.
            </p>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-12 max-w-5xl mx-auto space-y-12">
            {processSteps.map((p, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Step Marker */}
                <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full bg-[#0B0B0F] text-white flex items-center justify-center font-bold text-xs border-4 border-gray-50">
                  {p.step}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-[#0B0B0F]">{p.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-3xl">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. Who We Help */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Industrial Alignment</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Google Ads For Different Business Goals
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Strategic search solutions mapped for diverse commercial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {sectorsHelp.map((sect, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center text-center space-y-3 hover:border-[#D6A354] transition-colors">
                <span className="h-2 w-2 rounded-full bg-[#D6A354]"></span>
                <span className="text-xs font-bold text-[#0B0B0F]">{sect}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-[10px] text-gray-400 font-semibold max-w-lg mx-auto">
            *Outcome Standard: Campaign results are never identical. We do not promise, pledge, or guarantee specific inquiry ratios or financial returns for any sector listed above.
          </div>
        </div>
      </section>

      {/* 12. Landing Page Connection */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Conversion Optimizing</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
                Ads + Landing Page = Better User Journey
              </h2>
              <p className="text-gray-500 leading-relaxed text-xs sm:text-sm">
                Google Ads performance is influenced not only by the advertising campaign but also by the relevance, speed, usability and messaging of the landing page.
              </p>
              
              <button
                onClick={handleCtaClick}
                className="bg-[#D6A354] hover:bg-[#0B0B0F] hover:text-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 cursor-pointer shadow-lg shadow-[#D6A354]/10"
              >
                <span>Build My Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Visual Funnel Representation */}
            <div className="lg:col-span-7 bg-[#0B0B0F] p-8 rounded-2xl border border-gray-800 text-white relative">
              <div className="absolute top-4 right-4 bg-gray-800 text-gray-400 text-[8px] px-2.5 py-1 rounded font-bold uppercase select-none">
                Strategic Alignment
              </div>

              <div className="grid grid-cols-4 gap-2 text-center items-center relative pt-4">
                {[
                  { name: "Google Search", icon: "🔍", desc: "User types query" },
                  { name: "Advertisement", icon: "📢", desc: "User views/clicks" },
                  { name: "Landing Page", icon: "🌐", desc: "Highly relevant design" },
                  { name: "Inquiry/Sales", icon: "💰", desc: "Desired outcome" }
                ].map((node, i) => (
                  <div key={i} className="space-y-2 relative">
                    <div className="h-12 w-12 rounded-full bg-gray-900 border border-gray-800 text-[#D6A354] text-lg flex items-center justify-center mx-auto">
                      {node.icon}
                    </div>
                    <span className="text-[10px] font-bold text-white block truncate">{node.name}</span>
                    <span className="text-[8px] text-gray-500 font-medium block leading-tight">{node.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 13. Reporting & Transparency (Clear Campaign Reporting with SAMPLE DATA) */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Data Sincerity</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
                Clear Campaign Reporting
              </h2>
              <p className="text-gray-500 leading-relaxed text-xs sm:text-sm">
                We monitor relevant campaign metrics and use available data to understand performance and identify optimization opportunities.
              </p>
            </div>

            {/* Premium Table Visual */}
            <div className="lg:col-span-8 bg-[#0B0B0F] p-6 rounded-2xl border border-gray-800 text-white space-y-6 shadow-2xl relative">
              <div className="absolute top-4 right-4 bg-gray-800 border border-gray-700 text-gray-400 text-[10px] px-2.5 py-1 rounded font-bold uppercase select-none">
                SAMPLE DATA
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Demo Performance Ledger</h4>
                <p className="text-[9px] text-gray-400">Illustrative report showing campaign allocation breakdowns.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-[10px] text-left text-gray-300">
                  <thead className="text-[8px] uppercase text-gray-500 border-b border-gray-800">
                    <tr>
                      <th className="py-2.5">Campaign</th>
                      <th className="py-2.5 text-right">Impressions</th>
                      <th className="py-2.5 text-right">Clicks</th>
                      <th className="py-2.5 text-right">CTR</th>
                      <th className="py-2.5 text-right">CPC</th>
                      <th className="py-2.5 text-right">Conversions</th>
                      <th className="py-2.5 text-right">CPA</th>
                      <th className="py-2.5 text-right">Spend</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/40">
                    {sampleReportData.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-900/40 transition-colors">
                        <td className="py-3 font-bold text-[#D6A354]">{row.name}</td>
                        <td className="py-3 text-right font-semibold text-white">{row.impressions}</td>
                        <td className="py-3 text-right font-semibold text-white">{row.clicks}</td>
                        <td className="py-3 text-right font-semibold text-gray-400">{row.ctr}</td>
                        <td className="py-3 text-right font-semibold text-gray-400">{row.cpc}</td>
                        <td className="py-3 text-right font-semibold text-[#D6A354]">{row.conversions}</td>
                        <td className="py-3 text-right font-semibold text-white">{row.cpa}</td>
                        <td className="py-3 text-right font-black text-white">{row.spend}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-[8px] text-gray-500 leading-relaxed font-semibold">
                *The ledger represents sample reference parameters for strategic modeling purposes.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 14. Important Trust Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B0B0F]/5 border-l-4 border-amber-500 p-8 rounded-r-2xl space-y-4">
            <div className="flex space-x-3 items-center">
              <ShieldAlert className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <h3 className="text-base font-bold text-[#0B0B0F]">Google Ads Performance Depends On Multiple Factors</h3>
            </div>
            
            <p className="text-xs text-gray-600 leading-relaxed">
              Google Ads performance is variable and can change depending on multiple market and business elements. Results depend on a combinations of parameters:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold text-gray-700">
              {[
                "Target industry space",
                "Keyword bidding competition",
                "Seasonal search demands",
                "Ad copy relevance score",
                "Chosen landing page speed & speed score",
                "Pacing budget boundaries",
                "Physical placement locations",
                "Google system algorithms settings",
                "Conversion tracking health status",
                "Global market conditions"
              ].map((factor, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  <span>{factor}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 leading-relaxed pt-2 border-t border-gray-200/60 font-semibold">
              *Transparency Standard: We DO NOT promise or guarantee leads volume, sales quotas, specific ROI return indexes, organic keyword placements rankings, typical CPC cost floors, or fixed conversion metrics numbers.
            </p>
          </div>
        </div>
      </section>

      {/* 15. FAQ Section (Accordion) */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Honest, clear, and professional answers concerning Google Ads campaigns.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl border border-gray-200/60 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors cursor-pointer"
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
                        <div className="p-6 pt-0 border-t border-gray-100 text-xs text-gray-500 leading-relaxed font-semibold">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 16. Final CTA Section */}
      <section className="py-20 bg-[#0B0B0F] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,163,84,0.06),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Ready To Reach More Customers On Google?
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
            Let's discuss your business goals and create a Google Ads strategy around your audience and objectives. Let's make every search click count.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <button
              onClick={handleCtaClick}
              className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 w-full sm:auto cursor-pointer"
            >
              Get Free Consultation
            </button>
            
            <a
              href="https://wa.me/919915228669"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-emerald-500/10 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-emerald-500/30 hover:border-emerald-500 flex items-center justify-center space-x-2 w-full sm:auto cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400/10" />
              <span>Chat On WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeScreenshot !== null && activeSample && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B0B0F]/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveScreenshot(null)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={() => setActiveScreenshot(null)}
                className="absolute top-4 right-4 z-10 bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] p-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Screenshot Image visual */}
              <div className="md:w-3/5 bg-gray-950 flex items-center justify-center aspect-video md:aspect-auto">
                <img 
                  src={activeSample.image} 
                  alt={activeSample.title} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Metrics Description Card */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>Verified Snapshot</span>
                  </div>
                  
                  <h3 className="text-xl font-black text-[#0B0B0F]">{activeSample.title}</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider font-mono">{activeSample.type}</p>
                </div>

                {/* Dashboard Specific Metrics */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  {activeSample.metrics.map((met, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                      <span className="text-xs text-gray-500 font-bold">{met.label}</span>
                      <span className="text-sm font-black text-[#0B0B0F]">{met.val}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-start space-x-2 text-[10px] text-gray-400 font-medium">
                    <Info className="w-3.5 h-3.5 text-[#D6A354] flex-shrink-0 mt-0.5" />
                    <span>This screenshot captures authentic Google Ads dashboard metrics. Values are presented exactly as recorded in active management logs.</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
