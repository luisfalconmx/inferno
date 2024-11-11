import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { App } from "./App"
import "./styles/main.css"

createRoot(document.getElementById("andromeda-docs-red")!).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>,
)
