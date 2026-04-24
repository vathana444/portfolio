import SectionTitle from './SectionTitle.jsx'

function ExperienceSection({ experience, education }) {
  return (
    <section id="resume" className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <SectionTitle
          eyebrow="Experience"
          title="Relevant work and learning history"
          description="A concise overview of the roles and learning milestones that shaped my frontend development practice."
        />

        <div className="mt-8 space-y-4">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-panel)] p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl text-[var(--color-paper)]">{item.role}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">{item.company}</p>
                </div>
                <p className="text-sm text-[var(--color-muted)]">{item.period}</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-panel)] p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Education</p>
        <div className="mt-6 space-y-5">
          {education.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-black/10 p-5">
              <h3 className="text-lg text-[var(--color-paper)]">{item.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--color-warm)]">{item.subtitle}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
