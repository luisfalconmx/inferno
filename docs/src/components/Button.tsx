import { cn } from "../utils"
import type { ReactNode } from "react"

interface Props {
  variant?: "primary" | "secondary"
  children: ReactNode
  onClick?: () => void
  className?: string
}

export const Button = ({
  children,
  variant = "primary",
  onClick,
  className,
}: Props) => (
  <button
    onClick={onClick}
    className={cn(
      "text-white px-8 py-4 rounded uppercase font-bold cursor-pointer",
      {
        "bg-primary": variant === "primary",
        "bg-neutral-800": variant === "secondary",
      },
      className,
    )}
  >
    {children}
  </button>
)
