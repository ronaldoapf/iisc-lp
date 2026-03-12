import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/motions"
import { BookOpen, Church, Heart, Clock, Star } from "lucide-react"
import { WelcomeBanner } from "../home/components/welcome-banner"
import { AboutSectionItem } from "./components/about-section-item"
import { Separator } from "radix-ui"

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

export function About() {
  return (
    <div>
      <section className="relative w-full overflow-hidden hero-background min-h-[75vh] flex flex-col justify-end">
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

        <div className="container relative z-10 pb-20 pt-44">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-iisc-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-iisc-gold-light">
                Conheça a IISC
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display font-black leading-[0.9] tracking-tight text-white text-[clamp(3rem,8vw,7rem)] max-w-2xl"
            >
              Sobre Nossa
              <br />
              <span className="text-iisc-gold">Igreja</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-lg text-base leading-relaxed text-iisc-cream/65"
            >
              A Igreja Internacional Seguidores de Cristo está em Uberlândia desde 1997,
              atuando com compromisso com a obra social e foco em ajudar órfãos,
              viúvas e necessitados.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-7">
              <div className="inline-flex items-center gap-3 border border-iisc-gold/25 px-5 py-2.5">
                <Star className="h-3 w-3 text-iisc-gold fill-iisc-gold" />
                <span className="text-xs uppercase tracking-[0.22em] text-iisc-cream/60">
                  Fundada em 1997 · Uberlândia, MG
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="sobre-nos"
        className="w-full py-12 lg:py-24 bg-white"
      >
        <div className="container space-y-6 md:space-y-20">
          <motion.div
            initial="hidden"
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
            className="md:flex md:flex-col"
          >
            <AboutSectionItem
              icon={Heart}
              number="01"
              title="Nossa Missão"
            >
              <p>
                A missão da Igreja Internacional Seguidores de Cristo (IISC) é ser uma Igreja que ensina os valores e princípios de Deus.
                Além disso, a sua missão engloba os seguintes propósitos:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Ajudar as pessoas a chegar a uma maturidade espiritual pela qual alcançarão outras pessoas.</li>
                <li>Fazer a obra social, ajudando especificamente os órfãos, as viúvas e os necessitados.</li>
                <li>Gerar pessoas transformadoras para o exercício da grande comissão.</li>
              </ul>
            </AboutSectionItem>

            <Separator.Root orientation="horizontal" className="bg-zinc-200 my-10 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" decorative />

            <AboutSectionItem
              icon={BookOpen}
              number="02"
              title="Nossa Visão"
            >
              Glorificar a Deus e promover o crescimento do seu Reino. Cumprir o mandamento de Jesus Cristo,
              levar o evangelho, fazer discípulos, ser guiada pelo Espírito Santo e fazer a vontade de Deus
            </AboutSectionItem>

            <Separator.Root orientation="horizontal" className="bg-zinc-200 my-10 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" decorative />

            <AboutSectionItem
              icon={Church}
              number="03"
              title="Nossos Valores"
            >
              Baseados na Bíblia, reconhecida como a palavra de Deus, e incluem: Oração, Santidade, Intercessão, fé, Amor e Comunhão
            </AboutSectionItem>
          </motion.div>

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

      <section id="events" className="w-full bg-iisc-cream py-20 lg:py-32">
        <div className="container">
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
                      <span className="mt-0.5 text-xs text-iisc-gold">{ev.month}</span>
                    </div>

                    <div className="flex-1">
                      <div className="mb-1 flex items-start justify-between gap-2">
                        <h4 className="font-bold font-display text-iisc-text-dark">{ev.title}</h4>
                        <span className="shrink-0 rounded-full px-2 py-0.5 text-xs bg-iisc-gold/12 text-iisc-gold-dark border border-iisc-gold/25">
                          {ev.type}
                        </span>
                      </div>
                      <p className="mb-2 text-sm text-iisc-text-mid">{ev.description}</p>
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
                    <div
                      className={`mt-1 w-1 shrink-0 self-stretch rounded-full ${
                        i === 0 ? "bg-iisc-gold" : "bg-iisc-gold/22"
                      }`}
                    />
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

      <WelcomeBanner />
    </div>
  )
}
