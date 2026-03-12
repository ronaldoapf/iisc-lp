import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/motions"

export function Location() {
  return (
    <section id="location" className="w-full py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Onde Estamos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Venha nos visitar! Estamos localizados em um lugar de fácil acesso.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Map */}
          <motion.div variants={fadeInUp} className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="Localização da Igreja"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.123456789!2d-47.9319!3d-18.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAvenida+Jos%C3%A9+Fonseca+e+Silva%2C+737%2C+Uberl%C3%A2ndia%2C+MG!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>

          {/* Info */}
          <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Endereço</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Avenida José Fonseca e Silva, 737 — Uberlândia, MG
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Telefone</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  (34) 9 9119-2543
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">E-mail</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  ronaldo.alves.1997@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Horários de Culto</h4>
                <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                  <p>Domingo: 9h e 11h</p>
                  <p>Quarta-feira: 19h</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Avenida+José+Fonseca+e+Silva,+737"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
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
