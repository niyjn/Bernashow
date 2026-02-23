import { motion } from "motion/react";
import { Clock, Music } from "lucide-react";

const scheduleData = [
  { time: "20:00", artist: "Pedro Henrique Moreira", stage: "Palco Principal" },
  { time: "22:00", artist: "Bernardo", stage: "Palco Principal" },
];

export default function Schedule() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-wood-900 mb-4">
          Line-up & Horários
        </h2>
        <div className="w-24 h-1 bg-grass-600 mx-auto rounded-full" />
      </motion.div>

      <div className="bg-white rounded-2xl shadow-xl shadow-wood-900/5 overflow-hidden border border-wood-100">
        <div className="grid grid-cols-[100px_1fr_1fr] md:grid-cols-[120px_2fr_1fr] bg-wood-800 text-wood-50 p-4 font-medium text-sm md:text-base uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> Hora
          </div>
          <div className="flex items-center gap-2">
            <Music className="w-4 h-4" /> Artista
          </div>
          <div>Palco</div>
        </div>

        <div className="divide-y divide-wood-100">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="grid grid-cols-[100px_1fr_1fr] md:grid-cols-[120px_2fr_1fr] p-4 items-center hover:bg-wood-50 transition-colors group cursor-default"
            >
              <div className="font-mono text-grass-700 font-semibold text-lg">
                {item.time}
              </div>
              <div className="font-serif text-xl text-wood-900 group-hover:text-grass-800 transition-colors">
                {item.artist}
              </div>
              <div className="text-wood-600 text-sm md:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-grass-500" />
                {item.stage}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
