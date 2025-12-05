import { cn } from "@/lib/utils"

interface CashewDecorationProps {
  className?: string
  size?: "small" | "medium" | "large"
}

export function CashewDecoration({ className, size = "medium" }: CashewDecorationProps) {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  }

  return (
    <div className={cn("pointer-events-none", sizeClasses[size], className)}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Cashew nut */}
        <path
          d="M35 25C35 20 40 15 50 15C60 15 70 20 75 30C80 40 80 50 75 60C70 70 60 75 50 75C40 75 30 70 25 60C20 50 25 30 35 25Z"
          fill="url(#cashew-gradient)"
          opacity="0.6"
        />
        {/* Cashew apple */}
        <ellipse cx="50" cy="35" rx="15" ry="20" fill="url(#apple-gradient)" opacity="0.5" />
        {/* Leaf accent */}
        <path
          d="M65 20C70 18 75 20 75 25C75 30 70 32 65 30C60 28 60 22 65 20Z"
          fill="url(#leaf-gradient)"
          opacity="0.4"
        />

        <defs>
          <linearGradient id="cashew-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4A460" />
            <stop offset="100%" stopColor="#D2691E" />
          </linearGradient>
          <linearGradient id="apple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB6C1" />
            <stop offset="100%" stopColor="#E91E8C" />
          </linearGradient>
          <linearGradient id="leaf-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#90EE90" />
            <stop offset="100%" stopColor="#32CD32" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
