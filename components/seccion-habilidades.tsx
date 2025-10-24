"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
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

  return (
    <section id="skills" className="py-24 bg-white">
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
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un conjunto de herramientas integral creado a través de experiencia práctica en desarrollo y diseño web moderno.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-12">
            <motion.div variants={itemVariants} className="pt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium uppercase tracking-wider" style={{ color: vibrantColors.purple }}>Frontend</h4>
                  <div className="flex flex-wrap gap-3">
                    {["React", "CSS", "HTML", "JavaScript", "TypeScript"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-6 py-3 text-lg border rounded-full transition-all duration-300"
                        style={{ 
                          borderColor: vibrantColors.coral,
                          color: vibrantColors.purple,
                          backgroundColor: `${vibrantColors.coral}20`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium uppercase tracking-wider" style={{ color: vibrantColors.purple }}>Backend</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Node.js", "Python", "Java", "C#", "Spring Boot", "ASP.NET"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-6 py-3 text-lg border rounded-full transition-all duration-300"
                        style={{ 
                          borderColor: vibrantColors.coral,
                          color: vibrantColors.purple,
                          backgroundColor: `${vibrantColors.coral}20`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: (index + 5) * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium uppercase tracking-wider" style={{ color: vibrantColors.purple }}>Bases de datos</h4>
                  <div className="flex flex-wrap gap-3">
                    {["MySQL", "PostgreSQL", "MongoDB", "SQL Server"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-6 py-3 text-lg border rounded-full transition-all duration-300"
                        style={{ 
                          borderColor: vibrantColors.coral,
                          color: vibrantColors.purple,
                          backgroundColor: `${vibrantColors.coral}20`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: (index + 10) * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium uppercase tracking-wider" style={{ color: vibrantColors.purple }}>APIs y Servicios</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Cloudinary", "Yahoo Finance API", "PayPal API", "Flickr API"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-6 py-3 text-lg border rounded-full transition-all duration-300"
                        style={{ 
                          borderColor: vibrantColors.coral,
                          color: vibrantColors.purple,
                          backgroundColor: `${vibrantColors.coral}20`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: (index + 14) * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium uppercase tracking-wider" style={{ color: vibrantColors.purple }}>Herramientas de desarrollo</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Git", "GitHub", "BitBucket", "Docker", "Postman"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-6 py-3 text-lg border rounded-full transition-all duration-300"
                        style={{ 
                          borderColor: vibrantColors.coral,
                          color: vibrantColors.purple,
                          backgroundColor: `${vibrantColors.coral}20`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: (index + 14) * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
