import { ReactNode, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from './Button'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  children?: ReactNode
  confirmLabel?: string
  confirmVariant?: 'primary' | 'destructive'
  cancelLabel?: string
  onConfirm?: () => void
  loading?: boolean
}

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  confirmLabel,
  confirmVariant = 'primary',
  cancelLabel = 'Cancelar',
  onConfirm,
  loading = false,
}: ModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      {/* Sheet */}
      <div
        className="relative bg-white w-full max-w-[430px] rounded-t-3xl p-6 pb-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle */}
        <div className="w-10 h-1 bg-[#F0F0F0] rounded-full mx-auto mb-6" />
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-[#FAFAFA] text-[#6B7280]"
        >
          <X size={16} />
        </button>
        <h3 className="text-[#111827] mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-[#6B7280] mb-4">{description}</p>
        )}
        {children}
        {(confirmLabel || onConfirm) && (
          <div className="flex flex-col gap-3 mt-6">
            <Button
              variant={confirmVariant}
              fullWidth
              loading={loading}
              onClick={onConfirm}
            >
              {confirmLabel || 'Confirmar'}
            </Button>
            <Button variant="ghost" fullWidth onClick={onClose}>
              {cancelLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
