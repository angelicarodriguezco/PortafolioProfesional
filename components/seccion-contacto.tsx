"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MessageCircle, Github, Linkedin, Twitter, MapPin } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const vibrantColors = {
    purple: "#3e196e",
    coral: "#d46c76",
    orange: "#ffc07c"
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Mensaje de ${formData.name}`)
    const body = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mariaangelica@rodriguezcoto.com&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  const handleWhatsAppSubmit = () => {
    const message = `Hola! Me interesa trabajar contigo. Mi nombre es ${formData.name} y mi email es ${formData.email}. ${formData.message}`
    const whatsappUrl = `https://wa.me/50670589304?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
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
          style={{ backgroundColor: `${vibrantColors.purple}10` }}
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
          style={{ backgroundColor: `${vibrantColors.coral}10` }}
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
            background: `linear-gradient(45deg, ${vibrantColors.purple}20, ${vibrantColors.coral}20, ${vibrantColors.orange}20)` 
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
              Contáctame
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: vibrantColors.purple }}>
              Siempre entusiasmada de hablar sobre nuevos proyectos y oportunidades.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold" style={{ color: vibrantColors.purple }}>Hablemos</h3>
                <p className="leading-relaxed" style={{ color: vibrantColors.purple }}>
                  Envíame un mensaje y hablemos sobre cómo podemos trabajar juntos.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu Nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:border-opacity-50"
                    style={{ 
                      backgroundColor: `${vibrantColors.purple}20`,
                      borderColor: vibrantColors.purple,
                      color: vibrantColors.purple,
                      border: `1px solid ${vibrantColors.purple}`
                    }}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:border-opacity-50"
                    style={{ 
                      backgroundColor: `${vibrantColors.purple}20`,
                      borderColor: vibrantColors.purple,
                      color: vibrantColors.purple,
                      border: `1px solid ${vibrantColors.purple}`
                    }}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Tu Mensaje"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg transition-colors resize-none focus:outline-none focus:border-opacity-50"
                    style={{ 
                      backgroundColor: `${vibrantColors.purple}20`,
                      borderColor: vibrantColors.purple,
                      color: vibrantColors.purple,
                      border: `1px solid ${vibrantColors.purple}`
                    }}
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    type="submit"
                    className="flex-1 px-6 py-3 font-medium rounded-lg transition-colors relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral})`,
                      color: 'white'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-5 h-5 inline mr-2" />
                    Enviar Email
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 px-6 py-3 font-medium rounded-lg transition-colors relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${vibrantColors.coral}, ${vibrantColors.orange})`,
                      color: 'white'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5 inline mr-2" />
                    WhatsApp
                  </motion.button>
                </div>
              </form>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold" style={{ color: vibrantColors.purple }}>Ponte en Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-lg" style={{ backgroundColor: `${vibrantColors.purple}10` }}>
                    <Mail className="w-5 h-5" style={{ color: vibrantColors.coral }} />
                    <span style={{ color: vibrantColors.purple }}>mariaangelica@rodriguezcoto.com</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg" style={{ backgroundColor: `${vibrantColors.purple}10` }}>
                    <MessageCircle className="w-5 h-5" style={{ color: vibrantColors.coral }} />
                    <span style={{ color: vibrantColors.purple }}>+506 7058 9304</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg" style={{ backgroundColor: `${vibrantColors.purple}10` }}>
                    <MapPin className="w-5 h-5" style={{ color: vibrantColors.coral }} />
                    <span style={{ color: vibrantColors.purple }}>Costa Rica</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold" style={{ color: vibrantColors.purple }}>Sígueme</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg transition-all duration-300"
                      style={{ 
                        backgroundColor: `${vibrantColors.purple}20`,
                        borderColor: vibrantColors.purple,
                        border: `1px solid ${vibrantColors.purple}`
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" style={{ color: vibrantColors.coral }} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center pt-16">
            <div className="w-full border-t mb-8" style={{ borderColor: vibrantColors.coral }}></div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src="/logoYPerfil/Logo.svg" 
                alt="Logo" 
                className="w-8 h-8"
              />
              <p style={{ color: vibrantColors.purple }}>© 2025 Maria Angelica Rodriguez Coto. Elaborado con pasión y precisión.</p>
            </div>
          </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

