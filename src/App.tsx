import { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationResearch } from './components/EducationResearch';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToTerminal = () => {
    terminalRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-200 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">
      
      {/* Top Navigation */}
      <Navbar
        onOpenContact={scrollToContact}
        onOpenTerminal={scrollToTerminal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Editorial Hero */}
        <Hero
          onOpenTerminal={scrollToTerminal}
          onOpenContact={scrollToContact}
        />

        {/* Selected Engineering Projects & Modal Deep Dives */}
        <ProjectShowcase />

        {/* Operational Terminal & Shell Workflows */}
        <div ref={terminalRef}>
          <InteractiveTerminal />
        </div>

        {/* Core Capabilities & Tooling Matrix */}
        <SkillsMatrix />

        {/* Field & Commercial Experience Timeline */}
        <ExperienceTimeline />

        {/* University of Tehran Education, Publications & References */}
        <EducationResearch />

        {/* Contact & Recruitment Inquiries */}
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>

      {/* Engineering Footer */}
      <Footer />

    </div>
  );
}

export default App;
