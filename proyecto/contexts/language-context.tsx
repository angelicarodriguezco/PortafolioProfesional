"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { translations as datosTraducciones } from "@/translations/translations"

type Idioma = "es" | "en"

interface TipoContextoIdioma {
  idioma: Idioma
  establecerIdioma: (idioma: Idioma) => void
  traducir: (clave: string) => string
}

const ContextoIdioma = createContext<TipoContextoIdioma | undefined>(undefined)

export function ProveedorIdioma({ children }: { children: ReactNode }) {
  const [idioma, establecerIdioma] = useState<Idioma>("es")
  const [montado, establecerMontado] = useState(false)

  useEffect(() => {
    establecerMontado(true)
  }, [])

  const manejarEstablecerIdioma = (idiomaSeleccionado: Idioma) => {
    establecerIdioma(idiomaSeleccionado)
    if (montado) {
      localStorage.setItem("language", idiomaSeleccionado)
    }
  }

  const traducir = (clave: string): string => {
    const claves = clave.split(".")
    let valor: any = datosTraducciones[idioma]
    
    for (const k of claves) {
      valor = valor?.[k]
    }
    
    return valor || clave
  }

  return (
    <ContextoIdioma.Provider value={{ idioma, establecerIdioma: manejarEstablecerIdioma, traducir }}>
      {children}
    </ContextoIdioma.Provider>
  )
}

export function usarIdioma() {
  const contexto = useContext(ContextoIdioma)
  if (contexto === undefined) {
    throw new Error("usarIdioma debe usarse dentro de un ProveedorIdioma")
  }
  return contexto
}

