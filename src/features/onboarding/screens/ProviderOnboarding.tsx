import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../../shared/components/ui/Button";

const SLIDES = [
  {
    emoji: "🏢",
    title: "Gestiona tu negocio",
    description: "Crea y administra todos tus negocios y servicios desde un solo lugar. Simple, rápido y organizado.",
    color: "#2C2C2C",
    bg: "#FAFAFA",
  },
  {
    emoji: "📅",
    title: "Recibe reservas automáticas",
    description: "Tus clientes pueden reservar 24/7. Tú controlas tu agenda, horarios y disponibilidad.",
    color: "#1BBF8A",
    bg: "#E8FBF4",
  },
  {
    emoji: "📊",
    title: "Crece con datos reales",
    description: "Analiza tus ingresos, servicios más populares y gestiona tu negocio con información en tiempo real.",
    color: "#F5B11F",
    bg: "#FEF7E0",
  },
];

export function ProviderOnboarding() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const isLastSlide = currentSlide === SLIDES.length - 1;
  const slide = SLIDES[currentSlide];

  const handleNext = () => {
    if (isLastSlide) {
      // Force business creation after onboarding
      navigate("/provider/companies/create");
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handleSkip = () => {
    navigate("/provider/companies/create");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Skip button */}
      {!isLastSlide && (
        <div className="p-5 flex justify-end">
          <button
            onClick={handleSkip}
            className="text-sm text-[#9CA3AF]"
          >
            Saltar
          </button>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-8">
        {/* Emoji illustration */}
        <div
          className="w-32 h-32 rounded-3xl flex items-center justify-center text-6xl mb-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
          style={{ background: slide.bg }}
        >
          {slide.emoji}
        </div>

        {/* Title */}
        <h1
          className="text-center mb-4"
          style={{ fontSize: 28, fontWeight: 600, color: slide.color }}
        >
          {slide.title}
        </h1>

        {/* Description */}
        <p className="text-center text-[#6B7280] max-w-[300px] leading-relaxed">
          {slide.description}
        </p>
      </div>

      {/* Bottom section */}
      <div className="p-8 pt-0">
        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {SLIDES.map((_, index) => (
            <div
              key={index}
              className="h-2 rounded-full transition-all"
              style={{
                width: currentSlide === index ? 24 : 8,
                background: currentSlide === index ? slide.color : "#D1D5DB",
              }}
            />
          ))}
        </div>

        {/* Action button */}
        <Button
          fullWidth
          size="lg"
          onClick={handleNext}
          style={{ background: slide.color }}
        >
          {isLastSlide ? "Crear mi primer negocio" : "Siguiente"}
        </Button>

        {isLastSlide && (
          <p className="text-center text-xs text-[#9CA3AF] mt-4">
            Necesitas al menos un negocio para comenzar
          </p>
        )}
      </div>
    </div>
  );
}
