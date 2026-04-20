import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/', internal: true },
  { label: 'Images', to: '/images', internal: true },
  { label: 'Download', to: '/downloads', internal: true },
  { label: 'Addons', to: '/addons', internal: true },
  { label: 'Wiki', to: 'https://wiki.vampirism.dev/docs/wiki/intro', internal: false },
  { label: 'Blog', to: 'https://wiki.vampirism.dev/blog', internal: false },
  { label: 'Discord', to: 'https://discord.gg/wuamm4P', internal: false },
  { label: 'Official Server', to: 'https://vampirism.co/', internal: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-vampire-primary/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="vampirism-heading text-2xl">Vampirism</Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map(({ label, to, internal }) =>
              internal ? (
                <li key={label}>
                  <Link
                    to={to}
                    className={`px-3 py-2 rounded text-sm font-raleway font-semibold transition-colors ${
                      pathname === to
                        ? 'text-purple-300'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ) : (
                <li key={label}>
                  <a
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded text-sm font-raleway font-semibold text-gray-300 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4">
            <ul className="flex flex-col gap-1">
              {links.map(({ label, to, internal }) =>
                internal ? (
                  <li key={label}>
                    <Link
                      to={to}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded text-sm font-raleway font-semibold text-gray-300 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ) : (
                  <li key={label}>
                    <a
                      href={to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 rounded text-sm font-raleway font-semibold text-gray-300 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
