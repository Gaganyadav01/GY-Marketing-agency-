import { TrendingUp, Award, BarChart3, Users, Percent, Smartphone, Globe, Shield, RefreshCw, Zap } from 'lucide-react';

export function AnalyticsMockup() {
  return (
    <div className="bg-[#0B0B0F] text-white p-5 rounded-xl border border-gray-800 shadow-2xl relative overflow-hidden group select-none">
      {/* Glow highlight */}
      <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#D6A354]/10 rounded-full blur-2xl group-hover:bg-[#D6A354]/20 transition-all duration-700"></div>
      
      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-4">
        <div className="flex items-center space-x-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
          <span className="text-xs text-gray-400 font-mono pl-2">ads_campaign_dashboard</span>
        </div>
        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-semibold border border-emerald-500/20 flex items-center space-x-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Live Campaign Data</span>
        </span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-white/[0.02] p-3 rounded-lg border border-white/[0.05] hover:border-white/[0.1] transition-colors">
          <p className="text-[10px] text-gray-500 font-medium">CTR (Click-Through)</p>
          <p className="text-sm font-bold text-white mt-1">3.84%</p>
          <span className="text-[9px] text-emerald-400 flex items-center space-x-0.5 mt-0.5">
            <TrendingUp className="w-2.5 h-2.5" />
            <span>Above Benchmark</span>
          </span>
        </div>
        <div className="bg-white/[0.02] p-3 rounded-lg border border-white/[0.05] hover:border-white/[0.1] transition-colors">
          <p className="text-[10px] text-gray-500 font-medium">Conversion Rate</p>
          <p className="text-sm font-bold text-[#D6A354] mt-1">4.12%</p>
          <span className="text-[9px] text-gray-400 flex items-center space-x-0.5 mt-0.5">
            <span>Highly Optimized</span>
          </span>
        </div>
        <div className="bg-white/[0.02] p-3 rounded-lg border border-white/[0.05] hover:border-white/[0.1] transition-colors">
          <p className="text-[10px] text-gray-500 font-medium">CPA (Average)</p>
          <p className="text-sm font-bold text-white mt-1">Reduced</p>
          <span className="text-[9px] text-emerald-400 flex items-center space-x-0.5 mt-0.5">
            <span>Max Budget Utility</span>
          </span>
        </div>
      </div>

      {/* Campaign Graph Visual */}
      <div className="relative h-32 w-full mt-2">
        <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
          {/* Grid lines */}
          <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3,3" />
          
          {/* Gradient fill path */}
          <path
            d="M 0 110 Q 50 80 100 90 T 200 40 T 300 10 L 300 120 L 0 120 Z"
            fill="url(#goldGradient)"
            opacity="0.15"
          />
          
          {/* Stroke path */}
          <path
            d="M 0 110 Q 50 80 100 90 T 200 40 T 300 10"
            fill="none"
            stroke="#D6A354"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Glowing node point */}
          <circle cx="200" cy="40" r="5" fill="#D6A354" />
          <circle cx="200" cy="40" r="10" fill="none" stroke="#D6A354" strokeWidth="2" opacity="0.4" className="animate-ping" />

          {/* Gradients definitions */}
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D6A354" />
              <stop offset="100%" stopColor="#0B0B0F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Footer statistics label */}
      <div className="flex items-center justify-between text-[11px] text-gray-500 mt-3 pt-3 border-t border-gray-800">
        <span>Google & Meta Channels</span>
        <span className="text-[#D6A354] font-medium">99.8% System Uptime</span>
      </div>
    </div>
  );
}

