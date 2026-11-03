import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Calendar, MapPin } from 'lucide-react';

export const ExperienceSection = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 md:py-24 bg-[#0d0f15] border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
            Professional Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Six years of experience engineering UAV photogrammetry workflows, edge computer vision models, and distributed WebGIS systems.
          </p>
        </div>

        {/* Structural Experience List */}
        <div className="space-y-10">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="p-6 sm:p-8 rounded-2xl bg-[#0f1118] border border-slate-800 shadow-sm space-y-4"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-amber-400 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="pt-3 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
