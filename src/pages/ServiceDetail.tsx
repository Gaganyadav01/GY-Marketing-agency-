import { Page } from '../types';
import { 
  CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, 
  MessageSquare, Layers, HelpCircle, Code2, Play, Users, 
  Target, Search, AppWindow, TrendingUp 
} from 'lucide-react';
import MetaAdsService from '../components/MetaAdsService';
import GoogleAdsService from '../components/GoogleAdsService';
import WebsiteDevelopmentService from '../components/WebsiteDevelopmentService';
import AppDevelopmentService from '../components/AppDevelopmentService';
import SEOService from '../components/SEOService';
import SocialMediaGrowthService from '../components/SocialMediaGrowthService';

interface ServiceDetailProps {
  page: Page;
  onNavigate: (page: Page) => void;
}

export default function ServiceDetail({ page, onNavigate }: ServiceDetailProps) {
  
  if (page === 'meta-ads') {
    return <MetaAdsService onNavigate={onNavigate} />;
  }

  if (page === 'google-ads') {
    return <GoogleAdsService onNavigate={onNavigate} />;
  }

  if (page === 'website-development') {
    return <WebsiteDevelopmentService onNavigate={onNavigate} />;
  }

  if (page === 'app-development') {
    return <AppDevelopmentService onNavigate={onNavigate} />;
  }

  if (page === 'seo') {
    return <SEOService onNavigate={onNavigate} />;
  }

  if (page === 'social-media-growth') {
    return <SocialMediaGrowthService onNavigate={onNavigate} />;
  }
  
  // Custom Content Factory depending on the active page
  const getServiceContent = () => {
    switch (page) {
      default:
        return {
          title: 'Specialized Solution',
          headline: 'Professional Digital Growth Services',
          tagline: 'Engineered specifically around your goals.',
          ctaText: 'Get Consultation',
          icon: Layers,
          topics: [] as { title: string; desc: string }[],
          advisory: 'All digital performance relies on transparent strategy and rigorous execution.'
        };
    }
  };

  const sData = getServiceContent();
  const IconComp = sData.icon;

  const handleCtaClick = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-[72px] overflow-x-hidden text-left">
      
      {/* Service Hero section */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full text-xs font-semibold text-[#D6A354] select-none">
                <IconComp className="w-3.5 h-3.5 text-[#D6A354]" />
                <span>Premium {sData.title} Division</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0B0B0F] leading-tight">
                {sData.headline}
              </h1>
              
              <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                {sData.tagline}
              </p>
              
              <button
                onClick={handleCtaClick}
                className="bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-[#0B0B0F] hover:border-[#D6A354] flex items-center justify-center space-x-2 w-full sm:w-auto cursor-pointer"
              >
                <span>{sData.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-4 bg-gray-50 p-8 rounded-2xl border border-gray-200/80 relative select-none">
              <div className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-[#D6A354]"></div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Our Standard of Excellence</p>
              <h3 className="text-lg font-bold text-[#0B0B0F] mb-4">The GY Standard</h3>
              <div className="space-y-3.5">
                {[
                  '100% custom-crafted assets',
                  'No third-party template bloat',
                  'Dedicated communication loops',
                  'Transparent campaign audits'
                ].map((std, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-xs text-gray-600 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#D6A354]" />
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Topics / Features Grid */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Detailed Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Comprehensive {sData.title} Capabilities
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              A breakdown of the specific tactics and structural frameworks we deploy to ensure your business attracts qualified client interest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sData.topics.map((topic, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-6 w-6 bg-[#D6A354]/10 text-[#D6A354] rounded-full flex items-center justify-center text-xs font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#0B0B0F] mb-2">{topic.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory section enforcing anti-hype & absolute trust */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B0B0F]/5 border-l-4 border-[#D6A354] p-6 rounded-r-xl flex space-x-4">
            <div className="flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-[#D6A354] mt-0.5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#0B0B0F]">Transparent Client Advisory</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                {sData.advisory}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-[#0B0B0F] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-black tracking-tight text-white">Let's Design Your {sData.title} Strategy</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            Ready to deploy professional marketing channels and scale up your qualified digital enquiries? Submit your specs today.
          </p>
          <button
            onClick={handleCtaClick}
            className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 mx-auto cursor-pointer"
          >
            <span>Claim Your Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
