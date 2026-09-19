import { Page } from '../types';
import { AlertCircle, ArrowLeft, Home } from 'lucide-react';

interface NotFoundProps {
  onNavigate: (page: Page) => void;
}

export default function NotFound({ onNavigate }: NotFoundProps) {
  return (
    <div className="pt-[72px] min-h-[75vh] flex items-center justify-center bg-gray-50 text-left select-none">
      <div className="max-w-md w-full mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center space-y-6">
          
          <div className="h-14 w-14 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto border border-amber-100">
            <AlertCircle className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h1 className="text-5xl font-black text-[#0B0B0F] tracking-tight font-mono">404</h1>
            <p className="text-base font-bold text-[#0B0B0F]">Page Not Found</p>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto font-medium">
            The page you are looking for does not exist or has been relocated. Return to GY Marketing Agency home page.
          </p>

          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-[#0B0B0F] hover:border-[#D6A354] flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return To Home</span>
          </button>

        </div>
      </div>
    </div>
  );
}
