import SectionTitle from './SectionTitle.jsx'

function ProjectPreview({ theme }) {
  if (theme === 'todo') {
    return (
      <div className="rounded-2xl bg-[#1f2937] p-4">
        <div className="space-y-2">
          <div className="h-3 w-24 rounded bg-slate-500" />
          <div className="h-8 rounded-lg bg-slate-700" />
          <div className="h-8 rounded-lg bg-slate-700" />
          <div className="h-8 rounded-lg bg-slate-700" />
        </div>
      </div>
    )
  }

  if (theme === 'weather') {
    return (
      <div className="rounded-2xl bg-[linear-gradient(180deg,#4ea1ff,#2c6de0)] p-4 text-white">
        <p className="text-xs">New York, USA</p>
        <p className="mt-2 text-3xl font-bold">24 C</p>
        <div className="mt-4 flex gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
            <div key={day} className="flex-1 rounded-lg bg-white/15 p-2 text-center text-[10px]">
              {day}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-[linear-gradient(180deg,#1d3158,#101a31)] p-4">
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-3 shadow-sm">
        <p className="text-sm font-bold text-[var(--color-title)]">Hi, I'm Sin ManyVathana</p>
        <div className="mt-3 flex items-end gap-3">
          <div className="h-16 w-20 rounded-xl bg-[var(--color-card-soft)]" />
          <div className="h-20 flex-1 rounded-2xl bg-blue-500" />
        </div>
      </div>
    </div>
  )
}

function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="space-y-6 border-b border-[var(--color-border)] px-6 py-8 lg:px-8">
      <SectionTitle title="Featured Projects" />

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-3 shadow-[0_18px_36px_rgba(2,6,23,0.28)] transition hover:-translate-y-1"
          >
            <ProjectPreview theme={project.theme} />
            <div className="px-2 pb-2 pt-4">
              <h3 className="text-lg font-bold text-[var(--color-title)]">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-md bg-[var(--color-chip)] px-2 py-1 text-xs font-semibold text-[var(--color-accent)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
