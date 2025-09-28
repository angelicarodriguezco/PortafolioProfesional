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
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const vibrantColors = {
    purple: "#3e196e",
    coral: "#d46c76",
    orange: "#ffc07c"
  }

  const projects: Project[] = [
    {
      id: "1",
      title: "Plataforma E-Commerce",
      description: "Solución de comercio electrónico moderna con características avanzadas",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      image: "/placeholder.svg?key=ecommerce",
      category: "Aplicación Web",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "2",
      title: "Dashboard de Gestión de Tareas",
      description: "Herramienta colaborativa de gestión de proyectos",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      image: "/placeholder.svg?key=dashboard",
      category: "Aplicación Web",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "3",
      title: "App de Banca Móvil",
      description: "Diseño de interfaz de banca móvil segura",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      image: "/placeholder.svg?key=mobile",
      category: "UI/UX",
      technologies: ["Figma", "Principle", "Adobe XD", "InVision", "Sketch"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: "4",
      title: "Generador de Contenido IA",
      description: "Plataforma de creación de contenido impulsada por IA",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      image: "/placeholder.svg?key=ai",
      category: "Aplicación Web",
      technologies: ["Python", "FastAPI", "React", "OpenAI", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "5",
      title: "Sistema de Identidad de Marca",
      description: "Sistema completo de identidad de marca y diseño",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      image: "/placeholder.svg?key=brand",
      category: "Diseño",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "InDesign"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: "6",
      title: "Plataforma Inmobiliaria",
      description: "Sistema de listado y gestión de propiedades",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      image: "/placeholder.svg?key=realestate",
      category: "Aplicación Web",
      technologies: ["Next.js", "Supabase", "Mapbox", "Tailwind", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const categories = ["Todos", "Aplicación Web", "UI/UX", "Diseño"]

  const filteredProjects =
    selectedCategory === "Todos" ? projects : projects.filter((project) => project.category === selectedCategory)

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
                Portafolio
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

          <motion.div variants={itemVariants} className="flex justify-center">
            <div 
              className="flex flex-wrap gap-2 p-2 rounded-2xl border-2"
              style={{ 
                backgroundColor: `${vibrantColors.coral}10`,
                borderColor: vibrantColors.coral
              }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-6 py-3 rounded-xl font-medium transition-all duration-300"
                  style={{
                    backgroundColor: selectedCategory === category 
                      ? `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral})`
                      : 'transparent',
                    color: selectedCategory === category 
                      ? 'white' 
                      : vibrantColors.purple,
                    border: selectedCategory === category 
                      ? 'none' 
                      : `2px solid ${vibrantColors.coral}`
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
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
                  className={project.featured ? "md:col-span-2 lg:col-span-2" : ""}
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
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                          project.featured ? "h-64" : "h-48"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <motion.div
                        className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                      >
                        <Button
                          size="sm"
                          className="text-white border-0"
                          style={{ 
                            background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral})` 
                          }}
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.liveUrl, "_blank")
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo en Vivo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-2"
                          style={{ 
                            borderColor: vibrantColors.orange,
                            color: vibrantColors.purple,
                            backgroundColor: `${vibrantColors.orange}20`
                          }}
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.githubUrl, "_blank")
                          }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </Button>
                      </motion.div>

                      {project.featured && (
                        <Badge 
                          className="absolute top-4 left-4 text-white"
                          style={{ 
                            background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral})` 
                          }}
                        >
                          Destacado
                        </Badge>
                      )}
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

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1" onClick={() => window.open(selectedProject.liveUrl, "_blank")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Demo en Vivo
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
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
