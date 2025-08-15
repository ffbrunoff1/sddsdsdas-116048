import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Menu, X, Stethoscope } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-primary-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-primary-500 to-primary-600' 
                : 'bg-white/90 backdrop-blur-sm'
            }`}>
              <Stethoscope className={`h-6 w-6 ${
                isScrolled ? 'text-white' : 'text-primary-600'
              }`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-secondary-800' : 'text-primary-800'
              }`}>
                SDDSDSDAS
              </span>
              <span className={`text-xs font-medium transition-colors duration-300 ${
                isScrolled ? 'text-secondary-600' : 'text-primary-600'
              }`}>
                Medicina
              </span>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled ? 'text-secondary-700 hover:text-primary-600' : 'text-secondary-800 hover:text-primary-700'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-primary flex items-center space-x-2"
            >
              <Heart className="h-4 w-4" />
              <span>Agendar Consulta</span>
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-secondary-700 hover:bg-primary-50' 
                : 'text-primary-800 hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 border border-primary-100"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollToSection('contact')}
              className="w-full btn-primary flex items-center justify-center space-x-2 mt-4"
            >
              <Heart className="h-4 w-4" />
              <span>Agendar Consulta</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}