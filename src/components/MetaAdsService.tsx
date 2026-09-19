import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Target, BarChart3, Search, Play, ArrowRight, CheckCircle2, 
  TrendingUp, ShieldAlert, FileSpreadsheet, Eye, Sparkles, MessageCircle, 
  Layers, ChevronRight, X, ExternalLink, Info, Activity, ShieldCheck
} from 'lucide-react';
import { Page } from '../types';

interface MetaAdsServiceProps {
  onNavigate: (page: Page) => void;
}

export default function MetaAdsService({ onNavigate }: MetaAdsServiceProps) {
  // Screenshot / Work Sample state
  const [activeScreenshot, setActiveScreenshot] = useState<number | null>(null);
  
  // Custom dashboard interaction state
  const [selectedDemoCampaign, setSelectedDemoCampaign] = useState<string>('campaign1');

  // Real work samples matching the five uploaded screenshots exactly
  const workSamples = [
    {
      id: 1,
      campaignName: "Vikram 15 9 26",
      results: "80 Website Subscribes",
      costPerResult: "₹13.76",
      spent: "₹1,100.92",
      image: "/rs_1.jpg",
      status: "Active",
      type: "Engagement / Subscription"
    },
    {
      id: 2,
      campaignName: "Gurraj 1",
      results: "105 Website Subscribes",
      costPerResult: "₹26.75",
      spent: "₹2,808.64",
      image: "/rs_2.jpg",
      status: "Active",
      type: "Audience Retargeting"
    },
    {
      id: 3,
      campaignName: "Vishnu 15 9 26",
      results: "96 Website Subscribes",
      costPerResult: "₹26.83",
      spent: "₹2,575.46",
      image: "/rs_3.jpg",
      status: "Active",
      type: "Lead Gen Optimization"
    },
    {
      id: 4,
      campaignName: "abhi 10 9 26 - Copy 3",
      results: "22 Website Subscribes",
      costPerResult: "₹14.74",
      spent: "₹324.24",
      image: "/rs_4.jpg",
      status: "Active",
      type: "Local Traffic Conversion"
    },
    {
      id: 5,
      campaignName: "dakhs - Copy",
      results: "79 Website Subscribes",
      costPerResult: "₹13.00",
      spent: "₹1,027.13",
      image: "/rs_5.jpg",
      status: "Active",
      type: "Custom Creative Scaling"
    }
  ];

  // What We Monitor Metric Explanations
  const monitorMetrics = [
    { name: "CPM", title: "Cost per 1,000 Impressions", desc: "The cost paid for every 1,000 times your ad is shown on Facebook or Instagram. It indicates overall audience competitiveness." },
    { name: "CPC", title: "Cost Per Click", desc: "The average fee charged when a user clicks your advertisement link. It measures the relevance and interest of the ad creative." },
    { name: "CTR", title: "Click-Through Rate", desc: "The percentage ratio of click outcomes relative to overall impressions. Higher CTR values reflect stronger creative alignment." },
    { name: "CPA", title: "Cost Per Acquisition/Result", desc: "The average cost to acquire a desired user conversion action (subscription, form sign-up, checkout trigger)." },
    { name: "CPL", title: "Cost Per Lead", desc: "The precise capital incurred to capture a unique prospective client's contact details inside lead capture pipelines." },
    { name: "ROAS", title: "Return on Ad Spend", desc: "The absolute efficiency factor computed by dividing generated sales revenue by total advertising budget consumed." },
    { name: "Reach", title: "Unique Reach", desc: "The cumulative count of separate individual consumer accounts who view your promotional materials at least once." },
    { name: "Impressions", title: "Ad Displays", desc: "The total number of times ads were displayed on screens (re-viewed ads from same profiles included)." },
    { name: "Results", title: "Conversion Goal", desc: "The specific operational outcome chosen in campaign setups—such as qualified leads or website subscribes." }
  ];

  // Campaign management process
  const processSteps = [
    { step: "01", name: "Business & Audience Research", desc: "We study your commercial parameters, customer profiles, competitive margins, and core advertising goals." },
    { step: "02", name: "Campaign Strategy", desc: "Choose optimal campaign objectives, audience structures, placements, and strategic budget allocations." },
    { step: "03", name: "Creative Setup", desc: "Formulate ad visual assets, copywriting variants, eye-catching headers, and target-focused layouts." },
    { step: "04", name: "Campaign Launch", desc: "Implement core structures, configure ad sets and tracking integrations, and begin active delivery supervision." },
    { step: "05", name: "Performance Monitoring", desc: "Actively review key indicators including CTR, CPC, CPL/CPA, and delivery distribution trends." },
    { step: "06", name: "Optimization", desc: "Deploy data-backed modifications in real time, refining bids, bids cap, creatives, and custom audience settings." }
  ];

  // Services included checklist
  const servicesIncluded = [
    "Meta Ads Campaign Setup", "Facebook Advertising", "Instagram Advertising",
    "Lead Generation Campaigns", "Website Traffic Campaigns", "E-commerce Advertising",
    "Retargeting Campaigns", "Audience Research", "Ad Creative Strategy",
    "Campaign Monitoring", "Performance Analysis", "Campaign Optimization"
  ];

  // Sectors we help
  const industriesHelp = [
    { name: "Real Estate", icon: "🏢" },
    { name: "E-commerce", icon: "🛒" },
    { name: "Local Businesses", icon: "📍" },
    { name: "Restaurants", icon: "🍕" },
    { name: "Healthcare & Wellness", icon: "🩺" },
    { name: "Education", icon: "🎓" },
    { name: "Coaches & Consultants", icon: "💡" },
    { name: "Service Businesses", icon: "🔧" },
    { name: "Startups", icon: "🚀" },
    { name: "Growing Brands", icon: "📈" }
  ];

  // Demo value mapping for transparency section
  const sampleDashboardData: Record<string, { name: string; reach: string; impressions: string; clicks: string; ctr: string; cpc: string; spend: string; results: string }> = {
    campaign1: { name: "Sample Retargeting Tier-A", reach: "42,800", impressions: "78,500", clicks: "1,560", ctr: "1.98%", cpc: "₹14.20", spend: "₹22,152", results: "124 leads" },
    campaign2: { name: "Sample Lookalike Core", reach: "125,400", impressions: "240,100", clicks: "4,200", ctr: "1.75%", cpc: "₹18.50", spend: "₹77,700", results: "312 leads" },
    campaign3: { name: "Sample Local Engagement", reach: "18,900", impressions: "32,400", clicks: "980", ctr: "3.02%", cpc: "₹11.10", spend: "₹10,878", results: "95 leads" }
  };

  const handleCtaClick = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewWorkClick = () => {
    const el = document.getElementById('work-samples');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeSample = activeScreenshot !== null ? workSamples.find(s => s.id === activeScreenshot) : null;

  return (
    <div className="pt-[72px] overflow-x-hidden text-left bg-white text-[#0B0B0F] font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B0B0F] to-[#12121A] py-20 md:py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(214,163,84,0.08),transparent_50%)]"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D6A354]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#D6A354]/10 border border-[#D6A354]/20 px-4 py-2 rounded-full text-xs font-semibold text-[#D6A354]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Paid Social Division</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Meta Ads That Connect Your Business <br className="hidden sm:inline" />
              <span className="text-[#D6A354]">With The Right Audience</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
              Strategic Facebook and Instagram advertising focused on reaching relevant audiences, generating opportunities and improving campaign performance through continuous optimization.
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
                onClick={handleViewWorkClick}
                className="bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>View Our Work</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Meta Ads Section */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Core Advantages</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Why Meta Ads?
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                Meta Ads helps businesses reach potential customers across Facebook and Instagram using audience targeting, creative testing, campaign optimization and performance tracking.
              </p>
              
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200/60 space-y-4">
                <div className="flex items-center space-x-3 text-sm font-bold text-[#0B0B0F]">
                  <ShieldCheck className="w-5 h-5 text-[#D6A354]" />
                  <span>Account Safety & Integrity</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We implement verified setup protocols, configure secure Business Manager pathways, and follow community standards to safeguard commercial properties.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Audience Targeting",
                  desc: "Reach relevant audiences based on location, interests, demographics and other available targeting signals.",
                  icon: Users
                },
                {
                  title: "Creative Strategy",
                  desc: "Create and test engaging ad creatives designed for different audiences and campaign objectives.",
                  icon: Target
                },
                {
                  title: "Campaign Optimization",
                  desc: "Monitor campaign performance and make data-informed adjustments.",
                  icon: TrendingUp
                },
                {
                  title: "Performance Tracking",
                  desc: "Track important metrics and campaign outcomes to understand how advertising is performing.",
                  icon: BarChart3
                }
              ].map((card, idx) => {
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

      {/* 3. Real Campaign Dashboard (Our Meta Ads Work) */}
      <section id="work-samples" className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Verified Case Evidence</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Real Campaign Dashboard
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Examples from Meta Ads Manager campaigns managed and monitored through the platform. Click on any panel to explore the full layout.
            </p>
          </div>

          {/* Grid of Work Samples resembling native browser mockups */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workSamples.map((sample) => (
              <div 
                key={sample.id} 
                className="group relative bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#D6A354]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                onClick={() => setActiveScreenshot(sample.id)}
              >
                {/* Browser bar */}
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center space-x-1.5 select-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <span className="text-[10px] text-gray-400 font-semibold truncate pl-2">{sample.campaignName}</span>
                </div>

                {/* Main Visual Image */}
                <div className="relative aspect-video overflow-hidden bg-gray-900 border-b border-gray-100">
                  <img 
                    src={sample.image} 
                    alt={sample.campaignName} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#0B0B0F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/95 text-[#0B0B0F] px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center space-x-2">
                      <Eye className="w-3.5 h-3.5 text-[#D6A354]" />
                      <span>Expand Verification</span>
                    </div>
                  </div>
                </div>

                {/* Info Card Body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6A354]">{sample.type}</span>
                    <div className="flex items-center space-x-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Active</span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-[#0B0B0F]">{sample.campaignName}</h4>

                  {/* Highlighting numbers without alteration */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400">Website Subs</p>
                      <p className="text-sm font-black text-[#0B0B0F]">{sample.results.split(' ')[0]}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400">Cost/Result</p>
                      <p className="text-sm font-black text-[#0B0B0F]">{sample.costPerResult}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400">Amount Spent</p>
                      <p className="text-sm font-black text-[#0B0B0F]">{sample.spent}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Metric Dashboard Explanation Card */}
          <div className="mt-16 bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm max-w-5xl mx-auto space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#D6A354]/10 text-[#D6A354] rounded-lg">
                <Info className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B0B0F]">Inside Meta Ads Manager</h3>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              When managing Facebook and Instagram advertising campaigns through the native dashboard platform, we continuously review, interpret, and adjust key structural configurations based on direct data feeds:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-semibold text-gray-600">
              {[
                { title: "Campaign delivery status", desc: "Active monitoring to ensure ad delivery processes are fully synchronized." },
                { title: "Campaign results", desc: "Verifying exact goal capture totals (e.g. subscribes, form inputs)." },
                { title: "Cost per result", desc: "Evaluating exact capital expended relative to every captured success." },
                { title: "Amount spent", desc: "Supervising daily pace limits to prevent budget waste." },
                { title: "Impressions", desc: "Measuring raw display volumes on mobile feeds and desktop streams." },
                { title: "Reach", desc: "Identifying the unique audience footprint across placements." },
                { title: "Campaign budget", desc: "Optimizing the distribution of capital at the campaign level (CBO) or ad set level (ABO)." },
                { title: "Campaign performance", desc: "Mapping mathematical progress metrics over multi-day charts." },
                { title: "Optimization opportunities", desc: "Adjusting targeting structures to lower acquisition limits." }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-3 items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="h-5 w-5 rounded-full bg-[#D6A354]/10 text-[#D6A354] flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0B0B0F] text-xs mb-1">{item.title}</h5>
                    <p className="text-[10px] text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 text-[10px] text-gray-400 leading-relaxed font-semibold">
              *Disclaimer: Metric definitions correspond directly to terms present inside live campaign manager panels shown in screenshots. We do not claim that these specific visual examples represent average performance, guaranteed future metrics, or typical client experiences.
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Monitor (Campaign Performance Explanation) */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Metric Foundations</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              What We Monitor
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Key advertising parameters we track daily to evaluate campaign performance and spot optimizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitorMetrics.map((m, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 p-6 rounded-2xl border border-gray-200/50 hover:border-[#D6A354] transition-all duration-300 flex flex-col justify-between"
              >
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

      {/* 5. How We Manage Meta Ads (Our Process) */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">SOP Execution</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              How We Manage Meta Ads
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              A structured, step-by-step methodology designed to provide clear accountability and data-driven focus.
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
                  <h4 className="text-lg font-bold text-[#0B0B0F]">{p.name}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-3xl">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Services Included Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Operational Framework</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Services Included
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Every critical asset configuration, strategic setup, and management module included in your campaign scope.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesIncluded.map((serv, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-gray-200/60 bg-gray-50/50 flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#D6A354] flex-shrink-0" />
                <span className="text-xs font-bold text-gray-700 leading-relaxed">{serv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Who Can Benefit From Meta Ads */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Sector Compatibility</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Who Can Benefit From Meta Ads?
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Sectors and models where Facebook and Instagram advertising structures can be deployed.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {industriesHelp.map((ind, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-gray-200/60 flex flex-col items-center text-center space-y-3 shadow-sm hover:border-[#D6A354] transition-colors duration-300"
              >
                <span className="text-3xl select-none">{ind.icon}</span>
                <span className="text-xs font-bold text-[#0B0B0F]">{ind.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center text-[10px] text-gray-400 font-semibold max-w-lg mx-auto">
            *Please note: Performance index results vary widely depending on specific niche conditions, local market demands, and offer metrics. We do not imply guaranteed outcomes for any industry listed above.
          </div>
        </div>
      </section>

      {/* 8. Reporting & Transparency (Clear Performance Tracking) */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Metrics First</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Clear Performance Tracking
              </h2>
              <p className="text-gray-500 leading-relaxed text-xs sm:text-sm">
                We believe advertising decisions should be based on campaign data. We monitor relevant performance metrics and use the available data to identify opportunities for improvement.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-3 text-xs font-bold text-gray-700">
                  <div className="h-6 w-6 rounded bg-[#D6A354]/10 text-[#D6A354] flex items-center justify-center">✔</div>
                  <span>100% Transparent Dashboard Feeds</span>
                </div>
                <div className="flex items-center space-x-3 text-xs font-bold text-gray-700">
                  <div className="h-6 w-6 rounded bg-[#D6A354]/10 text-[#D6A354] flex items-center justify-center">✔</div>
                  <span>Continuous Optimization Logging</span>
                </div>
              </div>
            </div>

            {/* Interactive Sample Dashboard */}
            <div className="lg:col-span-7 bg-[#0B0B0F] p-6 rounded-2xl border border-gray-800 text-white space-y-6 shadow-2xl relative">
              <div className="absolute top-4 right-4 bg-gray-800/80 border border-gray-700 text-gray-400 text-[10px] px-2.5 py-1 rounded-md font-bold uppercase select-none">
                Sample Dashboard
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold tracking-tight text-white">Live Data Sandbox</h4>
                <p className="text-[10px] text-gray-400">Select a demo campaign to review sample tracking parameters.</p>
              </div>

              {/* Campaign Selector Tabs */}
              <div className="flex space-x-2 border-b border-gray-800 pb-2">
                {Object.keys(sampleDashboardData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedDemoCampaign(key)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-300 cursor-pointer ${
                      selectedDemoCampaign === key 
                        ? 'bg-[#D6A354] text-[#0B0B0F]' 
                        : 'bg-gray-900 text-gray-400 hover:text-white'
                    }`}
                  >
                    {sampleDashboardData[key].name.split(' ')[1]} {sampleDashboardData[key].name.split(' ')[2] || ''}
                  </button>
                ))}
              </div>

              {/* Simulated Metrics Card Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Reach", val: sampleDashboardData[selectedDemoCampaign].reach },
                  { label: "Impressions", val: sampleDashboardData[selectedDemoCampaign].impressions },
                  { label: "Clicks", val: sampleDashboardData[selectedDemoCampaign].clicks },
                  { label: "CTR", val: sampleDashboardData[selectedDemoCampaign].ctr },
                  { label: "CPC", val: sampleDashboardData[selectedDemoCampaign].cpc },
                  { label: "Spend", val: sampleDashboardData[selectedDemoCampaign].spend },
                  { label: "Results", val: sampleDashboardData[selectedDemoCampaign].results }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-900/60 p-4 rounded-xl border border-gray-800 space-y-1">
                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">{item.label}</span>
                    <p className="text-xs sm:text-sm font-black text-white">{item.val}</p>
                  </div>
                ))}
              </div>

              <div className="text-[9px] text-gray-500 leading-relaxed font-semibold">
                *Values displayed in the sandbox interface represent simulated demonstration parameters only. Real client parameters remain isolated under security standards.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Important Trust Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B0B0F]/5 border-l-4 border-amber-500 p-8 rounded-r-2xl space-y-4">
            <div className="flex space-x-3 items-center">
              <ShieldAlert className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <h3 className="text-base font-bold text-[#0B0B0F]">Performance Depends On Multiple Factors</h3>
            </div>
            
            <p className="text-xs text-gray-600 leading-relaxed">
              Meta Ads performance is not fixed and can vary depending on multiple market and business variables. Real commercial success relies on a combination of factors, including:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold text-gray-700">
              {[
                "Target industry vertical",
                "Local and national market competition",
                "Product desirability & offer structure",
                "Core audience definition and size",
                "Creative asset quality & aesthetic values",
                "Destination landing page performance",
                "Daily and monthly allocation budgets",
                "Chosen campaign conversion objectives",
                "Changing seasonal and market conditions"
              ].map((factor, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  <span>{factor}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 leading-relaxed pt-2 border-t border-gray-200/60 font-semibold">
              *Transparency Standard: GY Marketing Agency does not promise, pledge, or guarantee specific lead totals, customer acquisition volumes, ROI ratios, exact cost-per-click values, or immediate conversion gains. We focus on rigorous strategic setup and professional optimization based on real data feeds.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Final CTA Section */}
      <section className="py-20 bg-[#0B0B0F] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,163,84,0.06),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Ready To Start Advertising?
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
            Let's discuss your business, target audience and advertising goals. Let's build advertising channels centered on real campaign metrics.
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

      {/* Lightbox / Overlay Image Viewer */}
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
              {/* Close Button */}
              <button 
                onClick={() => setActiveScreenshot(null)}
                className="absolute top-4 right-4 z-10 bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] p-2.5 rounded-full transition-all duration-300 shadow-lg cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Lightbox Image Visual */}
              <div className="md:w-3/5 bg-gray-950 flex items-center justify-center aspect-video md:aspect-auto">
                <img 
                  src={activeSample.image} 
                  alt={activeSample.campaignName} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Data Panel */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>Live Active Delivery</span>
                  </div>
                  
                  <h3 className="text-xl font-black text-[#0B0B0F]">{activeSample.campaignName}</h3>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{activeSample.type}</p>
                </div>

                {/* Grid showing authentic numbers */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
                    <span className="text-xs text-gray-500 font-bold">Website Subscribes</span>
                    <span className="text-sm font-black text-[#0B0B0F]">{activeSample.results}</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
                    <span className="text-xs text-gray-500 font-bold">Cost Per Subscribe</span>
                    <span className="text-sm font-black text-[#0B0B0F]">{activeSample.costPerResult}</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-xs text-gray-500 font-bold">Total Amount Spent</span>
                    <span className="text-sm font-black text-[#0B0B0F]">{activeSample.spent}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-start space-x-2 text-[10px] text-gray-400 font-medium">
                    <Info className="w-3.5 h-3.5 text-[#D6A354] flex-shrink-0 mt-0.5" />
                    <span>This screenshot captures real client dashboard statistics. The metrics are presented without any editing or visual alterations.</span>
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
