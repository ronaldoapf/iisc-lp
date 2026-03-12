import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Church, Calendar, Users, Heart, BookOpen, Music, Clock, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { Hero } from "@/pages/home/components/hero"
import { fadeInUp, scaleIn, staggerContainer } from "@/motions"
import { Location } from "@/pages/home/components/location"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Hero />

      <section id="sobre-nos" className="w-full bg-linear-to-br from-secondary/20 via-muted/30 to-accent/10 py-20">
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
              Sobre Nossa Igreja
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Construindo uma comunidade enraizada na fé, esperança e amor
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-3"
          >
            <motion.div variants={scaleIn}>
              <Card className="h-full">
                <CardHeader>
                  <Heart className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Nossa Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Compartilhar o amor de Deus e fazer discípulos que transformam nossa comunidade e o mundo.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Card className="h-full">
                <CardHeader>
                  <BookOpen className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Nossos Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fé, comunidade, serviço e adoração autêntica guiam tudo o que fazemos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Card className="h-full">
                <CardHeader>
                  <Church className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Nossa História</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Servindo nossa comunidade com fé e dedicação há mais de 50 anos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ministries Section */}
      <section id="ministries" className="w-full py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nossos Ministérios</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Encontre seu lugar para servir e crescer na fé
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div variants={scaleIn}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <Users className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Ministério Jovem</CardTitle>
                  <CardDescription>12-18 anos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Programas envolventes para adolescentes crescerem na fé e construírem amizades duradouras.
                  </p>
                  <Badge>Quartas-feiras 19h</Badge>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <Music className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Ministério de Louvor</CardTitle>
                  <CardDescription>Todas as idades</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Junte-se à nossa equipe de louvor e use seus dons musicais para glorificar a Deus.
                  </p>
                  <Badge>Ensaio Quintas-feiras 19h</Badge>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <Heart className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Alcance Comunitário</CardTitle>
                  <CardDescription>Servindo outros</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Faça a diferença em nossa comunidade através do serviço e compaixão.
                  </p>
                  <Badge>Projetos Mensais</Badge>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <Users className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Ministério Infantil</CardTitle>
                  <CardDescription>0-11 anos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Programas divertidos e cheios de fé projetados especialmente para crianças.
                  </p>
                  <Badge>Domingos durante o culto</Badge>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <BookOpen className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Estudo Bíblico</CardTitle>
                  <CardDescription>Pequenos grupos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Mergulhe profundamente nas Escrituras com outros crentes em grupos pequenos.
                  </p>
                  <Badge>Vários horários disponíveis</Badge>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <Heart className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Ministério de Oração</CardTitle>
                  <CardDescription>Oração intercessora</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Junte-se a nós para elevar nossa comunidade e o mundo em oração.
                  </p>
                  <Badge>Terças-feiras 6h</Badge>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Events & Weekly Agenda Section */}
      <section id="events" className="w-full bg-linear-to-br from-accent/10 via-muted/30 to-primary/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Eventos e Agenda Semanal</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fique conectado com o que está acontecendo em nossa igreja
            </p>
          </motion.div>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Upcoming Events */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="mb-6 text-2xl font-bold">Próximos Eventos</h3>
              <div className="space-y-4">
                <motion.div variants={scaleIn}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Celebração da Páscoa</CardTitle>
                          <CardDescription>20 de Abril, 2026</CardDescription>
                        </div>
                        <Badge variant="secondary">Evento Especial</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Junte-se a nós para um culto especial de Páscoa celebrando a ressurreição de Jesus Cristo.
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>9h & 11h</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={scaleIn}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Piquenique Comunitário</CardTitle>
                          <CardDescription>22 de Março, 2026</CardDescription>
                        </div>
                        <Badge variant="secondary">Comunhão</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Traga toda a família para comida, jogos e comunhão no parque.
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>12h - 16h</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={scaleIn}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Retiro de Jovens</CardTitle>
                          <CardDescription>5-7 de Abril, 2026</CardDescription>
                        </div>
                        <Badge variant="secondary">Jovens</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Retiro de fim de semana para jovens crescerem na fé e construírem comunidade.
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Centro de Retiros da Montanha</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Weekly Schedule */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Agenda Semanal</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 pb-4 border-b">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Domingo</h4>
                        <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                          <p>9h - Culto Tradicional</p>
                          <p>10h15 - Escola Dominical (Todas as Idades)</p>
                          <p>11h - Culto Contemporâneo</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 pb-4 border-b">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Terça-feira</h4>
                        <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                          <p>6h - Reunião de Oração</p>
                          <p>19h - Estudo Bíblico Feminino</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 pb-4 border-b">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Quarta-feira</h4>
                        <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                          <p>18h30 - Jantar em Família</p>
                          <p>19h - Ministério Jovem</p>
                          <p>19h - Estudo Bíblico para Adultos</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 pb-4 border-b">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Quinta-feira</h4>
                        <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                          <p>19h - Ensaio da Equipe de Louvor</p>
                          <p>19h - Estudo Bíblico Masculino</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Sábado</h4>
                        <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                          <p>10h - Serviço Comunitário</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <Location />

      <BackToTop />
    </div>
  )
}