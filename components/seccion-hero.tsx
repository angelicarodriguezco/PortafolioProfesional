"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    setDisplayText("")
    setCurrentIndex(0)
  }, [])
  const fullText = "Desarrolladora Full Stack"
  const containerRef = useRef<HTMLDivElement>(null)

  const vibrantColors = {
    purple: "#3e196e",
    coral: "#d46c76",
    orange: "#ffc07c"
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
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


  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
          style={{ 
            background: `linear-gradient(45deg, ${vibrantColors.purple}15, ${vibrantColors.coral}15)` 
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl"
          style={{ 
            background: `linear-gradient(45deg, ${vibrantColors.coral}15, ${vibrantColors.orange}15)` 
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: `linear-gradient(45deg, ${vibrantColors.purple}10, ${vibrantColors.coral}10, ${vibrantColors.orange}10)` 
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            
            <motion.div 
              variants={itemVariants} 
              className="flex-shrink-0 order-1 lg:order-1"
            >
              <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem]">
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-purple-200 rounded-full"
                  animate={{
                    opacity: [0.6, 0.2, 0.6],
                    scale: [1, 1.2, 1],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-coral-200 rounded-full"
                  animate={{
                    opacity: [0.6, 0.1, 0.6],
                    scale: [1, 1.3, 1],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.div 
                  className="absolute top-1/2 -left-6 w-4 h-4 bg-orange-200 rounded-full"
                  animate={{
                    opacity: [0.6, 0, 0.6],
                    scale: [1, 1.5, 1],
                    y: [0, 15, 0],
                    x: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div 
                  className="absolute top-1/4 -right-8 w-3 h-3 bg-purple-300 rounded-full"
                  animate={{
                    opacity: [0.4, 0, 0.4],
                    scale: [1, 2, 1],
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/3 -left-8 w-5 h-5 bg-coral-300 rounded-full"
                  animate={{
                    opacity: [0.5, 0, 0.5],
                    scale: [1, 1.8, 1],
                    y: [0, 20, 0],
                    x: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
                
                <motion.div 
                  className="absolute top-8 left-8 w-2 h-2 bg-orange-300 rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                />
                <motion.div 
                  className="absolute bottom-8 right-8 w-3 h-3 bg-purple-300 rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.2,
                  }}
                />
                <motion.div 
                  className="absolute top-1/3 right-4 w-2 h-2 bg-coral-300 rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2.5,
                  }}
                />
                
                <img
                  src="/logoYPerfil/FotoProfesional.svg"
                  alt="Foto Profesional"
                  className="w-full h-full object-contain"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 98% 85%, 95% 88%, 90% 90%, 85% 92%, 80% 93%, 70% 94%, 60% 93%, 50% 92%, 40% 90%, 30% 88%, 20% 85%, 10% 82%, 0 80%)'
                  }}
                />
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="flex-1 text-center lg:text-left order-2 lg:order-2 space-y-6"
            >
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-balance leading-tight"
                style={{ 
                  background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.orange})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.5,
                }}
              >
                Angélica Rodríguez
              </motion.h1>

              <motion.div
                className="text-xl lg:text-2xl font-medium h-8 lg:h-10 flex items-center justify-center lg:justify-start"
                variants={itemVariants}
              >
                <span 
                  style={{ 
                    background: `linear-gradient(135deg, ${vibrantColors.coral}, ${vibrantColors.orange})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {displayText}
                </span>
                <motion.span
                  className="ml-1"
                  style={{ 
                    background: `linear-gradient(135deg, ${vibrantColors.coral}, ${vibrantColors.orange})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  |
                </motion.span>
              </motion.div>

              <motion.p
                className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
                style={{ color: vibrantColors.purple }}
                variants={itemVariants}
              >
                Desarrolladora Full Stack especializada en crear aplicaciones y soluciones web modernas y escalables. Experiencia en frontend (React, JavaScript, HTML, CSS), backend (Python, Node.js, Java) y bases de datos (MySQL, MongoDB, PostgreSQL).

              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="group relative overflow-hidden text-white border-0 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral})` 
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      Descargar CV
                    </span>
                    <motion.div
                      className="absolute inset-0"
                      style={{ 
                        background: `linear-gradient(135deg, ${vibrantColors.coral}, ${vibrantColors.orange})` 
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                </motion.div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex justify-center lg:justify-start gap-4 pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-12 h-12 rounded-full transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${vibrantColors.purple}20, ${vibrantColors.coral}20)`,
                      color: vibrantColors.purple
                    }}
                    asChild
                  >
                    <a href="https://github.com/angelicarodriguezco" target="_blank" rel="noopener noreferrer">
                      <Github className="w-6 h-6" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-12 h-12 rounded-full transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${vibrantColors.coral}20, ${vibrantColors.orange}20)`,
                      color: vibrantColors.coral
                    }}
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/maria-angelica-rodriguez-coto-209898385/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-12 h-12 rounded-full transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${vibrantColors.orange}20, ${vibrantColors.purple}20)`,
                      color: vibrantColors.orange
                    }}
                    asChild
                  >
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mariaangelica@rodriguezcoto.com" target="_blank" rel="noopener noreferrer">
                      <Mail className="w-6 h-6" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  )
}