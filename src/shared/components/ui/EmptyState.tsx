import { ReactNode } from "react";
import { Button } from "./Button";

interface EmptyStateProps {
  icon?: ReactNode;
  emoji?: string;
  title: string;
  description?: string;
  cta?: { label: string; onClick: () => void };
}

export function EmptyState({ icon, emoji, title, description, cta }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 text-center gap-4">
      {emoji && (
        <div className="w-16 h-16 rounded-full bg-[#FAFAFA] flex items-center justify-center text-3xl">
          {emoji}
        </div>
      )}
      {icon && (
        <div className="w-16 h-16 rounded-full bg-[#FAFAFA] flex items-center justify-center text-[#2C2C2C]">
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[#111827]">{title}</h3>
        {description && <p className="text-sm text-[#9CA3AF]">{description}</p>}
      </div>
      {cta && (
        <Button size="md" onClick={cta.onClick} className="mt-2">
          {cta.label}
        </Button>
      )}
    </div>
  );
}
