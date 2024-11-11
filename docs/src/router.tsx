import { createBrowserRouter, RouteObject } from "react-router-dom"
import { APP_ROOT } from "./config"
import { Home, NotFound, Instalation } from "./views"

export const routes = {
  home: {
    path: `${APP_ROOT}/`,
    element: <Home />,
  },
  instalation: {
    path: `${APP_ROOT}/docs/introduccion/instalacion`,
    element: <Instalation />,
  },
  notFound: {
    path: "*",
    element: <NotFound />,
  },
}

const allRoutes: RouteObject[] = Object.values(routes)

export const router = createBrowserRouter(allRoutes)
