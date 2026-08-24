import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'

interface TodaySummaryProps {
  reservationsCount: number
  pendingCount: number
}

export function TodaySummary({
  reservationsCount,
  pendingCount,
}: TodaySummaryProps) {
  const hasAppointments = reservationsCount > 0

  return (
    <section className="px-5 py-6 border-t border-[#F0F0F0]">
      <h2 className="text-[#9CA3AF] text-xs font-medium uppercase tracking-wide mb-3">
        Hoy
      </h2>

      {hasAppointments ? (
        <div className="flex items-baseline gap-4 mb-2">
          <p className="text-[#2C2C2C] text-2xl font-semibold">
            {reservationsCount}{' '}
            {reservationsCount === 1 ? 'reserva' : 'reservas'}
          </p>
          {pendingCount > 0 && (
            <p className="text-[#D4950A] text-sm font-medium">
              {pendingCount} {pendingCount === 1 ? 'pendiente' : 'pendientes'}
            </p>
          )}
        </div>
      ) : (
        <p className="text-[#2C2C2C] text-2xl font-semibold mb-2">
          No tienes reservas
        </p>
      )}

      <Link
        to="/provider/calendar"
        className="inline-flex items-center gap-1 text-sm text-[#6B7280] hover:text-[#2C2C2C] transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C2C2C]"
      >
        {hasAppointments ? 'Ver agenda' : 'Ver calendario'}
        <ChevronRight size={14} />
      </Link>
    </section>
  )
}
