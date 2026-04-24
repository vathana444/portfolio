import SectionTitle from './SectionTitle.jsx'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

const contactIcons = {
  Email: FaEnvelope,
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
}

function ContactSection({ contacts }) {
  return (
    <section id="contact" className="grid gap-6 px-6 py-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
      <div>
        <SectionTitle title="Contact Me" />
        <div className="mt-6 space-y-4">
          {contacts.map((item) => (
            <a key={item.label} href={item.href} className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-card-soft)] text-sm text-[var(--color-accent)]">
                {(() => {
                  const Icon = contactIcons[item.label]
                  return Icon ? <Icon /> : null
                })()}
              </span>
              <span>{item.value}</span>
            </a>
          ))}
        </div>
      </div>

      <form className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-[0_18px_36px_rgba(2,6,23,0.28)]">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-input)] px-4 py-3 text-sm outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
            placeholder="Your Name"
          />
          <input
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-input)] px-4 py-3 text-sm outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
            placeholder="Your Email"
          />
        </div>
        <input
          className="mt-3 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-input)] px-4 py-3 text-sm outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
          placeholder="Subject"
        />
        <textarea
          className="mt-3 min-h-[120px] w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-input)] px-4 py-3 text-sm outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
          placeholder="Message"
        />
        <button type="button" className="mt-3 rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default ContactSection
