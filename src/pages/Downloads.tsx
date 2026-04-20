import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CurseForgeIcon() {
  return (
    <svg fill="#f06433" width="64" height="64" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
      <path d="m6.307 5.581.391 1.675H0s.112.502.167.558c.168.279.335.614.559.837 1.06 1.228 2.902 1.73 4.409 2.009 1.06.224 2.121.28 3.181.335l1.228 3.293h.67l.391 1.061h-.558l-.949 3.07h9.321l-.949-3.07h-.558l.39-1.061h.67s.558-3.404 2.288-4.967C21.935 7.758 24 7.535 24 7.535V5.581H6.307zm9.377 8.428c-.447.279-.949.279-1.284.503-.223.111-.335.446-.335.446-.223-.502-.502-.67-.837-.781-.335-.112-.949-.056-1.786-.782-.558-.502-.614-1.172-.558-1.507v-.167c0-.056 0-.112.056-.168.111-.334.39-.669.948-.893 0 0-.39.559 0 1.117.224.335.67.502 1.061.279.167-.112.279-.335.335-.503.111-.39.111-.781-.224-1.06-.502-.446-.613-1.06-.279-1.451 0 0 .112.502.614.446.335 0 .335-.111.224-.223-.056-.167-.782-1.228.279-2.009 0 0 .669-.447 1.451-.391-.447.056-.949.335-1.116.782v.055c-.168.447-.056.949.279 1.396.223.335.502.614.614 1.06-.168-.056-.279 0-.391.112a.533.533 0 0 0-.112.502c.056.112.168.223.279.223h.168c.167-.055.279-.279.223-.446.112.111.167.391.112.558 0 .167-.112.335-.168.446-.056.112-.167.224-.223.335-.056.112-.112.224-.112.335 0 .112 0 .279.056.391.223.335.67 0 .782-.279.167-.335.111-.726-.112-1.061 0 0 .391.224.67 1.005.223.67-.168 1.451-.614 1.73z"/>
    </svg>
  )
}

function ModrinthIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit={1.5} clipRule="evenodd" viewBox="0 0 100 100" width="64" height="64">
      <path fill="none" d="M0 0h100v100H0z"/>
      <clipPath id="mi-a"><path d="M100 0H0v100h100V0ZM46.002 49.295l.076 1.757 8.83 32.963 7.843-2.102-8.596-32.094 5.804-32.932-7.997-1.41-5.96 33.818Z"/></clipPath>
      <g clipPath="url(#mi-a)"><path fill="#2eaa76" d="M50 17c18.207 0 32.988 14.787 32.988 33S68.207 83 50 83 17.012 68.213 17.012 50 31.793 17 50 17Zm0 9c13.24 0 23.988 10.755 23.988 24S63.24 74 50 74 26.012 63.245 26.012 50 36.76 26 50 26Z"/></g>
      <clipPath id="mi-b"><path d="M0 0v46h50l1.368.241L99 63.578l-2.736 7.517L49.295 54H0v46h100V0H0Z"/></clipPath>
      <g clipPath="url(#mi-b)"><path fill="#2eaa76" d="M50 0c27.596 0 50 22.404 50 50s-22.404 50-50 50S0 77.596 0 50 22.404 0 50 0Zm0 9c22.629 0 41 18.371 41 41S72.629 91 50 91 9 72.629 9 50 27.371 9 50 9Z"/></g>
      <clipPath id="mi-c"><path d="M50 0c27.596 0 50 22.404 50 50s-22.404 50-50 50S0 77.596 0 50 22.404 0 50 0Zm0 39.549c5.768 0 10.451 4.683 10.451 10.451 0 5.768-4.683 10.451-10.451 10.451-5.768 0-10.451-4.683-10.451-10.451 0-5.768 4.683-10.451 10.451-10.451Z"/></clipPath>
      <g clipPath="url(#mi-c)"><path fill="none" stroke="#2eaa76" strokeWidth={9} d="M50 50 5.171 75.882"/></g>
      <clipPath id="mi-d"><path d="M50 0c27.596 0 50 22.404 50 50s-22.404 50-50 50S0 77.596 0 50 22.404 0 50 0Zm0 25.36c13.599 0 24.64 11.041 24.64 24.64S63.599 74.64 50 74.64 25.36 63.599 25.36 50 36.401 25.36 50 25.36Z"/></clipPath>
      <g clipPath="url(#mi-d)"><path fill="none" stroke="#2eaa76" strokeWidth={9} d="m50 50 50-13.397"/></g>
      <path fill="#2eaa76" d="M37.243 52.746 35 45l8-9 11-3 4 4-6 6-4 1-3 4 1.12 4.24 3.112 3.09 4.964-.598 2.866-2.964 8.196-2.196 1.464 5.464-8.098 8.026L46.83 65.49l-5.587-5.815-4-6.929Z"/>
    </svg>
  )
}

