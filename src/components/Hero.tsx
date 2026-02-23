import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/festival/1920/1080?blur=2"
          alt="Festival Background"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-wood-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-wood-50 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-wood-50 font-bold tracking-tight mb-6"
        >
          BernaShow
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-wood-100 text-lg md:text-xl font-medium"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-grass-400" />
            <span>15 a 17 de Novembro</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-grass-500" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-grass-400" />
            <span>Vale Verde, SP</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
