"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const vibrantColors = {
    purple: "#3e196e",
    coral: "#d46c76",
    orange: "#ffc07c"
  }

  const skills = [
    { name: "React/Next.js", logo: "/logosHabilidades/LogoReact.png", category: "Frontend" },
    { name: "CSS", logo: "/logosHabilidades/LogoCSS.png", category: "Frontend" },
    { name: "HTML", logo: "/logosHabilidades/LogoHTML.png", category: "Frontend" },
    { name: "JavaScript", logo: "/logosHabilidades/LogoJavaScript.png", category: "Frontend" },
    { name: "TypeScript", logo: "/logosHabilidades/LogoTypescript.png", category: "Frontend" },
    { name: "FastAPI", logo: "/logosHabilidades/LogoFastAPI.png", category: "Frontend" },
    { name: "C#", logo: "/logosHabilidades/LogoCSharp.png", category: "Frontend" },
    { name: "Node.js", logo: "/logosHabilidades/LogoNodejs.png", category: "Backend" },
    { name: "Git/GitHub", logo: ["/logosHabilidades/LogoGit.png", "/logosHabilidades/LogoGitub.svg"], category: "Backend" },
    { name: "BitBucket", logo: "🟢", category: "Backend" },
    { name: "ASP.NET", logo: "🟢", category: "Backend" },
    { name: "Entity Framework", logo: "🟢", category: "Backend" },
    { name: "Cloudinary", logo: "🟢", category: "Backend" },
    { name: "Yahoo Finance API", logo: "🟢", category: "Backend" },
    { name: "PayPal API", logo: "🟢", category: "Backend" },
    { name: "Express.js", logo: "🟢", category: "Backend" },
    { name: "Flickr API", logo: "🟢", category: "Backend" },
    { name: "Jest", logo: "🟢", category: "Backend" },
    { name: "Docker", logo: "🟢", category: "Backend" },
    { name: "Java", logo: "🟢", category: "Backend" },
    { name: "Spring Boot", logo: "🟢", category: "Backend" },
    { name: "MySQL", logo: "🟢", category: "Backend" },
    { name: "SQL Server", logo: "🟢", category: "Backend" },    
    { name: "Python", logo: "🐍", category: "Backend" },
    { name: "PostgreSQL", logo: "🐘", category: "Backend" },
    { name: "MongoDB", logo: "🍃", category: "Backend" },
  ]

  const categories = ["Frontend", "Backend", "Diseño"]

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
                Habilidades
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
              Experiencia Técnica
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-balance leading-relaxed" style={{ color: vibrantColors.purple }}>
            Un conjunto de herramientas integral creado a través de años de experiencia práctica en desarrollo y diseño web moderno.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 
                className="text-3xl font-semibold mb-8"
                style={{ 
                  background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Tecnologías Principales
              </h3>
            </div>

            {categories.map((category) => (
              <motion.div key={category} variants={itemVariants} className="space-y-6">
                <h4 className="text-xl font-semibold flex items-center gap-3" style={{ color: vibrantColors.purple }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: vibrantColors.coral }} />
                  {category}
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-300 group cursor-pointer"
                        style={{ 
                          borderColor: vibrantColors.coral,
                          backgroundColor: `${vibrantColors.coral}05`
                        }}
                      >
                        <div className="w-16 h-16 mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                          {Array.isArray(skill.logo) ? (
                            <div className="flex gap-1">
                              {skill.logo.map((logo, index) => (
                                <img 
                                  key={index}
                                  src={logo} 
                                  alt={`${skill.name} ${index + 1}`}
                                  className="w-7 h-7 object-contain"
                                />
                              ))}
                            </div>
                          ) : skill.logo.startsWith('/') ? (
                            <img 
                              src={skill.logo} 
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className="text-4xl">{skill.logo}</span>
                          )}
                        </div>
                        <span 
                          className="text-sm font-medium text-center group-hover:font-semibold transition-all duration-300"
                          style={{ color: vibrantColors.purple }}
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
