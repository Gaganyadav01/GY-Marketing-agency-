import { Page, Project } from '../types';
import { ArrowLeft, Globe, Cpu, Layers, Milestone, ShieldAlert, BadgeCheck, ExternalLink, ArrowRight } from 'lucide-react';

interface CaseStudyDetailProps {
  project: Project | null;
  onNavigate: (page: Page) => void;
}

export default function CaseStudyDetail({ project, onNavigate }: CaseStudyDetailProps) {
  
  if (!project) {
    return (
      <div className="pt-24 pb-16 text-center">
        <p className="text-gray-400">No project selected. Return to the portfolio list.</p>
        <button 
          onClick={() => onNavigate('portfolio')}
          className="mt-4 bg-[#0B0B0F] text-white px-4 py-2 rounded-lg"
        >
          View Portfolio
        </button>
      </div>
    );
  }

  const handleBackClick = () => {
    onNavigate('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-[72px] overflow-x-hidden text-left">
      
      {/* Case study Display Header */}
      <section className="bg-white py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button
            onClick={handleBackClick}
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-[#D6A354] transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back To Portfolio</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Case Study / {project.industry}</span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0B0B0F]">
                {project.name}
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-[#0B0B0F] hover:border-[#D6A354] flex items-center space-x-2 flex-shrink-0 cursor-pointer text-center"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* Main Breakdown Layout */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Side Parameters */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-[160px] h-fit">
              
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Project Overview</h3>
                
                {/* Meta details */}
                <div className="space-y-4 text-xs font-medium">
                  <div>
                    <p className="text-gray-400">Client / Business</p>
                    <p className="text-sm font-bold text-[#0B0B0F] mt-0.5">{project.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Industry Sector</p>
                    <p className="text-sm font-bold text-[#0B0B0F] mt-0.5">{project.industry}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Active Website URL</p>
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#D6A354] hover:underline mt-0.5 flex items-center space-x-1">
                      <span>{project.website.replace('https://', '')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Services badge index */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Services Provided</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.services.map((ser, sIdx) => (
                      <span key={sIdx} className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md text-[10px] font-semibold">
                        {ser}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-[#0B0B0F] text-[#D6A354] px-2 py-0.5 rounded text-[9px] font-mono border border-[#D6A354]/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Metrics panel if exists */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Verifiable Parameters</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-semibold">{metric.label}</span>
                        <span className="text-sm font-black text-[#D6A354]">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Structured Narrative Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Project Challenge */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-[#D6A354]">
                  <ShieldAlert className="w-5 h-5 text-red-500" />
                  <h2 className="text-xl font-bold text-[#0B0B0F]">The Business Challenge</h2>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {project.challenge}
                </p>
              </div>

              {/* Strategic Approach */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-[#D6A354]">
                  <Milestone className="w-5 h-5 text-[#D6A354]" />
                  <h2 className="text-xl font-bold text-[#0B0B0F]">Our Strategic Approach</h2>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {project.approach}
                </p>
              </div>

              {/* Project Visual Representation (Interactive wireframe structure) */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Platform Layout Structure</h3>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 relative select-none">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200 text-[10px] text-gray-400 font-mono">
                    <span>{project.name.toLowerCase()}_storefront_layout</span>
                    <span className="text-emerald-500 font-semibold">Active DNS Verified</span>
                  </div>
                  
                  {/* Fake representation wireframe */}
                  <div className="space-y-4 mt-4 text-xs">
                    <div className="h-8 bg-gray-200 rounded flex items-center justify-between px-3">
                      <span className="font-bold font-mono text-[10px]">{project.name}</span>
                      <div className="h-1.5 w-16 bg-gray-300 rounded"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 bg-white border border-gray-100 rounded p-2 text-center flex flex-col justify-between">
                        <span className="text-[9px] text-gray-400">Header Hero</span>
                        <div className="h-1.5 w-8 bg-[#D6A354] rounded mx-auto"></div>
                      </div>
                      <div className="h-16 bg-white border border-gray-100 rounded p-2 text-center flex flex-col justify-between">
                        <span className="text-[9px] text-gray-400">Assets grid</span>
                        <div className="h-1.5 w-10 bg-gray-300 rounded mx-auto"></div>
                      </div>
                      <div className="h-16 bg-[#0B0B0F] rounded p-2 text-center flex flex-col justify-between">
                        <span className="text-[9px] text-gray-400">Call to Action</span>
                        <div className="h-1.5 w-6 bg-[#D6A354] rounded mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Outcome */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-emerald-500">
                  <BadgeCheck className="w-5 h-5 text-emerald-500" />
                  <h2 className="text-xl font-bold text-[#0B0B0F]">Final Project Outcome</h2>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {project.outcome}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-[#0B0B0F] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-white">Do You Need Similar Solutions For Your Brand?</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            Let's dissect your target industry parameters and design high-speed, gold-accented digital channels with premium conversion rate performance.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#D6A354] hover:bg-white text-[#0B0B0F] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 mx-auto cursor-pointer"
          >
            <span>Discuss Project Needs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
