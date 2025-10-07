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

  const skills = [
    { name: "React/Next.js", logo: "/logosHabilidades/React.png", category: "Frontend" },
    { name: "CSS", logo: "/logosHabilidades/CSS.png", category: "Frontend" },
    { name: "HTML", logo: "/logosHabilidades/HTML.png", category: "Frontend" },
    { name: "JavaScript", logo: "/logosHabilidades/Javascript.png", category: "Frontend" },
    { name: "TypeScript", logo: "/logosHabilidades/Typescript.png", category: "Frontend" },
    
    { name: "Node.js", logo: "/logosHabilidades/Nodejs.png", category: "Backend" },
    { name: "Python", logo: "/logosHabilidades/Python.png", category: "Backend" },
    { name: "Java", logo: "/logosHabilidades/Java.png", category: "Backend" },
    { name: "C#", logo: "/logosHabilidades/CSharp.png", category: "Backend" },
    { name: "Spring Boot", logo: "/logosHabilidades/Springboot.png", category: "Backend" },
    { name: "ASP.NET", logo: "/logosHabilidades/NETCore.png", category: "Backend" },
    
    { name: "MySQL", logo: "/logosHabilidades/MySQL.png", category: "Bases de datos" },
    { name: "PostgreSQL", logo: "/logosHabilidades/PostgreSQL.png", category: "Bases de datos" },
    { name: "MongoDB", logo: "/logosHabilidades/MongoDB.png", category: "Bases de datos" },
    { name: "SQL Server", logo: "/logosHabilidades/SQLServer.png", category: "Bases de datos" },
    
    { name: "Cloudinary", logo: "/logosHabilidades/Cloudinary.png", category: "APIs y Servicios" },
    { name: "Yahoo Finance API", logo: "/logosHabilidades/Yahoo.png", category: "APIs y Servicios" },
    { name: "PayPal API", logo: "/logosHabilidades/Paypal.png", category: "APIs y Servicios" },
    { name: "Flickr API", logo: "/logosHabilidades/Flickr.png", category: "APIs y Servicios" },
    
    { name: "Git", logo: "/logosHabilidades/Git.png", category: "Herramientas de desarrollo" },
    { name: "Github", logo: "/logosHabilidades/Github.png", category: "Herramientas de desarrollo" },
    { name: "BitBucket", logo: "/logosHabilidades/Bitbucket.png", category: "Herramientas de desarrollo" },
    { name: "Docker", logo: "/logosHabilidades/Docker.png", category: "Herramientas de desarrollo" },
    { name: "Postman", logo: "/logosHabilidades/Postman.png", category: "Herramientas de desarrollo" },
  ]

  const categories = ["Frontend", "Backend", "Bases de datos", "APIs y Servicios", "Herramientas de desarrollo"]

  const stickyNoteSVGs = {
    "Frontend": ["BlueStickyNote.svg", "BlueStickyNote.svg", "RedStickyNote.svg", "YellowStickyNote.svg", "BlueStickyNote.svg"],
    "Backend": ["GreenStickyNote.svg", "YellowStickyNote.svg", "RedStickyNote.svg", "YellowStickyNote.svg", "GreenStickyNote.svg", "BlueStickyNote.svg"],
    "Bases de datos": ["YellowStickyNote.svg", "BlueStickyNote.svg", "GreenStickyNote.svg", "RedStickyNote.svg"],
    "APIs y Servicios": ["YellowStickyNote.svg", "YellowStickyNote.svg", "BlueStickyNote.svg", "BlueStickyNote.svg"],
    "Herramientas de desarrollo": ["RedStickyNote.svg", "YellowStickyNote.svg", "BlueStickyNote.svg", "BlueStickyNote.svg", "RedStickyNote.svg"]
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

                 {category === "Backend" ? (
                   <div className="flex justify-center gap-6 pb-4">
                     {skills
                       .filter((skill) => skill.category === category)
                       .map((skill, index) => {
                          const svgFile = stickyNoteSVGs[category as keyof typeof stickyNoteSVGs][index] || "1.svg"
                          const rotation = Math.random() * 20 - 10
                          
                          return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { 
                            opacity: 1, 
                            rotate: [rotation, rotation + (Math.random() * 8 - 4), rotation - (Math.random() * 8 - 4), rotation]
                          } : { opacity: 0, y: 20 }}
                          transition={{ 
                            delay: index * 0.1 + 0.3,
                            duration: 0.8,
                            ease: "easeOut",
                            rotate: {
                              duration: 3 + Math.random() * 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          className="relative"
                          style={{ transform: `rotate(${rotation}deg)` }}
                        >
                           <div className={`relative flex-shrink-0 ${skill.name === "Yahoo Finance API" ? "w-56 h-48" : "w-48 h-48"}`}>
                            <img 
                              src={`/SVGStickyNotes/${svgFile}`}
                              alt={`Sticky note ${index + 1}`}
                              className="w-full h-full object-contain drop-shadow-lg"
                            />
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6" style={{ 
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              textAlign: 'center',
                              width: '100%',
                              height: '100%'
                            }}>
                              <div className="w-20 h-20 mb-4 flex items-center justify-center relative" style={{
                                marginLeft: 'auto',
                                marginRight: 'auto'
                              }}>
                                {Array.isArray(skill.logo) ? (
                                  <div className="flex gap-1">
                                    {skill.logo.map((logo, logoIndex) => (
                                      <div key={logoIndex} className="relative">
                                        <img 
                                          src={logo} 
                                          alt={`${skill.name} ${logoIndex + 1}`}
                                          className="w-10 h-10 object-contain"
                                        />
                        </div>
                    ))}
                </div>
                                ) : (
                                      <div className="relative">
                                        <img 
                                          src={skill.logo} 
                                          alt={skill.name}
                                          className="w-full h-full object-contain"
                                        />
                                  </div>
                                )}
                              </div>
                              
                              <div className="relative w-full flex justify-center items-center" style={{
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                              }}>
                                <span 
                                  className="text-base font-bold leading-tight"
                style={{ 
                                    color: vibrantColors.purple,
                                    textAlign: 'center',
                                    display: 'block',
                                    width: '100%'
                                  }}
                                >
                                  {skill.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                        )
                      })}
                   </div>
                ) : (
                  <div className="flex justify-center gap-6 pb-4">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => {
                        const svgFile = stickyNoteSVGs[category as keyof typeof stickyNoteSVGs][index] || "1.svg"
                        const rotation = Math.random() * 20 - 10
                        
                        return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { 
                            opacity: 1, 
                            rotate: [rotation, rotation + (Math.random() * 8 - 4), rotation - (Math.random() * 8 - 4), rotation]
                          } : { opacity: 0, y: 20 }}
                          transition={{ 
                            delay: index * 0.1 + 0.3,
                            duration: 0.8,
                            ease: "easeOut",
                            rotate: {
                              duration: 3 + Math.random() * 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          className="relative"
                          style={{ transform: `rotate(${rotation}deg)` }}
                        >
                            <div className={`relative flex-shrink-0 ${skill.name === "Yahoo Finance API" ? "w-56 h-48" : "w-48 h-48"}`}>
                              <img 
                                src={`/SVGStickyNotes/${svgFile}`}
                                alt={`Sticky note ${index + 1}`}
                                className={`w-full h-full drop-shadow-lg ${skill.name === "Yahoo Finance API" ? "object-fill" : "object-contain"}`}
                              />
                              
                              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pt-12" style={{ 
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                width: '100%',
                                height: '100%'
                              }}>
                                <div className="w-20 h-20 mb-4 flex items-center justify-center relative" style={{
                                  marginLeft: 'auto',
                                  marginRight: 'auto'
                                }}>
                                  {Array.isArray(skill.logo) ? (
                                    <div className="flex gap-1">
                                      {skill.logo.map((logo, logoIndex) => (
                                        <div key={logoIndex} className="relative">
                                          <img 
                                            src={logo} 
                                            alt={`${skill.name} ${logoIndex + 1}`}
                                            className="w-10 h-10 object-contain"
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                      <div className="relative">
                                        <img 
                                          src={skill.logo} 
                                          alt={skill.name}
                                          className="w-full h-full object-contain"
                                        />
                                    </div>
                                  )}
                        </div>

                                <div className="relative w-full flex justify-center items-center" style={{
                                  textAlign: 'center',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}>
                                  <span 
                                    className="text-base font-bold leading-tight"
                              style={{ 
                                color: vibrantColors.purple,
                                      textAlign: 'center',
                                      display: 'block',
                                      width: '100%'
                                    }}
                                  >
                                    {skill.name}
                                  </span>
                                </div>
                        </div>
                      </div>
                          </motion.div>
                        )
                      })}
                  </div>
                )}
                  </motion.div>
                ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
