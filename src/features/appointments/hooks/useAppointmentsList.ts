import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { PROVIDER_APPOINTMENTS } from '../../../app/data/mockData'
import type { Appointment } from '../../../app/data/mockData'

export type AppointmentFilterTab = 'confirmed' | 'pending' | 'cancelled'

const PAGE_SIZE = 5

/** "Hoy"/"Mañana" relative to the list's first (earliest) date, otherwise a full weekday label. */
export function formatDayLabel(date: string, firstDate: string): string {
  const nextDay = new Date(firstDate + 'T12:00')
  nextDay.setDate(nextDay.getDate() + 1)
  const tomorrowStr = nextDay.toISOString().split('T')[0]
  if (date === firstDate) return 'Hoy'
  if (date === tomorrowStr) return 'Mañana'
  return new Date(date + 'T12:00').toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}

export function useAppointmentsList(filter: AppointmentFilterTab) {
  const [page, setPage] = useState(1)
  const loaderRef = useRef<HTMLDivElement>(null)

  const allFiltered = useMemo(
    () =>
      PROVIDER_APPOINTMENTS.filter((a) => a.status === filter).sort(
        (a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time),
      ),
    [filter],
  )

  const firstDate = allFiltered[0]?.date ?? ''
  const visible = allFiltered.slice(0, page * PAGE_SIZE)
  const hasMore = visible.length < allFiltered.length

  const grouped = useMemo(
    () =>
      visible.reduce<Record<string, Appointment[]>>((acc, appt) => {
        if (!acc[appt.date]) acc[appt.date] = []
        acc[appt.date].push(appt)
        return acc
      }, {}),
    [visible],
  )

  const loadMore = useCallback(() => {
    if (hasMore) setPage((p) => p + 1)
  }, [hasMore])

  useEffect(() => {
    setPage(1)
  }, [filter])

  useEffect(() => {
    const el = loaderRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore()
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [loadMore])

  return { allFiltered, grouped, hasMore, firstDate, loaderRef }
}
