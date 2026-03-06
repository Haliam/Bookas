import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { useApp } from "../../context/AppContext";

export function Register() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useApp();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setIsLoggedIn(true);
    navigate("/onboarding-provider");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#F4F4F4] flex items-center justify-center p-6">
      <div className="w-full max-w-[380px]">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-[#2C2C2C] font-bold tracking-tight mb-1" style={{ fontSize: 36, letterSpacing: '0.05em' }}>
            BOOKAS
          </h1>
          <p className="text-[#9CA3AF] text-xs tracking-[0.3em] uppercase mb-6">
            Book-Smart
          </p>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-[#111827] text-xl font-semibold mb-2">
            Crea tu cuenta
          </h2>
          <p className="text-[#6B7280] text-sm">
            Empieza gratis hoy
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] mb-6">
          <div className="space-y-5">
            <Input
              label="Nombre completo"
              placeholder="Tu nombre"
              iconLeft={<User size={18} className="text-[#9CA3AF]" />}
            />
            <Input
              label="Email"
              type="email"
              placeholder="tu@email.com"
              iconLeft={<Mail size={18} className="text-[#9CA3AF]" />}
            />
            <Input
              label="Teléfono (opcional)"
              type="tel"
              placeholder="+34 612 345 678"
              iconLeft={<Phone size={18} className="text-[#9CA3AF]" />}
            />
            <Input
              label="Contraseña"
              type={showPass ? "text" : "password"}
              placeholder="Mínimo 8 caracteres"
              iconLeft={<Lock size={18} className="text-[#9CA3AF]" />}
              iconRight={
                <button onClick={() => setShowPass(!showPass)} className="text-[#9CA3AF]">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />

            <Button 
              fullWidth 
              size="lg" 
              loading={loading} 
              onClick={handleRegister}
              className="mt-2"
            >
              Crear cuenta
            </Button>

            <p className="text-center text-[11px] text-[#9CA3AF] leading-relaxed">
              Al registrarte aceptas nuestros{" "}
              <span className="text-[#2C2C2C]">Términos</span> y{" "}
              <span className="text-[#2C2C2C]">Privacidad</span>
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center space-y-3">
          <p className="text-sm text-[#6B7280]">
            ¿Ya tienes cuenta?{" "}
            <button 
              onClick={() => navigate("/login")} 
              className="text-[#2C2C2C] font-medium hover:text-[#000000] transition-colors"
            >
              Inicia sesión
            </button>
          </p>
          
          <button
            onClick={() => navigate("/")}
            className="text-sm text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
          >
            ← Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}