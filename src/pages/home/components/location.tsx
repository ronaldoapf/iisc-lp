import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/motions"

const infoItems = [
  {
    Icon: MapPin,
    label: "Endereço",
    value: "Avenida José Fonseca e Silva, 737 — Uberlândia, MG",
  },
  {
    Icon: Phone,
    label: "Telefone",
    value: "(34) 9 9119-2543",
  },
  {
    Icon: Mail,
    label: "E-mail",
    value: "ronaldo.alves.1997@gmail.com",
  },
  {
    Icon: Clock,
    label: "Horários de Culto",
    value: "Domingo: 9h e 11h · Quarta: 19h",
  },
]

export function Location() {
  return (
    <section
      id="location"
      className="w-full py-16 bg-white"
    >
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 rounded-full bg-iisc-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              Venha nos Visitar
            </span>
          </div>
          <h2 className="text-4xl font-bold leading-none text-gray-800 sm:text-5xl lg:text-6xl">
            Onde Estamos
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-10 lg:grid-cols-2"
        >
          {/* Map */}
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden rounded-2xl border border-iisc-green/20"
          >
            <iframe
              title="Localização da Igreja"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.123456789!2d-47.9319!3d-18.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAvenida+Jos%C3%A9+Fonseca+e+Silva%2C+737%2C+Uberl%C3%A2ndia%2C+MG!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="420"
              className="border-0 block"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-8">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-iisc-green/12 border border-iisc-green/25">
                  <item.Icon className="h-5 w-5 text-iisc-gold" />
                </div>
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-iisc-gold font-display">
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-800">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.google.com/?q=Avenida+José+Fonseca+e+Silva,+737"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_4px_24px_rgba(212,165,53,0.25)] text-iisc-midnight bg-linear-to-br from-iisc-gold to-iisc-gold-light"
            >
              <MapPin className="h-4 w-4" />
              Como chegar
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
