import { useNavigate } from 'react-router'
import { motion } from 'motion/react'
import { Button } from '../../../shared/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export function RoleSwitchLanding() {
  const navigate = useNavigate()

  const c = {
    emoji: '🏢',
    title: 'Modo Proveedor activado',
    subtitle: 'Provider mode · Manage your business',
    description:
      'Ahora puedes gestionar tu negocio, servicios y todas tus citas de clientes.',
    color: '#F5B11F',
    bg: '#2C2C2C',
    cta: 'Ir al dashboard',
    path: '/provider',
    features: [
      { emoji: '📊', text: 'Ver estadísticas de tu negocio' },
      { emoji: '⚙️', text: 'Gestionar servicios y precios' },
      { emoji: '📅', text: 'Administrar citas de clientes' },
      { emoji: '💰', text: 'Seguir tus ingresos en tiempo real' },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: c.bg }}>
      {/* Top section */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center pt-20">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 12, stiffness: 200 }}
          className="w-24 h-24 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-5xl mb-8 shadow-2xl"
        >
          {c.emoji}
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-4 py-1.5 rounded-full bg-white/15 border border-white/20 mb-5"
        >
          <span className="text-white/80 text-xs tracking-widest uppercase">
            {c.subtitle}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white mb-3"
          style={{ fontSize: 28, fontWeight: 600 }}
        >
          {c.title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/70 text-sm leading-relaxed max-w-[280px]"
        >
          {c.description}
        </motion.p>
      </div>

      {/* Features */}
      <div className="px-6 pb-0">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 border border-white/15 mb-5"
        >
          <div className="grid grid-cols-2 gap-3">
            {c.features.map(({ emoji, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="text-base">{emoji}</span>
                <span className="text-white/80 text-xs leading-tight">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button
            fullWidth
            size="lg"
            onClick={() => navigate(c.path)}
            iconRight={<ArrowRight size={18} />}
            style={{
              background: 'white',
              color: c.color,
            }}
          >
            {c.cta}
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
