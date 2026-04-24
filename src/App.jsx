import AboutSection from './components/AboutSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import { contacts, profile, projects, skills, stats } from './data/portfolioData.js'

function App() {
  return (
    <div className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_28px_80px_rgba(2,6,23,0.45)]">
        <header className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-4 lg:px-8">
          <a href="#" className="text-2xl font-bold text-[var(--color-accent)]">
            Portfolio
          </a>
          <nav className="hidden gap-8 text-sm text-[var(--color-muted)] md:flex">
            <a href="#home" className="font-semibold text-[var(--color-accent)]">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main id="home">
          <HeroSection profile={profile} />
          <AboutSection stats={stats} />
          <ProjectsSection projects={projects} />
          <SkillsSection skills={skills} />
          <ContactSection contacts={contacts} />
        </main>

        <footer className="border-t border-[var(--color-border)] px-6 py-4 text-center text-sm text-[var(--color-muted)] lg:px-8">
          2024 Alex. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default App
