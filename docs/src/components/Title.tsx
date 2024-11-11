import { cn } from "../utils"
import type { ReactNode } from "react"

interface Props {
  variant?: "h1" | "h2" | "h3"
  children: ReactNode
  className?: string
}

export const Title = ({ children, variant = "h1", className = "" }: Props) => {
  if (variant === "h1") {
    return (
      <h1 className={cn("text-6xl font-bold text-white", className)}>
        {children}
      </h1>
    )
  }

  if (variant === "h2") {
    return (
      <h2 className={cn("text-4xl font-bold text-white", className)}>
        {children}
      </h2>
    )
  }

  if (variant === "h3") {
    return (
      <h3 className={cn("text-2xl font-bold text-white", className)}>
        {children}
      </h3>
    )
  }
}
