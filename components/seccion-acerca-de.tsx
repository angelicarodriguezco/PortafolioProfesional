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
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      icon: Palette,
      title: "Innovación",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      icon: Rocket,
      title: "Aprendizaje Continuo",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
              <Badge 
                variant="outline" 
                className="px-4 py-2 text-sm font-medium"
                style={{ 
                  borderColor: vibrantColors.coral,
                  color: vibrantColors.purple,
                  backgroundColor: `${vibrantColors.coral}15`
                }}
              >
                Acerca de Mí
              </Badge>
            </motion.div>
            <h2 
              className="text-4xl md:text-6xl font-bold text-balance"
              style={{ 
                background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.orange})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Creando Excelencia Digital
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
                className="relative rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="w-full h-[600px] bg-black flex items-center justify-center">
                </div>
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

          {/* Sección Visión y Misión */}
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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
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
