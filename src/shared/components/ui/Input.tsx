import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helper?: string
  error?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, helper, error, iconLeft, iconRight, className = '', ...props },
    ref,
  ) => {
    const hasError = !!error
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm text-[#374151]">
            {label}
            {props.required && <span className="text-[#E94C59] ml-0.5">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {iconLeft && (
            <span className="absolute left-3 text-[#9CA3AF] pointer-events-none flex items-center">
              {iconLeft}
            </span>
          )}
          <input
            ref={ref}
            className={`
              w-full h-12 bg-white border rounded-xl px-4 text-[#111827] placeholder:text-[#9CA3AF]
              outline-none transition-all duration-150
              focus:border-[#E0E0E0] focus:ring-2 focus:ring-[#2C2C2C]/10
              disabled:opacity-50 disabled:bg-[#FAFAFA]
              ${hasError ? 'border-[#E94C59] ring-2 ring-[#E94C59]/10' : 'border-[#F0F0F0]'}
              ${iconLeft ? 'pl-10' : ''}
              ${iconRight ? 'pr-10' : ''}
              ${className}
            `}
            {...props}
          />
          {iconRight && (
            <span className="absolute right-3 text-[#9CA3AF] flex items-center">
              {iconRight}
            </span>
          )}
        </div>
        {(helper || error) && (
          <p
            className={`text-xs ${hasError ? 'text-[#E94C59]' : 'text-[#9CA3AF]'}`}
          >
            {error || helper}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
