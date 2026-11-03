import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Eye, Compass, Layers, CheckCircle2 } from 'lucide-react';

export const SkillsMatrix = () => {
  const { skills } = PORTFOLIO_DATA;

  const domainIcons = [
    <Eye className="w-4 h-4" />,
    <Compass className="w-4 h-4" />,
    <Cpu className="w-4 h-4" />,
    <Layers className="w-4 h-4" />
  ];

  return (
    <section id="capabilities" className="py-24 bg-[#08090e] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE ENGINEERING DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
            Technical Capabilities & Tooling
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            A comprehensive matrix of algorithms, spatial mathematics, sensor protocols, and software stacks applied across 6+ years of research and production systems.
          </p>
        </div>

        {/* 4-Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((domain, idx) => (
            <div
              key={domain.domain}
              className="p-6 sm:p-7 rounded-2xl bg-[#0d1017] border border-white/[0.08] hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Domain Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {domainIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      {domain.domain}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      DOMAIN_ID: 0{idx + 1}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {domain.description}
                </p>

                {/* Skills List with Metrics */}
                <div className="space-y-3.5">
                  {domain.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className="text-amber-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#161a26] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Tag */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production & Academic Tested</span>
                </span>
                <span>Active 2026</span>
              </div>

            </div>
          ))}
        </div>

        {/* Secondary Tool Badges */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b0d14] border border-white/[0.06]">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
            ADDITIONAL PROTOCOLS, GEOSPATIAL SUITES & ENVIRONMENTS:
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Agisoft Metashape', 'Pix4D', 'ContextCapture', 'CloudCompare', 'Global Mapper',
              'SNAP (Sentinel Application Platform)', 'STAC API', 'Google Earth Engine',
              'PostGIS', 'Rasterio', 'Shapely', 'Fiona', 'PyProj', 'RTKLIB (rnx2rtkp, convbin)',
              'MAVLink 2.0', 'ROS Noetic/Galactic', 'TensorRT', 'ONNX Runtime', 'FFmpeg',
              'GStreamer', 'Docker Swarm', 'Java Spring Boot', 'C# / ASP.NET', 'MATLAB', 'Swagger'
            ].map((tool) => (
              <span
                key={tool}
                className="text-xs font-mono px-3 py-1 rounded-md bg-[#131622] text-slate-300 border border-white/[0.06] hover:border-amber-500/30 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
