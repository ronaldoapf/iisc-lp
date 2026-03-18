import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { memo } from "react"

import {
  Heart,
  BookOpen,
  Church,
  Clock,
} from "lucide-react"

import { Hero } from "@/pages/home/components/hero"
import { Location } from "@/pages/home/components/location"
import { WelcomeBanner } from "@/pages/home/components/welcome-banner"
import { MinistriesSection } from "@/pages/home/components/ministries"
import { BackToTop } from "@/components/back-to-top"
import { fadeInUp, staggerContainer } from "@/motions"

const carouselImages = [
  "/raimundo-opt.webp",
  "/todosjovens1-opt.webp",
  "/convertidamente-opt.webp",
  "/bateria1-opt.webp",
  "/jovens1-opt.webp",
  "/grupo-opt.webp",
  "/semear-opt.webp",
  "/todosjovens-opt.webp",
  "/bateria-opt.webp",
  "/jovens-opt.webp",
]

const events = [
  {
    day: "20",
    month: "ABR",
    title: "Celebração da Páscoa",
    type: "Evento Especial",
    description: "Culto especial de Páscoa celebrando a ressurreição de Jesus Cristo.",
    time: "9h & 11h",
  },
  {
    day: "22",
    month: "MAR",
    title: "Piquenique Comunitário",
    type: "Comunhão",
    description: "Traga toda a família para comida, jogos e comunhão no parque.",
    time: "12h – 16h",
  },
  {
    day: "05",
    month: "ABR",
    title: "Retiro de Jovens",
    type: "Jovens",
    description: "Retiro de fim de semana para jovens crescerem na fé e construírem comunidade.",
    time: "5 a 7 de Abril",
  },
]

const weeklySchedule = [
  {
    day: "Domingo",
    items: ["9h — Culto Matinal", "10h15 — Escola Dominical", "11h — Culto Contemporâneo"],
  },
  { day: "Terça-feira", items: ["6h — Reunião de Oração", "19h — Estudo Feminino"] },
  {
    day: "Quarta-feira",
    items: ["18h30 — Jantar em Família", "19h — Ministério Jovem", "19h — Estudo para Adultos"],
  },
  { day: "Quinta-feira", items: ["19h — Ensaio de Louvor", "19h — Estudo Masculino"] },
  { day: "Sábado", items: ["10h — Serviço Comunitário"] },
]

const pillars = [
  {
    number: "01",
    Icon: Heart,
    title: "Nossa Missão",
    text: "Compartilhar o amor de Deus e fazer discípulos que transformam nossa comunidade e o mundo.",
  },
  {
    number: "02",
    Icon: BookOpen,
    title: "Nossos Valores",
    text: "Fé, comunidade, serviço e adoração autêntica guiam tudo o que fazemos juntos.",
  },
  {
    number: "03",
    Icon: Church,
    title: "Nossa História",
    text: "Servindo nossa comunidade com fé e dedicação há mais de 15 anos de história viva.",
  },
]

const CarouselItem = memo(({ src }: { src: string }) => (
  <div className="flex-[0_0_85%] min-w-0 md:flex-[0_0_40%] lg:flex-[0_0_40%] pl-6">
    <div className="relative aspect-16/10 overflow-hidden rounded-4xl">
      <img
        src={src}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        alt="Momento da Igreja"
        className="w-full h-full object-cover will-change-transform"
      />
    </div>
  </div>
))

CarouselItem.displayName = "CarouselItem"

