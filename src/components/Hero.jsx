import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Users, Award, ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    { icon: Heart, text: 'Cuidado humanizado' },
    { icon: Shield, text: 'Excelência médica' },
    { icon: Users, text: 'Equipe especializada' }
  ]

  const stats = [
    { number: '10+', label: 'Anos de experiência' },
    { number: '5000+', label: 'Pacientes atendidos' },
    { number: '98%', label: 'Satisfação dos pacientes' }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white/90 to-accent-50/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200 shadow-sm"
              >
                <Award className="h-4 w-4 text-primary-600" />
                <span className="text-sm font-medium text-secondary-700">Medicina de Excelência</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-secondary-800">Transformando a</span>{' '}
                <span className="text-gradient">medicina</span>{' '}
                <span className="text-secondary-800">com paixão</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-secondary-600 leading-relaxed max-w-2xl"
              >
                Saúde e bem-estar são nossa prioridade. Oferecemos cuidados médicos inovadores 
                com uma abordagem humanizada, focando sempre na excelência do atendimento.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary-100 shadow-sm">
                    <IconComponent className="h-5 w-5 text-primary-600" />
                    <span className="text-sm font-medium text-secondary-700">{feature.text}</span>
                  </div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Agendar Consulta</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Saiba Mais</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-200"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-sm text-secondary-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-white to-primary-50 rounded-3xl p-8 shadow-2xl border border-primary-100"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-800">Cuidado Completo</h3>
                      <p className="text-secondary-600">Atendimento personalizado</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      'Consultas especializadas',
                      'Diagnósticos precisos',
                      'Tratamentos inovadores',
                      'Acompanhamento contínuo'
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <span className="text-secondary-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full blur-xl"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 0.8, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-primary-300 to-primary-400 rounded-full blur-2xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-primary-200 hover:bg-white transition-all duration-300"
        >
          <ArrowRight className="h-5 w-5 text-primary-600 rotate-90" />
        </button>
      </motion.div>
    </section>
  )
}