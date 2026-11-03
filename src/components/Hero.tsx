import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Download, Mail, MapPin, GraduationCap, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#0c0e14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Profile Card & Photo */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative mb-5 w-48 sm:w-56 lg:w-full max-w-[280px] aspect-[4/5] rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900 shadow-xl">
              <img
                src="/images/photo1.jpg"
                alt="Vahid Arastuian"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>

            <h1 className="text-2xl font-bold text-white tracking-tight">
              {personal.name}
            </h1>
            <p className="text-sm text-amber-400 font-medium mt-0.5">
              {personal.title}
            </p>

            <div className="mt-4 space-y-2 text-xs text-slate-400">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                <span>M.Sc. Photogrammetry · Univ. of Tehran</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{personal.location} · Open to Relocation</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Engineering Narrative */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              <span>Available for Full-time Roles (Remote / On-site Relocation)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Bridging spatial sensors, multi-view geometry, and deep learning perception.
            </h2>

            <div className="space-y-4 text-base text-slate-300 leading-relaxed font-normal">
              {personal.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Snapshot Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-slate-800/80">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">6+ Yrs</div>
                <div className="text-xs text-slate-400 mt-0.5">Applied Engineering</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">150+</div>
                <div className="text-xs text-slate-400 mt-0.5">UAV Flight Missions</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">±1.8 cm</div>
                <div className="text-xs text-slate-400 mt-0.5">UAV GSD Accuracy</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">42 FPS</div>
                <div className="text-xs text-slate-400 mt-0.5">Jetson Xavier Edge AI</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personal.cvPath}
                download="Vahid-Arastuian-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Master CV (PDF)</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-sm font-medium transition-colors"
              >
                <span>View Projects & Research</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <span>Get in touch →</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
