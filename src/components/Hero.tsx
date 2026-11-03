import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Download, ArrowDown, MapPin, Eye, Cpu, Layers, ShieldCheck, Terminal, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenContact: () => void;
}

export const Hero = ({ onOpenTerminal, onOpenContact }: HeroProps) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid bg-radial-fade">
      
      {/* Precision Reticle Accents */}
      <div className="absolute top-24 left-8 hidden lg:block text-[11px] font-mono text-slate-400 select-none pointer-events-none">
        <div>SYS_REF: UT-PHOTO-2024</div>
        <div>DATUM: WGS84 [EPSG:4326]</div>
        <div>SENSORS: UAV / RGB / LiDAR / RTK</div>
      </div>

      <div className="absolute top-24 right-8 hidden lg:block text-[11px] font-mono text-slate-400 text-right select-none pointer-events-none">
        <div>FRAMEWORK: PYTORCH / YOLOv8 / OPENCV</div>
        <div>EDGE_TARGET: JETSON XAVIER NX / CUDA</div>
        <div>DOMAIN: {personal.domain}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span className="font-semibold uppercase tracking-wider">APPLIED GEOSPATIAL & COMPUTER VISION ENGINEER</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131722] border border-white/[0.08] text-slate-400 text-xs font-mono">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{personal.location} · Open to Relocation</span>
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-heading leading-[1.08] mb-6">
            Engineering perception systems & geospatial pipelines for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              physical world.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-3xl">
            I am <strong className="text-white font-semibold">{personal.name}</strong> ({personal.alias}). 
            Holding an M.Sc. in Photogrammetry from the <span className="text-slate-200 underline decoration-amber-500/40 underline-offset-4">University of Tehran</span>, 
            I build end-to-end perception pipelines — from UAV multi-temporal 3D reconstruction and high-precision GNSS/PPK data logging, 
            to deep learning defect segmentation (YOLOv8) deployed on edge compute (NVIDIA Jetson).
          </p>
        </div>

        {/* Action Buttons & Direct Links */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/15 group"
          >
            <span>Explore Engineering Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={personal.cvPath}
            download="Vahid-Arastuian-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#141724] hover:bg-[#1b2030] text-slate-200 hover:text-white border border-white/[0.1] font-mono text-sm transition-all"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Download Master CV [PDF]</span>
          </a>

          <button
            onClick={onOpenTerminal}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-transparent hover:bg-white/[0.04] text-slate-300 border border-white/[0.08] font-mono text-xs transition-colors"
          >
            <Terminal className="w-4 h-4 text-slate-400" />
            <span>Inspect Shell Workflows</span>
          </button>

          <div className="flex items-center gap-2 ml-auto sm:ml-0 pt-2 sm:pt-0">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#11131a] hover:bg-[#181c26] text-slate-400 hover:text-white border border-white/[0.08] transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#11131a] hover:bg-[#181c26] text-slate-400 hover:text-white border border-white/[0.08] transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenContact}
              className="p-3 rounded-lg bg-[#11131a] hover:bg-[#181c26] text-slate-400 hover:text-white border border-white/[0.08] transition-colors"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Real Engineering Telemetry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/[0.08]">
          
          <div className="p-4 rounded-xl bg-[#0f1118]/80 border border-white/[0.06] backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
              <span>ACADEMIC FOUNDATION</span>
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-heading">Univ. of Tehran</div>
            <div className="text-xs text-slate-400 mt-1">M.Sc. Photogrammetry (Top National Faculty)</div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1118]/80 border border-white/[0.06] backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
              <span>FIELD FLIGHT EXPERIENCE</span>
              <Layers className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-heading">150+ UAV Flights</div>
            <div className="text-xs text-slate-400 mt-1">Industrial photogrammetry & mine volume modeling</div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1118]/80 border border-white/[0.06] backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
              <span>POSITIONING ACCURACY</span>
              <Cpu className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-heading">±1.8 cm GSD</div>
            <div className="text-xs text-slate-400 mt-1">PPK / RTK dual-freq GNSS carrier phase post-processing</div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1118]/80 border border-white/[0.06] backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
              <span>EDGE REAL-TIME INFERENCE</span>
              <Eye className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-heading">42 FPS @ 1080p</div>
            <div className="text-xs text-slate-400 mt-1">TensorRT & OpenCV CUDA on NVIDIA Jetson Xavier</div>
          </div>

        </div>

      </div>
    </section>
  );
};
