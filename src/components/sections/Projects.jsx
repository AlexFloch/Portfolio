import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { ExternalLink, Github, FolderOpen, Layers } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Лендинг страница SaaS-решения на основе ИИ',
    category: 'Лендинг страница',
    description:
      'Высокоэффективная целевая страница для стартапа, разрабатывающего ИИ-помощника для написания текстов. Включает анимированный заголовок с эффектами частиц, плавную прокрутку, раздел с ценами (с возможностью переключения), отзывы и интегрированную форму ожидания с подтверждением по электронной почте',
    longDesc: 'Создан для достижения оценки Lighthouse выше 90 баллов и времени загрузки менее 2 секунд.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    gradient: 'from-violet-500/20 to-cyan-500/10',
    accentColor: '#8B5CF6',
    gridPattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.06'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    demoUrl: 'https://ai-saas-demo.vercel.app',
    githubUrl: 'https://github.com/alexfloch',
    featured: true,
  },
  {
    id: 2,
    title: 'Современный пользовательский интерфейс панели управления',
    category: 'Веб-приложение',
    description:
      'Полнофункциональная административная панель с визуализацией данных в реальном времени с использованием Recharts, боковой навигацией, переключением темного/светлого режима, таблицами данных с сортировкой и фильтрацией, а также системой уведомлений.',
    longDesc: 'Библиотека многократно используемых компонентов, готовая к подключению к любому бэкэнду.',
    stack: ['React', 'TypeScript', 'Recharts', 'SCSS', 'Vite'],
    gradient: 'from-cyan-500/20 to-emerald-500/10',
    accentColor: '#06B6D4',
    gridPattern: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306B6D4' fill-opacity='0.06'%3E%3Cpath d='M0 0h1v40H0V0zm40 0h1v40h-1V0zM0 0v1h40V0H0zm0 40v1h40v-1H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    demoUrl: 'https://dashboard-ui-demo.vercel.app',
    githubUrl: 'https://github.com/alexfloch',
    featured: false,
  },
  {
    id: 3,
    title: 'Кофе Шоп',
    category: 'Лендинг страница',
    description:
      'Визуально насыщенная целевая страница для бренда крафтового кофе. Включает параллаксную прокрутку, настраиваемый курсор, раздел меню с анимацией при наведении курсора, интеграцию карты и адаптивный дизайн, ориентированный на мобильные устройства, с теплым, редакционным стилем.',
    longDesc: 'Сайт удостоен звания «Сайт недели» по версии CSS Weekly.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    gradient: 'from-amber-500/20 to-orange-500/10',
    accentColor: '#F59E0B',
    gridPattern: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.05'%3E%3Cpath d='M0 0h20v1H0V0zm0 19h20v1H0v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    demoUrl: 'https://coffee-shop-demo.vercel.app',
    githubUrl: 'https://github.com/alexfloch',
    featured: false,
  },
]

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="section-padding">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="section-label">
              <FolderOpen size={10} />
              Работы
            </span>
            <h2 className="section-title">
              Избранные <span className="text-gradient">проекты</span>
            </h2>
            <p className="section-subtitle">
              Каждый проект, который я создал. Каждый из них научил меня чему-то новому.
            </p>
          </div>

          <motion.a
            href="https://github.com/alexfloch"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost self-start md:self-auto shrink-0"
            whileHover={{ y: -2 }}
          >
            <Github size={15} />
            Все проекты
          </motion.a>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        whileHover={{ scale: 1.005, y: -2 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="group glass rounded-3xl overflow-hidden"
        style={{ borderColor: `${project.accentColor}15` }}
      >
        <div className="grid lg:grid-cols-5 gap-0">
          {/* Visual panel */}
          <div
            className="lg:col-span-2 relative min-h-[200px] lg:min-h-[280px] flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: project.gridPattern, backgroundColor: '#0d1117' }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

            {/* Floating UI mockup */}
            <div className="relative w-3/4 max-w-[260px]">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: index * 1.2 }}
                className="glass rounded-2xl p-4 shadow-2xl"
                style={{ borderColor: `${project.accentColor}20` }}
              >
                {/* Header bar */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  <div className="ml-2 flex-1 h-2 rounded-full bg-white/5" />
                </div>
                {/* Content lines */}
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-white/8 w-3/4" />
                  <div className="h-2 rounded-full w-1/2" style={{ background: `${project.accentColor}30` }} />
                  <div className="h-2 rounded-full bg-white/5 w-5/6" />
                  <div className="mt-3 h-6 rounded-xl w-1/2" style={{ background: `${project.accentColor}20` }} />
                </div>
              </motion.div>

              {/* Secondary card */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 1.2 + 0.5 }}
                className="absolute -bottom-3 -right-3 glass rounded-xl p-3 w-2/3 shadow-xl"
                style={{ borderColor: `${project.accentColor}15` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded" style={{ background: `${project.accentColor}30` }} />
                  <div className="h-1.5 rounded-full bg-white/10 flex-1" />
                </div>
                <div className="h-1.5 rounded-full w-4/5 mb-1" style={{ background: `${project.accentColor}20` }} />
                <div className="h-1.5 rounded-full bg-white/5 w-2/3" />
              </motion.div>
            </div>

            {/* Category badge */}
            <div
              className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider border"
              style={{
                color: project.accentColor,
                borderColor: `${project.accentColor}30`,
                background: `${project.accentColor}10`,
              }}
            >
              {project.category}
            </div>
          </div>

          {/* Content panel */}
          <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-600">{project.longDesc}</p>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ml-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `${project.accentColor}15`, color: project.accentColor }}
                >
                  <Layers size={16} />
                </div>
              </div>

              <p className="font-body text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg font-mono text-[11px] border"
                    style={{
                      color: project.accentColor,
                      borderColor: `${project.accentColor}20`,
                      background: `${project.accentColor}08`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-body font-medium text-sm transition-all duration-300"
                style={{
                  background: `${project.accentColor}15`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}25`,
                }}
                whileHover={{
                  scale: 1.02,
                  background: `${project.accentColor}25`,
                  y: -1,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={14} />
                Демо-версия
              </motion.a>

              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-body font-medium text-sm border border-white/8 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={14} />
                GitHub
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
