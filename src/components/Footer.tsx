import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black/60 border-t border-vampire-primary/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="vampirism-heading text-3xl block mb-3">Vampirism</span>
            <p className="text-gray-400 text-sm font-lora leading-relaxed">
              Become a vampire in Minecraft. Fast, strong, and bloodthirsty — if you dare.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-raleway font-700 uppercase tracking-wider text-xs mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', to: '/', internal: true },
                { label: 'Download', to: '/downloads', internal: true },
                { label: 'Addons', to: '/addons', internal: true },
                { label: 'Images', to: '/images', internal: true },
                { label: 'Wiki', to: 'https://wiki.vampirism.dev/docs/wiki/intro', internal: false },
                { label: 'Blog', to: 'https://wiki.vampirism.dev/blog', internal: false },
              ].map(({ label, to, internal }) =>
                internal ? (
                  <li key={label}><Link to={to} className="text-gray-400 hover:text-purple-300 transition-colors">{label}</Link></li>
                ) : (
                  <li key={label}><a href={to} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">{label}</a></li>
                )
              )}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-raleway font-700 uppercase tracking-wider text-xs mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Discord', href: 'https://discord.gg/wuamm4P' },
                { label: 'Official Server', href: 'https://vampirism.co/' },
                { label: 'CurseForge', href: 'https://www.curseforge.com/minecraft/mc-mods/vampirism-become-a-vampire' },
                { label: 'Modrinth', href: 'https://modrinth.com/mod/vampirism' },
                { label: 'GitHub', href: 'https://github.com/TeamLapen/Vampirism' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-vampire-primary/20 text-center text-gray-500 text-xs font-raleway">
          Copyright © Vampirism {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
