import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Cpu, Activity } from 'lucide-react';

export const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'vision' | 'photogrammetry' | 'geospatial'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { projects } = PORTFOLIO_DATA;

  const categories = [
    { id: 'all', label: 'All Systems', count: projects.length },
    { id: 'vision', label: 'Computer Vision & AI', count: projects.filter(p => p.category === 'vision').length },
    { id: 'photogrammetry', label: 'Photogrammetry & 3D', count: projects.filter(p => p.category === 'photogrammetry').length },
    { id: 'geospatial', label: 'Geospatial & WebGIS', count: projects.filter(p => p.category === 'geospatial').length },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 border-t border-white/[0.08] relative bg-[#090b10]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>PRODUCTION & RESEARCH SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
              Selected Engineering Works
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Industrial pipelines, embedded perception rigs, and deep learning algorithms developed for UAV photogrammetry, remote sensing, and infrastructure monitoring.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#10131d] p-1.5 rounded-xl border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.id ? 'bg-slate-900/20 text-slate-950' : 'bg-white/[0.06] text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#0e111a] hover:bg-[#121622] border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle Corner Reticle Line */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-amber-400 to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-amber-400 to-transparent"></div>
              </div>

              <div>
                {/* Meta Top Line */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-amber-400 border border-white/[0.08] uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    {project.hardware && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                        <Cpu className="w-3 h-3 text-slate-400" />
                        {project.hardware}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {project.metric}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-amber-300 transition-colors mb-2 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.subtitle}
                </p>

                {/* Challenge Summary Box */}
                <div className="p-3.5 rounded-xl bg-[#090b10] border border-white/[0.04] mb-6">
                  <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-1">
                    System Functionality:
                  </div>
                  <div className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </div>
                </div>
              </div>

              {/* Bottom: Tech Stack & Deep Dive CTA */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#151926] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <span className="text-xs font-mono text-amber-400 font-medium group-hover:underline flex items-center gap-1 shrink-0">
                  <span>Deep Dive Spec</span>
                  <span>→</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
