import { fadeInUp, staggerContainer } from "@/motions"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { Logo } from "./logo"
import { contactInfo } from "@/constants"

export function Footer() {
  return (
    <footer id="contact" className="w-full border-t bg-background py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-3"
        >
          <motion.div variants={fadeInUp}>
            <div className="mb-4 flex items-center gap-2">
              <Logo />
            </div>
            <p className="text-sm text-muted-foreground">
              Uma comunidade de fé, esperança e amor servindo nossa cidade e além.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h4 className="mb-4 font-semibold">Contato</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h4 className="mb-4 font-semibold">Horários de Culto</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Cultos de Domingo:</p>
              <p>9h - Culto Tradicional</p>
              <p>11h - Culto Contemporâneo</p>
              <p className="mt-4">Culto de Quarta-feira:</p>
              <p>19h - Oração e Estudo da Semana</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} IISC. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}