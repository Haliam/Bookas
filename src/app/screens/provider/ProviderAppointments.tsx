import { useState } from "react";
import { useNavigate } from "react-router";
import { Clock, Search, Filter } from "lucide-react";
import { PROVIDER_APPOINTMENTS } from "../../data/mockData";
import { StatusBadge } from "../../components/ui/Badge";
import { EmptyState } from "../../components/ui/EmptyState";
import { TopBar } from "../../components/navigation/TopBar";

type Filter2 = "all" | "confirmed" | "pending" | "completed" | "cancelled";

export function ProviderAppointments() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Filter2>("all");
  const [search, setSearch] = useState("");

  const filtered = PROVIDER_APPOINTMENTS.filter(a => {
    const matchFilter = filter === "all" || a.status === filter;
    const matchSearch = !search || a.serviceName.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const statusCounts = {
    all: PROVIDER_APPOINTMENTS.length,
    confirmed: PROVIDER_APPOINTMENTS.filter(a => a.status === "confirmed").length,
    pending: PROVIDER_APPOINTMENTS.filter(a => a.status === "pending").length,
    completed: PROVIDER_APPOINTMENTS.filter(a => a.status === "completed").length,
    cancelled: PROVIDER_APPOINTMENTS.filter(a => a.status === "cancelled").length,
  };

  const filterLabels: Record<Filter2, string> = {
    all: "Todas",
    confirmed: "Confirmadas",
    pending: "Pendientes",
    completed: "Completadas",
    cancelled: "Canceladas",
  };

  const today = new Date().toISOString().split("T")[0];
  const todayAppts = filtered.filter(a => a.date === "2026-03-01");
  const otherAppts = filtered.filter(a => a.date !== "2026-03-01");

  return (
    <div className="min-h-screen bg-white">
      <TopBar title="Citas" light />

      <div className="px-5 pb-4">
        {/* Search */}
        <div className="relative mb-4">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar servicio o cliente..."
            className="w-full h-11 bg-[#FAFAFA] rounded-2xl pl-10 pr-4 text-sm text-[#2C2C2C] placeholder:text-[#9CA3AF] border border-[#F0F0F0] focus:outline-none focus:border-[#E0E0E0]"
          />
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-none pb-4">
          {(Object.keys(filterLabels) as Filter2[]).map(f => {
            const count = statusCounts[f];
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full whitespace-nowrap text-xs shrink-0 transition-all ${
                  filter === f
                    ? "bg-[#2C2C2C] text-white"
                    : "bg-[#FAFAFA] text-[#6B7280] border border-[#F0F0F0]"
                }`}
              >
                {filterLabels[f]}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  filter === f ? "bg-white/20 text-white" : "bg-white text-[#9CA3AF]"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <EmptyState
            emoji="📋"
            title="Sin citas"
            description="No hay citas que coincidan con los filtros aplicados"
          />
        ) : (
          <div className="flex flex-col gap-5">
            {/* Today */}
            {todayAppts.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#2C2C2C]" />
                  <p className="text-xs text-[#6B7280] font-medium">Hoy</p>
                </div>
                <div className="flex flex-col gap-2">
                  {todayAppts.map(appt => (
                    <AppointmentRow
                      key={appt.id}
                      appt={appt}
                      onClick={() => navigate(`/provider/appointments/${appt.id}`)}
                    />
                  ))}
                </div>
              </div>
            )}

            {otherAppts.length > 0 && (
              <div>
                <p className="text-xs text-[#6B7280] font-medium mb-2">Otros</p>
                <div className="flex flex-col gap-2">
                  {otherAppts.map(appt => (
                    <AppointmentRow
                      key={appt.id}
                      appt={appt}
                      onClick={() => navigate(`/provider/appointments/${appt.id}`)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function AppointmentRow({ appt, onClick }: { appt: any; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#FAFAFA] rounded-2xl p-4 cursor-pointer hover:bg-[#F5F5F5] transition-colors border border-[#F0F0F0]"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <p className="text-sm font-medium text-[#2C2C2C]">{appt.serviceName}</p>
          <p className="text-xs text-[#9CA3AF]">Cliente · Reserva #{appt.id.toUpperCase()}</p>
        </div>
        <StatusBadge status={appt.status} />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Clock size={11} className="text-[#9CA3AF]" />
          <span className="text-xs text-[#6B7280]">{appt.time} · {appt.duration}min</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-[#E0E0E0]" />
        <span className="text-xs text-[#6B7280]">{new Date(appt.date + "T12:00").toLocaleDateString("es-ES", { day: "numeric", month: "short" })}</span>
        <span className="text-sm font-medium text-[#2C2C2C] ml-auto">{appt.price}€</span>
      </div>
    </div>
  );
}
