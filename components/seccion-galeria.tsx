"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
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
  media: {
    type: 'image' | 'video' | 'gif'
    src: string
    alt: string
  }[]
}

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [selectedProjectShelby, setSelectedProjectShelby] = useState<Project | null>(null)

  useEffect(() => {
    if (!selectedProject || !selectedProject.media || selectedProject.media.length <= 1) return

    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => 
        prevIndex < selectedProject.media.length - 1 ? prevIndex + 1 : 0
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [selectedProject, currentMediaIndex])

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
      image: "/FotoPokemonFight.png",
      category: "Aplicación Web",
      technologies: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/ECF2001/Pokemon-Fight",
      featured: true,
      media: [
        { type: 'image', src: '/FotoPokemonFight.png', alt: 'Pokémon Fight - Pantalla principal' },
        { type: 'gif', src: '/pokemon-battle.gif', alt: 'Pokémon Fight - Batalla en acción' },
        { type: 'image', src: '/pokemon-team.png', alt: 'Pokémon Fight - Creación de equipos' },
        { type: 'video', src: '/pokemon-demo.mp4', alt: 'Pokémon Fight - Demo completo' }
      ]
    },
    {
      id: "2",
      title: "Wealthify",
      description: "Plataforma de Inversión en Bolsa de Valores",
      longDescription:
        "Wealthify es una plataforma web integral de inversión en bolsa de valores que conecta asesores financieros con inversionistas. La aplicación permite a los usuarios registrarse como asesores o clientes, gestionar portafolios de inversión, visualizar datos de mercado en tiempo real, realizar compras y ventas de acciones con PayPal, y generar reportes financieros detallados.",
      image: "/FotoWealthify.png",
      category: "Aplicación Web",
      technologies: ["C#", "ASP.NET", "Entity Framework", "SQL Server", "HTML", "CSS", "JavaScript", "Cloudinary", "Yahoo Finance API", "PayPal API"],
      githubUrl: "https://github.com/angelicarodriguezco/Proyecto2Grupo3",
      featured: false,
      media: [
        { type: 'image', src: '/FotoWealthify.png', alt: 'Wealthify - Dashboard principal' },
        { type: 'gif', src: '/wealthify-trading.gif', alt: 'Wealthify - Proceso de trading' },
        { type: 'image', src: '/wealthify-portfolio.png', alt: 'Wealthify - Gestión de portafolio' },
        { type: 'video', src: '/wealthify-demo.mp4', alt: 'Wealthify - Demo completo' }
      ]
    },
    {
      id: "3",
      title: "Flickr Favorites",
      description: "Buscador y gestor de imágenes favoritas de Flickr",
      longDescription:
        "FlickrFavorites es una aplicación web que permite a los usuarios buscar imágenes de Flickr, marcarlas como favoritas y gestionar su colección personal de imágenes favoritas. La aplicación incluye una galería de búsqueda de imágenes, y un panel de gestión de favoritos donde los usuarios pueden editar títulos de sus imágenes guardadas.",
      image: "/FotoFlickrFavorites.png",
      category: "Aplicación Web",
      technologies: ["React", "Node.js", "MongoDB", "Jest", "Flickr API"],
      githubUrl: "https://github.com/angelicarodriguezco/FlickrFavorites",
      featured: true,
      media: [
        { type: 'image', src: '/FotoFlickrFavorites.png', alt: 'Flickr Favorites - Búsqueda de imágenes' },
        { type: 'gif', src: '/flickr-search.gif', alt: 'Flickr Favorites - Búsqueda en tiempo real' },
        { type: 'image', src: '/flickr-favorites.png', alt: 'Flickr Favorites - Panel de favoritos' }
      ]
    },
    {
      id: "4",
      title: "MiRecetario",
      description: "Gestor de recetas con planificación de menús y listas de compras",
      longDescription:
        "MiRecetario es una aplicación diseñada para facilitar la gestión de recetas, la planificación de menús semanales y la organización de listas de compras. La idea principal del proyecto es ofrecer una plataforma donde los usuarios puedan crear, editar y clasificar sus recetas, asignarlas a un plan de comidas semanal y generar una lista de ingredientes por comprar para sus recetas.",
      image: "/FotoMiRecetario.png",
      category: "Aplicación Web",
      technologies: ["Java", "TypeScript", "React", "MySQL", "Spring Boot", "Node.js"],
      githubUrl: "https://github.com/angelicarodriguezco/MiRecetario",
      featured: false,
      media: [
        { type: 'image', src: '/FotoMiRecetario.png', alt: 'MiRecetario - Dashboard principal' },
        { type: 'gif', src: '/recetario-cooking.gif', alt: 'MiRecetario - Proceso de cocina' },
        { type: 'image', src: '/recetario-menu.png', alt: 'MiRecetario - Planificación de menús' },
        { type: 'video', src: '/recetario-demo.mp4', alt: 'MiRecetario - Demo completo' }
      ]
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
    <section id="gallery" className="py-24">
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
              Trabajos Seleccionados
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Una muestra de proyectos que demuestran mi experiencia en desarrollo web, diseño UI/UX y resolución creativa de problemas
            </p>
          </motion.div>


          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => setSelectedProjectShelby(project)}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <motion.div
                    className={`relative overflow-hidden rounded-2xl ${
                      index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className={`space-y-6 ${
                      index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center space-x-4 text-sm" style={{ color: vibrantColors.coral }}>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <span>{project.category}</span>
                        <span>2024</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold" style={{ color: vibrantColors.purple }}>
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg leading-relaxed" style={{ color: vibrantColors.purple }}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{ 
                            backgroundColor: `${vibrantColors.coral}20`,
                            color: vibrantColors.purple,
                            borderColor: vibrantColors.coral
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => {
              setSelectedProject(null)
              setCurrentMediaIndex(0)
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10"
                onClick={() => {
                  setSelectedProject(null)
                  setCurrentMediaIndex(0)
                }}
              >
                <X className="w-4 h-4" />
              </Button>

              <div className="relative h-full">
                <motion.div
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-[32rem] h-[32rem] z-20"
                >
                  {selectedProject.media && selectedProject.media.length > 0 ? (
                    <motion.div
                      key={currentMediaIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {selectedProject.media[currentMediaIndex]?.type === 'video' ? (
                        <video
                          src={selectedProject.media[currentMediaIndex].src}
                          className="max-w-full max-h-full object-contain rounded-lg"
                          autoPlay
                          loop
                          muted
                        />
                      ) : (
                        <img
                          src={selectedProject.media[currentMediaIndex].src}
                          alt={selectedProject.media[currentMediaIndex].alt}
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      )}
                    </motion.div>
                  ) : (
                    <img
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  )}
                  
                  {selectedProject.media && selectedProject.media.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentMediaIndex(
                          currentMediaIndex > 0 ? currentMediaIndex - 1 : selectedProject.media.length - 1
                        )}
                        disabled={!selectedProject.media || selectedProject.media.length <= 1}
                        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl hover:text-white/70 transition-colors disabled:opacity-50"
                      >
                        ^
                      </button>
                      
                      <button
                        onClick={() => setCurrentMediaIndex(
                          currentMediaIndex < selectedProject.media.length - 1 ? currentMediaIndex + 1 : 0
                        )}
                        disabled={!selectedProject.media || selectedProject.media.length <= 1}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl hover:text-white/70 transition-colors disabled:opacity-50"
                      >
                        v
                      </button>
                      
                    </>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="ml-[40rem] bg-white rounded-2xl shadow-xl border border-gray-200 h-full p-8 overflow-y-auto"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                      <p className="text-lg text-muted-foreground mb-4">{selectedProject.description}</p>
                      <Badge variant="outline" className="mb-4">
                        {selectedProject.category}
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Descripción</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedProject.longDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Tecnologías</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center gap-4">
                        <Button asChild>
                          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Ver en GitHub
                          </a>
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => {
                            setSelectedProjectShelby(selectedProject)
                            setSelectedProject(null)
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Ver Detalles
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Modal - Shelby Kay Style */}
      <AnimatePresence>
        {selectedProjectShelby !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Semi-transparent Background - Shelby Kay Style */}
            <motion.div
              className="absolute inset-0 backdrop-blur-md"
              style={{ backgroundColor: '#eee5d780' }} // Exact Shelby Kay color
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectShelby(null)}
            />

            {/* Modal Content - Shelby Kay Style */}
            <motion.div
              className="relative w-full h-[calc(100vh-32px)] bg-[#aea098eb] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {/* Close Button */}
              <motion.button
                className="fixed top-0 right-0 z-10 text-black text-xs font-medium hover:text-black/70 transition-colors uppercase h-8 px-4 flex items-center"
                onClick={() => setSelectedProjectShelby(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CLOSE
              </motion.button>

              <div className="grid grid-cols-24 h-full">
                {/* Left Panel - Carousel (16 columns) */}
                <motion.div
                  className="col-span-16 flex flex-col gap-6 px-4 py-8 overflow-y-auto scrollbar-hide"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {/* Carousel Container - Shelby Kay Style */}
                  {selectedProjectShelby?.media?.map((media, index) => (
                    <div key={index} className="w-full max-w-[1200px] mx-auto">
                      {media.type === 'video' ? (
                        <video
                          src={media.src}
                          className="w-full h-auto object-cover rounded-lg"
                          controls
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <img
                          src={media.src}
                          alt={media.alt}
                          className="w-full h-auto object-cover rounded-lg"
                          width="1200"
                          height="768"
                        />
                      )}
                    </div>
                  ))}
                </motion.div>

                {/* Right Panel - Project Details (8 columns) */}
                <motion.div
                  className="col-span-8 px-10 py-40 flex flex-col justify-center"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-5xl font-bold text-[#393c2a] mb-4">
                        {selectedProjectShelby?.title}
                      </h2>
                      <p className="text-sm text-[#393c2a] leading-relaxed mb-4">
                        {selectedProjectShelby?.description}
                      </p>
                      <span className="text-xs text-[#393c2a]">
                        2024
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-9 gap-4">
                        <p className="text-xs font-semibold text-[#393c2a] uppercase col-span-3">STACK</p>
                        <p className="text-xs text-[#393c2a] col-span-6">
                          {selectedProjectShelby?.technologies.join(', ')}
                        </p>
                      </div>

                      <div className="grid grid-cols-9 gap-4">
                        <p className="text-xs font-semibold text-[#393c2a] uppercase col-span-3">CREDITS</p>
                        <p className="text-xs text-[#393c2a] col-span-6">Studio: Angélica Rodríguez</p>
                      </div>

                      <div className="pt-4">
                        <a
                          href={selectedProjectShelby?.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-semibold text-[#393c2a] hover:text-[#393c2a]/70 transition-colors uppercase gap-2"
                        >
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 -3.93402e-07V9L7.2002 9V3.07324L1.27441 8.99805L0.00195313 7.72559L5.92676 1.7998L0 1.7998L0 0L9 -3.93402e-07Z" fill="#393C2A"></path>
                          </svg>
                          VISIT
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
