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
        "Aplicación web de batallas Pokémon donde los usuarios pueden crear equipos de Pokémon, desafiar a amigos y participar en combates estratégicos. \n" +
        "El sistema incluye gestión de usuarios, creación de equipos personalizados, sistema de batallas por turnos, historial de partidas, tabla de liderazgo y sistema de amigos. \n" +
        "Los usuarios pueden registrarse, crear múltiples equipos con diferentes Pokémon, desafiar a otros jugadores y seguir su progreso a través de estadísticas detalladas.",
      image: "GifsFotosPokemonFight/FotoPokemonFight.png",
      category: "Aplicación Web",
      technologies: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/ECF2001/Pokemon-Fight",
      featured: true,
      media: [
        { type: 'image', src: '/GifsFotosPokemonFight/PaginaPrincipal.png', alt: 'Pokémon Fight - Página Principal' },
        { type: 'gif', src: '/GifsFotosPokemonFight/PaginaEstadisticas.gif', alt: 'Pokémon Fight - Página Estadísticas' },
        { type: 'gif', src: '/GifsFotosPokemonFight/PaginaBatalla2.gif', alt: 'Pokémon Fight - Página Batalla 2' },
        { type: 'gif', src: '/GifsFotosPokemonFight/PaginaBatalla1.gif', alt: 'Pokémon Fight - Página Batalla 1' },
        { type: 'image', src: '/GifsFotosPokemonFight/PaginaJugarPartida.png', alt: 'Pokémon Fight - Página Jugar Partida' },
        { type: 'gif', src: '/GifsFotosPokemonFight/PaginaCrearEquipo.gif', alt: 'Pokémon Fight - Página Crear Equipo' },
        { type: 'gif', src: '/GifsFotosPokemonFight/PaginaEquipos.gif', alt: 'Pokémon Fight - Página Equipos' },
        { type: 'gif', src: '/GifsFotosPokemonFight/PaginaPerfil.gif', alt: 'Pokémon Fight - Página Perfil' },
        { type: 'gif', src: '/GifsFotosPokemonFight/PaginaSobreNosotros.gif', alt: 'Pokémon Fight - Página Sobre Nosotros' },
        { type: 'gif', src: '/GifsFotosPokemonFight/PaginaSobreProducto.gif', alt: 'Pokémon Fight - Página Sobre Producto' },
        { type: 'gif', src: '/GifsFotosPokemonFight/PaginaRegistro.gif', alt: 'Pokémon Fight - Página Registro' },
        { type: 'gif', src: '/GifsFotosPokemonFight/PaginaInicioSesion.gif', alt: 'Pokémon Fight - Página Inicio Sesión' }
      ]
    },
    {
      id: "2",
      title: "Wealthify",
      description: "Plataforma de Inversión en Bolsa de Valores",
      longDescription:
        "Wealthify es una plataforma web integral de inversión en bolsa de valores que conecta asesores financieros con inversionistas. La aplicación permite a los usuarios registrarse como asesores o clientes, gestionar portafolios de inversión, visualizar datos de mercado en tiempo real, realizar compras y ventas de acciones con PayPal, y generar reportes financieros detallados.",
      image: "GifsFotosWealthify/FotoWealthify.png",
      category: "Aplicación Web",
      technologies: ["C#", "ASP.NET", "Entity Framework", "SQL Server", "HTML", "CSS", "JavaScript", "Cloudinary", "Yahoo Finance API", "PayPal API"],
      githubUrl: "https://github.com/angelicarodriguezco/Proyecto2Grupo3",
      featured: false,
      media: [
        { type: 'image', src: '/GifsFotosWealthify/PaginaCompraVentaAcciones.gif', alt: 'Wealthify - Página Compra y Venta de Acciones' },
        { type: 'image', src: '/GifsFotosWealthify/PaginaDashboardFinanciero.gif', alt: 'Wealthify - Página Dashboard Financiero' },
        { type: 'image', src: '/GifsFotosWealthify/PaginaGestionUsuarioComisiones.gif', alt: 'Wealthify - Página Gestión de Usuario y Comisiones' },
        { type: 'image', src: '/GifsFotosWealthify/PaginaInicioSesion.png', alt: 'Wealthify - Página Inicio de Sesión' },
        { type: 'image', src: '/GifsFotosWealthify/PaginaLanding.gif', alt: 'Wealthify - Página Landing Page' },
        { type: 'image', src: '/GifsFotosWealthify/PaginaLanding2.gif', alt: 'Wealthify - Página Landing Page 2' },
        { type: 'image', src: '/GifsFotosWealthify/PaginaLogOut.png', alt: 'Wealthify - Página Cerrar Sesión' },
        { type: 'image', src: '/GifsFotosWealthify/PaginaPayPal.gif', alt: 'Wealthify - Página PayPal' },
        { type: 'image', src: '/GifsFotosWealthify/PaginaPerfil.gif', alt: 'Wealthify - Página Perfil' },
        { type: 'image', src: '/GifsFotosWealthify/PaginaPrincipal.gif', alt: 'Wealthify - Página Principal' },
        { type: 'image', src: '/GifsFotosWealthify/PaginaRegistro.gif', alt: 'Wealthify - Página Registro' },
        { type: 'image', src: '/GifsFotosWealthify/PaginaSolicitudes.gif', alt: 'Wealthify - Página Solicitudes' }
      ]
    },
    {
      id: "3",
      title: "Flickr Favorites",
      description: "Buscador y gestor de imágenes favoritas de Flickr",
      longDescription:
        "FlickrFavorites es una aplicación web que permite a los usuarios buscar imágenes de Flickr, marcarlas como favoritas y gestionar su colección personal de imágenes favoritas. La aplicación incluye una galería de búsqueda de imágenes, y un panel de gestión de favoritos donde los usuarios pueden editar títulos de sus imágenes guardadas.",
      image: "GifsFotosFlickrFavorites/FotoFlickrFavorites.png",
      category: "Aplicación Web",
      technologies: ["React", "Node.js", "MongoDB", "Jest", "Flickr API"],
      githubUrl: "https://github.com/angelicarodriguezco/FlickrFavorites",
      featured: true,
      media: [
        { type: 'image', src: '/GifsFotosFlickrFavorites/PaginaFavoritos.png', alt: 'Flickr Favorites - Página Favoritos' },
        { type: 'image', src: '/GifsFotosFlickrFavorites/PaginaGaleria.gif', alt: 'Flickr Favorites - Página Galeria' },
        { type: 'image', src: '/GifsFotosFlickrFavorites/PaginaInicio.gif', alt: 'Flickr Favorites - Página Inicio' },
        { type: 'image', src: '/GifsFotosFlickrFavorites/PaginaLogin.png', alt: 'Flickr Favorites - Página Login' },
        { type: 'image', src: '/GifsFotosFlickrFavorites/PaginaPerfil.png', alt: 'Flickr Favorites - Página Perfil' },
        { type: 'image', src: '/GifsFotosFlickrFavorites/PaginaRegistro.png', alt: 'Flickr Favorites - Página Registro' }
      ]
    },
    {
      id: "4",
      title: "MiRecetario",
      description: "Gestor de recetas con planificación de menús y listas de compras",
      longDescription:
        "MiRecetario es una aplicación diseñada para facilitar la gestión de recetas, la planificación de menús semanales y la organización de listas de compras. La idea principal del proyecto es ofrecer una plataforma donde los usuarios puedan crear, editar y clasificar sus recetas, asignarlas a un plan de comidas semanal y generar una lista de ingredientes por comprar para sus recetas.",
      image: "GifsFotosMiRecetario/FotoMiRecetario.png",
      category: "Aplicación Web",
      technologies: ["Java", "TypeScript", "React", "MySQL", "Spring Boot", "Node.js"],
      githubUrl: "https://github.com/angelicarodriguezco/MiRecetario",
      featured: false,
      media: [
        { type: 'image', src: '/GifsFotosMiRecetario/PaginaCategoriasEtiquetas.gif', alt: 'MiRecetario - Página Categorias y Etiquetas' },
        { type: 'image', src: '/GifsFotosMiRecetario/PaginaListaCompras.png', alt: 'MiRecetario - Página Lista de Compras' },
        { type: 'image', src: '/GifsFotosMiRecetario/PaginaLogIn.png', alt: 'MiRecetario - Página Inicio de Sesión' },
        { type: 'image', src: '/GifsFotosMiRecetario/PaginaMenuSemanal.gif', alt: 'MiRecetario - Página Menu Semanal' },
        { type: 'image', src: '/GifsFotosMiRecetario/PaginaMisRecetas.gif', alt: 'MiRecetario - Página Mis Recetas' },
        { type: 'image', src: '/GifsFotosMiRecetario/PaginaPerfil.png', alt: 'MiRecetario - Página Perfil' },
        { type: 'image', src: '/GifsFotosMiRecetario/PaginaRegistro.png', alt: 'MiRecetario - Página Registro de Usuario' }
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

      <AnimatePresence>
        {selectedProjectShelby !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 backdrop-blur-md"
              style={{ backgroundColor: '#00000080' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectShelby(null)}
            />

            <motion.div
              className="relative w-full h-[calc(100vh-32px)] overflow-y-auto"
              style={{
                backgroundImage: 'url(/FondoModal.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <motion.button
                className="fixed top-0 right-0 z-10 text-[#000000] text-sm font-semibold hover:text-[#000000]/70 transition-colors uppercase h-8 px-4 flex items-center"
                onClick={() => setSelectedProjectShelby(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CLOSE
              </motion.button>

              <div className="grid grid-cols-24 h-full">
                <motion.div
                  className="col-span-14 flex flex-col gap-6 px-4 py-8 overflow-y-auto scrollbar-hide"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
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

                <motion.div
                  className="col-span-10 px-12 py-40 flex flex-col justify-center"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-5xl font-bold text-[#000000] mb-4">
                        {selectedProjectShelby?.title}
                      </h2>
                      <p className="text-base text-[#000000] leading-relaxed mb-4">
                        {selectedProjectShelby?.description}
                      </p>
                      <span className="text-sm text-[#000000]">
                        2024
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-9 gap-4">
                        <p className="text-sm font-semibold text-[#000000] uppercase col-span-3">CATEGORÍA</p>
                        <p className="text-sm text-[#000000] col-span-6">
                          {selectedProjectShelby?.category}
                        </p>
                      </div>

                      <div className="grid grid-cols-9 gap-4">
                        <p className="text-sm font-semibold text-[#000000] uppercase col-span-3">DESCRIPCIÓN</p>
                        <p className="text-base text-[#000000] col-span-6 leading-relaxed">
                          {selectedProjectShelby?.longDescription}
                        </p>
                      </div>

                      <div className="grid grid-cols-9 gap-4">
                        <p className="text-sm font-semibold text-[#000000] uppercase col-span-3">TECNOLOGÍAS USADAS</p>
                        <p className="text-sm text-[#000000] col-span-6">
                          {selectedProjectShelby?.technologies.join(', ')}
                        </p>
                      </div>

                      <div className="pt-4">
                        <a
                          href={selectedProjectShelby?.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-semibold text-[#000000] hover:text-[#000000]/70 transition-colors uppercase gap-2"
                        >
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 -3.93402e-07V9L7.2002 9V3.07324L1.27441 8.99805L0.00195313 7.72559L5.92676 1.7998L0 1.7998L0 0L9 -3.93402e-07Z" fill="#000000"></path>
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
