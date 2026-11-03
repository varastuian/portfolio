import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection = () => {
  const { skillsCategories } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 md:py-24 bg-[#0d0f15] border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
            Tooling & Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills & Tooling
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Core toolsets, programming languages, and spatial libraries applied across production pipelines and academic research.
          </p>
        </div>

        {/* 4-Column Structural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-4 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white tracking-tight pb-3 border-b border-slate-800">
                  {cat.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-amber-400/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800/60">
                Verified Production Level
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
