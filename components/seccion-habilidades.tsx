"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})

  const vibrantColors = {
    purple: "#3e196e",
    coral: "#d46c76",
    orange: "#ffc07c"
  }

  const skills = [
    { name: "React/Next.js", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "Framer Motion", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Python", level: 75, category: "Backend" },
    { name: "PostgreSQL", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Backend" },
    { name: "Figma", level: 90, category: "Design" },
    { name: "Adobe Creative Suite", level: 85, category: "Design" },
    { name: "UI/UX Design", level: 90, category: "Design" },
    { name: "Prototyping", level: 85, category: "Design" },
  ]

  const experience = [
    {
      title: "Desarrollador Full Stack Senior",
      company: "TechCorp Solutions",
      period: "2022 - Presente",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Desarrollador Frontend",
      company: "Digital Agency Pro",
      period: "2020 - 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      technologies: ["React", "Vue.js", "SCSS", "JavaScript", "Figma"],
    },
    {
      title: "Diseñador UI/UX",
      company: "StartupHub",
      period: "2019 - 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    },
  ]

  const categories = ["Frontend", "Backend", "Diseño"]

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const newValues: { [key: string]: number } = {}
        skills.forEach((skill) => {
          newValues[skill.name] = skill.level
        })
        setAnimatedValues(newValues)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView, skills])

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
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
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
                Habilidades y Experiencia
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
              Experiencia Técnica
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-balance leading-relaxed" style={{ color: vibrantColors.purple }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 
                className="text-3xl font-semibold mb-8"
                style={{ 
                  background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Tecnologías Principales
              </h3>
            </div>

            {categories.map((category) => (
              <motion.div key={category} variants={itemVariants} className="space-y-6">
                <h4 className="text-xl font-semibold flex items-center gap-3" style={{ color: vibrantColors.purple }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: vibrantColors.coral }} />
                  {category}
                </h4>

                <div className="grid md:grid-cols-2 gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="space-y-3"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium" style={{ color: vibrantColors.purple }}>{skill.name}</span>
                          <span className="text-sm" style={{ color: vibrantColors.coral }}>{animatedValues[skill.name] || 0}%</span>
                        </div>
                        <div className="relative">
                          <Progress value={animatedValues[skill.name] || 0} className="h-2" style={{ backgroundColor: `${vibrantColors.coral}20` }} />
                          <motion.div
                            className="absolute top-0 left-0 h-2 rounded-full"
                            style={{ 
                              background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.coral})` 
                            }}
                            initial={{ width: 0 }}
                            animate={{
                              width: isInView ? `${animatedValues[skill.name] || 0}%` : 0,
                            }}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.1 + 0.8,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 
                className="text-3xl font-semibold mb-8"
                style={{ 
                  background: `linear-gradient(135deg, ${vibrantColors.purple}, ${vibrantColors.orange})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Experiencia Profesional
              </h3>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: vibrantColors.coral }} />

              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    variants={itemVariants}
                    className="relative pl-20"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <motion.div
                      className="absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-white shadow-lg"
                      style={{ backgroundColor: vibrantColors.purple }}
                      whileHover={{ scale: 1.2 }}
                    />

                    <Card 
                      className="p-6 bg-white border-2 hover:shadow-lg transition-all duration-300 group"
                      style={{ 
                        borderColor: vibrantColors.coral,
                        backgroundColor: `${vibrantColors.coral}05`
                      }}
                    >
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h4 
                              className="text-xl font-semibold transition-colors"
                              style={{ color: vibrantColors.purple }}
                            >
                              {exp.title}
                            </h4>
                            <p className="font-medium" style={{ color: vibrantColors.coral }}>{exp.company}</p>
                          </div>
                          <Badge 
                            variant="secondary" 
                            className="w-fit"
                            style={{ 
                              backgroundColor: `${vibrantColors.orange}20`,
                              color: vibrantColors.purple,
                              borderColor: vibrantColors.orange
                            }}
                          >
                            {exp.period}
                          </Badge>
                        </div>

                        <p className="leading-relaxed" style={{ color: vibrantColors.purple }}>{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 text-sm rounded-full border"
                              style={{ 
                                backgroundColor: `${vibrantColors.coral}20`,
                                color: vibrantColors.purple,
                                borderColor: vibrantColors.coral
                              }}
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: vibrantColors.coral,
                                color: "white",
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
