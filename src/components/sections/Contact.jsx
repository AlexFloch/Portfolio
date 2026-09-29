import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { Send, Github, Mail, MessageSquare, CheckCircle, Loader2 } from 'lucide-react'

const socials = [
  {
    icon: Send,
    label: 'Telegram',
    handle: '@alexfloch',
    href: 'https://t.me/alexfloch',
    color: '#229ED9',
    desc: 'Лучший способ связаться со мной быстро.',
  },
  {
    icon: Github,
    label: 'GitHub',
    handle: 'alexfloch',
    href: 'https://github.com/alexfloch',
    color: '#6EE7B7',
    desc: 'Ознакомьтесь с моими работами в области открытого исходного кода.',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'alex.floch777@gmail.com',
    href: 'mailto:alexfloch777@gmail.com',
    color: '#F59E0B',
    desc: 'Для получения официальной информации',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Это поле обязательно'
    if (!form.email.trim()) e.email = 'Это поле обязательно'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Неверный формат email'
    if (!form.message.trim()) e.message = 'Это поле обязательно'
    else if (form.message.trim().length < 20) e.message = 'Не менее 20 символов'
    return e
  }

 const handleSubmit = async () => {
  const e = validate()
  if (Object.keys(e).length > 0) {
    setErrors(e)
    return
  }
  setErrors({})
  setStatus('loading')
  try {
    const res = await fetch('https://formspree.io/f/xdekbwgy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(form),
    })
    setStatus(res.ok ? 'success' : 'error')
  } catch {
    setStatus('error')
  }
}
  const handleChange = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }))
  }

  return (
    <section id="contact" className="section-padding bg-surface-900/40">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mx-auto">
            <MessageSquare size={10} />
            Связь со мной
          </span>
          <h2 className="section-title">
            Давайте создадим что-нибудь <span className="text-gradient">грандиозное</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            У вас есть проект или вы просто хотите поздороваться? Мой почтовый ящик всегда открыт.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Social links — left */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -20, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 group"
                style={{ borderColor: `${social.color}15` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${social.color}15`,
                    color: social.color,
                    border: `1px solid ${social.color}25`,
                  }}
                >
                  <social.icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-display font-semibold text-white text-sm">{social.label}</span>
                  </div>
                  <p className="font-mono text-xs truncate" style={{ color: social.color }}>
                    {social.handle}
                  </p>
                  <p className="font-body text-xs text-slate-600 mt-0.5">{social.desc}</p>
                </div>
              </motion.a>
            ))}

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="glass rounded-2xl p-5 border border-accent/15"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-accent tracking-wider">Доступен</span>
              </div>
              <p className="font-body text-sm text-slate-400 leading-relaxed">
                В настоящее время открыт для фриланс-проектов и предложений о работе на полный рабочий день. Время ответа: менее 24 часов.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form — right */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-6 md:p-8">
              {status === 'success' ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <CheckCircle size={28} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">Сообщение отправлено!</h3>
                  <p className="font-body text-slate-400 text-sm max-w-xs">
                    Спасибо за обращение. Я свяжусь с вами в течение 24 часов.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }) }}
                    className="btn-ghost mt-2 text-sm py-2"
                  >
                    Отправить еще
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      label="Имя"
                      placeholder="Александр Овечкин"
                      value={form.name}
                      onChange={handleChange('name')}
                      error={errors.name}
                    />
                    <FormField
                      label="Почта"
                      type="email"
                      placeholder="alex@example.com"
                      value={form.email}
                      onChange={handleChange('email')}
                      error={errors.email}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-slate-500 tracking-wider">СООБЩЕНИЕ</label>
                    <textarea
                      rows={5}
                      placeholder="Расскажите о вашем проекте..."
                      value={form.message}
                      onChange={handleChange('message')}
                      className={`form-input w-full bg-surface-800/60 border rounded-xl px-4 py-3 font-body text-sm text-white placeholder-slate-600 resize-none transition-all duration-200
                        ${errors.message ? 'border-red-500/50' : 'border-white/8 focus:border-accent/40'}`}
                    />
                    {errors.message && (
                      <p className="font-mono text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center py-3.5 text-base"
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Отправляется...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Отправить сообщение
                      </>
                    )}
                  </motion.button>
                    {status === 'error' && (
                      <p className="font-mono text-xs text-red-400 text-center">
                         Не удалось отправить. Напишите мне в Telegram или на почту.
                      </p>
                    )}
                  <p className="font-mono text-xs text-slate-600 text-center">
                    Не спамьте. Я отвечу на каждое сообщение.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, type = 'text', placeholder, value, onChange, error }) {
  return (
    <div className="space-y-1.5">
      <label className="font-mono text-xs text-slate-500 tracking-wider">{label.toUpperCase()}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`form-input w-full bg-surface-800/60 border rounded-xl px-4 py-3 font-body text-sm text-white placeholder-slate-600 transition-all duration-200
          ${error ? 'border-red-500/50' : 'border-white/8 focus:border-accent/40'}`}
      />
      {error && <p className="font-mono text-xs text-red-400">{error}</p>}
    </div>
  )
}
