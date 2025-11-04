"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SeccionHero from "@/components/seccion-hero"
import SeccionAcercaDe from "@/components/seccion-acerca-de"
import SeccionHabilidades from "@/components/seccion-habilidades"
import SeccionGaleria from "@/components/seccion-galeria"
import SeccionContacto from "@/components/seccion-contacto"
import Navegacion from "@/components/navegacion"
import ScrollToTop from "@/components/scroll-to-top"
import LoadingScreen from "@/components/loading-screen"

export default function Portafolio() {
  const [estaCargando, establecerEstaCargando] = useState(true)
  const [seccionActual, establecerSeccionActual] = useState("hero")

  useEffect(() => {
    const temporizador = setTimeout(() => {
      establecerEstaCargando(false)
    }, 1000)

    return () => clearTimeout(temporizador)
  }, [])

  useEffect(() => {
    const manejarDesplazamiento = () => {
      const secciones = ["hero", "about", "skills", "gallery", "contact"]
      const posicionDesplazamiento = window.scrollY + 100

      for (const seccion of secciones) {
        const elemento = document.getElementById(seccion)
        if (elemento) {
          const { offsetTop, offsetHeight } = elemento
          if (posicionDesplazamiento >= offsetTop && posicionDesplazamiento < offsetTop + offsetHeight) {
            establecerSeccionActual(seccion)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", manejarDesplazamiento)
    return () => window.removeEventListener("scroll", manejarDesplazamiento)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {estaCargando ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Navegacion seccionActual={seccionActual} />
            <SeccionHero />
            <SeccionAcercaDe />
            <SeccionHabilidades />
            <SeccionGaleria />
            <SeccionContacto />
            <ScrollToTop />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
