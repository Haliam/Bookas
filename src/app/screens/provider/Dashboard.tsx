import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Bell, Calendar } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { PROVIDER_APPOINTMENTS } from "../../data/mockData";
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
  const upcomingAppts = PROVIDER_APPOINTMENTS.slice(0, 5);

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
      </div>

      <div className="px-5 py-6">
        {/* Upcoming appointments */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#2C2C2C] font-medium">Próximas citas</h2>
            <button
              onClick={() => navigate("/provider/appointments")}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F5] hover:bg-[#E8E8E8] transition-colors"
              title="Ver todas las citas del día"
            >
              <Calendar size={16} className="text-[#6B7280]" />
            </button>
          </div>

          {loading ? (
            <SkeletonList count={3} />
          ) : upcomingAppts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#9CA3AF] text-sm">No hay citas programadas</p>
            </div>
          ) : (
            <div className="space-y-3">
              {upcomingAppts.map(appt => (
                <div
                  key={appt.id}
                  className="p-4 bg-white border border-[#E5E7EB] rounded-2xl hover:border-[#D1D5DB] hover:shadow-sm transition-all cursor-pointer"
                  onClick={() => navigate(`/provider/appointments/${appt.id}`)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-[#2C2C2C]">{appt.serviceName}</p>
                    <StatusBadge status={appt.status} />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                    <span>{appt.time}</span>
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