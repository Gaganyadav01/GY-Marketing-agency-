import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Users, Heart, MessageSquare, Share2, Eye, Sparkles, CheckCircle2, 
  ChevronRight, ArrowRight, ShieldAlert, Star, Compass, Smartphone, Grid, Film, 
  HelpCircle, ExternalLink, RefreshCw, Layers, Award, ShieldCheck
} from 'lucide-react';
import { Page } from '../types';

interface SocialMediaGrowthServiceProps {
  onNavigate: (page: Page) => void;
}

export default function SocialMediaGrowthService({ onNavigate }: SocialMediaGrowthServiceProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Interactive Instagram Feed Simulator states
  const [simulatorView, setSimulatorView] = useState<string>('feed');
  const [likesCount, setLikesCount] = useState<number>(342);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const services = [
    { title: "Instagram Growth", icon: "📸", desc: "Developing aesthetic alignment, targeted profile structures, and continuous audience interaction loops tailored for your brand." },
    { title: "Facebook Growth", icon: "👥", desc: "Optimizing Facebook pages, organizing organic business groups, and establishing consistent brand visibility." },
    { title: "Followers Growth", icon: "📈", desc: "Building a genuine community organically through engaging caption hooks, target outreach, and content interest alignment." },
    { title: "Likes & Engagement", icon: "❤️", desc: "Maximizing active user interactions, comments, shares, and saves with strategic conversational prompts." },
    { title: "Reels & Video Views", icon: "🎥", desc: "Developing high-retention Reels and short video narrative structures to increase algorithmic discoverability." },
    { title: "Profile Optimization", icon: "✨", desc: "Fully calibrating bios, visual highlights, link-in-bios, and primary contact action buttons." },
    { title: "Content Growth Strategy", icon: "🗓️", desc: "Formulating customized weekly and monthly content pillars mapped to target audience profiles." },
    { title: "Social Media Management", icon: "✍️", desc: "Complete scheduling, graphic asset organization, copy editing, and active community dispatch." },
    { title: "Brand Visibility", icon: "🌟", desc: "Expanding organic search reach across networks to build a recognizable, trust-centered brand footprint." }
  ];

  const packageWorkSamples = [
    {
      id: "pkg-1",
      title: "Social Media Growth Packages",
      image: "/rs_1.jpg",
      badge: "Organic Growth",
      desc: "Complete visual content outlines and audience growth mapping strategies tailored to build sustainable online presence."
    },
    {
      id: "pkg-2",
      title: "Instagram Growth Solutions",
      image: "/rs_2.jpg",
      badge: "Target Engagement",
      desc: "Customized Instagram profile optimization designs, visual highlight templates, and organic reach analysis."
    },
    {
      id: "pkg-3",
      title: "Facebook Growth Solutions",
      image: "/rs_3.jpg",
      badge: "Brand Pages",
      desc: "Structured business page calibrations, group management strategy, and consistent audience content delivery grids."
    },
    {
      id: "pkg-4",
      title: "Engagement Optimization",
      image: "/rs_4.jpg",
      badge: "Retention Metrics",
      desc: "Interactive caption scripting, comment response optimization, and Reels audience interest analysis."
    },
    {
      id: "pkg-5",
      title: "Custom Visual Strategy",
      image: "/rs_5.jpg",
      badge: "Aesthetic Identity",
      desc: "Consistent brand colors, premium typographic templates, and grid aesthetics designed to build client trust."
    }
  ];

  const achievements = [
    { title: "Stronger Social Presence", desc: "Establishing a modern, professional, and visually consistent profile that immediately builds trust with visitors." },
    { title: "Better Brand Visibility", desc: "Ensuring your business assets are recognizable across key platforms through clean typography and styling." },
    { title: "More Consistent Engagement", desc: "Developing standard conversational hooks to cultivate a highly interactive and responsive follower base." },
    { title: "Improved Content Performance", desc: "Refining visual layout structures and video pacing to capture user attention within the first three seconds." },
    { title: "Better Audience Reach", desc: "Optimizing hashtag sets, location tags, and topics to signal profile relevance clearly to platform algorithms." },
    { title: "Professional Social Profiles", desc: "Polishing all structural contact points, highlight covers, and biographies into cohesive visual portfolios." }
  ];

  const processSteps = [
    { step: "01", name: "Profile & Goal Analysis", desc: "We study your existing profile layouts, analyze competitive brands, map target audiences, and define realistic growth metrics." },
    { step: "02", name: "Growth Strategy", desc: "We formulate a customized positioning plan detailing content pillars, visual aesthetics, and audience outreach directions." },
    { step: "03", name: "Content & Engagement Plan", desc: "We outline weekly calendar grids, caption frameworks, visual templates, and active community interaction guidelines." },
    { step: "04", name: "Performance Monitoring", desc: "We actively track key organic signals including profile visits, comments, shares, saves, and overall reach parameters." },
    { step: "05", name: "Continuous Optimization", desc: "We refine content formats, video pacing, and upload times to align systematically with algorithm fluctuations and audience responses." }
  ];

  const fitForSectors = [
    { title: "Small Businesses", desc: "Placing local service providers and stores directly in front of regional social selectors." },
    { title: "Startups", desc: "Positioning next-generation digital brands with high-fidelity, professional visual grids." },
    { title: "E-commerce Brands", desc: "Nurturing social trust signals, customer reviews, and direct product click-through layouts." },
    { title: "Local Businesses", desc: "Attracting hyper-local customers to your physical venue through geo-targeted visual features." },
    { title: "Influencers & Creators", desc: "Refining unique brand alignments, media kits layouts, and profile visual aesthetics." },
    { title: "Personal Brands", desc: "Positioning consultants, coaches, and speakers as recognized niche authorities with clean typography." },
    { title: "Service Businesses", desc: "Structuring educational carousels and reviews that capture validated commercial inquiries." }
  ];

  const whyChooseUs = [
    { title: "Customized Growth Strategy", desc: "Rejecting generic auto-bot practices to build genuine, brand-aligned audience strategies." },
    { title: "Instagram & Facebook Focus", desc: "Direct, specialist engineering across the Meta ecosystem to maximize impact." },
    { title: "Transparent Packages", desc: "Displaying authentic service work scopes clearly with no hidden clauses or automated spam setups." },
    { title: "Professional Support", desc: "Direct communication with a dedicated digital strategist focused on your goals." },
    { title: "Data-Informed Optimization", desc: "Auditing weekly performance data signals to align content formats with what works." },
    { title: "Business-Focused Approach", desc: "Prioritizing commercial trust and high-intent profiles over vanity metric gains." }
  ];

  const faqs = [
    {
      q: "Which platforms do you support?",
      a: "Our Social Media Growth services can focus on platforms such as Instagram and Facebook, depending on your selected package and requirements."
    },
    {
      q: "Can you help improve my Instagram profile?",
      a: "Yes. We can help with profile optimization, bio layout, story highlight graphics, weekly content planning, and overall organic growth planning."
    },
    {
      q: "Do you guarantee followers or engagement?",
      a: "Social media performance can vary based on content, audience, platform algorithms and other factors. We do not make unrealistic guarantees about organic performance."
    },
    {
      q: "Can businesses use your social media growth services?",
      a: "Yes. Our solutions can be tailored for businesses, creators, brands and service providers."
    },
    {
      q: "Can I choose a customized package?",
      a: "Yes, customized solutions can be discussed according to your goals and requirements."
    }
  ];

  const handleCtaClick = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLikeSimulator = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
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
              <div className="inline-flex items-center space-x-2 bg-[#D6A354]/10 border border-[#D6A354]/20 px-4 py-2 rounded-full text-xs font-semibold text-[#D6A354]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premium Meta Ecosystem Speciality</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Grow Your Social Media. <br />
                <span className="text-[#D6A354]">Build Your Brand.</span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed font-medium">
                Strategic social media growth solutions designed to strengthen your online presence, increase engagement and build a stronger digital brand.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCtaClick}
                  className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#D6A354]/10 cursor-pointer"
                >
                  <span>Grow My Social Media</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => {
                    const el = document.getElementById('packages');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>View Packages</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Instagram + Facebook Inspired Live Simulator Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[340px] bg-gray-950 rounded-[40px] border-[10px] border-gray-900 p-4 shadow-2xl ring-4 ring-[#D6A354]/10 aspect-[9/18] relative overflow-hidden">
                
                {/* Camera notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-28 bg-gray-900 rounded-b-xl z-20"></div>

                {/* Status Bar */}
                <div className="flex justify-between items-center text-[8px] text-gray-400 px-3 pt-1 select-none font-mono">
                  <span>12:00 PM</span>
                  <span>🔋 99%</span>
                </div>

                {/* Instagram feed simulator wrapper */}
                <div className="h-full pt-4 flex flex-col justify-between text-white relative">
                  
                  <div className="flex-1 py-4 flex flex-col justify-between">
                    
                    {/* Simulator Header */}
                    <div className="flex justify-between items-center border-b border-gray-900 pb-2.5 px-1 select-none">
                      <span className="text-xs font-black tracking-tight text-[#D6A354]">Instagram</span>
                      <div className="flex space-x-2 text-[10px]">
                        <span>➕</span>
                        <span>❤️</span>
                        <span>💬</span>
                      </div>
                    </div>

                    {/* Feed Post Block */}
                    {simulatorView === 'feed' && (
                      <div className="space-y-3.5 pt-3">
                        {/* Profile Row */}
                        <div className="flex items-center justify-between px-1">
                          <div className="flex items-center space-x-2">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[1.5px]">
                              <div className="h-full w-full bg-[#0B0B0F] rounded-full flex items-center justify-center text-[8px] font-black">GY</div>
                            </div>
                            <div>
                              <span className="text-[9px] font-black block">gy_marketing</span>
                              <span className="text-[7px] text-gray-500 block">Verified Niche Specialist</span>
                            </div>
                          </div>
                          <span className="text-[10px] text-gray-500 font-bold">•••</span>
                        </div>

                        {/* Post Media Area */}
                        <div className="aspect-square bg-gradient-to-tr from-[#12121A] to-gray-900 rounded-xl border border-gray-800/80 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden select-none">
                          <div className="absolute top-2 right-2 flex space-x-1">
                            <span className="text-[7px] bg-[#D6A354]/10 text-[#D6A354] font-bold px-2 py-0.5 rounded border border-[#D6A354]/20 uppercase">PREMIUM GRIDS</span>
                          </div>
                          <Sparkles className="w-6 h-6 text-[#D6A354] mb-1.5 animate-pulse" />
                          <span className="text-[10px] font-black text-white">Visual Content Calendar</span>
                          <p className="text-[8px] text-gray-500 font-semibold max-w-[160px] leading-relaxed mt-1">
                            High-quality aesthetic alignments structured to engage target audiences.
                          </p>
                        </div>

                        {/* Action Buttons Row */}
                        <div className="flex justify-between items-center px-1">
                          <div className="flex space-x-3 text-xs">
                            <button 
                              onClick={handleLikeSimulator}
                              className="focus:scale-125 transition-transform text-red-500 cursor-pointer"
                            >
                              {isLiked ? '❤️' : '🤍'}
                            </button>
                            <span className="cursor-pointer">💬</span>
                            <span className="cursor-pointer">✈️</span>
                          </div>
                          <span className="text-xs cursor-pointer">🔖</span>
                        </div>

                        {/* Likes and Captions */}
                        <div className="px-1 space-y-1 select-none">
                          <span className="text-[9px] font-black block">{likesCount} likes</span>
                          <p className="text-[8px] text-gray-400 font-semibold leading-relaxed">
                            <span className="text-white font-black mr-1">gy_marketing</span>
                            Consistent scheduling, clean typography, and strategic caption hooks build real social trust profiles...
                          </p>
                        </div>

                      </div>
                    )}

                    {simulatorView === 'reels' && (
                      <div className="space-y-4 pt-3">
                        <div className="flex justify-between items-center px-1">
                          <span className="text-xs font-black">Reels Shorts Showcase</span>
                          <span className="text-[8px] text-[#D6A354] font-mono font-bold uppercase tracking-widest">Live Views Simulation</span>
                        </div>

                        <div className="aspect-[9/10] bg-gray-900 rounded-xl border border-gray-800 flex flex-col justify-between p-4 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                          
                          <span className="text-[8px] bg-red-500 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider self-start z-10 select-none">REEL PREVIEW</span>

                          <div className="space-y-2 z-10">
                            <span className="text-[9px] font-bold block text-[#D6A354]">Algorithm Hook Verified</span>
                            <p className="text-[8px] text-gray-300 font-semibold leading-relaxed">
                              First 3 seconds are crafted with strong typographic titles to ensure maximum organic user retention.
                            </p>
                          </div>
                        </div>

                        <div className="bg-gray-900/40 p-2 rounded-lg border border-gray-800 text-center select-none">
                          <span className="text-[8px] text-emerald-400 font-bold block uppercase tracking-widest">Impressions Index +42%</span>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Simulator Sticky Navigation Dock */}
                  <div className="bg-gray-900 rounded-xl p-1.5 flex justify-around items-center border border-gray-800 text-[9px] font-bold select-none">
                    <button 
                      onClick={() => setSimulatorView('feed')}
                      className={`flex-1 py-1 text-center rounded-lg transition-colors cursor-pointer ${simulatorView === 'feed' ? 'bg-[#0B0B0F] text-[#D6A354]' : 'text-gray-400 hover:text-white'}`}
                    >
                      Grid Feed
                    </button>
                    <button 
                      onClick={() => setSimulatorView('reels')}
                      className={`flex-1 py-1 text-center rounded-lg transition-colors cursor-pointer ${simulatorView === 'reels' ? 'bg-[#0B0B0F] text-[#D6A354]' : 'text-gray-400 hover:text-white'}`}
                    >
                      Reels Viewer
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SOCIAL MEDIA GROWTH SERVICES */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Our Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Social Media Growth Solutions
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Strategically designed organic structures formulated to build real audience affinity, recognizable visual identities, and social authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((ser, idx) => (
              <div 
                key={idx} 
                className="p-8 bg-gray-50/50 rounded-2xl border border-gray-200/60 hover:border-[#D6A354] transition-all duration-300 space-y-4"
              >
                <span className="text-3xl block select-none">{ser.icon}</span>
                <h3 className="text-base font-black text-[#0B0B0F]">{ser.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">{ser.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. OUR SOCIAL MEDIA GROWTH PACKAGES */}
      <section id="packages" className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Authentic Packaging</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Our Social Media Growth Packages
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Explore our transparent service options designed to align your brand visual standards and content deployment strategies cleanly.
            </p>
          </div>

          {/* Pricing cards based on actual uploaded reference packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Starter Plan",
                price: "Custom Budget",
                period: "Month",
                features: [
                  "Instagram Profile Optimization",
                  "Facebook Business Page Calibration",
                  "Organic Content Growth Mapping",
                  "Custom Visual Grid Consultation",
                  "Structured Weekly Content Outlines"
                ],
                isPopular: false
              },
              {
                title: "Growth Plan",
                price: "Verified Package",
                period: "Month",
                features: [
                  "Complete Instagram Content Strategy",
                  "Facebook Brand Visibility Mapping",
                  "Likes & Organic Engagement Setup",
                  "Reels Visual Pacing Structures",
                  "Comprehensive Monthly Reporting Dashboard"
                ],
                isPopular: true
              },
              {
                title: "Premium Plan",
                price: "Tailored Strategy",
                period: "Month",
                features: [
                  "Full-Scale Brand Aesthetics Setup",
                  "Custom Typography & Palette Grid",
                  "Dedicated Content Calendaring",
                  "Follower Audience Outreach Guidelines",
                  "Direct Advisor Consultation Hours"
                ],
                isPopular: false
              }
            ].map((pkg, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border ${pkg.isPopular ? 'border-[#D6A354] ring-2 ring-[#D6A354]/10' : 'border-gray-200'} p-8 flex flex-col justify-between relative overflow-hidden`}
              >
                {pkg.isPopular && (
                  <span className="absolute top-4 right-4 text-[8px] bg-[#D6A354]/10 text-[#D6A354] font-black uppercase px-2.5 py-1 rounded border border-[#D6A354]/20 tracking-wider">
                    RECOMMENDED
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-black text-[#0B0B0F] uppercase tracking-wider">{pkg.title}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-2xl font-black tracking-tight text-[#0B0B0F]">{pkg.price}</span>
                      <span className="text-gray-400 text-xs font-bold ml-1">/ {pkg.period}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 my-2"></div>

                  <ul className="space-y-3.5">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-gray-500 font-semibold leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#D6A354] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={handleCtaClick}
                  className="w-full mt-8 bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-[#0B0B0F] hover:border-[#D6A354]"
                >
                  Choose Your Growth Plan
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleCtaClick}
              className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#D6A354]/10 cursor-pointer"
            >
              Get Started
            </button>
          </div>

        </div>
      </section>

      {/* 4. REAL SERVICE SHOWCASE (GALLERY) */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Authentic Work Samples</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Our Social Media Growth Work
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Browse actual visual package designs and growth creatives mapped to target operational goals.
            </p>
          </div>

          {/* Premium gallery of package creatives images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageWorkSamples.map((work) => (
              <div 
                key={work.id} 
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-[#D6A354]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Browser Address Bar / Visual top */}
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex justify-between items-center select-none font-mono text-[9px] text-gray-400">
                  <span className="font-semibold uppercase tracking-wider text-[#D6A354]">{work.badge}</span>
                  <span>CREATIVE WORK SAMPLE</span>
                </div>

                {/* Real Creative Image */}
                <div className="relative aspect-[16/10] bg-gray-200 overflow-hidden border-b border-gray-100">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info block */}
                <div className="p-6 space-y-2">
                  <h4 className="text-sm font-black text-[#0B0B0F]">{work.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-[10px] text-gray-400 font-semibold max-w-lg mx-auto">
            *Artwork Verification Notice: The visuals featured above represent genuine promotional graphics and dashboard screenshots uploaded to outline package designs. These are presented to demonstrate structural layout capabilities honestly.
          </div>

        </div>
      </section>

      {/* 5. WHAT WE HELP YOU ACHIEVE */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Expected Achievables</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              What We Help You Achieve
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Reasonable, organic goals targeted systematically through consistent graphic layouts and structured post hooks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, idx) => (
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

      {/* 6. OUR SOCIAL MEDIA GROWTH PROCESS */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Developmental Roadmap</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Our Social Media Growth Process
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              A comprehensive developmental pipeline formulated to align target audience categories, themes, and content grids.
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

      {/* 7. WHO IS IT FOR? */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Target Partners</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Built for Businesses & Creators
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Customized visual calendars and caption alignment targeted directly to match your unique brand profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fitForSectors.map((sector, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/60 hover:border-[#D6A354] transition-colors space-y-3">
                <h4 className="text-sm font-black text-[#0B0B0F]">{sector.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">{sector.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. WHY GY MARKETING AGENCY */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Core Disciplines</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Why GY Marketing Agency
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Why business selectors trust our visual content templates and organic parameters over synthetic vanity metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
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

      {/* 9. FAQ SECTION */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Social Inquiries</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Clear, honest, and straightforward answers concerning organic social media growth planning.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = activeFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-xl border border-gray-200/60 overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setActiveFaq(isExpanded ? null : idx)}
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

        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-24 bg-[#0B0B0F] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,163,84,0.06),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Grow Your Social Media Presence?
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed font-medium">
            Let's create a social media growth strategy that helps your brand build visibility, engagement and a stronger online presence.
          </p>
          
          <div className="pt-4">
            <button
              onClick={handleCtaClick}
              className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-10 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#D6A354]/10 cursor-pointer"
            >
              Start Growing
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
