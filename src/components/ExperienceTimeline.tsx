import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

export const ExperienceTimeline = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 bg-[#090a0f] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>OPERATIONAL TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
            Engineering & Field Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Hands-on track record deploying UAV photogrammetry, embedded perception rigs, and high-concurrency spatial applications in commercial and academic environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-[8.5rem] before:w-[1px] before:bg-white/[0.08]">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="relative flex flex-col md:flex-row gap-6 md:gap-10 group"
            >
              {/* Date Marker (Desktop) */}
              <div className="hidden md:block w-32 shrink-0 text-right pt-1">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  {exp.period}
                </span>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  {exp.type}
                </div>
              </div>

              {/* Node Bullet */}
              <div className="absolute left-3 md:left-[8.5rem] -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-[#12151f] border-2 border-amber-400 group-hover:scale-125 transition-transform z-10 shadow-sm shadow-amber-500/50" />

              {/* Card Body */}
              <div className="ml-8 md:ml-0 flex-1 p-6 sm:p-7 rounded-2xl bg-[#0e111a] border border-white/[0.08] hover:border-amber-500/30 transition-all">
                
                {/* Mobile Period Tag */}
                <div className="md:hidden flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period} ({exp.type})</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-amber-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Accomplishments */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Core Technical Deliverables:
                  </div>
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#151926] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
