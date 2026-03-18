import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/motions"
import { Users, Music, HeartHandshake, Heart, Flame, BookOpen, Baby, Star, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { WelcomeBanner } from "@/pages/home/components/welcome-banner"
import { Separator } from "radix-ui"
import type { LucideIcon } from "lucide-react"

const ministries = [
  {
    id: "01",
    title: "Células",
    subtitle: "Pequenos Grupos",
    description:
      "A vida real da fé acontece em casas — grupos de 8 a 15 pessoas que se reúnem toda semana para orar, estudar a Palavra e compartilhar a vida de verdade. Comunidade genuína que vai além do culto de domingo.",
    icon: Users,
    image: "/grupo-opt.webp",
    tag: "Toda semana",
  },
  {
    id: "02",
    title: "IISC Jovens",
    subtitle: "Jovens & Adolescentes",
    description:
      "Uma geração que não foge do chamado. Cultos vibrantes, retiros que transformam e amizades para a vida inteira. Se você tem entre 14 e 29 anos e quer viver o propósito de Deus com intensidade, esse é o seu lugar.",
    icon: HeartHandshake,
    image: "/jovens-opt.webp",
    tag: "Sexta • 19h",
  },
  {
    id: "03",
    title: "Semear",
    subtitle: "Ação Social & Missões",
    description:
      "Igreja além dos muros. O Semear é o braço de compaixão da IISC — servindo órfãos, viúvas e vulneráveis com amor prático. Acreditamos que a cidade precisa ver o evangelho em ação, não só ouvir.",
    icon: Heart,
    image: "/semear-opt.webp",
    tag: "Sábado • 10h",
  },
  {
    id: "04",
    title: "Louvor",
    subtitle: "Adoração",
    description:
      "Músicos, vocalistas e técnicos dedicados a criar atmosferas de encontro genuíno com Deus. Um time comprometido com adoração profunda e ensaios semanais para que cada culto seja espaço de presença real.",
    icon: Music,
    image: "/bateria-opt.webp",
    tag: "Domingo • 9h",
  },
  {
    id: "05",
    title: "Escola Dominical",
    subtitle: "Educação & Discipulado",
    description:
      "Formação bíblica sólida para todas as idades. Aulas para crianças, jovens e adultos com professores capacitados e material completo — bases que sustentam uma caminhada de fé consistente.",
    icon: BookOpen,
    image: "/todosjovens-opt.webp",
    tag: "Domingo • 10h15",
  },
  {
    id: "06",
    title: "Infantil",
    subtitle: "Ministério de Crianças",
    description:
      "As crianças não são o futuro da Igreja — elas são a Igreja agora. Um espaço seguro, criativo e acolhedor onde cada criança é amada, encantada e ensinada com propósito.",
    icon: Baby,
    image: "/jovens1-opt.webp",
    tag: "Domingo • 9h e 11h",
  },
  {
    id: "07",
    title: "Intercessão",
    subtitle: "Ministério de Oração",
    description:
      "Oração não é um departamento — é o oxigênio da Igreja. O grupo de intercessão cobre a IISC, as famílias e a cidade em oração contínua. Se você tem chamado para interceder, vai se sentir em casa aqui.",
    icon: Flame,
    image: "/convertidamente-opt.webp",
    tag: "Terça • 19h",
  },
]

interface MinistryItemProps {
  id: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  image: string
  tag: string
}

function MinistryItem({ id, title, subtitle, description, icon: Icon, image, tag }: MinistryItemProps) {
  return (
    <motion.div variants={fadeInUp} className="group relative grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
      <div className="w-full">
        <div className="relative">
          <span className="pointer-events-none select-none text-8xl font-bold leading-none font-display text-iisc-green/12">
            {id}
          </span>
          <Icon className="absolute h-7 w-7 bottom-4 text-iisc-green" />
        </div>

        <h3 className="mt-4 text-3xl font-bold font-display text-iisc-text-dark">{title}</h3>
        <p className="mt-2 text-xs font-bold uppercase tracking-widest text-iisc-gold-dark">{subtitle}</p>

        <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-iisc-gold/30 bg-iisc-gold/5 px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-iisc-gold" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-iisc-text-dark font-bold">{tag}</span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 md:pt-4">
        <p className="text-lg leading-relaxed text-iisc-text-mid">{description}</p>

        <div className="relative overflow-hidden rounded-3xl w-full h-[300px] md:h-[400px] lg:h-[480px]">
          <img
            src={image}
            alt={title}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

export function Ministries() {
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
          IISC
        </span>

        <div className="container relative z-10 py-10 md:py-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-iisc-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-iisc-gold-light">
                Onde Você Pertence
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display font-black leading-[0.9] tracking-tight text-white text-[clamp(3rem,8vw,7rem)] max-w-2xl"
            >
              Grupos &<br />
              <span className="text-iisc-gold italic font-light">Ministérios</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-lg text-base leading-relaxed text-iisc-cream/65"
            >
              {ministries.length} ministérios ativos onde você pode pertencer, crescer e servir. 
              Cada um é uma porta aberta para você.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-7">
              <div className="inline-flex items-center gap-3 border border-iisc-gold/25 px-5 py-2.5">
                <Star className="h-3 w-3 text-iisc-gold fill-iisc-gold" />
                <span className="text-xs uppercase tracking-[0.22em] text-iisc-cream/60">
                  Uberlândia, MG · Desde 1997
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-10 md:py-20 bg-white">
        <div className="container space-y-6 md:space-y-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {ministries.map((min, i) => (
              <div key={min.id}>
                <MinistryItem {...min} />
                {i < ministries.length - 1 && (
                  <Separator.Root
                    orientation="horizontal"
                    className="bg-zinc-200 my-10 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
                    decorative
                  />
                )}
              </div>
            ))}
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

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps?q=Avenida+Jos%C3%A9+Fonseca+e+Silva,+737"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-iisc-gold text-iisc-midnight px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-iisc-gold-light transition-colors duration-300"
              >
                Como chegar
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                Página inicial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <WelcomeBanner />
    </div>
  )
}
