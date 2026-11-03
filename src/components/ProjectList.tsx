import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

export const ProjectList = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'vision' | 'photogrammetry' | 'geospatial'>('all');
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    'pavement-change-detection': true,
    'uav-mine-photogrammetry': true,
  });

  const { projects } = PORTFOLIO_DATA;

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'vision', label: 'Computer Vision & AI', count: projects.filter(p => p.category === 'vision').length },
    { id: 'photogrammetry', label: 'Photogrammetry & 3D', count: projects.filter(p => p.category === 'photogrammetry').length },
    { id: 'geospatial', label: 'Geospatial & Remote Sensing', count: projects.filter(p => p.category === 'geospatial').length },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0b0c10] border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
              Case Studies & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineering Projects & Research
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Detailed technical breakdowns of deployed UAV pipelines, edge vision algorithms, and geospatial machine learning models.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Case Studies List */}
        <div className="space-y-12">
          {filteredProjects.map((project: Project, idx) => {
            const isExpanded = !!expandedProjects[project.id];

            return (
              <article
                key={project.id}
                className="rounded-2xl border border-slate-800 bg-[#0f1117] overflow-hidden shadow-lg transition-all"
              >
                {/* Project Header Bar */}
                <div className="p-6 sm:p-8 border-b border-slate-800/80 bg-slate-900/40">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                        {project.categoryLabel}
                      </span>
                      {project.publicationOrContext && (
                        <span className="text-xs text-slate-400 font-mono">
                          // {project.publicationOrContext}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      {project.metric}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Main Content: Side-by-side or Stacked */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Visual Figure (Left 5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/10] sm:aspect-[16/11]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to mask.jpg if image still writing
                          (e.target as HTMLImageElement).src = '/images/mask.jpg';
                        }}
                      />
                    </div>
                    {project.imageCaption && (
                      <p className="text-xs text-slate-400 mt-2.5 italic leading-relaxed">
                        Fig {idx + 1}: {project.imageCaption}
                      </p>
                    )}

                    {project.hardware && (
                      <div className="mt-4 p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 font-mono">
                        <span className="text-slate-400">HARDWARE RIG:</span> {project.hardware}
                      </div>
                    )}
                  </div>

                  {/* Structural Breakdown (Right 7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                        System Overview
                      </h4>
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {project.overview}
                      </p>
                    </div>

                    {/* Expandable Technical Details */}
                    {isExpanded && (
                      <div className="space-y-4 pt-3 border-t border-slate-800/80 text-sm">
                        <div>
                          <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                            The Engineering Challenge
                          </h4>
                          <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                            {project.problem}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                            Technical Methodology & Pipeline
                          </h4>
                          <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                            {project.methodology}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                            Key Results & Validation
                          </h4>
                          <ul className="space-y-1.5">
                            {project.results.map((res, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Footer: Tech Stack and Toggle */}
                    <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        <span>{isExpanded ? 'Collapse Details' : 'Read Methodology'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
