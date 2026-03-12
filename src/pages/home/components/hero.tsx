import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function Hero() {
  return (
    <section className="w-full flex flex-col justify-end overflow-hidden hero-background">
      <div className="container pt-20 pb-15 lg:py-30">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <span className="block h-px bg-accent" />
            <span className="text-white/70">
              Igreja Internacional Seguidores de Cristo
            </span>
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{
              delay: 0.45,
              duration: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance text-center"
          >
            Um lugar onde
            <br />
            você encontra{" "}
            <span
              className="text-accent"
            >
              propósito
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-center text-white/90 text-pretty"
          >
            Somos uma comunidade comprometida em viver e compartilhar o amor de Deus.
            Venha crescer conosco na fé, no amor e na comunhão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#location"
              className="group w-full md:w-fit inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300"
            >
              Venha nos visitar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/sobre"
              className="inline-flex w-full md:w-fit items-center justify-center gap-2 border border-white/50 text-white px-7 py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              Conheça a IISC
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}