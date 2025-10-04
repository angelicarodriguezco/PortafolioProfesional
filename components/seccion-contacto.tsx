"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const vibrantColors = {
    purple: "#3e196e",
    coral: "#d46c76",
    orange: "#ffc07c"
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Correo",
      value: "mariaangelica@rodriguezcoto.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+506 7058 9304",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "San Ramón, Costa Rica",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/angelicarodriguezco",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/maria-angelica-rodriguez-coto-209898385/",
      color: "hover:text-blue-600",
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
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
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
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: `${vibrantColors.coral}10` }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
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
                Ponte en Contacto
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
              Trabajemos Juntos
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-balance leading-relaxed" style={{ color: vibrantColors.purple }}>
            ¿Listo para hacer realidad tus ideas? Siempre entusiasmada de hablar sobre nuevos proyectos y oportunidades. Creemos algo increíble juntos.            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={itemVariants}>
              <Card 
                className="p-8 bg-white border-2"
                style={{ 
                  borderColor: vibrantColors.coral,
                  backgroundColor: `${vibrantColors.coral}05`
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-medium" style={{ color: vibrantColors.purple }}>
                        Nombre
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-2 transition-colors focus:border-purple-600"
                        style={{ 
                          borderColor: vibrantColors.coral
                        }}
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium" style={{ color: vibrantColors.purple }}>
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-2 transition-colors focus:border-purple-600"
                        style={{ 
                          borderColor: vibrantColors.coral
                        }}
                        placeholder="tu.email@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-medium" style={{ color: vibrantColors.purple }}>
                      Asunto
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-white border-2 transition-colors focus:border-purple-600"
                      style={{ 
                        borderColor: vibrantColors.coral
                      }}
                      placeholder="¿De qué se trata?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-medium" style={{ color: vibrantColors.purple }}>
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-white border-2 transition-colors resize-none focus:border-purple-600"
                      style={{ 
                        borderColor: vibrantColors.coral
                      }}
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="w-full py-6 text-lg font-semibold text-white transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral})` 
                      }}
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="flex items-center gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div
                            className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                          Enviando por WhatsApp...
                        </motion.div>
                      ) : isSubmitted ? (
                        <motion.div
                          className="flex items-center gap-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          <CheckCircle className="w-5 h-5" />
                          ¡Mensaje Enviado por WhatsApp!
                        </motion.div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar Mensaje de WhatsApp
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold" style={{ color: vibrantColors.purple }}>Información de Contacto</h3>
                <p className="leading-relaxed" style={{ color: vibrantColors.purple }}>
                Si quieres hablar sobre un proyecto o simplemente saludarme, siempre estoy dispuesta a hablar. No dudes en contactarme a través de cualquiera de los canales a continuación.                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border-2 transition-all duration-300 group"
                    style={{ 
                      borderColor: vibrantColors.coral,
                      backgroundColor: `${vibrantColors.coral}05`
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                      style={{ 
                        backgroundColor: `${vibrantColors.purple}20`
                      }}
                    >
                      <info.icon className="w-6 h-6" style={{ color: vibrantColors.purple }} />
                    </div>
                    <div>
                      <div className="font-medium transition-colors" style={{ color: vibrantColors.purple }}>
                        {info.label}
                      </div>
                      <div className="text-sm" style={{ color: vibrantColors.coral }}>{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t" style={{ borderColor: vibrantColors.coral }}>
                <h4 className="text-lg font-semibold" style={{ color: vibrantColors.purple }}>Sígueme</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{ 
                        backgroundColor: `${vibrantColors.coral}20`,
                        color: vibrantColors.purple
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center pt-16 border-t" style={{ borderColor: vibrantColors.coral }}>
            <p style={{ color: vibrantColors.purple }}>© 2025 Maria Angelica Rodriguez Coto. Elaborado con pasión y precisión.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
