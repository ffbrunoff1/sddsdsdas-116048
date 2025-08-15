import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Stethoscope, Activity, Brain, Eye, Baby, Users, ArrowRight, CheckCircle, Clock, Award } from 'lucide-react'

export default function Services() {
  const mainServices = [
    {
      icon: Heart,
      title: 'Cardiologia',
      description: 'Cuidados especializados para o coração, prevenção e tratamento de doenças cardiovasculares.',
      features: ['Ecocardiograma', 'Teste ergométrico', 'Holter 24h', 'Consultas preventivas'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Neurologia',
      description: 'Diagnóstico e tratamento de distúrbios do sistema nervoso com tecnologia avançada.',
      features: ['Eletroencefalograma', 'Consulta neurológica', 'Tratamento de enxaqueca', 'Acompanhamento'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Eye,
      title: 'Oftalmologia',
      description: 'Cuidados completos para a saúde ocular, desde consultas de rotina até cirurgias.',
      features: ['Exame de vista', 'Cirurgia de catarata', 'Tratamento de glaucoma', 'Retinografia'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Baby,
      title: 'Pediatria',
      description: 'Atendimento especializado para crianças e adolescentes com carinho e dedicação.',
      features: ['Puericultura', 'Vacinação', 'Consultas de rotina', 'Emergências pediátricas'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Clínica Geral',
      description: 'Atendimento médico abrangente para toda a família com foco na prevenção.',
      features: ['Check-up completo', 'Consultas preventivas', 'Exames de rotina', 'Acompanhamento'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Activity,
      title: 'Medicina Esportiva',
      description: 'Cuidados especializados para atletas e pessoas ativas fisicamente.',
      features: ['Avaliação física', 'Prevenção de lesões', 'Reabilitação', 'Performance'],
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const differentials = [
    {
      icon: Clock,
      title: 'Atendimento Rápido',
      description: 'Agendamento flexível e tempos de espera reduzidos.'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Protocolos rigorosos de higiene e segurança para todos.'
    },
    {
      icon: Award,
      title: 'Excelência Médica',
      description: 'Profissionais qualificados e reconhecidos no mercado.'
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-6">
            <Stethoscope className="h-5 w-5 text-primary-600" />
            <span className="text-primary-700 font-medium">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Cuidados <span className="text-gradient">especializados</span> para você
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de serviços médicos com tecnologia de ponta 
            e profissionais altamente qualificados para cuidar da sua saúde.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 card-hover group h-full flex flex-col"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-secondary-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="w-full mt-auto bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary-800 to-secondary-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent-400/20 to-primary-400/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Atendimento de Emergência 24/7
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Estamos sempre prontos para atender suas necessidades médicas urgentes. 
                  Nossa equipe especializada está disponível 24 horas por dia, 7 dias por semana.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                    className="bg-white text-secondary-800 font-semibold py-3 px-6 rounded-lg hover:bg-primary-50 transition-colors duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <span>Contato de Emergência</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {differentials.map((differential, index) => {
                  const IconComponent = differential.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center space-y-3"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-sm">{differential.title}</h4>
                      <p className="text-xs opacity-80">{differential.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-6">
              Não encontrou o que procura?
            </h3>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              Oferecemos diversos outros serviços médicos. Entre em contato conosco 
              para saber mais sobre como podemos ajudar você.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Fale Conosco</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}