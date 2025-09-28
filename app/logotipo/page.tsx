"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function LogotipoPage() {
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
        staggerChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  }

  return (
    <section 
      className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
          style={{ 
            background: `linear-gradient(45deg, ${vibrantColors.purple}10, ${vibrantColors.coral}10)` 
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl"
          style={{ 
            background: `linear-gradient(45deg, ${vibrantColors.coral}10, ${vibrantColors.orange}10)` 
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Logotipo */}
        <motion.div 
          variants={itemVariants}
          className="mb-6"
        >
          <motion.div 
            variants={floatingVariants} 
            animate="animate" 
            className="relative inline-block"
          >
            <motion.div
              className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image
                src="/Logotipo.png"
                alt="Logotipo Portafolio Profesional"
                width={320}
                height={320}
                className="w-full h-full object-contain object-center scale-150"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl lg:text-7xl font-bold text-balance leading-tight mb-8"
          style={{ 
            background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral}, ${vibrantColors.orange})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          initial={{ scale: 0.8 }}
          animate={isInView ? { scale: 1 } : { scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.5,
          }}
        >
          Portafolio Profesional
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={itemVariants}
          className="text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
          style={{ color: vibrantColors.purple }}
        >
          Desarrollando soluciones digitales innovadoras con pasión y creatividad
        </motion.p>

        {/* Elementos decorativos adicionales */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center gap-8"
        >
          <motion.div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: vibrantColors.purple }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0,
            }}
          />
          <motion.div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: vibrantColors.coral }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.5,
            }}
          />
          <motion.div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: vibrantColors.orange }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
