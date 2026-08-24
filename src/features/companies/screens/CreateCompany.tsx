import { useNavigate } from 'react-router'
import { Image, MapPin, Phone } from 'lucide-react'
import { TopBar } from '../../../shared/components/navigation/TopBar'
import { Input } from '../../../shared/components/ui/Input'
import { Button } from '../../../shared/components/ui/Button'
import { useCreateCompanyForm } from '../hooks/useCreateCompanyForm'

const CATEGORIES = [
  'Spa & Bienestar',
  'Barbería',
  'Peluquería',
  'Yoga & Fitness',
  'Dental',
  'Médico',
  'Estética',
  'Masajes',
  'Otro',
]

export function CreateCompany() {
  const navigate = useNavigate()
  const { step, setStep, form, set, loading, handleSubmit, isInfoComplete } =
    useCreateCompanyForm()

  if (step === 'done') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <div className="w-24 h-24 rounded-full bg-[#E8FBF4] flex items-center justify-center text-4xl mb-6">
          🏢
        </div>
        <h2
          className="text-[#111827] text-center mb-2"
          style={{ fontSize: 24, fontWeight: 600 }}
        >
          ¡Negocio creado!
        </h2>
        <p className="text-sm text-[#9CA3AF] text-center mb-8 max-w-[260px]">
          Tu negocio está listo. Ahora añade tus servicios para empezar a
          recibir reservas.
        </p>
        <div className="w-full flex flex-col gap-3">
          <Button
            fullWidth
            size="lg"
            onClick={() => navigate('/provider/companies/c1/services')}
          >
            Añadir servicios
          </Button>
          <Button
            variant="ghost"
            fullWidth
            onClick={() => navigate('/provider/companies')}
          >
            Ver mis negocios
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <TopBar
        title={step === 'info' ? 'Nuevo negocio' : 'Horarios'}
        back
        light
      />

      <div className="px-5 py-5 flex flex-col gap-5">
        {step === 'info' && (
          <>
            {/* Image upload placeholder */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[#E0E0E0] min-h-[140px]">
              <div className="w-12 h-12 rounded-2xl bg-[#FAFAFA] flex items-center justify-center">
                <Image size={20} className="text-[#2C2C2C]" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-[#374151]">
                  Foto del negocio
                </p>
                <p className="text-xs text-[#9CA3AF]">
                  Toca para subir imagen · 5MB máx
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-4">
              <Input
                label="Nombre del negocio *"
                placeholder="Ej: Zen Wellness Studio"
                value={form.name}
                onChange={set('name')}
              />

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#374151]">Categoría *</label>
                <select
                  value={form.category}
                  onChange={set('category')}
                  className="w-full h-12 bg-white border border-[#F0F0F0] rounded-xl px-4 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#E0E0E0] appearance-none"
                >
                  <option value="">Selecciona una categoría</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <Input
                label="Dirección *"
                placeholder="Calle Serrano 45, Madrid"
                value={form.address}
                onChange={set('address')}
                iconLeft={<MapPin size={16} />}
              />

              <Input
                label="Teléfono"
                type="tel"
                placeholder="+34 91 234 5678"
                value={form.phone}
                onChange={set('phone')}
                iconLeft={<Phone size={16} />}
              />

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#374151]">Descripción</label>
                <textarea
                  value={form.description}
                  onChange={set('description')}
                  placeholder="Describe brevemente tu negocio y lo que ofreces..."
                  className="w-full h-28 bg-white border border-[#F0F0F0] rounded-xl p-4 text-sm text-[#2C2C2C] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#E0E0E0] resize-none"
                />
              </div>
            </div>

            <Button
              fullWidth
              size="lg"
              disabled={!isInfoComplete}
              onClick={() => setStep('hours')}
            >
              Continuar
            </Button>
          </>
        )}

        {step === 'hours' && (
          <>
            <p className="text-sm text-[#9CA3AF]">
              Configura tus horarios de atención
            </p>
            <div className="bg-white rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] overflow-hidden">
              {[
                'Lunes',
                'Martes',
                'Miércoles',
                'Jueves',
                'Viernes',
                'Sábado',
                'Domingo',
              ].map((day, i) => {
                const closed = i === 6
                return (
                  <div
                    key={day}
                    className={`flex items-center gap-3 p-4 ${i > 0 ? 'border-t border-[#F4FAF4]' : ''}`}
                  >
                    <div className="w-20">
                      <p className="text-sm text-[#374151]">{day}</p>
                    </div>
                    {closed ? (
                      <span className="text-xs text-[#9CA3AF]">Cerrado</span>
                    ) : (
                      <div className="flex items-center gap-2 flex-1">
                        <input
                          type="time"
                          defaultValue="09:00"
                          className="flex-1 h-9 border border-[#F0F0F0] rounded-xl px-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#E0E0E0]"
                        />
                        <span className="text-[#9CA3AF]">—</span>
                        <input
                          type="time"
                          defaultValue="20:00"
                          className="flex-1 h-9 border border-[#F0F0F0] rounded-xl px-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#E0E0E0]"
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <Button
              fullWidth
              size="lg"
              loading={loading}
              onClick={handleSubmit}
            >
              Crear negocio
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
