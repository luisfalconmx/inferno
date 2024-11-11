import { Menu, Navbar } from "../components"
import { cn } from "../utils"
import type { ReactNode } from "react"

interface DocumentationLayoutProps {
  children: ReactNode
  className?: string
}

export const DocumentationLayout = ({
  children,
  className = "",
}: DocumentationLayoutProps) => {
  return (
    <>
      <Navbar position="sticky" />
      <div className="bg-gradient-to-br from-secondary via-primary/30 to-tertiary h-screen w-screen fixed top-0 left-0 right-0 bottom-0 m-auto -z-10" />
      <main className="grid grid-cols-[380px_1fr] min-h-screen max-w-screen-2xl mx-auto">
        <Menu />
        <main className={cn("py-16 px-20", className)}>{children}</main>
      </main>
    </>
  )
}
