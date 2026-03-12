import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "@/motions"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-32">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hero-background absolute inset-0 -z-10"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mx-auto max-w-3xl text-center mb-4"
      >
        <Badge variant="secondary">
          IGREJA INTERNACIONAL SEGUIDORES DE CRISTO
        </Badge>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance"
        >
          Um lugar onde você
          <br />
          <span className="text-accent">encontra propósito</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 text-pretty"
        >
          Somos uma comunidade acolhedora, comprometida em viver e compartilhar o amor de Deus. Venha crescer conosco na fé, no amor e na comunhão.
        </motion.p>
      </motion.div>

      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="animate-bounce absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1">
              <div className="h-2 w-1 rounded-full bg-white/80" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}