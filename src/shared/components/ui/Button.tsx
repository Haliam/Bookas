import { ReactNode, ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:     "bg-[#2C2C2C] text-white hover:bg-[#1F1F1F] active:bg-[#1A1A1A] disabled:bg-[#9CA3AF]",
  secondary:   "bg-[#FAFAFA] text-[#2C2C2C] hover:bg-[#F5F5F5] active:bg-[#F0F0F0] border border-[#F0F0F0]",
  destructive: "bg-[#E94C59] text-white hover:bg-[#D93D4A] active:bg-[#C53E51]",
  ghost:       "bg-transparent text-[#2C2C2C] hover:bg-[#FAFAFA] active:bg-[#F5F5F5]",
  outline:     "bg-white border border-[#F0F0F0] text-[#2C2C2C] hover:bg-[#FAFAFA] active:bg-[#F5F5F5]",
};

const sizeStyles: Record<string, string> = {
  sm: "h-10 px-4 text-sm rounded-lg gap-1.5",
  md: "h-12 px-5 text-[15px] rounded-xl gap-2",
  lg: "h-14 px-6 text-base rounded-xl gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  iconLeft,
  iconRight,
  children,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center font-medium transition-all duration-150
        select-none touch-manipulation
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <Loader2 size={18} className="animate-spin" />
      ) : (
        <>
          {iconLeft && <span className="shrink-0">{iconLeft}</span>}
          {children}
          {iconRight && <span className="shrink-0">{iconRight}</span>}
        </>
      )}
    </button>
  );
}
