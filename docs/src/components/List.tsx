import { cn } from "../utils"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
}

export const List = ({ children, className }: Props) => {
  return <ul className={cn("list-disc pl-4", className)}>{children}</ul>
}
