"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeroSection from "@/components/seccion-hero"
import AboutSection from "@/components/seccion-acerca-de"
import SkillsSection from "@/components/seccion-habilidades"
import GallerySection from "@/components/seccion-galeria"
import ContactSection from "@/components/seccion-contacto"
import Navigation from "@/components/navegacion"
import ScrollToTop from "@/components/scroll-to-top"
import CustomCursor from "@/components/custom-cursor"
import LoadingScreen from "@/components/loading-screen"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState("hero")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "gallery", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Navigation currentSection={currentSection} />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <GallerySection />
            <ContactSection />
            <ScrollToTop />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
