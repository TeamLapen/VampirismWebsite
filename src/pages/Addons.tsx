import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { addons, type AddonCategory } from '../data/addons'

const tabs: ('All' | AddonCategory)[] = ['All', 'Official', '3rd Party', 'Older/Outdated']

const categoryColors: Record<AddonCategory, string> = {
  Official: 'bg-purple-900/60 text-purple-200 border-purple-700/50',
  '3rd Party': 'bg-blue-900/60 text-blue-200 border-blue-700/50',
  'Older/Outdated': 'bg-gray-800/60 text-gray-400 border-gray-600/50',
}

export default function Addons() {
  const [activeTab, setActiveTab] = useState<'All' | AddonCategory>('All')

  const filtered = activeTab === 'All' ? addons : addons.filter(a => a.category === activeTab)

  return (
    <div className="min-h-screen bg-vampire-bg text-gray-200">
      <Navbar />

      {/* Header */}
      <div className="section-alt py-14 text-center border-b border-vampire-primary/20">
        <h1 className="vampirism-heading text-5xl mb-3">Addon Mods</h1>
        <p className="text-gray-400 font-lora max-w-xl mx-auto">
          Extend your vampire experience with official and community-made addons.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-16 z-40 bg-vampire-bg/95 backdrop-blur-sm border-b border-vampire-primary/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2 justify-center">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-raleway font-semibold transition-all duration-200 border ${
                activeTab === tab
                  ? 'bg-vampire-primary border-vampire-bright text-white shadow-lg'
                  : 'bg-transparent border-vampire-primary/30 text-gray-400 hover:border-vampire-primary/70 hover:text-gray-200'
              }`}
            >
              {tab}
              <span className="ml-2 text-xs opacity-70">
                ({tab === 'All' ? addons.length : addons.filter(a => a.category === tab).length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map(addon => (
              <div key={addon.name} className="card-dark flex flex-col overflow-hidden">
                {/* Image */}
                {addon.image ? (
                  <div className="relative overflow-hidden bg-[#1a1a2e]">
                    <img
                      src={addon.image}
                      alt={addon.name}
                      className={`w-full transition-transform duration-500 group-hover:scale-105 ${
                        addon.imageStyle === 'icon'
                          ? 'h-52 object-contain p-6'
                          : 'h-56 object-contain'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="h-32 bg-gradient-to-r from-vampire-primary/20 to-vampire-bright/10 flex items-center justify-center">
                    <span className="text-5xl">🧛</span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-raleway font-700 text-white text-lg leading-snug">{addon.name}</h3>
                    <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border font-raleway ${categoryColors[addon.category]}`}>
                      {addon.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm font-lora leading-relaxed line-clamp-4 flex-1 mb-5">
                    {addon.description}
                  </p>

                  {/* Download buttons */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {addon.curseforge && (
                      <a href={addon.curseforge} target="_blank" rel="noopener noreferrer" className="btn-curseforge">
                        CurseForge
                      </a>
                    )}
                    {addon.modrinth && (
                      <a href={addon.modrinth} target="_blank" rel="noopener noreferrer" className="btn-modrinth">
                        Modrinth
                      </a>
                    )}
                    {addon.wiki && (
                      <a href={addon.wiki} target="_blank" rel="noopener noreferrer" className="btn-wiki">
                        Wiki
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
