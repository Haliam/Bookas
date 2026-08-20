import { COMPANIES, PROVIDER_APPOINTMENTS, PROVIDER_STATS } from "../../data/mockData";
import { BusinessHeader } from "../../components/business-home/BusinessHeader";
import { TodaySummary } from "../../components/business-home/TodaySummary";
import { PendingActions } from "../../components/business-home/PendingActions";
import { BusinessNavigation } from "../../components/business-home/BusinessNavigation";
import { WeeklySummary } from "../../components/business-home/WeeklySummary";

// Mock: provider's primary business, consistent with ProviderCompanies (first company)
const PRIMARY_BUSINESS = COMPANIES[0];

export function BusinessHome() {
  const confirmedAppts = PROVIDER_APPOINTMENTS
    .filter(a => a.status === "confirmed")
    .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
  const todayStr = confirmedAppts[0]?.date ?? new Date().toISOString().split("T")[0];

  const todayAppts = PROVIDER_APPOINTMENTS.filter(a => a.date === todayStr && a.status !== "cancelled");
  const pendingTodayAppts = todayAppts.filter(a => a.status === "pending");

  const pendingAppts = PROVIDER_APPOINTMENTS.filter(a => a.status === "pending");
  const pendingDetailPath =
    pendingAppts.length === 1 ? `/provider/appointments/${pendingAppts[0].id}` : "/provider/appointments";

  const weekReservationsCount = PROVIDER_APPOINTMENTS.filter(a => a.status !== "cancelled").length;

  return (
    <div className="min-h-screen bg-white max-w-[480px] mx-auto">
      <BusinessHeader businessName={PRIMARY_BUSINESS.name} />
      <TodaySummary reservationsCount={todayAppts.length} pendingCount={pendingTodayAppts.length} />
      <PendingActions count={pendingAppts.length} detailPath={pendingDetailPath} />
      <BusinessNavigation servicesPath={`/provider/companies/${PRIMARY_BUSINESS.id}/services`} />
      <WeeklySummary
        reservationsCount={weekReservationsCount}
        rating={PROVIDER_STATS.rating}
        reviewCount={PRIMARY_BUSINESS.reviewCount}
      />
    </div>
  );
}
