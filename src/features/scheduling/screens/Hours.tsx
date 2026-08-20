import { useState } from "react";
import { useNavigate } from "react-router";
import { Clock, Plus, X } from "lucide-react";
import { TopBar } from "../../../shared/components/navigation/TopBar";
import { Button } from "../../../shared/components/ui/Button";

interface DaySchedule {
  day: string;
  enabled: boolean;
  slots: TimeSlot[];
}

interface TimeSlot {
  id: string;
  start: string;
  end: string;
}

const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const DEFAULT_SCHEDULE: DaySchedule[] = DAYS.map((day, index) => ({
  day,
  enabled: index < 6, // Monday-Saturday enabled by default
  slots: index < 6
    ? [{ id: `${day}-1`, start: "09:00", end: "14:00" }, { id: `${day}-2`, start: "16:00", end: "20:00" }]
    : [],
}));

export function ProviderHours() {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState<DaySchedule[]>(DEFAULT_SCHEDULE);
  const [loading, setLoading] = useState(false);

  const toggleDay = (dayIndex: number) => {
    setSchedule(prev => prev.map((day, i) =>
      i === dayIndex ? { ...day, enabled: !day.enabled } : day
    ));
  };

  const addSlot = (dayIndex: number) => {
    setSchedule(prev => prev.map((day, i) => {
      if (i === dayIndex) {
        const newSlot: TimeSlot = {
          id: `${day.day}-${Date.now()}`,
          start: "09:00",
          end: "14:00",
        };
        return { ...day, slots: [...day.slots, newSlot] };
      }
      return day;
    }));
  };

  const removeSlot = (dayIndex: number, slotId: string) => {
    setSchedule(prev => prev.map((day, i) => {
      if (i === dayIndex) {
        return { ...day, slots: day.slots.filter(s => s.id !== slotId) };
      }
      return day;
    }));
  };

  const updateSlot = (dayIndex: number, slotId: string, field: "start" | "end", value: string) => {
    setSchedule(prev => prev.map((day, i) => {
      if (i === dayIndex) {
        return {
          ...day,
          slots: day.slots.map(s => s.id === slotId ? { ...s, [field]: value } : s),
        };
      }
      return day;
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    navigate("/provider/calendar");
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBar title="Horarios de atención" back light />

      <div className="px-5 py-4">
        {/* Info card */}
        <div className="bg-[#FAFAFA] rounded-2xl p-4 mb-5 flex gap-3 border border-[#F0F0F0]">
          <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center shrink-0">
            <Clock size={18} className="text-[#6B7280]" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-[#111827] mb-1">
              Configura tu disponibilidad
            </p>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Define los horarios en los que tus clientes pueden reservar citas. Puedes tener múltiples rangos por día.
            </p>
          </div>
        </div>

        {/* Schedule editor */}
        <div className="flex flex-col gap-3">
          {schedule.map((daySchedule, dayIndex) => (
            <div
              key={daySchedule.day}
              className="bg-white rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              {/* Day header */}
              <div className="flex items-center justify-between p-4 border-b border-[#F4FAF4]">
                <h3 className="text-sm font-medium text-[#111827]">{daySchedule.day}</h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <span className="text-xs text-[#9CA3AF]">
                    {daySchedule.enabled ? "Abierto" : "Cerrado"}
                  </span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={daySchedule.enabled}
                      onChange={() => toggleDay(dayIndex)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#F0F0F0] rounded-full peer-checked:bg-[#2C2C2C] transition-colors" />
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                  </div>
                </label>
              </div>

              {/* Time slots */}
              {daySchedule.enabled && (
                <div className="p-4">
                  {daySchedule.slots.length === 0 ? (
                    <div className="text-center py-4">
                      <p className="text-sm text-[#9CA3AF] mb-3">Sin horarios definidos</p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addSlot(dayIndex)}
                        iconLeft={<Plus size={14} />}
                      >
                        Añadir horario
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {daySchedule.slots.map(slot => (
                        <div key={slot.id} className="flex items-center gap-2">
                          <input
                            type="time"
                            value={slot.start}
                            onChange={(e) => updateSlot(dayIndex, slot.id, "start", e.target.value)}
                            className="flex-1 h-10 border border-[#F0F0F0] rounded-xl px-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#E0E0E0]"
                          />
                          <span className="text-[#9CA3AF]">—</span>
                          <input
                            type="time"
                            value={slot.end}
                            onChange={(e) => updateSlot(dayIndex, slot.id, "end", e.target.value)}
                            className="flex-1 h-10 border border-[#F0F0F0] rounded-xl px-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#E0E0E0]"
                          />
                          {daySchedule.slots.length > 1 && (
                            <button
                              onClick={() => removeSlot(dayIndex, slot.id)}
                              className="w-8 h-8 rounded-lg hover:bg-[#FDECEA] flex items-center justify-center shrink-0"
                            >
                              <X size={14} className="text-[#E94C59]" />
                            </button>
                          )}
                        </div>
                      ))}

                      {daySchedule.slots.length < 3 && (
                        <button
                          onClick={() => addSlot(dayIndex)}
                          className="h-9 border-2 border-dashed border-[#E0E0E0] rounded-xl flex items-center justify-center gap-1.5 text-xs text-[#9CA3AF] hover:border-[#2C2C2C] hover:text-[#2C2C2C] transition-colors"
                        >
                          <Plus size={13} /> Añadir rango horario
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3">
          <Button fullWidth size="lg" loading={loading} onClick={handleSave}>
            Guardar horarios
          </Button>
          <button
            onClick={() => navigate("/provider/calendar")}
            className="h-12 text-sm text-[#6B7280]"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