export function Home() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
      }),
    ]
  )

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Hero />

      <section
        id="sobre-nos"
        className="w-full py-10 lg:py-20 bg-white"
      >
        <div className="container">
          <motion.div
            initial="hidden"
            className="mb-20"
            variants={fadeInUp}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 rounded-full bg-iisc-green" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-iisc-green">
                Quem Somos
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-none sm:text-5xl lg:text-6xl font-display text-iisc-text-dark">
              Sobre Nossa Igreja
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20 grid gap-14 md:grid-cols-3"
          >
            {pillars.map((p) => (
              <motion.div key={p.number} variants={fadeInUp} className="group relative">
                <span className="pointer-events-none absolute -top-6 -left-2 select-none text-8xl font-bold leading-none font-display text-iisc-green/12">
                  {p.number}
                </span>
                <div className="mb-6 h-0.5 w-8 transition-all duration-300 group-hover:w-16 bg-iisc-green" />

                <p.Icon className="mb-4 h-7 w-7 text-iisc-green" />

                <h3 className="mb-3 text-xl font-bold font-display text-iisc-text-dark">
                  {p.title}
                </h3>
                <p className="text-base leading-relaxed text-iisc-text-mid">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </motion.div>


          {/* Bible verse callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl px-8 py-12 text-center lg:px-20 bg-iisc-midnight"
          >
            <p className="text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl font-display">
              "Porque onde dois ou três estiverem reunidos em meu nome,
              ali eu estou no meio deles."
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 rounded-full bg-iisc-gold" />
              <p className="text-sm font-semibold uppercase tracking-widest text-iisc-gold-light">
                Mateus 18:20
              </p>
              <span className="h-px w-8 rounded-full bg-iisc-gold" />
            </div>
          </motion.div>

        </div>
      </section>

      <section className="w-full py-10 md:py-20 relative bg-foreground overflow-hidden">
        <div className="container mb-10">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 text-white">
            <div className="max-w-xl">
              <div className="flex items-center gap-2">
                <span className="h-px w-6 rounded-full bg-iisc-gold" />
                <span className="font-mono text-sm tracking-[0.2em] text-accent uppercase">
                  Nossa Família
                </span>
              </div>
              <h2 className="display-title text-5xl md:text-7xl">
                Momentos <span className="text-accent">Reais</span>
              </h2>
            </div>

            <p className="text-white/60 font-medium max-w-sm text-lg">
              Uma espiada no que vivemos semanalmente.
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {carouselImages.map((src, i) => (
              <CarouselItem key={i} src={src} />
            ))}
          </div>
        </div>
      </section>



      <section
        id="events"
        className="container w-full py-12 lg:py-24"
      >
        <div>
          <motion.div
            initial="hidden"
            className="mb-16"
            variants={fadeInUp}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 rounded-full bg-iisc-green" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-iisc-green">
                Agenda
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-none sm:text-5xl lg:text-6xl font-display text-iisc-text-dark">
              Eventos &<br />Agenda Semanal
            </h2>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="mb-8 pb-4 text-xs uppercase tracking-[0.25em] font-display text-iisc-text-mid border-b border-iisc-gold/28">
                Próximos Eventos
              </h3>
              <div className="space-y-7">
                {events.map((ev, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-5">
                    <div className="flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-iisc-gold/12 border border-iisc-gold/30">
                      <span className="text-xl font-bold leading-none font-display text-iisc-gold">
                        {ev.day}
                      </span>
                      <span className="mt-0.5 text-xs text-iisc-gold">
                        {ev.month}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="mb-1 flex items-start justify-between gap-2">
                        <h4 className="font-bold font-display text-iisc-text-dark">
                          {ev.title}
                        </h4>
                        <span className="shrink-0 rounded-full px-2 py-0.5 text-xs bg-iisc-gold/12 text-iisc-gold-dark border border-iisc-gold/25">
                          {ev.type}
                        </span>
                      </div>
                      <p className="mb-2 text-sm text-iisc-text-mid">
                        {ev.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-iisc-gold-dark">
                        <Clock className="h-3 w-3" />
                        {ev.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="mb-8 pb-4 text-xs uppercase tracking-[0.25em] font-display text-iisc-text-mid border-b border-iisc-gold/28">
                Agenda Semanal
              </h3>
              <div className="space-y-6">
                {weeklySchedule.map((day, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-5">
                    {/* Side bar */}
                    <div className={`mt-1 w-1 shrink-0 self-stretch rounded-full ${i === 0 ? "bg-iisc-gold" : "bg-iisc-gold/22"}`} />
                    <div>
                      <h4 className="mb-2 text-sm font-bold font-display text-iisc-text-dark">
                        {day.day}
                      </h4>
                      <div className="space-y-1">
                        {day.items.map((item, j) => (
                          <p key={j} className="text-sm text-iisc-text-mid">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <MinistriesSection />



      <Location />

      <WelcomeBanner />
      <BackToTop />
    </div>
  )
}
