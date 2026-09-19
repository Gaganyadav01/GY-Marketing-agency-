import { useState } from 'react';
import { Page, ContactForm } from '../types';
import { 
  Phone, Mail, MapPin, ArrowRight, Send, Loader2, CheckCircle2, 
  Sparkles, CheckCircle, MessageSquare
} from 'lucide-react';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    service: '',
    budget: 'Not decided', // default fallback for TypeScript mapping
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const servicesDropdown = [
    'Meta Ads',
    'Google Ads',
    'SEO',
    'Social Media Marketing',
    'Social Media Growth',
    'Website Development',
    'App Development',
    'Lead Generation',
    'AI Chatbot',
    'AI Automation',
    'Other'
  ];

  const validate = () => {
    const tempErrors: Partial<ContactForm> = {};
    if (!form.name.trim()) tempErrors.name = 'Full Name is required';
    
    if (!form.email.trim()) {
      tempErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Enter a valid email address';
    }

    if (!form.phone.trim()) {
      tempErrors.phone = 'Phone Number is required';
    }

    if (!form.service) tempErrors.service = 'Please select a service';
    if (!form.message.trim()) tempErrors.message = 'Project details are required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable secure transmission flow to thank-you redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      onNavigate('thank-you');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="pt-[72px] overflow-x-hidden text-left bg-white text-[#0B0B0F] font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B0B0F] to-[#12121A] py-20 md:py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(214,163,84,0.05),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D6A354]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center space-x-1 bg-[#D6A354]/10 border border-[#D6A354]/20 px-3 py-1 rounded-full text-xs font-bold text-[#D6A354] uppercase tracking-wider">
              GET IN TOUCH
            </span>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Let's Grow Your <br />
              <span className="text-[#D6A354]">Business Together</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed font-medium">
              Have a project, marketing goal or business idea? Get in touch with GY Marketing Agency and let's discuss how we can help.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919608872151"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#D6A354]/10"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href="tel:+919608872151"
                className="bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2"
              >
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION CARDS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Call card */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/60 flex flex-col justify-between h-[200px] hover:border-[#D6A354] transition-all duration-300">
              <div className="space-y-3">
                <div className="h-10 w-10 bg-[#0B0B0F] text-[#D6A354] rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider">CALL US</h3>
                <p className="text-sm font-bold text-[#0B0B0F]">+91 9608872151</p>
              </div>
              <a 
                href="tel:+919608872151" 
                className="inline-flex items-center justify-center bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] py-2.5 rounded-xl text-xs font-bold uppercase transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* WhatsApp card */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/60 flex flex-col justify-between h-[200px] hover:border-[#D6A354] transition-all duration-300">
              <div className="space-y-3">
                <div className="h-10 w-10 bg-[#0B0B0F] text-[#D6A354] rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider">WHATSAPP</h3>
                <p className="text-sm font-bold text-[#0B0B0F]">+91 9608872151</p>
              </div>
              <a 
                href="https://wa.me/919608872151" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#D6A354] hover:bg-[#0B0B0F] text-[#0B0B0F] hover:text-white py-2.5 rounded-xl text-xs font-bold uppercase transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Email card */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/60 flex flex-col justify-between h-[200px] hover:border-[#D6A354] transition-all duration-300">
              <div className="space-y-3">
                <div className="h-10 w-10 bg-[#0B0B0F] text-[#D6A354] rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider">EMAIL</h3>
                <p className="text-sm font-bold text-[#0B0B0F] break-all">digitalgagan127@gmail.com</p>
              </div>
              <a 
                href="mailto:digitalgagan127@gmail.com" 
                className="inline-flex items-center justify-center bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] py-2.5 rounded-xl text-xs font-bold uppercase transition-colors"
              >
                Send Email
              </a>
            </div>

            {/* Location card */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/60 flex flex-col justify-between h-[200px] hover:border-[#D6A354] transition-all duration-300">
              <div className="space-y-3">
                <div className="h-10 w-10 bg-[#0B0B0F] text-[#D6A354] rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider">LOCATION</h3>
                <p className="text-sm font-bold text-[#0B0B0F]">Bhopal, Madhya Pradesh, India</p>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Bhopal%20Madhya%20Pradesh%20India" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] py-2.5 rounded-xl text-xs font-bold uppercase transition-colors"
              >
                View Location
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM SECTION */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200/60 shadow-xl space-y-8">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354] block">Strategic Specifications Form</span>
              <h2 className="text-3xl font-black tracking-tight text-[#0B0B0F]">
                Tell Us About Your Project
              </h2>
              <p className="text-xs text-gray-400 font-medium max-w-lg mx-auto">
                Fill out your commercial goals below. A senior developer will analyze your blueprint criteria.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0B0B0F] block">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D6A354] transition-all ${
                      errors.name ? 'border-red-500 bg-red-50/10' : 'border-gray-200/80 hover:border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-[10px] font-bold text-red-500">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0B0B0F] block">Phone Number *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D6A354] transition-all ${
                      errors.phone ? 'border-red-500 bg-red-50/10' : 'border-gray-200/80 hover:border-gray-300'
                    }`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && <p className="text-[10px] font-bold text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0B0B0F] block">Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D6A354] transition-all ${
                      errors.email ? 'border-red-500 bg-red-50/10' : 'border-gray-200/80 hover:border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-[10px] font-bold text-red-500">{errors.email}</p>}
                </div>

                {/* Business Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0B0B0F] block">Business Name</label>
                  <input
                    type="text"
                    value={form.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200/80 hover:border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D6A354] transition-all"
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              {/* Service Required */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B0B0F] block">Service Required *</label>
                <select
                  value={form.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D6A354] transition-all ${
                    errors.service ? 'border-red-500' : 'border-gray-200/80 hover:border-gray-300'
                  }`}
                >
                  <option value="">-- Select Required Service --</option>
                  {servicesDropdown.map((ser) => (
                    <option key={ser} value={ser}>{ser}</option>
                  ))}
                </select>
                {errors.service && <p className="text-[10px] font-bold text-red-500">{errors.service}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B0B0F] block">Project Details *</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D6A354] transition-all ${
                    errors.message ? 'border-red-500 bg-red-50/10' : 'border-gray-200/80 hover:border-gray-300'
                  }`}
                  placeholder="Tell us about your brand goals, timelines, and requirements..."
                />
                {errors.message && <p className="text-[10px] font-bold text-red-500">{errors.message}</p>}
              </div>

              {/* Privacy disclaimer message */}
              <p className="text-[10.5px] text-gray-400 font-semibold text-center select-none">
                Your information will only be used to respond to your inquiry.
              </p>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0B0B0F] hover:bg-[#D6A354] disabled:bg-gray-400 text-white hover:text-[#0B0B0F] py-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Specifications...</span>
                  </>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>

          </div>
        </div>
      </section>

      {/* 4. WHATSAPP CTA SECTION */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#25D366]/5 to-[#128C7E]/5 border border-[#25D366]/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#128C7E]">Instant Response Portal</span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0B0B0F]">
                Need a Quick Response?
              </h3>
              <p className="text-xs text-gray-500 max-w-md font-medium leading-relaxed">
                For project inquiries and quick communication, chat with us directly on WhatsApp.
              </p>
            </div>

            <a
              href="https://wa.me/919608872151"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#25D366]/10 flex items-center space-x-2 flex-shrink-0"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. BUSINESS LOCATION */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-200/60 shadow-md space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Global Office Index</span>
              <h3 className="text-2xl font-black tracking-tight text-[#0B0B0F]">Where We're Based</h3>
              <p className="text-sm font-bold text-gray-500">Bhopal, Madhya Pradesh, India</p>
            </div>

            {/* High fidelity Google Map embed iframe */}
            <div className="rounded-2xl overflow-hidden border border-gray-200/60 h-80 relative shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117320.13627995837!2d77.34771746200234!3d23.25141503144133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f17d75553%3A0x27ec1e10946741e4!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CONTACT US */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Inquiry Milestones</span>
            <h3 className="text-2xl font-black text-[#0B0B0F]">Why Partner With Us?</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "01", label: "Discuss Your Business Goals", desc: "Share your target customer parameters, acquisition expectations, and current channel baselines." },
              { id: "02", label: "Get a Customized Strategy", desc: "Receive custom growth recommendations tailored specifically to fit your precise commercial criteria." },
              { id: "03", label: "Understand Our Services", desc: "See exactly how our campaigns, automated loops, and custom code blocks drive inquiries." },
              { id: "04", label: "Start Your Digital Project", desc: "Deploy compliant tracking setups, high-conversion landing assets, and optimized channels cleanly." }
            ].map((pt, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-200/50 space-y-3">
                <span className="text-xs font-bold text-[#D6A354] font-mono">{pt.id} / GOAL</span>
                <h4 className="text-sm font-black text-[#0B0B0F]">{pt.label}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">{pt.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 bg-[#0B0B0F] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,163,84,0.06),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Start Your Next Digital Project?
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed font-medium">
            Tell us what you need and our team will get back to you.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919608872151"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-10 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#D6A354]/10"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919608872151"
              className="bg-transparent hover:bg-white/5 text-white px-10 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Call +91 9608872151
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
