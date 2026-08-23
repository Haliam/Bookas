import { Link } from "react-router";
import { useApp } from "../../../app/providers/AppContext";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Buenos días";
  if (hour < 20) return "Buenas tardes";
  return "Buenas noches";
}

interface BusinessHeaderProps {
  businessName: string;
}

export function BusinessHeader({ businessName }: BusinessHeaderProps) {
  const { user } = useApp();
  const firstName = user.name.split(" ")[0];

  return (
    <div className="flex items-center justify-between px-5 pt-14 pb-6">
      <div>
        <p className="text-[#2C2C2C] text-xl font-semibold">
          {getGreeting()}, {firstName}
        </p>
        <p className="text-[#6B7280] text-sm mt-0.5">{businessName}</p>
      </div>
      <Link
        to="/provider/profile"
        aria-label="Ir a mi perfil"
        className="rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C2C2C]"
      >
        <img
          src={user.avatar}
          alt={`Foto de perfil de ${user.name}`}
          className="w-9 h-9 rounded-full object-cover"
        />
      </Link>
    </div>
  );
}
