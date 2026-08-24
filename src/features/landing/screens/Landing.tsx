import { useNavigate } from 'react-router'
import { Button } from '../../../shared/components/ui/Button'

export function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#F4F4F4] flex items-center justify-center p-6">
      <div className="w-full max-w-[400px] text-center">
        {/* Logo */}
        <div className="mb-12">
          <h1
            className="text-[#2C2C2C] font-bold tracking-tight mb-2"
            style={{ fontSize: 48, letterSpacing: '0.05em' }}
          >
            BOOKAS
          </h1>
          <p className="text-[#6B7280] text-sm tracking-[0.3em] uppercase">
            Book-Smart
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3 mb-8">
          <Button size="lg" fullWidth onClick={() => navigate('/login')}>
            Iniciar sesión
          </Button>
          <Button
            size="lg"
            fullWidth
            variant="outline"
            onClick={() => navigate('/register')}
          >
            Crear cuenta
          </Button>
        </div>

        {/* Footer */}
        <p className="text-[#9CA3AF] text-xs">
          Simple. Profesional. Eficiente.
        </p>
      </div>
    </div>
  )
}
