import { useState } from 'react';
import { Page, Project } from '../types';
import { portfolioProjects } from '../data/portfolio';
import { ArrowRight, Globe, Sparkles } from 'lucide-react';

interface PortfolioProps {
  onNavigate: (page: Page) => void;
  onSelectProject: (project: Project) => void;
}

export default function Portfolio({ onNavigate, onSelectProject }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Website Development',
    'Landing Pages',
    'E-commerce',
    'Real Estate',
    'Digital Marketing',
    'Other Projects'
  ];

  // Helper to determine if a project belongs to a selected category filter
  const isProjectInFilter = (project: Project, filter: string) => {
    if (filter === 'All') return true;
    
    const industryLower = project.industry.toLowerCase();
    const servicesLower = project.services.map(s => s.toLowerCase());

    switch (filter) {
      case 'Website Development':
        return servicesLower.includes('website development');
      case 'Landing Pages':
        return project.id === 'auto-rescue' || project.id === 'fk-property';
      case 'E-commerce':
        return industryLower.includes('e-commerce') || project.id === 'veer-teja-water-tech' || project.id === 'healthfull';
      case 'Real Estate':
        return industryLower.includes('real estate') || project.id === 'fk-property' || project.id === 'prime-locations';
      case 'Digital Marketing':
        return servicesLower.includes('digital marketing') || servicesLower.includes('meta ads') || servicesLower.includes('google ads');
      case 'Other Projects':
        return project.id === 'panjiar-interiors' || project.id === 'cb-pharma-india' || project.id === 'suchiverse-hub' || project.id === 'nirwan-tours-travels' || project.id === 'luxe-space-interior' || project.id === 'viren-vivah';
      default:
        return false;
    }
  };

  const filteredProjects = portfolioProjects.filter(p => isProjectInFilter(p, activeFilter));

  const handleProjectClick = (project: Project) => {
    onSelectProject(project);
    onNavigate('case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-[72px] overflow-x-hidden text-left">
      
      {/* Portfolio Header */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A354]">Agency Portfolio</span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0B0B0F]">
              Work That Speaks For Itself
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Explore our comprehensive database of 11 actual past projects, spanning modern web engineering, strategic SEO implementations, and high-performance lead acquisition systems.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[60px] z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#0B0B0F] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Visual Block Mockup */}
                <div className="bg-[#0B0B0F]/5 p-6 h-48 flex flex-col justify-between border-b border-gray-100 relative group overflow-hidden select-none">
                  <div className="absolute inset-0 bg-[#0B0B0F] opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-center p-6 text-white text-xs space-y-2">
                    <p className="font-bold text-sm text-[#D6A354]">{project.name}</p>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map(t => (
                        <span key={t} className="bg-white/10 px-1.5 py-0.5 rounded text-[9px] font-mono">{t}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] bg-[#D6A354]/10 text-[#D6A354] px-2.5 py-1 rounded-full font-bold border border-[#D6A354]/20">
                      {project.industry}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 flex items-center space-x-1">
                      <Globe className="w-3 h-3" />
                      <span>{project.website.replace('https://', '')}</span>
                    </span>
                  </div>

                  {/* SVG Placeholder matching specific name */}
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <div className="h-2.5 w-12 bg-gray-200 rounded"></div>
                    <div className="text-2xl font-black text-gray-800 tracking-tight">{project.name}</div>
                    <p className="text-[10px] text-gray-400 font-medium">Bespoke Production UI</p>
                  </div>

                  <span className="text-[9px] text-gray-400 font-medium">Hover to inspect tech stack</span>
                </div>

                {/* Info and Navigation block */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B0B0F]">{project.name}</h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.services.map((serv, sIdx) => (
                        <span key={sIdx} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium">
                          {serv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <button
                    onClick={() => handleProjectClick(project)}
                    className="w-full text-center bg-[#0B0B0F] hover:bg-[#D6A354] text-white hover:text-[#0B0B0F] py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-[#0B0B0F] hover:border-[#D6A354] cursor-pointer"
                  >
                    View Case Study Details
                  </button>
                </div>

              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl">
              <p className="text-gray-400 text-sm font-medium">No projects found matching the selected category filter.</p>
            </div>
          )}

        </div>
      </section>

      {/* Advisory explaining source of projects */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs text-gray-400 font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#D6A354]" />
            <span>Honest Project Attribution</span>
          </div>
          <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
            The past work entries featured above represent real, verifiable live business properties. We do not falsely state that every individual campaign was developed exclusively by GY Marketing Agency, acting as a reliable technical showcase.
          </p>
        </div>
      </section>

    </div>
  );
}
