import { useState } from 'react'
import { useNavigate } from 'react-router'
import { motion } from 'motion/react'
import { Button } from '../../../shared/components/ui/Button'

const SLIDES = [
  {
    emoji: '🌿',
    color: '#FAFAFA',
    accent: '#2C2C2C',
    title: 'Bienestar en 1 tap',
    subtitle: 'Wellbeing, one tap away',
    description:
      'Descubre los mejores spas, salones y centros de bienestar cerca de ti.',
  },
  {
    emoji: '📅',
    color: '#FEF7E0',
    accent: '#F5B11F',
    title: 'Reserva al instante',
    subtitle: 'Book in seconds',
    description:
      'Elige servicio, fecha y hora. Sin llamadas, sin esperas, sin complicaciones.',
  },
  {
    emoji: '✨',
    color: '#FFE8EA',
    accent: '#E14F61',
    title: 'Gestiona tus citas',
    subtitle: 'Your schedule, your way',
    description:
      'Recuerda, reagenda o cancela con facilidad. Tu tiempo es lo más valioso.',
  },
]

export function Onboarding() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)

  const slide = SLIDES[current]
  const isLast = current === SLIDES.length - 1

  const next = () => {
    if (isLast) {
      navigate('/provider')
    } else {
      setCurrent((c) => c + 1)
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ background: slide.color, transition: 'background 0.4s ease' }}
    >
      {/* Skip */}
      <div className="w-full flex justify-end px-6 pt-14">
        <button
          onClick={() => navigate('/provider')}
          className="text-sm text-[#9CA3AF]"
        >
          Saltar
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <motion.div
          key={current}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-32 h-32 rounded-full bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-center text-6xl mb-10"
        >
          {slide.emoji}
        </motion.div>

        <motion.div
          key={`text-${current}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h1
            className="text-[#111827] mb-1"
            style={{ fontSize: 28, fontWeight: 600 }}
          >
            {slide.title}
          </h1>
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: slide.accent }}
          >
            {slide.subtitle}
          </p>
          <p className="text-sm text-[#6B7280] leading-relaxed max-w-[280px]">
            {slide.description}
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="w-full px-6 pb-12">
        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? slide.accent : '#D1D5DB',
              }}
            />
          ))}
        </div>

        <Button
          fullWidth
          size="lg"
          onClick={next}
          style={{ background: slide.accent }}
        >
          {isLast ? '¡Empezar!' : 'Siguiente'}
        </Button>
      </div>
    </div>
  )
}
