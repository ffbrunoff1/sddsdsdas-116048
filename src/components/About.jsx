import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Users, Award, CheckCircle, Stethoscope, Activity, HeartHandshake } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compromisso',
      description: 'Dedicação total ao bem-estar e saúde dos nossos pacientes, com atendimento humanizado.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Excelência',
      description: 'Padrões elevados de qualidade em todos os procedimentos e tratamentos médicos.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Inovação',
      description: 'Tecnologia de ponta e métodos avançados para oferecer o melhor cuidado médico.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Confiança',
      description: 'Relacionamento baseado na transparência, ética e resultados comprovados.',
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const achievements = [
    { number: '15+', label: 'Anos de experiência', icon: Activity },
    { number: '8000+', label: 'Pacientes atendidos', icon: Users },
    { number: '99%', label: 'Taxa de satisfação', icon: Heart },
    { number: '50+', label: 'Profissionais qualificados', icon: Stethoscope }
  ]

  const features = [
    'Atendimento 24/7 para emergências',
    'Equipe médica altamente qualificada',
    'Tecnologia de última geração',
    'Ambiente acolhedor e moderno',
    'Protocolos de segurança rigorosos',
    'Acompanhamento pós-tratamento'
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-6">
            <HeartHandshake className="h-5 w-5 text-primary-600" />
            <span className="text-primary-700 font-medium">Sobre Nós</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Inovando em <span className="text-gradient">cuidados médicos</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de uma década, nossa missão é transformar a medicina através da paixão, 
            dedicação e compromisso com a excelência no atendimento médico.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-800">
                Nossa Filosofia de Cuidado
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Acreditamos que cada paciente é único e merece um atendimento personalizado. 
                Nossa abordagem combina conhecimento científico avançado com o calor humano, 
                criando um ambiente onde a cura vai além do tratamento médico.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Investimos constantemente em tecnologia de ponta e capacitação profissional 
                para garantir que nossos pacientes recebam sempre o melhor cuidado possível.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span className="text-secondary-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 text-center card-hover"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-secondary-600 font-medium">
                      {achievement.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full blur-xl -z-10"
            ></motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 text-center card-hover group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-secondary-800 mb-3">
                  {value.title}
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <motion.div
              animate={{ 
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"
            ></motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para cuidar da sua saúde?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar você a alcançar 
              o bem-estar que merece.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-primary-50 transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Fale Conosco</span>
              <Heart className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}