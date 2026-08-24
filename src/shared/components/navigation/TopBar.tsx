import { ReactNode } from 'react'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

interface TopBarProps {
  title?: string
  subtitle?: string
  back?: boolean | string
  rightAction?: ReactNode
  transparent?: boolean
  light?: boolean
}

export function TopBar({
  title,
  subtitle,
  back,
  rightAction,
  transparent = false,
  light = false,
}: TopBarProps) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (typeof back === 'string') {
      navigate(back)
    } else {
      navigate(-1)
    }
  }

  return (
    <div
      className={`
        sticky top-0 z-30 flex items-center px-4 h-14
        ${transparent ? 'bg-transparent' : light ? 'bg-white/95 backdrop-blur-md border-b border-[#F0F0F0]' : 'bg-white'}
      `}
    >
      {back !== undefined && (
        <button
          onClick={handleBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FAFAFA] border border-[#F0F0F0] text-[#2C2C2C] mr-3 shrink-0 hover:bg-[#F5F5F5] transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      <div className="flex-1 min-w-0">
        {title && <h4 className="truncate text-[#2C2C2C]">{title}</h4>}
        {subtitle && (
          <p className="text-xs text-[#9CA3AF] truncate">{subtitle}</p>
        )}
      </div>
      {rightAction && <div className="ml-3 shrink-0">{rightAction}</div>}
    </div>
  )
}
