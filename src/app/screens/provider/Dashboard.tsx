import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Bell, TrendingUp, Calendar, Clock, Building2 } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { PROVIDER_STATS, PROVIDER_APPOINTMENTS } from "../../data/mockData";
import { StatusBadge } from "../../components/ui/Badge";
import { SkeletonList } from "../../components/ui/Skeleton";

export function ProviderDashboard() {
  const navigate = useNavigate();
  const { user } = useApp();
  const [loading, setLoading] = useState(true);
  const [unreadNotifications] = useState(2); // Mock unread count

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  const firstName = user.name.split(" ")[0];
  const today = new Date().toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });
  const todayAppts = PROVIDER_APPOINTMENTS.filter(a => a.date === "2026-03-01");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-5 pt-14 pb-6 border-b border-[#F0F0F0]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-[#2C2C2C] font-semibold text-2xl mb-1">Hola, {firstName}</h1>
            <p className="text-[#6B7280] text-sm capitalize">{today}</p>
          </div>
          <button
            onClick={() => navigate("/provider/notifications")}
            className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center relative hover:bg-[#E8E8E8] transition-colors"
          >
            <Bell size={18} className="text-[#2C2C2C]" />
            {unreadNotifications > 0 && (
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#E94C59]" />
            )}
          </button>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3">
            <p className="text-[#2C2C2C] font-semibold text-xl">{PROVIDER_STATS.rating}</p>
            <p className="text-[#9CA3AF] text-xs mt-1">Rating</p>
          </div>
          <div className="text-center p-3 border-x border-[#F0F0F0]">
            <p className="text-[#2C2C2C] font-semibold text-xl">{PROVIDER_STATS.todayAppointments}</p>
            <p className="text-[#9CA3AF] text-xs mt-1">Hoy</p>
          </div>
          <div className="text-center p-3">
            <p className="text-[#2C2C2C] font-semibold text-xl">{PROVIDER_STATS.totalClients}</p>
            <p className="text-[#9CA3AF] text-xs mt-1">Clientes</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-6">
        {/* Quick actions */}
        <div className="mb-8">
          <h2 className="text-[#2C2C2C] font-medium mb-4">Acciones rápidas</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Mis negocios", icon: Building2, action: () => navigate("/provider/companies") },
              { label: "Calendario", icon: Calendar, action: () => navigate("/provider/calendar") },
              { label: "Reportes", icon: TrendingUp, action: () => navigate("/provider/reports") },
              { label: "Citas", icon: Clock, action: () => navigate("/provider/appointments") },
            ].map(({ label, icon: Icon, action }) => (
              <button
                key={label}
                onClick={action}
                className="flex items-center gap-3 p-4 bg-[#FAFAFA] rounded-2xl hover:bg-[#F5F5F5] transition-colors text-left"
              >
                <Icon size={20} className="text-[#6B7280]" />
                <span className="text-sm text-[#2C2C2C] font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Today's appointments */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#2C2C2C] font-medium">Citas de hoy</h2>
            <button
              onClick={() => navigate("/provider/appointments")}
              className="text-xs text-[#6B7280] hover:text-[#2C2C2C] transition-colors"
            >
              Ver todas →
            </button>
          </div>

          {loading ? (
            <SkeletonList count={3} />
          ) : todayAppts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#9CA3AF] text-sm">No hay citas programadas para hoy</p>
            </div>
          ) : (
            <div className="space-y-3">
              {todayAppts.map(appt => (
                <div
                  key={appt.id}
                  className="p-4 bg-[#FAFAFA] rounded-2xl hover:bg-[#F5F5F5] transition-colors cursor-pointer"
                  onClick={() => navigate(`/provider/appointments/${appt.id}`)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-[#2C2C2C]">{appt.serviceName}</p>
                    <StatusBadge status={appt.status} />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {appt.time}
                    </span>
                    <span>{appt.clientName}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}