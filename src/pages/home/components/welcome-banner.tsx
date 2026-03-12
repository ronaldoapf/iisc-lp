import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function WelcomeBanner() {
  return (
    <section
      id="bem-vindos"
      className="w-full overflow-hidden bg-iisc-midnight"
    >
      <div className="grid min-h-150 lg:grid-cols-2">
        <div className="relative min-h-120 overflow-hidden lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop"
            alt="Pessoas da nossa comunidade"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(11,23,16,0.45)_0%,rgba(11,23,16,0.15)_55%,transparent_100%)]" />

          <div className="absolute inset-0 flex flex-col justify-end p-8 pb-28 lg:pb-12 leading-none font-display">
            {["VOCÊ", "PERTENCE", "A ESTE", "LUGAR"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                className="block font-black uppercase leading-[0.92] tracking-tight text-white text-[clamp(2.5rem,6vw,4.5rem)] [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <div className="absolute right-6 bottom-8 lg:bottom-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="relative h-24 w-24"
            >
              <svg viewBox="0 0 96 96" className="h-full w-full">
                <defs>
                  <path
                    id="badge-circle"
                    d="M 48,48 m -33,0 a 33,33 0 1,1 66,0 a 33,33 0 1,1 -66,0"
                  />
                </defs>
                <text
                  className="text-[9.5px] tracking-[0.2em] fill-white"
                  fontFamily="var(--font-display)"
                  fontWeight="800"
                >
                  <textPath href="#badge-circle">
                    ✦ JUNTE-SE AOS DOMINGOS ✦ VENHA NOS VISITAR
                  </textPath>
                </text>
              </svg>

              {/* Center dot */}
              <div className="absolute inset-0 m-auto h-7 w-7 rounded-full bg-iisc-gold" />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-7 px-8 py-16 lg:px-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-6 rounded-full bg-iisc-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-iisc-gold-light">
              Para todos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="font-black leading-tight text-white font-display text-[clamp(2.4rem,5vw,4rem)]"
          >
            Você é
            <br />
            esperado aqui.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-sm text-base leading-relaxed text-iisc-cream/60"
          >
            Crente ou cético. Com fé ou com dúvidas. Há décadas na igreja ou
            nunca tendo entrado em uma. Na IISC, toda pessoa tem lugar —
            venha como você é e descubra o maior convite que já existiu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#location"
              className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 border border-white/50 text-white hover:bg-iisc-gold hover:border-iisc-gold"
            >
              Venha nos visitar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
