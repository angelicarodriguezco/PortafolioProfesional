"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Rocket, Users, Star, BookOpen } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const vibrantColors = {
    purple: "#3e196e",
    coral: "#d46c76",
    orange: "#ffc07c"
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const values = [
    {
      icon: Code,
      title: "Calidad",
      description: "Escribir código limpio, eficiente, documentado y bien probado.",
    },
    {
      icon: Palette,
      title: "Innovación",
      description: "Buscar constantemente mejores soluciones, metodologías y nuevas tecnologías.",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajar en equipo para intercambiar conocimientos y crecer profesionalmente.",
    },
    {
      icon: Rocket,
      title: "Aprendizaje Continuo",
      description: "Mantenerme actualizada con nuevas tecnologías y metodologías de desarrollo.",
    },
  ]

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 
              className="text-5xl md:text-7xl font-bold tracking-tight"
              style={{ 
                background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral}, ${vibrantColors.orange})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Sobre Mí
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold" style={{ color: vibrantColors.purple }}>Mi Trayectoria</h3>
                <div className="space-y-4 leading-relaxed" style={{ color: vibrantColors.purple }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  </p>
                </div>
              </div>

            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50, rotate: -2 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotate: 0,
                  transition: {
                    duration: 1.2,
                    ease: "easeOut",
                    delay: 0.3
                  }
                } : { opacity: 0, y: 50, rotate: -2 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 1,
                  transition: { duration: 0.3 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.img 
                  src="/collageSobreMi/Collage.svg" 
                  alt="Collage sobre mi trayectoria profesional" 
                  className="w-full scale-150"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0
                  }}
                >
                  <div 
                    className="w-6 h-6"
                    style={{
                      background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
                      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                    }}
                  />
                </motion.div>
                <motion.div
                  className="absolute top-4 left-4"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                    rotate: [0, -180, -360]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8
                  }}
                >
                  <div 
                    className="w-6 h-6"
                    style={{
                      background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                    }}
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 right-4"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <div 
                    className="w-6 h-6"
                    style={{
                      background: 'linear-gradient(45deg, #f59e0b, #ea580c)',
                      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                    }}
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 left-4"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                    rotate: [0, -180, -360]
                  }}
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.2
                  }}
                >
                  <div 
                    className="w-6 h-6"
                    style={{
                      background: 'linear-gradient(45deg, #d97706, #b45309)',
                      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                    }}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 
                className="text-3xl font-semibold mb-4"
                style={{ 
                  background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Valores Fundamentales
              </h3>
              <p className="max-w-2xl mx-auto" style={{ color: vibrantColors.purple }}>
              Los principios que guían mi trabajo y me impulsan a ofrecer resultados excepcionales
              </p>
            </div>

            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Card 
                    className="p-6 h-full bg-white border-2 hover:shadow-lg transition-all duration-300 group"
                    style={{ 
                      borderColor: vibrantColors.coral,
                      backgroundColor: `${vibrantColors.coral}05`
                    }}
                  >
                    <div className="space-y-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300"
                        style={{ 
                          background: `linear-gradient(135deg, ${vibrantColors.purple}20, ${vibrantColors.coral}20)`
                        }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <value.icon className="w-6 h-6" style={{ color: vibrantColors.purple }} />
                      </motion.div>
                      <h4 className="text-lg font-semibold" style={{ color: vibrantColors.purple }}>{value.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: vibrantColors.purple }}>{value.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 
                className="text-3xl font-semibold mb-4"
                style={{ 
                  background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Visión y Misión
              </h3>
              <p className="max-w-2xl mx-auto" style={{ color: vibrantColors.purple }}>
                Los pilares que definen mi propósito profesional y mi compromiso con la excelencia
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Card 
                  className="p-8 h-full bg-white border-2 hover:shadow-lg transition-all duration-300"
                  style={{ 
                    borderColor: vibrantColors.coral,
                    backgroundColor: `${vibrantColors.coral}05`
                  }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, ${vibrantColors.purple}20, ${vibrantColors.coral}20)`
                        }}
                      >
                        <Star className="w-6 h-6" style={{ color: vibrantColors.coral }} />
                      </div>
                      <h4 className="text-2xl font-bold" style={{ color: vibrantColors.purple }}>Misión</h4>
                    </div>
                    <p className="text-lg leading-relaxed" style={{ color: vibrantColors.purple }}>
                    Transformar ideas en soluciones funcionales y escalables, 
                    creando aplicaciones que generen valor para clientes, 
                    aplicando buenas prácticas y tecnologías modernas.
                    </p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Card 
                  className="p-8 h-full bg-white border-2 hover:shadow-lg transition-all duration-300"
                  style={{ 
                    borderColor: vibrantColors.coral,
                    backgroundColor: `${vibrantColors.coral}05`
                  }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ 
                            background: `linear-gradient(135deg, ${vibrantColors.coral}20, ${vibrantColors.purple}20)`
                          }}
                        >
                          <BookOpen className="w-6 h-6" style={{ color: vibrantColors.coral }} />
                        </div>
                        <h4 className="text-2xl font-bold" style={{ color: vibrantColors.purple }}>Visión</h4>
                      </div>
                      <p className="text-lg leading-relaxed" style={{ color: vibrantColors.purple }}>
                      Ser una Software Engineer líder en el desarrollo de aplicaciones y soluciones web innovadoras, 
                      constantemente actualizada sobre nuevas tecnologías y metodologías.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
