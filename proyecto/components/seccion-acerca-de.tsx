"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Rocket, Users, Star, BookOpen } from "lucide-react"
import { usarIdioma } from "@/contexts/language-context"

export default function SeccionAcercaDe() {
  const { traducir } = usarIdioma()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const coloresVibrantes = {
    morado: "#3e196e",
    coral: "#d46c76",
    naranja: "#ffc07c"
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
      titleKey: "about.qualityTitle",
      descKey: "about.qualityDesc",
    },
    {
      icon: Palette,
      titleKey: "about.innovationTitle",
      descKey: "about.innovationDesc",
    },
    {
      icon: Users,
      titleKey: "about.collaborationTitle",
      descKey: "about.collaborationDesc",
    },
    {
      icon: Rocket,
      titleKey: "about.learningTitle",
      descKey: "about.learningDesc",
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
                background: `linear-gradient(135deg, ${coloresVibrantes.morado}, ${coloresVibrantes.coral}, ${coloresVibrantes.naranja})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {traducir("about.title")}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4" style={{ color: coloresVibrantes.morado }}>
                  <p className="text-xl leading-relaxed">
                    {traducir("about.paragraph1")}
                  </p>
                  <p className="text-xl leading-relaxed">
                    {traducir("about.paragraph2")}
                  </p>
                  <p className="text-xl leading-relaxed">
                    {traducir("about.paragraph3")}
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
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0
                  }}
                >
                  <img 
                    src="/logoYPerfil/Logo.svg"
                    alt="Logo"
                    className="w-6 h-6"
                    style={{ transform: 'rotate(180deg)' }}
                  />
                </motion.div>
                <motion.div
                  className="absolute top-4 left-4"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8
                  }}
                >
                  <img 
                    src="/logoYPerfil/Logo.svg"
                    alt="Logo"
                    className="w-6 h-6"
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 right-4"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <img 
                    src="/logoYPerfil/Logo.svg"
                    alt="Logo"
                    className="w-6 h-6"
                    style={{ transform: 'rotate(180deg)' }}
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 left-4"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.2
                  }}
                >
                  <img 
                    src="/logoYPerfil/Logo.svg"
                    alt="Logo"
                    className="w-6 h-6"
                    style={{ transform: 'rotate(180deg)' }}
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

          <motion.div variants={itemVariants} className="space-y-12 mt-24">
            <div className="text-center">
              <h3 
                className="text-3xl md:text-4xl font-semibold mb-4"
                style={{ 
                  background: `linear-gradient(135deg, ${coloresVibrantes.morado}, ${coloresVibrantes.coral})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {traducir("about.valuesTitle")}
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {traducir("about.valuesSubtitle")}
              </p>
            </div>

            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
              {values.map((value, index) => (
                <motion.div
                  key={value.titleKey}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Card 
                    className="p-6 h-full bg-white border-2 hover:shadow-lg transition-all duration-300 group"
                    style={{ 
                      borderColor: coloresVibrantes.coral,
                      backgroundColor: `${coloresVibrantes.coral}05`
                    }}
                  >
                    <div className="space-y-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300"
                        style={{ 
                          background: `linear-gradient(135deg, ${coloresVibrantes.morado}20, ${coloresVibrantes.coral}20)`
                        }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <value.icon className="w-6 h-6" style={{ color: coloresVibrantes.morado }} />
                      </motion.div>
                      <h4 className="text-lg md:text-xl font-semibold" style={{ color: coloresVibrantes.morado }}>{traducir(value.titleKey)}</h4>
                      <p className="text-xl leading-relaxed" style={{ color: coloresVibrantes.morado }}>{traducir(value.descKey)}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-12 mt-24">
            <div className="text-center">
              <h3 
                className="text-3xl md:text-4xl font-semibold mb-4"
                style={{ 
                  background: `linear-gradient(135deg, ${coloresVibrantes.morado}, ${coloresVibrantes.coral})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {traducir("about.visionTitle")}
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {traducir("about.visionSubtitle")}
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
                    borderColor: coloresVibrantes.coral,
                    backgroundColor: `${coloresVibrantes.coral}05`
                  }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, ${coloresVibrantes.morado}20, ${coloresVibrantes.coral}20)`
                        }}
                      >
                        <Star className="w-6 h-6" style={{ color: coloresVibrantes.coral }} />
                      </div>
                      <h4 className="text-2xl font-bold" style={{ color: coloresVibrantes.morado }}>{traducir("about.missionTitle")}</h4>
                    </div>
                    <p className="text-xl leading-relaxed" style={{ color: coloresVibrantes.morado }}>
                      {traducir("about.missionDesc")}
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
                    borderColor: coloresVibrantes.coral,
                    backgroundColor: `${coloresVibrantes.coral}05`
                  }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ 
                            background: `linear-gradient(135deg, ${coloresVibrantes.coral}20, ${coloresVibrantes.morado}20)`
                          }}
                        >
                          <BookOpen className="w-6 h-6" style={{ color: coloresVibrantes.coral }} />
                        </div>
                        <h4 className="text-2xl font-bold" style={{ color: coloresVibrantes.morado }}>{traducir("about.visionTitleCard")}</h4>
                      </div>
                      <p className="text-xl leading-relaxed" style={{ color: coloresVibrantes.morado }}>
                        {traducir("about.visionDesc")}
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
