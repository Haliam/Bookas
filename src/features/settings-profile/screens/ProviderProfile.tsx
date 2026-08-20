import { useNavigate } from "react-router";
import { Settings, ChevronRight, Star, TrendingUp, Users, LogOut, Building2, Bell, Shield, Calendar } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { PROVIDER_STATS } from "../../data/mockData";

export function ProviderProfile() {
  const navigate = useNavigate();
  const { user } = useApp();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-5 pt-14 pb-6 border-b border-[#F0F0F0]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-2xl object-cover"
            />
            <div>
              <h2 className="text-[#2C2C2C] font-semibold text-lg">{user.name}</h2>
              <p className="text-[#6B7280] text-sm">{user.email}</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/provider/settings")}
            className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#E8E8E8] transition-colors"
          >
            <Settings size={18} className="text-[#2C2C2C]" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3">
            <p className="text-[#2C2C2C] font-semibold text-xl">{PROVIDER_STATS.totalClients}</p>
            <p className="text-[#9CA3AF] text-xs mt-1">Clientes</p>
          </div>
          <div className="text-center p-3 border-x border-[#F0F0F0]">
            <p className="text-[#2C2C2C] font-semibold text-xl">{PROVIDER_STATS.rating}</p>
            <p className="text-[#9CA3AF] text-xs mt-1">Rating</p>
          </div>
          <div className="text-center p-3">
            <p className="text-[#2C2C2C] font-semibold text-xl">{PROVIDER_STATS.completionRate}%</p>
            <p className="text-[#9CA3AF] text-xs mt-1">Completas</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="px-5 py-6">
        <div className="mb-8">
          <h3 className="text-[#2C2C2C] font-medium mb-4">Mi negocio</h3>
          <div className="space-y-2">
            {[
              { icon: Building2, label: "Mis negocios", path: "/provider/companies" },
              { icon: Calendar, label: "Calendario", path: "/provider/calendar" },
              { icon: TrendingUp, label: "Reportes", path: "/provider/reports" },
              { icon: Star, label: "Reseñas", path: "/provider/reviews" },
            ].map(({ icon: Icon, label, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="w-full flex items-center justify-between p-4 bg-[#FAFAFA] rounded-2xl hover:bg-[#F5F5F5] transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-[#6B7280]" />
                  <span className="text-sm text-[#2C2C2C]">{label}</span>
                </div>
                <ChevronRight size={16} className="text-[#9CA3AF]" />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-[#2C2C2C] font-medium mb-4">Cuenta</h3>
          <div className="space-y-2">
            {[
              { icon: Bell, label: "Notificaciones", path: "/provider/settings" },
              { icon: Shield, label: "Privacidad", path: "/provider/settings" },
            ].map(({ icon: Icon, label, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="w-full flex items-center justify-between p-4 bg-[#FAFAFA] rounded-2xl hover:bg-[#F5F5F5] transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-[#6B7280]" />
                  <span className="text-sm text-[#2C2C2C]">{label}</span>
                </div>
                <ChevronRight size={16} className="text-[#9CA3AF]" />
              </button>
            ))}
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 p-4 text-[#E94C59] hover:bg-[#FEF2F2] rounded-2xl transition-colors">
          <LogOut size={18} />
          <span className="text-sm font-medium">Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
}