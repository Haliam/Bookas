import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'

interface WeeklySummaryProps {
  reservationsCount: number
  rating: number
  reviewCount: number
}

// Mock: week-over-week trend until a real analytics endpoint exists
const MOCK_WEEK_CHANGE = '+8% vs. semana anterior'

export function WeeklySummary({
  reservationsCount,
  rating,
  reviewCount,
}: WeeklySummaryProps) {
  return (
    <section className="px-5 py-6 border-t border-[#F0F0F0]">
      <h2 className="text-[#9CA3AF] text-xs font-medium uppercase tracking-wide mb-3">
        Esta semana
      </h2>

      <div className="flex items-center justify-between mb-1">
        <p className="text-[#2C2C2C] text-sm">{reservationsCount} reservas</p>
        <p className="text-[#2C2C2C] text-sm">
          {rating.toFixed(1).replace('.', ',')} ★
        </p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-[#9CA3AF] text-xs">{MOCK_WEEK_CHANGE}</p>
        <p className="text-[#9CA3AF] text-xs">{reviewCount} reseñas</p>
      </div>

      <Link
        to="/provider/reports"
        className="inline-flex items-center gap-1 text-sm text-[#6B7280] hover:text-[#2C2C2C] transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C2C2C]"
      >
        Ver resumen
        <ChevronRight size={14} />
      </Link>
    </section>
  )
}
