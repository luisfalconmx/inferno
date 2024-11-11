import { useEffect } from "react"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const App = ({ children }: Props) => {
  useEffect(() => {
    const htmltag = document.querySelector("html")
    const bodytag = document.querySelector("body")

    if (htmltag) {
      htmltag.classList.add("scroll-smooth")
    }

    if (bodytag) {
      bodytag.classList.add("bg-black")
      bodytag.classList.add("text-white")
    }
  }, [])

  return children
}
