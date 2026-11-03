import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Copy, Check, RefreshCw } from 'lucide-react';

interface InteractiveTerminalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const InteractiveTerminal = ({}: InteractiveTerminalProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const { terminalLogs } = PORTFOLIO_DATA;
  const currentLog = terminalLogs[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentLog.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    setIsExecuting(true);
    setTimeout(() => setIsExecuting(false), 800);
  };

  return (
    <section className="py-20 bg-[#07080c] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>OPERATIONAL PIPELINES // SHELL VERIFICATION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-heading">
            Technical Rig & CLI Workflows
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl leading-relaxed">
            Inspect the exact commands, execution flags, and outputs used across edge perception, kinematic GNSS post-processing, and spatial raster generation.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="rounded-2xl bg-[#0b0d14] border border-white/[0.12] shadow-2xl overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="px-4 py-3 bg-[#111420] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            
            {/* macOS / Unix Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                varastuian@edge-rig:~#
              </span>
            </div>

            {/* Workflow Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {['YOLOv8 Edge Perception', 'RTKLIB PPK Processing', 'GDAL Spatial Warping'].map((name, idx) => (
                <button
                  key={name}
                  onClick={() => {
                    setActiveTab(idx);
                    setIsExecuting(false);
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors whitespace-nowrap ${
                    activeTab === idx
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleSimulate}
                disabled={isExecuting}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#181d2e] hover:bg-[#20273d] text-slate-300 text-xs font-mono border border-white/[0.08] transition-colors"
                title="Re-run pipeline execution"
              >
                <RefreshCw className={`w-3 h-3 ${isExecuting ? 'animate-spin text-amber-400' : ''}`} />
                <span className="hidden sm:inline">Re-Run</span>
              </button>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#181d2e] hover:bg-[#20273d] text-slate-300 text-xs font-mono border border-white/[0.08] transition-colors"
                title="Copy command to clipboard"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

          </div>

          {/* Console Body */}
          <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm bg-[#090b11] overflow-x-auto min-h-[220px]">
            
            {/* Command Line */}
            <div className="flex items-start gap-2 text-amber-400 mb-4 pb-3 border-b border-white/[0.06]">
              <span className="text-emerald-400 font-bold select-none">$</span>
              <span className="text-slate-100 font-semibold break-all">{currentLog.command}</span>
            </div>

            {/* Execution Output */}
            {isExecuting ? (
              <div className="py-6 flex items-center gap-3 text-slate-400">
                <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                <span>Streaming sensor telemetry and allocating CUDA buffers...</span>
              </div>
            ) : (
              <div className="space-y-1.5 text-slate-400">
                {currentLog.output.map((line, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed ${
                      line.includes('done') || line.includes('Fixed: 98.4%') || line.includes('alligator_cracks')
                        ? 'text-emerald-400/90'
                        : line.includes('Speed:')
                        ? 'text-amber-400/90 font-semibold'
                        : ''
                    }`}
                  >
                    <span className="text-slate-400 mr-2 select-none">[{idx + 1}]</span>
                    {line}
                  </div>
                ))}
              </div>
            )}

            {/* Blinking prompt line */}
            {!isExecuting && (
              <div className="mt-4 flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold select-none">&gt;</span>
                <span className="w-2 h-4 bg-amber-400 inline-block animate-pulse"></span>
              </div>
            )}

          </div>

          {/* Bottom Telemetry Footer */}
          <div className="px-5 py-2.5 bg-[#0e111a] border-t border-white/[0.06] flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
            <div className="flex items-center gap-4">
              <span>TARGET: Linux 5.15 LTS (Ubuntu 22.04)</span>
              <span className="hidden sm:inline">CUDA: 12.2</span>
              <span className="hidden sm:inline">ARCH: aarch64 / x86_64</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>VERIFIED REAL-WORLD ENVIRONMENT</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
