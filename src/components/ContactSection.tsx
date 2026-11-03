import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Send, MapPin, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name || 'Recruiter'}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#0a0c10]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact & Inquiries
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
            I am available for full-time engineering positions, research roles, and technical consultations. Reach out via email or submit a note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Contact Info & Relocation Note */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-4">
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
                Direct Email
              </h3>

              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-mono text-sm text-white truncate">
                    {personal.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 border border-slate-700 transition-colors shrink-0 flex items-center gap-1.5"
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
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-amber-400" />
                  <div className="text-left text-xs">
                    <div className="text-slate-400 font-mono">GitHub</div>
                    <div className="font-semibold">varastuian</div>
                  </div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-amber-400" />
                  <div className="text-left text-xs">
                    <div className="text-slate-400 font-mono">LinkedIn</div>
                    <div className="font-semibold">varastuian</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Mobility Note */}
            <div className="p-6 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Relocation & Visa Status
              </h3>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Open to on-site international relocation across Europe, North America, Middle East, and Asia.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Holder of an International Driving Permit. Ready for immediate visa processing and employment onboarding.</span>
              </div>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Name / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hiring Manager"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. recruiter@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Computer Vision Engineer Role / Project Inquiry"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Briefly describe the position, team, project scope, or questions..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs font-mono transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Note</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