export default function Downloads() {
  return (
    <div className="min-h-screen bg-vampire-bg text-gray-200">
      <Navbar />

      <div className="section-alt py-14 text-center border-b border-vampire-primary/20">
        <h1 className="vampirism-heading text-5xl mb-3">Download</h1>
        <p className="text-gray-400 font-lora max-w-xl mx-auto">
          Choose your preferred mod platform to get started.
        </p>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Platform cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* CurseForge */}
            <div
              className="card-dark flex flex-col overflow-hidden"
              style={{ borderColor: 'rgba(240,100,51,0.35)' }}
            >
              <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #f06433, #e15d2f)' }} />
              <div className="p-8 flex flex-col items-center text-center flex-1">
                <div className="mb-5">
                  <CurseForgeIcon />
                </div>
                <h2 className="font-raleway font-700 text-white text-2xl mb-1">CurseForge</h2>
                <p className="text-gray-500 text-xs font-raleway uppercase tracking-wider mb-4">All versions since 1.7.10</p>
                <p className="text-gray-400 text-sm font-lora mb-8 leading-relaxed">
                  The primary download platform with the complete archive of every Vampirism release.
                  Supports both Forge and NeoForge.
                </p>
                <a
                  href="https://www.curseforge.com/minecraft/mc-mods/vampirism-become-a-vampire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-curseforge w-full text-center py-3 text-base font-700 mt-auto"
                >
                  Download from CurseForge
                </a>
              </div>
            </div>

            {/* Modrinth */}
            <div
              className="card-dark flex flex-col overflow-hidden"
              style={{ borderColor: 'rgba(46,170,118,0.35)' }}
            >
              <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #2eaa76, #279265)' }} />
              <div className="p-8 flex flex-col items-center text-center flex-1">
                <div className="mb-5">
                  <ModrinthIcon />
                </div>
                <h2 className="font-raleway font-700 text-white text-2xl mb-1">Modrinth</h2>
                <p className="text-gray-500 text-xs font-raleway uppercase tracking-wider mb-4">Available from 1.16.5+</p>
                <p className="text-gray-400 text-sm font-lora mb-8 leading-relaxed">
                  A modern, open-source platform. Recommended for players using modpacks or
                  the Modrinth launcher.
                </p>
                <a
                  href="https://modrinth.com/mod/vampirism"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modrinth w-full text-center py-3 text-base font-700 mt-auto"
                >
                  Download from Modrinth
                </a>
              </div>
            </div>
          </div>

          {/* Addon downloads callout */}
          <div className="card-dark p-6 mb-8 flex flex-col sm:flex-row items-center gap-6" style={{ borderColor: 'rgba(98,3,133,0.5)' }}>
            <div className="text-4xl shrink-0">🧩</div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-raleway font-700 text-white text-lg mb-1">Looking for Addons?</h3>
              <p className="text-gray-400 font-lora text-sm">
                Vampirism has an ecosystem of official and community addons — from Werewolves to Vampiric Ageing.
              </p>
            </div>
            <a href="/addons" className="btn-primary shrink-0 whitespace-nowrap">Browse Addons</a>
          </div>

          {/* Wiki callout */}
          <div className="card-dark p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="text-4xl shrink-0">📖</div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-raleway font-700 text-white text-lg mb-1">Need Help Getting Started?</h3>
              <p className="text-gray-400 font-lora text-sm">
                Installation guides, gameplay tips, configuration options, and full faction documentation.
              </p>
            </div>
            <a
              href="https://wiki.vampirism.dev/docs/wiki/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wiki shrink-0 whitespace-nowrap"
            >
              Open the Wiki
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
