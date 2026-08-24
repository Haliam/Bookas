interface BadgeProps {
  tone: 'success' | 'warning' | 'error' | 'info' | 'neutral'
  label: string
  size?: 'sm' | 'md'
}

const toneStyles: Record<BadgeProps['tone'], string> = {
  success: 'bg-[#2C2C2C] text-white',
  warning: 'bg-[#FEF7E0] text-[#D4950A]',
  error: 'bg-[#FDECEA] text-[#E94C59]',
  info: 'bg-[#FAFAFA] text-[#6B7280]',
  neutral: 'bg-[#F5F5F5] text-[#6B7280]',
}

const statusMap: Record<string, BadgeProps['tone']> = {
  confirmed: 'success',
  completed: 'neutral',
  cancelled: 'error',
  pending: 'warning',
}

const statusLabel: Record<string, string> = {
  confirmed: 'Confirmada',
  completed: 'Completada',
  cancelled: 'Cancelada',
  pending: 'Pendiente',
}

export function Badge({ tone, label, size = 'md' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${
        size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-3 py-1 text-xs'
      } ${toneStyles[tone]}`}
    >
      {label}
    </span>
  )
}

export function StatusBadge({ status }: { status: string }) {
  const tone = statusMap[status] ?? 'neutral'
  const label = statusLabel[status] ?? status
  return <Badge tone={tone} label={label} />
}
