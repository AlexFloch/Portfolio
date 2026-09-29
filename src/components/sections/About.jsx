import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { User, Code2, Zap, Coffee } from 'lucide-react'

const facts = [
  { icon: Code2, label: 'Чистый код', desc: 'Читаемый, поддерживаемый, хорошо структурированный.' },
  { icon: Zap, label: 'Производительность', desc: 'Оптимизировано для скорости и метрик реальных пользователей.' },
  { icon: User, label: 'Пользователь — прежде всего', desc: 'Проектирую для людей, а не для галочек.' },
  { icon: Coffee, label: 'Сосредоточенность', desc: 'Глубокая работа, меньше отвлечений, выше результат.' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section-padding">
      <div className="container-max" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">
              <User size={10} />
              Обо мне
            </span>

            <h2 className="section-title">
              Я превращаю идеи
              <br />
              <span className="text-gradient">в живые интерфейсы</span>
            </h2>

            <div className="space-y-4 text-slate-400 font-body text-base leading-relaxed">
              <p>
                Привет! Меня зовут Алекс, я фронтенд-разработчик из Москвы с более чем 3-летним опытом создания современных веб-приложений. Я увлечен тем, что нахожусь на стыке дизайна и инженерии — той областью, где качественный код и продуманный интерфейс объединяются, создавая продукт, которым по-настоящему приятно пользоваться.
              </p>
              <p>
                Я специализируюсь на <span className="text-white">экосистеме React</span> — создании библиотек компонентов, дизайн-систем и масштабируемых продуктовых интерфейсов. Я уделяю пристальное внимание производительности, доступности и тем деталям, которые большинство разработчиков упускают из виду.
              </p>
              <p>
                Когда я не занимаюсь осваиванием новых технологий разработки, я обычно исследую новые техники анимации, вношу вклад в проекты с открытым исходным кодом или читаю о дизайне шрифтов.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-blue-500/30 border border-white/10 flex items-center justify-center">
                  <span className="font-display font-bold text-sm text-white">AF</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent border-2 border-surface-950" />
              </div>
              <div>
                <p className="font-display font-semibold text-white text-sm">Alex Floch</p>
                <p className="font-mono text-xs text-slate-500">Moscow, Russia · Готов к переезду</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — fact cards */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                className="glass glass-hover rounded-2xl p-5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-accent/20 group-hover:border-accent/30">
                  <fact.icon size={18} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-1.5">{fact.label}</h3>
                <p className="font-body text-slate-500 text-xs leading-relaxed">{fact.desc}</p>
              </motion.div>
            ))}

            {/* Experience highlight card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="col-span-2 glass rounded-2xl p-5 border border-accent/10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-accent tracking-wider">ОПЫТ</span>
                <span className="font-mono text-xs text-slate-600">2021 — Настоящее время</span>
              </div>
              <div className="space-y-3">
                {[
                  { role: 'Frontend Developer', company: 'Freelance & Startups', period: '2023–сейчас' },
                  { role: 'Junior Frontend Dev', company: 'Monarch Moscow', period: '2021–2023' },
                ].map((exp) => (
                  <div key={exp.role} className="flex items-start justify-between">
                    <div>
                      <p className="font-body font-medium text-white text-sm">{exp.role}</p>
                      <p className="font-body text-slate-500 text-xs">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-slate-600">{exp.period}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
