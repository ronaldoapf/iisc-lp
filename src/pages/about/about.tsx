import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/motions"
import { BookOpen, Church, Heart, Star } from "lucide-react"
import { WelcomeBanner } from "../home/components/welcome-banner"
import { AboutSectionItem } from "./components/about-section-item"
import { Separator } from "radix-ui"
import { churchHistory, faithStatements } from "@/constants"


export function About() {
  return (
    <div>
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
          {churchHistory.foundingYear}
        </span>

        <div className="container relative z-10 py-10 md:py-20">
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
              {churchHistory.foundingText}
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
        className="w-full py-10 md:py-20 bg-white"
      >
        <div className="container space-y-6 md:space-y-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
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

      <section id="declaracao-de-fe" className="w-full py-10 md:py-20 bg-zinc-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 rounded-full bg-iisc-green" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-iisc-green">
                O que cremos
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-none sm:text-5xl lg:text-6xl font-display text-iisc-text-dark">
              Declaração de Fé
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-0 divide-y divide-zinc-200"
          >
            {faithStatements.map(({ title, text, refs }, i) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="group gap-4 md:gap-12 py-10"
              >
                <AboutSectionItem
                  title={title}
                  number={String(i + 1).padStart(2, "0")}
                >
                  <p className="text-base leading-relaxed text-iisc-text-mid">
                    {text}
                  </p>
                  <p className="text-xs mt-4 font-mono text-iisc-gold-dark/70 border-l-2 border-iisc-gold/30 pl-3">
                    {refs}
                  </p>
                </AboutSectionItem>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <WelcomeBanner />
    </div>
  )
}
