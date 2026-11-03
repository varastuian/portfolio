import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Download, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Publications', href: '#publications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0d0f15]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand */}
          <a href="#" className="flex flex-col">
            <span className="text-base font-bold text-white tracking-tight hover:text-amber-400 transition-colors">
              {personal.name}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {personal.domain}
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personal.cvPath}
              download="Vahid-Arastuian-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold font-mono transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume [PDF]</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personal.cvPath}
              download="Vahid-Arastuian-CV.pdf"
              className="p-1.5 rounded bg-amber-500 text-slate-950"
              title="Download CV"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-slate-400 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#11131b] border-b border-slate-800 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm text-slate-300 hover:text-amber-400 hover:bg-slate-800/50"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
