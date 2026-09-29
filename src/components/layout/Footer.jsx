import { motion } from 'framer-motion'
import { Github, Send, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 md:px-12 lg:px-24 py-10">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
            <span className="font-display font-bold text-xs text-accent">AF</span>
          </div>
          <span className="font-body text-sm text-slate-500">
            © 2024 Alex Floch
          </span>
        </div>

        <p className="font-body text-xs text-slate-600 flex items-center gap-1.5">
          Built with React & Framer Motion
          <Heart size={12} className="text-accent/60 fill-accent/60" />
        </p>

        <div className="flex items-center gap-3">
          <motion.a
            href="https://github.com/alexfloch"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
          </motion.a>
          <motion.a
            href="https://t.me/alexfloch"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-accent hover:bg-accent/5 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={16} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
