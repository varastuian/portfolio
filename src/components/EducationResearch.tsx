import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, Award, Mail, UserCheck, FileText } from 'lucide-react';

export const EducationResearch = () => {
  const { education, publications, references } = PORTFOLIO_DATA;

  return (
    <section id="research" className="py-24 bg-[#08090d] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATIONS & SCHOLARSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
            Education, Publications & References
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Rigorous mathematical and engineering training from the School of Surveying and Geospatial Engineering, University of Tehran.
          </p>
        </div>

        {/* Dual Grid: Degrees & Publications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Degrees */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>ACADEMIC DEGREES (UNIVERSITY OF TEHRAN)</span>
            </div>

            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-2xl bg-[#0d1017] border border-white/[0.08] hover:border-amber-500/30 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold text-amber-400 mt-1">
                      {edu.institution}
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#161a26] text-slate-300 border border-white/[0.06] shrink-0">
                    {edu.period}
                  </span>
                </div>

                {edu.thesis && (
                  <div className="p-4 rounded-xl bg-[#090b10] border border-white/[0.06]">
                    <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-1">
                      Master's Thesis Research:
                    </div>
                    <div className="text-sm text-slate-200 font-medium">
                      "{edu.thesis}"
                    </div>
                    {edu.thesisSupervisor && (
                      <div className="text-xs text-slate-400 mt-1">
                        Supervisors: {edu.thesisSupervisor}
                      </div>
                    )}
                  </div>
                )}

                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Publications & Research Statement */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>PEER-REVIEWED RESEARCH & PAPERS</span>
            </div>

            {publications.map((pub) => (
              <div
                key={pub.title}
                className="p-6 rounded-2xl bg-[#0d1017] border border-white/[0.08] hover:border-amber-500/30 transition-all space-y-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {pub.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {pub.domain}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading leading-snug">
                  {pub.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {pub.description}
                </p>
              </div>
            ))}

            {/* Research Statement Box */}
            <div className="p-6 rounded-2xl bg-[#10131d] border border-amber-500/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase font-semibold">
                <FileText className="w-4 h-4" />
                <span>Primary Research Focus</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Applied AI in microwave/optical Earth observation, spatio-temporal machine learning on satellite time-series (Sentinel, MODIS), deep learning for high-precision change detection, and autonomous drone perception rigs in GPS-challenging or GNSS-denied environments.
              </p>
            </div>
          </div>

        </div>

        {/* Academic References Section */}
        <div className="pt-12 border-t border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>VERIFIED ACADEMIC REFERENCES & RECOMMENDERS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {references.map((ref) => (
              <div
                key={ref.email}
                className="p-5 rounded-xl bg-[#0b0e15] border border-white/[0.06] hover:border-white/[0.15] transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-white font-heading">
                    {ref.name}
                  </h4>
                  <div className="text-xs text-amber-400 font-medium mt-0.5">
                    {ref.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {ref.institution}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06]">
                  <a
                    href={`mailto:${ref.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
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
