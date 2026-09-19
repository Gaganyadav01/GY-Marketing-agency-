import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, AppWindow, Cpu, ShieldCheck, CheckCircle2, ChevronRight, 
  ArrowRight, MessageCircle, HelpCircle, Laptop, Settings, Search, 
  Globe, Database, Server, Star, Sparkles, Layers, Terminal, Grid, Flame
} from 'lucide-react';
import { Page } from '../types';

interface AppDevelopmentServiceProps {
  onNavigate: (page: Page) => void;
}

export default function AppDevelopmentService({ onNavigate }: AppDevelopmentServiceProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Interactive UI Showcase Simulator states
  const [simulatorScreen, setSimulatorScreen] = useState<string>('home');

  const services = [
    { title: "Android App Development", icon: "🤖", desc: "High-performance native applications tailored specifically for the diverse Android ecosystem." },
    { title: "iOS App Development", icon: "🍎", desc: "Elegant, premium, and security-centric native applications optimized for Apple devices." },
    { title: "Cross-Platform App Development", icon: "📱", desc: "Single-codebase mobile solutions designed to run beautifully on both Android and iOS networks." },
    { title: "Business Applications", icon: "💼", desc: "Custom mobile systems engineered to streamline internal workflows and automate operations." },
    { title: "E-commerce Apps", icon: "🛒", desc: "Mobile storefronts optimized for fast checkouts, push marketing, and customer retention." },
    { title: "Booking & Appointment Apps", icon: "📅", desc: "Real-time scheduling tools featuring interactive calendars and secure transaction streams." },
    { title: "Real Estate Apps", icon: "🏠", desc: "High-fidelity property galleries with interactive maps and simplified lead captures." },
    { title: "Education Apps", icon: "🎓", desc: "Intuitive learning spaces, interactive lessons, and modern student progress trackers." },
    { title: "Custom Mobile Applications", icon: "⚙️", desc: "Fully customized mobile software crafted to address your exact business challenges." }
  ];

  const focusPoints = [
    { title: "Modern UI/UX", desc: "Engaging, intuitive, and beautiful layouts that maximize user delight and retention." },
    { title: "Fast Performance", desc: "Lightweight builds engineered for near-instant rendering and buttery-smooth scrolls." },
    { title: "Secure Development", desc: "Built with modern authentication, data encryption, and secure network standards." },
    { title: "Mobile Responsive Experience", desc: "Flawless layout adaptivity across all viewport densities and device ratios." },
    { title: "Scalable Architecture", desc: "Clean codebase foundations structured to support seamless future feature expansions." },
    { title: "Easy-to-Use Interfaces", desc: "Simplified, logical navigation flows designed to keep app interaction completely clear." }
  ];

  const processSteps = [
    { step: "01", name: "Requirement & Strategy", desc: "Analyze targets, research competitive scopes, map user persona targets, and draft final engineering specifications." },
    { step: "02", name: "UI/UX Design", desc: "Create high-fidelity wireframes, typography frameworks, interactive screen states, and beautiful user flows." },
    { step: "03", name: "App Development", desc: "Write clean, modular, and efficient cross-platform or native code using state-of-the-art frameworks." },
    { step: "04", name: "Testing & Optimization", desc: "Conduct strict performance tests, memory usage inspections, responsiveness verifications, and beta launches." },
    { step: "05", name: "Launch & Support", desc: "Coordinate submission to Google Play Store and Apple App Store, and provide continuous post-launch support." }
  ];

  const technologies = [
    { name: "Flutter", icon: "⚡", type: "Cross-Platform" },
    { name: "React Native", icon: "📱", type: "Cross-Platform" },
    { name: "Android", icon: "🤖", type: "Native OS" },
    { name: "iOS", icon: "🍎", type: "Native OS" },
    { name: "Firebase", icon: "🔥", type: "Backend & DB" },
    { name: "Node.js", icon: "🟢", type: "API Development" },
    { name: "APIs", icon: "🔌", type: "System Integration" }
  ];

  const whyChooseUs = [
    { title: "Business-Focused Solutions", desc: "Developing features centered purely around your commercial objectives and user returns." },
    { title: "Modern Design", desc: "Rejecting outdated templates for bespoke, eye-pleasing mobile visual design languages." },
    { title: "User-Friendly Experience", desc: "Prioritizing simple navigation, clear typography, and tactile screen interactions." },
    { title: "Performance-Focused Development", desc: "Refining startup times and rendering paths to deliver ultra-fast user experiences." },
    { title: "Scalable Solutions", desc: "Drafting architectures prepared to support high-concurrency traffic and future feature additions." },
    { title: "Post-Launch Support", desc: "Providing systematic software updates, API maintenance, and active performance reviews." }
  ];

  const faqs = [
    {
      q: "How long does app development take?",
      a: "Development time depends on the app's features, complexity and requirements. Typical custom applications range from 8 to 16 weeks depending on custom configurations."
    },
    {
      q: "Can you develop both Android and iOS apps?",
      a: "Yes, app development can be planned for Android, iOS or cross-platform requirements based on the project."
    },
    {
      q: "Can you integrate APIs and payment gateways?",
      a: "Yes, required third-party APIs and payment integrations can be incorporated based on project requirements."
    },
    {
      q: "Can you build an app according to our business requirements?",
      a: "Yes, the app is engineered exactly according to your requested business processes, operational features, and target user journeys."
    }
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
              <div className="inline-flex items-center space-x-2 bg-[#D6A354]/10 border border-[#D6A354]/20 px-4 py-2 rounded-full text-xs font-semibold text-[#D6A354]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Native & Hybrid Apps</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Powerful Mobile Apps <br />
                <span className="text-[#D6A354]">Built for Your Business</span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed font-medium">
                Modern, user-friendly and scalable mobile applications designed to help businesses connect with customers and grow digitally.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCtaClick}
                  className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#D6A354]/10 cursor-pointer"
                >
                  <span>Build Your App</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <a
                  href="https://wa.me/919915228669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white/5" />
                  <span>Talk to Us</span>
                </a>
              </div>
            </div>

            {/* Premium Interactive Mobile App Simulator */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[340px] bg-gray-950 rounded-[40px] border-[10px] border-gray-900 p-4 shadow-2xl relative overflow-hidden ring-4 ring-[#D6A354]/10 aspect-[9/18]">
                
                {/* Smartphone camera notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-28 bg-gray-900 rounded-b-xl z-20 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-900"></div>
                </div>

                {/* Status Bar */}
                <div className="flex justify-between items-center text-[8px] text-gray-400 px-3 pt-1 select-none font-mono">
                  <span>9:41 AM</span>
                  <div className="flex space-x-1">
                    <span>5G</span>
                    <span>🔋 100%</span>
                  </div>
                </div>

                {/* Simulator Dynamic Content Frame */}
                <div className="h-full pt-4 flex flex-col justify-between text-white relative">
                  
                  {/* Screens Router */}
                  <div className="flex-1 py-4 flex flex-col justify-between">
                    
                    {simulatorScreen === 'home' && (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-[8px] text-gray-500 font-bold uppercase block">Welcome Prospect</span>
                            <span className="text-xs font-black">GY App Storefront</span>
                          </div>
                          <div className="h-6 w-6 rounded-full bg-[#D6A354]/10 border border-[#D6A354]/20 flex items-center justify-center text-[10px] text-[#D6A354] font-black">
                            GY
                          </div>
                        </div>

                        {/* Promo Dashboard Visual */}
                        <div className="bg-gradient-to-r from-gray-900 to-gray-900/60 p-3.5 rounded-xl border border-gray-800 space-y-2">
                          <span className="text-[8px] text-[#D6A354] font-bold uppercase tracking-wider block">Featured UI Showcase</span>
                          <p className="text-[10px] font-bold">Fast-loading interactive visual mockup sandbox.</p>
                          <div className="h-1 w-full bg-gray-800 rounded">
                            <div className="h-full w-2/3 bg-[#D6A354] rounded"></div>
                          </div>
                        </div>

                        {/* Active Metrics Widgets */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-900/40 p-2.5 rounded-lg border border-gray-800/60 text-center">
                            <span className="text-[7px] text-gray-500 block font-bold uppercase">RENDER RATIO</span>
                            <span className="text-xs font-black text-white">60 FPS</span>
                          </div>
                          <div className="bg-gray-900/40 p-2.5 rounded-lg border border-gray-800/60 text-center">
                            <span className="text-[7px] text-gray-500 block font-bold uppercase">SECURITY</span>
                            <span className="text-xs font-black text-white">SSL Base</span>
                          </div>
                        </div>

                        {/* Interactive prompt to click */}
                        <div className="text-center py-2 bg-gray-900 rounded-lg border border-gray-800">
                          <p className="text-[8px] text-gray-400 font-medium animate-pulse">Select screen tabs below to navigate</p>
                        </div>
                      </div>
                    )}

                    {simulatorScreen === 'analytics' && (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-black">Platform Analytics</span>
                          <span className="text-[8px] text-emerald-400 font-mono font-bold uppercase">+18.2% Growth</span>
                        </div>

                        <div className="bg-gray-900 p-3 rounded-lg border border-gray-800 space-y-2">
                          <div className="flex justify-between text-[8px] text-gray-400 font-bold uppercase">
                            <span>User Activity Volume</span>
                            <span>Scale Index</span>
                          </div>
                          {/* Mini Chart */}
                          <div className="h-14 flex items-end space-x-1.5 pt-1.5">
                            {[45, 60, 35, 75, 55, 90, 80].map((val, idx) => (
                              <div key={idx} className="flex-1 bg-gray-800 hover:bg-[#D6A354] rounded-sm transition-all" style={{ height: `${val}%` }}></div>
                            ))}
                          </div>
                        </div>

                        <p className="text-[8px] text-gray-500 leading-relaxed font-semibold text-center">
                          Interactive analytics showing modular, lightweight data visualizations optimized for mobile views.
                        </p>
                      </div>
                    )}

                    {simulatorScreen === 'checkout' && (
                      <div className="space-y-4">
                        <span className="text-xs font-black">Fast Matched Checkout</span>
                        
                        <div className="space-y-2 bg-gray-900 p-3 rounded-lg border border-gray-800">
                          <div className="flex justify-between items-center text-[9px]">
                            <span className="text-gray-400 font-bold">Secure Core Gateway</span>
                            <span className="text-[#D6A354] font-black">ACTIVE</span>
                          </div>
                          <div className="border-t border-gray-800/60 my-1.5"></div>
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="text-gray-300 font-medium">Bespoke Product Spec</span>
                            <span className="font-bold">Total: ₹999</span>
                          </div>
                        </div>

                        <button 
                          onClick={() => alert("Simulated purchase action recorded. Real gateways integrate seamlessly here.")}
                          className="w-full bg-[#D6A354] hover:bg-white text-[#0B0B0F] py-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Simulate Payment Link
                        </button>
                      </div>
                    )}

                  </div>

                  {/* Simulator Sticky Navigation Dock */}
                  <div className="bg-gray-900 rounded-xl p-1.5 flex justify-around items-center border border-gray-800 text-[9px] font-bold select-none">
                    <button 
                      onClick={() => setSimulatorScreen('home')}
                      className={`flex-1 py-1 text-center rounded-lg transition-colors cursor-pointer ${simulatorScreen === 'home' ? 'bg-[#0B0B0F] text-[#D6A354]' : 'text-gray-400 hover:text-white'}`}
                    >
                      Home
                    </button>
                    <button 
                      onClick={() => setSimulatorScreen('analytics')}
                      className={`flex-1 py-1 text-center rounded-lg transition-colors cursor-pointer ${simulatorScreen === 'analytics' ? 'bg-[#0B0B0F] text-[#D6A354]' : 'text-gray-400 hover:text-white'}`}
                    >
                      Charts
                    </button>
                    <button 
                      onClick={() => setSimulatorScreen('checkout')}
                      className={`flex-1 py-1 text-center rounded-lg transition-colors cursor-pointer ${simulatorScreen === 'checkout' ? 'bg-[#0B0B0F] text-[#D6A354]' : 'text-gray-400 hover:text-white'}`}
                    >
                      Pay Gateway
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. APP DEVELOPMENT SERVICES */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Technical Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              App Development Solutions
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Strategically engineered mobile frameworks structured to solve operational bottlenecks and maximize digital client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((ser, idx) => (
              <div key={idx} className="p-8 bg-gray-50/50 rounded-2xl border border-gray-200/60 hover:border-[#D6A354] transition-all duration-300 space-y-4">
                <span className="text-3xl block select-none">{ser.icon}</span>
                <h3 className="text-base font-black text-[#0B0B0F]">{ser.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">{ser.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. WHAT WE FOCUS ON */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Our Core Directives</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              What We Focus On
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Meticulous engineering metrics monitored to guarantee smooth, secure, and intuitive applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusPoints.map((item, idx) => (
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

      {/* 4. APP DEVELOPMENT PROCESS */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Lifecycle Standard</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Our App Development Process
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              A comprehensive developmental pipeline formulated to align features, budgets, and launch timelines accurately.
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

      {/* 5. TECHNOLOGIES */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Our Tech Stack</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Technologies We Work With
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Modern, highly compliant programming languages and cloud database solutions supported across standard networks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center text-center space-y-2.5 hover:border-[#D6A354] transition-colors">
                <span className="text-2xl select-none">{tech.icon}</span>
                <span className="text-xs font-black text-[#0B0B0F] block truncate">{tech.name}</span>
                <span className="text-[8px] bg-gray-100 text-gray-400 font-bold px-1.5 py-0.5 rounded uppercase font-mono">{tech.type}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. APP UI SHOWCASE */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Aesthetic Frameworks</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              App UI Showcase
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Explore custom smartphone mockups displaying sample app interface outlines designed for high-end digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { id: 1, title: "E-Commerce Experience", type: "Fluid Cart Navigation", mockScr: "E-comm Core UI", color: "from-blue-600 to-indigo-700" },
              { id: 2, title: "Commercial Real Estate", type: "Property Discovery Map", mockScr: "Real Estate Map UI", color: "from-amber-500 to-[#D6A354]" },
              { id: 3, title: "SaaS Analytics Center", type: "Live Metrics Dashboard", mockScr: "Analytics Widget UI", color: "from-purple-600 to-pink-700" }
            ].map((mock) => (
              <div key={mock.id} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all p-6 flex flex-col justify-between space-y-4">
                
                {/* Visual mockup block representing smartphone interface */}
                <div className="aspect-[9/16] bg-gray-950 rounded-2xl border border-gray-800 p-3 flex flex-col justify-between relative overflow-hidden select-none">
                  <div className="absolute inset-0 bg-gradient-to-tr opacity-10 blur-xl pointer-events-none" />
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[7px] text-gray-500 font-mono">
                    <span>9:41</span>
                    <span>🔋</span>
                  </div>

                  {/* Body interface sketch */}
                  <div className="flex-1 flex flex-col justify-center items-center text-center space-y-2 p-4">
                    <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-lg">💡</div>
                    <span className="text-[10px] font-black text-[#D6A354] uppercase tracking-widest">{mock.mockScr}</span>
                    <p className="text-[8px] text-gray-500 font-semibold leading-relaxed">
                      Sleek spatial component representing core responsive mobile interaction structures.
                    </p>
                  </div>

                  {/* Simulated bottom home line indicator */}
                  <div className="h-1 w-1/3 bg-gray-800 rounded mx-auto mt-2"></div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-black text-[#0B0B0F]">{mock.title}</h4>
                  <span className="text-[10px] text-gray-400 font-mono block">{mock.type}</span>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-[10px] text-gray-400 font-semibold max-w-lg mx-auto">
            *Verification Policy Note: The smartphone templates displayed above represent custom, high-fidelity UI design conceptualizations. These mockups are presented strictly for visual modeling purposes.
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE GY MARKETING AGENCY */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Core Advantages</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Why Choose GY Marketing Agency
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              How our tailored, user-centric mobile engineering principles set your business apart.
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

      {/* 8. FAQ SECTION */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Client Inquiries</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0B0F]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Clear, honest, and straightforward answers concerning custom mobile app engineering.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = activeFaq === idx;
              return (
                <div key={idx} className="bg-gray-50/50 rounded-xl border border-gray-200/60 overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setActiveFaq(isExpanded ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100/30 transition-colors cursor-pointer"
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

      {/* 9. FINAL CTA */}
      <section className="py-24 bg-[#0B0B0F] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,163,84,0.06),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Build a Mobile App That Works For Your Business?
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
            Let's create a premium online presence designed to attract, engage and convert your customers. Let's design your mobile standard.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xs sm:max-w-md mx-auto">
            <button
              onClick={handleCtaClick}
              className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#D6A354]/10 cursor-pointer w-full sm:w-auto"
            >
              Build Your App
            </button>
            <a
              href="https://wa.me/919915228669"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-emerald-500/10 text-emerald-400 hover:text-emerald-300 px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-emerald-500/30 hover:border-emerald-500 flex items-center justify-center space-x-2 cursor-pointer w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400/10" />
              <span>Talk to Us</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
