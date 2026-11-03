import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, Mail } from 'lucide-react';

export const EducationSection = () => {
  const { education, publications, references } = PORTFOLIO_DATA;

  return (
    <section id="publications" className="py-20 md:py-24 bg-[#0a0c10] border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
            Scholarship & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education, Publications & Patents
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Academic training from the School of Surveying and Geospatial Engineering at the University of Tehran, accompanied by research publications and patents.
          </p>
        </div>

        {/* Dual Grid: Education and Publications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Academic Degrees (University of Tehran)</span>
            </div>

            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-2xl bg-[#0e1017] border border-slate-800 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold text-amber-400 mt-0.5">
                      {edu.institution}
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 shrink-0 self-start">
                    {edu.period}
                  </span>
                </div>

                {edu.thesis && (
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                    <div className="font-mono text-slate-400 uppercase text-[11px] mb-1">
                      Master's Thesis Research:
                    </div>
                    <div className="text-slate-200 font-medium">
                      "{edu.thesis}"
                    </div>
                    {edu.supervisors && (
                      <div className="text-slate-400 mt-1 text-[11px]">
                        Supervised by: {edu.supervisors}
                      </div>
                    )}
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          {/* Publications & Patents Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Publications & Patent Applications</span>
            </div>

            {publications.map((pub) => (
              <div
                key={pub.title}
                className="p-6 rounded-2xl bg-[#0e1017] border border-slate-800 space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {pub.type}: {pub.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {pub.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {pub.title}
                </h3>

                <div className="text-xs font-mono text-slate-400">
                  {pub.authors} · <span className="text-slate-300">{pub.venue}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {pub.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Academic References */}
        <div className="pt-10 border-t border-slate-800/80">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-5">
            Verified Academic References
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {references.map((ref) => (
              <div
                key={ref.email}
                className="p-5 rounded-xl bg-[#0e1017] border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {ref.name}
                  </h4>
                  <div className="text-xs text-amber-400 font-medium mt-0.5">
                    {ref.title}
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    {ref.institution}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {ref.relation}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <a
                    href={`mailto:${ref.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{ref.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
