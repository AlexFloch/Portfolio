import { motion } from 'framer-motion'
import { ArrowDown, Github, Send, Sparkles } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute -top-32 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full" />
        <div className="orb absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full" style={{ animationDelay: '2s' }} />
        <div className="orb absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500/5 rounded-full" style={{ animationDelay: '4s' }} />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent hidden lg:block" />

      <div className="relative section-padding container-max w-full pt-36 md:pt-48 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="section-label">
              <Sparkles size={10} className="text-accent" />
              Доступен для работы
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-6"
          >
            Frontend
            <br />
            <span className="text-gradient">React</span>
            <br />
            <span className="text-slate-500">Developer</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-body text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            Я создаю{' '}
            <span className="text-white font-medium">доступные и визуально привлекательные</span>
            {' '}веб-интерфейсы, с которыми пользователям нравится взаимодействовать. Специализируюсь на React, современных дизайн-системах и высокопроизводительном UX.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-3.5 text-base"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Посмотреть работы
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost px-8 py-3.5 text-base"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Связаться
            </motion.button>
          </motion.div>

          {/* Stats + social */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-8"
          >
            {/* Stats */}
            <div className="flex items-center gap-8">
              {[
                { value: '3+', label: 'Стаж' },
                { value: '124', label: 'Проекта' },
                { value: '76', label: 'Клиентов' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="font-display font-bold text-2xl text-white">{stat.value}</span>
                  <span className="font-mono text-xs text-slate-500 tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-white/10 hidden sm:block" />

            {/* Social */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com/alexfloch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/8 text-slate-400 hover:text-white hover:border-white/20 text-sm transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <Github size={15} />
                <span className="font-mono text-xs">GitHub</span>
              </motion.a>
              <motion.a
                href="https://t.me/alexfloch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/8 text-slate-400 hover:text-accent hover:border-accent/20 text-sm transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <Send size={15} />
                <span className="font-mono text-xs">Telegram</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 right-6 md:right-12 lg:right-24 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
