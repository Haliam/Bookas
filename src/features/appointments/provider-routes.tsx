import { lazy } from 'react'
import type { RouteObject } from 'react-router'
const ProviderAppointmentDetail = lazy(() =>
  import('./screens/ProviderAppointmentDetail').then((m) => ({
    default: m.ProviderAppointmentDetail,
  })),
)
const ProviderAppointments = lazy(() =>
  import('./screens/ProviderAppointments').then((m) => ({
    default: m.ProviderAppointments,
  })),
)

export const appointmentsProviderRoutes: RouteObject[] = [
  { path: 'appointments', Component: ProviderAppointments },
  { path: 'appointments/:id', Component: ProviderAppointmentDetail },
]
