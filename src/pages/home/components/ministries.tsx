import { motion } from "framer-motion"
import { Users, Music, HeartHandshake, Heart } from "lucide-react"
import { Link } from "react-router-dom"

const ministries = [
  {
    id: "01",
    title: "Células",
    subtitle: "Pequenos Grupos",
    description: "Reuniões semanais de amizade verdadeira, oração e crescimento nas casas.",
    icon: Users,
    image: "/grupo-opt.webp",
    tag: "Toda semana",
  },
  {
    id: "02",
    title: "IISC Jovens",
    subtitle: "Jovens & Adolescentes",
    description: "Cultos vibrantes, retiros marcantes e amizades para a vida inteira.",
    icon: HeartHandshake,
    image: "/jovens-opt.webp",
    tag: "Sexta • 19h",
  },
  {
    id: "03",
    title: "Semear",
    subtitle: "Ação Social & Missões",
    description: "Amor prático que serve e cuida. Impactando a cidade além dos nossos muros.",
    icon: Heart,
    image: "/semear-opt.webp",
    tag: "Sábado • 10h",
  },
  {
    id: "04",
    title: "Louvor",
    subtitle: "Adoração",
    description: "Criando atmosferas de encontro genuíno com Deus em espírito e verdade.",
    icon: Music,
    image: "/bateria-opt.webp",
    tag: "Domingo • 9h",
  },
]

export function MinistriesSection() {
  return (
    <section id="ministerios" className="w-full bg-foreground overflow-hidden">
      <div className="container pt-16 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-6 rounded-full bg-iisc-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-iisc-gold">
                Onde Você Pertence
              </span>
            </div>
            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl font-display text-white leading-tight">
              Grupos &{" "}
              <span className="italic font-light text-iisc-gold">Ministérios</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/ministerios"
              className="inline-flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-iisc-gold/50 text-iisc-gold-light hover:bg-iisc-gold hover:border-iisc-gold hover:text-white"
            >
              Ver todos os ministérios
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="container pb-16 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {ministries.map((min, i) => {
            const Icon = min.icon
            return (
              <motion.div
                key={min.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-3xl aspect-4/3 isolate"
              >
                <img
                  src={min.image}
                  alt={min.subtitle}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="absolute transition-all duration-800 inset-0 w-full h-full object-cover will-change-transform group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/5" />

                <span className="absolute top-3 right-5 font-display font-black text-[7rem] leading-none text-white/5 select-none pointer-events-none [transition:opacity_0.5s] group-hover:text-white/10">
                  {min.id}
                </span>

                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/15">
                    {min.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-white/50 text-[11px] font-semibold uppercase tracking-widest mb-1">
                        {min.subtitle}
                      </p>
                      <h3 className="font-display font-black text-3xl lg:text-4xl text-white leading-none">
                        {min.title}
                      </h3>
                    </div>
                    <div className="flex shrink-0 h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white [transition:background-color_0.3s,color_0.3s] group-hover:bg-iisc-gold group-hover:text-iisc-midnight group-hover:border-iisc-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="overflow-hidden">
                    <p className="mt-3 text-white/70 text-sm leading-relaxed max-w-sm transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      {min.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
