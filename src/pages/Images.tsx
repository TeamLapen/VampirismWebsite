import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const screenshots = [
  { src: '/assets/img/screenshots/table.png', alt: 'Vampire Table', caption: 'The vampire crafting table' },
  { src: '/assets/img/screenshots/barons.png', alt: 'Vampire Barons', caption: 'Powerful vampire barons' },
  { src: '/assets/img/screenshots/altar.png', alt: 'Vampire Altar', caption: 'The vampire altar' },
  { src: '/assets/img/screenshots/forest.png', alt: 'Dark Forest', caption: 'A dark vampire forest' },
  { src: '/assets/img/screenshots/trainer.png', alt: 'Vampire Trainer', caption: 'A vampire trainer NPC' },
]

export default function Images() {
  return (
    <div className="min-h-screen bg-vampire-bg text-gray-200">
      <Navbar />

      <div className="section-alt py-14 text-center border-b border-vampire-primary/20">
        <h1 className="vampirism-heading text-5xl mb-3">Images</h1>
        <p className="text-gray-400 font-lora max-w-xl mx-auto">
          Screenshots from the world of Vampirism.
        </p>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {screenshots.map(({ src, alt, caption }, i) => (
              <div
                key={alt}
                className={`group relative overflow-hidden rounded-xl border border-vampire-primary/30 bg-black/40 card-dark ${
                  i === 4 ? 'lg:col-span-2' : ''
                }`}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-5 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-raleway font-semibold">{caption}</p>
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
