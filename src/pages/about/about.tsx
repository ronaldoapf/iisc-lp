import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/motions"
import { AboutSectionItem } from "./components/about-section-item"
import { Separator } from "radix-ui"

export function About() {
  return (
    <div>
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
          variants={staggerContainer}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <div className="container">
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance"
            >
              Sobre <span className="text-accent">nossa igreja</span>
            </motion.h1>
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-10">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="font-semibold text-lg mb-10"
          >
            A Igreja Internacional Seguidores de Cristo (IISC) está na cidade de Uberlândia desde 1997.
            Atuando de forma ativa na comunidade com compromisso com a obra social, com foco em ajudar órfãos, viúvas e necessitados.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <AboutSectionItem title="Missão">
              A missão da Igreja Internacional Seguidores de Cristo (IISC) é ser uma Igreja que ensina os valores e princípios de Deus.
              Além disso, a sua missão engloba os seguintes propósitos:

              <ul className="list-disc list-inside space-y-2">
                <li>Ajudar as pessoas a chegar a uma maturidade espiritual pela qual alcançarão outras pessoas.</li>
                <li>Fazer a obra social, ajudando especificamente os órfãos, as viúvas e os necessitados.</li>
                <li>Gerar pessoas transformadoras para o exercício da grande comissão.</li>
              </ul>
            </AboutSectionItem>

            <Separator.Root orientation="horizontal" className="bg-zinc-200 my-10 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" decorative />

            <AboutSectionItem title="Visão">
              Glorificar a Deus e promover o crescimento do seu Reino. Cumprir o mandamento de Jesus Cristo,
              levar o evangelho, fazer discípulos, ser guiada pelo Espírito Santo e fazer a vontade de Deus
            </AboutSectionItem>

            <Separator.Root orientation="horizontal" className="bg-zinc-200 my-10 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" decorative />

            <AboutSectionItem title="Valores">
              Baseados na Bíblia, reconhecida como a palavra de Deus, e incluem: Oração, Santidade, Intercessão, fé, Amor e Comunhão
            </AboutSectionItem>

          </motion.div>
        </div>
      </section>
    </div>
  )
}
