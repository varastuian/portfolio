import { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { X, Cpu, CheckCircle2, AlertTriangle, Layers, Code2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
      
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#0d0f17] border border-white/[0.12] rounded-2xl shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Telemetry Bar */}
        <div className="px-6 py-4 bg-[#121520] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/25 uppercase">
              {project.categoryLabel}
            </span>
            {project.hardware && (
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <Cpu className="w-3.5 h-3.5 text-slate-500" />
                {project.hardware}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
              {project.metric}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-2">
              {project.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Dual Column: Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-xl bg-[#121520] border border-red-500/15">
              <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-semibold uppercase mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#121520] border border-emerald-500/15">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Pipeline Architecture Flow */}
          <div className="p-5 rounded-xl bg-[#11131c] border border-white/[0.06]">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold uppercase mb-4">
              <Layers className="w-4 h-4" />
              <span>Pipeline & Architectural Workflow</span>
            </div>
            <div className="space-y-2.5">
              {project.architecture.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0 mt-0.5">
                    STEP {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code or Math Snippet (if provided) */}
          {project.codeSnippet && (
            <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#090b10]">
              <div className="px-4 py-2.5 bg-[#12141d] border-b border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>CORE IMPLEMENTATION [{project.codeSnippet.language.toUpperCase()}]</span>
                </div>
                <span>SOURCE EXCERPT</span>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Key Engineering Deliverables */}
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Key Engineering Deliverables & Metrics
            </div>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-500 mr-2">TECH_STACK:</span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded bg-[#161a26] text-slate-300 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#121520] border-t border-white/[0.08] flex items-center justify-between">
          <div className="text-xs font-mono text-slate-500">
            SYSTEM_ID: {project.id}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold font-mono transition-colors"
          >
            CLOSE SPECIFICATION
          </button>
        </div>

      </div>

    </div>
  );
};
