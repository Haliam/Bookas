import { TopBar } from "../../../shared/components/navigation/TopBar";
import { TrendingUp, Users, Star, Calendar } from "lucide-react";
import { PROVIDER_STATS } from "../../../app/data/mockData";

export function ProviderReports() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar title="Reportes" subtitle="Analytics" back light />

      {/* Placeholder banner */}
      <div className="mx-5 mt-4 bg-[#FEF7E0] rounded-2xl p-4 mb-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">📊</span>
          <p className="text-sm font-medium text-[#D4950A]">Placeholder · Fase 2</p>
        </div>
        <p className="text-xs text-[#D4950A]/80">
          Los reportes completos estarán disponibles en la próxima actualización.
          Los datos mostrados son simulados.
        </p>
      </div>

      <div className="px-5 flex flex-col gap-5">
        {/* Period selector */}
        <div className="flex gap-2">
          {["Hoy", "Semana", "Mes", "Año"].map((p, i) => (
            <button
              key={p}
              className={`flex-1 h-9 rounded-xl text-xs font-medium ${
                i === 2 ? "bg-[#2C2C2C] text-white" : "bg-white text-[#6B7280] border border-[#F0F0F0]"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: "💰", label: "Ingresos", value: "2.840€", sub: "↑ 12% vs mes anterior", color: "#2C2C2C" },
            { icon: "📅", label: "Citas totales", value: "48", sub: "↑ 8% vs mes anterior", color: "#6B7280" },
            { icon: "👥", label: "Nuevos clientes", value: "14", sub: "Este mes", color: "#F5B11F" },
            { icon: "⭐", label: "Rating promedio", value: "4.8", sub: "Basado en 23 reseñas", color: "#E14F61" },
          ].map(({ icon, label, value, sub, color }) => (
            <div key={label} className="bg-white rounded-2xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)]">
              <span className="text-2xl">{icon}</span>
              <p className="text-xl font-semibold text-[#111827] mt-2">{value}</p>
              <p className="text-xs text-[#9CA3AF]">{label}</p>
              <p className="text-[10px] mt-1" style={{ color }}>{sub}</p>
            </div>
          ))}
        </div>

        {/* Revenue chart placeholder */}
        <div className="bg-white rounded-2xl p-5 shadow-[0_1px_6px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-[#111827]">Ingresos mensuales</p>
              <p className="text-xs text-[#9CA3AF]">Últimos 6 meses</p>
            </div>
            <TrendingUp size={18} className="text-[#2C2C2C]" />
          </div>
          {/* Bar chart mock */}
          <div className="flex items-end gap-2 h-28 mb-2">
            {[
              { month: "Oct", val: 55 },
              { month: "Nov", val: 70 },
              { month: "Dic", val: 85 },
              { month: "Ene", val: 65 },
              { month: "Feb", val: 90 },
              { month: "Mar", val: 75 },
            ].map(({ month, val }, i) => (
              <div key={month} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-xl transition-all"
                  style={{
                    height: `${val}%`,
                    background: i === 4 ? "#2C2C2C" : "#FAFAFA",
                  }}
                />
                <span className="text-[9px] text-[#9CA3AF]">{month}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] text-[#D1D5DB]">Datos simulados · No funcional</p>
        </div>

        {/* Top services */}
        <div className="bg-white rounded-2xl p-5 shadow-[0_1px_6px_rgba(0,0,0,0.05)]">
          <p className="text-sm font-medium text-[#111827] mb-4">Servicios más reservados</p>
          <div className="flex flex-col gap-3">
            {[
              { name: "Masaje Relajante", count: 18, pct: 37, price: 65 },
              { name: "Aromaterapia Premium", count: 12, pct: 25, price: 90 },
              { name: "Ritual Zen Completo", count: 10, pct: 21, price: 130 },
              { name: "Meditación Guiada", count: 8, pct: 17, price: 35 },
            ].map(({ name, count, pct, price }, i) => (
              <div key={name}>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm text-[#374151]">{name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#9CA3AF]">{count} citas</span>
                    <span className="text-xs font-medium text-[#111827]">{price}€</span>
                  </div>
                </div>
                <div className="h-2 bg-[#FAFAFA] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${pct}%`,
                      background: i === 0 ? "#2C2C2C" : i === 1 ? "#6B7280" : i === 2 ? "#9CA3AF" : "#E0E0E0",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-4" />
      </div>
    </div>
  );
}
