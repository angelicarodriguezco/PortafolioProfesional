"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { usarIdioma } from "@/contexts/language-context"

export default function SeccionIdiomas() {
  const { traducir } = usarIdioma()
  const referencia = useRef(null)
  const estaEnVista = useInView(referencia, { once: true, margin: "-100px" })
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const idiomas = [
    { nombre: "Español", nivel: traducir("languages.native") },
    { nombre: "Inglés", nivel: traducir("languages.advanced") },
  ]

  return (
    <section id="languages" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={referencia}
          variants={containerVariants}
          initial="hidden"
          animate={estaEnVista ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 
              className="text-4xl md:text-6xl font-bold tracking-tight"
              style={{ 
                background: `linear-gradient(135deg, ${coloresVibrantes.morado}, ${coloresVibrantes.coral}, ${coloresVibrantes.naranja})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {traducir("languages.title")}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {traducir("languages.subtitle")}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <div className="flex flex-wrap justify-center gap-6">
              {idiomas.map((idioma, index) => (
                <motion.div
                  key={idioma.nombre}
                  className="px-8 py-6 rounded-2xl border-2 transition-all duration-300 shadow-lg"
                  style={{ 
                    borderColor: coloresVibrantes.coral,
                    backgroundColor: "white",
                    minWidth: "200px"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={estaEnVista ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${coloresVibrantes.coral}40` }}
                >
                  <h3 
                    className="text-2xl font-bold mb-2 text-center"
                    style={{ color: coloresVibrantes.morado }}
                  >
                    {idioma.nombre}
                  </h3>
                  <p 
                    className="text-lg text-center"
                    style={{ color: coloresVibrantes.coral }}
                  >
                    {idioma.nivel}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