export function WebsiteMockup() {
  return (
    <div className="bg-white text-gray-800 p-5 rounded-xl border border-gray-200 shadow-xl relative overflow-hidden group select-none">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-500 font-mono font-medium">https://premium-storefront.io</span>
        </div>
        <div className="flex space-x-1.5">
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Grid Layout Representing a Clean Modern Website */}
      <div className="grid grid-cols-4 gap-4">
        {/* Navigation block */}
        <div className="col-span-4 flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
          <div className="flex space-x-2">
            <div className="h-2 w-8 bg-gray-200 rounded"></div>
            <div className="h-2 w-8 bg-gray-200 rounded"></div>
            <div className="h-2 w-8 bg-gray-200 rounded"></div>
          </div>
          <div className="h-4 w-14 bg-[#D6A354] rounded-md opacity-90"></div>
        </div>

        {/* Hero content blocks */}
        <div className="col-span-2 space-y-2 mt-2">
          <div className="h-5 w-24 bg-gray-900 rounded"></div>
          <div className="h-3.5 w-full bg-gray-400 rounded"></div>
          <div className="h-3.5 w-5/6 bg-gray-400 rounded"></div>
          <div className="h-3.5 w-2/3 bg-gray-400 rounded"></div>
          <div className="pt-2 flex space-x-2">
            <div className="h-7 w-16 bg-[#0B0B0F] rounded-md"></div>
            <div className="h-7 w-12 bg-gray-100 rounded-md border border-gray-200"></div>
          </div>
        </div>

        {/* Visual blocks */}
        <div className="col-span-2 mt-2">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 flex flex-col items-center justify-center h-28 relative">
            <div className="absolute top-2 left-2 flex items-center space-x-1 bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded text-[8px] font-semibold">
              <Zap className="w-2 h-2" />
              <span>Speed: 99/100</span>
            </div>
            {/* Visual SVG circles */}
            <div className="relative h-12 w-12">
              <svg viewBox="0 0 36 36" className="w-full h-full circular-chart">
                <path
                  className="circle-bg"
                  stroke="#eee"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke="#D6A354"
                  strokeWidth="3"
                  strokeDasharray="92, 100"
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold text-gray-900">92%</span>
              </div>
            </div>
            <span className="text-[9px] text-gray-400 mt-2 font-medium">Conversion Focus</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SeoChartMockup() {
  return (
    <div className="bg-[#0B0B0F] text-white p-5 rounded-xl border border-gray-800 shadow-2xl relative overflow-hidden group select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-4 h-4 text-[#D6A354]" />
          <span className="text-xs text-gray-400 font-mono">seo_performance_tracker</span>
        </div>
        <span className="text-[9px] bg-amber-500/10 text-[#D6A354] px-2 py-0.5 rounded-full border border-[#D6A354]/20 font-medium">
          Organic Keyword Index
        </span>
      </div>

      {/* Grid numbers */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">Total Organic Impressions</span>
          <span className="text-sm font-semibold text-white flex items-center space-x-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Consistent Growth</span>
          </span>
        </div>

        {/* Growth visualization block */}
        <div className="bg-white/[0.02] p-4 rounded-lg border border-white/[0.05] relative h-28 flex flex-col justify-end">
          {/* Visual Bar Columns growing taller */}
          <div className="flex items-end justify-between h-16 px-2">
            <div className="w-5 bg-white/10 rounded-t h-[20%] transition-all duration-500 hover:bg-[#D6A354]"></div>
            <div className="w-5 bg-white/10 rounded-t h-[32%] transition-all duration-500 hover:bg-[#D6A354]"></div>
            <div className="w-5 bg-white/10 rounded-t h-[48%] transition-all duration-500 hover:bg-[#D6A354]"></div>
            <div className="w-5 bg-white/10 rounded-t h-[55%] transition-all duration-500 hover:bg-[#D6A354]"></div>
            <div className="w-5 bg-[#D6A354]/40 rounded-t h-[72%] transition-all duration-500 hover:bg-[#D6A354]"></div>
            <div className="w-5 bg-[#D6A354]/80 rounded-t h-[88%] transition-all duration-500 hover:bg-[#D6A354]"></div>
            <div className="w-5 bg-[#D6A354] rounded-t h-[98%] transition-all duration-500"></div>
          </div>
          <div className="flex justify-between text-[9px] text-gray-500 mt-2 border-t border-white/[0.05] pt-1">
            <span>Month 1</span>
            <span>Month 3</span>
            <span>Ongoing Strategy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SocialEngagementMockup() {
  return (
    <div className="bg-white text-gray-800 p-5 rounded-xl border border-gray-200 shadow-xl relative overflow-hidden group select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-indigo-500" />
          <span className="text-xs text-gray-500 font-mono font-medium">brand_engagement_grid</span>
        </div>
        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Post 1 mockup */}
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 rounded-full bg-[#0B0B0F] flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">GY</span>
            </div>
            <div className="space-y-0.5">
              <div className="h-2 w-10 bg-gray-300 rounded"></div>
              <div className="h-1.5 w-6 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="h-14 bg-gray-200 rounded-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B0F] to-gray-700 opacity-90 flex flex-col justify-end p-2">
              <div className="h-2 w-12 bg-[#D6A354] rounded"></div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[8px] text-gray-400">
            <span>Likes: Highly Engaged</span>
            <span className="text-[#D6A354] font-semibold">Active Campaign</span>
          </div>
        </div>

        {/* Post 2 mockup - Metrics focus */}
        <div className="bg-[#0B0B0F] text-white p-3 rounded-lg border border-gray-800 flex flex-col justify-between">
          <div>
            <p className="text-[10px] text-[#D6A354] uppercase tracking-wider font-bold">Social ROI</p>
            <p className="text-xl font-bold text-white mt-1">Growth</p>
          </div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between items-center text-[9px] border-b border-white/[0.05] pb-1">
              <span className="text-gray-400">Reach</span>
              <span className="text-emerald-400 font-medium">Optimized</span>
            </div>
            <div className="flex justify-between items-center text-[9px]">
              <span className="text-gray-400">Engagement</span>
              <span className="text-[#D6A354] font-medium">Organic & Paid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
