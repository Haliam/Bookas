import { useLocation, useNavigate } from 'react-router'
import { Home, Calendar, Building2, User } from 'lucide-react'

interface NavItem {
  label: string
  icon: typeof Home
  path: string
}

const PROVIDER_NAV: NavItem[] = [
  { label: 'Inicio', icon: Home, path: '/provider' },
  { label: 'Citas', icon: Calendar, path: '/provider/appointments' },
  { label: 'Negocios', icon: Building2, path: '/provider/companies' },
  { label: 'Perfil', icon: User, path: '/provider/profile' },
]

export function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  const accentColor = '#2C2C2C'

  const isActive = (path: string) => {
    if (path === '/provider') {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-40 bg-white border-t border-[#E0E0E0]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 8px)' }}
    >
      <div className="flex items-stretch h-[64px]">
        {PROVIDER_NAV.map(({ label, icon: Icon, path }) => {
          const active = isActive(path)
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex-1 flex flex-col items-center justify-center gap-1 min-h-[48px] transition-colors"
              style={{ color: active ? accentColor : '#9CA3AF' }}
            >
              <Icon size={22} strokeWidth={active ? 2.2 : 1.8} />
              <span
                className={`text-[10px] ${active ? 'font-medium' : 'font-normal'}`}
              >
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
