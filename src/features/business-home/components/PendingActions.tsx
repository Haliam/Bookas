import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'

interface PendingActionsProps {
  count: number
  detailPath: string
}

// Mock: relative-time label until pending requests carry a real timestamp
const MOCK_RELATIVE_TIME = 'hace 12 min'

export function PendingActions({ count, detailPath }: PendingActionsProps) {
  if (count === 0) return null

  return (
    <section className="px-5 py-6 border-t border-[#F0F0F0]">
      <h2 className="text-[#9CA3AF] text-xs font-medium uppercase tracking-wide mb-3">
        Pendiente
      </h2>
      <Link
        to={detailPath}
        className="flex items-center justify-between group rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C2C2C]"
      >
        <div>
          {count === 1 ? (
            <>
              <p className="text-[#2C2C2C] text-sm font-medium">
                Solicitud de reserva
              </p>
              <p className="text-[#9CA3AF] text-xs mt-0.5">
                Nueva solicitud · {MOCK_RELATIVE_TIME}
              </p>
            </>
          ) : (
            <p className="text-[#2C2C2C] text-sm font-medium">
              {count} solicitudes nuevas
            </p>
          )}
        </div>
        <ChevronRight
          size={16}
          className="text-[#9CA3AF] group-hover:text-[#2C2C2C] transition-colors"
        />
      </Link>
    </section>
  )
}
