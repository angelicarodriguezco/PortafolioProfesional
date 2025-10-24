"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface NavigationProps {
  currentSection: string
}

export default function Navigation({ currentSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const vibrantColors = {
    purple: "#3e196e",
    coral: "#d46c76",
    orange: "#ffc07c"
  }

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Sobre Mí" },
    { id: "skills", label: "Habilidades Técnicas" },
    { id: "gallery", label: "Trabajos Seleccionados" },
    { id: "contact", label: "Contáctame" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          className="rounded-2xl px-6 py-4 flex items-center justify-between border-2"
          style={{ 
            backgroundColor: `${vibrantColors.coral}10`,
            borderColor: vibrantColors.coral,
            backdropFilter: 'blur(10px)'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img 
              src="/logoYPerfil/Logo.svg" 
              alt="Logo Portafolio" 
              className="h-8 w-auto"
            />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
                style={{ 
                  color: currentSection === item.id ? vibrantColors.purple : vibrantColors.coral
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {currentSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: vibrantColors.purple }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)} 
            whileTap={{ scale: 0.95 }}
            style={{ color: vibrantColors.purple }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="w-full h-0.5 block"
                style={{ backgroundColor: vibrantColors.purple }}
                animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="w-full h-0.5 block mt-1"
                style={{ backgroundColor: vibrantColors.purple }}
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-full h-0.5 block mt-1"
                style={{ backgroundColor: vibrantColors.purple }}
                animate={isOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
              />
            </div>
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className={`md:hidden mt-4 rounded-2xl p-6 border-2 ${isOpen ? "block" : "hidden"}`}
          style={{ 
            backgroundColor: `${vibrantColors.coral}10`,
            borderColor: vibrantColors.coral,
            backdropFilter: 'blur(10px)'
          }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-3 px-4 rounded-lg transition-colors"
              style={{ 
                color: currentSection === item.id ? vibrantColors.purple : vibrantColors.coral,
                backgroundColor: currentSection === item.id ? `${vibrantColors.purple}20` : 'transparent'
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}
