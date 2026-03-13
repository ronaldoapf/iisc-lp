import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { fadeInUp, staggerContainer } from "@/motions"
import { useEffect, useState } from "react"

const WORDS = ["propósito", "esperança", "comunhão", "transformação", "Jesus"]

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % WORDS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full overflow-hidden hero-background flex flex-col justify-end">
      <div className="absolute inset-0 bg-linear-to-t from-iisc-midnight via-iisc-midnight/60 to-iisc-midnight/10" />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e8902a 1px, transparent 1px), linear-gradient(to bottom, #e8902a 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <span className="pointer-events-none absolute right-4 bottom-0 select-none font-display font-black leading-none text-white/4 text-[clamp(8rem,20vw,18rem)] lg:right-16">
        1997
      </span>

      <div className="container relative z-10 py-10 md:py-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-iisc-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-iisc-gold-light">
              Igreja Internacional Seguidores de Cristo
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display font-black leading-[0.9] tracking-tight text-white text-[clamp(3rem,8vw,7rem)] max-w-3xl"
          >
            Um lugar onde
            <br />
            você encontra{" "}
            <span className="relative inline-block min-w-[200px] md:min-w-[400px]">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute left-0 text-iisc-gold"
                >
                  {WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="opacity-0 pointer-events-none">transformação</span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-8 max-w-lg text-base leading-relaxed text-iisc-cream/65"
          >
            Somos uma comunidade comprometida em viver e compartilhar o amor de Deus.
            Venha crescer conosco na fé, no amor e na comunhão.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#location"
              className="group w-full md:w-fit inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-iisc-gold hover:text-white transition-all duration-300"
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
        </motion.div>
      </div>
    </section>
  )
}