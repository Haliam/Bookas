import { useState } from "react";
import { Wifi, RefreshCw } from "lucide-react";
import { Button } from "../../../shared/components/ui/Button";
import { motion } from "motion/react";

export function Offline() {
  const [retrying, setRetrying] = useState(false);

  const handleRetry = async () => {
    setRetrying(true);
    await new Promise(r => setTimeout(r, 2000));
    setRetrying(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8">
      {/* Animated icon */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="w-28 h-28 rounded-full bg-[#F3F4F6] flex items-center justify-center mb-8"
      >
        <Wifi size={48} className="text-[#D1D5DB]" strokeDasharray="5 3" />
      </motion.div>

      <h2 className="text-[#111827] text-center mb-2" style={{ fontSize: 24, fontWeight: 600 }}>
        Sin conexión
      </h2>
      <p className="text-sm text-[#9CA3AF] text-center mb-2">No connection · Check your internet</p>
      <p className="text-sm text-[#6B7280] text-center leading-relaxed mb-10 max-w-[260px]">
        Parece que no tienes conexión a internet. Revisa tu Wi-Fi o datos móviles e inténtalo de nuevo.
      </p>

      {/* Signal bars animation */}
      <div className="flex items-end gap-1.5 mb-10">
        {[16, 24, 32, 40].map((h, i) => (
          <motion.div
            key={i}
            animate={{ opacity: retrying ? [0.3, 1, 0.3] : 0.25 }}
            transition={{
              repeat: retrying ? Infinity : 0,
              duration: 0.6,
              delay: i * 0.1,
            }}
            className="w-4 rounded-t-sm"
            style={{
              height: h,
              background: retrying ? (i < 2 ? "#1BBF8A" : "#D1D5DB") : "#D1D5DB",
            }}
          />
        ))}
      </div>

      {/* Cached content note */}
      <div className="bg-white rounded-2xl p-4 w-full mb-6 shadow-[0_1px_6px_rgba(0,0,0,0.05)]">
        <p className="text-xs text-[#9CA3AF] mb-2">📦 Contenido en caché disponible</p>
        <div className="flex flex-col gap-1">
          {["Tus citas próximas", "Negocios visitados recientemente", "Tu perfil"].map(item => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1BBF8A]" />
              <span className="text-sm text-[#374151]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <Button
        fullWidth
        size="lg"
        variant="primary"
        loading={retrying}
        onClick={handleRetry}
        iconLeft={<RefreshCw size={18} />}
      >
        {retrying ? "Reconectando..." : "Reintentar conexión"}
      </Button>
    </div>
  );
}
