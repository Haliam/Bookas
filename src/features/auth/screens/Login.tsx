import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Lock } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { useApp } from "../../context/AppContext";

export function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useApp();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setIsLoggedIn(true);
    navigate("/provider");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4FAF4] to-[#E5F2F2] flex items-center justify-center p-6">
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
            Bienvenido
          </h2>
          <p className="text-[#6B7280] text-sm">
            Inicia sesión para continuar
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] mb-6">
          <div className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              iconLeft={<Mail size={18} className="text-[#9CA3AF]" />}
            />
            
            <Input
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              iconLeft={<Lock size={18} className="text-[#9CA3AF]" />}
            />

            {error && (
              <div className="text-[#E94C59] text-xs text-center bg-[#FEF2F2] rounded-lg py-2 px-3">
                {error}
              </div>
            )}

            <div className="text-right">
              <button
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-[#2C2C2C] hover:text-[#000000] transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <Button 
              fullWidth 
              size="lg" 
              loading={loading} 
              onClick={handleLogin}
              className="mt-2"
            >
              Iniciar sesión
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center space-y-3">
          <p className="text-sm text-[#6B7280]">
            ¿No tienes cuenta?{" "}
            <button 
              onClick={() => navigate("/register")} 
              className="text-[#2C2C2C] font-medium hover:text-[#000000] transition-colors"
            >
              Regístrate
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