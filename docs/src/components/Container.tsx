import { cn } from "../utils"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className = "" }: Props) => (
  <div className={cn("max-w-screen-2xl mx-auto", className)}>{children}</div>
)
