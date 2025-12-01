"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { usarIdioma } from "@/contexts/language-context"

interface PropsNavegacion {
  seccionActual: string
}

export default function Navegacion({ seccionActual }: PropsNavegacion) {
  const [estaAbierto, establecerEstaAbierto] = useState(false)
  const { idioma, establecerIdioma, traducir } = usarIdioma()

  const coloresVibrantes = {
    morado: "#3e196e",
    coral: "#d46c76",
    naranja: "#ffc07c"
  }

  const itemsNavegacion = [
    { id: "hero", claveEtiqueta: "nav.inicio" },
    { id: "about", claveEtiqueta: "nav.sobreMi" },
    { id: "skills", claveEtiqueta: "nav.habilidades" },
    { id: "gallery", claveEtiqueta: "nav.trabajos" },
    { id: "contact", claveEtiqueta: "nav.contacto" },
  ]

  const alternarIdioma = (activado: boolean) => {
    establecerIdioma(activado ? "en" : "es")
  }

  const desplazarASeccion = (idSeccion: string) => {
    const elemento = document.getElementById(idSeccion)
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" })
    }
    establecerEstaAbierto(false)
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
            backgroundColor: `${coloresVibrantes.coral}10`,
            borderColor: coloresVibrantes.coral,
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => desplazarASeccion("hero")}
            >
              <img 
                src="/logoYPerfil/Logo.svg" 
                alt="Logo Portafolio" 
                className="h-8 w-auto"
              />
            </motion.div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium" style={{ color: coloresVibrantes.morado }}>
                ES
              </span>
              <Switch
                checked={idioma === "en"}
                onCheckedChange={alternarIdioma}
                style={{
                  backgroundColor: idioma === "en" ? coloresVibrantes.coral : coloresVibrantes.morado + "40"
                }}
              />
              <span className="text-xs font-medium" style={{ color: coloresVibrantes.morado }}>
                EN
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {itemsNavegacion.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => desplazarASeccion(item.id)}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
                style={{ 
                  color: seccionActual === item.id ? coloresVibrantes.morado : coloresVibrantes.coral
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {traducir(item.claveEtiqueta)}
                {seccionActual === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: coloresVibrantes.morado }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.button 
            className="md:hidden p-2" 
            onClick={() => establecerEstaAbierto(!estaAbierto)} 
            whileTap={{ scale: 0.95 }}
            style={{ color: coloresVibrantes.morado }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="w-full h-0.5 block"
                style={{ backgroundColor: coloresVibrantes.morado }}
                animate={estaAbierto ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="w-full h-0.5 block mt-1"
                style={{ backgroundColor: coloresVibrantes.morado }}
                animate={estaAbierto ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-full h-0.5 block mt-1"
                style={{ backgroundColor: coloresVibrantes.morado }}
                animate={estaAbierto ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
              />
            </div>
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={estaAbierto ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className={`md:hidden mt-4 rounded-2xl p-6 border-2 ${estaAbierto ? "block" : "hidden"}`}
          style={{ 
            backgroundColor: `${coloresVibrantes.coral}10`,
            borderColor: coloresVibrantes.coral,
            backdropFilter: 'blur(10px)'
          }}
        >
          {itemsNavegacion.map((item, indice) => (
            <motion.button
              key={item.id}
              onClick={() => desplazarASeccion(item.id)}
              className="block w-full text-left py-3 px-4 rounded-lg transition-colors"
              style={{ 
                color: seccionActual === item.id ? coloresVibrantes.morado : coloresVibrantes.coral,
                backgroundColor: seccionActual === item.id ? `${coloresVibrantes.morado}20` : 'transparent'
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: indice * 0.1 }}
            >
              {traducir(item.claveEtiqueta)}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}
