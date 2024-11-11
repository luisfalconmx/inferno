import { Link } from "react-router-dom"
import { Button } from "../components"
import { routes } from "../router"

export const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen w-screen relative">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-secondary -z-10" />
    <div className="text-center">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <p className="text-2xl">
        No pudimos encontrar la página que estás buscando.
      </p>
      <div className="mt-12">
        <Link to={routes.home.path}>
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    </div>
  </div>
)
