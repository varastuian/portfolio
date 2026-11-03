import { PORTFOLIO } from './data/portfolioData';
import { Mail, Download, MapPin, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/Icons';

export function App() {
  const { name, title, email, github, linkedin, location, status, cvPath, bio, projects, experience, education, publications, skills, references } = PORTFOLIO;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0d0f15] text-slate-200 font-sans selection:bg-amber-500/20 selection:text-amber-300 antialiased">
      
      {/* Top Simple Navigation */}
      <nav className="sticky top-0 z-40 bg-[#0d0f15]/95 backdrop-blur border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-sm">
          <a href="#" className="font-semibold text-white hover:text-amber-400 transition-colors">
            {name}
          </a>
          <div className="flex items-center gap-5 text-xs text-slate-300 font-medium">
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-amber-400 transition-colors">Education</a>
            <a href="#publications" className="hover:text-amber-400 transition-colors">Publications</a>
            <a
              href={cvPath}
              download="Vahid-Arastuian-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors font-mono font-semibold"
            >
              CV [PDF]
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
        
        {/* Profile / Intro Section */}
        <section className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-8 pb-12 border-b border-slate-800/80">
          <div className="flex-1 space-y-4 text-center sm:text-left">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {name}
              </h1>
              <p className="text-base text-amber-400 font-medium mt-1">
                {title}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-400 mt-1 font-mono">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{location}</span>
                <span>·</span>
                <span className="text-emerald-400">{status}</span>
              </div>
            </div>

            {/* Links Row */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-xs font-mono">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/60 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{email}</span>
              </a>

              <a
                href={cvPath}
                download="Vahid-Arastuian-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/60 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/60 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Bio paragraphs */}
            <div className="text-sm text-slate-300 leading-relaxed space-y-3 pt-2">
              {bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Profile Photo */}
          <div className="shrink-0 w-36 sm:w-44 aspect-[4/5] rounded-xl overflow-hidden border border-slate-800 shadow-md bg-slate-900">
            <img
              src="/images/photo1.jpg"
              alt={name}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </section>

        {/* Selected Projects */}
        <section id="projects" className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Selected Projects & Systems
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              UAV photogrammetry pipelines, edge perception models, and spatial analytics systems.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((proj) => (
              <div
                key={proj.title}
                className="flex flex-col sm:flex-row items-start gap-5 p-5 rounded-xl bg-[#11141d] border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                {/* Thumbnail Image */}
                <div className="shrink-0 w-full sm:w-44 h-36 sm:h-28 rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/mask.jpg';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-bold text-white">
                      {proj.title}
                    </h3>
                    {proj.metric && (
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {proj.metric}
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-mono text-amber-400">
                    {proj.context}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Work Experience
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Production engineering roles in UAV photogrammetry and spatial computing.
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="p-5 rounded-xl bg-[#11141d] border border-slate-800/80 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-800/60 pb-2">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-medium text-amber-400">
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {exp.period} · {exp.location}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Publications */}
        <section id="education" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-4 rounded-xl bg-[#11141d] border border-slate-800/80 space-y-2"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-sm font-bold text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-amber-400">
                    {edu.school}
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong>Thesis:</strong> "{edu.thesis}"
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Supervisors: {edu.supervisors}
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                    {edu.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications & Patents */}
          <div id="publications" className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Publications & Patents
            </h2>
            <div className="space-y-4">
              {publications.map((pub) => (
                <div
                  key={pub.title}
                  className="p-4 rounded-xl bg-[#11141d] border border-slate-800/80 space-y-1.5"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[11px] font-mono text-amber-400 uppercase">
                      {pub.type} · {pub.year}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {pub.venue}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-white leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {pub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Technical Skills */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="p-4 rounded-xl bg-[#11141d] border border-slate-800/80 space-y-2"
              >
                <h3 className="text-xs font-mono font-bold text-amber-400 uppercase">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic References */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight">
            References
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {references.map((ref) => (
              <div
                key={ref.email}
                className="p-4 rounded-xl bg-[#11141d] border border-slate-800/80 space-y-1"
              >
                <div className="text-sm font-bold text-white">{ref.name}</div>
                <div className="text-xs text-slate-400">{ref.title}</div>
                <a
                  href={`mailto:${ref.email}`}
                  className="text-xs font-mono text-amber-400 hover:underline block pt-1"
                >
                  {ref.email}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Note */}
        <section className="p-6 rounded-xl bg-[#11141d] border border-slate-800/80 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">Let's connect</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Open to engineering opportunities, research collaborations, and consultations.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold font-mono transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </a>
            <a
              href={cvPath}
              download="Vahid-Arastuian-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume [PDF]</span>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div>
            &copy; {new Date().getFullYear()} {name} · Hosted on {PORTFOLIO.domain}
          </div>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>

    </div>
  );
}

export default App;
