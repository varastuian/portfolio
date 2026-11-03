import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Download, Terminal, Menu, X, Compass, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenTerminal: () => void;
}

export const Navbar = ({ onOpenContact, onOpenTerminal }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Engineering Projects', href: '#projects' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Experience', href: '#experience' },
    { label: 'Academic & Research', href: '#research' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090d]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Telemetry Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#12151f] border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors shadow-inner">
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-white tracking-wide text-base group-hover:text-amber-300 transition-colors">
                  {personal.name.toUpperCase()}
                </span>
                <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {personal.alias}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SYS: READY</span>
                <span className="text-slate-600">|</span>
                <span>{personal.coordinates}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors tracking-wide text-[13px] uppercase font-mono"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#12151f] hover:bg-[#1a1f2e] text-slate-300 hover:text-white border border-white/[0.08] text-xs font-mono transition-colors"
              title="Inspect Raw System Workflows"
            >
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>LOGS / RIG</span>
            </button>

            <a
              href={personal.cvPath}
              download="Vahid-Arastuian-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors shadow-sm shadow-amber-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD CV [PDF]</span>
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-transparent hover:bg-white/[0.05] text-slate-200 border border-white/[0.12] text-xs font-mono transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>CONTACT</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={personal.cvPath}
              download="Vahid-Arastuian-CV.pdf"
              className="p-2 rounded-md bg-amber-500 text-slate-950"
              title="Download CV"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-[#12151f] text-slate-300 border border-white/[0.08]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0c12] border-b border-white/[0.08] px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-mono text-slate-300 hover:bg-white/[0.05] hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-[#141722] text-xs font-mono text-slate-200 border border-white/[0.08]"
            >
              <Terminal className="w-4 h-4 text-amber-400" />
              <span>INSPECT TECHNICAL RIG</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-amber-500 text-xs font-semibold text-slate-950"
            >
              <Mail className="w-4 h-4" />
              <span>GET IN TOUCH / HIRE ME</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
