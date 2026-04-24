import SectionTitle from './SectionTitle.jsx'
import { FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaJs, FaReact } from 'react-icons/fa6'
import { MdDevices } from 'react-icons/md'

const skillIcons = {
  HTML: { icon: FaHtml5, color: '#f97316' },
  CSS: { icon: FaCss3Alt, color: '#2563eb' },
  JavaScript: { icon: FaJs, color: '#eab308' },
  React: { icon: FaReact, color: '#06b6d4' },
  Git: { icon: FaGitAlt, color: '#f97316' },
  Figma: { icon: FaFigma, color: '#a855f7' },
  'Responsive Design': { icon: MdDevices, color: '#0f172a' },
}

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="grid gap-6 border-b border-[var(--color-border)] px-6 py-8 lg:px-8">
      <SectionTitle title="Skills" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-[0_12px_30px_rgba(2,6,23,0.28)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-card-soft)] text-lg">
                {(() => {
                  const skillMeta = skillIcons[skill.name]
                  if (!skillMeta) return null

                  const Icon = skillMeta.icon
                  return <Icon style={{ color: skillMeta.color }} />
                })()}
              </div>
              <p className="text-sm font-semibold text-[var(--color-title)]">{skill.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
