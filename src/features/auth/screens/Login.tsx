import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Lock } from "lucide-react";
import { Button } from "../../../shared/components/ui/Button";
import { Input } from "../../../shared/components/ui/Input";
import { useApp } from "../../../app/providers/AppContext";

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
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[380px]">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-black font-bold tracking-tight mb-1" style={{ fontSize: 36, letterSpacing: "0.05em" }}>
            BOOKAS
          </h1>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-black text-xl font-semibold mb-2">
            Bienvenido
          </h2>
          <p className="text-black/70 text-sm">
            Inicia sesión para continuar
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-8 border border-black/15 shadow-[0_4px_24px_rgba(0,0,0,0.06)] mb-6">
          <div className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              iconLeft={<Mail size={18} className="text-black/60" />}
            />
            
            <Input
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              iconLeft={<Lock size={18} className="text-black/60" />}
            />

            {error && (
              <div className="text-black text-xs text-center bg-black/5 border border-black/20 rounded-lg py-2 px-3">
                {error}
              </div>
            )}

            <div className="text-right">
              <button
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-black hover:text-black/70 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <Button 
              fullWidth 
              size="lg" 
              loading={loading} 
              onClick={handleLogin}
              className="mt-2 bg-black text-white hover:bg-black/85"
            >
              Iniciar sesión
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center space-y-3">
          <p className="text-sm text-black/70">
            ¿No tienes cuenta?{" "}
            <button 
              onClick={() => navigate("/register")} 
              className="text-black font-medium hover:text-black/70 transition-colors"
            >
              Regístrate
            </button>
          </p>
          
          <button
            onClick={() => navigate("/")}
            className="text-sm text-black/55 hover:text-black/75 transition-colors"
          >
            ← Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}