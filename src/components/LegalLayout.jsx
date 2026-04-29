import { NavLink, Outlet } from 'react-router'

const links = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms and Conditions' },
]

function LegalLayout() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-16 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition focus:translate-y-0"
      >
        Skip to main content
      </a>

      <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
        <div
          aria-hidden="true"
          className="no-print pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_48%),radial-gradient(circle_at_80%_8%,_rgba(14,116,144,0.2),_transparent_38%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_52%,_#f8fafc_100%)]"
        />

        <header className="no-print sticky top-0 z-20 border-b border-slate-200/80 bg-white/75 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-900/80">
                  Legal Pages
                </p>
                <h1 className="font-[var(--font-display)] text-2xl text-slate-900 sm:text-3xl">
                  Dr. VJ&apos;s Cardiology Clinic
                </h1>
              </div>
              <p className="text-sm font-medium text-slate-600">SMS Program Documentation</p>
            </div>

            <nav aria-label="Legal document pages">
              <ul className="flex flex-wrap gap-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        [
                          'inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition',
                          isActive
                            ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                            : 'border-slate-300 bg-white text-slate-700 hover:border-cyan-700 hover:text-cyan-900',
                        ].join(' ')
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="no-print border-t border-slate-200/80 bg-white/80 py-6">
          <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600 sm:px-6 lg:px-8">
            Dr. VJ&apos;s Cardiology Clinic SMS Program
          </div>
        </footer>
      </div>
    </>
  )
}

export default LegalLayout
