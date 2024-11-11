import { cn } from "../utils"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
}

export const Paragraph = ({ children, className }: Props) => {
  return <p className={cn("text-white text-lg", className)}>{children}</p>
}
