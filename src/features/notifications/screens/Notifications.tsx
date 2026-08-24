import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Calendar, X, MessageCircle, Star, AlertCircle } from 'lucide-react'
import { TopBar } from '../../../shared/components/navigation/TopBar'

interface Notification {
  id: string
  type: 'new_appointment' | 'cancellation' | 'reminder' | 'message' | 'review'
  title: string
  message: string
  time: string
  read: boolean
  actionPath?: string
}

// Mock notifications
const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    type: 'new_appointment',
    title: 'Nueva cita',
    message: 'Ana García ha reservado Masaje Relajante para mañana a las 10:00',
    time: 'Hace 5 min',
    read: false,
    actionPath: '/provider/appointments/a1',
  },
  {
    id: 'n2',
    type: 'reminder',
    title: 'Recordatorio',
    message: 'Tienes 3 citas programadas para hoy',
    time: 'Hace 2 horas',
    read: false,
  },
  {
    id: 'n3',
    type: 'review',
    title: 'Nueva reseña',
    message: 'Carlos Méndez dejó una reseña de 5⭐: "Excelente servicio"',
    time: 'Ayer',
    read: true,
    actionPath: '/provider/reviews',
  },
  {
    id: 'n4',
    type: 'cancellation',
    title: 'Cita cancelada',
    message: 'Laura Sánchez canceló su cita del viernes 15:30',
    time: 'Hace 2 días',
    read: true,
  },
  {
    id: 'n5',
    type: 'message',
    title: 'Mensaje de cliente',
    message: 'Pedro Torres: "¿Puedo cambiar la hora de mi cita?"',
    time: 'Hace 3 días',
    read: true,
    actionPath: '/provider/appointments/a2',
  },
]

const NOTIFICATION_CONFIG = {
  new_appointment: {
    icon: Calendar,
    color: '#1BBF8A',
    bg: '#E8FBF4',
  },
  cancellation: {
    icon: X,
    color: '#E94C59',
    bg: '#FDECEA',
  },
  reminder: {
    icon: AlertCircle,
    color: '#F5B11F',
    bg: '#FEF7E0',
  },
  message: {
    icon: MessageCircle,
    color: '#2C2C2C',
    bg: '#FAFAFA',
  },
  review: {
    icon: Star,
    color: '#F5B11F',
    bg: '#FEF7E0',
  },
}

export function ProviderNotifications() {
  const navigate = useNavigate()
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS)

  const unreadCount = notifications.filter((n) => !n.read).length

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    )
  }

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const handleDelete = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const handleNotificationClick = (notification: Notification) => {
    handleMarkAsRead(notification.id)
    if (notification.actionPath) {
      navigate(notification.actionPath)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <TopBar
        title="Notificaciones"
        light
        rightAction={
          unreadCount > 0 ? (
            <button
              onClick={handleMarkAllAsRead}
              className="text-xs text-[#2C2C2C] font-medium"
            >
              Marcar todas
            </button>
          ) : undefined
        }
      />

      <div className="px-5 py-4">
        {/* Summary */}
        {unreadCount > 0 && (
          <div className="bg-white rounded-2xl p-4 mb-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FEF7E0] flex items-center justify-center">
                <AlertCircle size={18} className="text-[#F5B11F]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#111827]">
                  {unreadCount} notificación{unreadCount !== 1 ? 'es' : ''}{' '}
                  nueva{unreadCount !== 1 ? 's' : ''}
                </p>
                <p className="text-xs text-[#9CA3AF]">Toca para ver detalles</p>
              </div>
            </div>
          </div>
        )}

        {/* Notifications list */}
        {notifications.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center shadow-[0_1px_6px_rgba(0,0,0,0.05)]">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#FAFAFA] flex items-center justify-center text-3xl">
              🔔
            </div>
            <h3 className="text-[#111827] font-medium mb-1">
              Sin notificaciones
            </h3>
            <p className="text-sm text-[#9CA3AF]">
              Aquí aparecerán tus alertas y avisos importantes
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {notifications.map((notification) => {
              const config = NOTIFICATION_CONFIG[notification.type]
              const Icon = config.icon

              return (
                <div
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification)}
                  className={`bg-white rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] overflow-hidden cursor-pointer active:scale-[0.98] transition-transform ${
                    !notification.read ? 'ring-2 ring-[#F5B11F]/20' : ''
                  }`}
                >
                  <div className="flex items-start gap-3 p-4">
                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: config.bg }}
                    >
                      <Icon size={18} style={{ color: config.color }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4
                          className={`text-sm ${!notification.read ? 'font-semibold text-[#111827]' : 'font-medium text-[#374151]'}`}
                        >
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <div className="w-2 h-2 rounded-full bg-[#F5B11F] shrink-0 mt-1" />
                        )}
                      </div>
                      <p className="text-sm text-[#6B7280] leading-relaxed mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#9CA3AF]">
                          {notification.time}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDelete(notification.id)
                          }}
                          className="text-xs text-[#9CA3AF] hover:text-[#E94C59]"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Unread indicator bar */}
                  {!notification.read && <div className="h-1 bg-[#F5B11F]" />}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
