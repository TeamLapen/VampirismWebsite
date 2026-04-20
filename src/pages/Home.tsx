import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const features = [
  {
    icon: '🧛',
    title: 'Vampire Transformation',
    desc: 'Contract Sanguinare Vampiris through a bite or vampire blood. Your change is gradual — embrace the darkness.',
  },
  {
    icon: '⚡',
    title: 'Vampire Levels',
    desc: 'Progress through vampire ranks and unlock new powers. The higher your level, the more formidable you become.',
  },
  {
    icon: '🩸',
    title: 'Blood Mechanic',
    desc: 'Feed on villagers and creatures to fill your blood reserve. Starve, and suffer the consequences.',
  },
  {
    icon: '☀️',
    title: 'Sun Vulnerability',
    desc: 'Sunlight is your greatest enemy. Plan your hunts for nightfall, or suffer the consequences.',
  },
  {
    icon: '⚔️',
    title: 'Vampires vs. Hunters',
    desc: 'Two playable factions locked in eternal conflict. Will you hunt, or be hunted?',
  },
  {
    icon: '🎮',
    title: 'Minecraft 1.7.10 – 1.21',
    desc: 'Over a decade of support — from Minecraft 1.7.10 all the way to 1.21, with active development continuing today.',
  },
]

const screenshots = [
  { src: '/assets/img/screenshots/altar.png', alt: 'Vampire Altar' },
  { src: '/assets/img/screenshots/forest.png', alt: 'Vampire Forest' },
  { src: '/assets/img/screenshots/barons.png', alt: 'Vampire Barons' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-vampire-bg text-gray-200">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(98,3,133,0.25) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 50%, rgba(139,26,26,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo */}
            <div className="hero-logo flex justify-center lg:justify-start">
              <img
                src="/assets/img/mods/vampirism-title.svg"
                alt="Vampirism"
                className="w-full max-w-md drop-shadow-2xl"
              />
            </div>

            {/* Text */}
            <div className="hero-text text-center lg:text-left">
              <h1 className="vampirism-heading text-6xl lg:text-7xl mb-4">Vampirism</h1>
              <p className="text-xl lg:text-2xl text-gray-300 font-lora italic mb-3">
                Become a Vampire. Survive the night.
              </p>
              <p className="text-gray-400 font-lora mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Vampires are fast, strong, and blood-thirsty — they hate the sun but do not fear the
                night. The best thing? You can become one.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/downloads" className="btn-primary">Download Now</Link>
                <a href="#features" className="btn-outline">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="section-alt py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-raleway font-700 text-3xl text-white mb-2">
            What Awaits You
          </h2>
          <p className="text-center text-gray-400 font-lora mb-12">
            A complete vampire experience built into Minecraft.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="card-dark p-6">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-raleway font-700 text-white text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm font-lora leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Preview */}
      <section className="py-20 bg-vampire-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-raleway font-700 text-3xl text-white mb-2">
            See It in Action
          </h2>
          <p className="text-center text-gray-400 font-lora mb-12">
            Atmospheric visuals crafted for a dark fantasy experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {screenshots.map(({ src, alt }) => (
              <div key={alt} className="relative group overflow-hidden rounded-xl border border-vampire-primary/30">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-raleway font-semibold transition-opacity duration-300">
                    {alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/images" className="btn-outline">View All Images</Link>
          </div>
        </div>
      </section>

      {/* Factions Teaser */}
      <section className="section-alt py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-raleway font-700 text-3xl text-white mb-2">
            Choose Your Fate
          </h2>
          <p className="text-center text-gray-400 font-lora mb-12">
            Two factions. One eternal conflict.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vampires */}
            <div
              className="relative rounded-2xl p-8 overflow-hidden border border-purple-900/50"
              style={{
                background: 'linear-gradient(135deg, #1a0530 0%, #2d0550 50%, #1a0530 100%)',
              }}
            >
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(155,18,212,0.6), transparent 70%)' }}
              />
              <div className="relative z-10">
                <span className="text-5xl block mb-4">🧛</span>
                <h3 className="vampirism-heading text-4xl mb-3">Vampires</h3>
                <p className="text-purple-200 font-lora leading-relaxed mb-6">
                  Embrace the darkness. Drain the living. Grow powerful in the shadows. Sunlight is
                  your only weakness — everything else fears you.
                </p>
                <a
                  href="https://wiki.vampirism.dev/docs/wiki/factions/vampire/vampire-player"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Vampire Wiki
                </a>
              </div>
            </div>

            {/* Hunters */}
            <div
              className="relative rounded-2xl p-8 overflow-hidden border border-yellow-900/50"
              style={{
                background: 'linear-gradient(135deg, #1a1200 0%, #2e1f00 50%, #1a1200 100%)',
              }}
            >
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top right, rgba(201,162,39,0.5), transparent 70%)' }}
              />
              <div className="relative z-10">
                <span className="text-5xl block mb-4">🏹</span>
                <h3 className="vampirism-heading text-4xl mb-3" style={{ color: '#c9a227' }}>Hunters</h3>
                <p className="text-yellow-100 font-lora leading-relaxed mb-6">
                  Defend humanity. Wield holy weapons and cunning tactics. Track vampires down and
                  purge them before the night consumes the world.
                </p>
                <a
                  href="https://wiki.vampirism.dev/docs/wiki/factions/hunter/hunter-player"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-7 py-3 rounded-lg font-raleway font-700 text-black text-sm uppercase tracking-wider transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #c9a227, #e8c84a)', border: '1px solid #c9a227' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 24px rgba(201,162,39,0.6)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  Hunter Wiki
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Server Banner */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3b0068 0%, #620385 50%, #3b0068 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(ellipse at center, rgba(155,18,212,0.5), transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-raleway font-700 text-3xl text-white mb-2">Join the Official Server</h2>
          <p className="text-purple-200 font-lora mb-4">
            Play with experienced vampires and hunters. No setup required.
          </p>
          <p className="text-purple-100 font-raleway font-700 text-xl tracking-wider mb-8">vampirism.co</p>
          <a
            href="https://vampirism.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-vampire-primary font-raleway font-700 text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-purple-100 hover:shadow-lg"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* Discord */}
      <section className="py-20 bg-vampire-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-raleway font-700 text-3xl text-white mb-4">Join Our Community</h2>
              <p className="text-gray-400 font-lora leading-relaxed mb-4">
                Connect with thousands of players on our Discord. Get help, share your builds, report
                bugs, and stay up-to-date with the latest Vampirism news.
              </p>
              <a
                href="https://discord.gg/wuamm4P"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open Discord
              </a>
            </div>
            <div className="flex justify-center">
              <iframe
                src="https://discord.com/widget?id=430326060635258881&theme=dark"
                width="350"
                height="440"
                allowTransparency={true}
                frameBorder={0}
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                className="rounded-xl shadow-2xl"
                title="Discord server widget"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
