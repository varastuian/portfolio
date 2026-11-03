import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Download, Send, Globe, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    
    // Construct a mailto URI with user's inputted details
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name || 'Recruiter'}`
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#07080c] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>DISCUSS ROLES & COLLABORATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Interested in hiring or discussing engineering positions in Computer Vision, Geospatial AI, UAV systems, or Remote Sensing? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Info & Relocation Status */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#0e111a] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Direct Communication Channel
              </div>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#08090d] border border-white/[0.06]">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-mono text-sm text-white truncate">
                    {personal.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#181d2c] hover:bg-[#20273c] text-xs font-mono text-slate-200 border border-white/[0.08] transition-colors shrink-0 flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#121520] hover:bg-[#181c2b] border border-white/[0.06] flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-amber-400" />
                  <div className="text-left">
                    <div className="text-xs font-mono text-slate-400">GitHub</div>
                    <div className="text-xs font-semibold">varastuian</div>
                  </div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#121520] hover:bg-[#181c2b] border border-white/[0.06] flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-amber-400" />
                  <div className="text-left">
                    <div className="text-xs font-mono text-slate-400">LinkedIn</div>
                    <div className="text-xs font-semibold">varastuian</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Relocation & Status Dossier */}
            <div className="p-6 rounded-2xl bg-[#0e111a] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>MOBILITY & AVAILABILITY STATUS</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Relocation:</strong> Fully open and eager to relocate internationally for on-site engineering roles.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Remote / Hybrid:</strong> Comfortable operating across time zones with flexible overlapping working hours.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Documentation:</strong> Holder of International Driving Permit, verified academic transcripts, ready for visa processing.</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <a
                  href={personal.cvPath}
                  download="Vahid-Arastuian-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs font-mono transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD VERIFIED CV [PDF]</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e111a] border border-white/[0.08]">
              
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-between">
                <span>MESSAGE TRANSMISSION // DIRECT FORM</span>
                <span className="text-[11px] text-amber-400">DOMAIN: {personal.domain}</span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white font-heading">
                    Transmission Dispatched
                  </h3>
                  <p className="text-sm text-slate-300">
                    Your email client has been opened with your message. You can also email directly at{' '}
                    <strong className="text-amber-400">{personal.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-[#181d2c] text-xs font-mono text-slate-300 hover:text-white"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Name / Organization</label>
                      <input
                        type="text"
                        placeholder="e.g. Elena Rostova / Robotics Lab"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] focus:border-amber-400 focus:outline-none text-sm text-white font-sans placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. hiring@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] focus:border-amber-400 focus:outline-none text-sm text-white font-sans placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Subject / Position Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Computer Vision Engineer Role / Project Collaboration"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] focus:border-amber-400 focus:outline-none text-sm text-white font-sans placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Message / Technical Scope *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Provide details about the role, technical stack, team, or project requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] focus:border-amber-400 focus:outline-none text-sm text-white font-sans placeholder:text-slate-600 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs font-mono transition-all shadow-md shadow-amber-500/15"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SEND MESSAGE VIA MAILTO</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
