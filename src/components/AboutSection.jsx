import SectionTitle from './SectionTitle.jsx'
import { FaCode, FaFolderOpen, FaReact } from 'react-icons/fa6'

const statIcons = {
  'Projects Completed': FaFolderOpen,
  'Core Technologies': FaCode,
  'Currently Exploring': FaReact,
}

function AboutSection({ stats }) {
  return (
    <section id="about" className="grid gap-6 border-b border-[var(--color-border)] px-6 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <div>
        <SectionTitle
          title="About Me"
          description="I'm a computer science student with a strong interest in front-end development. I enjoy turning ideas into interactive and responsive web pages. I'm always eager to learn new technologies and improve my skills."
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[0_12px_30px_rgba(2,6,23,0.28)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-card-soft)] text-lg text-[var(--color-accent)]">
              {(() => {
                const Icon = statIcons[item.label]
                return Icon ? <Icon /> : null
              })()}
            </div>
            <p className="mt-4 text-xl font-bold text-[var(--color-title)]">{item.value}</p>
            <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
