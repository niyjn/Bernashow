import { motion } from "motion/react";
import { PlayCircle } from "lucide-react";

export default function Multimedia() {
  return (
    <section className="py-20 bg-wood-900 text-wood-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-grass-400">
              Sinta a Vibe
            </h2>
            <p className="text-wood-100 text-lg mb-8 leading-relaxed">
              Prepare-se para uma experiência imersiva onde a música encontra a
              natureza. Confira os melhores momentos da última edição e entre no
              clima do BernaShow.
            </p>

            <div className="bg-wood-800 p-6 rounded-2xl border border-wood-700">
              <h3 className="font-medium text-grass-400 mb-4 uppercase tracking-wider text-sm">
                Playlist Oficial
              </h3>
              <div className="flex items-center gap-4 bg-wood-900 p-4 rounded-xl">
                <button className="w-12 h-12 rounded-full bg-grass-600 flex items-center justify-center hover:bg-grass-500 transition-colors text-white shrink-0">
                  <PlayCircle className="w-6 h-6" />
                </button>
                <div>
                  <div className="font-medium text-wood-50">
                    Esquenta BernaShow
                  </div>
                  <div className="text-wood-400 text-sm">
                    Vários Artistas • 2h 45m
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/50 group"
          >
            <img
              src="https://picsum.photos/seed/concert/800/600"
              alt="Festival Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <button className="w-20 h-20 rounded-full bg-grass-600/90 backdrop-blur-sm flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-grass-900/50">
                <PlayCircle className="w-10 h-10 ml-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
