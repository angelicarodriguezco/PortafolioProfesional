"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MessageCircle, Github, Linkedin, Twitter, MapPin } from "lucide-react"
import { usarIdioma } from "@/contexts/language-context"

export default function SeccionContacto() {
  const { traducir } = usarIdioma()
  const referencia = useRef(null)
  const estaEnVista = useInView(referencia, { once: true, margin: "-100px" })
  const [datosFormulario, establecerDatosFormulario] = useState({
    name: "",
    email: "",
    message: ""
  })

  const coloresVibrantes = {
    morado: "#3e196e",
    coral: "#d46c76",
    naranja: "#ffc07c"
  }

  const manejarCambioInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    establecerDatosFormulario(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const manejarEnviar = (e: React.FormEvent) => {
    e.preventDefault()
    const asunto = encodeURIComponent(`${traducir("contact.emailSubject")} ${datosFormulario.name}`)
    const cuerpo = encodeURIComponent(`${traducir("contact.emailBodyName")} ${datosFormulario.name}\n${traducir("contact.emailBodyEmail")} ${datosFormulario.email}\n\n${traducir("contact.emailBodyMessage")}\n${datosFormulario.message}`)
    const urlGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=mariaangelica@rodriguezcoto.com&su=${asunto}&body=${cuerpo}`
    window.open(urlGmail, '_blank')
  }

  const manejarEnviarWhatsApp = () => {
    const mensaje = `${traducir("contact.whatsAppMessage")} ${datosFormulario.name} ${traducir("contact.whatsAppAnd")} ${datosFormulario.email}. ${datosFormulario.message}`
    const urlWhatsApp = `https://wa.me/50670589304?text=${encodeURIComponent(mensaje)}`
    window.open(urlWhatsApp, '_blank')
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/angelicarodriguezco", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/angelicarodriguezco", label: "LinkedIn" }
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${coloresVibrantes.morado}10` }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${coloresVibrantes.coral}10` }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: `linear-gradient(45deg, ${coloresVibrantes.morado}20, ${coloresVibrantes.coral}20, ${coloresVibrantes.naranja}20)` 
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={referencia}
          variants={containerVariants}
          initial="hidden"
          animate={estaEnVista ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 
              className="text-5xl md:text-7xl font-bold tracking-tight"
              style={{ 
                background: `linear-gradient(135deg, ${coloresVibrantes.morado}, ${coloresVibrantes.coral}, ${coloresVibrantes.naranja})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {traducir("contact.title")}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {traducir("contact.subtitle")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold" style={{ color: coloresVibrantes.morado }}>{traducir("contact.letsTalk")}</h3>
                <p className="text-xl leading-relaxed" style={{ color: coloresVibrantes.morado }}>
                  {traducir("contact.letsTalkDesc")}
                </p>
              </div>

                <form onSubmit={manejarEnviar} className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                        name="name"
                    placeholder={traducir("contact.name")}
                        value={datosFormulario.name}
                        onChange={manejarCambioInput}
                    className="w-full px-4 py-3 text-xl rounded-lg transition-colors focus:outline-none focus:border-opacity-50"
                        style={{ 
                      backgroundColor: `${coloresVibrantes.morado}20`,
                      borderColor: coloresVibrantes.morado,
                      color: coloresVibrantes.morado,
                      border: `1px solid ${coloresVibrantes.morado}`
                    }}
                    required
                  />
                  <input
                    type="email"
                        name="email"
                    placeholder={traducir("contact.email")}
                        value={datosFormulario.email}
                        onChange={manejarCambioInput}
                    className="w-full px-4 py-3 text-xl rounded-lg transition-colors focus:outline-none focus:border-opacity-50"
                        style={{ 
                      backgroundColor: `${coloresVibrantes.morado}20`,
                      borderColor: coloresVibrantes.morado,
                      color: coloresVibrantes.morado,
                      border: `1px solid ${coloresVibrantes.morado}`
                    }}
                      required
                    />
                  <textarea
                      name="message"
                    placeholder={traducir("contact.message")}
                      value={datosFormulario.message}
                      onChange={manejarCambioInput}
                    rows={5}
                    className="w-full px-4 py-3 text-xl rounded-lg transition-colors resize-none focus:outline-none focus:border-opacity-50"
                      style={{ 
                      backgroundColor: `${coloresVibrantes.morado}20`,
                      borderColor: coloresVibrantes.morado,
                      color: coloresVibrantes.morado,
                      border: `1px solid ${coloresVibrantes.morado}`
                      }}
                    required
                    />
                  </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                      type="submit"
                    className="flex-1 px-6 py-3 font-medium rounded-lg transition-colors relative overflow-hidden"
                      style={{ 
                      background: `linear-gradient(135deg, ${coloresVibrantes.morado}, ${coloresVibrantes.coral})`,
                      color: 'white'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                        >
                    <Mail className="w-5 h-5 inline mr-2" />
                    {traducir("contact.sendEmail")}
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={manejarEnviarWhatsApp}
                    className="flex-1 px-6 py-3 font-medium rounded-lg transition-colors relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${coloresVibrantes.coral}, ${coloresVibrantes.naranja})`,
                      color: 'white'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                        >
                    <MessageCircle className="w-5 h-5 inline mr-2" />
                    {traducir("contact.sendWhatsApp")}
                  </motion.button>
                </div>
                </form>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold" style={{ color: coloresVibrantes.morado }}>{traducir("contact.getInTouch")}</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-lg" style={{ backgroundColor: `${coloresVibrantes.morado}10` }}>
                    <Mail className="w-5 h-5" style={{ color: coloresVibrantes.coral }} />
                    <span className="text-xl" style={{ color: coloresVibrantes.morado }}>mariaangelica@rodriguezcoto.com</span>
              </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg" style={{ backgroundColor: `${coloresVibrantes.morado}10` }}>
                    <MessageCircle className="w-5 h-5" style={{ color: coloresVibrantes.coral }} />
                    <span className="text-xl" style={{ color: coloresVibrantes.morado }}>+506 7058 9304</span>
                    </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg" style={{ backgroundColor: `${coloresVibrantes.morado}10` }}>
                    <MapPin className="w-5 h-5" style={{ color: coloresVibrantes.coral }} />
                    <span className="text-xl" style={{ color: coloresVibrantes.morado }}>Costa Rica</span>
                      </div>
                    </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold" style={{ color: coloresVibrantes.morado }}>{traducir("contact.followMe")}</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg transition-all duration-300"
                      style={{ 
                        backgroundColor: `${coloresVibrantes.morado}20`,
                        borderColor: coloresVibrantes.morado,
                        border: `1px solid ${coloresVibrantes.morado}`
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" style={{ color: coloresVibrantes.coral }} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center pt-16">
            <div className="w-full border-t mb-8" style={{ borderColor: coloresVibrantes.coral }}></div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src="/logoYPerfil/Logo.svg" 
                alt="Logo" 
                className="w-8 h-8"
              />
              <p className="text-xl" style={{ color: coloresVibrantes.morado }}>{traducir("contact.footer")}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

