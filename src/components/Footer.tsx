import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Compass, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#050609] border-t border-white/[0.08] text-slate-400 text-xs font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0e111a] border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-sm tracking-wide">
                {personal.name.toUpperCase()} // {personal.alias.toUpperCase()}
              </div>
              <div className="text-[11px] text-slate-400">
                {personal.title} · {personal.domain}
              </div>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0e111a] hover:bg-[#161a28] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0e111a] hover:bg-[#161a28] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.cvPath}
              download="Vahid-Arastuian-CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e111a] hover:bg-[#161a28] text-slate-300 hover:text-amber-400 border border-white/[0.06] transition-colors"
              title="Download Master CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV [PDF]</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0e111a] hover:bg-[#161a28] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Coordinates & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {personal.name} ({personal.alias}). Hosted at{' '}
            <span className="text-slate-300">{personal.domain}</span>.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>DATUM: WGS84 · 35°41'N 51°24'E · UNIV. OF TEHRAN</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
