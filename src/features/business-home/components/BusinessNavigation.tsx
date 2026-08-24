import { Link } from 'react-router'
import { Calendar, Users, Scissors, Star, ChevronRight } from 'lucide-react'

interface BusinessNavigationProps {
  servicesPath: string
}

export function BusinessNavigation({ servicesPath }: BusinessNavigationProps) {
  const items = [
    { label: 'Calendario', path: '/provider/calendar', icon: Calendar },
    { label: 'Clientes', path: '/provider/clients', icon: Users },
    { label: 'Servicios', path: servicesPath, icon: Scissors },
    { label: 'Reseñas', path: '/provider/reviews', icon: Star },
  ]

  return (
    <section className="px-5 py-6 border-t border-[#F0F0F0]">
      <h2 className="text-[#9CA3AF] text-xs font-medium uppercase tracking-wide mb-1">
        Tu negocio
      </h2>
      <div className="divide-y divide-[#F0F0F0]">
        {items.map(({ label, path, icon: Icon }) => (
          <Link
            key={label}
            to={path}
            className="flex items-center justify-between py-4 group rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C2C2C]"
          >
            <div className="flex items-center gap-3">
              <Icon size={18} className="text-[#6B7280]" />
              <span className="text-sm text-[#2C2C2C]">{label}</span>
            </div>
            <ChevronRight
              size={16}
              className="text-[#9CA3AF] group-hover:text-[#2C2C2C] transition-colors"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
