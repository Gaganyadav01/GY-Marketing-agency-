import { Page } from '../types';
import { CheckCircle, Home, MessageSquare, Sparkles } from 'lucide-react';

interface ThankYouProps {
  onNavigate: (page: Page) => void;
}

export default function ThankYou({ onNavigate }: ThankYouProps) {
  return (
    <div className="pt-[72px] min-h-[85vh] flex items-center justify-center bg-gray-50 text-left">
      <div className="max-w-md w-full mx-auto px-4 py-12">
        <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-xl text-center space-y-6 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D6A354]"></div>
          
          {/* Success Check Ring */}
          <div className="h-16 w-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1 text-xs text-[#D6A354] font-bold uppercase tracking-wider select-none">
              <Sparkles className="w-3 h-3" />
              <span>Inquiry Transmitted Successfully</span>
            </div>
            <h1 className="text-3xl font-black text-[#0B0B0F] tracking-tight">Thank You!</h1>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
            Your message has been successfully received. A senior strategy consultant from <strong>GY Marketing Agency</strong> will reach out to you within 24 business hours to discuss your customized growth strategy.
          </p>

          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-1/2 bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-[#0B0B0F] hover:border-[#D6A354] flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </button>
            
            <a
              href="https://wa.me/919999999999?text=Hi%20GY%20Marketing%20Agency,%20I%20just%20submitted%20my%20enquiry%20form%20and%20would%20like%20to%20discuss%20my%20project%20now"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 bg-[#25D366] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
