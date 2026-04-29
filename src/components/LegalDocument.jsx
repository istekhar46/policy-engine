function toSectionId(heading, index) {
  const slug = heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

  if (!slug) {
    return `section-${index + 1}`
  }

  return slug
}

function LegalDocument({ title, subtitle, sections }) {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:px-8 lg:pt-10">
      <aside className="legal-chrome rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm lg:sticky lg:top-28 lg:h-fit">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">On this page</p>
        <ol className="mt-3 space-y-2">
          {sections.map((section, index) => {
            const sectionId = toSectionId(section.heading, index)
            return (
              <li key={sectionId}>
                <a
                  href={`#${sectionId}`}
                  className="text-sm leading-6 text-slate-700 transition hover:text-cyan-900"
                >
                  {section.heading}
                </a>
              </li>
            )
          })}
        </ol>
      </aside>

      <article
        id="main-content"
        tabIndex={-1}
        className="legal-chrome rounded-[1.75rem] border border-slate-200 bg-white/95 shadow-[0_15px_40px_-20px_rgba(15,23,42,0.3)]"
      >
        <header className="border-b border-slate-200 px-6 pb-7 pt-7 sm:px-10 sm:pb-8 sm:pt-9">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-900/80">
            Legal Statement
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl text-slate-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-[72ch] text-base leading-8 text-slate-700">{subtitle}</p>
        </header>

        <div className="space-y-10 px-6 pb-8 pt-8 sm:px-10 sm:pb-10">
          {sections.map((section, index) => {
            const sectionId = toSectionId(section.heading, index)

            return (
              <section
                key={sectionId}
                id={sectionId}
                style={{ '--section-index': index + 1 }}
                className="legal-section scroll-mt-32 space-y-4"
              >
                <h3 className="font-[var(--font-display)] text-2xl text-slate-900">{section.heading}</h3>
                <div className="max-w-[72ch] space-y-4 text-[1.03rem] leading-8 text-slate-700">
                  {section.content}
                </div>
              </section>
            )
          })}
        </div>
      </article>
    </div>
  )
}

export default LegalDocument
