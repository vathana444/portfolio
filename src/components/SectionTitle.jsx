function SectionTitle({ title, description }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold text-[var(--color-title)] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p> : null}
    </div>
  )
}

export default SectionTitle
