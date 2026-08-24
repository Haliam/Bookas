import { COMPANIES, PROVIDER_STATS } from '../../../app/data/mockData'
import { BusinessHeader } from '../components/BusinessHeader'
import { TodaySummary } from '../components/TodaySummary'
import { PendingActions } from '../components/PendingActions'
import { BusinessNavigation } from '../components/BusinessNavigation'
import { WeeklySummary } from '../components/WeeklySummary'
import { useBusinessHomeSummary } from '../hooks/useBusinessHomeSummary'

// Mock: provider's primary business, consistent with ProviderCompanies (first company)
const PRIMARY_BUSINESS = COMPANIES[0]

export function BusinessHome() {
  const {
    todayReservationsCount,
    pendingTodayCount,
    pendingCount,
    pendingDetailPath,
    weekReservationsCount,
  } = useBusinessHomeSummary()

  return (
    <div className="min-h-screen bg-white max-w-[480px] mx-auto">
      <BusinessHeader businessName={PRIMARY_BUSINESS.name} />
      <TodaySummary
        reservationsCount={todayReservationsCount}
        pendingCount={pendingTodayCount}
      />
      <PendingActions count={pendingCount} detailPath={pendingDetailPath} />
      <BusinessNavigation
        servicesPath={`/provider/companies/${PRIMARY_BUSINESS.id}/services`}
      />
      <WeeklySummary
        reservationsCount={weekReservationsCount}
        rating={PROVIDER_STATS.rating}
        reviewCount={PRIMARY_BUSINESS.reviewCount}
      />
    </div>
  )
}
