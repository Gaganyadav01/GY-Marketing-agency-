import { useState, useEffect } from 'react';
import { Page } from '../types';
import { 
  ArrowLeft, ShieldCheck, Info, FileText, Mail, Phone, Globe, Scale, 
  BookOpen, ChevronRight, CheckCircle2, Lock, Sparkles, AlertTriangle
} from 'lucide-react';

interface LegalProps {
  page: Page;
  onNavigate?: (page: Page) => void;
}

export default function Legal({ page, onNavigate }: LegalProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  // Auto-scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  }, [page]);

  const handleBackToHome = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.hash = '#/home';
    }
  };

  const handlePageChange = (targetPage: Page) => {
    if (onNavigate) {
      onNavigate(targetPage);
    } else {
      window.location.hash = `#/${targetPage}`;
    }
  };

  // Sections definitions for table of contents
  const privacySections = [
    { id: 'collect', label: '1. Information We Collect' },
    { id: 'use', label: '2. How We Use Information' },
    { id: 'forms', label: '3. Contact Forms' },
    { id: 'cookies', label: '4. Cookies' },
    { id: 'analytics', label: '5. Analytics' },
    { id: 'advertising', label: '6. Advertising' },
    { id: 'third-party', label: '7. Third-Party Services' },
    { id: 'sharing', label: '8. Data Sharing' },
    { id: 'security', label: '9. Data Security' },
    { id: 'retention', label: '10. Data Retention' },
    { id: 'rights', label: '11. Your Rights' },
    { id: 'children', label: '12. Children’s Privacy' },
    { id: 'links', label: '13. External Links' },
    { id: 'changes', label: '14. Policy Changes' },
    { id: 'contact', label: '15. Contact Us' }
  ];

  const termsSections = [
    { id: 'services', label: '1. Services' },
    { id: 'use', label: '2. Website Use' },
    { id: 'payments', label: '3. Payments' },
    { id: 'advertising', label: '4. Advertising' },
    { id: 'dev', label: '5. Web & App Dev' },
    { id: 'seo-social', label: '6. SEO & Social Media' },
    { id: 'intellectual', label: '7. Intellectual Property' },
    { id: 'cancel-refund', label: '8. Cancellation & Refunds' },
    { id: 'liability', label: '9. Liability' },
    { id: 'governing', label: '10. Governing Law' },
    { id: 'contact', label: '11. Contact' }
  ];

  const refundSections = [
    { id: 'refund-intro', label: 'Introduction' },
    { id: 'refund-services', label: 'Services Covered' },
    { id: 'refund-bookings', label: '1. Service Bookings & Payments' },
    { id: 'refund-cancel', label: '2. Cancellation by Client' },
    { id: 'refund-eligibility', label: '3. Refund Eligibility' },
    { id: 'refund-non-refundable', label: '4. Non-Refundable Expenses' },
    { id: 'refund-advertising', label: '5. Advertising Services' },
    { id: 'refund-dev', label: '6. Website & App Dev' },
    { id: 'refund-seo', label: '7. SEO & Social Media' },
    { id: 'refund-subscriptions', label: '8. Monthly Services & Subscriptions' },
    { id: 'refund-process', label: '9. Refund Process' },
    { id: 'refund-processing-time', label: '10. Refund Processing Time' },
    { id: 'refund-agreements', label: '11. Client-Specific Agreements' },
    { id: 'refund-changes', label: '12. Changes to this Policy' },
    { id: 'refund-contact', label: '13. Contact Us' }
  ];

  const disclaimerSections = [
    { id: 'disc-intro', label: 'Introduction' },
    { id: 'disc-no-guarantee', label: '1. No Guarantee of Results' },
    { id: 'disc-ads-perf', label: '2. Meta & Google Ads Performance' },
    { id: 'disc-seo-perf', label: '3. SEO Performance' },
    { id: 'disc-social-perf', label: '4. Social Media Performance' },
    { id: 'disc-dev-perf', label: '5. Website & App Development' },
    { id: 'disc-client-resp', label: '6. Client Responsibilities' },
    { id: 'disc-third-party', label: '7. Third-Party Platforms' },
    { id: 'disc-reporting', label: '8. Performance Data & Reporting' },
    { id: 'disc-business-factors', label: '9. Business & Market Factors' },
    { id: 'disc-no-financial', label: '10. No Financial Guarantee' },
    { id: 'disc-client-decisions', label: '11. Client Decisions' },
    { id: 'disc-changes', label: '12. Changes to Disclaimer' },
    { id: 'disc-contact', label: '13. Contact Us' }
  ];

  // Helper to scroll to section smoothly
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getActiveSections = () => {
    if (page === 'privacy-policy') return privacySections;
    if (page === 'terms-conditions') return termsSections;
    if (page === 'refund-policy') return refundSections;
    if (page === 'disclaimer') return disclaimerSections;
    return [];
  };

  const sections = getActiveSections();

  return (
    <div className="pt-[76px] bg-[#0B0B0F] text-white min-h-screen font-sans">
      
      {/* 1. TOP HERO HERO BANNER */}
      <div className="border-b border-gray-900 bg-gradient-to-b from-[#111116] to-[#0B0B0F] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#D6A354] bg-[#D6A354]/10 px-2.5 py-1 rounded">
                  Legal Policy Center
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                {page === 'privacy-policy' && 'Privacy Policy'}
                {page === 'terms-conditions' && 'Terms & Conditions'}
                {page === 'refund-policy' && 'Refund & Cancellation Policy'}
                {page === 'disclaimer' && 'Performance Disclaimer'}
              </h1>
              <p className="text-xs text-gray-500 font-mono">
                Last Updated: <span className="text-[#D6A354] font-semibold">[ADD DATE]</span>
              </p>
            </div>

            {/* Back Button */}
            <div>
              <button
                onClick={handleBackToHome}
                className="inline-flex items-center space-x-2 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 hover:border-[#D6A354] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#D6A354]" />
                <span>Back to Home</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 2. MAIN DOCUMENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Notice Alert Box */}
        <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 flex gap-4 mb-10 max-w-4xl">
          <Info className="w-5 h-5 text-[#D6A354] flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="text-xs font-black uppercase tracking-wider text-[#D6A354]">GY Marketing Agency General Legal Template</p>
            <p className="text-[11px] text-gray-400 leading-relaxed font-semibold">
              The following document is an editable legal template prepared for GY Marketing Agency. Placeholders marked with brackets <span className="text-[#D6A354] font-bold">[LIKE THIS]</span> are designed to be filled out with your specific technical details, actual cookies, tracking identifiers, or jurisdiction prior to business filing.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-900 pb-6">
          {[
            { id: 'privacy-policy', label: 'Privacy Policy' },
            { id: 'terms-conditions', label: 'Terms & Conditions' },
            { id: 'refund-policy', label: 'Refund & Cancellation' },
            { id: 'disclaimer', label: 'Performance Disclaimer' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handlePageChange(tab.id as Page)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                page === tab.id 
                  ? 'bg-[#D6A354] border-[#D6A354] text-[#0B0B0F]' 
                  : 'bg-transparent border-gray-900 text-gray-400 hover:text-white hover:border-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDEBAR: Table of Contents (Shown dynamically for all active pages!) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-[#0B0B0F] border border-gray-900 rounded-2xl p-6 space-y-6">
              
              <div className="flex items-center space-x-2 border-b border-gray-900 pb-4">
                <BookOpen className="w-4 h-4 text-[#D6A354]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Table of Contents</span>
              </div>

              <nav className="space-y-1.5 max-h-[380px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all block truncate ${
                      activeSection === sec.id 
                        ? 'bg-[#D6A354]/10 text-[#D6A354] border-l-2 border-[#D6A354] pl-2' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5 pl-3'
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </nav>

              <div className="pt-4 border-t border-gray-900 text-center">
                <button
                  onClick={handleBackToHome}
                  className="text-xs text-gray-500 hover:text-[#D6A354] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 mx-auto transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Home</span>
                </button>
              </div>

            </div>

            {/* Quick links card */}
            <div className="bg-[#0B0B0F] border border-gray-900 rounded-2xl p-6 space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">Digital Business Compliance</span>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                GY Marketing Agency designs clean digital platforms governed by modern client service contracts.
              </p>
              <div className="pt-2 border-t border-gray-900 space-y-2 text-xs">
                <div className="flex items-center justify-between text-gray-400">
                  <span>Meta & Google Ads Compliant</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6A354]" />
                </div>
                <div className="flex items-center justify-between text-gray-400">
                  <span>Secure React Integrations</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6A354]" />
                </div>
                <div className="flex items-center justify-between text-gray-400">
                  <span>Bhopal HQ Business</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6A354]" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: DOCUMENT RICH CONTENT CONTAINER */}
          <div className="lg:col-span-8 bg-[#0B0B0F] border border-gray-900 rounded-2xl p-8 md:p-12 space-y-10 max-w-4xl text-gray-300">
            
            {/* PRIVACY POLICY PAGE LAYOUT */}
            {page === 'privacy-policy' && (
              <div className="space-y-12">
                
                {/* Intro section */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-white tracking-tight border-b border-gray-900 pb-3">Introduction</h2>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    At GY Marketing Agency, we respect your privacy and are committed to protecting the information you share with us through our website.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    This Privacy Policy explains what information may be collected, how it may be used, how it may be protected and the choices available to users.
                  </p>
                </div>

                {/* Section 1 */}
                <div id="collect" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">1. Information We May Collect</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Depending on how you interact with our website, we may collect information such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>WhatsApp number</li>
                    <li>Business name</li>
                    <li>Service requirements</li>
                    <li>Project details</li>
                    <li>Budget information</li>
                    <li>Messages submitted through contact forms</li>
                    <li>Information provided when communicating with us</li>
                  </ul>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold mt-4">
                    We may also automatically collect limited technical information such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device type</li>
                    <li>Operating system</li>
                    <li>Pages visited</li>
                    <li>Website interaction data</li>
                    <li>Approximate location derived from technical information</li>
                  </ul>
                  <div className="bg-gray-900/40 p-4 rounded-xl border border-gray-800/60 mt-3">
                    <p className="text-[10px] text-gray-500 font-semibold italic">
                      Note to Owner: This policy specifies collecting only information that is actually available through the website and its active, configured forms.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="use" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">2. How We Use Your Information</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Information may be used to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>Respond to enquiries</li>
                    <li>Provide requested services</li>
                    <li>Understand project requirements</li>
                    <li>Communicate with potential or existing clients</li>
                    <li>Prepare quotations or proposals</li>
                    <li>Improve our website and services</li>
                    <li>Provide customer support</li>
                    <li>Maintain website security</li>
                    <li>Analyze website usage where analytics tools are enabled</li>
                    <li>Comply with applicable legal obligations</li>
                  </ul>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold mt-2">
                    We do not use personal information for purposes unrelated to the reason it was collected unless permitted or required by applicable law.
                  </p>
                </div>

                {/* Section 3 */}
                <div id="forms" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">3. Contact Forms</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    When you submit a contact or enquiry form, the information you provide may be used to respond to your enquiry.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Typical information collected may include:
                  </p>
                  <div className="grid grid-cols-2 gap-2 max-w-sm text-xs text-gray-400 font-semibold pl-2">
                    <div className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 bg-[#D6A354] rounded-full"></span>
                      <span>Name</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 bg-[#D6A354] rounded-full"></span>
                      <span>Email</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 bg-[#D6A354] rounded-full"></span>
                      <span>Phone / WhatsApp</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 bg-[#D6A354] rounded-full"></span>
                      <span>Business Name</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 bg-[#D6A354] rounded-full"></span>
                      <span>Selected Service</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 bg-[#D6A354] rounded-full"></span>
                      <span>Budget</span>
                    </div>
                  </div>
                  <div className="bg-gray-900/40 p-4 rounded-xl border border-gray-800/60 mt-3">
                    <p className="text-[10px] text-gray-500 font-semibold italic">
                      Compliance Warning: This layout does not state that form submissions are automatically sent to CRM pipelines, automatic email campaigns, or instant WhatsApp responders unless those third-party APIs have been officially integrated.
                    </p>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="cookies" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">4. Cookies</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Our website may use cookies or similar technologies where required for functionality, analytics, security or advertising.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Cookies may help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>Remember preferences</li>
                    <li>Understand website usage</li>
                    <li>Improve website functionality</li>
                    <li>Measure marketing performance</li>
                    <li>Support advertising and remarketing where enabled</li>
                  </ul>
                  <div className="bg-gray-900/40 p-4 rounded-xl border border-gray-800/60">
                    <p className="text-[10px] text-[#D6A354] font-semibold">
                      Editable Cookie Config: <span className="text-gray-400 font-normal">[Only include specific cookie categories or technologies that are actually implemented on the website. No speculative tracking cookies are enabled default.]</span>
                    </p>
                  </div>
                </div>

                {/* Section 5 */}
                <div id="analytics" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">5. Analytics and Tracking</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    If analytics or tracking technologies are installed on the website, they may collect information about website visits and interactions.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Examples of potential tracking mechanisms include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>Google Analytics (for visitor counts & pages)</li>
                    <li>Meta Pixel (for tracking response to Facebook/Instagram ads)</li>
                    <li>Google Ads conversion tracking</li>
                  </ul>
                  <div className="bg-[#D6A354]/5 p-4 rounded-xl border border-[#D6A354]/10">
                    <p className="text-[11px] text-[#D6A354] font-semibold italic">
                      IMPORTANT COMPLIANCE DETAIL: None of the tracking tools listed above are active unless they have actually been installed, configured, and consented to by visitors on the live domain.
                    </p>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="advertising" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">6. Advertising</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    GY Marketing Agency may use digital advertising platforms to promote its services. Where advertising or tracking technologies are enabled, those platforms may process information according to their own privacy policies (e.g. Meta Ads, Google Ads).
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold italic">
                    We do not claim that any particular advertising platform tracking is currently active on this page unless explicitly requested and hard-coded by the owner.
                  </p>
                </div>

                {/* Section 7 */}
                <div id="third-party" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">7. Third-Party Services</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Our website or services may use third-party platforms or services for purposes such as hosting, analytics, communication, payment processing, or emails.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Third-party providers process information according to their own policies.
                  </p>
                  <div className="bg-gray-900/40 p-4 rounded-xl border border-gray-800/60">
                    <p className="text-[10px] text-gray-500 font-semibold italic">
                      Editable Placeholders: [Add actual third-party providers only when they are being used, e.g. Netlify, Vercel, Hostinger, AWS, Stripe].
                    </p>
                  </div>
                </div>

                {/* Section 8 */}
                <div id="sharing" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">8. Data Sharing</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    We may share information with service providers where reasonably necessary to operate the website, communicate with users, provide requested services or comply with legal requirements.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    We do not sell personal information to third parties for their own independent marketing purposes unless clearly disclosed and permitted by applicable law.
                  </p>
                </div>

                {/* Section 9 */}
                <div id="security" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">9. Data Security</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    We take reasonable technical and administrative measures to protect information from unauthorized access, misuse, alteration or disclosure. However, no method of transmission or electronic storage can be guaranteed to be 100% secure.
                  </p>
                </div>

                {/* Section 10 */}
                <div id="retention" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">10. Data Retention</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, to provide services, maintain business records, resolve disputes or comply with applicable legal requirements. Actual retention periods vary depending on the type of information and purpose.
                  </p>
                </div>

                {/* Section 11 */}
                <div id="rights" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">11. Your Rights</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Depending on your jurisdiction, you may have rights regarding your personal information, including the ability to request access, correction of inaccuracies, withdrawal of consent, or data deletion. To make a privacy-related request, contact us using the details below.
                  </p>
                </div>

                {/* Section 12 */}
                <div id="children" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">12. Children’s Privacy</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Our website is intended for general business and informational purposes. We do not knowingly request personal information from children where doing so would violate applicable law.
                  </p>
                </div>

                {/* Section 13 */}
                <div id="links" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">13. External Links</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Our website may contain links to third-party websites or platforms. We are not responsible for the privacy practices or content of external websites. Users should review the privacy policies of third-party websites they visit.
                  </p>
                </div>

                {/* Section 14 */}
                <div id="changes" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">14. Changes to This Privacy Policy</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    We may update this Privacy Policy from time to time to reflect changes to our services, website, technology or legal requirements. The updated version will be published on this page with a revised "Last Updated" date.
                  </p>
                </div>

                {/* Section 15 */}
                <div id="contact" className="space-y-6 pt-4 scroll-mt-24 border-t border-gray-900">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">15. Contact Us</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    For questions, requests or concerns regarding this Privacy Policy, contact:
                  </p>

                  <div className="p-6 rounded-2xl bg-gray-950 border border-gray-900 space-y-4 max-w-md">
                    <h4 className="text-sm font-bold text-white">GY Marketing Agency</h4>
                    <div className="space-y-2.5 text-xs text-gray-400 font-semibold">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-[#D6A354]" />
                        <span className="text-[#D6A354]">digitalgagan127@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-[#D6A354]" />
                        <span>+91 9608872151</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-4 h-4 text-[#D6A354]" />
                        <span className="font-mono text-gray-500">[ADD YOUR WEBSITE URL]</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TERMS & CONDITIONS PAGE LAYOUT */}
            {page === 'terms-conditions' && (
              <div className="space-y-12">
                
                {/* Intro section */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-white tracking-tight border-b border-gray-900 pb-3">Introduction</h2>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Welcome to GY Marketing Agency.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    These Terms & Conditions govern the use of the GY Marketing Agency website and the provision of our digital marketing, web development and related services.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    By accessing our website or engaging our services, you agree to these Terms & Conditions to the extent applicable to your use of our website or services.
                  </p>
                </div>

                {/* Section 1 */}
                <div id="services" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">1. About Our Services</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    GY Marketing Agency provides digital services that may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>Meta Ads</li>
                    <li>Google Ads</li>
                    <li>Website Development</li>
                    <li>App Development</li>
                    <li>SEO Services</li>
                    <li>Social Media Growth</li>
                    <li>Digital Marketing Consulting</li>
                    <li>Related digital services agreed upon with a client</li>
                  </ul>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold mt-2">
                    The exact services, deliverables, timelines and pricing will depend on the individual project or service agreement.
                  </p>
                </div>

                {/* Section 2 */}
                <div id="use" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">2. Website Use</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    You agree to use this website for lawful purposes only. You must not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>Use the website for unlawful activities</li>
                    <li>Attempt to gain unauthorized access to the website or its systems</li>
                    <li>Introduce malicious code or harmful software</li>
                    <li>Copy or misuse website content without permission</li>
                    <li>Interfere with the normal operation of the website</li>
                    <li>Submit false, misleading or fraudulent information</li>
                  </ul>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold mt-2">
                    We reserve the right to restrict access to the website where reasonably necessary to protect the website, users or our business.
                  </p>
                </div>

                {/* Section 3 */}
                <div id="payments" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">3. Payments</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Service pricing and payment schedules will be communicated before the project begins. Depending on the project, payment may be:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>Full payment in advance</li>
                    <li>Partial advance payment (booking/milestone retainer)</li>
                    <li>Milestone-based payment</li>
                    <li>Monthly management retainer</li>
                    <li>Another payment arrangement explicitly agreed with the client</li>
                  </ul>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold mt-2">
                    The applicable payment terms will be based on the individual project or service agreement.
                  </p>
                </div>

                {/* Section 4 */}
                <div id="advertising" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">4. Advertising</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    For Meta Ads and Google Ads management, GY Marketing Agency assists with campaign strategy, setup, creative direction, targeting, monitoring, reporting and optimization depending on the agreed scope.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Advertising performance depends on multiple factors (industry, competition, budget, platform policies, market demand, landing page conversion rate, etc). 
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold font-black text-white">
                    We do not guarantee specific leads, sales, revenue, ROI, CPC, CPA, ROAS or other advertising results unless specifically agreed in writing where legally appropriate.
                  </p>
                </div>

                {/* Section 5 */}
                <div id="dev" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">5. Web & App Dev</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    <strong>For Website Development:</strong> The agreed project scope, features, design and functionality will be determined before development begins. Client-provided content, images, trademarks, product information and other materials must be legally usable by the client.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    <strong>For App Development:</strong> Features, technology, design, platforms, integrations and delivery timelines depend on the agreed scope. App Store and Google Play approval is controlled by the respective platforms and cannot be guaranteed by GY Marketing Agency.
                  </p>
                </div>

                {/* Section 6 */}
                <div id="seo-social" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">6. SEO & Social Media</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    <strong>SEO Services:</strong> Results depend on search engine algorithms, competition, industry trends, and domain status. GY Marketing Agency does not guarantee specific Google rankings, traffic levels, leads or revenue unless explicitly contracted in writing.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    <strong>Social Media Services:</strong> Follower count, engagement, reach, and viral parameters are subject to platform algorithm shifts. We do not issue guarantees on exact follower or like milestones.
                  </p>
                </div>

                {/* Section 7 */}
                <div id="intellectual" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">7. Intellectual Property</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Ownership of final project deliverables will depend on the specific project agreement and applicable payment terms. Unless otherwise agreed:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>GY Marketing Agency retains rights to its pre-existing tools, systems, templates, processes and proprietary materials.</li>
                    <li>Third-party software, plugins, fonts, images, APIs and assets are subject to separate licenses.</li>
                    <li>Client-owned trademarks, logos and content remain the property of the respective owner.</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div id="cancel-refund" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">8. Cancellation & Refunds</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Cancellation and refund terms depend on the specific service agreement and applicable law. Please review our separate Refund & Cancellation Policy for complete detailed terms.
                  </p>
                </div>

                {/* Section 9 */}
                <div id="liability" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">9. Liability</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    To the extent permitted by applicable law, GY Marketing Agency will not be responsible for indirect, incidental or consequential losses arising from the use of our website, services or third-party platforms. Nothing in these Terms is intended to exclude or limit liability where such exclusion or limitation is not permitted by applicable law.
                  </p>
                </div>

                {/* Section 10 */}
                <div id="governing" className="space-y-4 pt-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">10. Governing Law</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    These Terms shall be interpreted according to applicable laws. 
                  </p>
                  <div className="bg-[#D6A354]/5 p-4 rounded-xl border border-[#D6A354]/10">
                    <p className="text-xs text-[#D6A354] font-semibold">
                      Applicable Jurisdiction Placeholder: <span className="text-gray-400 font-normal">[Bhopal, Madhya Pradesh, India / ADD APPLICABLE JURISDICTION]</span>
                    </p>
                  </div>
                </div>

                {/* Section 11 */}
                <div id="contact" className="space-y-6 pt-4 scroll-mt-24 border-t border-gray-900">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">11. Contact</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    For questions regarding these Terms & Conditions, contact:
                  </p>

                  <div className="p-6 rounded-2xl bg-gray-950 border border-gray-900 space-y-4 max-w-md">
                    <h4 className="text-sm font-bold text-white">GY Marketing Agency</h4>
                    <div className="space-y-2.5 text-xs text-gray-400 font-semibold">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-[#D6A354]" />
                        <span className="text-[#D6A354]">digitalgagan127@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-[#D6A354]" />
                        <span>+91 9608872151</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-4 h-4 text-[#D6A354]" />
                        <span className="font-mono text-gray-500">[ADD YOUR WEBSITE URL]</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* REFUND & CANCELLATION POLICY PAGE LAYOUT */}
            {page === 'refund-policy' && (
              <div className="space-y-12">
                
                {/* Intro section */}
                <div id="refund-intro" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-bold text-white tracking-tight border-b border-gray-900 pb-3">Refund & Cancellation Policy</h2>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    At GY Marketing Agency, we specialize in high-performance digital marketing, software technology development, and strategic growth optimization services.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Because of the customized nature of creative campaigns, design assets, and development sprints, refund and cancellation terms depend on the specific service type, active project stage, payment structure, and the mutually agreed scope of work defined within your signed service contract.
                  </p>
                </div>

                {/* Services Covered */}
                <div id="refund-services" className="space-y-4 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">Services Covered</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    This comprehensive policy applies to all technology and digital services offered by GY Marketing Agency, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-semibold">
                    {[
                      'Meta Ads Management (Facebook & Instagram)',
                      'Google Ads Management (Search, Performance Max, Youtube)',
                      'Website Development (React, WordPress, Custom Apps)',
                      'App Development (Android, iOS, Web Apps)',
                      'SEO Services (On-Page, Off-Page, Technical SEO)',
                      'Social Media Growth & Management',
                      'Digital Marketing Consulting & Auditing',
                      'Other customized services explicitly agreed with the client'
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 bg-gray-950 p-3 rounded-xl border border-gray-900">
                        <CheckCircle2 className="w-4 h-4 text-[#D6A354] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 1 */}
                <div id="refund-bookings" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">1. Service Bookings & Payments</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Depending on the complexity, scale, and requirements of the agreed project or campaign, GY Marketing Agency may structure payments under several mutually agreeable arrangements:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li><strong className="text-white font-black">Full Advance Payment:</strong> Typically required for short-duration campaigns, audit packages, or fast-track consultancies.</li>
                    <li><strong className="text-white font-black">Partial Advance Payment:</strong> An initial booking deposit or retainer to initiate design assets, campaign strategy, or wireframing modules.</li>
                    <li><strong className="text-white font-black">Milestone-Based Payment:</strong> Payments linked directly to concrete stages of development or execution (e.g., 30% wireframe, 40% development beta, 30% deployment).</li>
                    <li><strong className="text-white font-black">Monthly Recurring Payment:</strong> Retainer-style fees charged periodically for active ads management, growth marketing, or ongoing monthly search optimization.</li>
                    <li><strong className="text-white font-black">Any Other Mutually Agreed Structure:</strong> Formally documented in the respective invoice, statement of work, or proposal.</li>
                  </ul>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold mt-2">
                    The applicable payment terms will always be clearly outlined and communicated to the client prior to starting any project or campaign execution.
                  </p>
                </div>

                {/* Section 2 */}
                <div id="refund-cancel" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">2. Cancellation by Client</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    We understand that business objectives can shift over time. Clients may request to cancel active projects or recurring campaigns under the following guidelines:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>All cancellation requests must be formally submitted in writing via our official communication channels.</li>
                    <li>Cancellation requests should be initiated as early as possible to minimize incurred developer, writer, or designer hours.</li>
                    <li>If work has already commenced (including setup research, market audits, design briefs, or prototype generation), cancellation does not automatically qualify for a full refund of deposit sums.</li>
                    <li>Any eligible refund, if applicable, will be calculated dynamically based on completed labor milestones, third-party technical expenses, active stage of progress, and the overall terms governing the client agreement.</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div id="refund-eligibility" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">3. Refund Eligibility</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Refund reviews are handled strictly on a case-by-case basis. To preserve professional fairness and transparency, eligibility calculations are based on the following metrics:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li><strong className="text-white font-black">Initiation State:</strong> Whether technical development, copy creation, or pixel setup has officially started.</li>
                    <li><strong className="text-white font-black">Work Progress Volume:</strong> The total developer or marketer hours actively logged and creative deliverables generated up to the cancellation time.</li>
                    <li><strong className="text-white font-black">Milestone Completion:</strong> Specific target blocks within the Statement of Work that have been delivered or signed off.</li>
                    <li><strong className="text-white font-black">Pre-Incurred Outlays:</strong> Outgoing payments made directly to hostings, templates, plugins, software API keys, or specialized tools.</li>
                    <li><strong className="text-white font-black">Advertising Spends:</strong> Sums dedicated to Meta Ads Manager or Google Ads auctions, which are handled directly inside platforms.</li>
                  </ul>
                  <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-xl mt-3">
                    <p className="text-xs text-white font-bold mb-1">Fee Distinction Notice</p>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-semibold">
                      To prevent billing confusion, clients must distinguish between <strong className="text-[#D6A354]">GY Marketing Agency Service Fees</strong> (the technical time spent engineering campaigns and websites) and <strong className="text-[#D6A354]">Advertising/Platform Charges</strong> (paid directly to Meta or Google auctions). Agency service fee adjustments have no influence on third-party platform costs.
                    </p>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="refund-non-refundable" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">4. Non-Refundable Expenses</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    GY Marketing Agency relies on secure, advanced global technology partners to construct premium projects. Certain third-party outlays, once acquired, are completely irreversible and cannot be refunded by us. These include, but are not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>Active Meta Ads and Google Ads auction expenditures.</li>
                    <li>Domain registration or renewal fees purchase from domain registrars.</li>
                    <li>Hosting server setup fees or non-refundable cloud hosting cycles.</li>
                    <li>Paid software licenses, integrations, themes, and design plugins purchased specifically for the project.</li>
                    <li>API platform subscriptions or payment gateway setup fees.</li>
                    <li>App Store (Apple Developer) or Google Play developer registration and marketplace fees.</li>
                  </ul>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold mt-2">
                    Refund eligibility for these expenses is strictly governed by each respective third party's refund policies and cannot be processed or altered by GY Marketing Agency.
                  </p>
                </div>

                {/* Section 5 */}
                <div id="refund-advertising" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">5. Advertising Services (Meta & Google Ads)</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    For client clarity, paid traffic campaign parameters are outlined below:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li><strong className="text-white font-black">Budget Separation:</strong> Advertising budgets spent directly on ad networks are separate and distinct from our campaign strategy, management, and setup fees, unless explicitly agreed in writing.</li>
                    <li><strong className="text-white font-black">Network Policy Dominance:</strong> Any fund already consumed within Meta Ads Manager or Google Ads is subject strictly to their internal advertiser terms and cannot be treated as an agency-refundable fee.</li>
                    <li><strong className="text-white font-black">Fluctuating Metrics:</strong> Campaign outcomes are subject to seasonal shifts, audience fatigue, niche competition, budget restrictions, offer viability, and changing auction conditions.</li>
                    <li><strong className="text-white font-black">No Performance Promises:</strong> To maintain professional compliance, GY Marketing Agency explicitly does not issue guaranteed sales, guaranteed leads, conversions, specific CPC benchmarks, or guaranteed Return on Advertising Spend (ROAS).</li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div id="refund-dev" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">6. Website & App Development</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Software and design assets require heavy initial technical architecture. The guidelines below apply to code production:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>If cancellation is requested post-sprint initiation, development hours already logged will be compiled and billed against any advanced payments.</li>
                    <li>Advance bookings and milestones may be adapted to cover the cost of wireframing, layout engineering, and database setup completed up to that point.</li>
                    <li>Third-party costs, including premium CMS plugins, custom themes, API subscriptions, and cloud instances, are billed separately and handled based on the software vendor's native policies.</li>
                    <li>Final refund eligibility depends entirely on the specific statement of work, milestone completion state, and signed project agreement.</li>
                  </ul>
                </div>

                {/* Section 7 */}
                <div id="refund-seo" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">7. SEO & Social Media Services</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Search visibility and platform growth are ongoing, iterative campaigns:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>Results for SEO and social media organic reach naturally fluctuate due to real-time search engine or platform algorithm updates, competition, and user engagement trends.</li>
                    <li>Cancellation of recurring monthly services must adhere to the notice periods established in the respective service agreement.</li>
                    <li>No refund, settlement, or cancellation request shall be interpreted as a guarantee of exact keyword rankings, organic traffic targets, follower milestones, views, or business outcomes.</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div id="refund-subscriptions" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">8. Monthly Services & Subscriptions</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    For ongoing management retainers and recurring subscriptions:
                  </p>
                  <div className="bg-gray-900/30 border border-gray-800 p-4 rounded-xl space-y-2">
                    <p className="text-xs text-[#D6A354] font-black uppercase tracking-wider">Cancellation Notice Period Placeholder</p>
                    <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                      Please refer to your signed agreement or contract to view your custom-negotiated notice timeline: <span className="text-[#D6A354] font-bold font-mono">[ADD CANCELLATION NOTICE PERIOD, e.g., 15 Days / 30 Days]</span>.
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                      Once a written cancellation notice is received, future automatic billings will be deactivated upon completion of the respective notice period. Services delivered or milestones completed during the notice cycle remain fully payable.
                    </p>
                  </div>
                </div>

                {/* Section 9 */}
                <div id="refund-process" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">9. Refund Process</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    To request an eligibility review for a refund, clients must submit an official request to our support desk:
                  </p>
                  
                  <div className="bg-gray-950 p-6 rounded-2xl border border-gray-900 space-y-4 max-w-md">
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Required Submission Details:</p>
                    <div className="space-y-2.5 text-xs text-gray-400 font-semibold">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-[#D6A354]" />
                        <div>
                          <p className="text-[10px] text-gray-500 font-mono uppercase">Official Email Contact</p>
                          <span className="text-white">[ADD EMAIL, e.g. digitalgagan127@gmail.com]</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-[#D6A354]" />
                        <div>
                          <p className="text-[10px] text-gray-500 font-mono uppercase">Phone / WhatsApp</p>
                          <span className="text-white">[ADD PHONE NUMBER, e.g. +91 9608872151]</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-semibold italic border-t border-gray-900 pt-3">
                      Please include your Business/Client Name, invoice/project number, completed milestones, and a comprehensive explanation of your request. All valid claims will be analyzed against logged hours and third-party outlays.
                    </p>
                  </div>
                </div>

                {/* Section 10 */}
                <div id="refund-processing-time" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">10. Refund Processing Time</h3>
                  <p className="text-xs leading-relaxed text-gray-300 font-semibold">
                    “Approved refunds will generally be processed within <span className="text-[#D6A354] font-bold font-mono">[ADD NUMBER, e.g., 7 to 14]</span> business days after approval. The actual time for the amount to appear in the client's account may depend on the payment gateway, bank or financial institution.”
                  </p>
                </div>

                {/* Section 11 */}
                <div id="refund-agreements" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">11. Client-Specific Agreements</h3>
                  <div className="bg-[#D6A354]/5 p-5 rounded-2xl border border-[#D6A354]/20">
                    <p className="text-xs text-white leading-relaxed font-semibold">
                      “If a signed agreement, proposal, quotation, invoice, statement of work or other written agreement contains specific refund or cancellation terms, those terms will apply to the relevant project or service.”
                    </p>
                  </div>
                </div>

                {/* Section 12 */}
                <div id="refund-changes" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">12. Changes to this Policy</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    GY Marketing Agency reserves the right to review and update this Refund & Cancellation Policy as our operations, tech stacks, or platform integrations expand. Any updates will be published instantly on this page with an adjusted "Last Updated" date.
                  </p>
                </div>

                {/* Section 13 */}
                <div id="refund-contact" className="space-y-6 pt-4 scroll-mt-24 border-t border-gray-900">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">13. Contact Us</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    If you require clarification on any clause within this policy, please connect with us:
                  </p>

                  <div className="p-6 rounded-2xl bg-gray-950 border border-gray-900 space-y-4 max-w-md">
                    <h4 className="text-sm font-bold text-white">GY Marketing Agency</h4>
                    <div className="space-y-2.5 text-xs text-gray-400 font-semibold">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-[#D6A354]" />
                        <span className="text-white font-mono">[ADD EMAIL, e.g. digitalgagan127@gmail.com]</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-[#D6A354]" />
                        <span className="text-white font-mono">[ADD PHONE NUMBER, e.g. +91 9608872151]</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-4 h-4 text-[#D6A354]" />
                        <span className="text-white font-mono">[ADD WEBSITE URL]</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legal Note bottom */}
                <div className="pt-6 border-t border-gray-900/50">
                  <p className="text-[10px] text-gray-500 font-semibold leading-relaxed">
                    “This Refund & Cancellation Policy is provided as a general business template and should be reviewed and customized according to the actual services, payment terms and applicable laws governing GY Marketing Agency.”
                  </p>
                </div>

              </div>
            )}

            {/* PERFORMANCE DISCLAIMER PAGE LAYOUT */}
            {page === 'disclaimer' && (
              <div className="space-y-12">
                
                {/* Intro section */}
                <div id="disc-intro" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-bold text-white tracking-tight border-b border-gray-900 pb-3">Performance Disclaimer</h2>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    GY Marketing Agency provides comprehensive digital marketing, paid advertising, website development, SEO strategies, social media consulting, and related technology services.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    We utilize tested industry practices and custom-engineered codebases to support our clients' digital transformations. However, marketing and technology performance are subject to numerous dynamic variables. This Performance Disclaimer explains that results vary and no specific business outcome is guaranteed.
                  </p>
                </div>

                {/* Section 1 */}
                <div id="disc-no-guarantee" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">1. No Guarantee of Results</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    GY Marketing Agency explicitly does not guarantee or represent that implementing our services, recommendations, or custom digital setups will result in any specific metric, including:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 text-xs text-gray-400 font-semibold pl-2">
                    {[
                      'Leads Generated',
                      'Sales Volume',
                      'Business Revenue',
                      'Company Profit',
                      'Return on Investment (ROI)',
                      'Ad Spend Return (ROAS)',
                      'Client Conversions',
                      'Website Traffic',
                      'Customer Acquisition',
                      'Cost Per Lead (CPL)',
                      'Cost Per Acquisition (CPA)',
                      'Cost Per Click (CPC)',
                      'Cost Per Mille (CPM)',
                      'Click-Through Rate (CTR)',
                      'Search Engine Rankings',
                      'Social Followers',
                      'Likes & Views',
                      'Audience Engagement'
                    ].map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 bg-[#D6A354] rounded-full flex-shrink-0"></span>
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold mt-2">
                    These key metrics can fluctuate rapidly due to changes in market demand, competitor activity, budget limits, target offers, visual creatives, landing page design, website usability, and general industry shifts.
                  </p>
                </div>

                {/* Section 2 */}
                <div id="disc-ads-perf" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">2. Meta Ads & Google Ads Performance</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Paid advertising campaigns depend on multiple complex variables outside the control of any agency:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li><strong className="text-white font-black">Auction Conditions:</strong> Live bidding systems and ad delivery spaces change dynamically based on advertiser density.</li>
                    <li><strong className="text-white font-black">Platform Algorithms:</strong> Meta (Facebook/Instagram) and Google operate independent, automated machine-learning auction systems that frequently update delivery parameters.</li>
                    <li><strong className="text-white font-black">Creative & Copy Quality:</strong> Campaign response is highly reliant on visual appeal, emotional triggers, offer strength, and audience alignment.</li>
                    <li><strong className="text-white font-black">Conversion Architecture:</strong> Post-click metrics rely completely on the speed, layout, and trust factors of the target landing page or website checkout systems.</li>
                  </ul>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    GY Marketing Agency does not control independent platform policy changes, algorithm adjustments, auction structures, or ad approval timelines.
                  </p>
                </div>

                {/* Section 3 */}
                <div id="disc-seo-perf" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">3. SEO Performance</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Search Engine Optimization (SEO) is an ongoing, long-term technical process. GY Marketing Agency cannot guarantee specific Google positions, organic visibility growth, or traffic milestones because:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>Search engines (Google, Bing) publish frequent algorithmic updates that shift search indexing.</li>
                    <li>Rankings depend heavily on website quality, content relevancy, page load speed, mobile responsive design, backlink profile authority, and searcher demand.</li>
                    <li>Competitors actively perform optimizations, causing search results to adjust constantly.</li>
                  </ul>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    We do not guarantee or promise specific Google ranking milestones or precise achievement timelines.
                  </p>
                </div>

                {/* Section 4 */}
                <div id="disc-social-perf" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">4. Social Media Performance</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Organic reach, content virality, views, followers, and audience engagement levels are highly variable:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>Social platforms frequently adjust feed distribution algorithms to favor specific content formats.</li>
                    <li>Performance is closely tied to shifting consumer trends, content visual appeal, posting frequency, audience interests, and account history.</li>
                    <li>We do not guarantee viral content outcomes, specific follower milestones, or fixed engagement percentages.</li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div id="disc-dev-perf" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">5. Website & App Development</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    GY Marketing Agency engineers and develops websites and web applications in strict alignment with agreed specifications and requirements.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    However, business success after launch depends heavily on factors beyond initial design and coding, such as external marketing campaigns, company pricing structures, product desirability, client sales processes, market demand, and business operations.
                  </p>
                </div>

                {/* Section 6 */}
                <div id="disc-client-resp" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">6. Client Responsibilities</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Campaign and software development success requires collaboration. Clients are responsible for providing accurate, legally sound, and timely:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>Business models and product pricing strategies.</li>
                    <li>Authorized brand assets, high-resolution logos, product images, or commercial videos.</li>
                    <li>Accurate pricing parameters and company details.</li>
                    <li>Technical access credentials where required (e.g., Domain accounts, hosting logins, Facebook Business Manager).</li>
                    <li>Prompt feedback and milestone approvals.</li>
                  </ul>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Incomplete information, missing brand assets, or delayed approvals may affect overall project execution timelines and campaign performance.
                  </p>
                </div>

                {/* Section 7 */}
                <div id="disc-third-party" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">7. Third-Party Platforms</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    GY Marketing Agency integrates and works alongside third-party digital networks and hosting providers, including:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-400 font-semibold pl-2">
                    {['Meta Ads', 'Google Ads', 'Instagram', 'YouTube', 'Shopify', 'WordPress', 'Hosting Providers', 'Domain Registrars', 'Payment Gateways', 'Google Analytics'].map((item, idx) => (
                      <span key={idx} className="bg-gray-950 p-2 rounded-lg border border-gray-900 text-center block text-white">{item}</span>
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold mt-3">
                    We do not govern or control third-party platforms. GY Marketing Agency cannot be held liable for sudden network outages, third-party algorithm overhauls, account restrictions, advertising policy updates, or direct technical alterations made by external platforms.
                  </p>
                </div>

                {/* Section 8 */}
                <div id="disc-reporting" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">8. Performance Data & Reporting</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Client dashboards, tracking reports, or analytics updates contain historical performance data compiled from specific campaign runs.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400 font-black text-white">
                    Historical performance data does not represent or guarantee future campaign outcomes.
                  </p>
                  <div className="bg-gray-950 p-4 border border-gray-900 rounded-xl">
                    <p className="text-[10px] text-gray-500 font-semibold italic">
                      Data Integrity Standard: If any sample, demo, or wireframe graphics are visible on the website, they are clearly marked as "Sample Data" or "Illustrative Example". GY Marketing Agency never represents generic layout examples as actual customer metrics.
                    </p>
                  </div>
                </div>

                {/* Section 9 */}
                <div id="disc-business-factors" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">9. Business & Market Factors</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Commercial success relies on massive market forces outside the scope of technical marketing campaigns:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-semibold pl-2">
                    <li>General market demand for your business services/products.</li>
                    <li>Niche competitor density, brand pricing strategies, and local economic cycles.</li>
                    <li>Client internal sales response times, support quality, and fulfillment capabilities.</li>
                    <li>Brand reputation, public trust parameters, and customer retention.</li>
                  </ul>
                </div>

                {/* Section 10 */}
                <div id="disc-no-financial" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">10. No Financial or Business Guarantee</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    No presentation, proposal, or advice supplied by GY Marketing Agency should be interpreted as a promise of guaranteed financial growth, monetary return, company valuation increases, or secure business profit.
                  </p>
                </div>

                {/* Section 11 */}
                <div id="disc-client-decisions" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">11. Client Decisions</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    Clients are completely responsible for governing their own commercial decisions, product pricing models, business operations, capital allocations, advertising budgets, and contractual investments.
                  </p>
                </div>

                {/* Section 12 */}
                <div id="disc-changes" className="space-y-4 pt-4 scroll-mt-24 border-t border-gray-900/50">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">12. Changes to This Disclaimer</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    GY Marketing Agency reserves the right to adjust and update this Performance Disclaimer periodically to reflect shifts in technology, platform capabilities, and operational services. Updates are published on this page instantly.
                  </p>
                </div>

                {/* Section 13 */}
                <div id="disc-contact" className="space-y-6 pt-4 scroll-mt-24 border-t border-gray-900">
                  <h3 className="text-lg font-bold text-[#D6A354] tracking-tight">13. Contact Us</h3>
                  <p className="text-xs leading-relaxed text-gray-400 font-semibold">
                    For questions or enquiries regarding our performance disclaimer parameters, please contact:
                  </p>

                  <div className="p-6 rounded-2xl bg-gray-950 border border-gray-900 space-y-4 max-w-md">
                    <h4 className="text-sm font-bold text-white">GY Marketing Agency</h4>
                    <div className="space-y-2.5 text-xs text-gray-400 font-semibold">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-[#D6A354]" />
                        <span className="text-white font-mono">[ADD EMAIL, e.g. digitalgagan127@gmail.com]</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-[#D6A354]" />
                        <span className="text-white font-mono">[ADD PHONE NUMBER, e.g. +91 9608872151]</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-4 h-4 text-[#D6A354]" />
                        <span className="text-white font-mono">[ADD WEBSITE URL]</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlighted Warning Box */}
                <div className="bg-[#D6A354]/5 border-2 border-dashed border-[#D6A354]/30 rounded-2xl p-6 flex gap-4 mt-6">
                  <AlertTriangle className="w-6 h-6 text-[#D6A354] flex-shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-wider text-[#D6A354]">Core Marketing Performance Statement</p>
                    <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                      “Marketing performance varies from business to business. GY Marketing Agency provides strategies, services and optimization based on the agreed scope of work, but specific business results cannot be guaranteed.”
                    </p>
                  </div>
                </div>

                {/* Legal Note bottom */}
                <div className="pt-6 border-t border-gray-900/50">
                  <p className="text-[10px] text-gray-500 font-semibold leading-relaxed">
                    “This Performance Disclaimer is provided as a general business template and should be reviewed and customized according to the actual services and applicable laws governing GY Marketing Agency.”
                  </p>
                </div>

              </div>
            )}

            {/* Closing Trust Check */}
            <div className="pt-8 border-t border-gray-900 flex items-center space-x-2 text-xs text-gray-500 font-semibold select-none">
              <Lock className="w-4 h-4 text-[#D6A354]" />
              <span>Editable GY Marketing Agency General Document Template</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
