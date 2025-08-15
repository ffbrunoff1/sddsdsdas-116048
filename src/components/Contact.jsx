import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Heart } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          token,
          recipientEmail: ''
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        recaptchaRef.current.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 9999-9999',
      description: 'Ligue para nós'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@sddsdsdas.com.br',
      description: 'Envie uma mensagem'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'São Paulo, SP',
      description: 'Venha nos visitar'
    },
    {
      icon: Clock,
      title: 'Horários',
      content: 'Seg - Sex: 8h às 18h',
      description: 'Atendimento comercial'
    }
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-6">
            <Heart className="h-5 w-5 text-primary-600" />
            <span className="text-primary-700 font-medium">Entre em Contato</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Saúde e bem-estar são nossa <span className="text-gradient">prioridade</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Conecte-se conosco para saber mais sobre nossos serviços médicos 
            e como podemos cuidar da sua saúde com excelência.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-800">
                Como podemos ajudar você?
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Nossa equipe está pronta para atender suas necessidades médicas. 
                Entre em contato conosco através dos canais abaixo ou preencha o formulário.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-primary-100 card-hover"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-secondary-800 mb-1">{info.title}</h4>
                      <p className="text-primary-600 font-medium mb-1">{info.content}</p>
                      <p className="text-sm text-secondary-600">{info.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-3">Atendimento de Emergência</h4>
              <p className="mb-4 opacity-90">
                Para emergências médicas, estamos disponíveis 24 horas por dia, 7 dias por semana.
              </p>
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <Phone className="h-5 w-5" />
                <span>(11) 9999-9999</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-primary-100 p-8"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-secondary-800 mb-2">
                Agende sua Consulta
              </h3>
              <p className="text-secondary-600">
                Preencha o formulário abaixo e entraremos em contato em breve.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Descreva como podemos ajudar você..."
                ></textarea>
              </div>

              <div className="mt-4 flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg border border-green-200"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg border border-red-200"
                >
                  <AlertCircle className="h-5 w-5" />
                  <span>Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}