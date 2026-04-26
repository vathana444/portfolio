import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

function HeroSection({ profile }) {
  return (
    <section className="grid gap-10 border-b border-[var(--color-border)] px-6 py-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
      <div className="pt-4">
        <h1 className="max-w-xl text-4xl font-black leading-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
          Hi, I'm <span className="text-[var(--color-accent)]">{profile.name}</span>
        </h1>
        <p className="mt-3 text-lg font-semibold text-[var(--color-subtitle)]">{profile.role}</p>
        <p className="mt-5 max-w-md text-sm leading-7 text-[var(--color-muted)] sm:text-base">{profile.summary}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.2)] hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-card-soft)]"
          >
            {profile.resumeLabel}
          </a>
        </div>

        <div className="mt-6 flex gap-3 text-[var(--color-title)]">
          <a
            href="https://github.com/vathana193"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-sm hover:border-[var(--color-accent)]"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/alexdev"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-sm hover:border-[var(--color-accent)]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-sm hover:border-[var(--color-accent)]"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[rgba(15,23,42,0.82)] p-4 shadow-[0_24px_60px_rgba(2,6,23,0.36)] backdrop-blur-sm sm:p-5">
        <img
          src="/image/adad48bf-e524-442c-8891-98e4a88bcac5.png"
          alt="Developer working at a laptop desk"
          className="block w-full rounded-[1.5rem] bg-[var(--color-surface-alt)] object-cover"
        />
      </div>
    </section>
  )
}

export default HeroSection
