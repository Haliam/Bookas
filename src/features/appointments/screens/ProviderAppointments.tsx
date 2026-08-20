import { useState } from "react";
import { useNavigate } from "react-router";
import { Clock } from "lucide-react";
import { StatusBadge } from "../../../shared/components/ui/Badge";
import { EmptyState } from "../../../shared/components/ui/EmptyState";
import { TopBar } from "../../../shared/components/navigation/TopBar";
import { useAppointmentsList, formatDayLabel, type AppointmentFilterTab } from "../hooks/useAppointmentsList";

export function ProviderAppointments() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<AppointmentFilterTab>("confirmed");
  const { allFiltered, grouped, hasMore, firstDate, loaderRef } = useAppointmentsList(filter);

  const tabs: { key: AppointmentFilterTab; label: string }[] = [

    { key: "confirmed", label: "Confirmadas" },
    { key: "pending", label: "Pendientes" },
    { key: "cancelled", label: "Canceladas" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopBar title="Citas" light />

      {/* Tabs */}
      <div className="flex border-b border-[#F0F0F0] px-5">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
              filter === key ? "text-[#2C2C2C]" : "text-[#9CA3AF]"
            }`}
          >
            {label}
            {filter === key && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2C2C2C] rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="px-5 py-6">
        {allFiltered.length === 0 ? (
          <EmptyState
            emoji="📋"
            title="Sin citas"
            description="No hay citas en esta categoría"
          />
        ) : (
          <div className="flex flex-col gap-6">
            {Object.entries(grouped).map(([date, appts]) => (
              <div key={date}>
                <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-3 capitalize">
                  {formatDayLabel(date, firstDate)}
                </p>
                <div className="flex flex-col gap-3">
                  {appts.map(appt => (
                    <AppointmentCard
                      key={appt.id}
                      appt={appt}
                      onClick={() => navigate(`/provider/appointments/${appt.id}`)}
                    />
                  ))}
                </div>
              </div>
            ))}
            {/* Infinite scroll sentinel */}
            <div ref={loaderRef} className="h-8 flex items-center justify-center">
              {hasMore && <span className="text-xs text-[#9CA3AF]">Cargando...</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AppointmentCard({ appt, onClick }: { appt: any; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-[#E5E7EB] rounded-2xl p-4 cursor-pointer hover:border-[#D1D5DB] hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <p className="text-sm font-medium text-[#2C2C2C]">{appt.serviceName}</p>
          <p className="text-xs text-[#9CA3AF] mt-0.5">Reserva #{appt.id.toUpperCase()}</p>
        </div>
        <StatusBadge status={appt.status} />
      </div>
      <div className="flex items-center gap-3 text-xs text-[#6B7280]">
        <span className="flex items-center gap-1">
          <Clock size={11} className="text-[#9CA3AF]" />
          {appt.time} · {appt.duration}min
        </span>
        <span className="w-1 h-1 rounded-full bg-[#E0E0E0]" />
        <span className="font-medium text-[#2C2C2C] ml-auto">{appt.price}€</span>
      </div>
    </div>
  );
}
