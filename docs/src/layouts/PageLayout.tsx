import { Navbar, Footer } from "../components"
import type { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Navbar position="absolute" transparent dark />
      {children}
      <Footer />
    </>
  )
}
