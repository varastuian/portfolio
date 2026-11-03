import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectList } from './components/ProjectList';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-200 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <ProjectList />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
