import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export function ForgotPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#F4F4F4] flex flex-col items-center justify-center px-6">
        <div className="w-20 h-20 rounded-full bg-[#E8FBF4] flex items-center justify-center mb-6">
          <CheckCircle size={36} className="text-[#1BBF8A]" />
        </div>
        <h2 className="text-[#111827] text-center mb-2" style={{ fontSize: 22, fontWeight: 600 }}>
          ¡Revisa tu email!
        </h2>
        <p className="text-sm text-[#9CA3AF] text-center mb-8 max-w-[260px]">
          Hemos enviado un enlace de recuperación a tu correo electrónico.
        </p>
        <Button fullWidth onClick={() => navigate("/login")}>
          Volver al inicio de sesión
        </Button>
        <button className="mt-4 text-sm text-[#9CA3AF]" onClick={handleSend}>
          Reenviar email
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#F4F4F4] flex flex-col">
      <div className="px-6 pt-14 pb-8">
        <button onClick={() => navigate("/login")} className="text-[#2C2C2C] text-sm mb-8 block">
          ← Volver al login
        </button>
        <div className="w-12 h-12 rounded-2xl bg-[#FAFAFA] flex items-center justify-center mb-5">
          <Mail size={24} className="text-[#6B7280]" />
        </div>
        <h1 className="text-[#111827] mb-1" style={{ fontSize: 26, fontWeight: 600 }}>
          ¿Olvidaste tu contraseña?
        </h1>
        <p className="text-sm text-[#9CA3AF]">No problem · Te enviamos un enlace de recuperación</p>
      </div>

      <div className="flex-1 bg-white rounded-t-3xl px-6 pt-8 pb-10 shadow-[0_-2px_20px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col gap-4 mb-8">
          <Input
            label="Email"
            type="email"
            placeholder="tu@email.com"
            iconLeft={<Mail size={16} />}
            helper="Introduce el email con el que te registraste"
          />
        </div>
        <Button fullWidth size="lg" loading={loading} onClick={handleSend}>
          Enviar enlace de recuperación
        </Button>
      </div>
    </div>
  );
}
