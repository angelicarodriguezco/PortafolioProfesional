"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  category: string
  technologies: string[]
  githubUrl: string
  featured: boolean
}

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const vibrantColors = {
    purple: "#3e196e",
    coral: "#d46c76",
    orange: "#ffc07c"
  }

  const projects: Project[] = [
    {
      id: "1",
      title: "Pokémon Fight",
      description: "Sistema de Batallas Pokémon",
      longDescription:
        "Aplicación web de batallas Pokémon donde los usuarios pueden crear equipos de Pokémon, desafiar a amigos y participar en combates estratégicos. El sistema incluye gestión de usuarios, creación de equipos personalizados, sistema de batallas por turnos, historial de partidas, tabla de liderazgo y sistema de amigos. Los usuarios pueden registrarse, crear múltiples equipos con diferentes Pokémon, desafiar a otros jugadores y seguir su progreso a través de estadísticas detalladas.",
      image: "/placeholder.svg?key=dashboard",
      category: "Aplicación Web",
      technologies: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/ECF2001/Pokemon-Fight",
      featured: true,
    },
    {
      id: "2",
      title: "Wealthify",
      description: "Plataforma de Inversión en Bolsa de Valores",
      longDescription:
        "Wealthify es una plataforma web integral de inversión en bolsa de valores que conecta asesores financieros con inversionistas. La aplicación permite a los usuarios registrarse como asesores o clientes, gestionar portafolios de inversión, visualizar datos de mercado en tiempo real, realizar compras y ventas de acciones con PayPal, y generar reportes financieros detallados.",
      image: "/placeholder.svg?key=mobile",
      category: "Aplicación Web",
      technologies: ["C#", "ASP.NET", "Entity Framework", "SQL Server", "HTML", "CSS", "JavaScript", "Cloudinary", "Yahoo Finance API", "PayPal API"],
      githubUrl: "https://github.com/angelicarodriguezco/Proyecto2Grupo3",
      featured: false,
    },
    {
      id: "3",
      title: "Flickr Favorites",
      description: "Buscador y gestor de imágenes favoritas de Flickr",
      longDescription:
        "FlickrFavorites es una aplicación web que permite a los usuarios buscar imágenes de Flickr, marcarlas como favoritas y gestionar su colección personal de imágenes favoritas. La aplicación incluye una galería de búsqueda de imágenes, y un panel de gestión de favoritos donde los usuarios pueden editar títulos de sus imágenes guardadas.",
      image: "/placeholder.svg?key=ai",
      category: "Aplicación Web",
      technologies: ["React", "Node.js", "MongoDB", "Jest", "Flickr API"],
      githubUrl: "https://github.com/angelicarodriguezco/FlickrFavorites",
      featured: true,
    },
    {
      id: "4",
      title: "MiRecetario",
      description: "Gestor de recetas con planificación de menús y listas de compras",
      longDescription:
        "MiRecetario es una aplicación diseñada para facilitar la gestión de recetas, la planificación de menús semanales y la organización de listas de compras. La idea principal del proyecto es ofrecer una plataforma donde los usuarios puedan crear, editar y clasificar sus recetas, asignarlas a un plan de comidas semanal y generar una lista de ingredientes por comprar para sus recetas.",
      image: "/placeholder.svg?key=brand",
      category: "Aplicación Web",
      technologies: ["Java", "TypeScript", "React", "MySQL", "Spring Boot", "Node.js"],
      githubUrl: "https://github.com/angelicarodriguezco/MiRecetario",
      featured: false,
    }
  ]

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
    <section id="gallery" className="py-24 bg-white">
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
                Proyectos
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
              Trabajos Seleccionados
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-balance leading-relaxed" style={{ color: vibrantColors.purple }}>
              Una muestra de proyectos que demuestran mi experiencia en desarrollo web, diseño UI/UX y resolución creativa
              de problemas
            </p>
          </motion.div>


          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  <Card
                    className="group overflow-hidden bg-white border-2 hover:shadow-lg transition-all duration-500 cursor-pointer h-full"
                    style={{ 
                      borderColor: vibrantColors.coral,
                      backgroundColor: `${vibrantColors.coral}05`
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                      />


                    </div>

                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 
                          className="text-xl font-semibold transition-colors"
                          style={{ color: vibrantColors.purple }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: vibrantColors.purple }}>{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md border"
                            style={{ 
                              backgroundColor: `${vibrantColors.coral}20`,
                              color: vibrantColors.purple,
                              borderColor: vibrantColors.coral
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span 
                            className="px-2 py-1 text-xs rounded-md border"
                            style={{ 
                              backgroundColor: `${vibrantColors.orange}20`,
                              color: vibrantColors.purple,
                              borderColor: vibrantColors.orange
                            }}
                          >
                            +{project.technologies.length - 3} más
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-4 h-4" />
              </Button>

              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-t-2xl" />
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-bold text-foreground">{selectedProject.title}</h3>
                    <Badge variant="secondary">{selectedProject.category}</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">Tecnologías Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    variant="outline"
                    className="px-8 bg-transparent"
                    onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Ver Código Fuente
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
