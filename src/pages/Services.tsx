import { Page } from '../types';
import { 
  Users, Target, Code2, AppWindow, Search, TrendingUp, 
  CheckCircle, ArrowRight, Sparkles 
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export const servicesData = [
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    icon: Users,
    desc: 'Reach the right audience with strategic Facebook and Instagram advertising campaigns. We build custom-targeted ad loops to secure direct enquiries.',
    benefits: [
      'Custom buyer persona targeting based on authentic audience intent',
      'High-converting, bespoke creative and copywriting frameworks',
      'In-depth retargeting funnels to capture warm prospects',
      'Comprehensive budget utility tracking to protect client spend'
    ],
    cta: 'Explore Meta Ads Strategy',
    pageValue: 'meta-ads' as Page
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    icon: Target,
    desc: 'Connect with customers actively searching for your products and services. High-performance search and display campaigns designed to trigger high-intent commercial calls.',
    benefits: [
      'Exhaustive keyword research matching real-time user searches',
      'Bespoke landing page alignment to boost Quality Score metrics',
      'Negative keyword screening to filter wasteful query spend',
      'Comprehensive conversion value and phone call tracking'
    ],
    cta: 'Explore Google Ads Strategy',
    pageValue: 'google-ads' as Page
  },
  {
    id: 'website-development',
    title: 'Website Development',
    icon: Code2,
    desc: 'Modern, responsive and conversion-focused websites designed for your business. We build premium, custom interfaces using clean, high-speed technologies.',
    benefits: [
      'High-performance React & custom WordPress development',
      'Elite mobile responsiveness and responsive grid layouts',
      'Fast page load times (under 1.5s target profiles)',
      'Built-in SEO structured data and schema integrations'
    ],
    cta: 'Explore Web Engineering',
    pageValue: 'website-development' as Page
  },
  {
    id: 'app-development',
    title: 'App Development',
    icon: AppWindow,
    desc: 'Build useful and scalable mobile applications for your customers and business. Tailor-made workflows built to deliver superior, high-compliance mobile products.',
    benefits: [
      'Cross-platform iOS and Android mobile engineering',
      'Intelligent, modern UI/UX workflows to delight users',
      'Secure back-end and API connection compliance',
      'Reliable app store deployment and monthly support support'
    ],
    cta: 'Explore App Engineering',
    pageValue: 'app-development' as Page
  },
  {
    id: 'seo',
    title: 'SEO Services',
    icon: Search,
    desc: 'Improve your website visibility with search engine optimization strategies. We target relevant commercial search terms with organic rankings.',
    benefits: [
      'Deep technical SEO structural audits and code optimization',
      'Targeted On-Page metadata and schema integrations',
      'Local SEO alignment with Google Business Profile setups',
      'Long-term authority indexing without synthetic backlinks'
    ],
    cta: 'Explore SEO Strategy',
    pageValue: 'seo' as Page
  },
  {
    id: 'social-media-growth',
    title: 'Social Media Growth',
    icon: TrendingUp,
    desc: 'Build a stronger brand presence with content, strategy and social media management. We nurture authentic engagement with modern, premium styling.',
    benefits: [
      'Custom graphic design grids and typographic branding guidelines',
      'High-retention Reels, Shorts, and video narrative strategies',
      'Strategic content calendar mapping and community dispatch',
      'Monthly data reports tracking follower reach indicators'
    ],
    cta: 'Explore Social Presence Strategy',
    pageValue: 'social-media-growth' as Page
  }
];

export default function Services({ onNavigate }: ServicesProps) {
  
  const handleLearnMore = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-[72px] overflow-x-hidden text-left">
      
      {/* Services Header */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Core Specialities</span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0B0B0F]">
              Everything You Need To Grow Online
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              We provide fully comprehensive, premium, high-converting digital marketing and custom application development solutions. Every service is built around your specific business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {servicesData.map((service) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Icon and Title */}
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 bg-[#0B0B0F] text-[#D6A354] rounded-xl flex items-center justify-center">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#0B0B0F]">{service.title}</h2>
                    </div>

                    {/* Desc */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Core Service Deliverables:</p>
                      <div className="grid grid-cols-1 gap-2.5">
                        {service.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-[#D6A354] flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-600 font-medium leading-normal">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="pt-8 border-t border-gray-100 mt-8">
                    <button
                      onClick={() => handleLearnMore(service.pageValue)}
                      className="w-full bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Trust banner */}
      <section className="py-16 bg-[#0B0B0F] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-1.5 text-xs text-[#D6A354] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Business Ethics</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white">We Do Not Make Unquantifiable Claims</h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            We avoid standard agency claims of guaranteed ROI, sales numbers, or exact lead volumes, as performance depends on market dynamics. We promise high-compliance tech setup, strategic alignment, and transparent reporting.
          </p>
        </div>
      </section>

    </div>
  );
}
