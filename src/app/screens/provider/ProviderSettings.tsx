import { useState } from "react";
import { TopBar } from "../../components/navigation/TopBar";
import { useApp } from "../../context/AppContext";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router";

export function ProviderSettings() {
  const navigate = useNavigate();
  const { user } = useApp();

  const [notifications, setNotifications] = useState({
    newBooking: true,
    cancellation: true,
    reminder: true,
    review: false,
    marketing: false,
  });

  const toggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const [bookingSettings, setBookingSettings] = useState({
    autoConfirm: true,
    buffer: true,
  });

  const toggleBooking = (key: keyof typeof bookingSettings) => {
    setBookingSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const Switch = ({ value, onChange }: { value: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`w-12 h-6 rounded-full relative transition-all duration-200 ${value ? "bg-[#F5B11F]" : "bg-[#D1D5DB]"}`}
    >
      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-200 ${value ? "left-6" : "left-0.5"}`} />
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      <TopBar title="Configuración" subtitle="Proveedor" back light />

      <div className="px-5 py-5 flex flex-col gap-5">
        {/* Business profile */}
        <div>
          <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-2 px-1">Perfil profesional</p>
          <div className="bg-white rounded-2xl p-5 shadow-[0_1px_6px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#F4FAF4]">
              <img src={user.avatar} alt={user.name} className="w-14 h-14 rounded-2xl object-cover" />
              <div>
                <p className="font-medium text-[#111827]">{user.name}</p>
                <p className="text-sm text-[#9CA3AF]">{user.email}</p>
                <span className="text-[10px] bg-[#FEF7E0] text-[#D4950A] px-2 py-0.5 rounded-full">Proveedor verificado</span>
              </div>
            </div>
            {[
              { label: "Nombre del negocio", value: "Zen Wellness Studio" },
              { label: "CIF/NIF", value: "B-12345678" },
              { label: "Dirección fiscal", value: "Calle Serrano 45, Madrid" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between py-3 border-b border-[#F4FAF4] last:border-0">
                <div>
                  <p className="text-xs text-[#9CA3AF]">{label}</p>
                  <p className="text-sm text-[#111827]">{value}</p>
                </div>
                <button className="text-xs text-[#2C2C2C]">Editar</button>
              </div>
            ))}
          </div>
        </div>

        {/* Booking settings */}
        <div>
          <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-2 px-1">Reservas</p>
          <div className="bg-white rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="flex items-center justify-between p-4">
              <div className="flex-1 pr-4">
                <p className="text-sm text-[#111827]">Confirmación automática</p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">
                  {bookingSettings.autoConfirm
                    ? "Las reservas con hueco disponible se confirman al instante"
                    : "Debes aprobar manualmente cada solicitud de reserva"}
                </p>
              </div>
              <Switch value={bookingSettings.autoConfirm} onChange={() => toggleBooking("autoConfirm")} />
            </div>
            <div className="flex items-center justify-between p-4 border-t border-[#F4FAF4]">
              <div className="flex-1 pr-4">
                <p className="text-sm text-[#111827]">Buffer entre citas</p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">15 min de descanso entre servicios</p>
              </div>
              <Switch value={bookingSettings.buffer} onChange={() => toggleBooking("buffer")} />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-2 px-1">Notificaciones</p>
          <div className="bg-white rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] overflow-hidden">
            {[
              { key: "newBooking" as const, label: "Nueva reserva", desc: "Alerta cuando recibo una cita" },
              { key: "cancellation" as const, label: "Cancelación", desc: "Cuando un cliente cancela" },
              { key: "reminder" as const, label: "Recordatorio", desc: "1h antes de cada cita" },
              { key: "review" as const, label: "Nueva reseña", desc: "Cuando te valoran" },
              { key: "marketing" as const, label: "Novedades de BookAs", desc: "Tips y actualizaciones" },
            ].map(({ key, label, desc }, i) => (
              <div key={key} className={`flex items-center justify-between p-4 ${i > 0 ? "border-t border-[#F4FAF4]" : ""}`}>
                <div>
                  <p className="text-sm text-[#111827]">{label}</p>
                  <p className="text-xs text-[#9CA3AF]">{desc}</p>
                </div>
                <Switch value={notifications[key]} onChange={() => toggle(key)} />
              </div>
            ))}
          </div>
        </div>

        {/* Plan */}
        <div className="bg-[#2C2C2C] rounded-2xl p-5">
          <p className="text-white/80 text-xs mb-1">Plan actual</p>
          <p className="text-white font-semibold text-xl mb-1">Starter · Gratis</p>
          <p className="text-white/70 text-xs mb-4">32/50 reservas este mes · 1 negocio activo</p>
          <Button
            variant="secondary"
            size="sm"
            className="bg-white text-[#2C2C2C] border-0"
          >
            Ver planes premium
          </Button>
        </div>

        <div className="h-4" />
      </div>
    </div>
  );
}
