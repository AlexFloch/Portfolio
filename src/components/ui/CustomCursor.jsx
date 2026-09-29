import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia('(hover: none)').matches) return

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const over = (e) => {
      const el = e.target
      if (el.closest('a, button, [role="button"], input, textarea')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[9998] mix-blend-screen"
        style={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: 'spring', stiffness: 3000, damping: 50 }}
        animate={{ x: position.x - 4, y: position.y - 4 }}
      />

      {/* Follower ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997] border border-accent/30"
        animate={{
          x: position.x - (isHovering ? 20 : 14),
          y: position.y - (isHovering ? 20 : 14),
          width: isHovering ? 40 : 28,
          height: isHovering ? 40 : 28,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      />
    </>
  )
}
