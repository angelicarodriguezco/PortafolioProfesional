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
    { nombreKey: "languages.spanish", nivelKey: "languages.native", codigo: "cr" },
    { nombreKey: "languages.english", nivelKey: "languages.advanced", codigo: "us" },
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
          <motion.div variants={itemVariants} className="text-center space-y-4 -mt-8">
            <h2 
              className="text-4xl md:text-6xl font-bold tracking-tight break-words px-4"
              style={{ 
                background: `linear-gradient(135deg, ${coloresVibrantes.morado}, ${coloresVibrantes.coral}, ${coloresVibrantes.naranja})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2',
                paddingBottom: '0.2em'
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
                  key={idioma.codigo}
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
                  <div className="flex flex-col items-center gap-3">
                    <span 
                      className={`fi fi-${idioma.codigo}`}
                      style={{ 
                        fontSize: '4rem',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                      }}
                    />
                    <h3 
                      className="text-2xl font-bold text-center"
                      style={{ color: coloresVibrantes.morado }}
                    >
                      {traducir(idioma.nombreKey)}
                    </h3>
                    <p 
                      className="text-lg text-center"
                      style={{ color: coloresVibrantes.coral }}
                    >
                      {traducir(idioma.nivelKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

