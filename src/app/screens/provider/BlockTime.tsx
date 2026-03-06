import { useState } from "react";
import { useNavigate } from "react-router";
import { Calendar as CalendarIcon, Clock, AlertCircle } from "lucide-react";
import { TopBar } from "../../components/navigation/TopBar";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

type BlockType = "single" | "recurring";

export function BlockTime() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [blockType, setBlockType] = useState<BlockType>("single");
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    startTime: "09:00",
    endTime: "10:00",
    reason: "",
    allDay: false,
  });

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    navigate("/provider/calendar");
  };

  const isFormValid = form.startDate && (blockType === "single" || form.endDate);

  return (
    <div className="min-h-screen bg-white">
      <TopBar title="Bloquear tiempo" back light />

      <div className="px-5 py-4">
        {/* Info banner */}
        <div className="bg-[#FEF7E0] rounded-2xl p-4 mb-5 flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center shrink-0">
            <AlertCircle size={18} className="text-[#F5B11F]" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-[#111827] mb-1">
              Bloquea tu agenda
            </p>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Durante el tiempo bloqueado, los clientes no podrán reservar citas. Ideal para vacaciones, días festivos o descansos.
            </p>
          </div>
        </div>

        {/* Block type selector */}
        <div className="bg-white rounded-2xl p-1 shadow-[0_1px_6px_rgba(0,0,0,0.05)] mb-5 flex gap-1">
          {(["single", "recurring"] as BlockType[]).map(type => (
            <button
              key={type}
              onClick={() => setBlockType(type)}
              className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                blockType === type
                  ? "bg-[#F5B11F] text-white"
                  : "text-[#6B7280]"
              }`}
            >
              {type === "single" ? "Fecha específica" : "Rango de fechas"}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Date inputs */}
          <div className={blockType === "recurring" ? "grid grid-cols-2 gap-3" : ""}>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-[#374151]">
                {blockType === "single" ? "Fecha" : "Desde"} *
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={form.startDate}
                  onChange={e => setForm({ ...form, startDate: e.target.value })}
                  className="w-full h-12 bg-white border border-[#F0F0F0] rounded-xl pl-11 pr-4 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#E0E0E0]"
                />
                <CalendarIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              </div>
            </div>

            {blockType === "recurring" && (
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#374151]">Hasta *</label>
                <div className="relative">
                  <input
                    type="date"
                    value={form.endDate}
                    onChange={e => setForm({ ...form, endDate: e.target.value })}
                    min={form.startDate}
                    className="w-full h-12 bg-white border border-[#F0F0F0] rounded-xl pl-11 pr-4 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#E0E0E0]"
                  />
                  <CalendarIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                </div>
              </div>
            )}
          </div>

          {/* All day toggle */}
          <div className="bg-white rounded-2xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] flex items-center justify-center">
                <Clock size={16} className="text-[#6B7280]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#111827]">Todo el día</p>
                <p className="text-xs text-[#9CA3AF]">Bloquear día completo</p>
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={form.allDay}
                  onChange={e => setForm({ ...form, allDay: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#F0F0F0] rounded-full peer-checked:bg-[#2C2C2C] transition-colors" />
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
              </div>
            </label>
          </div>

          {/* Time range (if not all day) */}
          {!form.allDay && (
            <div className="bg-white rounded-2xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)]">
              <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-3">Rango horario</p>
              <div className="flex items-center gap-2">
                <input
                  type="time"
                  value={form.startTime}
                  onChange={e => setForm({ ...form, startTime: e.target.value })}
                  className="flex-1 h-10 border border-[#F0F0F0] rounded-xl px-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#E0E0E0]"
                />
                <span className="text-[#9CA3AF]">—</span>
                <input
                  type="time"
                  value={form.endTime}
                  onChange={e => setForm({ ...form, endTime: e.target.value })}
                  className="flex-1 h-10 border border-[#F0F0F0] rounded-xl px-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#E0E0E0]"
                />
              </div>
            </div>
          )}

          {/* Reason */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-[#374151]">Motivo (opcional)</label>
            <textarea
              value={form.reason}
              onChange={e => setForm({ ...form, reason: e.target.value })}
              placeholder="Ej: Vacaciones, día festivo, formación..."
              className="w-full h-24 bg-white border border-[#F0F0F0] rounded-xl p-4 text-sm text-[#2C2C2C] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#E0E0E0] resize-none"
            />
          </div>
        </div>

        {/* Summary */}
        {isFormValid && (
          <div className="bg-white rounded-2xl p-4 mt-5 shadow-[0_1px_6px_rgba(0,0,0,0.05)]">
            <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-2">Resumen</p>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-[#6B7280]">Período:</span>
                <span className="text-[#111827] font-medium">
                  {blockType === "single"
                    ? new Date(form.startDate + "T12:00").toLocaleDateString("es-ES")
                    : `${new Date(form.startDate + "T12:00").toLocaleDateString("es-ES")} - ${new Date(form.endDate + "T12:00").toLocaleDateString("es-ES")}`
                  }
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#6B7280]">Horario:</span>
                <span className="text-[#111827] font-medium">
                  {form.allDay ? "Todo el día" : `${form.startTime} - ${form.endTime}`}
                </span>
              </div>
              {form.reason && (
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">Motivo:</span>
                  <span className="text-[#111827] font-medium">{form.reason}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3">
          <Button
            fullWidth
            size="lg"
            loading={loading}
            disabled={!isFormValid}
            onClick={handleSubmit}
          >
            Bloquear tiempo
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
