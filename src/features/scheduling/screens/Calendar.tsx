import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, Settings, Plus, Clock, X } from "lucide-react";
import { TopBar } from "../../../shared/components/navigation/TopBar";
import { Button } from "../../../shared/components/ui/Button";
import { PROVIDER_APPOINTMENTS } from "../../../app/data/mockData";

type ViewMode = "month" | "week";

export function ProviderCalendar() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<ViewMode>("month");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Get current month data
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  // Generate calendar days
  const calendarDays: (number | null)[] = [];
  // Add empty slots for days before month starts
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  // Add actual days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Mock: appointments by date
  const getAppointmentsForDate = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return PROVIDER_APPOINTMENTS.filter(a => a.date === dateStr);
  };

  const hasAppointments = (day: number) => getAppointmentsForDate(day).length > 0;

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  const monthName = currentDate.toLocaleDateString("es-ES", { month: "long", year: "numeric" });

  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDayClick = (day: number) => {
    const date = new Date(year, month, day);
    setSelectedDate(date);
  };

  const selectedDateAppts = selectedDate ? getAppointmentsForDate(selectedDate.getDate()) : [];

  return (
    <div className="min-h-screen bg-white">
      <TopBar
        title="Calendario"
        light
        rightAction={
          <button
            onClick={() => navigate("/provider/hours")}
            className="w-9 h-9 rounded-xl bg-white/90 flex items-center justify-center"
          >
            <Settings size={16} className="text-[#374151]" />
          </button>
        }
      />

      <div className="px-5 py-4">
        {/* View mode toggle */}
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-white rounded-xl p-1 shadow-[0_1px_6px_rgba(0,0,0,0.05)] flex gap-1">
            {(["month", "week"] as ViewMode[]).map(mode => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  viewMode === mode
                    ? "bg-[#F5B11F] text-white"
                    : "text-[#9CA3AF]"
                }`}
              >
                {mode === "month" ? "Mes" : "Semana"}
              </button>
            ))}
          </div>
          <button
            onClick={() => navigate("/provider/block-time")}
            className="ml-auto h-8 px-3 bg-white rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] flex items-center gap-1.5 text-xs text-[#374151]"
          >
            <Plus size={13} /> Bloquear
          </button>
        </div>

        {/* Calendar header */}
        <div className="bg-white rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] mb-4">
          <div className="flex items-center justify-between p-4 border-b border-[#F4FAF4]">
            <button onClick={goToPrevMonth} className="w-8 h-8 rounded-lg hover:bg-[#FAFAFA] flex items-center justify-center">
              <ChevronLeft size={18} className="text-[#6B7280]" />
            </button>
            <h3 className="text-[#111827] font-medium capitalize">{monthName}</h3>
            <button onClick={goToNextMonth} className="w-8 h-8 rounded-lg hover:bg-[#FAFAFA] flex items-center justify-center">
              <ChevronRight size={18} className="text-[#6B7280]" />
            </button>
          </div>

          {/* Calendar grid */}
          <div className="p-4">
            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {["D", "L", "M", "X", "J", "V", "S"].map(day => (
                <div key={day} className="text-center text-xs text-[#9CA3AF] font-medium">
                  {day}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => {
                if (day === null) {
                  return <div key={`empty-${index}`} />;
                }

                const hasAppts = hasAppointments(day);
                const today = isToday(day);
                const selected = selectedDate?.getDate() === day;

                return (
                  <button
                    key={day}
                    onClick={() => handleDayClick(day)}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center relative transition-all ${
                      selected
                        ? "bg-[#F5B11F] text-white"
                        : today
                        ? "bg-[#2C2C2C] text-white font-medium"
                        : "hover:bg-[#FAFAFA] text-[#374151]"
                    }`}
                  >
                    <span className="text-sm">{day}</span>
                    {hasAppts && (
                      <div className={`absolute bottom-1 w-1 h-1 rounded-full ${
                        selected ? "bg-white" : "bg-[#F5B11F]"
                      }`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-4 px-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white border-2 border-[#2C2C2C]" />
            <span className="text-xs text-[#6B7280]">Hoy</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white border-2 border-[#F5B11F]" />
            <span className="text-xs text-[#6B7280]">Con citas</span>
          </div>
        </div>

        {/* Selected date appointments */}
        {selectedDate && (
          <div className="bg-white rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-4 border-b border-[#F4FAF4] flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-[#111827]">
                  {selectedDate.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}
                </h3>
                <p className="text-xs text-[#9CA3AF]">
                  {selectedDateAppts.length} cita{selectedDateAppts.length !== 1 ? "s" : ""}
                </p>
              </div>
              <button onClick={() => setSelectedDate(null)} className="w-8 h-8 rounded-lg hover:bg-[#FAFAFA] flex items-center justify-center">
                <X size={16} className="text-[#9CA3AF]" />
              </button>
            </div>

            <div className="p-4">
              {selectedDateAppts.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-[#FAFAFA] flex items-center justify-center text-2xl">
                    📅
                  </div>
                  <p className="text-sm text-[#9CA3AF]">Sin citas este día</p>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {selectedDateAppts.map(appt => (
                    <div
                      key={appt.id}
                      onClick={() => navigate(`/provider/appointments/${appt.id}`)}
                      className="flex items-center gap-3 p-3 bg-[#FAFAFA] rounded-xl cursor-pointer hover:bg-[#F5F5F5] transition-colors"
                    >
                      <div
                        className="w-1 h-10 rounded-full shrink-0"
                        style={{
                          background: appt.status === "confirmed" ? "#1BBF8A" : appt.status === "pending" ? "#F5B11F" : "#E94C59"
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#111827] truncate">{appt.serviceName}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Clock size={11} className="text-[#9CA3AF]" />
                          <span className="text-xs text-[#9CA3AF]">{appt.time}</span>
                          <span className="text-xs text-[#9CA3AF]">· {appt.duration}min</span>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-[#111827]">{appt.price}€</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quick actions */}
        <div className="mt-4 flex gap-3">
          <Button
            variant="outline"
            fullWidth
            onClick={() => navigate("/provider/hours")}
            iconLeft={<Settings size={16} />}
          >
            Configurar horarios
          </Button>
        </div>
      </div>
    </div>
  );
}
