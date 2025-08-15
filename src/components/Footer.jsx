import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin, Stethoscope, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const services = [
    'Cardiologia',
    'Neurologia',
    'Oftalmologia',
    'Pediatria',
    'Clínica Geral',
    'Medicina Esportiva'
  ]

  const contactInfo = [
    { icon: Phone, text: '(11) 9999-9999' },
    { icon: Mail, text: 'contato@sddsdsdas.com.br' },
    { icon: MapPin, text: 'São Paulo, SP' }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/seuusername', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/seuusername', name: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/seuusername', name: 'LinkedIn' }
  ]

  return (
    <footer className="bg-gradient-to-b from-secondary-900 to-secondary-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-6 cursor-pointer"
                onClick={scrollToTop}
              >
                <div className="p-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">SDDSDSDAS</span>
                  <span className="text-sm font-medium text-primary-300">Medicina</span>
                </div>
              </motion.div>
              
              <p className="text-secondary-300 leading-relaxed mb-6">
                Transformando a medicina com paixão e compromisso. 
                Saúde e bem-estar são nossa prioridade há mais de uma década.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5 text-white group-hover:text-white" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 block w-full text-left"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Especialidades</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-secondary-300"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Contato</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <IconComponent className="h-5 w-5 text-primary-400 flex-shrink-0" />
                      <span className="text-secondary-300">{info.text}</span>
                    </motion.div>
                  )
                })}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg border border-primary-400/30"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Heart className="h-5 w-5 text-primary-400" />
                  <span className="text-sm font-medium text-white">Emergência 24h</span>
                </div>
                <p className="text-secondary-300 text-sm">
                  Para emergências médicas, ligue:
                </p>
                <p className="text-primary-400 font-semibold">(11) 9999-9999</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-secondary-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-secondary-400 text-sm">
                © 2024 SDDSDSDAS. Todos os direitos reservados.
              </p>
              <p className="text-secondary-500 text-xs mt-1">
                Criado com <span className="text-primary-400">❤</span> por{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  Papum
                </a>
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-5 w-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}