import { useState } from 'react'
import { useParams } from 'react-router'
import { Calendar, Clock, User, MessageSquare, ChevronDown } from 'lucide-react'
import { PROVIDER_APPOINTMENTS } from '../../../app/data/mockData'
import { StatusBadge } from '../../../shared/components/ui/Badge'
import { TopBar } from '../../../shared/components/navigation/TopBar'
import { Modal } from '../../../shared/components/ui/Modal'
import { Button } from '../../../shared/components/ui/Button'

type Status = 'confirmed' | 'completed' | 'cancelled' | 'pending'

const STATUS_OPTIONS: { value: Status; label: string; emoji: string }[] = [
  { value: 'confirmed', label: 'Confirmar', emoji: '✅' },
  { value: 'completed', label: 'Marcar como completada', emoji: '🎯' },
  { value: 'cancelled', label: 'Cancelar cita', emoji: '❌' },
]

export function ProviderAppointmentDetail() {
  const { id } = useParams<{ id: string }>()
  const [statusModal, setStatusModal] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [currentStatus, setCurrentStatus] = useState<Status>('confirmed')
  const [showToast, setShowToast] = useState(false)

  const appt =
    PROVIDER_APPOINTMENTS.find((a) => a.id === id) || PROVIDER_APPOINTMENTS[0]

  const updateStatus = async (newStatus: Status) => {
    setUpdating(true)
    await new Promise((r) => setTimeout(r, 1000))
    setUpdating(false)
    setCurrentStatus(newStatus)
    setStatusModal(false)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <TopBar
        title="Detalle de cita"
        back
        light
        rightAction={<StatusBadge status={currentStatus || appt.status} />}
      />

      {/* Toast */}
      {showToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#2C2C2C] text-white px-5 py-3 rounded-2xl shadow-lg flex items-center gap-2 w-max">
          <span>✅</span>
          <span className="text-sm font-medium">Estado actualizado</span>
        </div>
      )}

      <div className="px-5 py-5 flex flex-col gap-4">
        {/* Service header */}
        <div className="bg-white rounded-2xl p-5 shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAFAFA] flex items-center justify-center text-2xl">
              🌿
            </div>
            <div>
              <p className="font-medium text-[#111827]">{appt.serviceName}</p>
              <p className="text-xs text-[#9CA3AF]">{appt.companyName}</p>
            </div>
          </div>

          {[
            {
              icon: Calendar,
              label: 'Fecha',
              value: new Date(appt.date + 'T12:00').toLocaleDateString(
                'es-ES',
                { weekday: 'long', day: 'numeric', month: 'long' },
              ),
            },
            {
              icon: Clock,
              label: 'Hora',
              value: `${appt.time} · ${appt.duration} minutos`,
            },
            { icon: User, label: 'Profesional', value: appt.providerName },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 py-2.5 border-t border-[#F4FAF4]"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FAFAFA] flex items-center justify-center shrink-0">
                <Icon size={14} className="text-[#6B7280]" />
              </div>
              <div>
                <p className="text-[10px] text-[#9CA3AF]">{label}</p>
                <p className="text-sm text-[#111827]">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client info */}
        <div className="bg-white rounded-2xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)]">
          <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-3">
            Cliente
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2C2C2C] flex items-center justify-center">
              <span className="text-white font-medium text-sm">S</span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#111827]">
                Sofía Ramírez
              </p>
              <p className="text-xs text-[#9CA3AF]">
                sofia@email.com · +34 612 345 678
              </p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="bg-white rounded-2xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] flex items-center justify-between">
          <p className="text-sm text-[#6B7280]">Importe</p>
          <p className="text-xl font-semibold text-[#111827]">{appt.price}€</p>
        </div>

        {/* Notes */}
        <div className="bg-[#FAFAFA] rounded-2xl p-4 border border-[#F0F0F0]">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare size={13} className="text-[#6B7280]" />
            <p className="text-xs text-[#6B7280]">Notas del cliente</p>
          </div>
          <p className="text-sm text-[#374151]">
            Sin notas adicionales para esta cita.
          </p>
        </div>

        {/* Update status */}
        <div className="flex flex-col gap-3">
          <Button
            fullWidth
            size="lg"
            onClick={() => setStatusModal(true)}
            iconRight={<ChevronDown size={16} />}
          >
            Actualizar estado
          </Button>
          <Button variant="outline" fullWidth>
            Contactar al cliente
          </Button>
        </div>
      </div>

      {/* Status modal */}
      <Modal
        open={statusModal}
        onClose={() => setStatusModal(false)}
        title="Actualizar estado"
        description="Selecciona el nuevo estado de esta cita"
        loading={updating}
      >
        <div className="flex flex-col gap-2 mt-2">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateStatus(opt.value)}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl text-left transition-all border-2 ${
                (currentStatus || appt.status) === opt.value
                  ? 'border-[#2C2C2C] bg-[#FAFAFA]'
                  : 'border-transparent bg-[#FAFAFA]'
              }`}
            >
              <span className="text-xl">{opt.emoji}</span>
              <span className="text-sm text-[#374151]">{opt.label}</span>
            </button>
          ))}
        </div>
      </Modal>
    </div>
  )
}
